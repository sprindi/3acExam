// Contenu COMPLET des leçons — Semestre 2 (3AC Maroc).
// ⚠️ Texte repris du brief (section 4). Mise en forme uniquement (gras, listes,
// encadrés). Ne pas changer le sens scientifique.
//
// Modèle d'une notion :
//   { id, num, title, hook, important?, blocks: [ ... ] }
// Types de blocs :
//   { type:'text', html }                  paragraphe
//   { type:'list', items:[html...] }        liste à puces
//   { type:'steps', items:[html...] }       étapes numérotées
//   { type:'def'|'retenir'|'exemple'|'experience'|'attention', html, label? }  encadrés
//   { type:'visual', id }                   schéma SVG (voir visuals/index.js)
//
// `words` (par chapitre) = bandeau « Mot difficile ? ». Darija du brief, gardée telle quelle.

export const lecons = {
  // ═══════════════════════════ CHAPITRE 1 ═══════════════════════════
  nerveux: {
    id: 'nerveux',
    icon: '🧠',
    accent: 'blue',
    title: 'Le système nerveux',
    subtitle: 'Centres nerveux, neurone, sentir, bouger, réflexe, protection',
    intro:
      'Notre corps reçoit des informations (chaud, douleur, son…), les comprend, et réagit (bouger, parler…). C’est le rôle du système nerveux. On va voir comment il est fait, comment on sent, comment on bouge, et comment se protègent nos nerfs.',
    notions: [
      {
        id: 'compose',
        num: '1.1',
        title: 'De quoi est fait le système nerveux ?',
        hook: 'Tu vas voir les 2 grandes parties du système nerveux.',
        blocks: [
          { type: 'text', html: 'Le système nerveux a 2 grandes parties :' },
          {
            type: 'list',
            items: [
              'Les <b>centres nerveux</b> : le <b>cerveau</b> (<span dir="rtl">الدماغ</span>) + la <b>moelle épinière</b> (<span dir="rtl">النخاع الشوكي</span>). Ils reçoivent et commandent.',
              'Les <b>nerfs</b> (<span dir="rtl">الأعصاب</span>) : des câbles qui relient les centres au reste du corps.',
            ],
          },
          {
            type: 'text',
            html:
              'Le message qui circule s’appelle l’<b>influx nerveux</b> (<span dir="rtl">السيالة العصبية</span>) : c’est un petit signal électrique.',
          },
          {
            type: 'def',
            html:
              'un <b>nerf</b> est un câble qui transporte l’influx nerveux entre les centres nerveux et les organes.',
          },
          { type: 'visual', id: 'systeme' },
          {
            type: 'retenir',
            html: 'cerveau + moelle épinière = centres nerveux. Les nerfs relient tout.',
          },
        ],
      },
      {
        id: 'neurone',
        num: '1.2',
        title: 'Le neurone (la cellule du système nerveux)',
        hook: 'Tu vas comprendre la cellule qui transporte l’influx, et comment 2 neurones se parlent.',
        blocks: [
          {
            type: 'text',
            html:
              'Le <b>neurone</b> (<span dir="rtl">الخلية العصبية</span>) est la cellule qui transporte l’influx. Il a 3 parties :',
          },
          {
            type: 'list',
            items: [
              'le <b>corps cellulaire</b> (avec le noyau),',
              'l’<b>axone</b> (un long fil),',
              'l’<b>arborisation terminale</b> (les petites branches au bout).',
            ],
          },
          {
            type: 'text',
            html:
              'L’influx circule toujours dans <b>un seul sens</b> : corps cellulaire → axone → arborisation.',
          },
          {
            type: 'def',
            html:
              'la <b>synapse</b> (<span dir="rtl">نقطة التشابك</span>) est la zone de contact entre deux neurones (l’influx y passe d’un neurone à l’autre).',
          },
          { type: 'visual', id: 'neurone' },
          {
            type: 'retenir',
            html:
              'neurone = corps cellulaire + axone + arborisation. Synapse = contact entre 2 neurones.',
          },
        ],
      },
      {
        id: 'sensibilite',
        num: '1.3',
        title: 'La sensibilité consciente (comment je SENS)',
        hook: 'Tu vas suivre le trajet d’un message quand tu ressens quelque chose.',
        blocks: [
          { type: 'text', html: 'Quand je touche quelque chose, voici le trajet du message :' },
          {
            type: 'steps',
            items: [
              'Un <b>organe des sens / récepteur</b> (l’œil, la peau, le nez, l’oreille, la langue) reçoit un <b>stimulus</b> (<span dir="rtl">محفز</span> : lumière, chaleur, douleur, son, goût, odeur).',
              'Il naît un <b>influx nerveux sensitif</b>.',
              'Cet influx voyage par un <b>nerf sensitif</b> (conducteur) → jusqu’au <b>cerveau</b> (aire sensitive).',
              'Le cerveau <b>comprend</b> → je ressens.',
            ],
          },
          {
            type: 'text',
            html:
              'Cet influx va <b>vers</b> le cerveau : on dit qu’il est <b>centripète</b> (sensitif).',
          },
          {
            type: 'def',
            html: '<b>récepteur</b> = organe qui reçoit le stimulus et fait naître l’influx sensitif.',
          },
          {
            type: 'exemple',
            html:
              'je pose la main sur une table chaude → la peau (récepteur) → nerf sensitif → cerveau → je sens la chaleur.',
          },
          { type: 'visual', id: 'sensitif' },
          {
            type: 'retenir',
            html:
              'sensibilité consciente = stimulus → récepteur → nerf sensitif → cerveau (centripète).',
          },
        ],
      },
      {
        id: 'motricite',
        num: '1.4',
        title: 'La motricité volontaire (comment je DÉCIDE de bouger)',
        hook: 'Tu vas suivre le trajet inverse : du cerveau jusqu’au muscle.',
        blocks: [
          { type: 'text', html: 'Quand je décide de bouger (ex : prendre un stylo) :' },
          {
            type: 'steps',
            items: [
              'Le <b>cerveau</b> (aire motrice) donne l’ordre.',
              'Il naît un <b>influx nerveux moteur</b>.',
              'Cet influx voyage par un <b>nerf moteur</b> → jusqu’au <b>muscle</b>.',
              'Le muscle se contracte → je bouge.',
            ],
          },
          {
            type: 'text',
            html:
              'Cet influx <b>sort</b> du cerveau vers le muscle : on dit qu’il est <b>centrifuge</b> (moteur).',
          },
          {
            type: 'def',
            html:
              '<b>aire motrice</b> = zone du cortex (en avant du sillon de Rolando) où naît l’influx moteur.',
          },
          {
            type: 'attention',
            label: 'Attention / Piège',
            html:
              'centri<b>PÈTE</b> = vers le cerveau (sentir). centri<b>FUGE</b> = sort vers le muscle (bouger). Ne pas confondre !',
          },
          { type: 'visual', id: 'moteur' },
          {
            type: 'retenir',
            html:
              'motricité volontaire = cerveau (aire motrice) → nerf moteur → muscle (centrifuge).',
          },
        ],
      },
      {
        id: 'reflexe',
        num: '1.5',
        title: 'Le réflexe médullaire (motricité involontaire)',
        hook: 'Tu vas comprendre le mouvement automatique le plus rapide du corps.',
        important: true,
        blocks: [
          {
            type: 'text',
            html:
              'Un <b>réflexe</b> est un mouvement <b>automatique, rapide, qu’on ne décide pas</b> (involontaire). Exemple : retirer la main d’une épine avant même de sentir la douleur.',
          },
          {
            type: 'text',
            html:
              'Son <b>centre nerveux est la moelle épinière</b> (pas le cerveau) → c’est pour ça qu’il est si rapide.',
          },
          {
            type: 'text',
            html:
              '<b>Trajet (arc réflexe)</b> : stimulus (épine) → récepteur (peau) → <b>influx sensitif (centripète)</b> par le nerf sensitif → <b>moelle épinière</b> (traite) → <b>influx moteur (centrifuge)</b> par le nerf moteur → <b>muscle</b> (effecteur) → le membre bouge.',
          },
          { type: 'visual', id: 'reflexe' },
          {
            type: 'experience',
            label: 'Expérience (grenouille)',
            html:
              'une grenouille <b>spinale</b> (cerveau détruit, moelle intacte) plie encore sa patte quand on met de l’acide → le réflexe marche <b>sans</b> cerveau. Une grenouille <b>démédullée</b> (moelle détruite) ne réagit plus → donc le <b>centre du réflexe = la moelle épinière</b>.',
          },
          {
            type: 'experience',
            label: 'Expérience (Magendie, racines du nerf)',
            html:
              'le nerf rachidien a 2 racines. Si on coupe la <b>racine postérieure (dorsale)</b> → plus de sensibilité (c’est la racine <b>sensitive</b>). Si on coupe la <b>racine antérieure (ventrale)</b> → plus de mouvement (c’est la racine <b>motrice</b>). Le nerf qui contient les deux est un <b>nerf mixte</b>.',
          },
          { type: 'visual', id: 'racines' },
          {
            type: 'def',
            html: '<b>effecteur</b> = l’organe qui exécute la réponse (ici le muscle).',
          },
          {
            type: 'retenir',
            html:
              'réflexe = automatique + rapide ; centre = moelle épinière. Racine postérieure = sensitive, racine antérieure = motrice.',
          },
        ],
      },
      {
        id: 'cortex',
        num: '1.6',
        title: 'Le cerveau commande le côté opposé + les aires du cortex',
        hook: 'Tu vas voir les zones spécialisées du cerveau et pourquoi les voies se croisent.',
        blocks: [
          {
            type: 'text',
            html:
              'Le <b>cortex cérébral</b> a des zones spécialisées (<b>aires</b>) :',
          },
          {
            type: 'list',
            items: [
              '<b>aire motrice</b> (commander les mouvements),',
              '<b>aire sensitive</b> (sentir le toucher),',
              '<b>aire visuelle</b> (voir — à l’arrière de la tête),',
              '<b>aire auditive</b> (entendre).',
            ],
          },
          {
            type: 'text',
            html:
              '⚠️ Très important : les voies se <b>croisent</b>. L’hémisphère <b>gauche</b> commande/ressent le côté <b>droit</b> du corps, et l’hémisphère <b>droit</b> → le côté <b>gauche</b>.',
          },
          {
            type: 'exemple',
            html:
              'un problème à l’aire visuelle (arrière du cerveau) peut rendre <b>aveugle</b> même si les yeux sont sains. Un problème à l’aire motrice droite → paralysie du côté <b>gauche</b>.',
          },
          { type: 'visual', id: 'cortex' },
          {
            type: 'retenir',
            html:
              'chaque hémisphère gère le côté OPPOSÉ. Chaque aire a un rôle (motrice, sensitive, visuelle, auditive).',
          },
        ],
      },
      {
        id: 'proteger',
        num: '1.7',
        title: 'Protéger son système nerveux',
        hook: 'Tu vas voir ce qui abîme le cerveau et ce qui le protège.',
        blocks: [
          {
            type: 'text',
            html:
              'Dangers : la <b>drogue</b> (<span dir="rtl">المخدرات</span>), l’<b>alcool</b> (vision floue → accidents), le <b>manque de sommeil</b> (moins de concentration), les <b>coups à la tête</b>.',
          },
          {
            type: 'text',
            html:
              'Bonnes habitudes : bon <b>sommeil</b>, <b>alimentation équilibrée</b>, éviter drogue/alcool, protéger sa tête.',
          },
          { type: 'visual', id: 'proteger-nerf' },
          {
            type: 'retenir',
            html: 'la drogue et l’alcool abîment le système nerveux. Le sommeil le protège.',
          },
        ],
      },
    ],
    words: [
      { term: 'Influx nerveux', darija: 'السيالة العصبية', hint: 'le petit signal électrique qui circule' },
      { term: 'Neurone', darija: 'الخلية العصبية', hint: 'la cellule du système nerveux' },
      { term: 'Synapse', darija: 'نقطة التشابك', hint: 'le contact entre deux neurones' },
      { term: 'Moelle épinière', darija: 'النخاع الشوكي', hint: 'le « câble » du dos, centre du réflexe' },
      { term: 'Centripète', darija: null, hint: 'message qui VA vers le cerveau (sensitif)' },
      { term: 'Centrifuge', darija: null, hint: 'message qui SORT vers le muscle (moteur)' },
      { term: 'Nerf mixte', darija: null, hint: 'nerf qui contient des fibres sensitives ET motrices' },
      { term: 'Drogue', darija: 'المخدرات', hint: 'abîme le système nerveux' },
    ],
  },

  // ═══════════════════════════ CHAPITRE 2 ═══════════════════════════
  muscle: {
    id: 'muscle',
    icon: '💪',
    accent: 'orange',
    title: 'Le système musculaire',
    subtitle: 'Bouger, structure, plaque motrice, propriétés, énergie, protection',
    intro:
      'Les muscles permettent de bouger. On va voir comment ils sont faits, comment ils se contractent, leurs propriétés, et comment les protéger.',
    notions: [
      {
        id: 'bouger',
        num: '2.1',
        title: 'Comment un muscle fait bouger',
        hook: 'Tu vas comprendre pourquoi un muscle TIRE et jamais ne pousse.',
        blocks: [
          {
            type: 'text',
            html:
              'Le muscle est attaché à l’os par un <b>tendon</b> (<span dir="rtl">الوتر</span>). Quand le muscle se <b>contracte</b> (se raccourcit), il <b>tire</b> sur l’os → le membre bouge.',
          },
          {
            type: 'text',
            html:
              'Les muscles travaillent souvent en <b>paires opposées</b> : quand le <b>biceps</b> se contracte (flexion), le <b>triceps</b> se relâche ; et l’inverse pour l’extension.',
          },
          {
            type: 'def',
            html:
              '<b>muscle fléchisseur</b> = plie le membre (flexion). <b>muscle extenseur</b> = le tend (extension).',
          },
          { type: 'visual', id: 'bras' },
          {
            type: 'retenir',
            html:
              'le muscle ne pousse pas, il TIRE en se raccourcissant. Biceps = flexion, triceps = extension.',
          },
        ],
      },
      {
        id: 'structure',
        num: '2.2',
        title: 'La structure du muscle',
        hook: 'Tu vas zoomer du muscle entier jusqu’à une seule cellule.',
        blocks: [
          {
            type: 'text',
            html:
              'Du plus grand au plus petit : <b>muscle → faisceaux (<span dir="rtl">حزم</span>) → fibres musculaires</b>.',
          },
          {
            type: 'text',
            html:
              'La <b>fibre musculaire</b> est une cellule spéciale : longue, et avec <b>plusieurs noyaux</b> (multinucléée).',
          },
          {
            type: 'def',
            html:
              '<b>fibre musculaire</b> = cellule allongée à plusieurs noyaux, qui peut se contracter.',
          },
          { type: 'visual', id: 'zoom-muscle' },
          {
            type: 'retenir',
            html: 'muscle → faisceaux → fibres. La fibre = cellule allongée multinucléée.',
          },
        ],
      },
      {
        id: 'plaque',
        num: '2.3',
        title: 'La plaque motrice (où le nerf parle au muscle)',
        hook: 'Tu vas voir le point exact où l’ordre passe du nerf au muscle.',
        blocks: [
          {
            type: 'text',
            html:
              'La <b>plaque motrice</b> (<span dir="rtl">الصفيحة المحركة</span>) est la zone de contact (jonction) entre l’<b>axone du nerf moteur</b> et la <b>fibre musculaire</b>. C’est là que l’ordre « contracte-toi » passe du nerf au muscle.',
          },
          {
            type: 'def',
            html:
              '<b>plaque motrice</b> = zone de jonction entre l’extrémité du nerf moteur et la fibre musculaire.',
          },
          { type: 'visual', id: 'plaque' },
          { type: 'retenir', html: 'plaque motrice = point de contact nerf moteur ↔ muscle.' },
        ],
      },
      {
        id: 'proprietes',
        num: '2.4',
        title: 'Les 4 propriétés du muscle',
        hook: 'Tu vas retenir les 4 propriétés à connaître par cœur.',
        blocks: [
          {
            type: 'list',
            items: [
              '<b>Excitabilité</b> : le muscle répond quand on le stimule.',
              '<b>Contractilité</b> : le muscle se raccourcit.',
              '<b>Élasticité</b> : le muscle revient à sa taille normale après (mais cette élasticité a une <b>limite</b> : trop étiré, il se déchire).',
              '<b>Tonicité</b> : le muscle reste un peu tendu, même au repos.',
            ],
          },
          {
            type: 'exemple',
            html:
              'un élastique qu’on tire et qui revient = élasticité ; mais si on tire trop fort, il casse (déchirure).',
          },
          { type: 'visual', id: 'proprietes' },
          { type: 'retenir', html: 'Excitabilité, Contractilité, Élasticité, Tonicité.' },
        ],
      },
      {
        id: 'energie',
        num: '2.5',
        title: 'L’énergie du muscle',
        hook: 'Tu vas voir le carburant qui fait marcher le muscle.',
        blocks: [
          {
            type: 'text',
            html:
              'Pour se contracter, le muscle a besoin d’<b>énergie</b>. Il utilise le <b>glucose</b> (sucre) et le <b>dioxygène (O₂)</b>, et produit du <b>dioxyde de carbone (CO₂)</b> et de la chaleur.',
          },
          { type: 'visual', id: 'energie' },
          {
            type: 'retenir',
            html: 'muscle = glucose + O₂ → énergie + CO₂. (Le glucose est le carburant du muscle.)',
          },
        ],
      },
      {
        id: 'proteger',
        num: '2.6',
        title: 'Protéger ses muscles',
        hook: 'Tu vas voir comment éviter les blessures.',
        blocks: [
          {
            type: 'list',
            items: [
              'S’<b>échauffer</b> (<span dir="rtl">التسخين</span>) avant le sport → moins de blessures.',
              'Éviter les <b>faux mouvements</b> et les efforts trop violents (risque : <b>déchirure</b>, <b>crampe</b>, <b>courbature</b>).',
              'Éviter le <b>dopage</b> (<span dir="rtl">المنشطات</span>) : dangereux pour la santé.',
              'Bonne <b>alimentation</b> et <b>repos</b>.',
            ],
          },
          { type: 'visual', id: 'proteger-muscle' },
          {
            type: 'retenir',
            html:
              'échauffement + bons mouvements + repos = muscles en bonne santé. Dopage = danger.',
          },
        ],
      },
    ],
    words: [
      { term: 'Tendon', darija: 'الوتر', hint: 'attache le muscle à l’os' },
      { term: 'Faisceau', darija: 'حزم', hint: 'paquet de fibres musculaires' },
      { term: 'Fibre musculaire', darija: null, hint: 'cellule longue à plusieurs noyaux' },
      { term: 'Fléchisseur / extenseur', darija: null, hint: 'plie le membre / le tend (biceps / triceps)' },
      { term: 'Plaque motrice', darija: 'الصفيحة المحركة', hint: 'là où le nerf touche le muscle' },
      { term: 'Échauffement', darija: 'التسخين', hint: 'avant le sport, contre les blessures' },
      { term: 'Dopage', darija: 'المنشطات', hint: 'produits interdits, dangereux' },
    ],
  },

  // ═══════════════════════════ CHAPITRE 3 ═══════════════════════════
  immunite: {
    id: 'immunite',
    icon: '🛡️',
    accent: 'green',
    title: "Les microbes & l'immunité",
    subtitle: "Le chapitre le plus important de l'examen ⭐",
    star: true,
    intro:
      'Autour de nous, il y a des millions de microbes. Certains peuvent nous rendre malades. Heureusement, notre corps a une armée de défense : le système immunitaire. On va voir les microbes, les barrières, et comment le corps se défend (vite, puis précisément), et comment on peut l’aider (vaccin, sérum).',
    notions: [
      {
        id: 'microbes',
        num: '3.1',
        title: 'Les microbes (micro-organismes)',
        hook: 'Tu vas voir les types de microbes et la grande différence bactérie / virus.',
        blocks: [
          {
            type: 'text',
            html:
              'Un <b>microbe / micro-organisme</b> (<span dir="rtl">الميكروب</span>) est un être vivant <b>invisible à l’œil nu</b> (on le voit au microscope). Types :',
          },
          {
            type: 'list',
            items: [
              '<b>Bactéries</b> (<span dir="rtl">البكتيريا</span>) : se multiplient <b>seules</b> par division.',
              '<b>Virus</b> (<span dir="rtl">الفيروسات</span>) : ne se multiplient <b>que</b> dans une cellule hôte.',
              '<b>Champignons microscopiques</b> et <b>protozoaires</b>.',
            ],
          },
          {
            type: 'text',
            html:
              'Certains microbes sont <b>pathogènes</b> (rendent malade), d’autres sont <b>inoffensifs</b> voire utiles.',
          },
          { type: 'def', html: '<b>pathogène</b> = qui peut causer une maladie.' },
          { type: 'visual', id: 'microbes' },
          {
            type: 'retenir',
            html:
              'bactérie = se multiplie seule ; virus = a besoin d’une cellule. Antibiotique = seulement contre les bactéries (pas les virus).',
          },
        ],
      },
      {
        id: 'toxines',
        num: '3.2',
        title: 'Comment un microbe nous rend malade',
        hook: 'Tu vas voir les armes des microbes pathogènes.',
        blocks: [
          {
            type: 'text',
            html:
              'Un microbe pathogène peut nuire par : sa <b>multiplication rapide</b>, la <b>sécrétion de toxines</b> (<span dir="rtl">السموم</span> : substances dangereuses produites par certaines bactéries, ex : tétanos, diphtérie), ou en se multipliant <b>dans nos cellules</b> (virus).',
          },
          {
            type: 'def',
            html: '<b>toxine</b> = substance dangereuse sécrétée par certaines bactéries.',
          },
          { type: 'visual', id: 'toxines' },
          {
            type: 'retenir',
            html: 'certaines bactéries fabriquent des toxines qui empoisonnent le corps.',
          },
        ],
      },
      {
        id: 'barrieres',
        num: '3.3',
        title: 'Les barrières naturelles (1ʳᵉ protection)',
        hook: 'Tu vas voir la première ligne de défense, avant toute infection.',
        blocks: [
          {
            type: 'text',
            html:
              'Avant d’entrer, le microbe doit franchir des <b>barrières</b> : la <b>peau</b> (<span dir="rtl">الجلد</span>), les <b>muqueuses</b> (<span dir="rtl">المخاطية</span> : bouche, nez…), les larmes, l’acidité de l’estomac.',
          },
          { type: 'visual', id: 'barrieres' },
          {
            type: 'retenir',
            html:
              'la peau et les muqueuses = première protection (barrière naturelle). Si elles sont franchies (plaie), le microbe entre.',
          },
        ],
      },
      {
        id: 'inflammation',
        num: '3.4',
        title: 'La réaction inflammatoire (défense non spécifique, immédiate)',
        hook: 'Tu vas comprendre pourquoi une plaie devient rouge, chaude et gonflée.',
        blocks: [
          {
            type: 'text',
            html:
              'Quand un microbe entre par une plaie, le corps réagit <b>tout de suite</b>, <b>de la même façon pour tous les microbes</b> (non spécifique). C’est la <b>réaction inflammatoire</b> : signes = <b>rougeur, chaleur, gonflement, douleur</b>.',
          },
          {
            type: 'text',
            html:
              'Les <b>vaisseaux sanguins se dilatent</b> et les <b>globules blancs</b> sortent du sang vers la plaie (= <b>diapédèse</b>) pour attaquer les microbes.',
          },
          {
            type: 'def',
            html:
              '<b>diapédèse</b> = sortie des globules blancs hors des vaisseaux sanguins vers le lieu de l’infection.',
          },
          { type: 'visual', id: 'inflammation' },
          {
            type: 'retenir',
            html:
              'réaction inflammatoire = non spécifique + immédiate. 4 signes : rougeur, chaleur, gonflement, douleur.',
          },
        ],
      },
      {
        id: 'phagocytose',
        num: '3.5',
        title: 'La phagocytose (défense non spécifique)',
        hook: 'Tu vas voir une cellule « manger » un microbe en 4 étapes.',
        important: true,
        blocks: [
          {
            type: 'text',
            html:
              'Une cellule (le <b>phagocyte</b>, ex : macrophage) <b>mange</b> le microbe en <b>4 étapes</b> :',
          },
          {
            type: 'steps',
            items: [
              '<b>Adhésion</b> : le phagocyte colle au microbe.',
              '<b>Ingestion</b> : il l’entoure et l’avale (avec des pseudopodes).',
              '<b>Digestion</b> : il le détruit avec ses enzymes (lysosomes).',
              '<b>Rejet</b> : il rejette les déchets.',
            ],
          },
          { type: 'visual', id: 'phagocytose' },
          {
            type: 'retenir',
            html:
              'phagocytose = Adhésion → Ingestion → Digestion → Rejet. Réponse non spécifique et immédiate.',
          },
        ],
      },
      {
        id: 'organes',
        num: '3.6',
        title: 'Les organes et cellules du système immunitaire',
        hook: 'Tu vas voir où naissent et où travaillent les cellules de défense.',
        blocks: [
          {
            type: 'list',
            items: [
              '<b>Cellules immunitaires</b> = les <b>globules blancs</b> (leucocytes) : les <b>phagocytes</b> et les <b>lymphocytes</b> (B et T).',
            ],
          },
          { type: 'text', html: '<b>Organes lymphoïdes</b> :' },
          {
            type: 'list',
            items: [
              '<b>Centraux</b> (où naissent/mûrissent les cellules) : <b>moelle osseuse rouge</b> (naissance des lymphocytes B et T) et <b>thymus</b> (maturation des T).',
              '<b>Périphériques</b> (où les cellules rencontrent les microbes) : <b>ganglions lymphatiques</b>, <b>rate</b>, <b>amygdales</b>.',
            ],
          },
          {
            type: 'def',
            html:
              '<b>organes lymphoïdes</b> = organes où se forment ou se regroupent les cellules immunitaires.',
          },
          { type: 'visual', id: 'organes-lymphoides' },
          {
            type: 'retenir',
            html:
              'tous les lymphocytes naissent dans la moelle osseuse rouge ; les T mûrissent dans le thymus.',
          },
        ],
      },
      {
        id: 'cle-serrure',
        num: '3.7',
        title: 'La défense spécifique : antigène & anticorps',
        hook: 'Tu vas comprendre l’arme précise du corps : la clé et la serrure.',
        blocks: [
          {
            type: 'text',
            html:
              'Quand la défense rapide ne suffit pas, le corps lance une défense <b>précise</b> (spécifique) contre <b>un</b> microbe.',
          },
          {
            type: 'list',
            items: [
              '<b>Antigène</b> (<span dir="rtl">المُستضد</span>) : toute substance étrangère reconnue par le corps (le microbe ou sa toxine).',
              '<b>Anticorps</b> (<span dir="rtl">الجسم المضاد</span>) : une protéine en forme de <b>Y</b>, fabriquée par le corps, qui se fixe sur <b>un seul</b> antigène précis (comme une <b>clé et une serrure</b>) et le neutralise. Un anticorps est donc <b>spécifique</b>.',
            ],
          },
          {
            type: 'def',
            html:
              'anticorps = protéine spécifique qui se fixe sur un antigène précis pour le neutraliser.',
          },
          {
            type: 'attention',
            html:
              'antigène = l’ennemi ; anticorps = l’arme. Ne pas confondre ! 1 anticorps = 1 antigène.',
          },
          { type: 'visual', id: 'cle-serrure' },
          {
            type: 'retenir',
            html: 'antigène = ennemi. anticorps = arme spécifique (1 anticorps = 1 antigène).',
          },
        ],
      },
      {
        id: 'specifique',
        num: '3.8',
        title: 'Les deux réponses spécifiques : humorale & cellulaire',
        hook: 'Tu vas voir les deux façons précises de combattre, et qui commande.',
        blocks: [
          {
            type: 'list',
            items: [
              '<b>Réponse humorale</b> : les <b>lymphocytes B</b> reconnaissent l’antigène → se transforment en <b>plasmocytes</b> → fabriquent beaucoup d’<b>anticorps</b> qui neutralisent l’antigène (surtout les microbes/toxines dans le sang).',
              '<b>Réponse cellulaire</b> : les <b>lymphocytes T8 (Tc, « tueurs »)</b> détruisent directement les <b>cellules infectées</b> (surtout par les virus).',
              '<b>Le chef</b> : les <b>lymphocytes T4</b> commandent et activent les B et les T8. Sans eux, rien ne marche.',
            ],
          },
          {
            type: 'exemple',
            html:
              'contre une toxine dans le sang → anticorps (humorale). Contre une cellule infectée par un virus → T8 (cellulaire).',
          },
          { type: 'visual', id: 'specifique' },
          {
            type: 'retenir',
            html:
              'B → plasmocytes → anticorps (humorale). T8 → tuent les cellules infectées (cellulaire). T4 → chefs.',
          },
        ],
      },
      {
        id: 'memoire',
        num: '3.9',
        title: 'La mémoire immunitaire',
        hook: 'Tu vas comprendre pourquoi on tombe rarement malade deux fois.',
        important: true,
        blocks: [
          {
            type: 'text',
            html:
              'La <b>1ère fois</b> qu’un antigène entre : réponse <b>lente</b> (≈ 15 jours) et <b>faible</b> (réponse primaire), mais le corps garde des <b>cellules mémoires</b>.',
          },
          {
            type: 'text',
            html:
              'La <b>2ème fois</b> : réponse <b>rapide</b> (≈ 2-3 jours) et <b>beaucoup plus forte</b> (réponse secondaire) → on ne tombe pas malade.',
          },
          { type: 'visual', id: 'memoire' },
          {
            type: 'retenir',
            html:
              'mémoire immunitaire = 2ème réponse plus rapide et plus forte. C’est la base du vaccin.',
          },
        ],
      },
      {
        id: 'vaccin-serum',
        num: '3.10',
        title: 'Aider le corps : Vaccination vs Sérothérapie',
        hook: 'Tu vas voir la différence entre prévenir (vaccin) et soigner en urgence (sérum).',
        blocks: [
          {
            type: 'list',
            items: [
              '<b>Vaccination</b> (<span dir="rtl">التلقيح</span>) : on injecte un microbe <b>affaibli</b> ou ses <b>toxines atténuées (anatoxine)</b> → le corps fabrique <b>lui-même</b> ses anticorps <b>et</b> garde la mémoire → protection <b>qui met du temps à venir mais qui dure longtemps</b> → c’est de la <b>prévention</b>.',
              '<b>Sérothérapie</b> (<span dir="rtl">الاستمصال</span>) : on injecte des <b>anticorps déjà prêts</b> (un sérum) → protection <b>immédiate mais courte</b> (pas de mémoire) → c’est un <b>traitement d’urgence</b>.',
            ],
          },
          {
            type: 'exemple',
            html:
              'on se vaccine <b>avant</b> (prévention) ; après une blessure à risque de tétanos, on fait une <b>sérothérapie</b> en urgence.',
          },
          { type: 'visual', id: 'vaccin-serum' },
          {
            type: 'retenir',
            html:
              'vaccin = prévention (lent, long, avec mémoire). sérum = urgence (rapide, court, sans mémoire).',
          },
        ],
      },
      {
        id: 'sida',
        num: '3.11',
        title: 'Quand le système immunitaire a un problème',
        hook: 'Tu vas voir deux dérèglements : le SIDA et l’allergie.',
        blocks: [
          {
            type: 'text',
            html:
              '<b>SIDA / VIH</b> (<span dir="rtl">فيروس السيدا</span>) : le VIH est un virus qui détruit les <b>lymphocytes T4</b> (les chefs). Sans les chefs, toute la défense s’effondre → le corps ne se protège plus (infections graves). Transmission : <b>sang, rapports non protégés, mère→bébé</b>. PAS par l’air, ni en se touchant, ni par la salive.',
          },
          {
            type: 'text',
            html:
              '<b>Allergie</b> : réaction <b>exagérée</b> du corps contre une substance <b>sans danger</b> (l’<b>allergène</b> : pollen, poussière…). Lors du 1er contact (sensibilisation), des anticorps se fixent sur les <b>mastocytes</b>. Au 2ème contact, l’allergène déclenche la libération d’<b>histamine</b> par les mastocytes → symptômes (éternuements, rougeurs…).',
          },
          { type: 'visual', id: 'sida' },
          { type: 'visual', id: 'allergie' },
          {
            type: 'retenir',
            html:
              'VIH détruit les T4 → effondrement de l’immunité (SIDA). Allergie = réaction exagérée contre un allergène inoffensif (histamine).',
          },
        ],
      },
    ],
    words: [
      { term: 'Microbe', darija: 'الميكروب', hint: 'être vivant invisible à l’œil nu' },
      { term: 'Virus', darija: 'الفيروسات', hint: 'a besoin d’une cellule pour se multiplier' },
      { term: 'Toxine', darija: 'السموم', hint: 'poison sécrété par certaines bactéries' },
      { term: 'Diapédèse', darija: null, hint: 'sortie des globules blancs vers la plaie' },
      { term: 'Antigène', darija: 'المُستضد', hint: 'l’ennemi (le microbe ou sa toxine)' },
      { term: 'Anticorps', darija: 'الجسم المضاد', hint: 'l’arme en Y, contre 1 antigène précis' },
      { term: 'Vaccination', darija: 'التلقيح', hint: 'microbe affaibli → mémoire → protection longue' },
      { term: 'Sérothérapie', darija: 'الاستمصال', hint: 'anticorps prêts → protection rapide mais courte' },
      { term: 'Allergène', darija: null, hint: 'substance inoffensive qui déclenche une allergie' },
      { term: 'VIH', darija: 'فيروس السيدا', hint: 'le virus du SIDA, détruit les T4' },
    ],
  },
}

// Ordre + métadonnées pour la page d'accueil des leçons et la navigation.
export const leconOrder = ['nerveux', 'muscle', 'immunite']
