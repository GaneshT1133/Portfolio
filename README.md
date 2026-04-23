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

## Deploy (GitHub Pages)

```bash
npm run deploy:ghpages
```

For full setup and update flow, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Notes

- Resume download file is served from `public/Ganesh_Todkar_Resume.pdf`.
- Main portfolio UI is in `src/app/app.component.html` and `src/app/app.component.scss`.
- GitHub Pages base href is configured in `build:ghpages` script (`/Portfolio/`).
