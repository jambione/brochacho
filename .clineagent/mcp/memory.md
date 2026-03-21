# Memory MCP

Gives Cline a persistent knowledge graph that survives across sessions. This is what makes agents genuinely learn your project over time.

## Install

```bash
npm install -g @modelcontextprotocol/server-memory
```

## Config (`cline_mcp_settings.json`)

```json
"memory": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-memory"]
}
```

## What it unlocks

Without memory, every Cline session starts from zero. With memory:

- Agents remember your preferred libraries, patterns, and conventions
- Architecture decisions are stored and referenced in future sessions
- "We decided to use Zustand instead of Redux because X" persists forever
- Debugging sessions record what was tried and what worked
- The `brainstorming` skill can reference past specs and designs

## How it works

Memory is a knowledge graph stored locally on your machine. Cline can create **entities** (people, projects, decisions, patterns) and **relations** between them, and add **observations** to existing entities over time.

## Recommended usage in `.clinerules`

The `_mcp-tools.md` rule already instructs Cline to:
1. Check memory at the start of every session
2. Store significant decisions at the end of tasks

You can also explicitly tell Cline: "remember that we use Tailwind not plain CSS" and it will store it.
