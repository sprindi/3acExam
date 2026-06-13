import { motion, useReducedMotion } from 'framer-motion'

// Apparition douce au scroll. Si l'utilisateur préfère moins de mouvement
// (prefers-reduced-motion), on n'anime pas du tout.
export default function Reveal({ children, className = '', delay = 0, y = 18 }) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
