# MCP Server Setup

This folder contains setup instructions for each MCP server used with this repo's `.clinerules` configuration.

## Quick install (all Tier 1 servers)

```bash
# GitHub
npm install -g @modelcontextprotocol/server-github

# Brave Search
npm install -g @modelcontextprotocol/server-brave-search

# Fetch
npm install -g @modelcontextprotocol/server-fetch

# Memory
npm install -g @modelcontextprotocol/server-memory

# Filesystem
npm install -g @modelcontextprotocol/server-filesystem
```

Then copy `cline_mcp_settings.json` to:
- **macOS:** `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Windows:** `%APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`

Fill in your API keys and restart VS Code.

## Servers

| Server | Tier | Doc |
|---|---|---|
| GitHub | 1 — Essential | [github.md](github.md) |
| Brave Search | 1 — Essential | [brave-search.md](brave-search.md) |
| Fetch | 1 — Essential | [fetch.md](fetch.md) |
| Memory | 1 — Essential | [memory.md](memory.md) |
| Filesystem | 1 — Essential | [filesystem.md](filesystem.md) |
| PostgreSQL | 2 — Optional | [postgres.md](postgres.md) |
| Puppeteer | 2 — Optional | [puppeteer.md](puppeteer.md) |
| Docker | 2 — Optional | [docker.md](docker.md) |
