# Docker MCP

Gives Cline visibility into running Docker containers — logs, status, exec commands.

## Install

```bash
npm install -g @modelcontextprotocol/server-docker
```

## Config (`cline_mcp_settings.json`)

```json
"docker": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-docker"]
}
```

Requires Docker to be running on your machine.

## What it unlocks

- `devops-automator` can inspect container health without leaving Cline
- `sre-site-reliability-engineer` can pull logs during an incident
- `infrastructure-maintainer` can check which services are up/down
- `systematic-debugging` skill can read container logs as part of root cause analysis

## Note

This MCP provides read access and exec by default. Restrict exec permissions if you're concerned about Cline running arbitrary commands inside containers.
