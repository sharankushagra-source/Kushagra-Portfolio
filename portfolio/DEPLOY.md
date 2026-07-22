# Deploying this portfolio + custom domain

The site is a **static, self-contained build** — no server, no build step. Files:

```
portfolio.html              ← homepage (open this)
portfolio/portfolio.css     ← the KS design system
portfolio/portfolio.js      ← nav, theme switcher
portfolio/img/*.png         ← project covers
portfolio/work/*.html       ← case-study pages
```

## 1. Pick a host (all free for static sites)
- **Netlify** — easiest: drag the project folder onto app.netlify.com → live in seconds.
- **Vercel** — connect a GitHub repo or drag-drop.
- **Cloudflare Pages** — great if you also buy the domain at Cloudflare.
- **GitHub Pages** — free with a GitHub repo.

> For a clean root URL, the homepage should be served as `index.html`. Ask me to generate a **deploy bundle** and I'll rename `portfolio.html → index.html` and fix the internal links automatically.

## 2. Buy a domain
At any registrar — **Cloudflare, Namecheap, Porkbun, GoDaddy**. Good options for you:
`kushagrasharan.com` · `kushagra.design` · `sharan.design` · `superchargedink.com`

## 3. Connect the domain
1. In your host (e.g. Netlify) → **Domain settings → Add custom domain** → enter your domain.
2. The host shows DNS records — usually a **CNAME** (`www`) and/or **A / ALIAS** (root).
3. Add those records at your registrar's DNS panel.
4. HTTPS is issued automatically (Let's Encrypt). Live in minutes to a few hours.

## Behance
Each project's case-study page links straight to its Behance gallery (top-right button, the facts row, and the bottom CTA) — so visitors can always jump to the full project.

---
**Next:** tell me your chosen domain + host and I'll generate the ready-to-upload `index.html` bundle (with a `CNAME` / redirects file) so all you do is drag-and-drop.
