# Deployment Guide

## GitHub Pages

This repo is set up for project-site deployment at:

`https://ganesht1133.github.io/Portfolio/`

### One-time setup

1. In GitHub repo `Settings` -> `Pages`.
2. Under `Build and deployment`, choose `Source: Deploy from a branch`.
3. Branch: `gh-pages` and folder: `/ (root)`.
4. Save.

### Deploy command

```bash
npm run deploy:ghpages
```

This command:

1. Builds Angular with `--base-href "/Portfolio/"`
2. Publishes `dist/ganesh-portfolio/browser` to branch `gh-pages`

### Update workflow

After code changes:

```bash
git push origin main
npm run deploy:ghpages
```
