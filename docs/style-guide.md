# Gamma-style Portfolio Design Guide

This guide documents the visual language and reusable primitives we are replicating from the published Gamma site. It serves as a single reference for designers and developers, with tokens, utilities, and per‑section specs, plus downloadable/reference image links.

Note: All code examples reference the utilities added to src/app/globals.css.

---

## 1) Design Tokens

Colors

- Background layers:
  - --bg-0: #0f1013 (site root)
  - --bg-1: #141416 (section background)
  - --bg-2: #1a1b1f (deeper surface)
- Surfaces and borders:
  - --surface: #1c1d21
  - --border-subtle: #2a2b31
  - --border-strong: #3a3b41
- Text:
  - --text-0: #f3f4f6 (bright)
  - --text-1: #e5e7eb (primary)
  - --text-2: #9aa0a6 (muted)
- Accent:
  - --accent: #f5f547 (Gamma-like yellow)
  - --accent-ink: #0e0e10 (text on accent)

Typography

- --font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"
- Body line height: --lh-body: 1.6
- Letter spacing:
  - --ls-tight: -0.02em (large headings)
  - --ls-title: -0.01em (section titles)

Scale

- Container width: --container: 1120px
- Section vertical padding: --section-y: 96px
- Radii: --radius-sm: 8px, --radius-md: 12px, --radius-lg: 16px
- Spacing: 4/8/12/16/20/24/28/32/40/48/64 (--space-\* tokens)

Shadows

- --shadow-soft: 0 2px 10px rgba(0,0,0,.25)
- --shadow-elev: 0 6px 24px rgba(0,0,0,.35)
- --shadow-glow: 0 0 0 3px rgba(245,245,71,.2)

---

## 2) Core Utilities and Components

Layout

- .container: centers content to 1120px with side padding
- .section: dark section background with top/bottom subtle borders and vertical spacing
- .section--no-borders: same spacing but no borders (for stacking)
- .grid / .grid--2: grid helpers with gap defaults (override columns as needed)
- .card: surface panel (background, 1px border, radius, padding)
- .surface: surface without padding defaults
- .border-subtle / .border-strong: 1px divider helpers
- Helpers: .muted, .center, .stack-4/.stack-6/.stack-8

Buttons

- .btn: base (44px height, radius 12, 15px font, hover transitions)
- .btn--solid: accent background with glow
- .btn--outline: transparent bg, accent border, subtle hover fill

Hero

- .hero: full-bleed background image + min-height 62vh
- .hero\_\_overlay: stronger radial + linear dark vignette with slight blur
- .hero\_\_content: vertical spacing wrapper inside container
- .hero\_\_title: clamp(36px, 6vw, 64px), 700, tight letter-spacing
- .hero\_\_subtitle: muted, 16–18px, max 68ch

Timeline

- .timeline: three-column grid (left | vertical line | right)
- .timeline::before: central vertical divider
- .timeline\_\_item: display: contents to place panes on each side
- .timeline\_\_pane: padded content areas
- .timeline\_\_badge: 32px square numbered pill with border/shadow

Spotlight ribbon

- .ribbon (+ ::before/::after): chevron-style bar used as section callouts

Example snippets

- Container + Section:
  <section className="section">
    <div className="container">...</div>
  </section>

- Button variants:
  <a className="btn btn--solid" href="#">Contact Me</a>
  <a className="btn btn--outline" href="#">View LinkedIn</a>

- Card grid:
  <div className="grid" style={{ gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
    <div className="card">...</div>
  </div>

---

## 3) Section-by-Section Style Specs

A) Hero

- Layout:
  - Full-width, background image cover, min-height ~62vh
  - Strong top‑center vignette (radial + linear) with slight blur
  - Content width: .container within .hero
- Typography:
  - Title: clamp(36px, 6vw, 64px), weight 700, letter-spacing -0.02em
  - Subtitle: muted (#9aa0a6), clamp(16px, 2vw, 18px)
- CTAs:
  - .btn--solid (yellow) and .btn--outline (thin yellow border)
- Example:
  <section className="hero" style={{ backgroundImage: "url(/path/img.jpg)" }}>
    <div className="hero__overlay" />
    <div className="container hero__content">
      <h1 className="hero__title">Title</h1>
      <p className="hero__subtitle">Subtitle text</p>
      <a className="btn btn--solid">Primary</a>
      <a className="btn btn--outline">Secondary</a>
    </div>
  </section>
- Reference image:
  - https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600 (engineering workspace)

B) Professional Journey (compact vertical items)

- Layout:
  - Grid stack; each item shows a numbered square badge (40px) on left and text on right
  - Surfaces remain transparent; rely on section background
- Badge:
  - Background #141416, border #2a2b31, text #f5f547, radius 8
- Typography:
  - Role: bold 700
  - Company/location: 14px, ~0.8 opacity
  - Period: 13px muted
- Example:
  <div className="grid" style={{ gap: 16 }}>
    <div style={{ display:"grid", gridTemplateColumns:"40px 1fr", gap:12 }}>
      <div className="timeline__badge" style={{ width:40, height:40, background:"#141416", border:"1px solid #2a2b31", color:"#f5f547" }}>1</div>
      <div>...</div>
    </div>
  </div>

C) Technical Expertise

- Layout:
  - Responsive cards in a grid (repeat auto-fit min 220px)
  - Each card uses .card; divider/border subtle
- Content:
  - Heading in accent color; items shown as small pills
- Example:
  <div className="grid" style={{ gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
    <div className="card">
      <div style={{ color:"var(--accent)", fontWeight:700 }}>Frontend</div>
      <!-- pills -->
    </div>
  </div>

D) AI-Driven Development

- Layout:
  - Two-column on desktop (1.2fr / 1fr), single column on mobile
  - Left: bullet list; Right: image with 12px radius, 1px border
- Example:
  <div className="grid" style={{ gap:20, gridTemplateColumns:"1.2fr 1fr" }}>
    <ul>...</ul>
    <img src="/images/ai.jpg" style="border-radius:12px;border:1px solid var(--border-subtle)" />
  </div>
- Reference image:
  - https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200

E) Project Spotlight (chevron ribbons)

- Layout:
  - Heading + a series of chevron ribbons for feature categories
- Component:
  - .ribbon with ::before/::after for angled ends
- Example:
  <div className="ribbon">Integration</div>
- Accent iconography optional (monotone icons)
- Reference image:
  - https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200

F) Leadership Counters

- Layout:
  - Three to four cards in grid; large numeric value (32–48px), label bold, caption muted
- Cards:
  - Use .card with centered text
- Example:
  <div className="grid" style={{ gap:16, gridTemplateColumns:"repeat(auto-fit, minmax(200px,1fr))" }}>
    <div className="card" style={{ textAlign:"center" }}>
      <div style={{ fontSize:32, fontWeight:800, color:"var(--accent)" }}>14+</div>
      <div style={{ fontWeight:700 }}>Years Experience</div>
      <div className="muted">Building enterprise apps</div>
    </div>
  </div>

G) Core Development Principles

- Layout:
  - 2–4 cards with brief descriptions (grid with .card)
  - Optional central visual (faint circular diagram)
- Example:
  <div className="grid" style={{ gap:16, gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))" }}>
    <div className="card"><h3>Quality Code</h3><p className="muted">Enforcing standards...</p></div>
  </div>
- Reference image:
  - https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200

H) Professional Experience (detailed timeline)

- Layout:
  - Central vertical line with left/right panes; numbered badges near each entry
  - Headings: role bold, company/location muted, period small
- Component:
  <div className="timeline">
    <div className="timeline__item">
      <div className="timeline__pane">Left role...</div>
      <div className="timeline__pane">Right role...</div>
      <span className="timeline__badge">1</span>
    </div>
  </div>
- Bullet lists with 1.7 line height
- Reference image (optional section top art):
  - https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600

I) Education

- Layout:
  - One or more .card blocks: degree, institution, period
  - Secondary lists: certifications, learning focus areas
- Example:
  <div className="grid" style={{ gap:24 }}>
    <div className="card">...</div>
    <div className="card">Certifications...</div>
  </div>

J) Connect

- Layout:
  - Three .card blocks: Email, Phone, Location, followed by link buttons/anchors
- Buttons reuse .btn styles as desired; cards are simple surface panels

---

## 4) Downloadable/Reference Images

Royalty-free placeholders from Unsplash (replace at will):

- Hero background: https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600
- AI section: https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200
- Spotlight/project: https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200
- Leadership/counters: https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200
- Experience/engineering ambient: https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600

Tip: Download these and place under public/images or docs/style-guide/assets if you prefer checked-in copies.

---

## 5) Mapping to Components in Repo

- Hero

  - File: src/components/Hero.tsx
  - Uses: .hero, .hero**overlay, .hero**content, .hero**title, .hero**subtitle, .btn variants
  - Data: public/data/hero.json

- Sections renderer
  - File: src/components/Sections.tsx
  - Templates present: Journey, Expertise, AI, Spotlight, Counters, Principles, Experience Timeline, Education, Contact
  - Utilities used so far: .section, .container, .grid, .card (more migrations pending)
  - Data: public/data/sections.json

---

## 6) Implementation Notes and Parity Checklist

- Global background layers: Ensure body uses --bg-0; sections use .section (bg --bg-1)
- Typography rhythm: Headings with tight letter-spacing; .section h2 already sized via CSS
- Buttons: Hover glow shadows on solid; subtle background on outline
- Cards: Always include 1px border; default padding via .card
- Timeline: Adopt .timeline primitives for perfect central line and badges (next refactor step)
- Spotlight: Replace ad-hoc bars with .ribbon
- Spacing: Keep section vertical padding ~96px; prefer container widths and grid gaps from tokens
- Content source: All text comes from JSON (derived from resume.md), so style changes should never hardcode content in components

---

## 7) Examples (Copy/Paste Ready)

Hero JSX

<pre>
<Hero
  title="Umesh Muzhayil Chathoth | Full Stack Engineering Portfolio"
  subtitle="14+ years of expertise in full-stack development, AI-driven solutions, and enterprise architecture."
  ctas={[
    { label: "Contact Me", href: "#contact", variant: "solid" },
    { label: "View LinkedIn", href: "https://linkedin.com", variant: "outline" },
  ]}
/>
</pre>

Expertise Grid

<pre>
<section className="section">
  <div className="container">
    <h2>Technical Expertise</h2>
    <div
      className="grid"
      style={{ gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
    >
      <div className="card">...</div>
      <div className="card">...</div>
    </div>
  </div>
</section>
</pre>

Timeline Skeleton

<pre>
<section className="section">
  <div className="container">
    <h2>Professional Experience</h2>
    <div className="timeline">
      <div className="timeline__item">
        <div className="timeline__pane">Left role pane...</div>
        <div className="timeline__pane">Right role pane...</div>
        <span className="timeline__badge">1</span>
      </div>
    </div>
  </div>
</section>
</pre>

---

## 8) Known Items For Further Alignment

- Convert remaining inline styles in Sections.tsx (counters/principles/education/contact) to .card, .grid, tokens.
- Implement .timeline structure for the experience section; align number badges and central line.
- Use .ribbon for spotlight chevrons.
- Review section ordering to mirror Gamma exactly.
- Verify all content strictly originates from resume.md-derived JSON.

---

## 9) How to Use This Guide

- Designers/developers: reference tokens and blocks to ensure consistent visuals.
- When adding a new section, start with .section + .container, then compose .grid/.card/.btn.
- If a style is missing, add a token or utility in globals.css rather than ad-hoc inline styles.
