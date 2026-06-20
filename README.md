# Prayerful Rosary — Landing Page

A single-file, production-ready landing page for the **Prayerful Rosary** iOS app, built for the Wix platform.

## What's in here

```
landing-page/
├── index.html        — the entire site (HTML + inline CSS + inline JS)
├── assets/
│   ├── app-icon.png
│   ├── rosary-unlit.png        (frame rr — opening)
│   ├── rosary-mid.png          (frame r30 — third decade)
│   ├── rosary-bloomed.png      (frame r60 — completed)
│   ├── mystery-joyful.jpg
│   ├── mystery-sorrowful.jpg
│   ├── mystery-glorious.jpg
│   └── mystery-luminous.jpg
└── README.md
```

Total page weight: ~2.3 MB (mostly the image assets). All typography is loaded from Google Fonts at runtime.

## Local preview

```bash
cd /Users/mikko/Documents/Claude/Projects/PRAYEFULROSARY-APP/landing-page
open index.html
# or for a local server:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Putting it on Wix

Wix is a closed editor — it cannot import a raw HTML file as a Wix page. You have **three** real options, in order of fidelity:

### Option 1 — Host externally, embed via iframe (recommended)
Highest fidelity, fastest to ship, fully editable later.

1. Deploy this folder to any static host:
   - **Vercel**: drag this folder onto vercel.com/new, or `npx vercel` from this directory
   - **Netlify Drop**: drag the folder onto app.netlify.com/drop
   - **GitHub Pages**: push to a repo, enable Pages on the `main` branch
   - **Wix's own File Sharing** also works for the assets, but Wix won't host the HTML itself
2. In the Wix Editor, add an **Embed → Embed a Site** element (or "HTML iframe").
3. Paste the deployed URL (e.g. `https://prayerful-rosary.vercel.app`).
4. Stretch the element to **full width** and a tall enough height (~5500–6500px on desktop).
5. Hide Wix's default header/footer on that page so the iframe goes edge-to-edge.

### Option 2 — Wix "Custom Code" page
1. Wix Editor → **Settings → Custom Code → Add Custom Code → Body End**.
2. Open `index.html`, copy everything **inside** the `<body>` tag (including the `<style>` block from the head into the body for scoping safety).
3. Paste into Wix Custom Code; scope to a single page.
4. Upload each file in `assets/` to **Wix Media Manager** and update the `src=` paths in the pasted HTML to the Wix Media URLs.

This is more brittle — Wix wraps your content in its own DOM, and the page won't be edge-to-edge unless you also use a blank template.

### Option 3 — Recreate in the Wix Editor
Use this page as a design spec. Match the color tokens listed below and use the same typography from Google Fonts (Wix supports both). Each section in `index.html` has a comment marker (`<!-- =====  HERO  ===== -->` etc.) you can use as a section-by-section guide.

## Design tokens

```css
--ink-deep:    #08060A   /* page background */
--ink-warm:    #14100C   /* card / panel background */
--parchment:   #F0E1C5   /* primary text */
--vellum:      #D9C49C   /* secondary text */
--vellum-dim:  #998566   /* footer / muted text */
--gold-leaf:   #C9A24A   /* primary accent */
--gold-bright: #E8C572   /* highlight accent */
--rose-crimson:#8B1A1A   /* rose accent */
--rose-petal:  #C24A4A   /* rose highlight */
```

**Type**
- Display headlines → **Cinzel** (700/900)
- Italic taglines / pull-quotes → **Cormorant Garamond** italic
- Body copy → **EB Garamond**

## Customizing the page

| To change…                          | Edit in `index.html`                              |
|-------------------------------------|---------------------------------------------------|
| Hero title / tagline                | `<h1 class="hero-title">` and `.hero-sub`         |
| App Store link                      | both `<a class="btn-primary">` and `.download`    |
| Email contact                       | the `mailto:` in the footer                       |
| Mystery card text                   | each `<article class="card">` block               |
| Feature copy                        | the `<div class="feature">` blocks                |
| Pull quote                          | the `<section class="ave">` block                 |

## What makes this page distinctive

- The hero rosary on the right is a **live three-frame CSS animation** that crossfades `rr → r30 → r60` and back over 24 seconds — visitors literally watch the rosary pray itself.
- Atmosphere built from layered radial gradients + an SVG film-grain overlay, not flat color.
- Ornamental section dividers use original SVG flourishes (cross + four-directional rays + decade markers), not stock icons.
- Mystery decade lists numbered in **Roman numerals via CSS counters**.
- Drop cap on the manifesto, Latin sub-line on the Hail Mary quote, candlelight flicker on the hero glow — all tiny details that signal a hand-built page.

## Accessibility

- All decorative SVGs marked `aria-hidden`.
- The animated rosary respects `prefers-reduced-motion` and freezes on the bloomed frame.
- Color contrast passes WCAG AA for body copy on the dark ground.
- Logical heading hierarchy (`h1` → `h2` → `h3`).
- Skip the `<a href="#">` placeholders before launch — replace with real App Store + Privacy + Support links.

## Before shipping

- [ ] Set the real App Store URL on both download buttons
- [ ] Add real Privacy and Support links in the footer
- [ ] Update the `og:` meta tags with your final hosted URL
- [ ] Add a favicon if you want one beyond the app icon
- [ ] Add analytics (Plausible/Fathom recommended over GA for this aesthetic)
