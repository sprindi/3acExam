import { useEffect, useState } from 'react'
import { videos } from '../../data/videos'
import { ACCENT } from './accent'
import Reveal from './Reveal'

// Lecteur vidéo multi-parties par chapitre.
// - On ne garde que les parties VALIDES (verifie === true, youtubeId rempli).
// - 0 partie valide  → encart « 🎬 Vidéo bientôt disponible ».
// - 1 partie valide  → lecteur simple (sans boutons).
// - ≥2 parties valides → rangée de boutons (onglets) + UN seul lecteur.
// Lazy-load : tant qu'on n'a pas cliqué ▶, on n'affiche que la vignette YouTube
// (pas d'iframe). Une SEULE iframe est montée à la fois.
export default function VideoLesson({ chapitre, accentKey }) {
  const a = ACCENT[accentKey]
  const data = videos[chapitre]
  const parts = (data?.parties || []).filter(
    (p) => p.verifie && p.youtubeId && p.youtubeId !== 'REMPLIR_ICI'
  )

  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false) // l'iframe est-elle chargée ?

  // Changer de partie : on revient à la vignette (re-clic ▶ pour lancer) → 1 iframe max.
  useEffect(() => {
    setPlaying(false)
  }, [active, chapitre])

  // Garde l'index valide si la liste change.
  const idx = active < parts.length ? active : 0
  const current = parts[idx]

  return (
    <Reveal>
      <section className="mb-6">
        <p className="mb-2 text-[0.9rem] font-bold text-soft">
          Tu n’as pas compris ? Regarde la vidéo 👇
        </p>

        {parts.length === 0 ? (
          // ── Cas A : aucune partie valide ────────────────────────────────
          <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-border bg-card px-4 py-8 text-center">
            <span className="text-3xl">🎬</span>
            <p className="text-[0.95rem] font-extrabold text-text">Vidéo bientôt disponible</p>
            <p className="text-[0.8rem] text-muted">
              On ajoute ici une vidéo vérifiée pour ce chapitre très vite. En attendant,
              lis la leçon et regarde les schémas animés 👇
            </p>
          </div>
        ) : (
          <>
            {/* ── Cas C : boutons de parties (seulement si ≥ 2) ───────────── */}
            {parts.length > 1 && (
              <div className="mb-2 flex flex-wrap gap-2">
                {parts.map((p, i) => {
                  const on = i === idx
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={on}
                      className={
                        'rounded-full border-[1.5px] px-3 py-[6px] text-[0.78rem] font-bold transition-colors ' +
                        (on
                          ? a.bg + ' border-transparent text-bg'
                          : 'border-border bg-card2 text-muted hover:text-text')
                      }
                    >
                      {p.label}
                    </button>
                  )
                })}
              </div>
            )}

            {/* ── Lecteur unique (Cas B & C) ─────────────────────────────── */}
            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={'Regarder : ' + current.label}
                className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black"
              >
                {/* Vignette YouTube (lazy : pas d'iframe tant qu'on ne clique pas) */}
                <img
                  src={'https://img.youtube.com/vi/' + current.youtubeId + '/hqdefault.jpg'}
                  alt={current.label}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red text-2xl text-white shadow-lg transition-transform group-hover:scale-110">
                    ▶
                  </span>
                  <span className="rounded-full bg-bg/70 px-3 py-1 text-[0.82rem] font-bold text-text">
                    Regarder la vidéo
                  </span>
                </span>
              </button>
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black">
                <iframe
                  key={current.youtubeId}
                  className="h-full w-full"
                  src={'https://www.youtube-nocookie.com/embed/' + current.youtubeId + '?rel=0&autoplay=1'}
                  title={current.label}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Label de la partie active */}
            <p className="mt-2 text-[0.82rem] font-bold text-soft">{current.label}</p>
          </>
        )}
      </section>
    </Reveal>
  )
}
