// Encadrés colorés réutilisables d'une leçon.
//   def        📘 Définition      (bleu)
//   retenir    💡 À retenir       (jaune)
//   exemple    🔎 Exemple         (vert)
//   experience 🧪 Expérience      (violet)
//   attention  ⚠️ Attention       (rouge)
const KINDS = {
  def: { icon: '📘', label: 'Définition', cls: 'border-blue/30 bg-blue/[0.08]', txt: 'text-blue' },
  retenir: { icon: '💡', label: 'À retenir', cls: 'border-yellow/30 bg-yellow/[0.08]', txt: 'text-yellow' },
  exemple: { icon: '🔎', label: 'Exemple', cls: 'border-green/30 bg-green/[0.08]', txt: 'text-green' },
  experience: { icon: '🧪', label: 'Expérience', cls: 'border-purple/30 bg-purple/[0.08]', txt: 'text-purple' },
  attention: { icon: '⚠️', label: 'Attention', cls: 'border-red/30 bg-red/[0.08]', txt: 'text-red' },
}

export default function Callout({ kind, label, html }) {
  const k = KINDS[kind] || KINDS.def
  return (
    <div className={'mt-3 rounded-xl border px-[14px] py-[11px] ' + k.cls}>
      <p className={'mb-1 flex items-center gap-1.5 text-[0.8rem] font-extrabold ' + k.txt}>
        <span>{k.icon}</span>
        {label || k.label}
      </p>
      <p
        className="text-[0.88rem] leading-[1.65] text-soft [&_b]:text-white"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
