# Brave Search MCP

Gives Cline real-time web search — documentation lookup, library research, error diagnosis, competitive intel.

## Install

```bash
npm install -g @modelcontextprotocol/server-brave-search
```

## Get an API key

1. Go to brave.com/search/api
2. Sign up for the free tier (2,000 queries/month) or paid
3. Copy your API key from the dashboard

## Config (`cline_mcp_settings.json`)

```json
"brave-search": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-brave-search"],
  "env": {
    "BRAVE_API_KEY": "your_api_key_here"
  }
}
```

## What it unlocks

- Agents verify current library versions before writing code (no outdated advice)
- `reality-checker` can actually fact-check claims against live sources
- `seo-specialist` can research real keyword data and competitor content
- `trend-researcher` can pull current market intelligence
- Any agent can look up error messages, stack traces, or docs on the fly
