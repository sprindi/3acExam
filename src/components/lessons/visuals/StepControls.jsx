import { ACCENT } from '../accent'

// Contrôles pour les schémas animés par étapes : pause/lecture + points
// cliquables pour aller à une étape précise.
export default function StepControls({ count, step, playing, reduce, onToggle, onStep, onReplay }) {
  return (
    <div className="flex items-center gap-2">
      {!reduce && (
        <button
          type="button"
          onClick={onToggle}
          className="rounded-full border border-border bg-card2 px-3 py-[5px] text-[0.74rem] font-bold text-soft transition-colors hover:text-white"
          aria-label={playing ? 'Mettre en pause' : 'Lancer'}
        >
          {playing ? '⏸ Pause' : '▶ Lecture'}
        </button>
      )}
      <button
        type="button"
        onClick={onReplay}
        className="rounded-full border border-border bg-card2 px-3 py-[5px] text-[0.74rem] font-bold text-soft transition-colors hover:text-white"
      >
        ↻ Rejouer
      </button>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onStep(i)}
            aria-label={'Étape ' + (i + 1)}
            className={
              'h-2.5 w-2.5 rounded-full border transition-colors ' +
              (i === step ? 'border-white bg-white' : 'border-line bg-transparent hover:bg-line')
            }
          />
        ))}
      </div>
    </div>
  )
}
