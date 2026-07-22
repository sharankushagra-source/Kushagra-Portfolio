# Kushagra Sharan — Portfolio (React + Vite)

Vercel-ready. This project was split into 3 upload batches to stay under GitHub's 100-file web-upload limit.
Merge all three into ONE repo root (same folder), preserving paths:

- **batch1-core/**  -> repo root (index.html, config, src/, public/design-system, public/ui_kits, public root files)
- **batch2-portfolio/** -> merge its `public/portfolio/` into `public/`
- **batch3-factile/**   -> merge its `public/factile/` into `public/`

Final layout:
```
index.html  package.json  vite.config.js  vercel.json  .gitignore
src/main.jsx
public/portfolio/  public/factile/  public/design-system/  public/ui_kits/my-library/
public/_ds_bundle.js  public/styles.css
public/Portfolio - Soft Grid Clean.html
public/Case Study - Factile (scroll).html
public/Facets UI Kit.html
```

## Run / build
```bash
npm install
npm run dev
npm run build   # -> dist/
```

## Deploy
Push the merged repo to GitHub, import into Vercel (auto-detects Vite: build `vite build`, output `dist`).
