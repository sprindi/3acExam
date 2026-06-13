import { ACCENT } from '../accent'

// Cadre standard d'un schéma : petit titre, le dessin (SVG), une légende qui
// change selon l'étape, et des contrôles optionnels (lecture/étapes).
export default function VisualFrame({ title, accentKey, caption, controls, children }) {
  const a = ACCENT[accentKey]
  return (
    <figure className="m-0">
      <figcaption className="mb-2 flex items-center gap-2">
        <span className={'h-[2px] w-4 ' + a.bg} />
        <span className="text-[0.74rem] font-extrabold uppercase tracking-[1px] text-muted">
          {title}
        </span>
      </figcaption>

      <div className="w-full">{children}</div>

      {(caption || controls) && (
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {caption && (
            <p className="text-[0.82rem] leading-snug text-soft">{caption}</p>
          )}
          {controls && <div className="shrink-0">{controls}</div>}
        </div>
      )}
    </figure>
  )
}
