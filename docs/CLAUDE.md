# Brochacho — Cline Intelligence System

> Transform Cline from a generic AI assistant into **156 specialized experts** with proven workflows.

---

## The Elevator Pitch

**What if your AI coding assistant had 156 specialists on call?**

Brochacho gives Cline superpowers. It's a plug-and-play intelligence layer that provides:

- **156 specialized agents** — from Solidity auditors to Douyin marketers to Roblox systems engineers
- **13 workflow skills** — brainstorming, TDD, systematic debugging, code review, and more
- **4 MCP integrations** — GitHub, Brave Search, Memory, Filesystem

Instead of one-size-fits-all AI, you get domain experts who think like professionals in each field.

**Setup time:** 5 minutes. Drop into any project.

---

## Wow Me

### Numbers

| Metric | Value |
|---|---|
| Specialized Agents | 156 |
| Agent Categories | 12 |
| Workflow Skills | 13 |
| Game Engines Supported | 7 (Unity, Unreal, Godot, Roblox, Blender, +more) |
| Marketing Platforms | 25+ (TikTok, Douyin, Xiaohongshu, Weibo, +more) |
| Languages/Frameworks | 30+ |

### Categories That Blow Minds

**Game Development** *(20 agents)*
- Unity Architect, Unreal Multiplayer Architect, Godot Gameplay Scripter
- Roblox Avatar Creator, Blender Add-on Engineer
- Narrative Designer, Level Designer, Technical Artist

**Engineering** *(22 agents)*
- Security Engineer, SRE, Backend Architect, AI Engineer
- Embedded Firmware (ESP32, ARM Cortex-M, STM32)
- Incident Response Commander, Threat Detection

**Marketing** *(25 agents)*
- China specialists: Douyin, Kuaishou, Xiaohongshu, Weibo, WeChat
- Global: TikTok, SEO, Reddit, LinkedIn, Instagram
- E-commerce: Amazon, Shopify, Cross-border specialists

**Sales & Revenue** *(9 agents)*
- MEDDPICC deal strategist
- Outbound specialist, Sales coach
- Pipeline analyst, QBR facilitator

**Weird & Wonderful**
- Korean Business Navigator
- French Consulting Market Navigator
- Zettelkasten Knowledge Steward
- WeChat Mini Program Developer
- VR Cockpit Interaction Specialist

### Workflow Skills That Ship

| Skill | What It Does |
|---|---|
| `brainstorming` | Structured ideation before building |
| `test-driven-development` | Write tests first, code second |
| `systematic-debugging` | Root cause, not symptoms |
| `verification-before-completion` | Don't say "done" without proof |
| `finishing-a-development-branch` | PR-ready, no shortcuts |
| `requesting-code-review` | Get useful feedback, not bikeshedding |

---

## How It Works

```
You: "Build a multiplayer game in Godot"
     ↓
Cline: [Skill: subagent-driven-development]
       [Agent: godot-multiplayer-engineer]
       ↓
Output: Godot 4 networking specialist who knows
        MultiplayerAPI, ENet/WebRTC, RPCs,
        and server-authoritative architecture
```

**The magic:** Cline reads the agent file and *becomes* that expert. Same model, domain knowledge injected.

---

## Quick Start

1. Copy `.clineagent/` into your project
2. Copy `mcp/` contents and run setup (see `mcp/README.md`)
3. Restart VS Code
4. Ask Cline: "Use the [agent-name] agent for this task"

---

## Example Prompts

- `"Use the frontend-developer agent to build this React dashboard"`
- `"Apply the test-driven-development skill to this feature"`
- `"I'm building a Douyin growth strategy — use the douyin-strategist agent"`
- `"Debug this memory leak using the systematic-debugging skill"`

---

## The Stack

- **Model:** Minimax (1M token context, $0.70/1M tokens)
- **Editor:** Cline (VS Code extension)
- **MCP Servers:** GitHub, Brave Search, Memory, Filesystem

---

*Brochacho: Because one AI is never enough.*