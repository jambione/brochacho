# Fetch MCP

Gives Cline the ability to read any URL — API docs, web pages, JSON endpoints, raw files. No API key needed.

## Install

```bash
npm install -g @modelcontextprotocol/server-fetch
```

## Config (`cline_mcp_settings.json`)

```json
"fetch": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-fetch"]
}
```

## What it unlocks

- Read any public documentation page before generating code against an API
- Pull raw files from GitHub, CDNs, or public endpoints
- Verify that a URL or endpoint is reachable and returns expected content
- Agents can read changelogs, release notes, and migration guides autonomously

## Note

Use GitHub MCP for repo file access — Fetch is best for public URLs and external APIs.
