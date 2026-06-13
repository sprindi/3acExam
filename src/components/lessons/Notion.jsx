import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ACCENT } from './accent'
import { VISUALS } from './visuals'
import Callout from './Callout'

// Rendu d'un bloc de contenu (texte, liste, étapes numérotées, encadré, visuel).
function Block({ block, accentKey }) {
  switch (block.type) {
    case 'text':
      return (
        <p
          className="lesson-body mt-3 text-[0.92rem] leading-[1.75] text-soft first:mt-0 [&_b]:text-white"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      )
    case 'list':
      return (
        <ul className="lesson-body mt-3 space-y-1.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2 text-[0.9rem] leading-[1.6] text-soft [&_b]:text-white">
              <span className={ACCENT[accentKey].text}>•</span>
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>
      )
    case 'steps':
      return (
        <ol className="lesson-body mt-3 space-y-1.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2.5 text-[0.9rem] leading-[1.6] text-soft [&_b]:text-white">
              <span
                className={
                  'mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[0.7rem] font-extrabold text-bg ' +
                  ACCENT[accentKey].bg
                }
              >
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ol>
      )
    case 'visual': {
      const Visual = VISUALS[block.id]
      if (!Visual) {
        return (
          <div className="mt-4 rounded-xl border border-dashed border-red/40 bg-red/[0.06] p-4 text-[0.8rem] text-red">
            ⚠️ Visuel manquant : <code>{block.id}</code>
          </div>
        )
      }
      return (
        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface p-3 sm:p-4">
          <Visual accentKey={accentKey} />
        </div>
      )
    }
    case 'def':
    case 'retenir':
    case 'exemple':
    case 'experience':
    case 'attention':
      return <Callout kind={block.type} label={block.label} html={block.html} />
    default:
      return null
  }
}

// Carte de notion repliable (accordion). Numérotée. La première est ouverte par défaut.
export default function Notion({ notion, accentKey, isOpen, onToggle }) {
  const a = ACCENT[accentKey]
  const reduce = useReducedMotion()

  return (
    <section
      id={notion.id}
      className={
        'mb-[14px] scroll-mt-20 overflow-hidden rounded-2xl border bg-card ' +
        (notion.important ? a.border + ' ' + a.glow : 'border-border')
      }
    >
      {/* En-tête cliquable */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-3 bg-card2 px-4 py-[14px] text-left sm:px-5"
      >
        <span
          className={
            'mt-0.5 flex h-7 min-w-[2.6rem] items-center justify-center rounded-full px-2 text-[0.72rem] font-extrabold text-bg ' +
            a.bg
          }
        >
          {notion.num}
        </span>
        <h3 className="flex-1 text-[1.02rem] font-extrabold leading-tight">
          {notion.title}
          {notion.important && (
            <span className={'ml-2 align-middle text-[0.65rem] ' + a.text}>⭐ schéma clé</span>
          )}
        </h3>
        <span
          className={'mt-1 flex-shrink-0 text-[0.75rem] text-muted transition-transform duration-200 ' + (isOpen ? 'rotate-180' : '')}
        >
          ▼
        </span>
      </button>

      {/* Corps */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 py-[18px] sm:px-5">
              {notion.hook && (
                <p className="mb-1 text-[0.84rem] italic text-muted">{notion.hook}</p>
              )}
              {notion.blocks.map((b, i) => (
                <Block key={i} block={b} accentKey={accentKey} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
