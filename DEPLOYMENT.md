# Deployment Guide

## Cloudflare Pages (GitHub Auto Deploy)

1. Open Cloudflare dashboard and go to `Workers & Pages`.
2. Create a new `Pages` project from GitHub.
3. Select repository: `GaneshT1133/Portfolio`.
4. Configure build:
   - Build command: `npm run build`
   - Build output directory: `dist/ganesh-portfolio/browser`
   - Root directory: (leave empty)
5. Deploy.

If needed, set environment variable:

- `NODE_VERSION=22`

## Cloudflare Pages (CLI Deploy)

Use this for manual deployments:

```bash
npm run deploy:cf
```

This script:

1. Builds Angular production output
2. Deploys `dist/ganesh-portfolio/browser` to Cloudflare Pages project `portfolio`

If your Cloudflare Pages project name is different, update:

- `package.json` script `deploy:cf`
- `wrangler.toml` value `name`

## First-time CLI Auth (one-time)

```bash
npx wrangler login
```
