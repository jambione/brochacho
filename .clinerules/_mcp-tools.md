---
description: MCP tool awareness — which tools are available, when to use them, and which agents they pair with
alwaysApply: true
---

# Available MCP Tools

These MCP servers are configured in Cline. Use them autonomously — do not ask the user to perform actions these tools can do for you.

## Architecture

We use a **hybrid approach**:
- **COMPOSIO** (cloud) — Unifies 1000+ toolkits via single proxy connection
- **Local servers** — For tools that operate on your machine

## COMPOSIO (Primary)

COMPOSIO provides unified access to 1000+ toolkits including:
- **GitHub** — Repository management, issues, PRs, code search
- **Gmail/Email** — Email management
- **Slack** — Team communication
- **Notion** — Document management
- **And 1000+ more** — See COMPOSIO dashboard

Use COMPOSIO for:
- External API integrations (GitHub, Gmail, Slack, etc.)
- Web searches and fetches
- Cloud service integrations
- Image generation (DALL-E, Midjourney, etc.)

## Local Servers

### Essential Local

| Server | Tools | Use For |
|--------|-------|---------|
| Filesystem (`filesystem`) | `read_file`, `read_text_file`, `write_file`, `edit_file`, `create_directory`, `list_directory`, `directory_tree`, `move_file`, `search_files`, `get_file_info` | File operations outside workspace, batch file processing |
| Memory (`memory`) | `create_entities`, `create_relations`, `add_observations`, `search_nodes`, `read_graph`, `open_nodes`, `delete_entities`, `delete_observations`, `delete_relations` | Storing project context, user preferences, decisions across sessions |
| Docker (`docker`) | `list_containers`, `get_logs`, `exec_command`, `inspect_container`, `list_images` | Container health, logs, debugging services |
| Tavily (`tavily`) | `tavily_search` | Web search with AI-optimized results |

### Optional Local

| Server | Tools | Use For | Setup |
|--------|-------|---------|-------|
| Puppeteer (`puppeteer`) | `puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`, `puppeteer_fill`, `puppeteer_evaluate` | Browser automation, UI testing, scraping | `mcp/puppeteer.md` |
| PostgreSQL (`postgres`) | `query` | Database inspection, diagnostic queries | `mcp/postgres.md` |
| SQLite (`sqlite`) | - | Local database operations | `mcp/sqlite.md` |
| Redis (`redis`) | - | Cache operations | `mcp/redis.md` |

## Tool Selection Rules

1. **Use COMPOSIO for cloud integrations** — GitHub, Gmail, Slack, search, web fetching
2. **Use local servers for machine operations** — Filesystem, Docker, databases, browser automation
3. **Check memory first** — Always call `read_graph` at session start; store decisions at session end
4. **Prefer specific tools** — Use the right tool for the job, don't force cloud/local mismatch

## Agents

| Category | Agents |
|----------|--------|
| Engineering | senior-developer, frontend-developer, backend-architect, software-architect |
| Design | ui-designer, ux-architect, brand-guardian |
| Marketing | seo-specialist, content-creator, social-media-strategist |
| Product | product-manager, sprint-prioritizer, feedback-synthesizer |
| Testing | api-tester, accessibility-auditor, performance-benchmarker |
| DevOps | devops-automator, sre-site-reliability-engineer, infrastructure-maintainer |
| Database | database-optimizer, backend-architect, data-engineer |
| Specialized | agents-orchestrator, mcp-builder, compliance-auditor |

## Notes

- COMPOSIO API key: `${COMPOSIO_API_KEY}` (set in `.clineagent/mcp/.env`)
- Tavily API key: `${TAVILY_API_KEY}` (set in `.clineagent/mcp/.env`)
- Local servers require `npx` and respective npm packages installed
- Restart VS Code after editing `cline_mcp_settings.json`
