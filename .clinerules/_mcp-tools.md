---
description: MCP tool awareness — which tools are available, when to use them, and which agents they pair with
alwaysApply: true
---

# Available MCP Tools

These MCP servers are configured in Cline. Use them autonomously — do not ask the user to perform actions these tools can do for you.

## Tier 1 — Always available

### GitHub (`github`)
Tools: `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_issue`, `create_pull_request`, `list_pull_requests`, `get_pull_request`, `merge_pull_request`, `list_commits`, `search_code`, `list_issues`, `add_issue_comment`

Use for: reading/writing repo files, opening PRs, managing issues, searching code across repos.
Agents: `git-workflow-master`, `requesting-code-review`, `finishing-a-development-branch`, `incident-response-commander`

### Brave Search (`brave-search`)
Tools: `brave_web_search`, `brave_local_search`

Use for: looking up documentation, researching libraries, checking current best practices, finding error solutions, competitive research.
Agents: `seo-specialist`, `trend-researcher`, `reality-checker`, `ai-citation-strategist`, `reddit-community-builder`

### Fetch (`fetch`)
Tools: `fetch`

Use for: reading any URL — API docs, web pages, JSON endpoints, raw GitHub files. Use before GitHub MCP when you just need to read a public URL.
Agents: all agents that need to verify external information

### Memory (`memory`)
Tools: `create_entities`, `create_relations`, `add_observations`, `search_nodes`, `read_graph`, `open_nodes`, `delete_entities`, `delete_observations`, `delete_relations`

Use for: storing project context, user preferences, decisions made, patterns that worked, things to remember across sessions. **Always check memory at session start.** Store anything worth remembering at session end.
Agents: all agents — memory makes every agent smarter over time

### Filesystem (`filesystem`)
Tools: `read_file`, `read_multiple_files`, `write_file`, `edit_file`, `create_directory`, `list_directory`, `directory_tree`, `move_file`, `search_files`, `get_file_info`

Use for: explicit file operations outside the current workspace, reading config files, batch file processing.

## Tier 2 — Install when needed

### PostgreSQL (`postgres`)
Tools: `query`

Use for: inspecting schemas, running diagnostic queries, analyzing slow queries, verifying data.
Agents: `database-optimizer`, `backend-architect`, `data-engineer`
Setup: `mcp/postgres.md`

### Puppeteer (`puppeteer`)
Tools: `puppeteer_navigate`, `puppeteer_screenshot`, `puppeteer_click`, `puppeteer_fill`, `puppeteer_evaluate`

Use for: browser automation, UI testing, scraping, verifying that pages render correctly.
Agents: `accessibility-auditor`, `api-tester`, `performance-benchmarker`
Setup: `mcp/puppeteer.md`

### Docker (`docker`)
Tools: `list_containers`, `get_logs`, `exec_command`, `inspect_container`, `list_images`

Use for: checking container health, reading logs, debugging running services.
Agents: `devops-automator`, `sre-site-reliability-engineer`, `infrastructure-maintainer`
Setup: `mcp/docker.md`

## Tool selection rules

1. **Prefer specific tools over generic ones** — use `github` to read a repo file rather than `fetch`
2. **Check memory first** on any task that might have prior context
3. **Search before assuming** — use `brave_web_search` to verify current library versions, APIs, or best practices before writing code
4. **Store decisions** — after any significant choice (architecture, library selection, approach), write it to memory
5. **Tier 2 tools are optional** — if a Tier 2 tool isn't installed, proceed without it and note what the user could unlock by installing it
