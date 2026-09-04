# Photo originals

## What lives here vs what's committed

| Location | Committed? | Why |
|---|---|---|
| `photos/originals/` | **No** — `.gitignore`'d | Raw files are large; derivatives cover all display needs |
| `public/photos/` | **Yes** | AVIF, WebP, JPEG derivatives at 400/800/1600w (~100 MB total) |
| `src/data/photos.json` | **Yes** | Metadata, dimensions, blur placeholders |

**Tradeoff:** the repo carries ~100 MB of image derivatives. If that ever becomes unwieldy,
move `public/photos/` to a CDN (Cloudflare R2, Bunny.net) and update the paths in
`photos.json` — the pipeline and gallery components don't need to change.

## Directory layout

```
photos/originals/
  landscapes/   ← drop landscape originals here
  sunsets/      ← drop sunset originals here
```

Category is derived from the subdirectory name. Adding a new category is as simple as
creating a new subdirectory and re-running `npm run photos`.

## Running the pipeline

```bash
npm run photos
```

The script (`scripts/process-photos.js`) is idempotent — it skips any derivative that
already exists and is newer than its source file. Only changed or new originals are
re-processed.

**Never runs in CI.** The GitHub Actions workflow only runs `npm run build`. Derivatives
must be committed before pushing if you want them on the live site.

## Supported formats

`.jpg`, `.jpeg`, `.png`, `.webp`, `.heic`, `.heif`, `.tiff`
