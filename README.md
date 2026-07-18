# Yoon Thiri Aung — Portfolio

A React + Vite + Tailwind single-page portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Deploy — Cloudflare Pages (recommended, not Vercel/Render)

1. Push this folder to a GitHub repo.
2. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL, with a custom domain option later.

Alternative CLI-only flow (no dashboard):
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist
```

## Deploy — GitHub Pages (alternative, ties to your GitHub profile)

A ready-made GitHub Actions workflow is included at
`.github/workflows/deploy.yml`.

1. Push this folder to a GitHub repo (e.g. `yoon-thiri04/portfolio`).
2. In the repo, go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.
4. Your site will be live at `https://yoon-thiri04.github.io/<repo-name>/`.

## Project structure

```
index.html
src/
  main.jsx      # React entry point
  App.jsx       # the portfolio itself
  index.css     # Tailwind entry
vite.config.js
tailwind.config.js
```
