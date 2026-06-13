// ─────────────────────────────────────────────────────────────────────────────
// Toutes les données des exercices sont HARDCODÉES ici (aucun appel réseau).
// Le contenu (questions, options, bonnes réponses, explications, pièges) est
// copié mot pour mot depuis le site original (legacy/index.html).
//
// Types :
//   - "qcm"       : { options:[], correct:<index>, explanation, tip? }
//   - "truefalse" : { statements:[], answers:['V'|'F'], explanations:[] }
//   - "matching"  : { pairs:[{label, correct}], options:[], explanation }
//
// Difficulté : "facile" | "moyen" | "difficile"
// Chapitre   : "nerveux" | "muscle" | "immunite"
// ─────────────────────────────────────────────────────────────────────────────

export const exercices = [
  // ════════════ CHAPITRE 1 : NERVEUX (n1–n10) ════════════
  {
    id: 'n1',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Rabat 2022 · Casa 2022',
    question: 'La plaque motrice est la zone de contact entre :',
    options: [
      'Deux neurones',
      "L'arborisation terminale d'un neurone et une fibre musculaire",
      "Le corps cellulaire d'un neurone et une fibre musculaire",
      'Le nerf sensitif et une fibre musculaire',
    ],
    correct: 1,
    explanation:
      "La plaque motrice = contact entre l'extrémité (arborisation terminale) d'un neurone moteur et la fibre musculaire. C'est là que l'ordre passe du nerf au muscle.",
  },
  {
    id: 'n2',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Rabat 2022',
    question: "L'influx nerveux est une activité :",
    options: [
      "D'un nerf en réponse à une contraction",
      "D'un muscle en réponse à un stimulus",
      "D'un nerf en réponse à un stimulus",
      "D'un muscle en réponse à une contraction",
    ],
    correct: 2,
    explanation:
      "L'influx nerveux naît dans un NERF (ou un récepteur) en réponse à un STIMULUS (excitation). C'est un message électrique qui circule le long des neurones.",
  },
  {
    id: 'n3',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Casa 2023',
    question: 'Le nerf optique :',
    options: [
      'Renferme des fibres motrices seulement',
      'Renferme des fibres sensitives seulement',
      'Est un nerf mixte',
      'Renferme des fibres centrifuges seulement',
    ],
    correct: 1,
    explanation:
      "Le nerf optique transporte l'information visuelle de l'œil vers le cerveau → ce sont des fibres SENSITIVES (centripètes) uniquement. Il ne commande aucun muscle.",
  },
  {
    id: 'n4',
    chapter: 'nerveux',
    type: 'truefalse',
    difficulty: 'facile',
    source: 'Rabat 2021/24 · Casa 2024',
    question: 'Vrai ou Faux ?',
    statements: [
      "L'arc réflexe est le trajet de l'influx nerveux au cours de la motricité volontaire.",
      'Les récepteurs sensoriels produisent des influx nerveux centripètes.',
      "L'aire motrice est le centre du réflexe médullaire.",
      'La consommation de drogue menace la santé du système nerveux.',
      'La synapse est une zone de communication entre deux neurones.',
    ],
    answers: ['F', 'V', 'F', 'V', 'V'],
    explanations: [
      "Faux — l'arc réflexe, c'est la motricité INVOLONTAIRE (le réflexe), pas volontaire.",
      'Vrai — les récepteurs créent l’influx sensitif qui va VERS le centre nerveux (centripète).',
      'Faux — le centre du réflexe médullaire est la MOELLE ÉPINIÈRE, pas l’aire motrice.',
      'Vrai — la drogue abîme le système nerveux.',
      'Vrai — la synapse est le point de contact entre 2 neurones.',
    ],
  },
  {
    id: 'n5',
    chapter: 'nerveux',
    type: 'matching',
    difficulty: 'moyen',
    source: 'Rabat 2021',
    question: 'Relie chaque élément à sa définition',
    options: [
      'Cellule allongée avec plusieurs noyaux',
      "Zone du cortex où naît l'influx moteur",
      'Centre nerveux : matière grise centrale, blanche autour',
      'Cellule formée de corps cellulaire, axone et arborisation',
    ],
    pairs: [
      { label: 'Fibre musculaire', correct: 'Cellule allongée avec plusieurs noyaux' },
      { label: 'Aire motrice', correct: "Zone du cortex où naît l'influx moteur" },
      { label: 'Moelle épinière', correct: 'Centre nerveux : matière grise centrale, blanche autour' },
      { label: 'Neurone', correct: 'Cellule formée de corps cellulaire, axone et arborisation' },
    ],
    explanation:
      "Fibre musculaire = cellule allongée à plusieurs noyaux · Aire motrice = où naît l'influx moteur dans le cortex · Moelle épinière = centre nerveux (grise au centre) · Neurone = corps cellulaire + axone + arborisation.",
  },
  {
    id: 'n6',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'moyen',
    source: 'Rabat 2021',
    question:
      "Grenouille spinale (cerveau détruit, moelle intacte) : elle plie la patte quand on met de l'acide. Grenouille démédullée (moelle détruite) : aucune réaction. Quel est le centre du réflexe ?",
    options: ['Le cerveau', 'La moelle épinière', 'Le nerf optique', 'Le muscle de la patte'],
    correct: 1,
    explanation:
      "La grenouille SANS cerveau réagit encore → le cerveau n'est pas nécessaire. La grenouille SANS moelle ne réagit plus → le centre du réflexe est donc la MOELLE ÉPINIÈRE.",
  },
  {
    id: 'n7',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Casa 2022 · Tanger 2024',
    question:
      "Samir a une paralysie du côté GAUCHE. Ses muscles et ses nerfs sont normaux, mais un abcès touche l'aire motrice de l'hémisphère DROIT du cerveau. Pourquoi le côté gauche est-il paralysé ?",
    options: [
      'Chaque hémisphère commande le côté opposé du corps',
      'Chaque hémisphère commande le même côté du corps',
      'La moelle épinière a été coupée à gauche',
      'Les muscles gauches sont naturellement plus faibles',
    ],
    correct: 0,
    explanation:
      "Les voies nerveuses se croisent : l'hémisphère DROIT commande le côté GAUCHE. Donc un abcès dans l'aire motrice droite → paralysie du côté gauche.",
    tip: "Pièges : (B) inverse la règle du croisement. (C)(D) sont impossibles car l'énoncé dit que les nerfs et muscles sont sains.",
  },
  {
    id: 'n8',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Rabat 2021',
    question:
      'On coupe la racine POSTÉRIEURE (dorsale) d’un nerf → aucune réponse. On coupe la racine ANTÉRIEURE (ventrale) → la patte plie encore. Quelle racine conduit l’influx MOTEUR ?',
    options: [
      'La racine antérieure (ventrale)',
      'La racine postérieure (dorsale)',
      'Les deux racines en même temps',
      'Aucune des deux',
    ],
    correct: 0,
    explanation:
      "La racine ANTÉRIEURE (ventrale) porte l'influx moteur (sortie vers le muscle). La racine postérieure (dorsale) porte l'influx sensitif (entrée). Astuce : Antérieure = Action (moteur).",
    tip: 'Piège (B) : beaucoup confondent. La racine POSTÉRIEURE est SENSITIVE, pas motrice.',
  },
  {
    id: 'n9',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Rabat 2024',
    question:
      'Chez un violoniste, la zone du cerveau des doigts est plus grande et compte plus de neurones actifs (27000–75000) que chez un non-musicien (25000–27000). Quelle est la meilleure explication ?',
    options: [
      "L'entraînement répété stimule la zone → plasticité → plus de neurones actifs",
      'Les violonistes naissent avec un plus gros cerveau',
      "Le violon ajoute de nouveaux neurones venus de l'instrument",
      'La main gauche fabrique des neurones qui montent au cerveau',
    ],
    correct: 0,
    explanation:
      "L'entraînement quotidien stimule sans cesse cette zone → le cerveau s'adapte (plasticité cérébrale) : plus de connexions, plus de neurones actifs, zone plus grande. Le violoniste devient plus précis.",
    tip: 'Pièges (C)(D) : idée fausse fréquente — les neurones ne « montent » pas de la main, et l’instrument n’ajoute pas de neurones.',
  },
  {
    id: 'n10',
    chapter: 'nerveux',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Oriental 2022',
    question:
      "La myéline entoure les nerfs et accélère l'influx. La sclérose en plaques DÉTRUIT la myéline. Quelle est la conséquence sur le mouvement ?",
    options: [
      "L'influx devient lent ou bloqué → mauvais contrôle des muscles, parfois paralysie",
      "L'influx devient plus rapide → mouvements trop brusques",
      'Les muscles grossissent anormalement',
      'Le cerveau fabrique plus de myéline pour compenser',
    ],
    correct: 0,
    explanation:
      "Sans myéline, l'influx nerveux ralentit ou ne passe plus → les ordres du cerveau n'arrivent plus bien aux muscles → troubles du mouvement, perte d'équilibre, parfois paralysie.",
    tip: "Piège (B) : sans myéline, l'influx est PLUS LENT, jamais plus rapide.",
  },

  // ════════════ CHAPITRE 2 : MUSCLE (mu1–mu8) ════════════
  {
    id: 'mu1',
    chapter: 'muscle',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Casa 2025',
    question: "La capacité du muscle à se raccourcir s'appelle :",
    options: ["L'élasticité", "L'excitabilité", 'La contractilité', 'La tonicité'],
    correct: 2,
    explanation:
      "La contractilité = capacité à se raccourcir. L'élasticité = revenir à sa taille. L'excitabilité = répondre à une stimulation.",
  },
  {
    id: 'mu2',
    chapter: 'muscle',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Casa 2024',
    question: "L'échauffement avant l'effort musculaire :",
    options: [
      'Augmente le volume du muscle',
      "Diminue le risque d'accident musculaire",
      'Est sans effet sur le muscle',
      "Remplace l'entraînement",
    ],
    correct: 1,
    explanation:
      "L'échauffement prépare le muscle à l'effort et DIMINUE le risque de blessure (déchirure, claquage).",
  },
  {
    id: 'mu3',
    chapter: 'muscle',
    type: 'truefalse',
    difficulty: 'facile',
    source: 'Casa 2022/23 · Rabat 2022',
    question: 'Vrai ou Faux ?',
    statements: [
      'La fibre musculaire est une cellule géante mononucléée (un seul noyau).',
      "L'élasticité est une propriété des muscles squelettiques striés.",
      'Le muscle utilise le glucose comme source d’énergie.',
      "La contraction d'un muscle fléchisseur assure un mouvement d'extension.",
      "L'élasticité d'un muscle est sans limite.",
    ],
    answers: ['F', 'V', 'V', 'F', 'F'],
    explanations: [
      'Faux — la fibre musculaire a PLUSIEURS noyaux (multinucléée), pas un seul.',
      "Vrai — l'élasticité est bien une propriété du muscle strié squelettique.",
      'Vrai — le glucose est la source d’énergie du muscle.',
      'Faux — un muscle fléchisseur assure la FLEXION, pas l’extension.',
      "Faux — l'élasticité a une limite ; trop étiré, le muscle se déchire.",
    ],
  },
  {
    id: 'mu4',
    chapter: 'muscle',
    type: 'matching',
    difficulty: 'moyen',
    source: 'Casa 2024/25 · Rabat 2025',
    question: 'Relie chaque propriété du muscle à sa définition',
    options: [
      "S'étirer puis revenir à sa taille normale",
      'Répondre à une stimulation',
      'Se raccourcir',
      'Rôle du muscle dans le réflexe (effecteur)',
    ],
    pairs: [
      { label: 'Élasticité', correct: "S'étirer puis revenir à sa taille normale" },
      { label: 'Excitabilité', correct: 'Répondre à une stimulation' },
      { label: 'Contractilité', correct: 'Se raccourcir' },
      { label: 'Effecteur', correct: 'Rôle du muscle dans le réflexe (effecteur)' },
    ],
    explanation:
      'Élasticité = revenir à sa taille · Excitabilité = répondre à une stimulation · Contractilité = se raccourcir · Effecteur = le muscle qui réagit dans le réflexe.',
  },
  {
    id: 'mu5',
    chapter: 'muscle',
    type: 'matching',
    difficulty: 'moyen',
    source: 'Casa 2024',
    question: 'Relie chaque partie du muscle à son rôle',
    options: [
      'Sépare les faisceaux',
      'Ensemble de fibres musculaires',
      'Fixe le muscle au squelette',
      'Cellule allongée (plusieurs noyaux)',
    ],
    pairs: [
      { label: 'Tissu conjonctif', correct: 'Sépare les faisceaux' },
      { label: 'Faisceau', correct: 'Ensemble de fibres musculaires' },
      { label: 'Tendon', correct: 'Fixe le muscle au squelette' },
      { label: 'Fibre musculaire', correct: 'Cellule allongée (plusieurs noyaux)' },
    ],
    explanation:
      "Tissu conjonctif → sépare les faisceaux · Faisceau → groupe de fibres · Tendon → relie le muscle à l'os · Fibre musculaire → la cellule du muscle.",
  },
  {
    id: 'mu6',
    chapter: 'muscle',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Casa/Rabat 2025',
    question:
      'Un muscle perd SEULEMENT son excitabilité (les autres propriétés sont normales). Que se passe-t-il ?',
    options: [
      'Le muscle ne répond plus du tout à une stimulation',
      'Le muscle se raccourcit mais ne revient pas à sa taille',
      'Le muscle reste contracté en permanence',
      'Le muscle devient plus élastique',
    ],
    correct: 0,
    explanation:
      "L'excitabilité = la capacité à répondre à une stimulation. Si elle est perdue, le muscle ne réagit plus quand on le stimule.",
    tip: "Pièges : (B) décrit une perte d'ÉLASTICITÉ, (C) un problème de relâchement — pas l'excitabilité.",
  },
  {
    id: 'mu7',
    chapter: 'muscle',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Casa 2024',
    question:
      'Après un accident, une personne a une paralysie du bras. Mais ses muscles sont sains et la transmission nerveuse dans le bras est normale. Où est le problème le plus probable ?',
    options: [
      "Dans l'aire motrice du cerveau (commande du mouvement)",
      'Dans le muscle du bras lui-même',
      'Dans le tendon du bras',
      'Dans la plaque motrice du bras',
    ],
    correct: 0,
    explanation:
      "Muscles sains + transmission nerveuse normale → le problème n'est pas dans le bras. Il est en amont, dans le CENTRE qui commande le mouvement : l'aire motrice du cerveau.",
    tip: "Pièges (B)(C)(D) : tous écartés car l'énoncé dit que le muscle et les nerfs du bras sont normaux.",
  },
  {
    id: 'mu8',
    chapter: 'muscle',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Casa 2023 · Rabat 2022',
    question: 'Pourquoi dit-on que la fibre musculaire est une cellule particulière ?',
    options: [
      "Parce qu'elle est allongée et contient plusieurs noyaux",
      "Parce qu'elle n'a aucun noyau",
      "Parce qu'elle est ronde avec un seul noyau",
      "Parce qu'elle ne peut pas se contracter",
    ],
    correct: 0,
    explanation:
      "La fibre musculaire est une cellule géante, allongée, avec PLUSIEURS noyaux. C'est ce qui la rend particulière par rapport aux cellules normales (1 seul noyau).",
  },

  // ════════════ CHAPITRE 3 : IMMUNITÉ (i1–i17) ════════════
  {
    id: 'i1',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Casa 2025',
    question: 'La réponse immunitaire naturelle (innée) est :',
    options: [
      'Non spécifique (même réponse pour tous les microbes)',
      'Une réaction acquise',
      'Spécifique à un seul microbe',
      'Faite par les lymphocytes B',
    ],
    correct: 0,
    explanation:
      'La réponse naturelle (innée) est NON spécifique : elle réagit pareil contre tous les microbes (phagocytose). La réponse spécifique, elle, reconnaît un microbe précis.',
  },
  {
    id: 'i2',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Casa 2025',
    question: 'La réponse immunitaire cellulaire se fait par :',
    options: [
      'Les lymphocytes B',
      'Les lymphocytes T8 (cytotoxiques)',
      'Les globules rouges',
      'Les plaquettes',
    ],
    correct: 1,
    explanation:
      'Réponse cellulaire = lymphocytes T8 (Tc) qui détruisent les cellules infectées. La réponse humorale = lymphocytes B → plasmocytes → anticorps.',
  },
  {
    id: 'i3',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Rabat 2021 · Oriental 2024',
    question: 'Les cellules immunitaires sont :',
    options: ['Les globules blancs', 'Les globules rouges', 'Les plaquettes', 'Les neurones'],
    correct: 0,
    explanation:
      "Les cellules immunitaires sont les globules blancs (leucocytes) : phagocytes et lymphocytes. Les globules rouges transportent l'O₂, les plaquettes servent à la coagulation.",
  },
  {
    id: 'i4',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Rabat 2021',
    question: 'La réaction inflammatoire est une réponse immunitaire :',
    options: [
      'Non spécifique et immédiate',
      'Spécifique et retardée',
      'Spécifique et immédiate',
      'Non spécifique et retardée',
    ],
    correct: 0,
    explanation:
      'La réaction inflammatoire fait partie de la réponse NON spécifique (innée) et elle est IMMÉDIATE (rapide). Signes : rougeur, chaleur, gonflement, douleur.',
  },
  {
    id: 'i5',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Oriental 2024',
    question: 'Un anticorps :',
    options: [
      'Est un antigène',
      'Est produit par les plasmocytes issus des lymphocytes B',
      'Est produit par les lymphocytes T',
      'Est produit par les phagocytes',
    ],
    correct: 1,
    explanation:
      "Les anticorps sont fabriqués par les plasmocytes, qui viennent des lymphocytes B. Attention : un anticorps n'est PAS un antigène (l'antigène, c'est le microbe).",
  },
  {
    id: 'i6',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'facile',
    source: 'Casa 2025',
    question: 'Le VIH (virus du SIDA) se transmet :',
    options: [
      "D'une mère séropositive à son bébé",
      'Par une seringue stérilisée',
      "Par l'air (en éternuant)",
      'En se serrant la main',
    ],
    correct: 0,
    explanation:
      "Le VIH se transmet par le sang, les rapports sexuels non protégés, et de la mère au bébé. Il ne se transmet PAS par l'air, la salive, ou en se touchant.",
  },
  {
    id: 'i7',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'moyen',
    source: 'Casa 2022',
    question: 'La diapédèse est la migration des globules :',
    options: [
      "Blancs à travers la paroi des capillaires sanguins lors d'une inflammation",
      "Blancs à travers les capillaires lymphatiques lors d'une hémorragie",
      "Rouges à travers les capillaires sanguins lors d'une inflammation",
      "Rouges à travers les capillaires lors d'une plaie",
    ],
    correct: 0,
    explanation:
      "La diapédèse = les globules BLANCS sortent des vaisseaux sanguins (capillaires) pour aller au lieu de l'inflammation combattre les microbes.",
    tip: 'Pièges : (C)(D) parlent de globules ROUGES (faux). (B) dit hémorragie au lieu d’inflammation.',
  },
  {
    id: 'i8',
    chapter: 'immunite',
    type: 'truefalse',
    difficulty: 'facile',
    source: 'Multi-régions 2019–2025',
    question: 'Vrai ou Faux ?',
    statements: [
      'Les anticorps sont sécrétés par des plasmocytes.',
      'Les toxines sont des substances dangereuses sécrétées par certaines bactéries.',
      'Les lymphocytes prennent naissance dans la moelle osseuse.',
      "La sérothérapie s'appuie sur la mémoire immunitaire.",
      'Les virus se multiplient rapidement par division (tout seuls).',
      'Un antibiotique soigne les maladies dues aux virus.',
    ],
    answers: ['V', 'V', 'V', 'F', 'F', 'F'],
    explanations: [
      'Vrai — les plasmocytes fabriquent les anticorps.',
      'Vrai — les toxines sont produites par certaines bactéries (tétanos, diphtérie...).',
      'Vrai — tous les lymphocytes naissent dans la moelle osseuse.',
      "Faux — la sérothérapie donne des anticorps tout prêts. C'est la VACCINATION qui utilise la mémoire.",
      "Faux — les virus ne se multiplient PAS tout seuls : ils ont besoin d'entrer dans une cellule hôte.",
      'Faux — les antibiotiques tuent seulement les BACTÉRIES, pas les virus.',
    ],
  },
  {
    id: 'i9',
    chapter: 'immunite',
    type: 'matching',
    difficulty: 'moyen',
    source: 'Rabat 2024 · Oriental 2024',
    question: 'Relie chaque cellule immunitaire à son rôle',
    options: [
      'Immunité naturelle non spécifique (phagocytose)',
      'Tuent les cellules infectées (cellulaire)',
      'Fabriquent les anticorps (humorale)',
      'Chefs : commandent les autres cellules',
    ],
    pairs: [
      { label: 'Phagocytes', correct: 'Immunité naturelle non spécifique (phagocytose)' },
      { label: 'Lymphocytes T8 (Tc)', correct: 'Tuent les cellules infectées (cellulaire)' },
      { label: 'Plasmocytes', correct: 'Fabriquent les anticorps (humorale)' },
      { label: 'Lymphocyte T4', correct: 'Chefs : commandent les autres cellules' },
    ],
    explanation:
      'Phagocytes → phagocytose (non spécifique) · T8 → tuent les cellules infectées · Plasmocytes → fabriquent les anticorps · T4 → coordonnent toute la réponse.',
  },
  {
    id: 'i10',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'moyen',
    source: 'Casa 2024 · Rabat 2021',
    question: 'Quelles sont les 4 étapes de la phagocytose dans le bon ordre ?',
    options: [
      'Adhésion → Ingestion → Digestion → Rejet',
      'Ingestion → Adhésion → Digestion → Rejet',
      'Digestion → Ingestion → Adhésion → Rejet',
      'Rejet → Adhésion → Ingestion → Digestion',
    ],
    correct: 0,
    explanation:
      "1. Adhésion (la cellule colle au microbe) → 2. Ingestion (elle l'avale) → 3. Digestion (elle le détruit avec les enzymes) → 4. Rejet des déchets.",
  },
  {
    id: 'i11',
    chapter: 'immunite',
    type: 'matching',
    difficulty: 'moyen',
    source: 'Casa 2022',
    question: "L'allergie : complète le mécanisme",
    options: ['Allergène', 'Mastocytes', 'Anticorps', 'Histamine'],
    pairs: [
      { label: '1er contact : le corps réagit à un...', correct: 'Allergène' },
      { label: 'Les anticorps se fixent sur les...', correct: 'Mastocytes' },
      { label: "2ème contact : l'allergène se fixe sur les...", correct: 'Anticorps' },
      { label: "Libération d'... → symptômes", correct: 'Histamine' },
    ],
    explanation:
      "1er contact = allergène → anticorps fabriqués, fixés sur les mastocytes (sensibilisation). 2ème contact = l'allergène se fixe sur les anticorps → les mastocytes libèrent l'histamine → symptômes (activation).",
  },
  {
    id: 'i12',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Rabat 2024 · Oriental 2024',
    question:
      "Le sérum d'un lapin immunisé contre le TÉTANOS protège contre la toxine tétanique, mais PAS contre la toxine diphtérique. Que montre cette expérience ?",
    options: [
      "Les anticorps sont spécifiques : chacun n'agit que contre un seul antigène",
      'Les anticorps protègent contre toutes les maladies',
      'La phagocytose est plus rapide contre le tétanos',
      'Le sérum contient des lymphocytes mémoires',
    ],
    correct: 0,
    explanation:
      'Le sérum contient des anticorps ANTI-tétaniques. Ils ne marchent que contre la toxine tétanique, pas contre la diphtérique → les anticorps sont SPÉCIFIQUES (un anticorps = un seul antigène).',
    tip: 'Piège (D) : le sérum contient des ANTICORPS, pas des cellules mémoires.',
  },
  {
    id: 'i13',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Rabat 2025',
    question:
      'Contre la RAGE : un chien recevant le SÉRUM (anticorps) du chien vacciné survit ; un chien recevant ses LYMPHOCYTES meurt. Quel type de réponse est efficace contre la rage ?',
    options: [
      'La réponse humorale (anticorps)',
      'La réponse cellulaire (lymphocytes T8)',
      'La phagocytose seule',
      'Aucune réponse immunitaire',
    ],
    correct: 0,
    explanation:
      "Le sérum (= anticorps) protège → c'est la réponse HUMORALE qui est efficace contre la rage. Les lymphocytes seuls ne suffisent pas ici.",
    tip: "Piège (B) : tentant, mais l'expérience montre que les lymphocytes seuls NE protègent PAS. Il faut bien lire le résultat.",
  },
  {
    id: 'i14',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Casa 2022',
    question:
      "Contre la LISTERIA (l'inverse de la rage !) : le SÉRUM → cobaye malade ; les LYMPHOCYTES T → cobaye protégé. Quel type de réponse est efficace ici ?",
    options: [
      'La réponse cellulaire (lymphocytes T)',
      'La réponse humorale (anticorps du sérum)',
      'La sérothérapie',
      'La vaccination par anticorps',
    ],
    correct: 0,
    explanation:
      "Ici, ce sont les LYMPHOCYTES T qui protègent (le sérum/anticorps ne marche pas) → c'est la réponse CELLULAIRE.",
    tip: 'Astuce : ne réponds jamais par habitude. Rage = humoral, Listeria = cellulaire. C’est le RÉSULTAT de l’expérience qui décide, pas la mémoire.',
  },
  {
    id: 'i15',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Rabat 2024 · Casa 2025',
    question:
      "Après la 1ère injection d'un vaccin : anticorps après ~15 jours, en petite quantité. Après la 2ème : après ~2-3 jours, 100× plus. Quelle propriété est mise en évidence ?",
    options: [
      'La mémoire immunitaire (réponse secondaire plus rapide et plus forte)',
      'La spécificité des anticorps',
      'La phagocytose accélérée',
      "L'allergie",
    ],
    correct: 0,
    explanation:
      "La 2ème réponse est plus rapide et bien plus forte grâce aux CELLULES MÉMOIRES créées à la 1ère injection → c'est la mémoire immunitaire. C'est la base de la vaccination (et des rappels).",
    tip: 'Piège (B) : la spécificité est vraie en général, mais ce n’est pas ce que MONTRE ce graphe. Ici c’est la mémoire.',
  },
  {
    id: 'i16',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Fès 2024',
    question:
      'Au Maroc, quand le % de vaccinés contre la rougeole augmente, le nombre de malades diminue. Pourquoi le vaccin marche-t-il ?',
    options: [
      'Il crée une mémoire immunitaire → réponse rapide si le vrai virus arrive',
      "Il tue directement le virus dans l'air",
      'Il remplace les anticorps par des antibiotiques',
      'Il augmente le nombre de globules rouges',
    ],
    correct: 0,
    explanation:
      'Le vaccin entraîne le corps avec un microbe affaibli → il garde la MÉMOIRE. Si le vrai virus arrive, la réponse est rapide et forte → la maladie est évitée. Plus de vaccinés = moins de malades.',
  },
  {
    id: 'i17',
    chapter: 'immunite',
    type: 'qcm',
    difficulty: 'difficile',
    source: 'Dysfonctionnement immunitaire',
    question:
      "Le VIH détruit les lymphocytes T4. Pourquoi cela fait-il s'effondrer TOUT le système immunitaire ?",
    options: [
      "Les T4 sont les chefs : ils activent les T8 et les B → sans eux, plus de réponse cellulaire ni d'anticorps",
      'Les T4 sont les seules cellules qui font la phagocytose',
      "Les T4 transportent l'oxygène vers les autres cellules",
      'Les T4 fabriquent directement tous les anticorps',
    ],
    correct: 0,
    explanation:
      'Les T4 sont les coordinateurs (les chefs). Ils activent les T8 (réponse cellulaire) et les B (anticorps). Sans T4 → rien ne s’active → le corps ne se défend plus → infections opportunistes (stade SIDA).',
    tip: 'Piège (D) : les T4 ne FABRIQUENT pas les anticorps (ce sont les plasmocytes) — ils les ACTIVENT.',
  },
]

export const TOTAL = exercices.length
