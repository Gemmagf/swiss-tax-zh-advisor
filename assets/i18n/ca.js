window.I18N = window.I18N || {};
window.I18N.ca = {
  meta: { code: "ca", name: "Català" },

  app: {
    title: "🇨🇭 Assessor Fiscal · Cantó de Zúric",
    exportBtn: "Exportar resum",
    resetBtn: "Esborrar dades",
    disclaimer: "⚠️ <strong>Avís important:</strong> Aquesta eina ofereix una <strong>estimació orientativa</strong> basada en les regles generals de deducció del cantó de Zúric i de l'impost federal directe. No substitueix el consell d'un assessor fiscal titulat ni l'ús del programari oficial <em>ZHprivateTax</em>, però inclou el màxim de detall i explicacions possible perquè puguis presentar la teva declaració amb confiança. Verifica sempre les xifres i límits vigents a <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a> abans de presentar la declaració. Les dades s'introdueixen només al teu navegador (localStorage) — no s'envien a cap servidor.",
    footer: "Eina personal no oficial · Cantó de Zúric · Dades locals al teu navegador · No envia dades a cap servidor",
    dataYearNote: "Xifres de referència: any fiscal {year}.",
  },

  tabs: {
    perfil: "1. Perfil",
    ingressos: "2. Ingressos",
    professionals: "3. Desp. professionals",
    assegurances: "4. Assegurances i 3a",
    familia: "5. Família i fills",
    altres: "6. Altres deduccions",
    resum: "7. Resum i checklist",
    glossary: "8. Glossari oficial",
  },

  wizard: {
    guidedMode: "🧭 Mode guiat (pas a pas)",
    allTabsMode: "📑 Totes les pestanyes",
    stepOf: "Pas {current} de {total}",
    back: "◀ Enrere",
    next: "Següent ▶",
    finish: "✅ Fet",
  },

  glossaryIntro: "El formulari oficial de Zúric (paper o ZHprivateTax) és sempre en alemany. Aquesta taula tradueix els termes clau perquè puguis localitzar la casella correcta al formulari real.",

  sidebar: {
    totalsTitle: "Totals en directe",
    totIngressos: "Ingressos bruts totals",
    totDeduccions: "Total deduccions estimades",
    totImposable: "Ingrés imposable estimat",
    hint: "Estimació simplificada, sense aplicar la corba real de tipus impositius. Útil per comparar escenaris (\"i si aporto més al 3a?\").",
    desglosTitle: "Desglossament de deduccions",
    empty: "Encara no s'han introduït dades",
    despProfessionals: "Despeses professionals (fix + transport + dietes + formació)",
  },

  perfil: {
    heading: "Perfil fiscal",
    estatCivil: {
      label: "Estat civil",
      solter: "Solter/a",
      casat: "Casat/da o parella registrada (declaració conjunta)",
    },
    municipi: {
      label: "Municipi (per al multiplicador municipal, Steuerfuss)",
      placeholder: "p. ex. Zúric, Winterthur, Uster...",
    },
    esglesia: {
      label: "Ets membre d'una església reconeguda (Kirchensteuer)?",
      no: "No",
      si: "Sí",
    },
    numFills: { label: "Nombre de fills a càrrec" },
    dobleIngres: {
      label: "Els dos membres de la parella treballen? (rellevant per Zweitverdienerabzug)",
      no: "No / no aplica",
      si: "Sí",
    },
    hint: "Aquestes dades determinen quines deduccions i llindars t'apliquen a les pestanyes següents.",
    info: [
      {
        h: "Qui ha de presentar declaració a Zúric?",
        p: "Tothom domiciliat al cantó de Zúric a 31 de desembre, o que hi ha treballat/tingut propietats durant l'any, ha de presentar declaració (Steuererklärung). Si acabes d'arribar a Suïssa amb permís B i tributes per retenció a la font (Quellensteuer), en molts casos no cal declaració — però si superes cert llindar d'ingressos (normalment CHF 120'000/any) o tens patrimoni/immobles, sí que n'hauràs de presentar una."
      },
      {
        h: "Termini i pròrroga",
        p: "El termini estàndard és el 31 de març de l'any següent. Zúric permet demanar una pròrroga gratuïta i automàtica fins a finals de setembre/novembre a través del portal ZHservices (en línia, sense justificar el motiu). Presentar tard sense pròrroga pot comportar un recordatori de pagament i, en casos reiterats, una multa."
      },
      {
        h: "Declaració conjunta vs separada",
        p: "Els matrimonis i parelles registrades sempre presenten una única declaració conjunta a Suïssa (no hi ha opció de tributació separada com en altres països). Els ingressos i deduccions de tots dos es sumen; per això aquesta eina et demana el salari del cònjuge si escau."
      },
      {
        h: "Impost eclesiàstic (Kirchensteuer)",
        p: "Si estàs registrat oficialment com a membre de l'Església Reformada, Catòlica o Catòlica Cristiana, pagaràs un impost eclesiàstic addicional (normalment un 10-12% de l'impost cantonal). Pots donar-te de baixa (Kirchenaustritt) a l'oficina civil del teu municipi en qualsevol moment; l'efecte fiscal s'aplica generalment a partir de l'any següent."
      },
    ],
  },

  ingressos: {
    heading: "Ingressos bruts anuals",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Salari brut anual (declarant) — casella salari del certificat salarial (Lohnausweis)" },
    salariBrutConjuge: { label: "Salari brut anual (cònjuge, si declaració conjunta)" },
    altresIngressos: { label: "Altres ingressos (lloguers, dividends, altres)" },
    hint: "Fes servir les xifres del teu Lohnausweis (certificat salarial) que et dona l'empresa. Si tens més d'una feina, suma-les aquí.",
    info: [
      {
        h: "El teu Lohnausweis casella per casella",
        list: [
          "Ziffer 1: salari brut total — la xifra principal que has d'introduir aquí.",
          "Ziffer 2.1-2.3: bonus, comissions, participacions en beneficis — sumar-los al salari brut.",
          "Ziffer 3: prestacions irregulars (indemnitzacions, opcions sobre accions) — també tributables.",
          "Ziffer 7: cotxe de l'empresa d'ús privat — s'afegeix com a ingrés en espècie (0,9%/mes del preu de compra).",
          "Ziffer 13.1.1/13.1.2: despeses de representació i formació ja pagades per l'empresa — normalment NO tornen a ser deduïbles (evita duplicar-les a la pestanya 3).",
        ]
      },
      {
        h: "Diverses feines o feina secundària",
        p: "Si tens més d'un ocupador, suma tots els salaris bruts del Lohnausweis corresponent. Les feines accessòries (Nebenerwerb) també són plenament tributables; a nivell federal existeix una deducció addicional petita per despeses de feina accessòria si no és molt significativa."
      },
      {
        h: "Prestacions socials: què tributa i què no",
        p: "Les prestacions d'atur (ALV), les indemnitzacions per accident/malaltia (SUVA, IV) i les pensions (AVS/AI/2n pilar) SÍ tributen com a ingrés. Els abonaments familiars (Kinder- und Ausbildungszulagen) també tributen. En canvi, la prestació complementària (Ergänzungsleistungen) i certes indemnitzacions per dany moral NO tributen."
      },
    ],
  },

  professionals: {
    heading: "Despeses professionals (Berufskosten)",
    transport: {
      legend: "🚋 Transport (Fahrkosten)",
      costTransportPublic: { label: "Cost anual de l'abonament de transport públic (SBB/ZVV/etc.)" },
      usaCotxe: { label: "Vas en cotxe privat perquè NO hi ha transport públic raonable?", no: "No", si: "Sí" },
      kmAny: { label: "Km recorreguts (anada+tornada) x dies laborables a l'any", placeholder: "km/any" },
      hint: "A nivell federal el cost de desplaçament és deduïble fins a un màxim anual (vegeu resum). A nivell cantonal ZH el límit pot ser diferent.",
    },
    dietes: {
      legend: "🍽️ Dietes / menjar fora de casa (Verpflegungsmehrkosten)",
      diesMenjarFora: { label: "Dies laborables l'any que mengeu fora de casa sense cantina subvencionada", placeholder: "dies/any" },
      teCantina: { label: "La teva empresa té cantina o et subvenciona el menjar?", no: "No", si: "Sí (deducció reduïda a la meitat)" },
      hint: "S'aplica un import fix per dia. Si tens cantina subvencionada, la deducció diària es redueix a la meitat.",
    },
    formacio: {
      legend: "🎓 Formació contínua i altres despeses professionals",
      formacio: { label: "Despeses de formació contínua relacionada amb la feina (cursos, material)" },
      altresProfessionals: { label: "Altres despeses professionals efectives (roba de treball, eines, despatx a casa...) — només si superen el % fix" },
      hint: "Per defecte s'aplica una deducció fixa (Pauschalabzug) sobre el salari brut. Només val la pena declarar despeses efectives si superen aquest fix.",
    },
    info: [
      {
        h: "Pauschalabzug o despeses reals: quina tries?",
        p: "Zúric aplica automàticament un 3% del salari net (mínim CHF 2'000, màxim CHF 4'000) com a deducció fixa per cobrir petites despeses professionals (roba, telèfon, material petit) sense necessitat de justificants. Només té sentit declarar despeses efectives (rebuts reals) si el seu total supera clarament aquest import fix — en cas contrari, estàs perdent temps sense guanyar res."
      },
      {
        h: "Quan es considera \"no raonable\" el transport públic?",
        p: "L'oficina tributària de Zúric sol acceptar el cotxe privat com a despesa deduïble només si el transport públic suposa més d'una hora addicional de trajecte diari (anada+tornada) respecte al cotxe, o si no hi ha connexió raonable a l'horari de treball (torns de nit, zones rurals mal connectades). Si simplement prefereixes el cotxe per comoditat, Hisenda pot rebutjar la deducció i limitar-te al cost equivalent de l'abonament de transport públic més barat disponible."
      },
      {
        h: "Despatx a casa (Home Office)",
        p: "Si el teu ocupador no et proporciona un lloc de treball i treballes regularment des de casa, pots deduir una part proporcional del lloguer/valor de lloguer, calefacció i electricitat corresponent a l'habitació utilitzada exclusivament com a despatx. Cal poder demostrar-ho amb una carta de l'ocupador confirmant l'absència de lloc fix a l'oficina; aquesta deducció és examinada amb detall per l'oficina tributària."
      },
      {
        h: "Exemple numèric",
        p: "Salari brut CHF 90'000 → Pauschalabzug = 3% = CHF 2'700 (dins del rang 2'000-4'000). Si a més tens un abonament ZVV de CHF 2'200/any i menges fora 220 dies sense cantina (220 × CHF 15 = CHF 3'300, però capat a CHF 3'200/any), el total de despeses professionals seria CHF 2'700 + 2'200 + 3'200 = CHF 8'100."
      },
    ],
  },

  assegurances: {
    heading: "Assegurances i previsió (Pilar 3a)",
    tePensionskasse: { label: "Ets afiliat a un fons de pensions (Pensionskasse / 2n pilar) via la feina?", si: "Sí", no: "No (autònom sense 2n pilar)" },
    pilar3a: { label: "Aportació anual al Pilar 3a (compte o assegurança de previsió vinculada)" },
    einkaufPK: { label: "Rescat voluntari (Einkauf) a la caixa de pensions aquest any" },
    primaSalut: { label: "Primes anuals d'assegurança de malaltia i accidents (KVG/LAMal) — declarant" },
    primaVida: { label: "Primes d'assegurança de vida / altres assegurances privades deduïbles" },
    interessosEstalvi: { label: "Interessos generats per estalvis (compte estalvi, etc.)" },
    hint: "El pilar 3a és una de les deduccions més potents. Les primes de salut/vida es dedueixen fins a un sostre fix.",
    info: [
      {
        h: "Compte 3a vs assegurança 3a vinculada",
        p: "Un compte bancari 3a ofereix flexibilitat total (pots aportar la quantitat que vulguis cada any fins al màxim, i triar entre estalvi pur o estalvi amb inversió en fons). Una pòlissa d'assegurança de previsió vinculada (3a amb assegurança de vida) t'obliga a pagar primes fixes durant anys i penalitza fortament la cancel·lació anticipada — normalment només és recomanable si necessites cobertura de vida/invalidesa real, no només per estalviar impostos."
      },
      {
        h: "Termini: 31 de desembre",
        p: "L'aportació al 3a s'ha de fer (transferència rebuda pel banc/asseguradora) abans del 31 de desembre de l'any fiscal corresponent. No es pot fer amb efecte retroactiu a gener de l'any següent."
      },
      {
        h: "Rescat de la caixa de pensions (Einkauf) i regla dels 3 anys",
        p: "Si has tingut llacunes de cotització (anys sense feina, arribada des de l'estranger, augment de sou), pots fer una aportació voluntària (Einkauf) a la teva Pensionskasse per igualar la teva prestació objectiu. Aquesta aportació és 100% deduïble l'any en què la fas. Compte: si retires capital (no renda) de la caixa de pensions en els 3 anys següents a un Einkauf, Hisenda pot anul·lar retroactivament la deducció fiscal d'aquell rescat (regla dels 3 anys / Sperrfrist)."
      },
      {
        h: "Estratègia: aplanar la progressivitat",
        p: "Com que l'impost suís és progressiu, sovint és més eficient repartir un Einkauf gran en diverses aportacions més petites al llarg de diversos anys (en lloc d'una de sola) per evitar que una gran deducció d'un sol any \"es perdi\" en un tram baix mentre altres anys pagues tipus marginals més alts."
      },
    ],
  },

  familia: {
    heading: "Família i fills",
    despesesGuarderia: { label: "Despeses de guarderia / cangur per fills menors de 14 anys, mentre treballes o estudies" },
    pensioAlimentaria: { label: "Pensió alimentària pagada (a l'altre progenitor)" },
    hint: "La deducció per fills (Kinderabzug) i la deducció personal ja s'apliquen automàticament segons el nombre de fills i l'estat civil indicats a la pestanya 1.",
    chfAnyPlaceholder: "CHF/any",
    info: [
      {
        h: "Condicions per deduir la guarderia",
        p: "Cal una factura oficial del proveïdor (guarderia, cangur amb contracte declarat, colònies de dia) indicant el seu número UID/IVA. La cura ha de ser necessària perquè els progenitors puguin treballar, estudiar o per incapacitat/malaltia acreditada — cuidar el fill mentre estàs a l'atur no sol qualificar. Els avis que cuiden gratis no generen deducció (no hi ha factura); si els pagues formalment i ho declaren com a ingrés, sí que podria qualificar."
      },
      {
        h: "Pensió alimentària: qui la declara?",
        p: "Qui la paga la dedueix íntegrament; qui la rep l'ha de declarar com a ingrés tributable. Això val tant per la pensió a l'excònjuge com per la del fill fins a la majoria d'edat (o fins al final dels estudis, en alguns casos, si així ho estableix el conveni)."
      },
      {
        h: "Custòdia compartida i Kinderabzug",
        p: "Si la custòdia és compartida a parts iguals i no hi ha pensió alimentària entre progenitors, Zúric sol repartir la deducció per fill (Kinderabzug) a parts iguals entre ambdós progenitors. Si un progenitor rep pensió alimentària per part de l'altre, normalment és qui conviu principalment amb el fill qui es queda tota la deducció."
      },
    ],
  },

  altres: {
    heading: "Altres deduccions",
    donacions: { label: "Donacions a entitats amb finalitat pública/benèfica reconegudes" },
    interessosDeute: { label: "Interessos de deutes privats pagats (hipoteca privada, préstecs, targetes)" },
    despesesMediques: { label: "Despeses mèdiques i dentals no cobertes per l'assegurança (pròpies, no reemborsades)" },
    hint: "Les despeses mèdiques només són deduïbles per la part que supera un percentatge del teu ingrés net. Les donacions han de superar un import mínim anual.",
    info: [
      {
        h: "Donacions: requisits del rebut",
        p: "L'entitat receptora ha de tenir reconeguda l'exempció fiscal per finalitat pública o d'utilitat pública (la majoria d'ONG i fundacions suïsses ho indiquen al seu rebut/confirmació anual). Guarda sempre la confirmació anual de donacions que envien aquestes entitats a gener — és el justificant que et demanaran."
      },
      {
        h: "Quins interessos de deute compten?",
        p: "Interessos d'hipoteca privada, préstecs personals, targetes de crèdit i descoberts bancaris són deduïbles (dins del límit de rendiment d'actius + CHF 50'000). Les quotes d'amortització del capital NO són deduïbles, només la part d'interessos — revisa el certificat anual del banc que ja separa ambdós conceptes."
      },
      {
        h: "Despeses mèdiques: la franquícia oculta",
        p: "Només es dedueix la part de despeses mèdiques/dentals no reemborsades que superi el 5% del teu ingrés net. Per exemple, amb un ingrés net de CHF 80'000, els primers CHF 4'000 de despesa mèdica no compten — només l'excés. Guarda totes les factures (dentista, ulleres, fisioteràpia no coberta) i suma-les totes juntes per superar més fàcilment aquest llindar."
      },
    ],
  },

  resum: {
    heading: "Resum i checklist de documents",
    xifresClauTitle: "Xifres clau (any fiscal {year})",
    conceptCol: "Concepte",
    importCol: "Import",
    ingressosBrutTotal: "Ingressos bruts totals",
    totalDeduccionsEst: "Total deduccions estimades",
    ingresImposableEst: "Ingrés imposable estimat",
    avisPilar3a: "⚠️ Has introduït {aportat} al Pilar 3a, però el màxim deduïble per al teu cas és {max}. L'excés de {exces} no és deduïble.",
    avisTransportZhCap: "⚠️ A nivell federal el cost de transport només és deduïble fins a {fedMax}/any; a nivell cantonal ZH el sostre és {zhMax}/any.",
    avisTransportZhReal: "⚠️ A nivell federal el cost de transport només és deduïble fins a {fedMax}/any; a nivell cantonal ZH pots deduir el cost real ({real}) fins a un sostre de {zhMax}/any.",
    avisFormacio: "⚠️ Les despeses de formació contínua només són deduïbles fins a {max} per persona (font: formulari oficial). L'excés de {exces} no és deduïble.",
    detallTitle: "Detall per casella del formulari (orientatiu)",
    casellaCol: "Casella típica (Ziffer)",
    importDeclararCol: "Import a declarar",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 10.1)",
      fahrkosten: "Fahrkosten — transport (Ziffer 10.1)",
      verpflegung: "Verpflegungsmehrkosten — dietes (Ziffer 10.1)",
      weiterbildung: "Weiterbildungskosten — formació (Ziffer 10.4)",
      saule3a: "Säule 3a (Ziffer 11.1)",
      versicherung: "Versicherungsprämien — assegurances (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten — guarderia (Ziffer 14)",
      kinderabzug: "Kinderabzug ({n} fill/s) (Ziffer 21.1)",
      spenden: "Spenden — donacions (Ziffer 18)",
      schuldzinsen: "Schuldzinsen — interessos de deute (Ziffer 13)",
      krankheit: "Krankheitskosten — despeses mèdiques (Ziffer 17)",
    },
    checklistTitle: "📋 Checklist de documents a preparar",
    checklist: {
      lohnausweis: "Certificat salarial (Lohnausweis) de cada feina",
      abonament: "Factura/comprovant de l'abonament de transport públic",
      dietes: "Justificació que no tens cantina subvencionada (si escau)",
      formacio: "Rebuts de cursos/formació contínua",
      pilar3a: "Certificat anual del compte/pòlissa del Pilar 3a",
      einkauf: "Confirmació de rescat (Einkauf) de la caixa de pensions",
      assegurances: "Pòlisses i rebuts d'assegurança de salut/vida",
      guarderia: "Factures de la guarderia/cangur amb NIF del prestador",
      pensio: "Conveni o sentència de pensió alimentària",
      donacions: "Rebuts/confirmacions de donacions",
      interessos: "Extractes d'interessos de deute (hipoteca, préstecs)",
      mediques: "Factures mèdiques no reemborsades per l'assegurança",
      comptes: "Extractes de tots els comptes bancaris a 31/12",
      titols: "Llistat de valors/accions (Wertschriftenverzeichnis) si en tens",
    },
    howToFileTitle: "📝 Com presentar la declaració, pas a pas",
    howToFile: [
      "1. Descarrega el programari oficial gratuït ZHprivateTax des de zh.ch, o utilitza el portal en línia ZHservices (eTax).",
      "2. Introdueix les dades del teu Lohnausweis i la resta de documents de la checklist casella per casella (fes servir la taula de dalt com a guia).",
      "3. El programa calcula automàticament l'impost cantonal i federal — revisa el resum abans d'enviar.",
      "4. Presenta-la abans del 31 de març, o demana la pròrroga gratuïta a ZHservices si necessites més temps.",
      "5. Guarda una còpia signada (digital o paper) i tots els justificants durant almenys 10 anys, per si Hisenda en demana algun.",
    ],
    export: {
      title: "Resum fiscal orientatiu — Cantó de Zúric — Any fiscal {year}",
      generated: "Generat",
      estatCivil: "Estat civil",
      municipi: "Municipi",
      fills: "Fills a càrrec",
      ingressosBrutTotal: "Ingressos bruts totals",
      totalDeduccions: "Total deduccions estimades",
      ingresImposable: "Ingrés imposable estimat",
      detailHeader: "--- Detall deduccions ---",
      pauschal: "Berufsauslagen (fix)",
      transport: "Fahrkosten (transport)",
      dietes: "Verpflegungsmehrkosten (dietes)",
      formacio: "Weiterbildung (formació)",
      saule3a: "Säule 3a",
      einkauf: "Einkauf caixa de pensions",
      assegurances: "Assegurances",
      guarderia: "Guarderia",
      pensio: "Pensió alimentària",
      kinderabzug: "Kinderabzug",
      donacions: "Donacions",
      interessos: "Interessos de deute",
      mediques: "Despeses mèdiques",
      footer: "Aquesta és una estimació orientativa. Verifica les xifres al portal oficial zh.ch abans de presentar la declaració.",
    },
    confirmReset: "Segur que vols esborrar totes les dades introduïdes?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Certificat salarial", explanation: "Document anual que l'empresa t'entrega amb tots els teus ingressos i deduccions a la font. És la base de tota la declaració." },
    { de: "Steuererklärung", translation: "Declaració d'impostos", explanation: "El formulari anual (paper o ZHprivateTax) que has de presentar a Hisenda." },
    { de: "Berufskosten", translation: "Despeses professionals", explanation: "Conjunt de despeses relacionades amb la feina que es poden deduir: transport, dietes, formació, etc." },
    { de: "Pauschalabzug", translation: "Deducció fixa", explanation: "Import fix (3% del salari, entre CHF 2'000 i 4'000) que es dedueix sense necessitat de justificants." },
    { de: "Fahrkosten", translation: "Despeses de transport", explanation: "Cost del desplaçament diari entre casa i la feina, deduïble amb límits." },
    { de: "Verpflegungsmehrkosten", translation: "Dietes / sobrecost de menjar", explanation: "Import fix per dia quan menges fora de casa sense cantina subvencionada." },
    { de: "Weiterbildungskosten", translation: "Despeses de formació contínua", explanation: "Cursos i formació relacionats amb la teva professió actual o futura." },
    { de: "Säule 3a", translation: "Pilar 3a", explanation: "Previsió privada vinculada amb avantatge fiscal; l'aportació anual és 100% deduïble fins al màxim legal." },
    { de: "Pensionskasse", translation: "Caixa/fons de pensions (2n pilar)", explanation: "El teu pla de pensions professional obligatori, gestionat per l'empresa." },
    { de: "Einkauf", translation: "Rescat / aportació voluntària", explanation: "Aportació voluntària a la caixa de pensions per cobrir llacunes de cotització; deduïble l'any que la fas." },
    { de: "Versicherungsprämien", translation: "Primes d'assegurança", explanation: "Primes de salut i vida deduïbles fins a un sostre anual fix." },
    { de: "Kinderbetreuungskosten", translation: "Despeses de guarderia/cura de fills", explanation: "Cost de guarderia o cangur necessari perquè puguis treballar o estudiar." },
    { de: "Kinderabzug", translation: "Deducció per fill", explanation: "Import fix que es dedueix per cada fill a càrrec." },
    { de: "Spenden", translation: "Donacions", explanation: "Donacions a entitats reconegudes, deduïbles per sobre d'un mínim anual." },
    { de: "Schuldzinsen", translation: "Interessos de deute", explanation: "Interessos (no el capital) de préstecs i hipoteques privades." },
    { de: "Krankheitskosten", translation: "Despeses mèdiques", explanation: "Despeses de salut no reemborsades, deduïbles per sobre d'una franquícia." },
    { de: "Sozialabzug", translation: "Deducció social/personal", explanation: "Deduccions generals aplicades segons l'estat civil i càrregues familiars." },
    { de: "Steuerfuss", translation: "Multiplicador fiscal", explanation: "Percentatge que el cantó i el municipi apliquen sobre l'impost base per calcular l'impost final." },
    { de: "Quellensteuer", translation: "Retenció a la font", explanation: "Impost retingut directament de la nòmina, aplicat a certs residents estrangers sense permís C." },
    { de: "Wertschriftenverzeichnis", translation: "Llistat de valors", explanation: "Inventari de comptes, accions i altres actius financers a 31 de desembre." },
  ],
};
