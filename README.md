# Ganesh Portfolio (Angular)

Light-minimal portfolio for a Java Full Stack + AWS profile.

## Local Run

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production Build

```bash
npm run build
```

Build output: `dist/ganesh-portfolio/browser`

## Deploy Free (Cloudflare Pages)

1. Push this project to GitHub.
2. In Cloudflare Pages, create a new project from that repo.
3. Use:
   - Build command: `npm run build`
   - Build output directory: `dist/ganesh-portfolio/browser`
4. Deploy.

For full steps (UI + CLI), see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Deploy Free (Vercel)

1. Import GitHub repo in Vercel.
2. Framework preset: `Angular` (or auto-detect).
3. Use:
   - Build command: `npm run build`
   - Output directory: `dist/ganesh-portfolio/browser`
4. Deploy.

## Notes

- Resume download file is served from `public/Ganesh_Todkar_Resume.pdf`.
- Main portfolio UI is in `src/app/app.component.html` and `src/app/app.component.scss`.
- `wrangler.toml` is included for Cloudflare Pages CLI deployments.
