import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

const LOG_FILE = "/tmp/agent-logs.jsonl";

export async function POST(req: NextRequest) {
  let body: { msg?: string; level?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.msg) {
    return NextResponse.json({ error: "msg is required" }, { status: 400 });
  }

  const entry = JSON.stringify({
    ts: new Date().toISOString(),
    msg: body.msg,
    ...(body.level ? { level: body.level } : {}),
  });

  fs.appendFileSync(LOG_FILE, entry + "\n");

  return NextResponse.json({ ok: true });
}
