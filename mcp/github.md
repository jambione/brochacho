# GitHub MCP

Gives Cline direct access to GitHub — read/write files, create PRs, manage issues, search code.

## Install

```bash
npm install -g @modelcontextprotocol/server-github
```

## Get a token

1. Go to github.com → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Generate new token with scopes: `repo`, `read:org`, `read:user`
3. Copy the token

## Config (`cline_mcp_settings.json`)

```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
  }
}
```

## What it unlocks

- `git-workflow-master` agent can manage branches and commits via natural language
- `requesting-code-review` skill can open real PRs
- `finishing-a-development-branch` skill can merge and clean up
- `incident-response-commander` can search code for the source of incidents
- Search across all repos in your org for patterns, deprecated usage, security issues
