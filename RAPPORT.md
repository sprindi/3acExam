# PART 000 — Multi-part video player (latest)

Each chapter can now hold **several video parts**, and the student switches part **inside the
site** (Partie 1 / Partie 2 … buttons) — no trip to YouTube. Rules unchanged: hardcoded, no
API key, `youtube-nocookie` embed, lazy-load, mobile-first.

## 1. Data model — arrays of parts ✅

[src/data/videos.js](src/data/videos.js) now uses, per chapter,
`{ titre, parties: [ { label, youtubeId, verifie } ] }`. `parties` is **always an array**
(even with one video). Current state: Nerveux 1 part, Muscle 1 part, Immunité 3 parts
(part 1 real, parts 2 & 3 = `REMPLIR_ICI` / `verifie:false`, ignored until filled).

## 2. The 3 cases — tested ✅

[VideoLesson.jsx](src/components/lessons/VideoLesson.jsx) keeps only **valid** parts
(`verifie === true` and a real `youtubeId`). Verified by SSR-render:

| Case | Condition | Result | Verified |
| ---- | --------- | ------ | -------- |
| A | 0 valid parts | "🎬 Vidéo bientôt disponible", no player | branch present |
| B | 1 valid part | single player, **no buttons** | ✅ all 3 chapters today |
| C | ≥2 valid parts | row of part buttons (active one highlighted in the chapter colour) + one player | ✅ (tested by temporarily enabling Immunité part 2 → 2 buttons rendered) |

So today every chapter is Case B; **Immunité auto-upgrades to Case C** the moment a real id
is pasted into part 2.

## 3. One iframe at a time + switching ✅

- Lazy: before clicking ▶, only the YouTube **thumbnail** (`img.youtube.com/vi/<id>/hqdefault.jpg`)
  + a ▶ button are shown — **no iframe** (SSR test: `iframes=0` before click).
- Clicking a different part button resets to the new part's thumbnail (`useEffect` sets
  `playing=false`), so you re-click ▶ to start it. There is therefore **never more than one
  iframe mounted** (the `!playing ? thumbnail : iframe` conditional guarantees it), and the
  iframe `key={youtubeId}` forces a clean swap.
- Part buttons are real `<button>` (keyboard-navigable); the iframe has a `title`
  (the part label). Reduced-motion respected (animations come from `Reveal`, which is disabled
  under reduce-motion).

## 4. How to add a part

In `src/data/videos.js`, add (or edit) an object in that chapter's `parties` array:
`{ label: 'Partie 2 — La phagocytose', youtubeId: 'XXXXXXXXXXX', verifie: true }`. Nothing
else to touch — the button + player appear automatically.

## 5. Not finished / to note honestly

- **Thumbnail tradeoff:** to match this brief, the facade now loads the real YouTube
  thumbnail from `img.youtube.com` **before** the click (one image request). This is a small
  change from the earlier "zero network before click" facade; the video **player** itself
  still loads only on click and still via `youtube-nocookie.com`.
- Parts 2 & 3 of Immunité are placeholders — paste real ids to activate Case C.
- Still **not visually tested on a real device** (no browser here): the part-switching and
  thumbnail→iframe swap are coded and SSR-verified, but worth one manual phone pass.

---

# PART 00 — Full course upgrade (earlier)

The lessons went from short *summaries* to a real, complete **course** — more notions,
each mechanism step-by-step, the key **experiments**, and every term used in the exercises
is now **taught in the lesson**. Rules unchanged: all hardcoded, no API key, mobile-first,
no biology invented (content is the brief §4, used as-is).

## 1. Notions built (matches the brief §4)

| Chapter | Notions |
| ------- | ------- |
| 🧠 Nerveux (7) | 1.1 De quoi est fait le SN · 1.2 Le neurone (+ synapse) · 1.3 Sensibilité consciente · 1.4 Motricité volontaire · 1.5 Réflexe médullaire (+ grenouille & Magendie) · 1.6 Aires du cortex + croisement · 1.7 Protéger le SN |
| 💪 Muscle (6) | 2.1 Comment un muscle fait bouger (flexion/extension) · 2.2 Structure (muscle→faisceau→fibre) · 2.3 Plaque motrice · 2.4 Les 4 propriétés · 2.5 L'énergie du muscle · 2.6 Protéger ses muscles |
| 🛡️ Immunité (11) | 3.1 Les microbes · 3.2 Toxines · 3.3 Barrières naturelles · 3.4 Réaction inflammatoire (diapédèse) · 3.5 Phagocytose · 3.6 Organes lymphoïdes · 3.7 Antigène & anticorps · 3.8 Humorale & cellulaire · 3.9 Mémoire immunitaire · 3.10 Vaccination vs sérothérapie · 3.11 SIDA + allergie |

Content is in [src/data/lecons.js](src/data/lecons.js), structured as ordered blocks
(text / list / steps / callouts / visual). Each notion text is verbatim from the brief.

## 2. Visuals — all SVG, no images

**26 animated inline SVG schematics, zero external images** → no licensing issue, no broken
links. New/updated this pass: neuron+synapse, sensory path, motor path, **spinal-cord roots
(dorsal sensory / ventral motor)**, cortex areas + crossing (Nerveux); flexion/extension
biceps↔triceps, **muscle energy** glucose+O₂→energy+CO₂ (Muscle); **toxins**, **inflammation
+ diapedesis**, **lymphoid organs**, **allergy (allergen→mastocyte→histamine)**, wound in the
skin barrier (Immunité). The 3 key stepped schemas (reflex arc, phagocytosis, memory curve)
are unchanged and still marked "⭐ schéma clé".

## 3. Videos — playlist or single video

> ⚠️ **Superseded by Part 000** (multi-part player). Kept for history. The current model is a
> `parties` array per chapter, not `type`/`playlistId`.

[src/data/videos.js](src/data/videos.js) had, per chapter:
`{ type:'video'|'playlist', youtubeId, playlistId, titre, verifie }`.
[VideoLesson.jsx](src/components/lessons/VideoLesson.jsx) logic:

- `type:'playlist'` **and** `playlistId` filled → embeds `…/embed/videoseries?list=<playlistId>`.
- otherwise → embeds the single `…/embed/<youtubeId>` (safe fallback).
- still **lazy** (facade + ▶, iframe loads only on click), still `youtube-nocookie.com`.
- `verifie:false` or no id → "🎬 Vidéo bientôt disponible".

**To switch to a playlist later:** in `videos.js`, paste the playlist id (starts with `PL…`)
into `playlistId` and set `type:'playlist'` for that chapter — nothing else to touch.

## 4. Lesson ↔ exercise coherence (brief §5) — verified

Every exercise topic is now taught in a lesson notion (checked programmatically, lessons vs
`exercices.js`):

| Topic (exercise) | Now in lesson |
| ---------------- | ------------- |
| racines dorsale/ventrale (n8) | 1.5 ✅ |
| aires du cortex / croisement / cécité (n7, n17) | 1.6 ✅ |
| diapédèse (i7) | 3.4 ✅ |
| organes lymphoïdes (Rabat 2025) | 3.6 ✅ |
| réaction inflammatoire (i4) | 3.4 ✅ |
| allergie (i11) | 3.11 ✅ |
| humorale vs cellulaire (i13, i14) | 3.8 ✅ |
| vaccination vs sérothérapie (i12, i15) | 3.10 ✅ |

No gap found (no exercise term left unexplained). Some lesson terms (aire visuelle, thymus,
organes lymphoïdes) go *beyond* the exercises — extra coverage, which is the safe direction.

## 5. Design (course layout)

- **Accordion per notion** ([Notion.jsx](src/components/lessons/Notion.jsx)): numbered cards,
  **first open by default**, others collapsed → the student advances step by step without a
  wall of text. Smooth Framer-Motion open/close, disabled under reduced-motion.
- **Colored callouts** ([Callout.jsx](src/components/lessons/Callout.jsx)): 📘 Définition
  (blue), 💡 À retenir (yellow), 🔎 Exemple (green), 🧪 Expérience (purple), ⚠️ Attention (red).
- **Reading progress** ([ReadingProgress.jsx](src/components/lessons/ReadingProgress.jsx)):
  "X/N notions" bar; opening a notion (or clicking it in the TOC) marks it read.
- **Sticky TOC** updated to the new notions; clicking a TOC item opens that notion + scrolls.
- Mobile-first (accordions avoid endless scroll; SVGs scale via `viewBox`); reduced-motion
  respected throughout.

## 6. ❓ À faire vérifier par un humain

No suspected scientific error was flagged. As before, this was a structural/coherence pass,
not a full scientific re-read of every sentence, and **I changed no biology**. A SVT teacher
should still proof-read the new notions once — especially the **experiments** (grenouille
spinale/démédullée, loi de Bell-Magendie roots, allergy histamine mechanism) — before exams.

## 7. Honesty / not finished

- Build is clean; SSR render test passes for all routes; all 26 visual ids resolve.
- **Not visually verified on a real device/browser** (none available here). The accordion,
  step controls, video facade→iframe, and reduced-motion paths are coded but should get one
  manual pass on a phone.
- The JS bundle grew to ~411 kB (~129 kB gzipped) with the fuller content + extra visuals;
  still fine for a static site, could be route-split later.

---

# PART 0 — Corrections & finishing pass (earlier)

This pass covered 4 tasks. Everything stays **100 % static, no API key, mobile-first**;
no biology was invented or rewritten.

## Task 1 — "S'entraîner sur ce chapitre" button fixed

**Bug:** on a lesson page, the button linked to `/` and never selected the matching
exercises chapter — the exercises and lessons were two screens with no shared parameter,
so you always landed on the unfiltered exercises list.

**Fix (clean, with `react-router`):** the app now has explicit routes
([src/main.jsx](src/main.jsx)):

| Path | Page |
| ---- | ---- |
| `/` | → redirects to `/lecons` |
| `/lecons` | lessons home |
| `/lecons/:chapitre` | a chapter lesson |
| `/exercices` | exercises (reads `?chap=`) |
| `/lecon/:chapitre`, `*` | kept as redirects/fallback |

- The lesson button now navigates to **`/exercices?chap=<chapitre>`**
  ([LessonPage.jsx](src/components/lessons/LessonPage.jsx)).
- The exercises page ([App.jsx](src/App.jsx)) reads `?chap=` with `useSearchParams`, sets
  the matching **filter tab**, and **scrolls** to that chapter
  (`document.getElementById('chap-<id>').scrollIntoView`). An `id` was added to each chapter
  section ([ChapterSection.jsx](src/components/ChapterSection.jsx)).

**Confirmed (SSR render test on every route):** all 3 lesson pages emit
`/exercices?chap=…`, and `/exercices?chap=immunite` renders the **filtered** chapter only
(17.4 kB vs 33.4 kB for the full list) — i.e. the tab is pre-selected. The 3 chapters
(`nerveux`, `muscle`, `immunite`) all match between lessons and exercises.

## Task 2 — Per-chapter video player (placeholders only)

- **Config:** [src/data/videos.js](src/data/videos.js) — one slot per chapter,
  `{ youtubeId:'REMPLIR_ICI', titre:'À compléter', verifie:false }`. **I did not choose any
  video.** To set one, change only `youtubeId` (+ `verifie:true`) in that file.
- **Player:** [VideoLesson.jsx](src/components/lessons/VideoLesson.jsx), placed at the **top
  of each lesson page**, under the chapter intro, with the text
  "Tu n'as pas compris ? Regarde la vidéo 👇".
- **States:** while `youtubeId === "REMPLIR_ICI"` **or** `verifie === false` → a clean
  **"🎬 Vidéo bientôt disponible"** card (no broken player). When ready → a clickable
  **facade** (gradient + ▶, **no network call**), and only on click does the
  `youtube-nocookie.com` iframe load (lazy, `autoplay=1&rel=0`).
- **Confirmed:** all 3 slots are `verifie:false`, so the site currently shows the
  "bientôt disponible" card everywhere — no broken embeds.

## Task 3 — Content verification pass (technical, no biology rewrite)

Ran a programmatic structural check over `exercices.js` / `resumes.js` / `lecons.js`:

| Check | Result |
| ----- | ------ |
| Total exercises = counter | **35** (nerveux 10, muscle 8, immunité 17) ✅ |
| Types | 27 QCM + 3 True/False + 5 Matching = 35 ✅ |
| Unique IDs | no duplicates ✅ |
| QCM `correct` index | all integers, all within `options` range ✅ |
| True/False | `answers` & `explanations` length = `statements` length; values ∈ {V,F} ✅ |
| Matching | every `pair.correct` exists in the option pool ✅ |
| Leftover markers | no `[VISUEL:]`, `À VÉRIFIER`, `undefined`, or `�` in displayed content ✅ |
| Lesson ↔ exercise terms | centripète, centrifuge, plasmocyte, T4, T8, phagocytose, anticorps, antigène, sérothérapie, plaque motrice — present on both sides ✅ |

### ❓ À faire vérifier par un humain (scientific review)

- **No suspected scientific error was flagged** by the technical pass, and I did **not**
  alter any biology. However, this was a *structural* check, **not** a full scientific
  re-read of the wording of all 35 explanations. A SVT teacher should still proof-read the
  exercise explanations and the lesson texts once for scientific phrasing before the exam —
  I deliberately did not touch or "fix" any biology myself.

## Task 4 — README + pre-deploy checklist

- **README** created: [README.md](README.md) (English) — what it is, run/build/deploy,
  GitHub Pages `base`, how to change a video, how to add an exercise, privacy/security.
- **Pre-deploy checklist (executed):**

  - [x] `npm run build` succeeds, no blocking warning (423 modules, JS ~120 kB gz).
  - [x] Tested with `npm run preview`; all routes return 200 (`/`, `/lecons`,
        `/lecons/immunite`, `/exercices`, `/exercices?chap=nerveux`).
  - [x] No runtime network calls — grep over `src/`: no `fetch`/`XHR`/`axios`/`localStorage`/
        dynamic `import(`; the only external URL is the YouTube-nocookie embed (loads only
        after click).
  - [x] No API key / secret anywhere in `src/`.
  - [x] Vite `base: '/3acExam/'` matches the repo.
  - [x] Routing on GitHub Pages: `dist/404.html` is generated as a copy of `index.html`.
  - [x] `<meta name="robots" content="noindex">` present.
  - [x] `prefers-reduced-motion` respected (CSS media query + `useReducedMotion` in
        `Reveal` and the step hook).
  - [x] All 3 "S'entraîner sur ce chapitre" buttons verified (Task 1).
  - [~] Mobile small-screen pass: layout is mobile-first (grids collapse to 1 column, SVGs
        scale via `viewBox`), but **not visually verified on a device** in this environment
        (no browser available) — please glance once on a phone.

---

# RAPPORT — SVT 3AC, Semestre 2

This project now contains **two complementary sites** that share one React app:

1. **Exercises** (`/`) — the pre-existing revision site (35 exercises from real regional
   exams), already migrated to React + Vite + Tailwind.
2. **Illustrated lessons** (`/lecons`, `/lecon/:id`) — **the new part documented here**:
   three animated lesson pages (Nervous system, Muscular system, Microbes & immunity).

Everything is **100 % static**: no backend, no API, no API key, no network call, no
`localStorage`, no user data. `<meta name="robots" content="noindex">` is set.

---

# PART A — The illustrated lessons (new)

## A.1 What was built

| File | Role |
| ---- | ---- |
| `src/data/lecons.js` | **All lesson content**, copied word-for-word from the brief (§6). One entry per chapter: intro, notions (number, title, explanation, "À retenir", visual id, `important` flag), and the "Mot difficile ?" word list with darija hints. |
| `src/components/lessons/LessonsHome.jsx` | Lessons landing page: 3 chapter cards + a button to the exercises site. |
| `src/components/lessons/LessonPage.jsx` | One full lesson page: header, sticky table of contents, all notions, "Mot difficile ?" banner, "S'entraîner" footer, prev/next chapter nav. Redirects unknown chapters to `/lecons`. |
| `src/components/lessons/LessonNav.jsx` | Sticky top bar shared by the lesson pages (Leçons / S'entraîner). |
| `src/components/lessons/Notion.jsx` | Renders one notion: number badge, title, explanation, the SVG visual, and the 💡 "À retenir" card. |
| `src/components/lessons/Toc.jsx` | Clickable summary (sticky on desktop). |
| `src/components/lessons/DifficultWords.jsx` | "Mot difficile ?" banner — tap a term to reveal a simple French hint + darija. |
| `src/components/lessons/Reveal.jsx` | Framer-Motion scroll-in wrapper; **disabled when `prefers-reduced-motion`**. |
| `src/components/lessons/accent.js` | Per-chapter colour classes (blue / orange / green) as full Tailwind class names. |
| `src/components/lessons/visuals/*` | The 19 SVG schematics + helpers (`palette.js`, `VisualFrame.jsx`, `StepControls.jsx`, `useSteps.js`, `index.js` registry). |

Wiring: see **Part 0 / Task 1** for the current route table (`/` → `/lecons`,
`/lecons/:chapitre`, `/exercices`). The exercises page (`src/App.jsx`) has a banner linking
to the lessons, and every lesson page links back to the exercises with the correct chapter
pre-selected ("➡️ S'entraîner sur ce chapitre" → `/exercices?chap=<chapitre>`).

Design follows the brief: dark theme + the exact palette (reused from
`tailwind.config.js`), `rounded-2xl` cards, thin borders, mobile-first, one dominant
colour per chapter (Nervous = blue, Muscle = orange, Immunity = green), subtle
scroll-in animations, and full `prefers-reduced-motion` support.

## A.2 Visuals — SVG vs image, per chapter

**All 19 visuals are hand-drawn inline SVG (animated with Framer Motion). No external
images are used at all** — so there are **no licensing questions and no broken links**,
exactly as the brief recommends ("en cas de doute → SVG"). Nothing is hot-linked and
`src/assets/` was not needed.

| # | Notion | Visual | Type | Animation |
| - | ------ | ------ | ---- | --------- |
| 1.1 | System made of | body silhouette: brain + spinal cord + nerves | SVG | brain glow |
| 1.2 | The neuron | labelled neuron (soma, axon, terminal) | SVG | luminous influx travels the axon |
| 1.3 | 2 directions | centripetal (hand→brain) vs centrifugal (brain→muscle) arrows | SVG | flowing dashes |
| 1.4 | **Reflex arc ⭐** | stimulus → sensory → spinal cord → motor → contraction | SVG | **5 steps, play/pause/replay + step dots** |
| 1.5 | Crossed control | front-view brain, two crossing pathways to the arms | SVG | flowing dashes |
| 1.6 | Protect the brain | 4 icon cards (sleep, food, helmet, no-drug) | SVG/HTML | — |
| 2.1 | How a muscle moves | bending arm, biceps shortens & pulls | SVG | looping flexion + biceps bulge |
| 2.2 | Muscle structure | zoom: muscle → bundle → fibre (multiple nuclei) | SVG | **3 zoom steps** |
| 2.3 | 4 properties | 4 cards (Excit./Contract./Élast./Tonicité) | SVG | spring + shrinking bar |
| 2.4 | Motor end-plate | axon terminal meeting a muscle fibre | SVG | incoming influx pulse |
| 2.5 | Protect muscles | 4 icon cards (warm-up, stretch, no-doping) | SVG/HTML | — |
| 3.1 | Microbes | bacterium vs virus, side by side | SVG | gentle wobble/pulse |
| 3.2 | Body barriers | skin cross-section blocking microbes | SVG | microbes bounce off |
| 3.3 | **Phagocytosis ⭐** | adhesion → ingestion → digestion → rejection | SVG | **4 steps, play/pause/replay + dots** |
| 3.4 | Specific defense | org-chart: Antigen → T4 → (B→plasmocyte→antibody) / (T8→kill) | SVG | static, colour-coded branches |
| 3.5 | Antigen vs antibody | Y-shaped antibody, key-and-lock fit vs no-fit | SVG | matching antigen docks |
| 3.6 | **Immune memory ⭐** | antibody-vs-time graph, small slow vs big fast response | SVG | **curve traces itself (pathLength)** |
| 3.7 | Vaccine vs serum | 2-column comparison | SVG/HTML | — |
| 3.8 | AIDS / HIV | HIV destroys T4 → T8 & B greyed out | SVG | **3 steps, play/pause/replay + dots** |

The three "icon" notions (1.6, 2.5, and the two comparison tables 2.3/3.7) mix small SVG
with HTML cards, as the brief allowed ("pas besoin de SVG complexe ici").

## A.3 Language & darija

- French is kept simple and short.
- Darija hints are used **only where the brief provided them** and **verbatim** (e.g.
  influx nerveux السيالة العصبية, neurone الخلية العصبية, moelle épinière النخاع الشوكي,
  drogue المخدرات, tendon الوتر, faisceau حزم, plaque motrice الصفيحة المحركة, échauffement
  التسخين, dopage المنشطات, microbe الميكروب, virus الفيروسات, antigène المُستضد, anticorps
  الأجسام المضادة, vaccin اللقاح, VIH فيروس السيدا). No darija was invented. Terms with no
  hint in the brief (centripète, centrifuge, fibre musculaire) are explained in plain
  French only.

## A.4 Run locally

```bash
npm install      # framer-motion was added for this work
npm run dev
```

Open the URL Vite prints — **http://localhost:5173/3acExam/** (keep the trailing slash).
Lessons: **/3acExam/lecons** and e.g. **/3acExam/lecons/immunite**.

Production preview:

```bash
npm run build
npm run preview   # http://localhost:4173/3acExam/
```

## A.5 Deploy to GitHub Pages

Unchanged from the migration setup (see Part B §4 for full detail). In short:

1. In `vite.config.js`, set `base` to your repo name (currently `'/3acExam/'`; use `'/'`
   for a user page or custom domain).
2. `npm run deploy` (uses the `gh-pages` dev dependency) → builds `dist/` and pushes the
   `gh-pages` branch. Then **Settings → Pages → Branch: `gh-pages` / root**.

The build copies `index.html` to `dist/404.html`, so the client-side lesson routes
(`/lecons`, `/lecon/:id`) resolve correctly on GitHub Pages (which has no SPA fallback).

## A.6 What's left / to verify honestly

- **No `{/* À VÉRIFIER */}` comments were needed.** All biology text came verbatim from
  the brief; I did not invent or alter any scientific content. The only placeholder logic
  is a defensive "missing visual" notice in `Notion.jsx` that never triggers (all 19 ids
  are registered).
- **Browser testing was limited.** I verified: a clean production build, and an
  **SSR smoke test** that renders every route (`/`, `/lecons`, all 3 chapters, and an
  invalid chapter) through `renderToString` without throwing. No headless browser was
  available in this environment, so I could **not** click through the animations/step
  controls visually — please do a quick pass on a phone, especially:
  - the stepped schemas (reflex arc, phagocytosis, AIDS, muscle zoom) — play/pause,
    replay, and the step dots;
  - that `prefers-reduced-motion` (enable "Reduce motion" on the phone) shows the final
    state with no looping animation.
- **SVG drawing fidelity:** the schematics are faithful to what each notion must show,
  but they are stylised diagrams, not anatomical art. If a teacher wants a specific
  textbook layout (e.g. the exact reflex-arc figure used in the Moroccan manual), the
  SVGs are easy to tweak in `src/components/lessons/visuals/`.
- **Bundle size:** adding Framer Motion grew the JS bundle to ~376 kB (~119 kB gzipped).
  Acceptable for a static site; could be code-split later if needed.
- The pre-existing `npm audit` dev-only advisories (Vite/esbuild toolchain) are unchanged
  and do not affect the shipped static site.

## A.7 File tree (new files only)

```
src/
├── data/
│   └── lecons.js                     ← lesson content (verbatim from brief §6)
└── components/
    └── lessons/
        ├── LessonsHome.jsx           ← /lecons landing
        ├── LessonPage.jsx            ← /lecon/:id full lesson
        ├── LessonNav.jsx             ← shared sticky top bar
        ├── Notion.jsx                ← one notion block
        ├── Toc.jsx                   ← sticky summary
        ├── DifficultWords.jsx        ← "Mot difficile ?" banner
        ├── Reveal.jsx                ← scroll-in (reduced-motion aware)
        ├── accent.js                 ← per-chapter colour classes
        └── visuals/
            ├── index.js              ← visual id → component registry
            ├── palette.js            ← hex colours for SVG
            ├── VisualFrame.jsx       ← title + caption + controls wrapper
            ├── StepControls.jsx      ← play / pause / replay / step dots
            ├── useSteps.js           ← step timer hook (reduced-motion aware)
            ├── Nerveux.jsx           ← 6 chapter-1 visuals
            ├── Muscle.jsx            ← 5 chapter-2 visuals
            └── Immunite.jsx          ← 8 chapter-3 visuals
```

Modified: `src/main.jsx` (routes), `src/App.jsx` (link to lessons), `src/index.css`
(darija span style), `package.json` (framer-motion).

---

# PART B — Earlier migration (React + Vite + Tailwind)

The SVT 3AC revision site (originally a single `index.html` + `css/` + `js/`) had already
been ported to **React 18 + Vite + Tailwind CSS**. All exercise content is **100 %
hardcoded** (no network, no API, no backend, no `localStorage`). The score lives only in
React memory, exactly like the original.

## 1. File structure (exercises site)

```
3acExam/
├── index.html                 ← Vite entry (mounts React into #root)
├── package.json
├── vite.config.js             ← React plugin + GitHub Pages `base`
├── tailwind.config.js         ← dark theme colors (bg, surface, blue, green…)
├── postcss.config.js
├── .gitignore
├── RAPPORT.md                 ← this file
│
├── legacy/                    ← UNTOUCHED copy of the original site (reference)
│   ├── index.html
│   ├── css/style.css
│   └── js/app.js
│
└── src/
    ├── main.jsx               ← React root + BrowserRouter + ScoreProvider + routes
    ├── App.jsx                ← exercises page: header, tabs, intro, chapters, footer
    ├── index.css              ← Tailwind directives + reduced-motion + helpers
    │
    ├── data/
    │   ├── exercices.js       ← the 35 exercises, hardcoded (array of objects)
    │   └── resumes.js         ← the 3 chapter summaries + chapter metadata
    │
    ├── hooks/
    │   └── useScore.jsx       ← global score (Context): correct / wrong / done
    │
    └── components/            ← exercises components (Header, Tabs, QCM, …)
        └── lessons/           ← NEW lessons UI (see Part A)
```

> The original files were preserved in `legacy/` as the scientific reference. The root
> `index.html` is the Vite entry point.

## 2. Content fidelity — the 35 exercises

**All 35 exercises are present and copied word-for-word** from `legacy/index.html`
(verified: `exercices.length === 35`, unique IDs).

| Chapter        | IDs        | Count | Types                          |
| -------------- | ---------- | ----- | ------------------------------ |
| Nerveux (c1)   | n1 – n10   | 10    | 8 QCM, 1 V/F, 1 matching       |
| Muscle (c2)    | mu1 – mu8  | 8     | 5 QCM, 1 V/F, 2 matching       |
| Immunité (c3)  | i1 – i17   | 17    | 14 QCM, 1 V/F, 2 matching      |
| **Total**      |            | **35**| **27 QCM, 3 V/F, 5 matching**  |

Preserved exactly: question text, options, answers, explanations, the 3 exercise types
and their behaviour, 💡 piège boxes, the 3 collapsible "Résumé simple" blocks, score bar,
progress bar, filter tabs, intro banner, footer, dark theme + palette, "Effacer" reset,
answer-locking, and the section labels (with ⭐ on Immunité). Nothing in the biology
content was added, removed, or rewritten.

## 3. Run locally

```bash
npm install
npm run dev    # http://localhost:5173/3acExam/
```

Production preview: `npm run build && npm run preview`.

## 4. Deploy to GitHub Pages

**a)** Set `base` in `vite.config.js` to match your repository name (currently
`'/3acExam/'`):
- Repo `https://<user>.github.io/3acExam/` → keep `'/3acExam/'`.
- Different repo name → `'/<repo-name>/'`.
- User page (`<user>.github.io`) or custom domain → `'/'`.

**b)** One-command deploy (the `gh-pages` dev dependency is already present):

```bash
npm install
npm run deploy
```

This builds into `dist/` and pushes it to the `gh-pages` branch. Then in the repo:
**Settings → Pages → Branch: `gh-pages` / root → Save**.

**c)** Manual alternative:

```bash
npm run build
git subtree push --prefix dist origin gh-pages
```

The build writes `dist/404.html` (a copy of `index.html`) so client-side routes (the
lessons pages) resolve correctly on GitHub Pages.

## 5. "All hardcoded" verification

- **Zero runtime network calls** (no `fetch`, `XMLHttpRequest`, `axios`, `localStorage`,
  `sessionStorage`, dynamic `import(`).
- All data is static JS imported at build time (`src/data/*`).
- Fully static bundle servable as-is from GitHub Pages. No backend, no database, no keys.

## 6. Known limitations (exercises site)

- No automated tests; logic verified by code reading + a successful build + a data
  integrity script (count = 35, unique IDs).
- `dangerouslySetInnerHTML` is used for the résumé/feedback/correction strings — only
  because the hardcoded content contains inline `<b>`/`<br>` and there is no user input
  (no XSS surface).
- Visual parity is faithful but re-expressed in Tailwind utilities; tiny pixel
  differences from the original CSS are possible.
