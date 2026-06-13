import { motion, useReducedMotion } from 'framer-motion'
import { C } from './palette'
import VisualFrame from './VisualFrame'
import StepControls from './StepControls'
import { useSteps } from './useSteps'

// ── 1.1 — Le système nerveux : silhouette + cerveau + moelle + nerfs ──────────
export function Systeme({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Le système nerveux"
      accentKey={accentKey}
      caption="Cerveau + moelle épinière = les centres nerveux. Les nerfs partent vers tout le corps."
    >
      <svg viewBox="0 0 360 280" className="h-auto w-full" role="img" aria-label="Silhouette du corps avec cerveau, moelle épinière et nerfs">
        {/* Silhouette */}
        <g fill={C.card2} stroke={C.border} strokeWidth="2">
          <circle cx="180" cy="44" r="26" />
          <path d="M150 78 Q180 70 210 78 L222 170 Q180 182 138 170 Z" />
          <path d="M150 90 L110 150" strokeLinecap="round" />
          <path d="M210 90 L250 150" strokeLinecap="round" />
          <path d="M162 170 L150 250" strokeLinecap="round" />
          <path d="M198 170 L210 250" strokeLinecap="round" />
        </g>

        {/* Cerveau */}
        <motion.path
          d="M168 40 q-10 -10 0 -18 q12 -8 24 0 q10 8 0 18 q-4 8 -12 6 q-8 2 -12 -6 Z"
          fill={C.blue}
          opacity="0.92"
          animate={reduce ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />

        {/* Moelle épinière */}
        <rect x="176" y="70" width="8" height="98" rx="4" fill={C.blue} />

        {/* Nerfs (lignes fines bleues) */}
        <g stroke={C.blue} strokeWidth="2" strokeLinecap="round" opacity="0.65" fill="none">
          <path d="M180 96 L116 150" />
          <path d="M180 110 L244 150" />
          <path d="M180 160 L152 246" />
          <path d="M180 160 L208 246" />
        </g>

        {/* Légendes */}
        <g fontSize="12" fontWeight="700" fill={C.soft} fontFamily="sans-serif">
          <text x="206" y="30" fill={C.blue}>Cerveau</text>
          <line x1="196" y1="34" x2="180" y2="40" stroke={C.blue} strokeWidth="1.5" />
          <text x="196" y="120" fill={C.blue}>Moelle épinière</text>
          <line x1="194" y1="116" x2="184" y2="112" stroke={C.blue} strokeWidth="1.5" />
          <text x="20" y="150" fill={C.soft}>Nerfs</text>
          <line x1="48" y1="146" x2="120" y2="140" stroke={C.muted} strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      </svg>
    </VisualFrame>
  )
}

// ── 1.2 — Le neurone (influx qui circule) ─────────────────────────────────────
export function Neurone({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Le neurone"
      accentKey={accentKey}
      caption="L’influx circule dans UN seul sens : corps cellulaire → axone → arborisation."
    >
      <svg viewBox="0 0 470 180" className="h-auto w-full" role="img" aria-label="Neurone légendé avec influx qui circule, et synapse vers le neurone suivant">
        {/* Dendrites */}
        <g stroke={C.blue} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8">
          <path d="M70 90 L30 60" />
          <path d="M70 90 L26 90" />
          <path d="M70 90 L30 120" />
          <path d="M70 90 L44 44" />
          <path d="M70 90 L44 136" />
        </g>

        {/* Corps cellulaire */}
        <circle cx="78" cy="90" r="26" fill={C.blue} opacity="0.9" />
        <circle cx="78" cy="90" r="9" fill={C.bg} opacity="0.5" />

        {/* Axone */}
        <line x1="104" y1="90" x2="320" y2="90" stroke={C.blue} strokeWidth="8" strokeLinecap="round" opacity="0.55" />

        {/* Arborisation terminale */}
        <g stroke={C.blue} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M320 90 L360 64" />
          <path d="M320 90 L366 90" />
          <path d="M320 90 L360 116" />
          <path d="M360 64 L384 54" />
          <path d="M360 116 L384 126" />
        </g>

        {/* Influx lumineux */}
        {!reduce && (
          <motion.circle
            r="7"
            fill={C.yellow}
            animate={{ cx: [104, 320], cy: [90, 90], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 6px ' + C.yellow + ')' }}
          />
        )}

        {/* Sens de circulation */}
        <path d="M150 64 L210 64" stroke={C.yellow} strokeWidth="2" markerEnd="url(#arrowY)" />
        <defs>
          <marker id="arrowY" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill={C.yellow} />
          </marker>
        </defs>

        {/* Synapse + début du neurone suivant */}
        <line x1="392" y1="40" x2="392" y2="140" stroke={C.muted} strokeWidth="1.5" strokeDasharray="3 4" />
        <g stroke={C.green} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7">
          <path d="M420 90 L452 66" />
          <path d="M420 90 L456 90" />
          <path d="M420 90 L452 114" />
        </g>
        <circle cx="430" cy="90" r="8" fill={C.green} opacity="0.5" />
        <text x="372" y="36" fontSize="11" fontWeight="800" fill={C.green} fontFamily="sans-serif">synapse</text>

        {/* Légendes */}
        <g fontSize="12" fontWeight="700" fontFamily="sans-serif">
          <text x="34" y="166" fill={C.blue}>Corps cellulaire</text>
          <text x="170" y="118" fill={C.soft}>Axone</text>
          <text x="300" y="160" fill={C.blue}>Arborisation</text>
          <text x="406" y="160" fill={C.green}>neurone 2</text>
        </g>
      </svg>
    </VisualFrame>
  )
}

// ── 1.3 — Centripète vs centrifuge ────────────────────────────────────────────
function Flow({ d, color, reduce, reverse = false }) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="3 13"
      animate={reduce ? {} : { strokeDashoffset: reverse ? [0, 16] : [0, -16] }}
      transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export function Sens({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Les 2 sens de circulation"
      accentKey={accentKey}
      caption="Centripète = VERS le cerveau (sensitif). Centrifuge = SORT vers le muscle (moteur)."
    >
      <svg viewBox="0 0 380 230" className="h-auto w-full" role="img" aria-label="Flèche centripète main vers cerveau, flèche centrifuge cerveau vers muscle">
        {/* Cerveau */}
        <ellipse cx="190" cy="40" rx="42" ry="28" fill={C.blue} opacity="0.9" />
        <text x="190" y="45" textAnchor="middle" fontSize="13" fontWeight="800" fill={C.bg} fontFamily="sans-serif">Cerveau</text>

        {/* Main (gauche) */}
        <text x="60" y="200" textAnchor="middle" fontSize="34">✋</text>
        <text x="60" y="222" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">Organe (peau)</text>

        {/* Muscle (droite) */}
        <text x="320" y="200" textAnchor="middle" fontSize="34">💪</text>
        <text x="320" y="222" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">Muscle</text>

        {/* Flèche centripète (main → cerveau) bleu */}
        <Flow d="M72 168 Q90 90 150 56" color={C.blue} reduce={reduce} />
        <path d="M72 168 Q90 90 150 56" stroke="none" fill="none" markerStart="url(#headBlue)" />
        <text x="58" y="120" fontSize="12" fontWeight="800" fill={C.blue} fontFamily="sans-serif" transform="rotate(-58 78 120)">centripète →</text>

        {/* Flèche centrifuge (cerveau → muscle) orange */}
        <Flow d="M230 56 Q300 90 312 168" color={C.orange} reduce={reduce} />
        <text x="246" y="120" fontSize="12" fontWeight="800" fill={C.orange} fontFamily="sans-serif" transform="rotate(58 300 120)">→ centrifuge</text>

        <defs>
          <marker id="headBlue" markerWidth="9" markerHeight="9" refX="4" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill={C.blue} />
          </marker>
        </defs>
        {/* Pointes de flèche claires */}
        <path d="M150 56 l-14 -2 l6 12 Z" fill={C.blue} />
        <path d="M312 168 l-12 -6 l-2 14 Z" fill={C.orange} />
      </svg>
    </VisualFrame>
  )
}

// ── 1.4 — L'arc réflexe (LE schéma clé, animé par étapes) ─────────────────────
const REFLEXE_STEPS = [
  'Stimulus : la main touche l’épine 🌵 (chaud, piqûre…).',
  'Message sensitif : il MONTE vers la moelle (centripète).',
  'La moelle épinière traite le message (pas le cerveau !).',
  'Message moteur : il DESCEND vers le muscle (centrifuge).',
  'Le muscle se contracte → la main se retire vite !',
]

export function Reflexe({ accentKey }) {
  const { step, playing, reduce, setStep, toggle, replay } = useSteps(REFLEXE_STEPS.length, {
    interval: 1700,
  })

  const handX = step >= 4 ? 64 : 84 // la main recule à la dernière étape

  return (
    <VisualFrame
      title="L’arc réflexe ⭐"
      accentKey={accentKey}
      caption={(step + 1) + '/5 — ' + REFLEXE_STEPS[step]}
      controls={
        <StepControls
          count={REFLEXE_STEPS.length}
          step={step}
          playing={playing}
          reduce={reduce}
          onToggle={toggle}
          onStep={setStep}
          onReplay={replay}
        />
      }
    >
      <svg viewBox="0 0 440 280" className="h-auto w-full" role="img" aria-label="Arc réflexe animé : stimulus, message sensitif, moelle, message moteur, contraction">
        {/* Moelle épinière (centre haut) */}
        <ellipse cx="220" cy="60" rx="52" ry="30" fill={step === 2 ? C.yellow : C.card2} stroke={C.blue} strokeWidth="3" />
        {/* papillon (substance grise) */}
        <path d="M205 60 q-14 -14 0 -16 q10 0 10 8 q0 -8 10 -8 q14 2 0 16 q14 14 0 16 q-10 0 -10 -8 q0 8 -10 8 q-14 -2 0 -16Z"
          fill={step === 2 ? C.orange : C.line} opacity="0.9" />
        <text x="220" y="106" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.blue} fontFamily="sans-serif">Moelle épinière</text>

        {/* Épine + main (bas gauche) */}
        <motion.g animate={{ x: handX - 84 }} transition={{ type: 'spring', stiffness: 200, damping: 14 }}>
          <text x="84" y="244" textAnchor="middle" fontSize="34">✋</text>
        </motion.g>
        <text x="150" y="232" fontSize="26">🌵</text>
        <motion.circle
          cx="120" cy="236" r="12" fill="none" stroke={C.red} strokeWidth="3"
          animate={step === 0 ? { opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] } : { opacity: 0 }}
          transition={{ duration: 1, repeat: step === 0 ? Infinity : 0 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
        <text x="92" y="266" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">Récepteur (peau)</text>

        {/* Muscle (bas droite) */}
        <motion.text
          x="360" y="244" textAnchor="middle" fontSize="34"
          animate={step >= 4 ? { scale: [1, 1.25, 1.1] } : { scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >💪</motion.text>
        <text x="360" y="266" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">Muscle (effecteur)</text>

        {/* Voie sensitive (bleue) : main → moelle */}
        <path d="M104 226 Q120 130 180 78" stroke={C.blue} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.45" />
        <text x="92" y="150" fontSize="11" fontWeight="800" fill={C.blue} fontFamily="sans-serif" transform="rotate(-60 120 150)">sensitif (centripète)</text>

        {/* Voie motrice (orange) : moelle → muscle */}
        <path d="M260 78 Q330 130 350 226" stroke={C.orange} strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.45" />
        <text x="300" y="150" fontSize="11" fontWeight="800" fill={C.orange} fontFamily="sans-serif" transform="rotate(60 330 150)">moteur (centrifuge)</text>

        {/* Pulse sensitif (étape 1) */}
        {step === 1 && !reduce && (
          <motion.circle key="s1" r="8" fill={C.blue}
            animate={{ cx: [104, 120, 180], cy: [226, 130, 78], opacity: [0, 1, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 6px ' + C.blue + ')' }} />
        )}
        {/* Pulse moteur (étape 3) */}
        {step === 3 && !reduce && (
          <motion.circle key="s3" r="8" fill={C.orange}
            animate={{ cx: [260, 330, 350], cy: [78, 130, 226], opacity: [0, 1, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 6px ' + C.orange + ')' }} />
        )}
      </svg>
    </VisualFrame>
  )
}

// ── 1.5 — Le cerveau commande le côté opposé (croisement) ─────────────────────
export function Croise({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Le croisement des voies"
      accentKey={accentKey}
      caption="Hémisphère gauche → côté droit du corps. Hémisphère droit → côté gauche. Les voies se croisent."
    >
      <svg viewBox="0 0 360 250" className="h-auto w-full" role="img" aria-label="Cerveau vu de face, voies qui se croisent vers les deux bras">
        {/* Cerveau vu de face, 2 hémisphères */}
        <path d="M120 60 Q120 24 180 24 Q180 60 180 60 Z" fill={C.purple} opacity="0.85" />
        <path d="M240 60 Q240 24 180 24 Q180 60 180 60 Z" fill={C.orange} opacity="0.85" />
        <path d="M120 60 Q120 90 180 96 Q180 60 180 60 Z" fill={C.purple} opacity="0.7" />
        <path d="M240 60 Q240 90 180 96 Q180 60 180 60 Z" fill={C.orange} opacity="0.7" />
        <line x1="180" y1="24" x2="180" y2="96" stroke={C.bg} strokeWidth="3" />

        <text x="150" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.purple} fontFamily="sans-serif">hémisphère G</text>
        <text x="212" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.orange} fontFamily="sans-serif">hémisphère D</text>

        {/* Croisement : G (violet) → bras droit ; D (orange) → bras gauche */}
        <Flow d="M150 92 Q180 150 250 196" color={C.purple} reduce={reduce} />
        <Flow d="M210 92 Q180 150 110 196" color={C.orange} reduce={reduce} reverse />

        {/* Bras / mains */}
        <text x="96" y="214" textAnchor="middle" fontSize="30">🤚</text>
        <text x="264" y="214" textAnchor="middle" fontSize="30">🤚</text>
        <text x="96" y="240" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.orange} fontFamily="sans-serif">côté GAUCHE</text>
        <text x="264" y="240" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.purple} fontFamily="sans-serif">côté DROIT</text>
      </svg>
    </VisualFrame>
  )
}

// ── 1.6 — Protéger son système nerveux (icônes) ───────────────────────────────
export function ProtegerNerf({ accentKey }) {
  const items = [
    { icon: '😴', label: 'Bon sommeil', ok: true },
    { icon: '🥗', label: 'Bonne alimentation', ok: true },
    { icon: '🪖', label: 'Éviter les coups à la tête', ok: true },
    { icon: '🚫', label: 'Pas de drogue', ok: false },
    { icon: '🍺', label: 'Pas d’alcool', ok: false },
  ]
  return (
    <VisualFrame title="Protéger le cerveau" accentKey={accentKey}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className={
              'flex flex-col items-center gap-1 rounded-xl border p-3 text-center ' +
              (it.ok ? 'border-green/30 bg-green/[0.07]' : 'border-red/30 bg-red/[0.07]')
            }
          >
            <span className="text-2xl">{it.icon}</span>
            <span className="text-[0.74rem] font-bold text-soft">{it.label}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

// ── 1.3 — Sensibilité consciente (récepteur → cerveau) ────────────────────────
export function Sensitif({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Le trajet sensitif (centripète)"
      accentKey={accentKey}
      caption="Stimulus → récepteur (peau) → nerf sensitif → cerveau (aire sensitive). L’influx VA vers le cerveau."
    >
      <svg viewBox="0 0 380 240" className="h-auto w-full" role="img" aria-label="Trajet de l'influx sensitif de la main vers le cerveau">
        {/* Cerveau + aire sensitive */}
        <ellipse cx="280" cy="56" rx="60" ry="40" fill={C.card2} stroke={C.blue} strokeWidth="2" />
        <path d="M250 30 q30 -14 58 6 q6 18 -10 30 q-26 10 -44 -4 q-12 -16 -4 -32Z" fill={C.blue} opacity="0.85" />
        <text x="280" y="60" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.bg} fontFamily="sans-serif">aire sensitive</text>

        {/* Main / récepteur */}
        <text x="70" y="210" textAnchor="middle" fontSize="34">✋</text>
        <text x="70" y="232" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">récepteur (peau)</text>
        <text x="118" y="196" fontSize="22">🔥</text>

        {/* Nerf sensitif (bleu) main → cerveau */}
        <Flow d="M86 182 Q150 120 226 72" color={C.blue} reduce={reduce} />
        <path d="M226 72 l-15 0 l7 12 Z" fill={C.blue} />
        <text x="92" y="130" fontSize="11" fontWeight="800" fill={C.blue} fontFamily="sans-serif" transform="rotate(-46 150 130)">nerf sensitif →</text>

        {/* Étapes */}
        <g fontSize="11" fontWeight="700" fill={C.muted} fontFamily="sans-serif">
          <text x="40" y="40">① stimulus</text>
          <text x="40" y="56">② récepteur</text>
          <text x="40" y="72">③ influx sensitif</text>
          <text x="40" y="88">④ cerveau comprend</text>
        </g>
      </svg>
    </VisualFrame>
  )
}

// ── 1.4 — Motricité volontaire (cerveau → muscle) ─────────────────────────────
export function Moteur({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Le trajet moteur (centrifuge)"
      accentKey={accentKey}
      caption="Cerveau (aire motrice) → nerf moteur → muscle. L’influx SORT du cerveau vers le muscle."
    >
      <svg viewBox="0 0 380 240" className="h-auto w-full" role="img" aria-label="Trajet de l'influx moteur du cerveau vers le muscle du bras">
        {/* Cerveau + aire motrice */}
        <ellipse cx="100" cy="56" rx="60" ry="40" fill={C.card2} stroke={C.orange} strokeWidth="2" />
        <path d="M70 30 q30 -14 58 6 q6 18 -10 30 q-26 10 -44 -4 q-12 -16 -4 -32Z" fill={C.orange} opacity="0.85" />
        <text x="100" y="60" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.bg} fontFamily="sans-serif">aire motrice</text>

        {/* Muscle / bras */}
        <text x="310" y="210" textAnchor="middle" fontSize="34">💪</text>
        <text x="310" y="232" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">muscle (bouge)</text>

        {/* Nerf moteur (orange) cerveau → muscle */}
        <Flow d="M154 72 Q230 120 294 182" color={C.orange} reduce={reduce} />
        <path d="M294 182 l-12 -7 l-2 14 Z" fill={C.orange} />
        <text x="196" y="118" fontSize="11" fontWeight="800" fill={C.orange} fontFamily="sans-serif" transform="rotate(46 230 130)">→ nerf moteur</text>

        <g fontSize="11" fontWeight="700" fill={C.muted} fontFamily="sans-serif">
          <text x="230" y="40">① je décide</text>
          <text x="230" y="56">② influx moteur</text>
          <text x="230" y="72">③ nerf moteur</text>
          <text x="230" y="88">④ muscle bouge</text>
        </g>
      </svg>
    </VisualFrame>
  )
}

// ── 1.5 (bis) — Coupe de moelle : racines dorsale (sensitive) / ventrale (motrice) ──
export function Racines({ accentKey }) {
  return (
    <VisualFrame
      title="Coupe de moelle : les 2 racines"
      accentKey={accentKey}
      caption="Racine postérieure (dorsale) = sensitive. Racine antérieure (ventrale) = motrice. Le nerf rachidien est mixte."
    >
      <svg viewBox="0 0 380 220" className="h-auto w-full" role="img" aria-label="Coupe de moelle épinière avec racine dorsale sensitive et racine ventrale motrice">
        {/* Moelle (ovale) + substance grise en papillon */}
        <ellipse cx="190" cy="110" rx="62" ry="74" fill={C.card2} stroke={C.blue} strokeWidth="2.5" />
        <path d="M170 110 q-22 -22 0 -28 q16 0 16 14 q0 -14 16 -14 q22 6 0 28 q22 22 0 28 q-16 0 -16 -14 q0 14 -16 14 q-22 -6 0 -28Z"
          fill={C.line} opacity="0.9" />

        {/* Racine dorsale (haut) = sensitive (bleu) + ganglion */}
        <path d="M232 70 Q300 56 350 56" stroke={C.blue} strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="300" cy="58" r="11" fill={C.blue} opacity="0.9" />
        <text x="246" y="44" fontSize="11" fontWeight="800" fill={C.blue} fontFamily="sans-serif">racine dorsale = sensitive</text>

        {/* Racine ventrale (bas) = motrice (orange) */}
        <path d="M232 150 Q300 164 350 164" stroke={C.orange} strokeWidth="5" fill="none" strokeLinecap="round" />
        <text x="246" y="190" fontSize="11" fontWeight="800" fill={C.orange} fontFamily="sans-serif">racine ventrale = motrice</text>

        {/* Nerf rachidien mixte (les deux se rejoignent) */}
        <text x="320" y="116" fontSize="11" fontWeight="800" fill={C.soft} fontFamily="sans-serif">nerf</text>
        <text x="320" y="130" fontSize="11" fontWeight="800" fill={C.soft} fontFamily="sans-serif">mixte</text>
        <text x="150" y="206" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.muted} fontFamily="sans-serif">moelle épinière</text>
      </svg>
    </VisualFrame>
  )
}

// ── 1.6 — Le cortex et ses aires + croisement ─────────────────────────────────
export function Cortex({ accentKey }) {
  const reduce = useReducedMotion()
  const aires = [
    { d: 'M150 70 Q150 44 196 42 L208 78 Q176 86 150 84Z', color: C.orange, label: 'motrice', lx: 168, ly: 64 },
    { d: 'M208 78 L220 44 Q256 50 258 78 Q232 88 208 84Z', color: C.blue, label: 'sensitive', lx: 226, ly: 66 },
    { d: 'M258 78 Q288 76 300 104 Q278 120 256 110Z', color: C.purple, label: 'visuelle', lx: 274, ly: 100 },
    { d: 'M150 84 Q140 110 164 128 Q186 118 188 96Z', color: C.green, label: 'auditive', lx: 150, ly: 116 },
  ]
  return (
    <VisualFrame
      title="Les aires du cortex + croisement"
      accentKey={accentKey}
      caption="Chaque aire a un rôle. Et chaque hémisphère commande le côté OPPOSÉ du corps."
    >
      <svg viewBox="0 0 320 240" className="h-auto w-full" role="img" aria-label="Cerveau de profil avec aires colorées, et croisement gauche-droite vers les bras">
        {/* Tête de profil */}
        <path d="M120 130 Q110 40 210 40 Q300 44 300 110 Q300 150 250 150 L235 150 L230 130Z"
          fill={C.card2} stroke={C.border} strokeWidth="2" />
        {/* Aires */}
        {aires.map((a) => (
          <g key={a.label}>
            <path d={a.d} fill={a.color} opacity="0.8" />
            <text x={a.lx} y={a.ly} fontSize="9.5" fontWeight="800" fill={C.bg} fontFamily="sans-serif">{a.label}</text>
          </g>
        ))}
        {/* Sillon de Rolando (entre motrice et sensitive) */}
        <line x1="208" y1="42" x2="208" y2="84" stroke={C.bg} strokeWidth="2" />
        <text x="196" y="34" fontSize="8.5" fontWeight="700" fill={C.muted} fontFamily="sans-serif">sillon de Rolando</text>

        {/* Croisement gauche/droite (mini) */}
        <Flow d="M180 150 Q170 190 130 210" color={C.orange} reduce={reduce} />
        <Flow d="M230 150 Q240 190 280 210" color={C.purple} reduce={reduce} reverse />
        <text x="120" y="230" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.orange} fontFamily="sans-serif">côté gauche</text>
        <text x="282" y="230" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.purple} fontFamily="sans-serif">côté droit</text>
      </svg>
    </VisualFrame>
  )
}
