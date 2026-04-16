# DECISIONS.md — Architecture Decision Records

> Log of key decisions made during this project.

---

## ADR-001 — Vanilla Stack (No Framework)
**Date:** 2026-04-15
**Decision:** Use HTML + CSS + JS only. No React, Next.js, or build tools.
**Reason:** Simpler, faster to deploy, no dependencies to maintain. Optimization can be added later.
**Trade-off:** Manual DOM manipulation; no component reuse — acceptable for a portfolio.

---

## ADR-002 — Color Palette
**Date:** 2026-04-15
**Decision:** #000000 bg, #3E3636 secondary, #D72323 accent red, #F5EDED text.
**Reason:** User-defined. Warm-dark with red accent is distinctive and memorable vs. typical blue portfolios.

---

## ADR-003 — Contact Section: No Form
**Date:** 2026-04-15
**Decision:** Contact section uses email mailto link + social icon links only. No contact form.
**Reason:** Keeps it simple and avoids any backend/third-party service dependency.

---

## ADR-004 — No Resume Page
**Date:** 2026-04-15
**Decision:** No /resume page or PDF download button in this version.
**Reason:** User preference. Can add later.

---

## Phase 3 Decisions

**Date:** 2026-04-16

### Achievements Layout
- **Decision**: Option A (Card Grid).
- **Reason**: Balances scanning ease with technical depth.

### Contact Section
- **Decision**: Option A (Minimal Icons).
- **Addition**: Added LeetCode link (https://leetcode.com/u/aayushbhattt/) and confirmed email (aayushbhatt0210@gmail.com).
