#!/bin/bash
# Usage: echo "hello" | ./scripts/log.sh
# Or:    some-command 2>&1 | ./scripts/log.sh
# Appends each line as a JSON entry to /tmp/agent-logs.jsonl

LOG_FILE="/tmp/agent-logs.jsonl"

while IFS= read -r line; do
  echo "{\"ts\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\",\"msg\":\"$line\"}" >> "$LOG_FILE"
done
