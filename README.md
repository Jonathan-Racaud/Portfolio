# Portfolio

Personal portfolio at [portfolio.jracaud.com](https://portfolio.jracaud.com).

Built with [Astro](https://astro.build) as a static site, deployed to GitHub Pages via GitHub Actions.

## Setup

### 1. Install Bun

```sh
# macOS / Linux / WSL
curl -fsSL https://bun.sh/install | bash

# Windows PowerShell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 2. Install dependencies

```sh
bun install
```

### 3. Run locally

```sh
bun run dev        # dev server at http://localhost:4321
bun run build      # produces dist/
bun run preview    # serve dist/ locally
bun run check      # type-check content collections and Astro files
```

### 4. Activate git hooks (one-time per clone)

```sh
git config core.hooksPath .githooks
```

That points git at the committed hooks under `.githooks/`. From then on:

- `pre-commit` runs `astro check` — catches content-collection schema errors before they land.
- `pre-push` runs `bun run build` — catches build failures locally instead of in CI.

Both hooks no-op cleanly if `bun` isn't on the PATH.

### 5. Enable GitHub Pages via Actions (one-time, on GitHub)

- Repo → **Settings → Pages**.
- **Build and deployment → Source**: pick **GitHub Actions** (not "Deploy from a branch").
- **Custom domain** should show `portfolio.jracaud.com`. The `CNAME` file lives in [`public/CNAME`](public/CNAME) so it's copied into every build's `dist/`.

## Deploying

Push to `main`. The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs on every push (and can be triggered manually via **Actions → Deploy to GitHub Pages → Run workflow**). First run takes ~1–2 minutes.

## Adding content

**New case study**: drop a markdown file into [`src/content/case-studies/`](src/content/case-studies/). Front-matter schema is in [`src/content.config.ts`](src/content.config.ts). Push to `main` — it deploys automatically.

**New blog post**: same, under [`src/content/blog/`](src/content/blog/). Set `draft: true` in the front-matter to hide from the index and detail routes.

**New page**: add an `.astro` file under [`src/pages/`](src/pages/).

## Project structure

```
astro.config.mjs           # Astro config (site URL, static output)
public/
  CNAME                    # custom domain — copied verbatim into dist/
src/
  content.config.ts        # collections: caseStudies, blog
  content/
    case-studies/          # one .md per case study
    blog/                  # one .md per post
  layouts/                 # BaseLayout, CaseStudyLayout, PostLayout
  components/              # Hero, About, CaseStudyPreview, Timeline, …
  pages/                   # index.astro, case-studies/[…slug], blog/…
  styles/global.css        # palette, typography, layout primitives
.githooks/                 # pre-commit, pre-push
.github/workflows/         # deploy.yml → GitHub Pages
```
