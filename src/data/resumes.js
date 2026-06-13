// Résumés simples par chapitre — HARDCODÉS, copiés depuis legacy/index.html.
// Chaque bloc : { tone: 'cy'|'bl'|'ye', label, ... }
//   - type implicite "para" : { html }            → paragraphe (HTML inline)
//   - type "words"          : { words: [html...] } → chips de vocabulaire
//   - type "must"           : { mustHtml }         → encart "à retenir"

export const resumes = {
  nerveux: [
    {
      tone: 'cy',
      label: "😊 C'est quoi ?",
      html:
        "Le système nerveux, c'est le <b>cerveau</b> + la <b>moelle épinière</b> + les <b>nerfs</b>. Il commande tout le corps. Le message qui circule s'appelle l'<b>influx nerveux</b>.",
    },
    {
      tone: 'bl',
      label: '🔑 Les mots importants',
      words: [
        '<b>Neurone</b> = cellule du système nerveux',
        '<b>Centripète</b> = message qui VA vers le cerveau (sensitif)',
        '<b>Centrifuge</b> = message qui SORT vers le muscle (moteur)',
        '<b>Réflexe</b> = mouvement automatique très rapide',
        '<b>Synapse</b> = contact entre 2 neurones',
        '<b>Plaque motrice</b> = contact entre nerf et muscle',
      ],
    },
    {
      tone: 'ye',
      label: '💡 À retenir (TRÈS important)',
      mustHtml:
        '• <b>Sensibilité consciente</b> : je sens quelque chose → message va vers le <b>cerveau</b> (centripète).<br>' +
        '• <b>Mouvement volontaire</b> : je décide de bouger → message part du <b>cerveau</b> vers le muscle (centrifuge).<br>' +
        '• <b>Réflexe médullaire</b> : mouvement automatique (ex : retirer la main du feu). Le centre est la <b>moelle épinière</b>, pas le cerveau → c\'est très rapide.<br>' +
        '• ⚠️ Le cerveau commande le côté <b>OPPOSÉ</b> du corps : l\'hémisphère gauche commande le côté droit, et l\'inverse.<br>' +
        '• ⚠️ La drogue <b>abîme</b> le système nerveux, jamais l\'inverse.',
    },
  ],

  muscle: [
    {
      tone: 'cy',
      label: "😊 C'est quoi ?",
      html:
        "Les muscles font bouger le corps. Quand le nerf donne l'ordre, le muscle se <b>contracte</b> (se raccourcit) et tire sur l'os.",
    },
    {
      tone: 'ye',
      label: '💡 À retenir : les 4 propriétés du muscle',
      mustHtml:
        '• <b>Excitabilité</b> = le muscle répond quand on le stimule<br>' +
        '• <b>Contractilité</b> = le muscle se raccourcit<br>' +
        '• <b>Élasticité</b> = le muscle revient à sa taille normale<br>' +
        '• <b>Tonicité</b> = le muscle reste un peu tendu, même au repos',
    },
    {
      tone: 'bl',
      label: '🔑 La structure du muscle',
      words: [
        '<b>Fibre musculaire</b> = cellule allongée, plusieurs noyaux',
        '<b>Faisceau</b> = paquet de fibres',
        "<b>Tendon</b> = fixe le muscle à l'os",
        '<b>Plaque motrice</b> = où le nerf touche le muscle',
      ],
    },
  ],

  immunite: [
    {
      tone: 'cy',
      label: "😊 C'est quoi ?",
      html:
        'Les <b>microbes</b> (bactéries, virus) veulent entrer dans le corps et nous rendre malades. Le <b>système immunitaire</b> est l\'armée du corps qui les combat.',
    },
    {
      tone: 'bl',
      label: '🔑 Les mots importants',
      words: [
        "<b>Antigène</b> = le microbe (l'ennemi)",
        '<b>Anticorps</b> = arme contre UN microbe précis',
        '<b>Phagocytose</b> = une cellule "mange" le microbe',
        "<b>Lymphocyte</b> = soldat de l'immunité",
        '<b>Plasmocyte</b> = fabrique les anticorps',
      ],
    },
    {
      tone: 'ye',
      label: '💡 À retenir (LE PLUS IMPORTANT)',
      mustHtml:
        '<b>2 types de défense :</b><br>' +
        '1. <b>Non spécifique (rapide)</b> : la <b>phagocytose</b>. Des cellules mangent les microbes. Même réponse pour tous.<br>' +
        '2. <b>Spécifique (précise)</b> :<br>' +
        '&nbsp;&nbsp;• <b>Humorale</b> : lymphocytes <b>B</b> → <b>plasmocytes</b> → <b>anticorps</b><br>' +
        '&nbsp;&nbsp;• <b>Cellulaire</b> : lymphocytes <b>T8</b> tuent les cellules infectées<br>' +
        '&nbsp;&nbsp;• Lymphocytes <b>T4</b> = les chefs qui commandent les autres<br><br>' +
        '<b>Vaccination</b> = entraîner le corps → il garde la <b>mémoire</b> → protection longue.<br>' +
        '<b>Sérothérapie</b> = donner des anticorps tout prêts → protection rapide mais courte.',
    },
  ],
}

// Métadonnées d'affichage par chapitre (titre, sous-titre, icône, couleur, libellés de sections)
export const chapters = [
  {
    id: 'nerveux',
    tab: 'c1',
    tabLabel: '🧠 Nerveux',
    icon: '🧠',
    title: 'Chapitre 1 — Le Système Nerveux',
    subtitle: 'Cerveau, moelle épinière, nerfs, réflexes, mouvement',
    accent: 'blue',
    hardLabel: 'Exercices de raisonnement (difficiles)',
  },
  {
    id: 'muscle',
    tab: 'c2',
    tabLabel: '💪 Muscle',
    icon: '💪',
    title: 'Chapitre 2 — Le Système Musculaire',
    subtitle: 'Les muscles, leurs propriétés, comment ils bougent',
    accent: 'orange',
    hardLabel: 'Exercices de raisonnement (difficiles)',
  },
  {
    id: 'immunite',
    tab: 'c3',
    tabLabel: '🛡️ Immunité',
    icon: '🛡️',
    title: "Chapitre 3 — Les Microbes & l'Immunité ⭐",
    subtitle: "Le chapitre le plus important de l'examen",
    accent: 'green',
    star: true,
    hardLabel: 'Exercices de raisonnement (difficiles) ⭐',
  },
]
