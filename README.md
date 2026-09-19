# nafas-website

The official marketing + docs site for
[Nafas.Observability](https://github.com/Aban-Inc/nafas.observability.package),
served at [package.nafas.cloud](https://package.nafas.cloud).

Nuxt 3 + [`@nuxt/content`](https://content.nuxt.com), statically generated
(`nuxt generate`) — no server runtime, so it deploys as plain files to
GitHub Pages today and to any static host later with no code changes.

## Design

Visually matches the embedded dashboard this site describes: dark theme,
teal/green accent, self-hosted Vazir font (no Google Fonts/CDN — the
product this site is for is itself a zero-external-dependency package).
See `app/assets/css/tokens.css` for the exact tokens, ported from
`Nafas.Observability/ClientApp/src/assets/css/main.css` in the package
repo.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
```

Docs content lives under `content/docs/**/*.md` (numbered folders/files
control nav order; the numeric prefix is stripped from the generated
route). Marketing pages are plain Vue under `app/pages/`.

## Build

```bash
npm run generate   # -> .output/public, plain static files
npx serve .output/public   # preview the static build locally
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every
push to `main`, via GitHub's own Pages actions (OIDC, no PAT). One-time
manual setup for a fresh repo:

1. Repo Settings → Pages → Source = **GitHub Actions**.
2. Point `package.nafas.cloud`'s DNS at GitHub Pages: a `CNAME` record for
   host `package` → `aban-inc.github.io`. The repo already carries
   `public/CNAME` (copied verbatim into the generated output), so once DNS
   resolves, set the custom domain in the same Pages settings page and
   GitHub provisions HTTPS automatically (can take up to ~24h after DNS
   first resolves).
