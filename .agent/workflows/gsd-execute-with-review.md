---
description: Execute GSD phase AND run CodeRabbit review automatically.
---

## Steps

1. Run /gsd-execute [N] as normal
2. After execution, run in background terminal:
   coderabbit --agent --type uncommitted
3. Wait for CodeRabbit to finish (can take 7-30 mins)
4. Read the report
5. Fix CRITICAL issues only — ignore nits and style
6. Run coderabbit --agent one more time to verify fixes
7. Only loop twice maximum
8. Commit when clean

## Rules
- Do NOT fix style nits
- Do NOT broaden scope
- Do NOT introduce mocks or stubs
- ESCALATE if critical finding is unclear