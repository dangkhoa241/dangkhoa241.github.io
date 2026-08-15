# Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.
Content is authored as Markdown files and rebuilt into static pages — no database, no CMS.

## Editing content

- **Personal info / links**: [src/lib/config.ts](src/lib/config.ts) — name, tagline, bio, email, social links, resume path.
- **Projects**: add a `.md` file to [content/projects/](content/projects/). Each file needs frontmatter:

  ```yaml
  ---
  title: "Project Name"
  slug: "project-name"       # must match the filename
  summary: "One-line description shown on cards."
  date: "2026-01-01"
  tags: ["React", "Node"]
  featured: true              # optional, shows it on the homepage
  repoUrl: "https://github.com/you/project"   # optional
  liveUrl: "https://project.example.com"      # optional
  ---

  Body of the project write-up in Markdown.
  ```

- **Certifications**: add a `.md` file to [content/certs/](content/certs/):

  ```yaml
  ---
  title: "Certification Name"
  issuer: "Coursera / Provider"
  date: "2026-01-01"
  credentialUrl: "https://coursera.org/verify/..."
  slug: "cert-name"
  ---
  ```

- **Resume**: drop a PDF at `public/resume.pdf` — the `/resume` page links to and embeds it.

Delete the `example-project.md` / `example-cert.md` sample files once you've added real content.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying (Vercel, free tier)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and accept the defaults (Vercel auto-detects Next.js).
3. Every push to `main` redeploys the live site; every other branch/PR gets its own preview URL.

No environment variables or backend services are required — the whole site is statically generated at build time.
