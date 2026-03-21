# Filesystem MCP

Gives Cline explicit, permission-controlled file system access with path whitelisting.

## Install

```bash
npm install -g @modelcontextprotocol/server-filesystem
```

## Config (`cline_mcp_settings.json`)

```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/Users/YOUR_USERNAME/Projects",
    "/Users/YOUR_USERNAME/Documents"
  ]
}
```

Replace the paths with the directories you want to grant access to. Only paths listed here are accessible.

## What it unlocks

- Batch operations across multiple files and directories
- Reading config files outside the current workspace
- Moving, renaming, and reorganizing project files
- Searching for patterns across a directory tree
- The `document-generator` agent can write output files to any whitelisted location

## Note

Cline already has workspace file access built in. This MCP is most useful when you want agents to operate across multiple projects or read system-level config files.
