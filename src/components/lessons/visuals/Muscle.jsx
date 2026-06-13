import { motion, useReducedMotion } from 'framer-motion'
import { C } from './palette'
import VisualFrame from './VisualFrame'
import StepControls from './StepControls'
import { useSteps } from './useSteps'

// ── 2.1 — Le bras qui plie (le biceps se raccourcit et TIRE) ──────────────────
export function Bras({ accentKey }) {
  const reduce = useReducedMotion()
  // boucle : avant-bras qui se lève (-110°) + biceps qui gonfle
  const forearm = reduce
    ? { rotate: -95 }
    : { rotate: [0, -100, 0] }
  const biceps = reduce ? { scaleY: 1.3 } : { scaleY: [1, 1.45, 1] }
  // triceps : opposé au biceps (gonfle pendant l'extension, se relâche en flexion)
  const triceps = reduce ? { scaleY: 1 } : { scaleY: [1.3, 1, 1.3] }

  return (
    <VisualFrame
      title="Flexion / extension du bras"
      accentKey={accentKey}
      caption="Biceps se contracte → flexion (l’avant-bras se lève). Triceps se contracte → extension. Le muscle TIRE, il ne pousse jamais."
    >
      <svg viewBox="0 0 300 250" className="h-auto w-full" role="img" aria-label="Bras qui se plie : le biceps se raccourcit et tire l'avant-bras">
        {/* Bras (humérus) fixe, vertical */}
        <rect x="96" y="40" width="20" height="120" rx="10" fill={C.card2} stroke={C.border} strokeWidth="2" />
        <circle cx="106" cy="44" r="16" fill={C.card2} stroke={C.border} strokeWidth="2" />
        <text x="106" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.muted} fontFamily="sans-serif">épaule</text>

        {/* Avant-bras qui pivote autour du coude (106,160) */}
        <motion.g
          style={{ transformBox: 'fill-box', transformOrigin: 'center top' }}
          animate={forearm}
          transition={{ duration: 2.6, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
        >
          <rect x="96" y="160" width="20" height="86" rx="10" fill={C.card2} stroke={C.border} strokeWidth="2" />
          <circle cx="106" cy="244" r="13" fill={C.card} stroke={C.border} strokeWidth="2" />
          {/* Tendon bas */}
          <line x1="106" y1="170" x2="106" y2="186" stroke={C.yellow} strokeWidth="4" strokeLinecap="round" />
        </motion.g>

        {/* Coude (pivot) */}
        <circle cx="106" cy="160" r="9" fill={C.line} />

        {/* Biceps : ellipse qui gonfle */}
        <motion.ellipse
          cx="130" cy="105" rx="16" ry="44"
          fill={C.orange} opacity="0.9"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={biceps}
          transition={{ duration: 2.6, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
        />
        {/* Tendons du biceps (haut + bas) */}
        <line x1="124" y1="62" x2="112" y2="46" stroke={C.yellow} strokeWidth="4" strokeLinecap="round" />

        {/* Triceps : ellipse derrière le bras (côté opposé) */}
        <motion.ellipse
          cx="86" cy="105" rx="12" ry="42"
          fill={C.orange} opacity="0.45"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={triceps}
          transition={{ duration: 2.6, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
        />

        <text x="150" y="108" fontSize="12" fontWeight="800" fill={C.orange} fontFamily="sans-serif">Biceps</text>
        <text x="150" y="124" fontSize="10" fontWeight="700" fill={C.yellow} fontFamily="sans-serif">tendon</text>
        <text x="24" y="105" fontSize="11" fontWeight="700" fill={C.orange} fontFamily="sans-serif" opacity="0.8">Triceps</text>
        <text x="118" y="208" fontSize="11" fontWeight="700" fill={C.muted} fontFamily="sans-serif">avant-bras</text>
      </svg>
    </VisualFrame>
  )
}

// ── 2.2 — Structure du muscle : zoom muscle → faisceau → fibre ────────────────
const ZOOM_STEPS = [
  'Le muscle entier (en forme de fuseau).',
  'On zoome : le muscle est fait de FAISCEAUX (paquets de fibres).',
  'On zoome encore : une FIBRE = une cellule longue à plusieurs noyaux.',
]

export function ZoomMuscle({ accentKey }) {
  const { step, playing, reduce, setStep, toggle, replay } = useSteps(ZOOM_STEPS.length, {
    interval: 2200,
  })

  return (
    <VisualFrame
      title="Muscle → faisceaux → fibre"
      accentKey={accentKey}
      caption={(step + 1) + '/3 — ' + ZOOM_STEPS[step]}
      controls={
        <StepControls count={ZOOM_STEPS.length} step={step} playing={playing} reduce={reduce}
          onToggle={toggle} onStep={setStep} onReplay={replay} />
      }
    >
      <svg viewBox="0 0 380 200" className="h-auto w-full" role="img" aria-label="Niveaux d'agrandissement du muscle : muscle, faisceau, fibre">
        {/* Niveau 0 : muscle entier */}
        <g opacity={step === 0 ? 1 : 0.25}>
          <path d="M30 100 Q70 60 140 70 Q210 80 250 100 Q210 120 140 130 Q70 140 30 100Z"
            fill={C.orange} opacity="0.85" />
          <text x="140" y="160" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.orange} fontFamily="sans-serif">Muscle</text>
        </g>

        {/* Niveau 1 : faisceau (apparait dès l'étape 1) */}
        {step >= 1 && (
          <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: step === 1 ? 1 : 0.25, scale: 1 }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }} transition={{ duration: 0.4 }}>
            <rect x="270" y="36" width="84" height="48" rx="14" fill={C.card2} stroke={C.orange} strokeWidth="2" />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={278 + i * 18} y="44" width="10" height="32" rx="5" fill={C.orange} opacity="0.8" />
            ))}
            <text x="312" y="100" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.orange} fontFamily="sans-serif">Faisceau</text>
            {step === 1 && <line x1="252" y1="100" x2="278" y2="70" stroke={C.line} strokeWidth="1.5" strokeDasharray="3 3" />}
          </motion.g>
        )}

        {/* Niveau 2 : une fibre avec plusieurs noyaux */}
        {step >= 2 && (
          <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }} transition={{ duration: 0.4 }}>
            <rect x="60" y="150" width="240" height="34" rx="17" fill={C.orange} opacity="0.9" />
            {/* striations */}
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={i} x1={78 + i * 20} y1="152" x2={78 + i * 20} y2="182" stroke={C.bg} strokeWidth="1.5" opacity="0.35" />
            ))}
            {/* plusieurs noyaux */}
            {[90, 150, 210, 270].map((x) => (
              <circle key={x} cx={x} cy="167" r="6" fill={C.purple} stroke={C.bg} strokeWidth="1.5" />
            ))}
            <text x="180" y="146" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.purple} fontFamily="sans-serif">Fibre musculaire (plusieurs noyaux ●)</text>
          </motion.g>
        )}
      </svg>
    </VisualFrame>
  )
}

// ── 2.3 — Les 4 propriétés du muscle (4 cartes animées) ───────────────────────
function Spring({ reduce }) {
  // ressort qui s'étire puis revient (élasticité)
  return (
    <svg viewBox="0 0 60 30" className="h-7 w-full">
      <motion.path
        d="M4 15 L12 6 L20 24 L28 6 L36 24 L44 6 L52 15"
        stroke={C.green} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        animate={reduce ? {} : { scaleX: [1, 1.4, 1] }}
        style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

function ShrinkBar({ reduce }) {
  return (
    <svg viewBox="0 0 60 30" className="h-7 w-full">
      <motion.rect
        x="6" y="11" height="8" rx="4" fill={C.orange}
        animate={reduce ? { width: 30 } : { width: [44, 24, 44] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  )
}

export function Proprietes({ accentKey }) {
  const reduce = useReducedMotion()
  const cards = [
    { name: 'Excitabilité', desc: 'répond quand on le stimule', icon: <span className="text-xl">⚡</span> },
    { name: 'Contractilité', desc: 'se raccourcit', icon: <ShrinkBar reduce={reduce} /> },
    { name: 'Élasticité', desc: 'revient à sa taille normale', icon: <Spring reduce={reduce} /> },
    { name: 'Tonicité', desc: 'reste un peu tendu, même au repos', icon: <span className="text-xl">🪢</span> },
  ]
  return (
    <VisualFrame title="Les 4 propriétés" accentKey={accentKey}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {cards.map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-1.5 rounded-xl border border-orange/25 bg-orange/[0.06] p-3 text-center">
            <div className="flex h-7 w-full items-center justify-center">{c.icon}</div>
            <span className="text-[0.8rem] font-extrabold text-white">{c.name}</span>
            <span className="text-[0.72rem] leading-snug text-soft">{c.desc}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

// ── 2.4 — La plaque motrice ───────────────────────────────────────────────────
export function Plaque({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="La plaque motrice"
      accentKey={accentKey}
      caption="Point de contact entre le nerf moteur (arborisation) et la fibre musculaire."
    >
      <svg viewBox="0 0 380 200" className="h-auto w-full" role="img" aria-label="Bout d'un neurone arrivant sur une fibre musculaire : la plaque motrice">
        {/* Neurone moteur (axone qui arrive de la gauche) */}
        <line x1="10" y1="50" x2="150" y2="80" stroke={C.blue} strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <text x="20" y="40" fontSize="11" fontWeight="800" fill={C.blue} fontFamily="sans-serif">Nerf moteur</text>

        {/* Arborisation qui touche la fibre */}
        <g stroke={C.blue} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85">
          <path d="M150 80 L180 110" />
          <path d="M150 80 L196 96" />
          <path d="M150 80 L188 124" />
        </g>
        {/* Boutons de contact */}
        {[[182, 112], [198, 96], [190, 126]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill={C.blue} />
        ))}

        {/* Influx qui arrive */}
        {!reduce && (
          <motion.circle r="6" fill={C.yellow}
            animate={{ cx: [10, 150], cy: [50, 80], opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 5px ' + C.yellow + ')' }} />
        )}

        {/* Fibre musculaire */}
        <rect x="120" y="130" width="240" height="44" rx="22" fill={C.orange} opacity="0.9" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={i} x1={140 + i * 20} y1="132" x2={140 + i * 20} y2="172" stroke={C.bg} strokeWidth="1.5" opacity="0.3" />
        ))}
        <text x="300" y="158" fontSize="11" fontWeight="800" fill={C.bg} fontFamily="sans-serif">Fibre musculaire</text>

        {/* Zone plaque motrice */}
        <ellipse cx="190" cy="130" rx="34" ry="12" fill="none" stroke={C.green} strokeWidth="2.5" strokeDasharray="4 3" />
        <text x="190" y="194" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.green} fontFamily="sans-serif">Plaque motrice</text>
      </svg>
    </VisualFrame>
  )
}

// ── 2.5 — Protéger ses muscles (icônes) ───────────────────────────────────────
export function ProtegerMuscle({ accentKey }) {
  const items = [
    { icon: '🏃', label: 'Bien s’échauffer', ok: true },
    { icon: '🤸', label: 'S’étirer', ok: true },
    { icon: '⚠️', label: 'Éviter les faux mouvements', ok: true },
    { icon: '🚫', label: 'Pas de dopage', ok: false },
  ]
  return (
    <VisualFrame title="Protéger ses muscles" accentKey={accentKey}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.label}
            className={'flex flex-col items-center gap-1 rounded-xl border p-3 text-center ' +
              (it.ok ? 'border-green/30 bg-green/[0.07]' : 'border-red/30 bg-red/[0.07]')}>
            <span className="text-2xl">{it.icon}</span>
            <span className="text-[0.74rem] font-bold text-soft">{it.label}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

// ── 2.5 — L'énergie du muscle (glucose + O2 → énergie + CO2) ──────────────────
export function Energie({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Le carburant du muscle"
      accentKey={accentKey}
      caption="Le muscle consomme glucose + O₂ et rejette CO₂ + chaleur. Le glucose est son carburant."
    >
      <svg viewBox="0 0 360 180" className="h-auto w-full" role="img" aria-label="Le muscle utilise glucose et O2, produit énergie et CO2">
        {/* Fibre musculaire au centre */}
        <rect x="120" y="55" width="120" height="70" rx="20" fill={C.orange} opacity="0.9" />
        <text x="180" y="86" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.bg} fontFamily="sans-serif">Muscle</text>
        <text x="180" y="104" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.bg} fontFamily="sans-serif">⚡ énergie</text>

        {/* Entrées (gauche) */}
        {!reduce && (
          <>
            <motion.text x="30" y="70" fontSize="13" fontWeight="800" fill={C.green} fontFamily="sans-serif"
              animate={{ x: [30, 110], opacity: [1, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>glucose</motion.text>
            <motion.text x="40" y="112" fontSize="13" fontWeight="800" fill={C.blue} fontFamily="sans-serif"
              animate={{ x: [40, 110], opacity: [1, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }}>O₂</motion.text>
          </>
        )}
        {reduce && (
          <>
            <text x="30" y="70" fontSize="13" fontWeight="800" fill={C.green} fontFamily="sans-serif">glucose</text>
            <text x="40" y="112" fontSize="13" fontWeight="800" fill={C.blue} fontFamily="sans-serif">O₂</text>
          </>
        )}
        <path d="M96 80 L118 80" stroke={C.muted} strokeWidth="2" markerEnd="url(#mIn)" />
        <path d="M96 108 L118 108" stroke={C.muted} strokeWidth="2" markerEnd="url(#mIn)" />

        {/* Sorties (droite) */}
        <path d="M242 80 L264 80" stroke={C.muted} strokeWidth="2" markerEnd="url(#mIn)" />
        <path d="M242 108 L264 108" stroke={C.muted} strokeWidth="2" markerEnd="url(#mIn)" />
        <text x="270" y="84" fontSize="13" fontWeight="800" fill={C.muted} fontFamily="sans-serif">CO₂</text>
        <text x="270" y="112" fontSize="12" fontWeight="800" fill={C.red} fontFamily="sans-serif">🔥 chaleur</text>

        <defs>
          <marker id="mIn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={C.muted} /></marker>
        </defs>
      </svg>
    </VisualFrame>
  )
}
