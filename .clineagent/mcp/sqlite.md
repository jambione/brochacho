# SQLite MCP Server

Local SQLite database operations.

## Install

```bash
npm install -g @mokei/mcp-sqlite
```

## Configuration

1. Create or specify a SQLite database file path
2. Add to `.env`:

```bash
SQLITE_DB_PATH=/path/to/your/database.db
```

3. Add to Cline MCP settings:

```json
"sqlite": {
  "command": "npx",
  "args": ["-y", "@mokei/mcp-sqlite", "${SQLITE_DB_PATH}"]
}
```

## Usage

- Execute SQL queries
- Browse database schema
- Create/modify tables
- Insert/update/delete records
- Transaction support

## Security

- Local file access only
- No network exposure
- Careful with write operations

## Database Creation

To create a new database, just specify a path that doesn't exist:

```bash
# Creates new database at ~/myapp.db
SQLITE_DB_PATH=~/myapp.db