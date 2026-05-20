# hooksweb

TypeScript web app scaffolded for local development with Vite and automated deployment to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: type-check and create production build in `dist/`
- `npm run preview`: preview production build locally
- `npm run typecheck`: run TypeScript checks only
- `npm test`: run tests once
- `npm run test:watch`: run tests in watch mode

## GitHub Pages deployment

Deployment is set up via GitHub Actions in `.github/workflows/deploy-pages.yml`.

1. Push to the `main` branch.
2. In GitHub repo settings, enable **Pages** and set the source to **GitHub Actions**.
3. The action builds and deploys `dist/` automatically.

The Vite `base` path is computed automatically in CI from `GITHUB_REPOSITORY`, so project pages like `https://<user>.github.io/<repo>/` work without extra edits.

