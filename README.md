# SVT 3AC — Revision site (Semestre 2)

A small, fully static revision website for **3rd-year college SVT (biology), Semester 2,
Morocco**. It has two complementary parts that share one React app:

- **Lessons** (`/lecons`) — illustrated, animated lessons for the 3 chapters:
  🧠 Nervous system · 💪 Muscular system · 🛡️ Microbes & immunity. Each notion has a simple
  French explanation, an animated SVG diagram, a "💡 À retenir" key point, and a
  "Mot difficile ?" banner with darija hints.
- **Exercises** (`/exercices`) — 35 questions (QCM / True-False / Matching) taken from real
  Moroccan regional exams, with instant correction and a score bar.

Built with **React 18 + Vite + Tailwind CSS + Framer Motion**. 100 % static: no backend,
no database, **no API key**, no analytics, no user data collected.

## Routes

| Path | Page |
| ---- | ---- |
| `/` | redirects to `/lecons` |
| `/lecons` | lessons home (3 chapter cards) |
| `/lecons/:chapitre` | a chapter lesson (`nerveux` \| `muscle` \| `immunite`) |
| `/exercices` | the exercises site |
| `/exercices?chap=<chapitre>` | exercises, opened on that chapter (used by the "S'entraîner" button) |

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints — **http://localhost:5173/3acExam/** (keep the trailing slash; it
comes from the `base` setting). The dev server hot-reloads on save.

## Build

```bash
npm run build
```

Output goes to **`dist/`** (one HTML file, one CSS, one JS bundle). The build script also
copies `dist/index.html` to **`dist/404.html`** — this is what makes client-side routes
(e.g. `/exercices`) work on GitHub Pages (see below). Preview the production build with:

```bash
npm run preview   # http://localhost:4173/3acExam/
```

## Deploy to GitHub Pages

**1. Set `base` in `vite.config.js`** to match how the site is served:

```js
base: '/3acExam/',   // repo served at https://<user>.github.io/3acExam/
```

- Different repo name → `'/<repo-name>/'`.
- User/org page (`<user>.github.io`) or a custom domain → `'/'`.

> ⚠️ If `base` is wrong, GitHub Pages serves a **blank white page** (assets 404).

**2. Deploy** with the included `gh-pages` helper:

```bash
npm install
npm run deploy        # = npm run build, then push dist/ to the gh-pages branch
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → Branch:
`gh-pages` / `root` → Save**.

**Alternative — GitHub Actions:** build with `npm run build` and publish `dist/` with
`actions/deploy-pages`. Either way, the `dist/404.html` fallback is required so deep links
(`/exercices`, `/lecons/immunite`) resolve — GitHub Pages has no SPA rewrite, so it serves
`404.html`, which boots the same app and lets React Router show the right route.

## How to add or change a video

Each chapter has a video player at the top of its lesson, fed by a list of **parts**. To add
or change a part, edit **`src/data/videos.js`** and that file only:

```js
immunite: {
  titre: "Les microbes & l'immunité",
  parties: [
    { label: 'Partie 1 — Immunité naturelle', youtubeId: 'rfPkmKHPwg0', verifie: true },
    { label: 'Partie 2 — La phagocytose',     youtubeId: 'XXXXXXXXXXX', verifie: true },
  ],
},
```

- `youtubeId` = the part after `v=` in a YouTube URL. `label` = the button text.
- `parties` is always an array. With **one** valid part the player shows alone; with **two or
  more** valid parts, a row of part buttons appears and the student switches inside the site.
- A part with `youtubeId: 'REMPLIR_ICI'` **or** `verifie: false` is ignored (no button, no
  broken player). If a chapter has **no** valid part, the lesson shows a clean
  "🎬 Vidéo bientôt disponible" card.
- The player uses the privacy-friendly `youtube-nocookie.com` embed and is **lazy** (only a
  thumbnail until the student clicks ▶); a single iframe is mounted at a time.

## How to add or edit an exercise

Edit **`src/data/exercices.js`** (one object per exercise). Shapes:

- **QCM:** `{ id, chapter, type:'qcm', difficulty, question, source, options:[…], correct:<index>, explanation, tip? }`
- **True/False:** `{ …, type:'truefalse', statements:[…], answers:['V'|'F', …], explanations:[…] }`
  — `answers` and `explanations` must have the **same length** as `statements`.
- **Matching:** `{ …, type:'matching', pairs:[{label, correct}], options:[…], explanation }`
  — each `pair.correct` must be one of `options`.

`chapter` must be `nerveux`, `muscle`, or `immunite`. IDs must be unique. The total counter
in the score bar is computed from the array length, so no number needs updating by hand.

## Privacy & security

- **No data collection, no cookies, no tracking, no API keys** — the bundle is fully static.
- The only possible network request at runtime is the **YouTube embed**, and only **after**
  the student clicks play, served from `youtube-nocookie.com`.
- `<meta name="robots" content="noindex">` is set (the site is not meant to be indexed).
- Animations respect the OS **"reduce motion"** setting.

## Project structure (short)

```
src/
├── main.jsx                 # routes (BrowserRouter + basename = Vite base)
├── App.jsx                  # exercises page (reads ?chap=)
├── data/                    # exercices.js, resumes.js, lecons.js, videos.js
├── hooks/useScore.jsx       # in-memory score (Context)
└── components/
    ├── …                    # exercises UI (QCM, TrueFalse, Matching, …)
    └── lessons/             # lessons UI + animated SVG visuals
```

See `RAPPORT.md` for the full build report.
