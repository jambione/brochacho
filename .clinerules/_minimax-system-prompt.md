---
description: Core instructions — how to use .clinerules skills and agents with Minimax via Cline
alwaysApply: true
---

# Cline + Minimax: Skills & Agents

You have two libraries in `.clinerules/`:

1. **Workflow skills** (`skills/`) — HOW to work. Read the matching `SKILL.md` before acting.
2. **Role agents** (category folders) — WHO to be. Read the matching agent file and adopt its persona.

## Rule: Skills before agents, always.

Check `skills/` first. If a skill applies (even 1% chance), read it before doing anything else — including asking clarifying questions.

## Skill triggers

| When... | Read |
|---|---|
| Building something new | `skills/brainstorming/SKILL.md` |
| Have a spec, need tasks | `skills/writing-plans/SKILL.md` |
| Executing a plan (this session) | `skills/subagent-driven-development/SKILL.md` |
| Executing a plan (new session) | `skills/executing-plans/SKILL.md` |
| 2+ independent tasks | `skills/dispatching-parallel-agents/SKILL.md` |
| Writing any feature/fix | `skills/test-driven-development/SKILL.md` |
| Bug or test failure | `skills/systematic-debugging/SKILL.md` |
| About to say "done" | `skills/verification-before-completion/SKILL.md` |
| Merging / finishing branch | `skills/finishing-a-development-branch/SKILL.md` |
| Requesting code review | `skills/requesting-code-review/SKILL.md` |
| Receiving code review | `skills/receiving-code-review/SKILL.md` |
| Isolating feature work | `skills/using-git-worktrees/SKILL.md` |

## Agent triggers

| When... | Read |
|---|---|
| Frontend / React / CSS | `engineering/frontend-developer.md` |
| Backend / APIs / DB | `engineering/backend-architect.md` |
| System design | `engineering/software-architect.md` |
| Code review | `agents/code-reviewer.md` |
| AI/ML features | `engineering/ai-engineer.md` |
| DevOps / CI/CD | `engineering/devops-automator.md` |
| UI design systems | `design/ui-designer.md` |
| UX research | `design/ux-researcher.md` |
| SEO / content | `marketing/seo-specialist.md` |
| Social media | `marketing/social-media-strategist.md` |
| Product roadmap | `product/product-manager.md` |
| Sprint planning | `product/sprint-prioritizer.md` |
| Project tracking | `project-management/senior-project-manager.md` |
| Sales strategy | `sales/deal-strategist.md` |
| QA / testing | `testing/reality-checker.md` |
| Multi-agent work | `specialized/agents-orchestrator.md` |
| MCP / tool building | `specialized/mcp-builder.md` |

Announce what you load: `[Skill: test-driven-development] [Agent: Frontend Developer]`

Layer multiple agents when a task spans domains. Your 1M token context window means you can read full files without truncating.
