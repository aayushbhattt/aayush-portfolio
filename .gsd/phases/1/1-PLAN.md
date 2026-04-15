---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Project Structure + Design System

## Objective
Bootstrap the entire folder structure and create the CSS design system. This is the foundation every other phase builds on — design tokens, typography, reset, and utility classes all live here. No visible UI yet except a blank dark page with correct fonts loaded.

## Context
- `.gsd/SPEC.md` — design tokens, color palette, font choices
- No existing source files yet — greenfield

## Folder Structure to Create

```
portfolio-aayush/
├── index.html
├── projects.html          (empty shell for now)
├── assets/
│   └── images/
│       └── profile.jpg    (user must drop file here)
├── styles/
│   ├── main.css           ← THIS PLAN
│   ├── navbar.css         (created empty, filled in Plan 1.2)
│   ├── hero.css           (created empty, filled in Plan 1.2)
│   ├── about.css          (empty — Phase 2)
│   ├── skills.css         (empty — Phase 2)
│   ├── projects.css       (empty — Phase 2)
│   ├── achievements.css   (empty — Phase 3)
│   └── contact.css        (empty — Phase 3)
└── js/
    └── main.js            (empty shell, filled in Plan 1.2)
```

## Tasks

<task type="auto">
  <name>Create folder structure + index.html shell</name>
  <files>
    index.html
    projects.html
    assets/images/.gitkeep
    styles/navbar.css
    styles/hero.css
    styles/about.css
    styles/skills.css
    styles/projects.css
    styles/achievements.css
    styles/contact.css
    js/main.js
  </files>
  <action>
    Create index.html with:
    - DOCTYPE, lang="en", proper charset + viewport meta
    - SEO meta: title "Aayush Bhatt | Full Stack Developer", description "Portfolio of Aayush Bhatt — Full Stack Developer and B.Tech CSE (AI/ML) student at Vedam School of Technology, Pune."
    - Open Graph meta tags (og:title, og:description, og:type=website)
    - Google Fonts link: Inter (400,500,600,700) + Fira Code (400,500)
    - Link ALL CSS files in order: main.css → navbar.css → hero.css → about.css → skills.css → projects.css → achievements.css → contact.css
    - Empty <body> with just a placeholder comment for now
    - Script tag at bottom for js/main.js

    Create projects.html as an empty shell (same head, title "Projects | Aayush Bhatt")

    Create all style/*.css files as empty (just a comment header saying which section they belong to)
    Create js/main.js as empty with a comment // main.js — entry point
    Create assets/images/.gitkeep so the folder is tracked by git
  </action>
  <verify>open index.html in browser — page should load with no console errors</verify>
  <done>
    - index.html exists with all meta tags and CSS/JS links
    - All CSS files and js/main.js exist (even if empty)
    - assets/images/ directory exists
    - No broken links or 404s when opened locally
  </done>
</task>

<task type="auto">
  <name>Create styles/main.css — full design system</name>
  <files>styles/main.css</files>
  <action>
    Write the complete CSS design system in styles/main.css with these sections:

    **1. CSS Custom Properties (:root)**
    ```css
    --color-bg: #000000;
    --color-bg-secondary: #3E3636;
    --color-accent: #D72323;
    --color-accent-hover: #ff2929;
    --color-text-primary: #F5EDED;
    --color-text-secondary: #a09898;
    --color-border: rgba(245, 237, 237, 0.08);
    --font-body: 'Inter', sans-serif;
    --font-code: 'Fira Code', monospace;
    --fs-xs: 0.75rem;
    --fs-sm: 0.875rem;
    --fs-base: 1rem;
    --fs-lg: 1.125rem;
    --fs-xl: 1.25rem;
    --fs-2xl: 1.5rem;
    --fs-3xl: 2rem;
    --fs-4xl: 2.75rem;
    --fs-5xl: 3.75rem;
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-2xl: 5rem;
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 400ms ease;
    --shadow-card: 0 4px 24px rgba(215, 35, 35, 0.08);
    --shadow-card-hover: 0 8px 40px rgba(215, 35, 35, 0.18);
    --max-width: 1100px;
    --navbar-height: 70px;
    ```

    **2. CSS Reset**
    - *, *::before, *::after box-sizing: border-box
    - margin: 0; padding: 0 on html, body
    - Remove list styles from ul, ol
    - img: max-width 100%, display block
    - a: text-decoration none, color inherit
    - button: border none, background none, cursor pointer, font inherit

    **3. Base Styles**
    - html: scroll-behavior smooth; font-size 16px
    - body: background var(--color-bg); color var(--color-text-primary); font-family var(--font-body); line-height 1.6; overflow-x hidden

    **4. Typography scale**
    - h1–h6 using font-weights and sizes from the scale above
    - p: color var(--color-text-secondary); line-height 1.7

    **5. Layout utilities**
    - .container: max-width var(--max-width); margin 0 auto; padding 0 var(--space-lg)
    - .section: padding var(--space-2xl) 0
    - .section-title: font-size var(--fs-3xl); font-weight var(--fw-bold); color var(--color-text-primary); margin-bottom var(--space-lg)
    - .section-title span: color var(--color-accent) — for red highlighted words
    - .flex: display flex; align-items center
    - .grid: display grid

    **6. Reusable UI components**
    - .btn-primary: background var(--color-accent); color #fff; padding 0.75rem 2rem; border-radius var(--radius-md); font-weight var(--fw-semibold); transition var(--transition-base); display inline-flex; align-items center; gap 0.5rem
    - .btn-primary:hover: background var(--color-accent-hover); transform translateY(-2px); box-shadow var(--shadow-card-hover)
    - .btn-outline: same padding/radius but transparent bg, border 1px solid var(--color-accent), color var(--color-accent)
    - .btn-outline:hover: background var(--color-accent); color #fff
    - .tag: font-family var(--font-code); font-size var(--fs-xs); background rgba(215,35,35,0.12); color var(--color-accent); padding 0.25rem 0.6rem; border-radius var(--radius-sm); border 1px solid rgba(215,35,35,0.25)
    - .card: background var(--color-bg-secondary); border-radius var(--radius-md); border 1px solid var(--color-border); transition var(--transition-base); padding var(--space-lg)
    - .card:hover: transform translateY(-4px); box-shadow var(--shadow-card-hover); border-color rgba(215,35,35,0.35)

    **7. Scrollbar styling**
    ```css
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--color-bg); }
    ::-webkit-scrollbar-thumb { background: var(--color-accent); border-radius: 3px; }
    ```

    **8. Selection highlight**
    ```css
    ::selection { background: var(--color-accent); color: #fff; }
    ```

    **9. Responsive base**
    - @media (max-width: 768px): .container padding 0 var(--space-sm); --fs-4xl: 2rem; --fs-5xl: 2.5rem
  </action>
  <verify>Open index.html — body should be black (#000), text off-white (#F5EDED), Inter font loading, no console errors</verify>
  <done>
    - styles/main.css has all 9 sections above
    - CSS custom properties visible via browser DevTools :root
    - Google Fonts loaded (Inter + Fira Code visible in DevTools Network tab)
    - Page background is #000000
  </done>
</task>

## Success Criteria
- [ ] Folder structure matches spec above
- [ ] index.html has correct SEO meta tags, links all CSS + JS files
- [ ] styles/main.css has complete design system with all tokens
- [ ] Google Fonts (Inter + Fira Code) loading correctly
- [ ] Page loads with black background, correct font — no console errors
- [ ] All empty CSS files exist (no missing imports)
