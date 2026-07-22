window.I18N = window.I18N || {};
window.I18N.fr = {
  meta: { code: "fr", name: "Français" },

  app: {
    title: "🇨🇭 Conseiller fiscal · Canton de Zurich",
    exportBtn: "Exporter le résumé",
    resetBtn: "Effacer les données",
    disclaimer: "⚠️ <strong>Avertissement important :</strong> Cet outil propose une <strong>estimation indicative</strong> basée sur les règles générales de déduction du canton de Zurich et de l'impôt fédéral direct. Il ne remplace pas les conseils d'un expert fiscal diplômé ni l'utilisation du logiciel officiel <em>ZHprivateTax</em>, mais il inclut un maximum de détails et d'explications pour que vous puissiez remplir votre déclaration en toute confiance. Vérifiez toujours les chiffres et les limites en vigueur sur <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a> avant de déposer votre déclaration. Les données sont saisies uniquement dans votre navigateur (localStorage) — elles ne sont envoyées à aucun serveur.",
    footer: "Outil personnel non officiel · Canton de Zurich · Données locales dans votre navigateur · Aucune donnée envoyée à un serveur",
    dataYearNote: "Chiffres de référence : année fiscale {year}.",
  },

  tabs: {
    perfil: "1. Profil",
    ingressos: "2. Revenus",
    professionals: "3. Frais professionnels",
    assegurances: "4. Assurances et 3e pilier",
    familia: "5. Famille et enfants",
    altres: "6. Autres déductions",
    resum: "7. Résumé et checklist",
    glossary: "8. Glossaire officiel",
  },

  wizard: {
    guidedMode: "🧭 Mode guidé (pas à pas)",
    allTabsMode: "📑 Tous les onglets",
    stepOf: "Étape {current} sur {total}",
    back: "◀ Précédent",
    next: "Suivant ▶",
    finish: "✅ Terminé",
  },

  glossaryIntro: "Le formulaire officiel de Zurich (papier ou ZHprivateTax) est toujours en allemand. Ce tableau traduit les termes clés pour que vous puissiez localiser la bonne case dans le formulaire réel.",

  sidebar: {
    totalsTitle: "Totaux en direct",
    totIngressos: "Revenus bruts totaux",
    totDeduccions: "Total des déductions estimées",
    totImposable: "Revenu imposable estimé",
    hint: "Estimation simplifiée, sans application du barème réel des taux d'imposition. Utile pour comparer des scénarios (\"et si je verse plus au 3a ?\").",
    desglosTitle: "Détail des déductions",
    empty: "Aucune donnée saisie pour le moment",
    despProfessionals: "Frais professionnels (forfait + transport + repas + formation)",
  },

  perfil: {
    heading: "Profil fiscal",
    estatCivil: {
      label: "État civil",
      solter: "Célibataire",
      casat: "Marié(e) ou partenaire enregistré(e) (déclaration commune)",
    },
    municipi: {
      label: "Commune (pour le multiplicateur communal, Steuerfuss)",
      placeholder: "p. ex. Zurich, Winterthour, Uster...",
    },
    esglesia: {
      label: "Êtes-vous membre d'une église reconnue (Kirchensteuer) ?",
      no: "Non",
      si: "Oui",
    },
    numFills: { label: "Nombre d'enfants à charge" },
    dobleIngres: {
      label: "Les deux membres du couple travaillent-ils ? (pertinent pour le Zweitverdienerabzug)",
      no: "Non / non applicable",
      si: "Oui",
    },
    hint: "Ces informations déterminent quelles déductions et quels seuils s'appliquent à vous dans les onglets suivants.",
    info: [
      {
        h: "Qui doit déposer une déclaration à Zurich ?",
        p: "Toute personne domiciliée dans le canton de Zurich au 31 décembre, ou ayant travaillé/possédé des biens dans le canton durant l'année, doit déposer une déclaration (Steuererklärung). Si vous venez d'arriver en Suisse avec un permis B et que vous êtes imposé à la source (Quellensteuer), une déclaration n'est souvent pas nécessaire — mais si vous dépassez un certain seuil de revenu (généralement CHF 120'000/an) ou si vous avez une fortune/des biens immobiliers, vous devrez en déposer une."
      },
      {
        h: "Délai et prolongation",
        p: "Le délai standard est le 31 mars de l'année suivante. Zurich permet de demander une prolongation gratuite et automatique jusqu'à fin septembre/novembre via le portail ZHservices (en ligne, sans justifier le motif). Déposer en retard sans prolongation peut entraîner un rappel de paiement et, en cas de récidive, une amende."
      },
      {
        h: "Déclaration commune vs séparée",
        p: "Les couples mariés et les partenaires enregistrés déposent toujours une seule déclaration commune en Suisse (il n'existe pas d'option d'imposition séparée comme dans d'autres pays). Les revenus et déductions des deux conjoints sont additionnés ; c'est pourquoi cet outil vous demande le salaire du conjoint le cas échéant."
      },
      {
        h: "Impôt ecclésiastique (Kirchensteuer)",
        p: "Si vous êtes officiellement enregistré comme membre de l'Église réformée, catholique ou catholique-chrétienne, vous paierez un impôt ecclésiastique supplémentaire (généralement 10 à 12 % de l'impôt cantonal). Vous pouvez vous désinscrire (Kirchenaustritt) auprès de l'office d'état civil de votre commune à tout moment ; l'effet fiscal s'applique généralement à partir de l'année suivante."
      },
    ],
  },

  ingressos: {
    heading: "Revenus bruts annuels",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Salaire brut annuel (déclarant) — case salaire du certificat de salaire (Lohnausweis)" },
    salariBrutConjuge: { label: "Salaire brut annuel (conjoint, si déclaration commune)" },
    altresIngressos: { label: "Autres revenus (loyers, dividendes, autres)" },
    hint: "Utilisez les chiffres de votre Lohnausweis (certificat de salaire) remis par l'employeur. Si vous avez plusieurs emplois, additionnez-les ici.",
    info: [
      {
        h: "Votre Lohnausweis case par case",
        list: [
          "Ziffer 1 : salaire brut total — le chiffre principal à saisir ici.",
          "Ziffer 2.1-2.3 : bonus, commissions, participations aux bénéfices — à additionner au salaire brut.",
          "Ziffer 3 : prestations irrégulières (indemnités, options sur actions) — également imposables.",
          "Ziffer 7 : véhicule de fonction à usage privé — s'ajoute comme revenu en nature (0,9 %/mois du prix d'achat).",
          "Ziffer 13.1.1/13.1.2 : frais de représentation et de formation déjà payés par l'employeur — normalement PAS à nouveau déductibles (évitez de les compter deux fois dans l'onglet 3).",
        ]
      },
      {
        h: "Plusieurs emplois ou activité accessoire",
        p: "Si vous avez plusieurs employeurs, additionnez tous les salaires bruts des Lohnausweis correspondants. Les activités accessoires (Nebenerwerb) sont également pleinement imposables ; au niveau fédéral, il existe une petite déduction supplémentaire pour frais liés à l'activité accessoire si celle-ci n'est pas très importante."
      },
      {
        h: "Prestations sociales : ce qui est imposable et ce qui ne l'est pas",
        p: "Les indemnités de chômage (ALV), les indemnités pour accident/maladie (SUVA, AI) et les rentes (AVS/AI/2e pilier) SONT imposables comme revenu. Les allocations familiales (Kinder- und Ausbildungszulagen) sont également imposables. En revanche, les prestations complémentaires (Ergänzungsleistungen) et certaines indemnités pour tort moral NE sont PAS imposables."
      },
    ],
  },

  professionals: {
    heading: "Frais professionnels (Berufskosten)",
    transport: {
      legend: "🚋 Transport (Fahrkosten)",
      costTransportPublic: { label: "Coût annuel de l'abonnement de transports publics (CFF/ZVV/etc.)" },
      usaCotxe: { label: "Utilisez-vous une voiture privée parce qu'il n'y a PAS de transport public raisonnable ?", no: "Non", si: "Oui" },
      kmAny: { label: "Km parcourus (aller-retour) x jours ouvrés par an", placeholder: "km/an" },
      hint: "Au niveau fédéral, le coût du trajet est déductible jusqu'à un maximum annuel (voir résumé). Au niveau cantonal ZH, la limite peut être différente.",
    },
    dietes: {
      legend: "🍽️ Repas hors domicile (Verpflegungsmehrkosten)",
      diesMenjarFora: { label: "Jours ouvrés par an où vous mangez hors de chez vous sans cantine subventionnée", placeholder: "jours/an" },
      teCantina: { label: "Votre employeur dispose-t-il d'une cantine ou subventionne-t-il les repas ?", no: "Non", si: "Oui (déduction réduite de moitié)" },
      hint: "Un montant fixe par jour s'applique. Si vous disposez d'une cantine subventionnée, la déduction journalière est réduite de moitié.",
    },
    formacio: {
      legend: "🎓 Formation continue et autres frais professionnels",
      formacio: { label: "Frais de formation continue liés au travail (cours, matériel)" },
      altresProfessionals: { label: "Autres frais professionnels effectifs (vêtements de travail, outils, bureau à domicile...) — uniquement s'ils dépassent le forfait" },
      hint: "Par défaut, une déduction fixe (Pauschalabzug) est appliquée sur le salaire brut. Il n'est utile de déclarer des frais effectifs que s'ils dépassent ce forfait.",
    },
    info: [
      {
        h: "Pauschalabzug ou frais réels : que choisir ?",
        p: "Zurich applique automatiquement 3 % du salaire net (minimum CHF 2'000, maximum CHF 4'000) comme déduction fixe pour couvrir les petits frais professionnels (vêtements, téléphone, petit matériel) sans besoin de justificatifs. Il n'est pertinent de déclarer des frais effectifs (avec reçus réels) que si leur total dépasse clairement ce montant fixe — sinon, vous perdez du temps sans rien gagner."
      },
      {
        h: "Quand le transport public est-il considéré comme \"non raisonnable\" ?",
        p: "L'administration fiscale de Zurich accepte généralement la voiture privée comme frais déductible uniquement si le transport public représente plus d'une heure de trajet quotidien supplémentaire (aller-retour) par rapport à la voiture, ou s'il n'y a pas de correspondance raisonnable avec l'horaire de travail (équipes de nuit, zones rurales mal desservies). Si vous préférez simplement la voiture par confort, le fisc peut refuser la déduction et vous limiter au coût équivalent de l'abonnement de transport public le moins cher disponible."
      },
      {
        h: "Bureau à domicile (Home Office)",
        p: "Si votre employeur ne vous fournit pas de poste de travail et que vous travaillez régulièrement depuis chez vous, vous pouvez déduire une part proportionnelle du loyer/valeur locative, du chauffage et de l'électricité correspondant à la pièce utilisée exclusivement comme bureau. Il faut pouvoir le prouver par une lettre de l'employeur confirmant l'absence de poste fixe au bureau ; cette déduction est examinée en détail par l'administration fiscale."
      },
      {
        h: "Exemple chiffré",
        p: "Salaire brut CHF 90'000 → Pauschalabzug = 3 % = CHF 2'700 (dans la fourchette 2'000-4'000). Si vous avez en plus un abonnement ZVV de CHF 2'200/an et que vous mangez à l'extérieur 220 jours sans cantine (220 × CHF 15 = CHF 3'300, mais plafonné à CHF 3'200/an), le total des frais professionnels serait de CHF 2'700 + 2'200 + 3'200 = CHF 8'100."
      },
    ],
  },

  assegurances: {
    heading: "Assurances et prévoyance (3e pilier)",
    tePensionskasse: { label: "Êtes-vous affilié à une caisse de pensions (Pensionskasse / 2e pilier) via votre travail ?", si: "Oui", no: "Non (indépendant sans 2e pilier)" },
    pilar3a: { label: "Versement annuel au Pilier 3a (compte ou assurance de prévoyance liée)" },
    einkaufPK: { label: "Rachat volontaire (Einkauf) dans la caisse de pensions cette année" },
    primaSalut: { label: "Primes annuelles d'assurance maladie et accidents (LAMal) — déclarant" },
    primaVida: { label: "Primes d'assurance vie / autres assurances privées déductibles" },
    interessosEstalvi: { label: "Intérêts générés par l'épargne (compte épargne, etc.)" },
    hint: "Le pilier 3a est l'une des déductions les plus puissantes. Les primes maladie/vie sont déduites jusqu'à un plafond fixe.",
    info: [
      {
        h: "Compte 3a vs assurance 3a liée",
        p: "Un compte bancaire 3a offre une flexibilité totale (vous pouvez verser le montant souhaité chaque année jusqu'au maximum, et choisir entre épargne pure ou épargne avec investissement en fonds). Une police d'assurance de prévoyance liée (3a avec assurance vie) vous oblige à payer des primes fixes pendant des années et pénalise fortement une résiliation anticipée — cela n'est généralement recommandable que si vous avez besoin d'une véritable couverture vie/invalidité, pas seulement pour économiser des impôts."
      },
      {
        h: "Délai : 31 décembre",
        p: "Le versement au 3a doit être effectué (transfert reçu par la banque/l'assureur) avant le 31 décembre de l'année fiscale concernée. Il ne peut pas être fait rétroactivement en janvier de l'année suivante."
      },
      {
        h: "Rachat de la caisse de pensions (Einkauf) et règle des 3 ans",
        p: "Si vous avez eu des lacunes de cotisation (années sans emploi, arrivée de l'étranger, augmentation de salaire), vous pouvez effectuer un versement volontaire (Einkauf) dans votre Pensionskasse pour combler votre prestation cible. Ce versement est déductible à 100 % l'année où vous l'effectuez. Attention : si vous retirez du capital (et non une rente) de la caisse de pensions dans les 3 ans suivant un Einkauf, le fisc peut annuler rétroactivement la déduction fiscale de ce rachat (règle des 3 ans / Sperrfrist)."
      },
      {
        h: "Stratégie : lisser la progressivité",
        p: "Comme l'impôt suisse est progressif, il est souvent plus efficace de répartir un grand Einkauf en plusieurs versements plus petits sur plusieurs années (plutôt qu'en une seule fois) pour éviter qu'une grande déduction d'une seule année ne se \"perde\" dans une tranche basse, alors que d'autres années vous payez des taux marginaux plus élevés."
      },
    ],
  },

  familia: {
    heading: "Famille et enfants",
    despesesGuarderia: { label: "Frais de garderie / de garde d'enfants de moins de 14 ans, pendant que vous travaillez ou étudiez" },
    pensioAlimentaria: { label: "Pension alimentaire versée (à l'autre parent)" },
    hint: "La déduction pour enfant (Kinderabzug) et la déduction personnelle s'appliquent déjà automatiquement selon le nombre d'enfants et l'état civil indiqués dans l'onglet 1.",
    chfAnyPlaceholder: "CHF/an",
    info: [
      {
        h: "Conditions pour déduire la garderie",
        p: "Une facture officielle du prestataire est nécessaire (garderie, nounou avec contrat déclaré, camps de jour) indiquant son numéro IDE/TVA. La garde doit être nécessaire pour que les parents puissent travailler, étudier, ou en raison d'une incapacité/maladie attestée — garder l'enfant pendant que vous êtes au chômage ne qualifie généralement pas. Les grands-parents qui gardent gratuitement ne donnent pas droit à une déduction (pas de facture) ; si vous les payez formellement et qu'ils le déclarent comme revenu, cela pourrait qualifier."
      },
      {
        h: "Pension alimentaire : qui la déclare ?",
        p: "Celui qui la verse la déduit intégralement ; celui qui la reçoit doit la déclarer comme revenu imposable. Cela vaut aussi bien pour la pension à l'ex-conjoint que pour celle de l'enfant jusqu'à sa majorité (ou jusqu'à la fin des études, dans certains cas, si la convention le prévoit)."
      },
      {
        h: "Garde partagée et Kinderabzug",
        p: "Si la garde est partagée à parts égales et qu'il n'y a pas de pension alimentaire entre les parents, Zurich répartit généralement la déduction pour enfant (Kinderabzug) à parts égales entre les deux parents. Si un parent reçoit une pension alimentaire de l'autre, c'est normalement celui qui vit principalement avec l'enfant qui conserve toute la déduction."
      },
    ],
  },

  altres: {
    heading: "Autres déductions",
    donacions: { label: "Dons à des organismes reconnus d'utilité publique/caritative" },
    interessosDeute: { label: "Intérêts de dettes privées payés (hypothèque privée, prêts, cartes de crédit)" },
    despesesMediques: { label: "Frais médicaux et dentaires non couverts par l'assurance (personnels, non remboursés)" },
    hint: "Les frais médicaux ne sont déductibles que pour la part dépassant un pourcentage de votre revenu net. Les dons doivent dépasser un montant minimum annuel.",
    info: [
      {
        h: "Dons : exigences relatives au reçu",
        p: "L'organisme bénéficiaire doit avoir une exonération fiscale reconnue pour but d'utilité publique (la plupart des ONG et fondations suisses l'indiquent sur leur reçu/confirmation annuelle). Conservez toujours la confirmation annuelle de dons que ces organismes envoient en janvier — c'est le justificatif qui vous sera demandé."
      },
      {
        h: "Quels intérêts de dette comptent ?",
        p: "Les intérêts d'hypothèque privée, de prêts personnels, de cartes de crédit et de découverts bancaires sont déductibles (dans la limite du rendement des actifs + CHF 50'000). Les mensualités d'amortissement du capital ne SONT PAS déductibles, seule la part d'intérêts l'est — vérifiez le certificat annuel de la banque qui sépare déjà les deux éléments."
      },
      {
        h: "Frais médicaux : la franchise cachée",
        p: "Seule la part des frais médicaux/dentaires non remboursés dépassant 5 % de votre revenu net est déductible. Par exemple, avec un revenu net de CHF 80'000, les premiers CHF 4'000 de frais médicaux ne comptent pas — seul l'excédent. Conservez toutes les factures (dentiste, lunettes, physiothérapie non couverte) et additionnez-les toutes pour dépasser plus facilement ce seuil."
      },
    ],
  },

  resum: {
    heading: "Résumé et checklist de documents",
    xifresClauTitle: "Chiffres clés (année fiscale {year})",
    conceptCol: "Concept",
    importCol: "Montant",
    ingressosBrutTotal: "Revenus bruts totaux",
    totalDeduccionsEst: "Total des déductions estimées",
    ingresImposableEst: "Revenu imposable estimé",
    avisPilar3a: "⚠️ Vous avez saisi {aportat} au Pilier 3a, mais le maximum déductible dans votre cas est {max}. L'excédent de {exces} n'est pas déductible.",
    avisTransportZhCap: "⚠️ Au niveau fédéral, le coût du transport n'est déductible que jusqu'à {fedMax}/an ; au niveau cantonal ZH, le plafond est de {zhMax}/an.",
    avisTransportZhReal: "⚠️ Au niveau fédéral, le coût du transport n'est déductible que jusqu'à {fedMax}/an ; au niveau cantonal ZH, vous pouvez déduire le coût réel ({real}) jusqu'à un plafond de {zhMax}/an.",
    avisFormacio: "⚠️ Les frais de formation continue ne sont déductibles que jusqu'à {max} par personne (source : formulaire officiel). L'excédent de {exces} n'est pas déductible.",
    detallTitle: "Détail par case du formulaire (indicatif)",
    casellaCol: "Case typique (Ziffer)",
    importDeclararCol: "Montant à déclarer",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 10.1)",
      fahrkosten: "Fahrkosten — transport (Ziffer 10.1)",
      verpflegung: "Verpflegungsmehrkosten — repas (Ziffer 10.1)",
      weiterbildung: "Weiterbildungskosten — formation (Ziffer 10.4)",
      saule3a: "Säule 3a (Ziffer 11.1)",
      versicherung: "Versicherungsprämien — assurances (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten — garderie (Ziffer 14)",
      kinderabzug: "Kinderabzug ({n} enfant(s)) (Ziffer 21.1)",
      spenden: "Spenden — dons (Ziffer 18)",
      schuldzinsen: "Schuldzinsen — intérêts de dette (Ziffer 13)",
      krankheit: "Krankheitskosten — frais médicaux (Ziffer 17)",
    },
    checklistTitle: "📋 Checklist des documents à préparer",
    checklist: {
      lohnausweis: "Certificat de salaire (Lohnausweis) de chaque emploi",
      abonament: "Facture/justificatif de l'abonnement de transport public",
      dietes: "Justification de l'absence de cantine subventionnée (le cas échéant)",
      formacio: "Reçus de cours/formation continue",
      pilar3a: "Certificat annuel du compte/de la police du Pilier 3a",
      einkauf: "Confirmation du rachat (Einkauf) de la caisse de pensions",
      assegurances: "Polices et reçus d'assurance maladie/vie",
      guarderia: "Factures de la garderie/nounou avec numéro d'identification du prestataire",
      pensio: "Convention ou jugement de pension alimentaire",
      donacions: "Reçus/confirmations de dons",
      interessos: "Relevés d'intérêts de dette (hypothèque, prêts)",
      mediques: "Factures médicales non remboursées par l'assurance",
      comptes: "Relevés de tous les comptes bancaires au 31/12",
      titols: "Liste des titres/actions (Wertschriftenverzeichnis) le cas échéant",
    },
    howToFileTitle: "📝 Comment déposer la déclaration, étape par étape",
    howToFile: [
      "1. Téléchargez le logiciel officiel gratuit ZHprivateTax depuis zh.ch, ou utilisez le portail en ligne ZHservices (eTax).",
      "2. Saisissez les données de votre Lohnausweis et des autres documents de la checklist, case par case (utilisez le tableau ci-dessus comme guide).",
      "3. Le programme calcule automatiquement l'impôt cantonal et fédéral — vérifiez le résumé avant l'envoi.",
      "4. Déposez-la avant le 31 mars, ou demandez la prolongation gratuite auprès de ZHservices si vous avez besoin de plus de temps.",
      "5. Conservez une copie signée (numérique ou papier) ainsi que tous les justificatifs pendant au moins 10 ans, au cas où le fisc en demanderait un.",
    ],
    export: {
      title: "Résumé fiscal indicatif — Canton de Zurich — Année fiscale {year}",
      generated: "Généré",
      estatCivil: "État civil",
      municipi: "Commune",
      fills: "Enfants à charge",
      ingressosBrutTotal: "Revenus bruts totaux",
      totalDeduccions: "Total des déductions estimées",
      ingresImposable: "Revenu imposable estimé",
      detailHeader: "--- Détail des déductions ---",
      pauschal: "Berufsauslagen (forfait)",
      transport: "Fahrkosten (transport)",
      dietes: "Verpflegungsmehrkosten (repas)",
      formacio: "Weiterbildung (formation)",
      saule3a: "Säule 3a",
      einkauf: "Einkauf caisse de pensions",
      assegurances: "Assurances",
      guarderia: "Garderie",
      pensio: "Pension alimentaire",
      kinderabzug: "Kinderabzug",
      donacions: "Dons",
      interessos: "Intérêts de dette",
      mediques: "Frais médicaux",
      footer: "Ceci est une estimation indicative. Vérifiez les chiffres sur le portail officiel zh.ch avant de déposer votre déclaration.",
    },
    confirmReset: "Voulez-vous vraiment effacer toutes les données saisies ?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Certificat de salaire", explanation: "Document annuel que l'employeur vous remet avec tous vos revenus et déductions à la source. C'est la base de toute la déclaration." },
    { de: "Steuererklärung", translation: "Déclaration d'impôts", explanation: "Le formulaire annuel (papier ou ZHprivateTax) que vous devez déposer auprès du fisc." },
    { de: "Berufskosten", translation: "Frais professionnels", explanation: "Ensemble des frais liés au travail qui peuvent être déduits : transport, repas, formation, etc." },
    { de: "Pauschalabzug", translation: "Déduction forfaitaire", explanation: "Montant fixe (3 % du salaire, entre CHF 2'000 et 4'000) déduit sans besoin de justificatifs." },
    { de: "Fahrkosten", translation: "Frais de transport", explanation: "Coût du trajet quotidien entre le domicile et le travail, déductible dans certaines limites." },
    { de: "Verpflegungsmehrkosten", translation: "Repas / surcoût de restauration", explanation: "Montant fixe par jour lorsque vous mangez hors de chez vous sans cantine subventionnée." },
    { de: "Weiterbildungskosten", translation: "Frais de formation continue", explanation: "Cours et formations liés à votre profession actuelle ou future." },
    { de: "Säule 3a", translation: "Pilier 3a", explanation: "Prévoyance privée liée avec avantage fiscal ; le versement annuel est déductible à 100 % jusqu'au maximum légal." },
    { de: "Pensionskasse", translation: "Caisse/fonds de pensions (2e pilier)", explanation: "Votre plan de prévoyance professionnelle obligatoire, géré par l'employeur." },
    { de: "Einkauf", translation: "Rachat / versement volontaire", explanation: "Versement volontaire dans la caisse de pensions pour combler des lacunes de cotisation ; déductible l'année où il est effectué." },
    { de: "Versicherungsprämien", translation: "Primes d'assurance", explanation: "Primes maladie et vie déductibles jusqu'à un plafond annuel fixe." },
    { de: "Kinderbetreuungskosten", translation: "Frais de garde d'enfants", explanation: "Coût de la garderie ou de la nounou nécessaire pour pouvoir travailler ou étudier." },
    { de: "Kinderabzug", translation: "Déduction pour enfant", explanation: "Montant fixe déduit pour chaque enfant à charge." },
    { de: "Spenden", translation: "Dons", explanation: "Dons à des organismes reconnus, déductibles au-delà d'un minimum annuel." },
    { de: "Schuldzinsen", translation: "Intérêts de dette", explanation: "Intérêts (et non le capital) de prêts et hypothèques privés." },
    { de: "Krankheitskosten", translation: "Frais médicaux", explanation: "Frais de santé non remboursés, déductibles au-delà d'une franchise." },
    { de: "Sozialabzug", translation: "Déduction sociale/personnelle", explanation: "Déductions générales appliquées selon l'état civil et les charges familiales." },
    { de: "Steuerfuss", translation: "Multiplicateur fiscal", explanation: "Pourcentage que le canton et la commune appliquent sur l'impôt de base pour calculer l'impôt final." },
    { de: "Quellensteuer", translation: "Impôt à la source", explanation: "Impôt retenu directement sur le salaire, appliqué à certains résidents étrangers sans permis C." },
    { de: "Wertschriftenverzeichnis", translation: "Liste des titres", explanation: "Inventaire des comptes, actions et autres actifs financiers au 31 décembre." },
  ],
};
