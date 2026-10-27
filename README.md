# aiwithjen.com — Site Repository

Personal portfolio site for Jen Kelleman — ML/AI data engineer, speaker, educator. Built with Hugo, deployed via Netlify.

**Live:** [aiwithjen.com](https://aiwithjen.com/)

## Pages

| Page | File | What it covers |
|------|------|----------------|
| Home | `content/_index.md` | Intro, featured cards (Speaking, Courses, Articles) |
| About | `content/about.md` | Bio, beliefs, what I've built, awards, education, Boston community |
| Speaking | `content/speaking.md` | Talk abstracts, upcoming events, recent events, booking info |
| Courses | `content/courses.md` | Full-Stack Data Clarity course, coming-soon courses, university partnerships |
| Book | `content/book.md` | Full-Stack Data Clarity book — premise, chapter outline, notify CTA |
| Work with Me | `content/work-with-me.md` | Speaking, teaching, consulting, mentoring, office hours |
| Articles | `content/articles.md` | Links to Medium writing |
| Contact | `content/contact.md` | Booking link, email, LinkedIn |
| Testimonials | `content/testimonials.md` | Endorsements |

## Local development

```bash
hugo server -D
```

## Resume PDF

The downloadable resume is generated from semantic HTML and dedicated print
CSS. The output keeps selectable text and an ATS-friendly reading order.

```bash
npm install
npx playwright install chromium
npm run resume:pdf
```

- Source: `resume/jen-kelleman-resume.html`
- Print styles: `static/css/resume-print.css`
- Output: `static/files/jen-kelleman-resume.pdf`

## Structure

```
site/
├── content/          # Markdown pages (one per page)
├── layouts/          # HTML templates
├── static/           # Images, downloads, assets
├── config.toml       # Site configuration
└── README.md         # This file
```

## Deployment

Push to `main` → auto-deploys via Netlify.

## Recent updates (April 2026)

- Renamed course/book to **Full-Stack Data Clarity** (was "Full-Stack Clarity")
- Beliefs section rewritten with AI-first framing (AI-accessible content, evaluative rubrics)
- "Beyond Microsoft" replaced with Boston tech community (PyLadies, PyData)
- Universities section repositioned around AI + data literacy curriculum gaps
- Inline CTAs converted to centered button-style CTAs throughout
- Upcoming/Book sections cleaned up (no italics, proper CTA placement)
