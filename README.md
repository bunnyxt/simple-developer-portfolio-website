# Jinyuan Liu Portfolio

Personal portfolio built with Next.js 16 (Pages Router), React 19, and Tailwind CSS 4.

## Local development

Use Node.js 24 (see `.nvmrc`) and npm. No environment variables are required for the portfolio pages.

```sh
nvm use
npm ci
npm run dev
```

Open <http://localhost:3000>. Edit the content in `constants/data.js` and the pages in `pages/`.

## Production check

```sh
npm run build
npm run start
```

The build uses Webpack explicitly to support the existing Pages Router and Tailwind setup. The home page and all other portfolio routes are statically rendered. GitHub repository fetching was removed from the home page because that section is not displayed.

The contact form posts to an existing external AWS endpoint. Its availability and configuration are separate from this repository; check the form after each deployment.

## Deploy on Vercel

Import this repository as a Vercel project, or reconnect its existing Git integration. Use the Next.js framework preset, the default build command (`npm run build`), and Node.js 24. The `engines.node` field pins Node.js 24 for Vercel builds. No environment variables are needed for the current pages.

Push changes to the production branch configured in Vercel. Before assigning the domain, verify `/`, `/about`, `/projects`, `/experience`, `/contact`, and `/projects/medical-image-analysis-platform` on the deployment preview, including the theme toggle and contact submission.

GitHub Actions runs `npm ci` and `npm run build` on pushes and pull requests to `main`.
