# Puppeteer MCP

Gives Cline a real browser — navigate pages, take screenshots, click elements, fill forms, run JS.

## Install

```bash
npm install -g @modelcontextprotocol/server-puppeteer
```

## Config (`cline_mcp_settings.json`)

```json
"puppeteer": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
}
```

## What it unlocks

- `accessibility-auditor` can actually navigate and screenshot your UI to find issues
- `performance-benchmarker` can measure real page load times
- `api-tester` can test flows that require browser interaction
- `reality-checker` can verify that a deployed feature looks and works as expected
- Screenshot any page for visual regression or design review

## Note

Puppeteer launches a Chromium instance on your machine. If you need cross-browser testing or headless CI, consider `mcp-server-playwright` instead (same config pattern).
