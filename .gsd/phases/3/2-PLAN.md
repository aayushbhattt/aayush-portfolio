---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: Contact Section & Footer

## Objective
Finalize the main scrollable page by implementing a minimal Contact section and a professional Footer.

## Context
- `.gsd/SPEC.md` — Basic contact links
- `.gsd/DECISIONS.md` — Option A (Minimal Icons) + confirmed links
- `index.html` — Bottom sections
- `styles/contact.css` — New styles for icons and layout

## Tasks

<task type="auto">
  <name>Populate HTML for Contact & Footer</name>
  <files>index.html</files>
  <action>
    Update `#contact` and `footer` in index.html.

    **Contact:**
    - Heading: "Let's <span>Talk</span>".
    - A `.contact__links` flex row.
    - Icons with `target="_blank" rel="noopener noreferrer"`:
      - Email: `mailto:aayushbhatt0210@gmail.com`
      - LinkedIn: `https://www.linkedin.com/in/aayushbhattt/`
      - GitHub: `https://github.com/aayushbhattt`
      - LeetCode: `https://leetcode.com/u/aayushbhattt/`

    **Footer:**
    - Text: `&copy; 2026 Aayush Bhatt. Built with Passion.`
  </action>
  <verify>Check links in browser — all 4 icons should work and be secure</verify>
  <done>
    - Contact icons are linked correctly.
    - Footer is present.
  </done>
</task>

<task type="auto">
  <name>Style Contact section and Footer</name>
  <files>styles/contact.css</files>
  <action>
    Create styles/contact.css.

    **Styles:**
    - `.contact`: Center alignment.
    - `.contact__links`: Flex row, large gap (2rem).
    - `.social-icon`: Large size, red stroke or fill, hover pulse effect.
    - `.footer`: Padding-top `var(--space-xl)`, border-top 1px solid var(--color-border), center alignment, muted text.
  </action>
  <verify>Check visuals — section should feel minimal and integrated</verify>
  <done>
    - Contact area is visually clean.
    - Footer fits the theme.
  </done>
</task>

## Success Criteria
- [ ] Contact section features 4 working links.
- [ ] Links open in new tabs with noopener.
- [ ] Footer completes the single-page flow.
