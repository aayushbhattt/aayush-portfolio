---
phase: 1
plan: 2
wave: 2
---

# Plan 1.2: Navbar + Hero Section

## Objective
Build the sticky Navbar and the Hero section — the two most critical above-the-fold elements. The Hero is the first thing a recruiter sees; it must hook them instantly. Includes the typewriter cycling effect and navbar scroll behavior.

## Context
- `.gsd/SPEC.md` — content: name, taglines, CTA, design tokens
- `index.html` — HTML shell from Plan 1.1
- `styles/main.css` — design system from Plan 1.1
- `styles/navbar.css` — to be filled here
- `styles/hero.css` — to be filled here
- `js/main.js` — to be filled here

## Depends On
Plan 1.1 must be complete (index.html shell + main.css must exist)

## Tasks

<task type="auto">
  <name>Implement sticky Navbar</name>
  <files>
    index.html (navbar section)
    styles/navbar.css
    js/main.js (scroll class toggle)
  </files>
  <action>
    **HTML — add to index.html inside <body>, before all sections:**
    ```html
    <header class="navbar" id="navbar">
      <nav class="container navbar__inner">
        <a href="#home" class="navbar__logo">Aayush<span>.</span></a>
        <ul class="navbar__links" id="navLinks">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#achievements" class="nav-link">Achievements</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="navbar__hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
    ```

    **styles/navbar.css:**
    - .navbar: position fixed; top 0; left 0; right 0; z-index 1000; height var(--navbar-height); background transparent; transition background var(--transition-base), backdrop-filter var(--transition-base)
    - .navbar.scrolled: background rgba(0,0,0,0.92); backdrop-filter blur(12px); border-bottom 1px solid var(--color-border)
    - .navbar__inner: display flex; justify-content space-between; align-items center; height 100%
    - .navbar__logo: font-size var(--fs-xl); font-weight var(--fw-bold); color var(--color-text-primary); letter-spacing -0.02em
    - .navbar__logo span: color var(--color-accent)
    - .navbar__links: display flex; list-style none; gap var(--space-lg); align-items center
    - .nav-link: font-size var(--fs-sm); font-weight var(--fw-medium); color var(--color-text-secondary); transition color var(--transition-fast); position relative
    - .nav-link::after: content ''; position absolute; bottom -4px; left 0; width 0; height 2px; background var(--color-accent); transition width var(--transition-base)
    - .nav-link:hover: color var(--color-text-primary)
    - .nav-link:hover::after: width 100%
    - .nav-link.active: color var(--color-accent)
    - .nav-link.active::after: width 100%
    - .navbar__hamburger: display none; flex-direction column; gap 5px; padding 4px
    - .navbar__hamburger span: display block; width 24px; height 2px; background var(--color-text-primary); border-radius 2px; transition var(--transition-fast)
    - @media (max-width: 768px): .navbar__links display none (add .navbar__links.open: display flex; flex-direction column; position absolute; top var(--navbar-height); left 0; right 0; background rgba(0,0,0,0.97); padding var(--space-lg); gap var(--space-md)); .navbar__hamburger display flex

    **js/main.js — scroll behavior + hamburger + active nav link:**
    ```js
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile hamburger
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Active nav link on scroll (IntersectionObserver)
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(link => link.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => observer.observe(s));
    ```
  </action>
  <verify>Scroll down on index.html — navbar should get frosted glass dark background. Resize to mobile — hamburger appears. Click hamburger — links dropdown shows.</verify>
  <done>
    - Navbar is sticky (position fixed) and always visible
    - Scrolled state: dark frosted glass background with bottom border
    - Mobile hamburger toggle works
    - Active link updates as user scrolls through sections (once sections exist)
    - Logo "Aayush." with red dot renders correctly
  </done>
</task>

<task type="auto">
  <name>Implement Hero section with typewriter effect</name>
  <files>
    index.html (hero section)
    styles/hero.css
    js/main.js (typewriter function)
  </files>
  <action>
    **HTML — add to index.html after <header>, before closing </body>:**
    ```html
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="hero__bg-grid"></div>
      <div class="container hero__content">
        <p class="hero__greeting">Hi, I'm</p>
        <h1 class="hero__name">Aayush Bhatt</h1>
        <div class="hero__typewriter">
          <span class="hero__typewriter-text" id="typewriterText"></span>
          <span class="hero__cursor">|</span>
        </div>
        <p class="hero__bio">B.Tech CSE (AI/ML) @ Vedam School of Technology · Building things for the web.</p>
        <div class="hero__cta">
          <a href="#projects" class="btn-primary">View Projects <span>→</span></a>
          <a href="#contact" class="btn-outline">Get In Touch</a>
        </div>
        <div class="hero__scroll-hint">
          <span>Scroll</span>
          <div class="hero__scroll-line"></div>
        </div>
      </div>
    </section>
    ```

    **styles/hero.css:**
    - .hero: min-height 100vh; display flex; align-items center; position relative; overflow hidden; padding-top var(--navbar-height)
    - .hero__bg-grid: position absolute; inset 0; background-image: repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(245,237,237,0.03) 40px, rgba(245,237,237,0.03) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(245,237,237,0.03) 40px, rgba(245,237,237,0.03) 41px); pointer-events none
    - Add a red radial glow in top-left: .hero::before { content:''; position absolute; top -200px; left -200px; width 600px; height 600px; background radial-gradient(circle, rgba(215,35,35,0.12) 0%, transparent 70%); pointer-events none }
    - .hero__content: position relative; z-index 1; max-width 700px
    - .hero__greeting: font-size var(--fs-lg); color var(--color-accent); font-weight var(--fw-medium); font-family var(--font-code); margin-bottom var(--space-xs); letter-spacing 0.05em
    - .hero__name: font-size var(--fs-5xl); font-weight var(--fw-bold); color var(--color-text-primary); line-height 1.1; margin-bottom var(--space-sm); letter-spacing -0.03em
    - .hero__typewriter: font-size var(--fs-2xl); font-weight var(--fw-medium); color var(--color-text-secondary); margin-bottom var(--space-md); min-height 2rem; display flex; align-items center; gap 2px
    - .hero__typewriter-text: color var(--color-text-primary)
    - .hero__cursor: color var(--color-accent); font-weight var(--fw-bold); animation blink 0.8s step-end infinite
    - @keyframes blink { 0%,100% { opacity 1 } 50% { opacity 0 } }
    - .hero__bio: font-size var(--fs-base); color var(--color-text-secondary); max-width 520px; margin-bottom var(--space-xl); line-height 1.7
    - .hero__cta: display flex; gap var(--space-md); flex-wrap wrap; align-items center; margin-bottom var(--space-2xl)
    - .hero__scroll-hint: display flex; align-items center; gap var(--space-sm); color var(--color-text-secondary); font-size var(--fs-xs); font-family var(--font-code); letter-spacing 0.1em
    - .hero__scroll-line: width 60px; height 1px; background linear-gradient(to right, var(--color-accent), transparent)
    - @media (max-width: 768px): .hero__name font-size var(--fs-4xl); .hero__typewriter font-size var(--fs-xl); .hero__cta flex-direction column; align-items flex-start

    **js/main.js — append typewriter function:**
    ```js
    // Typewriter effect
    const phrases = [
      'Full Stack Developer',
      'AI Enthusiast',
      'Problem Solver',
      'Open Source Contributor'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeEl = document.getElementById('typewriterText');

    function typeWriter() {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        typeEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typeEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === current.length) {
        speed = 1800; // pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400; // pause before next phrase
      }
      setTimeout(typeWriter, speed);
    }
    typeWriter();
    ```
  </action>
  <verify>Open index.html in browser — hero fills full viewport, name displays large, typewriter cycles through all 4 phrases, cursor blinks, CTA buttons visible and styled correctly</verify>
  <done>
    - Hero section fills 100vh
    - "Hi, I'm" in red code font renders above name
    - "Aayush Bhatt" renders at large size in bold white
    - Typewriter cycles: Full Stack Developer → AI Enthusiast → Problem Solver → Open Source Contributor → loop
    - Blinking red cursor present
    - "View Projects" (red filled) and "Get In Touch" (red outline) buttons render correctly
    - Scroll hint visible at bottom
    - Subtle grid background + red glow visible
    - Mobile layout looks correct at 375px width
  </done>
</task>

## Success Criteria
- [ ] Navbar sticky and visible on scroll
- [ ] Navbar has frosted glass effect when scrolled
- [ ] Mobile hamburger menu works
- [ ] Hero section fills full viewport height
- [ ] Typewriter cycles through all 4 phrases correctly
- [ ] Both CTA buttons render with correct colors
- [ ] Page looks good on mobile (375px) and desktop (1400px)
- [ ] No JavaScript console errors
