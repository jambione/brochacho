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

Agents live in the `agents/` folder at the project root (not in `.clinerules/`). Read the matching file and adopt that agent's full persona, workflow, and quality standards.

| When... | Read |
|---|---|
| Frontend / React / CSS | `agents/engineering/frontend-developer.md` |
| Backend / APIs / DB | `agents/engineering/backend-architect.md` |
| System design | `agents/engineering/software-architect.md` |
| Code review | `agents/code-reviewer.md` |
| AI/ML features | `agents/engineering/ai-engineer.md` |
| DevOps / CI/CD | `agents/engineering/devops-automator.md` |
| UI design systems | `agents/design/ui-designer.md` |
| UX research | `agents/design/ux-researcher.md` |
| SEO / content | `agents/marketing/seo-specialist.md` |
| Social media | `agents/marketing/social-media-strategist.md` |
| Product roadmap | `agents/product/product-manager.md` |
| Sprint planning | `agents/product/sprint-prioritizer.md` |
| Project tracking | `agents/project-management/senior-project-manager.md` |
| Sales strategy | `agents/sales/deal-strategist.md` |
| QA / testing | `agents/testing/reality-checker.md` |
| Multi-agent work | `agents/specialized/agents-orchestrator.md` |
| MCP / tool building | `agents/specialized/mcp-builder.md` |

Announce what you load: `[Skill: test-driven-development] [Agent: Frontend Developer]`

Layer multiple agents when a task spans domains. Your 1M token context window means you can read full files without truncating.
