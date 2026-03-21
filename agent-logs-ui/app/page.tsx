"use client";

import { useEffect, useRef, useState } from "react";

interface LogLine {
  ts: string;
  msg: string;
  level?: string;
}

export default function Home() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [running, setRunning] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const readerRef = useRef<ReadableStreamDefaultReader<Uint8Array> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const start = async () => {
    setLogs([]);
    setRunning(true);

    const res = await fetch("/api/stream");
    if (!res.body) return;

    const reader = res.body.getReader();
    readerRef.current = reader;
    const decoder = new TextDecoder();
    let buffer = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";

        for (const part of parts) {
          const line = part.replace(/^data: /, "").trim();
          if (!line) continue;
          try {
            const parsed = JSON.parse(line);
            // skip heartbeat pings
            if (parsed.type === "ping") continue;
            setLogs((prev) => [...prev, parsed as LogLine]);
          } catch {
            // ignore malformed lines
          }
        }
      }
    } catch {
      // stream cancelled or network error — expected on stop
    }

    setRunning(false);
  };

  const stop = () => {
    readerRef.current?.cancel();
    readerRef.current = null;
    setRunning(false);
  };

  const levelColor = (level?: string) => {
    switch (level) {
      case "error": return "text-red-400";
      case "warn":  return "text-yellow-400";
      default:      return "text-green-400";
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center p-8">
      <div className="w-full max-w-3xl flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-wide text-gray-200">
            Agent Logs
          </h1>
          <button
            onClick={running ? stop : start}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              running
                ? "bg-red-700 hover:bg-red-600 text-white"
                : "bg-green-700 hover:bg-green-600 text-white"
            }`}
          >
            {running ? "Stop" : "Start"}
          </button>
        </div>

        <div className="bg-black rounded-lg border border-gray-800 h-[70vh] overflow-y-auto p-4 font-mono text-sm">
          {logs.length === 0 && !running && (
            <p className="text-gray-600">Press Start to stream agent logs...</p>
          )}
          {logs.map((line, i) => (
            <div key={i} className="flex gap-3 leading-6">
              <span className="text-gray-500 shrink-0">{line.ts}</span>
              <span className={levelColor(line.level)}>{line.msg}</span>
            </div>
          ))}
          {running && (
            <div className="flex gap-3 leading-6 text-gray-500 animate-pulse">
              <span>...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* How to send logs */}
        <div className="border border-gray-800 rounded-lg p-4 flex flex-col gap-3 text-sm">
          <h2 className="text-gray-400 font-medium">How to send logs</h2>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-xs uppercase tracking-wider">HTTP POST</span>
            <pre className="bg-gray-900 rounded p-3 text-gray-300 overflow-x-auto whitespace-pre-wrap">{`curl -X POST http://localhost:3000/api/log \\
  -H "Content-Type: application/json" \\
  -d '{"msg":"Tool called: github_list_repos","level":"info"}'`}</pre>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-xs uppercase tracking-wider">Shell pipe</span>
            <pre className="bg-gray-900 rounded p-3 text-gray-300 overflow-x-auto">{`echo "Starting agent..." | ./scripts/log.sh
some-command 2>&1 | ./scripts/log.sh`}</pre>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-xs uppercase tracking-wider">Direct append</span>
            <pre className="bg-gray-900 rounded p-3 text-gray-300 overflow-x-auto">{`echo '{"ts":"2026-01-01T00:00:00Z","msg":"hello"}' >> /tmp/agent-logs.jsonl`}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}
