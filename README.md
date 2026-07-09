# Kushagra Sharan — Portfolio (React + Vite)

The portfolio ported to a React single-page app. The visual markup lives in
`src/app.jsx` as JSX; all motion and interaction (loader, custom cursor,
morphing-grid background, scroll-spy nav, warping skill titles, journey trail,
draggable sketchbook collage + live ASCII console, marquee, scroll reveals,
theme toggle) is driven by the original scripts in `public/portfolio/`, loaded
in order by a mount effect so they bind to the rendered DOM.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173).

## Build for hosting

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub
Pages, Cloudflare Pages, S3, …). `vite.config.js` sets `base: './'`, so the
build works whether it's served from a domain root or a subfolder.

## Structure

```
index.html                     app shell — fonts, theme init, base overrides
vite.config.js
src/
  main.jsx                     mounts <App/> (no StrictMode — see note in file)
  app.jsx                      the whole portfolio as JSX + script loader
public/portfolio/
  pf-facets.css                styles (includes the responsive breakpoints)
  pf.js pf-facets.js pf-collage.js pf-morph.js pf-skills.js pf-journey.js
  img/                         illustrations, work thumbnails, hero art
  Kushagra-Sharan-Resume.pdf
```

## Notes

- The site is fully responsive (phone → desktop) — the breakpoints are in
  `public/portfolio/pf-facets.css`.
- Two links point at separate pages from the original project that are **not**
  part of this React app: the flagship case study (`design-system/index.html`)
  and the UI kit (`Facets UI Kit.html`). Wire them to real routes/pages or
  update the `href`s in `src/app.jsx` before going live.
- Interaction scripts are intentionally kept as vanilla modules rather than
  rewritten into hooks, so behaviour is identical to the original site. To
  turn a piece into idiomatic React, port it out of `public/portfolio/` into a
  component/hook and drop it from the loader list in `src/app.jsx`.
