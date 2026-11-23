# Arkade Wrap documentation

Developer documentation for the Arkade Wrap API, built with
[VitePress](https://vitepress.dev/) and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The GitHub Actions workflow deploys the site on every push to `main`. In the
repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**.

The custom domain is defined in `CNAME`. Add the DNS record for
`docs.arkadewrap.com` after creating the repository.
