# PostgreSQL MCP

Gives Cline read access to a PostgreSQL database — inspect schemas, run queries, diagnose performance issues.

## Install

```bash
npm install -g @modelcontextprotocol/server-postgres
```

## Config (`cline_mcp_settings.json`)

```json
"postgres": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-postgres",
    "postgresql://username:password@localhost:5432/your_database"
  ]
}
```

Replace the connection string with your database URL. Use a **read-only user** — Cline should never have write access to production.

## What it unlocks

- `database-optimizer` can inspect real schemas and indexes, not guessed ones
- `backend-architect` can verify that queries are hitting the right tables
- `data-engineer` can analyze table sizes, row counts, and data distributions
- `reality-checker` can verify that data actually matches what the code expects

## Security note

- Always use a read-only database user for the MCP connection
- Never connect to production directly — use a replica or staging DB
- Store the connection string as an env var, not hardcoded
