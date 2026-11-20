# satyamdev803.github.io

Personal site of Satyam Sharma: https://satyamdev803.github.io

Next.js (static export) and Tailwind CSS, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Editing

- **Content** lives in `lib/content.ts`. Every claim must match the verified facts behind
  the resume. Site text uses no em or en dashes.
- **Blog posts** are Markdown files in `content/posts/<slug>.md`. Copy
  `content/posts/_example.md` (files starting with `_` are drafts and are not published).
- **First post:** also move `templates/blog-post-page.tsx` to `app/blog/[slug]/page.tsx`.
  Next.js static export fails on a dynamic route with no pages, so that route ships only
  once a post exists.

## Commands

```sh
pnpm install
pnpm dev        # local preview
pnpm typecheck
pnpm build      # writes the static site to out/
```
