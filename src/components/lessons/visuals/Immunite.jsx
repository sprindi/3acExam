import { motion, useReducedMotion } from 'framer-motion'
import { C } from './palette'
import VisualFrame from './VisualFrame'
import StepControls from './StepControls'
import { useSteps } from './useSteps'

// Petit anticorps en forme de Y (réutilisé)
function Antibody({ x, y, scale = 1, color = C.yellow }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 20 L0 6 M0 6 L-9 -8 M0 6 L9 -8" stroke={color} strokeWidth="3.5"
        fill="none" strokeLinecap="round" />
    </g>
  )
}

// ── 3.1 — Microbes : bactérie vs virus ────────────────────────────────────────
export function Microbes({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Bactérie vs Virus"
      accentKey={accentKey}
      caption="Bactérie = se multiplie seule. Virus = a besoin d’une cellule pour se multiplier."
    >
      <svg viewBox="0 0 380 200" className="h-auto w-full" role="img" aria-label="Une bactérie et un virus côte à côte, légendés">
        {/* Bactérie */}
        <motion.g animate={reduce ? {} : { rotate: [-3, 3, -3] }} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="40" y="70" width="110" height="40" rx="20" fill={C.green} opacity="0.9" />
          <circle cx="70" cy="90" r="6" fill={C.bg} opacity="0.4" />
          <circle cx="100" cy="86" r="5" fill={C.bg} opacity="0.4" />
          {/* flagelle */}
          <path d="M150 90 q16 -10 26 0 q10 10 24 0" stroke={C.green} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </motion.g>
        <text x="95" y="140" textAnchor="middle" fontSize="13" fontWeight="800" fill={C.green} fontFamily="sans-serif">Bactérie</text>
        <text x="95" y="158" textAnchor="middle" fontSize="11" fill={C.soft} fontFamily="sans-serif">se multiplie seule</text>

        {/* Virus */}
        <motion.g animate={reduce ? {} : { scale: [1, 1.06, 1] }} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}>
          {/* spicules */}
          {Array.from({ length: 12 }).map((_, i) => {
            const ang = (i / 12) * Math.PI * 2
            const x1 = 290 + Math.cos(ang) * 30
            const y1 = 90 + Math.sin(ang) * 30
            const x2 = 290 + Math.cos(ang) * 42
            const y2 = 90 + Math.sin(ang) * 42
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.red} strokeWidth="2.5" strokeLinecap="round" />
                <circle cx={x2} cy={y2} r="3.5" fill={C.red} />
              </g>
            )
          })}
          <circle cx="290" cy="90" r="30" fill={C.red} opacity="0.85" />
          <circle cx="290" cy="90" r="14" fill={C.bg} opacity="0.45" />
        </motion.g>
        <text x="290" y="150" textAnchor="middle" fontSize="13" fontWeight="800" fill={C.red} fontFamily="sans-serif">Virus</text>
        <text x="290" y="168" textAnchor="middle" fontSize="11" fill={C.soft} fontFamily="sans-serif">a besoin d’une cellule</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.2 — Les barrières du corps (peau) ───────────────────────────────────────
export function Barrieres({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="La peau, première barrière"
      accentKey={accentKey}
      caption="La peau et les muqueuses empêchent les microbes d’entrer."
    >
      <svg viewBox="0 0 380 190" className="h-auto w-full" role="img" aria-label="Coupe de peau qui bloque des microbes, sauf au niveau d'une plaie">
        {/* Couches de peau (avec un trou = plaie vers x=250) */}
        <rect x="0" y="110" width="380" height="80" fill={C.orange} opacity="0.25" />
        <rect x="0" y="92" width="220" height="22" fill={C.orange} opacity="0.85" />
        <rect x="280" y="92" width="100" height="22" fill={C.orange} opacity="0.85" />
        <text x="12" y="135" fontSize="12" fontWeight="800" fill={C.bg} fontFamily="sans-serif">PEAU (barrière)</text>
        <text x="12" y="178" fontSize="11" fontWeight="700" fill={C.orange} fontFamily="sans-serif">intérieur du corps</text>

        {/* Plaie */}
        <text x="250" y="108" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.red} fontFamily="sans-serif">plaie</text>

        {/* Microbes bloqués (gauche) */}
        {[60, 140].map((x, i) => (
          <motion.g key={x}
            animate={reduce ? {} : { y: [0, 20, 0] }}
            transition={{ duration: 1.4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}>
            <circle cx={x} cy="50" r="11" fill={C.red} opacity="0.9" />
          </motion.g>
        ))}
        <text x="100" y="28" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.red} fontFamily="sans-serif">bloqués ✗</text>

        {/* Microbe qui passe par la plaie */}
        <motion.circle cx="250" r="10" fill={C.red}
          animate={reduce ? { cy: 150 } : { cy: [40, 150] }}
          transition={{ duration: 1.6, repeat: reduce ? 0 : Infinity, ease: 'easeIn' }} />
        <text x="300" y="150" fontSize="11" fontWeight="700" fill={C.red} fontFamily="sans-serif">il entre ✓</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.3 — La phagocytose (4 étapes animées) ⭐ ────────────────────────────────
const PHAGO_STEPS = [
  '1. Adhésion : le phagocyte colle au microbe.',
  '2. Ingestion : il l’avale (il l’entoure).',
  '3. Digestion : il le détruit à l’intérieur.',
  '4. Rejet : il jette les déchets.',
]

export function Phagocytose({ accentKey }) {
  const { step, playing, reduce, setStep, toggle, replay } = useSteps(PHAGO_STEPS.length, {
    interval: 1800,
  })

  // états du microbe selon l'étape
  const mcx = [248, 196, 150, 150][step]
  const mr = [16, 15, 7, 0][step]

  return (
    <VisualFrame
      title="La phagocytose ⭐"
      accentKey={accentKey}
      caption={PHAGO_STEPS[step]}
      controls={
        <StepControls count={PHAGO_STEPS.length} step={step} playing={playing} reduce={reduce}
          onToggle={toggle} onStep={setStep} onReplay={replay} />
      }
    >
      <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-label="Phagocytose : adhésion, ingestion, digestion, rejet">
        {/* Phagocyte (gros blob) */}
        <motion.path
          d="M150 40 q60 -6 70 50 q14 60 -50 78 q-60 16 -86 -38 q-26 -58 26 -82 q18 -10 40 -8Z"
          fill={C.green} opacity="0.85"
          animate={reduce ? {} : { scale: [1, 1.03, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <circle cx="118" cy="104" r="20" fill={C.bg} opacity="0.3" />
        <text x="60" y="200" fontSize="12" fontWeight="800" fill={C.green} fontFamily="sans-serif">Phagocyte</text>

        {/* Pseudopodes (étape 1 : ingestion) */}
        {step === 1 && (
          <g stroke={C.green} strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.85">
            <path d="M188 86 q34 -10 36 18" />
            <path d="M188 134 q34 12 36 -16" />
          </g>
        )}

        {/* Microbe */}
        <motion.g animate={{ x: mcx - 248 }} transition={{ duration: 0.6 }}>
          <motion.circle cx="248" cy="110" fill={C.red}
            animate={{ r: mr, opacity: step === 3 ? 0 : 0.95 }} transition={{ duration: 0.5 }} />
          {step < 2 && (
            <>
              <line x1="234" y1="96" x2="230" y2="90" stroke={C.red} strokeWidth="2" strokeLinecap="round" />
              <line x1="262" y1="96" x2="266" y2="90" stroke={C.red} strokeWidth="2" strokeLinecap="round" />
            </>
          )}
        </motion.g>
        {step < 2 && <text x="248" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.red} fontFamily="sans-serif">microbe</text>}

        {/* Digestion : fragments */}
        {step === 2 && (
          <g fill={C.red} opacity="0.6">
            <circle cx="140" cy="100" r="3" />
            <circle cx="156" cy="116" r="2.5" />
            <circle cx="132" cy="120" r="2" />
          </g>
        )}

        {/* Rejet : déchets expulsés */}
        {step === 3 && (
          <motion.g fill={C.muted}
            initial={{ opacity: 0, x: 0, y: 0 }} animate={{ opacity: [0, 1, 0.6], x: -40, y: 30 }}
            transition={{ duration: 1 }}>
            <circle cx="100" cy="150" r="3" />
            <circle cx="90" cy="160" r="2" />
          </motion.g>
        )}
      </svg>
    </VisualFrame>
  )
}

// ── 3.4 — La défense spécifique (organigramme) ────────────────────────────────
function Box({ x, y, w, h, color, children, fill }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={fill || C.card2} stroke={color} strokeWidth="2" />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={C.text} fontFamily="sans-serif">{children}</text>
    </g>
  )
}

export function Specifique({ accentKey }) {
  return (
    <VisualFrame
      title="Défense spécifique : qui fait quoi"
      accentKey={accentKey}
      caption="T4 = le chef. Branche humorale (bleue) : B → plasmocytes → anticorps. Branche cellulaire (orange) : T8 tue les cellules infectées."
    >
      <svg viewBox="0 0 400 300" className="h-auto w-full" role="img" aria-label="Organigramme de la défense spécifique">
        {/* Antigène */}
        <Box x={150} y={10} w={100} h={34} color={C.red}>Antigène 🦠</Box>
        <line x1="200" y1="44" x2="200" y2="64" stroke={C.muted} strokeWidth="2" markerEnd="url(#arr)" />

        {/* T4 chef */}
        <Box x={140} y={66} w={120} h={36} color={C.purple} fill="rgba(176,139,255,0.15)">T4 👑 (le chef)</Box>

        {/* deux branches */}
        <path d="M170 102 L110 150" stroke={C.blue} strokeWidth="2" markerEnd="url(#arrBlue)" fill="none" />
        <path d="M230 102 L300 150" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrOrange)" fill="none" />
        <text x="120" y="128" fontSize="10" fontWeight="800" fill={C.blue} fontFamily="sans-serif">humorale</text>
        <text x="276" y="128" fontSize="10" fontWeight="800" fill={C.orange} fontFamily="sans-serif">cellulaire</text>

        {/* Branche B */}
        <Box x={40} y={152} w={120} h={32} color={C.blue}>Lymphocyte B</Box>
        <line x1="100" y1="184" x2="100" y2="204" stroke={C.blue} strokeWidth="2" markerEnd="url(#arrBlue)" />
        <Box x={40} y={206} w={120} h={32} color={C.blue}>Plasmocyte</Box>
        <line x1="100" y1="238" x2="100" y2="258" stroke={C.blue} strokeWidth="2" markerEnd="url(#arrBlue)" />
        <Box x={28} y={260} w={144} h={34} color={C.yellow} fill="rgba(255,207,92,0.12)">Anticorps</Box>
        <Antibody x={150} y={266} scale={0.8} />

        {/* Branche T8 */}
        <Box x={244} y={152} w={120} h={32} color={C.orange}>Lymphocyte T8</Box>
        <line x1="304" y1="184" x2="304" y2="204" stroke={C.orange} strokeWidth="2" markerEnd="url(#arrOrange)" />
        <Box x={236} y={206} w={136} h={48} color={C.orange} fill="rgba(255,154,77,0.12)">tue les cellules</Box>
        <text x="304" y="240" textAnchor="middle" fontSize="11.5" fontWeight="800" fill={C.text} fontFamily="sans-serif">infectées</text>

        <defs>
          <marker id="arr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={C.muted} /></marker>
          <marker id="arrBlue" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={C.blue} /></marker>
          <marker id="arrOrange" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={C.orange} /></marker>
        </defs>
      </svg>
    </VisualFrame>
  )
}

// ── 3.5 — Antigène / Anticorps (clé-serrure) ──────────────────────────────────
export function CleSerrure({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Clé & serrure : 1 anticorps = 1 antigène"
      accentKey={accentKey}
      caption="L’anticorps (en Y) ne s’emboîte que sur SON antigène. Un autre antigène ne rentre pas."
    >
      <svg viewBox="0 0 380 200" className="h-auto w-full" role="img" aria-label="Un anticorps en Y s'emboîte sur son antigène ; un autre ne rentre pas">
        {/* CAS 1 : ça s'emboîte */}
        <text x="100" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.green} fontFamily="sans-serif">✓ ça s’emboîte</text>
        {/* anticorps Y (gros) */}
        <g transform="translate(70 70)">
          <path d="M30 90 L30 50 M30 50 L6 18 M30 50 L54 18" stroke={C.yellow} strokeWidth="7" fill="none" strokeLinecap="round" />
          {/* sites de fixation (encoches) */}
          <circle cx="6" cy="18" r="6" fill="none" stroke={C.yellow} strokeWidth="3" />
          <circle cx="54" cy="18" r="6" fill="none" stroke={C.yellow} strokeWidth="3" />
        </g>
        {/* antigène qui se pose */}
        <motion.g animate={reduce ? {} : { y: [-16, 0, -16] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}>
          <circle cx="100" cy="60" r="12" fill={C.red} />
          <circle cx="82" cy="86" r="6" fill={C.red} />
          <circle cx="118" cy="86" r="6" fill={C.red} />
        </motion.g>
        <text x="100" y="180" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.yellow} fontFamily="sans-serif">anticorps</text>

        {/* séparateur */}
        <line x1="200" y1="20" x2="200" y2="184" stroke={C.border} strokeWidth="1.5" strokeDasharray="4 4" />

        {/* CAS 2 : ça ne rentre pas */}
        <text x="288" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.red} fontFamily="sans-serif">✗ ne rentre pas</text>
        <g transform="translate(258 70)">
          <path d="M30 90 L30 50 M30 50 L6 18 M30 50 L54 18" stroke={C.yellow} strokeWidth="7" fill="none" strokeLinecap="round" />
          <circle cx="6" cy="18" r="6" fill="none" stroke={C.yellow} strokeWidth="3" />
          <circle cx="54" cy="18" r="6" fill="none" stroke={C.yellow} strokeWidth="3" />
        </g>
        {/* antigène différent (carré) — ne correspond pas */}
        <g>
          <rect x="276" y="40" width="24" height="24" rx="4" fill={C.purple} />
          <rect x="270" y="64" width="12" height="12" fill={C.purple} />
          <rect x="294" y="64" width="12" height="12" fill={C.purple} />
        </g>
        <text x="288" y="100" textAnchor="middle" fontSize="22" fill={C.red}>✗</text>
        <text x="288" y="180" textAnchor="middle" fontSize="11" fontWeight="700" fill={C.purple} fontFamily="sans-serif">autre antigène</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.6 — Mémoire immunitaire (courbe qui se trace) ⭐ ─────────────────────────
export function Memoire({ accentKey }) {
  const reduce = useReducedMotion()
  const d =
    'M40 180 L100 180 C120 178 132 138 152 132 C172 126 188 162 210 166 L232 166 C248 166 258 56 278 44 C302 30 342 72 380 96'
  return (
    <VisualFrame
      title="Réponse primaire vs secondaire"
      accentKey={accentKey}
      caption="2ᵉ contact (ou après vaccin) = réponse plus RAPIDE et plus FORTE, grâce à la mémoire."
    >
      <svg viewBox="0 0 400 220" className="h-auto w-full" role="img" aria-label="Graphique : 1ère injection petite réponse, 2ème injection grande réponse rapide">
        {/* Axes */}
        <line x1="40" y1="20" x2="40" y2="190" stroke={C.line} strokeWidth="2" />
        <line x1="40" y1="190" x2="390" y2="190" stroke={C.line} strokeWidth="2" />
        <text x="46" y="32" fontSize="10" fontWeight="700" fill={C.muted} fontFamily="sans-serif">quantité d’anticorps</text>
        <text x="350" y="205" fontSize="10" fontWeight="700" fill={C.muted} fontFamily="sans-serif">temps →</text>

        {/* Injections */}
        <line x1="100" y1="190" x2="100" y2="60" stroke={C.green} strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="100" y="52" textAnchor="middle" fontSize="11" fill={C.green} fontFamily="sans-serif">💉 1ʳᵉ</text>
        <line x1="232" y1="190" x2="232" y2="36" stroke={C.green} strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="232" y="28" textAnchor="middle" fontSize="11" fill={C.green} fontFamily="sans-serif">💉 2ᵉ</text>

        {/* Courbe qui se trace */}
        <motion.path
          d={d} fill="none" stroke={C.green} strokeWidth="3.5" strokeLinecap="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={reduce ? {} : { duration: 3.4, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' }}
        />

        {/* Annotations */}
        <text x="150" y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill={C.soft} fontFamily="sans-serif">lente & faible</text>
        <text x="290" y="36" textAnchor="middle" fontSize="10" fontWeight="700" fill={C.green} fontFamily="sans-serif">rapide & forte</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.7 — Vaccination vs Sérothérapie (2 colonnes) ────────────────────────────
export function VaccinSerum({ accentKey }) {
  const cols = [
    {
      title: 'Vaccination', icon: '💉🧠', color: 'border-blue/40 bg-blue/[0.07]', accent: 'text-blue',
      rows: ['Microbe affaibli', 'Le corps fabrique LUI-MÊME ses anticorps + mémoire', 'Lente à venir, mais LONGUE', '🎯 Prévention'],
    },
    {
      title: 'Sérothérapie', icon: '💉⚡', color: 'border-orange/40 bg-orange/[0.07]', accent: 'text-orange',
      rows: ['Anticorps déjà prêts', 'Pas de mémoire', 'IMMÉDIATE, mais courte', '🚑 Urgence'],
    },
  ]
  return (
    <VisualFrame title="Vaccin vs Sérum" accentKey={accentKey}
      caption="Vaccin = prévention (lent, long). Sérum = urgence (rapide, court).">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {cols.map((c) => (
          <div key={c.title} className={'rounded-xl border p-3 ' + c.color}>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">{c.icon}</span>
              <span className={'text-[0.95rem] font-extrabold ' + c.accent}>{c.title}</span>
            </div>
            <ul className="space-y-1.5">
              {c.rows.map((r) => (
                <li key={r} className="flex gap-2 text-[0.8rem] leading-snug text-soft">
                  <span className={c.accent}>•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </VisualFrame>
  )
}

// ── 3.8 — Le SIDA : le VIH détruit les T4 (chefs) ─────────────────────────────
const SIDA_STEPS = [
  'Le VIH attaque le lymphocyte T4 (le chef).',
  'Le VIH détruit le T4.',
  'Sans le chef, les T8 et les B ne sont plus activés → l’armée tombe.',
]

export function Sida({ accentKey }) {
  const { step, playing, reduce, setStep, toggle, replay } = useSteps(SIDA_STEPS.length, {
    interval: 2000,
  })
  const dead = step >= 2
  const t4Color = step >= 1 ? C.muted : C.purple

  return (
    <VisualFrame
      title="Le VIH attaque les T4"
      accentKey={accentKey}
      caption={(step + 1) + '/3 — ' + SIDA_STEPS[step]}
      controls={
        <StepControls count={SIDA_STEPS.length} step={step} playing={playing} reduce={reduce}
          onToggle={toggle} onStep={setStep} onReplay={replay} />
      }
    >
      <svg viewBox="0 0 380 210" className="h-auto w-full" role="img" aria-label="Le VIH détruit le T4, puis les T8 et B deviennent inactifs">
        {/* T4 au centre */}
        <circle cx="190" cy="70" r="34" fill={t4Color} opacity={step >= 1 ? 0.45 : 0.9} />
        <text x="190" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill={C.bg} fontFamily="sans-serif">T4</text>
        <text x="190" y="82" textAnchor="middle" fontSize="14">{step >= 1 ? '💀' : '👑'}</text>
        {step >= 1 && (
          <g stroke={C.red} strokeWidth="2.5">
            <line x1="170" y1="52" x2="210" y2="92" />
            <line x1="210" y1="52" x2="170" y2="92" />
          </g>
        )}

        {/* VIH qui arrive */}
        <motion.g
          animate={{ x: step === 0 ? [120, 150] : 150, opacity: step >= 1 ? 0.3 : 1 }}
          transition={{ duration: 1, repeat: step === 0 && !reduce ? Infinity : 0, repeatType: 'reverse' }}>
          {Array.from({ length: 8 }).map((_, i) => {
            const ang = (i / 8) * Math.PI * 2
            return <line key={i} x1={90 + Math.cos(ang) * 12} y1={70 + Math.sin(ang) * 12}
              x2={90 + Math.cos(ang) * 18} y2={70 + Math.sin(ang) * 18} stroke={C.red} strokeWidth="2.5" strokeLinecap="round" />
          })}
          <circle cx="90" cy="70" r="12" fill={C.red} />
        </motion.g>
        <text x="78" y="44" fontSize="10" fontWeight="800" fill={C.red} fontFamily="sans-serif">VIH</text>

        {/* T8 et B (en bas) — grisés à l'étape finale */}
        <g opacity={dead ? 0.3 : 1}>
          <circle cx="100" cy="165" r="26" fill={dead ? C.muted : C.orange} opacity="0.9" />
          <text x="100" y="170" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.bg} fontFamily="sans-serif">T8</text>
          <circle cx="280" cy="165" r="26" fill={dead ? C.muted : C.blue} opacity="0.9" />
          <text x="280" y="170" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.bg} fontFamily="sans-serif">B</text>
        </g>

        {/* flèches de commande T4 → T8 / B */}
        <line x1="170" y1="96" x2="116" y2="140" stroke={dead ? C.muted : C.purple} strokeWidth="2"
          strokeDasharray={dead ? '4 4' : '0'} opacity={dead ? 0.4 : 0.8} />
        <line x1="210" y1="96" x2="264" y2="140" stroke={dead ? C.muted : C.purple} strokeWidth="2"
          strokeDasharray={dead ? '4 4' : '0'} opacity={dead ? 0.4 : 0.8} />

        {dead && <text x="190" y="205" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.red} fontFamily="sans-serif">T8 &amp; B inactifs = SIDA</text>}
      </svg>
    </VisualFrame>
  )
}

// ── 3.2 — Les toxines (bactérie qui libère du poison) ─────────────────────────
export function Toxines({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Une bactérie qui sécrète des toxines"
      accentKey={accentKey}
      caption="Certaines bactéries libèrent des toxines (poison) qui empoisonnent le corps (ex : tétanos)."
    >
      <svg viewBox="0 0 360 170" className="h-auto w-full" role="img" aria-label="Bactérie libérant des toxines">
        <rect x="40" y="70" width="100" height="38" rx="19" fill={C.green} opacity="0.9" />
        <text x="90" y="94" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.bg} fontFamily="sans-serif">Bactérie</text>
        {/* toxines qui partent vers la droite */}
        {[0, 1, 2, 3].map((i) => (
          <motion.g key={i}
            animate={reduce ? {} : { x: [0, 130], y: [0, (i - 1.5) * 20], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}>
            <circle cx="146" cy="89" r="5" fill={C.red} />
          </motion.g>
        ))}
        <text x="250" y="60" fontSize="12" fontWeight="800" fill={C.red} fontFamily="sans-serif">toxines ☠️</text>
        <text x="220" y="120" fontSize="11" fontWeight="700" fill={C.soft} fontFamily="sans-serif">(substances dangereuses)</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.4 — La réaction inflammatoire (diapédèse) ───────────────────────────────
export function Inflammation({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="Réaction inflammatoire & diapédèse"
      accentKey={accentKey}
      caption="Rougeur, chaleur, gonflement, douleur. Le vaisseau se dilate, les globules blancs sortent vers la plaie (diapédèse)."
    >
      <svg viewBox="0 0 380 200" className="h-auto w-full" role="img" aria-label="Vaisseau dilaté, globules blancs sortant vers la plaie infectée">
        {/* Peau + plaie */}
        <rect x="0" y="20" width="380" height="20" fill={C.orange} opacity="0.85" />
        <rect x="0" y="40" width="380" height="160" fill={C.orange} opacity="0.18" />
        <text x="160" y="16" fontSize="11" fontWeight="800" fill={C.red} fontFamily="sans-serif">plaie + microbes 🦠</text>

        {/* microbes près de la plaie */}
        {[150, 175, 200].map((x) => <circle key={x} cx={x} cy="58" r="7" fill={C.red} opacity="0.9" />)}

        {/* Vaisseau sanguin dilaté (bas) */}
        <rect x="20" y="150" width="340" height="34" rx="17" fill={C.red} opacity="0.25" stroke={C.red} strokeWidth="2" />
        <text x="30" y="172" fontSize="11" fontWeight="800" fill={C.red} fontFamily="sans-serif">vaisseau dilaté</text>

        {/* Globules blancs qui sortent (diapédèse) vers la plaie */}
        {[0, 1, 2].map((i) => (
          <motion.circle key={i} r="9" fill={C.soft} stroke={C.muted} strokeWidth="1.5"
            animate={reduce ? { cx: 175, cy: 80 } : { cx: [240 - i * 30, 175], cy: [167, 70] }}
            transition={{ duration: 2.2, repeat: reduce ? 0 : Infinity, delay: i * 0.5, ease: 'easeInOut' }} />
        ))}
        <text x="250" y="120" fontSize="11" fontWeight="800" fill={C.soft} fontFamily="sans-serif">globules blancs</text>
        <text x="250" y="135" fontSize="10" fontWeight="700" fill={C.muted} fontFamily="sans-serif">(diapédèse)</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.6 — Les organes lymphoïdes ──────────────────────────────────────────────
export function OrganesLymphoides({ accentKey }) {
  return (
    <VisualFrame
      title="Les organes lymphoïdes"
      accentKey={accentKey}
      caption="Centraux : moelle osseuse (naissance B et T) + thymus (maturation des T). Périphériques : ganglions, rate, amygdales."
    >
      <svg viewBox="0 0 320 280" className="h-auto w-full" role="img" aria-label="Silhouette avec moelle osseuse, thymus, ganglions, rate, amygdales">
        {/* Silhouette */}
        <g fill={C.card2} stroke={C.border} strokeWidth="2">
          <circle cx="160" cy="40" r="24" />
          <path d="M132 72 Q160 64 188 72 L198 170 Q160 182 122 170 Z" />
          <path d="M132 84 L96 150" strokeLinecap="round" />
          <path d="M188 84 L224 150" strokeLinecap="round" />
          <path d="M144 170 L134 252" strokeLinecap="round" />
          <path d="M176 170 L186 252" strokeLinecap="round" />
        </g>

        {/* Amygdales (gorge) - périphérique */}
        <circle cx="160" cy="62" r="5" fill={C.green} />
        {/* Thymus - central */}
        <rect x="150" y="92" width="20" height="20" rx="5" fill={C.purple} />
        {/* Ganglions (cou + aisselles + aine) - périphérique */}
        {[[140, 78], [180, 78], [128, 120], [192, 120], [146, 168], [174, 168]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={C.green} />
        ))}
        {/* Rate (gauche abdomen) - périphérique */}
        <ellipse cx="186" cy="138" rx="12" ry="8" fill={C.blue} />
        {/* Moelle osseuse (os de la jambe) - central */}
        <rect x="178" y="200" width="8" height="44" rx="4" fill={C.orange} />

        {/* Légendes */}
        <g fontSize="11" fontWeight="800" fontFamily="sans-serif">
          <text x="220" y="64" fill={C.green}>amygdales</text>
          <text x="200" y="104" fill={C.purple}>thymus (T)</text>
          <text x="40" y="124" fill={C.green}>ganglions</text>
          <text x="210" y="140" fill={C.blue}>rate</text>
          <text x="196" y="226" fill={C.orange}>moelle osseuse</text>
        </g>
        <text x="60" y="270" fontSize="10" fontWeight="700" fill={C.muted} fontFamily="sans-serif">violet/orange = centraux · vert/bleu = périphériques</text>
      </svg>
    </VisualFrame>
  )
}

// ── 3.11 (bis) — L'allergie (allergène → mastocyte → histamine) ───────────────
export function Allergie({ accentKey }) {
  const reduce = useReducedMotion()
  return (
    <VisualFrame
      title="L’allergie : libération d’histamine"
      accentKey={accentKey}
      caption="L’allergène (inoffensif) se fixe sur le mastocyte → libération d’histamine → symptômes."
    >
      <svg viewBox="0 0 360 170" className="h-auto w-full" role="img" aria-label="Allergène se fixant sur un mastocyte qui libère de l'histamine">
        {/* Allergène (pollen) */}
        <g>
          <circle cx="50" cy="80" r="12" fill={C.yellow} />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2
            return <line key={i} x1={50 + Math.cos(a) * 12} y1={80 + Math.sin(a) * 12} x2={50 + Math.cos(a) * 18} y2={80 + Math.sin(a) * 18} stroke={C.yellow} strokeWidth="2" strokeLinecap="round" />
          })}
        </g>
        <text x="50" y="120" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.yellow} fontFamily="sans-serif">allergène</text>

        {/* flèche */}
        <path d="M78 80 L150 80" stroke={C.muted} strokeWidth="2" markerEnd="url(#allArr)" />

        {/* Mastocyte */}
        <circle cx="195" cy="80" r="34" fill={C.purple} opacity="0.85" />
        <text x="195" y="84" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.bg} fontFamily="sans-serif">mastocyte</text>

        {/* Histamine libérée */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle key={i} r="5" fill={C.red}
            animate={reduce ? { cx: 300, cy: 80 } : { cx: [225, 320], cy: [80, 50 + i * 20], opacity: [1, 0] }}
            transition={{ duration: 1.8, repeat: reduce ? 0 : Infinity, delay: i * 0.3 }} />
        ))}
        <text x="290" y="120" fontSize="11" fontWeight="800" fill={C.red} fontFamily="sans-serif">histamine</text>
        <text x="280" y="136" fontSize="10" fontWeight="700" fill={C.soft} fontFamily="sans-serif">→ symptômes</text>

        <defs>
          <marker id="allArr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6Z" fill={C.muted} /></marker>
        </defs>
      </svg>
    </VisualFrame>
  )
}
