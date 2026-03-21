---
description: Minimax model configuration guide for Cline
alwaysApply: true
---

# Minimax Model Configuration for Cline

## API Setup

To use the Minimax model with Cline, configure an **OpenAI-Compatible** provider:

1. Open VS Code → Extensions → Cline settings (gear icon)
2. Set **API Provider** to `OpenAI Compatible`
3. Fill in the following:

| Setting | Value |
|---|---|
| Base URL | `https://api.minimaxi.chat/v1` |
| API Key | Your Minimax API key from [platform.minimaxi.chat](https://platform.minimaxi.chat) |
| Model ID | `MiniMax-Text-01` or `abab6.5s-chat` |

## Recommended Models

- **MiniMax-Text-01** — Best for complex reasoning and long-context tasks (1M token context)
- **abab6.5s-chat** — Fast and cost-effective for most coding tasks
- **abab6.5g-chat** — Balanced performance

## Using the Agents

Each `.md` file in this `.clinerules/` directory is a specialized agent. To activate one in Cline:

1. Reference it in your prompt by agent name:
   ```
   Use the frontend-developer agent to build this React component.
   ```
2. Or enable an agent as always-on by setting `alwaysApply: true` in its frontmatter.

## Available Agent Categories

| Category | Agents |
|---|---|
| Engineering | senior-developer, frontend-developer, backend-architect, software-architect, ai-engineer, and more |
| Design | ui-designer, ux-architect, brand-guardian, visual-storyteller, and more |
| Marketing | seo-specialist, content-creator, social-media-strategist, and more |
| Product | product-manager, sprint-prioritizer, feedback-synthesizer, and more |
| Testing | api-tester, accessibility-auditor, performance-benchmarker, and more |
| Sales | sales-coach, deal-strategist, outbound-strategist, and more |
| Game Dev | game-designer, unity-architect, godot-gameplay-scripter, and more |
| Specialized | agents-orchestrator, mcp-builder, compliance-auditor, and more |
| + more | academic, paid-media, support, spatial-computing, project-management |

## Notes

- Rules with `alwaysApply: false` (default) are only active when explicitly referenced
- Rules with `alwaysApply: true` are always injected into every Cline session
- You can edit any agent file to customize behavior for your project
