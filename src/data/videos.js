// Vidéos explicatives par chapitre — une LISTE de parties par chapitre.
//
// Pour AJOUTER ou CHANGER une partie : modifie SEULEMENT ce fichier.
//   - colle l'identifiant YouTube (la partie après « v= » dans l'URL) dans `youtubeId`
//   - donne un `label` clair (ex : "Partie 2 — La phagocytose")
//   - passe `verifie: true`
//
// `parties` est TOUJOURS un tableau (même avec une seule vidéo).
// Une partie avec `youtubeId: "REMPLIR_ICI"` OU `verifie: false` est ignorée
// proprement (pas de bouton, pas de lecteur cassé) jusqu'à ce qu'un vrai id soit mis.
export const videos = {
  nerveux: {
    titre: 'Le système nerveux',
    parties: [
      { label: 'Cours complet', youtubeId: 'Y5H-dFlmBuE', verifie: true },
    ],
  },
  muscle: {
    titre: 'Le système musculaire',
    parties: [
      { label: 'Cours complet', youtubeId: 'IkmnYLjr0k4', verifie: true },
    ],
  },
 immunite: {
  titre: "Les microbes & l'immunité",
  parties: [
    { label: "Partie 1 — Immunité naturelle",youtubeId: "rfPkmKHPwg0", verifie: true },
    { label: "Partie 2 — Immunité spécifique",youtubeId: "pE4RkgCx9M4", verifie: true },
    { label: "Partie 3 — Vaccination & sérothérapie",youtubeId: "7NL-phgYmT0", verifie: true },
    { label: "Partie 4 — SIDA / allergie",youtubeId: "tEjzktlHVI8", verifie: true },
  ],
},
}
