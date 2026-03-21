# Linear MCP Server

Linear project management and issue tracking.

## Install

```bash
npm install -g @hatcloud/linear-mcp
```

## Configuration

1. Get your Linear API key from [linear.app](https://linear.app) → Settings → API
2. Add to `.env`:

```bash
LINEAR_API_KEY=lin_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. Add to Cline MCP settings:

```json
"linear": {
  "command": "npx",
  "args": ["-y", "@hatcloud/linear-mcp"],
  "env": {
    "LINEAR_API_KEY": "${LINEAR_API_KEY}"
  }
}
```

## Usage

- Create and manage issues
- Track project progress
- Manage teams and members
- Create and update milestones
- Cycle management
- Workflow automation

## Security

- API key grants full access to your Linear workspace
- Keep key secure and never commit to git
- Rotate keys regularly

## Permissions

Requires appropriate Linear permissions for:
- Issues (read/write)
- Projects (read/write)
- Teams (read)
- Cycles (read/write)