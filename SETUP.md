# Setup Guide

Complete these steps once to get everything working.

---

## Step 1 — Push the repo to GitHub

Open Terminal and run:

```bash
cd /Users/jonathanbrasfield/Documents/brochacho
git push -u origin main
```

If it asks for a username/password, use your GitHub username and a personal access token as the password (not your GitHub password). You can create one at: github.com → Settings → Developer Settings → Personal Access Tokens → Tokens (classic). Scopes needed: `repo`.

---

## Step 2 — Create your .env file

```bash
cd /Users/jonathanbrasfield/Documents/brochacho
cp mcp/.env.example mcp/.env
open mcp/.env
```

Fill in your values:

```
GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_actual_token_here
BRAVE_API_KEY=your_actual_brave_key_here
```

Save and close. This file is gitignored — it will never be committed.

---

## Step 3 — Install the MCP servers

```bash
npm install -g @modelcontextprotocol/server-github
npm install -g @modelcontextprotocol/server-brave-search
npm install -g @modelcontextprotocol/server-fetch
npm install -g @modelcontextprotocol/server-memory
npm install -g @modelcontextprotocol/server-filesystem
```

---

## Step 4 — Load your .env into your shell

Add this line to your `~/.zshrc` (or `~/.bashrc` if you use bash):

```bash
echo 'export $(grep -v "^#" /Users/jonathanbrasfield/Documents/brochacho/mcp/.env | xargs)' >> ~/.zshrc
```

Then reload:

```bash
source ~/.zshrc
```

Verify it worked:

```bash
echo $GITHUB_PERSONAL_ACCESS_TOKEN
```

You should see your token printed.

---

## Step 5 — Copy the Cline MCP settings file

```bash
cp /Users/jonathanbrasfield/Documents/brochacho/mcp/cline_mcp_settings.json \
   ~/Library/Application\ Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json
```

---

## Step 6 — Restart VS Code

Fully quit VS Code (Cmd+Q) and reopen it. Cline will connect to the MCP servers on startup. You should see them listed as connected in the Cline MCP panel.

---

## Step 7 — Use the agents in a project

Copy the `.clinerules` and `agents/` folders into any project you want to use them in:

```bash
cp -r /Users/jonathanbrasfield/Documents/brochacho/.clinerules /path/to/your/project/
cp -r /Users/jonathanbrasfield/Documents/brochacho/agents /path/to/your/project/
```

Or clone the brochacho repo directly into your project if you want updates to sync automatically.

---

## Verify everything is working

Open a project in VS Code with Cline. Start a new task and watch for:

1. Cline reads `agents/INDEX.md` before responding
2. Cline announces which agent it's activating: `[Agent: Frontend Developer]`
3. GitHub and Brave Search tools appear in Cline's tool calls

If MCP tools aren't connecting, check the Cline MCP panel (bottom of the Cline sidebar) for error messages.
