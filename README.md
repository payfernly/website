# payfernly.com

The marketing site for Fernly — payroll, benefits and tax filing for US teams of 5 to 50.
Live at https://payfernly.com.

## Stack

- Next.js 15 (App Router), TypeScript, React 19
- Plain CSS modules (`components/*.module.css`) plus `app/globals.css` for tokens and base styles
- Every page is statically rendered at build time; there is no database, API or CMS
- Hosted on Vercel; `main` is production

## Running it locally

You need Node 20 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev      # http://localhost:3000
```

To check a production build before pushing:

```bash
npm run build
npm start
```

## Where things live

```
app/
  layout.tsx              site shell: header, footer, default <title> template
  page.tsx                home
  pricing/                plans and the "team of 12" table
  features/payroll/       feature pages
  features/benefits/
  features/compliance/
  about/
  contact/                contact form (opens the visitor's mail client)
  blog/                   blog index + one folder per post
  sitemap.ts, robots.ts   generated at build time
components/               SiteHeader, SiteFooter, shared page styles
lib/posts.ts              blog post list (titles, dates, authors, summaries)
public/                   logo and hand-drawn SVG illustrations
```

### Adding a blog post

1. Add an entry to `POSTS` in `lib/posts.ts` (slug, title, summary, date, author).
2. Copy one of the folders under `app/blog/` to `app/blog/<slug>/` and write the post.
   The index page and the sitemap pick it up from `POSTS` automatically.

### Page metadata

Each page exports its own `metadata` with a `title`, `description` and `alternates.canonical`.
The root layout adds the ` — Fernly` suffix to titles.

## Deploying

Vercel builds every push. Pull requests get a preview URL; merging to `main` deploys to
production at payfernly.com. There are no environment variables to set.

Questions: #web in Slack, or ask Marcus.
