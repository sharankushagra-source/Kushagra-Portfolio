# Kushagra Sharan — Portfolio

Static multi-page site (plain HTML/CSS/JS) wrapped in a Vite + React shell for Vercel deploys.

- `index.html` — the live portfolio (Soft Grid + Sound)
- `public/` — every other page (case studies, design system, UI kit) plus all shared assets, served as-is

## Run locally
```
npm install
npm run dev
```

## Deploy to Vercel
Push to a Git repo and import it in Vercel — framework preset "Vite", build command `npm run build`, output directory `dist`. No env vars needed.
