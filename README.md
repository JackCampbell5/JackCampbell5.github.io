# JackCampbell5.github.io

Personal portfolio — [jackcampbell5.github.io](https://jackcampbell5.github.io)

Built with Vite + React + Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions.

---

## Local development

```bash
npm install
npm run dev
```

## Adding a project

Edit [`src/data/projects.js`](src/data/projects.js). Each entry has these fields:

```js
{
  id: 'unique-id',          // string, unique across all entries
  name: 'Project Name',     // display title
  description: '...',       // what problem it solved
  stack: ['React', '...'],  // array of tech used
  liveUrl: 'https://...',   // or null
  repoUrl: 'https://...',   // or null
  repoPublic: true,         // if false, GitHub link is hidden
  featured: true,           // if true, shown on homepage strip
}
```

No component changes needed — the grid and home strip read from this file automatically.

## Adding photos

1. Drop originals into `photos/originals/landscapes/` or `photos/originals/sunsets/`
2. Run the pipeline:
   ```bash
   npm run photos
   ```
3. Commit the generated derivatives in `public/photos/` and the updated `src/data/photos.json`

See [`photos/README.md`](photos/README.md) for more detail on the pipeline, idempotency,
and the tradeoff between committing derivatives vs using a CDN.

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.heic`, `.heif`, `.tiff`

## Deploying

Push to `main`. The GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds, copies `index.html` → `404.html` (deep-link fix), and deploys to Pages automatically.

**First-time setup:** In the repo Settings → Pages, set the source to **GitHub Actions** (not
the legacy branch deploy). If the workflow runs but the site doesn't appear, that's almost always
the missing setting.

## Pointing a custom domain

See the instructions in [`public/CNAME`](public/CNAME).

## Cloudflare Web Analytics

To enable analytics, get a free beacon token at dash.cloudflare.com → Web Analytics → Add a site,
then uncomment the `<script>` tag in [`index.html`](index.html) and replace
`REPLACE_WITH_CF_BEACON_TOKEN` with your token. No cookie banner needed.
