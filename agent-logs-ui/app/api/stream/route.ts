import fs from "fs";
import path from "path";

const LOG_FILE = "/tmp/agent-logs.jsonl";

function ensureLogFile() {
  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, "");
  }
}

export async function GET() {
  ensureLogFile();

  const encoder = new TextEncoder();
  let stopped = false;
  let watcher: fs.FSWatcher | null = null;
  let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  let pollTimer: ReturnType<typeof setTimeout> | null = null;

  const stream = new ReadableStream({
    start(controller) {
      const send = (data: string) => {
        try {
          controller.enqueue(encoder.encode(`data: ${data}\n\n`));
        } catch {
          // controller already closed
        }
      };

      // Track how many bytes we've already read
      let bytesRead = fs.statSync(LOG_FILE).size;

      const readNewLines = () => {
        try {
          const stat = fs.statSync(LOG_FILE);
          if (stat.size <= bytesRead) return;

          const fd = fs.openSync(LOG_FILE, "r");
          const length = stat.size - bytesRead;
          const buf = Buffer.alloc(length);
          fs.readSync(fd, buf, 0, length, bytesRead);
          fs.closeSync(fd);
          bytesRead = stat.size;

          const chunk = buf.toString("utf8");
          const lines = chunk.split("\n").filter((l) => l.trim());
          for (const line of lines) {
            try {
              JSON.parse(line); // validate it's valid JSON
              send(line);
            } catch {
              // skip malformed lines
            }
          }
        } catch {
          // file may have been recreated — reset position
          try {
            bytesRead = fs.statSync(LOG_FILE).size;
          } catch {
            bytesRead = 0;
          }
        }
      };

      // 30s heartbeat
      heartbeatTimer = setInterval(() => {
        if (!stopped) send(JSON.stringify({ type: "ping" }));
      }, 30_000);

      // Try fs.watch first, fall back to polling
      try {
        watcher = fs.watch(LOG_FILE, () => {
          if (!stopped) readNewLines();
        });
        watcher.on("error", () => {
          // fall back to polling
          watcher = null;
          const poll = () => {
            if (stopped) return;
            readNewLines();
            pollTimer = setTimeout(poll, 500);
          };
          pollTimer = setTimeout(poll, 500);
        });
      } catch {
        // fs.watch unavailable — use polling
        const poll = () => {
          if (stopped) return;
          readNewLines();
          pollTimer = setTimeout(poll, 500);
        };
        pollTimer = setTimeout(poll, 500);
      }
    },
    cancel() {
      stopped = true;
      if (heartbeatTimer) clearInterval(heartbeatTimer);
      if (pollTimer) clearTimeout(pollTimer);
      if (watcher) {
        try {
          watcher.close();
        } catch {
          // ignore
        }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
