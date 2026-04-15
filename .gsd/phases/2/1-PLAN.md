---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: About & Skills Sections

## Objective
Implement the About and Skills sections on the main page. This gives the portfolio its personality and technical backbone. It uses the established design system tokens.

## Context
- `.gsd/SPEC.md` — content for bio and skills list
- `index.html` — where sections will be populated
- `styles/main.css` — typography and container utilities
- `styles/about.css` — new styles for about
- `styles/skills.css` — new styles for skills
- `assets/images/profile.jpg` — the profile photo

## Tasks

<task type="auto">
  <name>Populate HTML for About & Skills</name>
  <files>index.html</files>
  <action>
    Update index.html to populate the 'about' and 'skills' sections.

    **About Section:**
    - Wrap content in a `.container`.
    - Create a `.about__inner` grid/flex row.
    - Left col (`.about__image`): Render `assets/images/profile.jpg` with a frame.
    - Right col (`.about__text`): 
      - Heading: "About <span>Me</span>".
      - Bio paragraphs from SPEC (B.Tech CSE, AI/ML, Pune).
      - Highlight card or featured paragraph for "Black Belt in Taekwondo".

    **Skills Section:**
    - Wrap content in a `.container`.
    - Heading: "Technical <span>Skills</span>".
    - Create a `.skills__grid`.
    - Categories:
      - Languages (Python, Java, JS, HTML, CSS)
      - Frameworks (React, Next.js, Django)
      - Databases (MySQL, Firebase)
      - Tools (Git, GitHub, Netlify)
    - Use the `.tag` class for each skill.
  </action>
  <verify>Check index.html visually in browser — content should be in the right spots</verify>
  <done>
    - About section has image and bio text.
    - Skills section has all categories and tags from SPEC.
  </done>
</task>

<task type="auto">
  <name>Style About & Skills sections</name>
  <files>
    styles/about.css
    styles/skills.css
  </files>
  <action>
    **styles/about.css:**
    - `.about__inner`: 2-column flex/grid (50/50 or 40/60 split).
    - `.about__image-wrapper`: Relative position, rounded corners, subtle red shadow/border.
    - `.about__image`: Object-fit cover, border-radius.
    - `.about__text`: Flex-column, gap between paragraphs.
    - `.about__highlight`: Card style (`--color-bg-secondary`), padding, border-left 4px solid red for emphasis.
    - Responsive: Stack vertically on mobile.

    **styles/skills.css:**
    - `.skills__grid`: Display grid, 1fr 1fr (desktop), 1fr (mobile).
    - `.skills__category`: Card style, padding, flex-column gap.
    - `.skills__category h4`: Margin-bottom, font-family code.
    - `.skills__list`: Flex-wrap, gap for tags.
  </action>
  <verify>Open index.html — sections should look premium and responsive</verify>
  <done>
    - About section layout balances image and text.
    - Skills section uses a clean grid with grouped tags.
    - Both sections stack properly on mobile.
  </done>
</task>

## Success Criteria
- [ ] About section renders with profile photo and bio.
- [ ] Skills section displays all 4 categories with tags.
- [ ] Responsive: Sections look good on mobile and desktop.
- [ ] No layout breaks or horizontal scrolling.
