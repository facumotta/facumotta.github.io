# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal academic/professional website for **Facundo Alvarez Motta**, hosted on GitHub Pages at `https://facumotta.github.io` (repo: `facumotta/facumotta.github.io`, local folder: `personal-site`).

**Purpose:** a clean, fast homepage that PhD admissions committees, faculty and industry recruiters can skim in under a minute. It should present research interests, background, projects/publications and a CV, plus a way to get in touch.

## Who the site is about

- Data Science licentiate graduate (6-year degree, bachelor's + master's equivalent), Universidad de Buenos Aires (FCEN-UBA), based in Argentina.
- Thesis: "Compositional Zero-Shot Generation of Protein Conformational Ensembles Conditioned on Ligands" (score-based generative models with E(3)-equivariant GNNs). Co-directed by Mónica Pickholz and Matthieu Jonckheere.
- Research interests: diffusion and generative models (noise processes, guidance, theory, architectures), especially discrete diffusion; methods and applications in language and the sciences; making models controllable and usable; world models.
- Background: competitive mathematics (OMA, IMO TST, Tournament of Towns), competitive programming (ICPC South American Finals), volunteer with the Argentine Mathematical Olympiad.
- Applying to PhD programs (Fall 2027) and industry ML/research roles.

Use only facts stated here or provided by me in the conversation. **Never invent** publications, affiliations, awards, grades, dates or links. If something is missing, leave a clearly marked `TODO:` placeholder and tell me.

## Tech stack and constraints

- **Static site, no build step.** Plain HTML, CSS and a little vanilla JS, so GitHub Pages serves it directly from `main` / root.
- No frameworks, no npm dependencies, no bundlers, unless I explicitly ask.
- Entry point must be `/index.html` at the repo root.
- Use **relative paths** for all assets so the site works at the root domain.
- Keep it lightweight: no heavy libraries, compress images, avoid external fonts or trackers where possible (system font stack is fine).
- Do not add analytics, cookie banners or third-party scripts without asking.

## Structure

```
personal-site/
├── index.html          # Home: short bio, research interests, news, links
├── research.html       # Thesis, projects, publications (optional until content exists)
├── cv.html             # Web CV, plus link to PDF
├── assets/
│   ├── css/style.css   # Single shared stylesheet
│   ├── js/main.js      # Only if needed (e.g. theme toggle)
│   ├── img/            # Photo and figures
│   └── cv.pdf          # Downloadable CV
├── CLAUDE.md
└── README.md
```

Start with `index.html` and `style.css` only. Add other pages when I have content for them.

## Design guidelines

- Minimal, academic, readable. Plenty of whitespace, one accent color, max content width around 700-800px.
- Typography first: clear hierarchy, comfortable line height, no decorative clutter.
- Responsive and mobile-first; must look right on a phone.
- Support light and dark mode via `prefers-color-scheme`.
- Accessible: semantic HTML (`header`, `nav`, `main`, `footer`), alt text on images, sufficient contrast, visible focus states.
- Include `<meta name="viewport">`, a proper `<title>`, a meta description and Open Graph tags.

## Content and tone

- First person, concise, professional. Short paragraphs.
- Lead with what I work on and what I'm looking for, then background.
- No buzzword padding, no exaggeration, no filler claims.
- Do not rewrite my existing wording unless I ask; when I provide text, use it as-is with minimal edits.
- Links to include (fill in what I provide): email, GitHub, LinkedIn, Google Scholar, CV PDF. Use `TODO:` for anything not yet given.

## Workflow rules

1. Before making large changes, briefly state the plan and wait for my OK.
2. Make small, focused commits with clear messages (imperative mood, e.g. "Add research interests section").
3. Test locally before committing: run `python3 -m http.server 8000` in the repo root and check `http://localhost:8000`.
4. Never push to GitHub unless I ask. Never force-push or rewrite history.
5. Do not delete files or restructure the repo without asking.
6. Do not commit secrets, tokens, or personal data I haven't explicitly asked to publish (phone number, home address, ID numbers).
7. When unsure about a fact or design choice, ask instead of guessing.

## Definition of done for any change

- Page validates as sensible HTML and renders correctly at mobile and desktop widths.
- All links and asset paths work locally.
- No console errors.
- No `TODO:` placeholders left silently; list any remaining ones in your summary.
