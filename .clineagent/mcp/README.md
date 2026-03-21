# MCP Servers for Cline

This directory contains configuration for Model Context Protocol (MCP) servers that extend Cline's capabilities.

## Architecture

We use a **hybrid approach**:
- **COMPOSIO** (cloud) — Unifies access to 1000+ toolkits via a single proxy connection
- **Local servers** — For tools that operate on your machine

## Quick Start

1. Copy `.env.example` to `.env` (if not already present)
2. Fill in your API keys and credentials
3. Restart VS Code to reload MCP configuration

## COMPOSIO (Primary Cloud Proxy)

| Server | Description |
|--------|-------------|
| COMPOSIO | Unified access to GitHub, Gmail, Slack, Notion, and 1000+ other toolkits |

### COMPOSIO Setup

1. Sign up at [platform.composio.dev](https://platform.composio.dev)
2. Configure your desired integrations (toolkits) in the COMPOSIO dashboard
3. Add your API key to `.env`:
   ```
   COMPOSIO_API_KEY=your_api_key_here
   ```

### COMPOSIO Toolkits Available

COMPOSIO provides access to 1000+ toolkits including:
- **Development:** GitHub, GitLab, Jira, Linear
- **Productivity:** Gmail, Google Drive, Slack, Notion, Calendar
- **Social:** Twitter/X, LinkedIn, Instagram
- **Commerce:** Shopify, Stripe, Salesforce
- **AI/ML:** OpenAI, Anthropic, Image Generation (DALL-E, Midjourney)

## Local Servers

These servers run on your machine and are kept separate from COMPOSIO:

### Essential Local

| Server | Package | Description |
|--------|---------|-------------|
| Filesystem | `@modelcontextprotocol/server-filesystem` | File operations outside workspace |
| Memory | `@modelcontextprotocol/server-memory` | Knowledge graph for session memory |
| Docker | `@hypnosis/docker-mcp-server` | Container management |

### Optional Local

| Server | Package | Description |
|--------|---------|-------------|
| Puppeteer | `@modelcontextprotocol/server-puppeteer` | Browser automation |
| PostgreSQL | `@modelcontextprotocol/server-postgres` | Database operations |
| SQLite | `@mokei/mcp-sqlite` | Local database |
| Redis | `@modelcontextprotocol/server-redis` | Cache operations |

## Install Local Servers

```bash
npm install -g \
  @modelcontextprotocol/server-filesystem \
  @modelcontextprotocol/server-memory \
  @modelcontextprotocol/server-puppeteer \
  @modelcontextprotocol/server-postgres \
  @modelcontextprotocol/server-redis \
  @hypnosis/docker-mcp-server \
  @mokei/mcp-sqlite
```

## Documentation

### Local Server Setup
- `filesystem.md` - File operations
- `memory.md` - Knowledge graph
- `docker.md` - Container management
- `puppeteer.md` - Browser automation
- `postgres.md` - PostgreSQL database
- `sqlite.md` - SQLite database
- `redis.md` - Redis cache

### Archived (Now via COMPOSIO)
- `github.md` - GitHub integration → COMPOSIO
- `brave-search.md` - Search → COMPOSIO
- `fetch.md` - HTTP fetching → COMPOSIO
- `everart.md` - Image generation → COMPOSIO
- `google-drive.md` - Google Drive → COMPOSIO
- `linear.md` - Linear → COMPOSIO

## Configuration File

All servers are configured in `cline_mcp_settings.json`. After editing, restart VS Code to apply changes.