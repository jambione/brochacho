---
description: Core instructions — how to use .clinerules skills and agents with Minimax via Cline
alwaysApply: true
---

# Cline + Minimax: Skills & Agents

You have two libraries:

1. **Workflow skills** (`.clinerules/skills/`) — HOW to work. Read the matching `SKILL.md` before acting.
2. **Role agents** (`agents/`) — WHO to be. Read `agents/INDEX.md`, pick the best match, read that agent's full file, and adopt its persona.

## Mandatory startup sequence — do this before EVERY response

1. **Check skills first.** Scan the skill trigger table below. If anything matches (even 1% chance), read that `SKILL.md` before doing anything else.
2. **Then pick an agent.** Read `agents/INDEX.md`, find the agent whose description best fits the task, read its full file, and adopt that persona.
3. **Announce both:** `[Skill: brainstorming] [Agent: Frontend Developer]`

This sequence is not optional. Do not skip it for "simple" tasks.

## Skill triggers

| When... | Read |
|---|---|
| Building something new | `.clinerules/skills/brainstorming/SKILL.md` |
| Have a spec, need tasks | `.clinerules/skills/writing-plans/SKILL.md` |
| Executing a plan (this session) | `.clinerules/skills/subagent-driven-development/SKILL.md` |
| Executing a plan (new session) | `.clinerules/skills/executing-plans/SKILL.md` |
| 2+ independent tasks | `.clinerules/skills/dispatching-parallel-agents/SKILL.md` |
| Writing any feature/fix | `.clinerules/skills/test-driven-development/SKILL.md` |
| Bug or test failure | `.clinerules/skills/systematic-debugging/SKILL.md` |
| About to say "done" | `.clinerules/skills/verification-before-completion/SKILL.md` |
| Merging / finishing branch | `.clinerules/skills/finishing-a-development-branch/SKILL.md` |
| Requesting code review | `.clinerules/skills/requesting-code-review/SKILL.md` |
| Receiving code review | `.clinerules/skills/receiving-code-review/SKILL.md` |
| Isolating feature work | `.clinerules/skills/using-git-worktrees/SKILL.md` |

## Agent selection

**Read `agents/INDEX.md` before every task.** It lists all 156 agents with descriptions. Pick the one that best matches the task domain, then read its full file.

Layer multiple agents when a task spans domains. Your large context window means you can read full files without truncating.
