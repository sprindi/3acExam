// Registre : id de visuel (dans data/lecons.js) → composant SVG.
import * as N from './Nerveux'
import * as M from './Muscle'
import * as I from './Immunite'

export const VISUALS = {
  // Chapitre 1 — Nerveux
  systeme: N.Systeme,
  neurone: N.Neurone,
  sensitif: N.Sensitif,
  moteur: N.Moteur,
  reflexe: N.Reflexe,
  racines: N.Racines,
  cortex: N.Cortex,
  'proteger-nerf': N.ProtegerNerf,

  // Chapitre 2 — Muscle
  bras: M.Bras,
  'zoom-muscle': M.ZoomMuscle,
  plaque: M.Plaque,
  proprietes: M.Proprietes,
  energie: M.Energie,
  'proteger-muscle': M.ProtegerMuscle,

  // Chapitre 3 — Immunité
  microbes: I.Microbes,
  toxines: I.Toxines,
  barrieres: I.Barrieres,
  inflammation: I.Inflammation,
  phagocytose: I.Phagocytose,
  'organes-lymphoides': I.OrganesLymphoides,
  'cle-serrure': I.CleSerrure,
  specifique: I.Specifique,
  memoire: I.Memoire,
  'vaccin-serum': I.VaccinSerum,
  sida: I.Sida,
  allergie: I.Allergie,
}
