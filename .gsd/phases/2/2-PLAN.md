---
phase: 2
plan: 2
wave: 2
---

# Plan 2.2: Featured Projects Section

## Objective
Implement the featured projects section on the main page. This is the "money" section for recruiters. It showcases the top 3 projects with high impact, clean cards, and clear links.

## Context
- `.gsd/SPEC.md` — project data (VTS Admin, Study Buddy, Money Manage)
- `index.html` — where projects will be populated
- `styles/projects.css` — new styles for project cards
- `js/projects-data.js` — initial data structure (optional but good practice)

## Depends On
Plan 2.1 (for container alignment and overall flow)

## Tasks

<task type="auto">
  <name>Populate HTML for Featured Projects</name>
  <files>index.html</files>
  <action>
    Update the `projects` section in index.html.

    **Structure:**
    - Container with heading: "Featured <span>Projects</span>".
    - A `.projects__grid` containing 3 `.project-card` elements.
    - Each card:
      - `.project-card__image`: Placeholder or stylized div for now.
      - `.project-card__content`: Name, brief desc (from SPEC), tech tags.
      - `.project-card__links`: GitHub and Live links (if available).
    - Footer button: "View All Projects <span>→</span>" linking to `projects.html`.
  </action>
  <verify>Check index.html — 3 cards should be visible with correct data</verify>
  <done>
    - 3 featured project cards exist in index.html.
    - All links (GitHub/Live) point to the correct URLs from SPEC.
    - "View All Projects" button exists.
  </done>
</task>

<task type="auto">
  <name>Style Projects section and cards</name>
  <files>styles/projects.css</files>
  <action>
    **styles/projects.css:**
    - `.projects__grid`: 1fr 1fr 1fr grid (desktop), 1fr (mobile). Gap: `var(--space-lg)`.
    - `.project-card`: Standard card style from design system.
    - `.project-card__image-placeholder`: Aspect-ratio 16/9, background gradient (dark red), centered icon or text.
    - `.project-card__content`: Padding, title, and description.
    - `.project-card__tags`: Flex-wrap of small tags.
    - `.project-card__links`: Flex, gap, distinct icons or small buttons.
    - Animation: Hover lifts card, glows the border-red.
  </action>
  <verify>Check sections in browser — cards should look premium and interactive</verify>
  <done>
    - Project cards are styled according to the dark/red theme.
    - Cards respond to hover with lift and glow.
    - Mobile layout stacks cards vertically.
  </done>
</task>

## Success Criteria
- [ ] 3 project cards rendered with real data.
- [ ] Tech tags correctly display on each card.
- [ ] Links for GitHub and Live demos work.
- [ ] Responsive grid is functional.
