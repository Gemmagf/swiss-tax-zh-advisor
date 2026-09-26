window.I18N = window.I18N || {};
window.I18N.it = {
  meta: { code: "it", name: "Italiano" },

  app: {
    title: "🇨🇭 Consulente Fiscale · Canton Zurigo",
    exportBtn: "Esporta riepilogo",
    resetBtn: "Cancella dati",
    disclaimer: "⚠️ <strong>Avviso importante:</strong> Questo strumento offre una <strong>stima orientativa</strong> basata sulle regole generali di deduzione del canton Zurigo e dell'imposta federale diretta. Non sostituisce la consulenza di un fiscalista qualificato né l'uso del software ufficiale <em>ZHprivateTax</em>, ma include il massimo dettaglio ed elucidazioni possibili affinché tu possa presentare la tua dichiarazione con fiducia. Verifica sempre le cifre e i limiti in vigore su <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a> prima di presentare la dichiarazione. I dati vengono inseriti solo nel tuo browser (localStorage) — non vengono inviati ad alcun server.",
    footer: "Strumento personale non ufficiale · Canton Zurigo · Dati locali nel tuo browser · Nessun invio di dati a server",
    dataYearNote: "Cifre di riferimento: anno fiscale {year}.",
  },

  tabs: {
    perfil: "1. Profilo",
    ingressos: "2. Redditi",
    professionals: "3. Spese professionali",
    assegurances: "4. Assicurazioni e 3a",
    familia: "5. Famiglia e figli",
    altres: "6. Altre deduzioni",
    resum: "7. Riepilogo e checklist",
    glossary: "8. Glossario ufficiale",
  },

  wizard: {
    guidedMode: "🧭 Modalità guidata (passo dopo passo)",
    allTabsMode: "📑 Tutte le schede",
    stepOf: "Passo {current} di {total}",
    back: "◀ Indietro",
    next: "Avanti ▶",
    finish: "✅ Fatto",
  },

  glossaryIntro: "Il modulo ufficiale di Zurigo (cartaceo o ZHprivateTax) è sempre in tedesco. Questa tabella traduce i termini chiave affinché tu possa individuare la casella corretta nel modulo reale.",

  sidebar: {
    totalsTitle: "Totali in tempo reale",
    totIngressos: "Redditi lordi totali",
    totDeduccions: "Totale deduzioni stimate",
    totImposable: "Reddito imponibile stimato",
    hint: "Stima semplificata, senza applicare la curva reale delle aliquote fiscali. Utile per confrontare scenari (\"e se versassi di più nel 3a?\").",
    desglosTitle: "Ripartizione delle deduzioni",
    empty: "Non sono ancora stati inseriti dati",
    despProfessionals: "Spese professionali (fisso + trasporto + pasti + formazione)",
  },

  perfil: {
    heading: "Profilo fiscale",
    estatCivil: {
      label: "Stato civile",
      solter: "Celibe/nubile",
      casat: "Coniugato/a o unione domestica registrata (dichiarazione congiunta)",
    },
    municipi: {
      label: "Comune (per il moltiplicatore comunale, Steuerfuss)",
      placeholder: "es. Zurigo, Winterthur, Uster...",
    },
    esglesia: {
      label: "Sei membro di una chiesa riconosciuta (Kirchensteuer)?",
      no: "No",
      si: "Sì",
    },
    numFills: { label: "Numero di figli a carico" },
    dobleIngres: {
      label: "Entrambi i membri della coppia lavorano? (rilevante per lo Zweitverdienerabzug)",
      no: "No / non applicabile",
      si: "Sì",
    },
    hint: "Questi dati determinano quali deduzioni e soglie si applicano a te nelle schede successive.",
    info: [
      {
        h: "Chi deve presentare la dichiarazione a Zurigo?",
        p: "Chiunque sia domiciliato nel canton Zurigo al 31 dicembre, o vi abbia lavorato/posseduto proprietà durante l'anno, deve presentare la dichiarazione (Steuererklärung). Se sei appena arrivato in Svizzera con permesso B e sei tassato tramite ritenuta alla fonte (Quellensteuer), in molti casi non è necessaria la dichiarazione — ma se superi una certa soglia di reddito (di norma CHF 120'000/anno) o hai patrimonio/immobili, dovrai comunque presentarne una."
      },
      {
        h: "Termine e proroga",
        p: "Il termine standard è il 31 marzo dell'anno successivo. Zurigo consente di richiedere una proroga gratuita e automatica fino alla fine di settembre/novembre tramite il portale ZHservices (online, senza dover giustificare il motivo). Presentare in ritardo senza proroga può comportare un sollecito e, in caso di recidiva, una multa."
      },
      {
        h: "Dichiarazione congiunta vs separata",
        p: "I coniugi e le unioni domestiche registrate presentano sempre un'unica dichiarazione congiunta in Svizzera (non esiste l'opzione di tassazione separata come in altri paesi). I redditi e le deduzioni di entrambi vengono sommati; per questo lo strumento chiede il salario del coniuge, se applicabile."
      },
      {
        h: "Imposta ecclesiastica (Kirchensteuer)",
        p: "Se sei ufficialmente registrato come membro della Chiesa Riformata, Cattolica o Cattolica Cristiana, pagherai un'imposta ecclesiastica aggiuntiva (di norma il 10-12% dell'imposta cantonale). Puoi uscirne (Kirchenaustritt) presso l'ufficio dello stato civile del tuo comune in qualsiasi momento; l'effetto fiscale si applica generalmente a partire dall'anno successivo."
      },
    ],
  },

  ingressos: {
    heading: "Redditi lordi annuali",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Salario lordo annuo (dichiarante) — casella salario del certificato di salario (Lohnausweis)" },
    salariBrutConjuge: { label: "Salario lordo annuo (coniuge, se dichiarazione congiunta)" },
    altresIngressos: { label: "Altri redditi (affitti, dividendi, altro)" },
    hint: "Usa le cifre del tuo Lohnausweis (certificato di salario) fornito dal datore di lavoro. Se hai più di un impiego, sommali qui.",
    info: [
      {
        h: "Il tuo Lohnausweis casella per casella",
        list: [
          "Ziffer 1: salario lordo totale — la cifra principale da inserire qui.",
          "Ziffer 2.1-2.3: bonus, commissioni, partecipazioni agli utili — da sommare al salario lordo.",
          "Ziffer 3: prestazioni irregolari (indennità, stock option) — anch'esse imponibili.",
          "Ziffer 7: auto aziendale a uso privato — si aggiunge come reddito in natura (0,9%/mese del prezzo d'acquisto).",
          "Ziffer 13.1.1/13.1.2: spese di rappresentanza e formazione già pagate dal datore di lavoro — di norma NON sono nuovamente deducibili (evita di duplicarle nella scheda 3).",
        ]
      },
      {
        h: "Più impieghi o lavoro accessorio",
        p: "Se hai più di un datore di lavoro, somma tutti i salari lordi dei rispettivi Lohnausweis. Anche i lavori accessori (Nebenerwerb) sono pienamente imponibili; a livello federale esiste una piccola deduzione aggiuntiva per le spese relative al lavoro accessorio, se non particolarmente rilevante."
      },
      {
        h: "Prestazioni sociali: cosa è imponibile e cosa no",
        p: "Le indennità di disoccupazione (ALV), le indennità per infortunio/malattia (SUVA, IV) e le rendite (AVS/AI/2° pilastro) SONO imponibili come reddito. Anche gli assegni familiari (Kinder- und Ausbildungszulagen) sono imponibili. Al contrario, le prestazioni complementari (Ergänzungsleistungen) e alcune indennità per danno morale NON sono imponibili."
      },
    ],
  },

  professionals: {
    heading: "Spese professionali (Berufskosten)",
    transport: {
      legend: "🚋 Trasporto (Fahrkosten)",
      costTransportPublic: { label: "Costo annuo dell'abbonamento ai trasporti pubblici (SBB/ZVV/ecc.)" },
      usaCotxe: { label: "Usi l'auto privata perché NON esiste un trasporto pubblico ragionevole?", no: "No", si: "Sì" },
      kmAny: { label: "Km percorsi (andata+ritorno) x giorni lavorativi all'anno", placeholder: "km/anno" },
      hint: "A livello federale il costo di trasporto è deducibile fino a un massimo annuo (vedi riepilogo). A livello cantonale ZH il limite può essere diverso.",
    },
    dietes: {
      legend: "🍽️ Pasti fuori casa (Verpflegungsmehrkosten)",
      diesMenjarFora: { label: "Giorni lavorativi all'anno in cui mangi fuori casa senza mensa sovvenzionata", placeholder: "giorni/anno" },
      teCantina: { label: "La tua azienda ha una mensa o ti sovvenziona il pasto?", no: "No", si: "Sì (deduzione ridotta della metà)" },
      hint: "Si applica un importo fisso al giorno. Se hai una mensa sovvenzionata, la deduzione giornaliera si riduce della metà.",
    },
    formacio: {
      legend: "🎓 Formazione continua e altre spese professionali",
      formacio: { label: "Spese di formazione continua legate al lavoro (corsi, materiale)" },
      altresProfessionals: { label: "Altre spese professionali effettive (abbigliamento da lavoro, attrezzi, ufficio a casa...) — solo se superano la % fissa" },
      hint: "Per impostazione predefinita si applica una deduzione fissa (Pauschalabzug) sul salario lordo. Ha senso dichiarare le spese effettive solo se superano questo importo fisso.",
    },
    info: [
      {
        h: "Pauschalabzug o spese reali: quale scegliere?",
        p: "Zurigo applica automaticamente il 3% del salario netto (minimo CHF 2'000, massimo CHF 4'000) come deduzione fissa per coprire piccole spese professionali (abbigliamento, telefono, materiale minuto) senza bisogno di giustificativi. Ha senso dichiarare le spese effettive (con ricevute reali) solo se il loro totale supera chiaramente questo importo fisso — altrimenti si perde tempo senza alcun vantaggio."
      },
      {
        h: "Quando il trasporto pubblico è considerato \"non ragionevole\"?",
        p: "L'ufficio delle imposte di Zurigo accetta di norma l'auto privata come spesa deducibile solo se il trasporto pubblico comporta più di un'ora aggiuntiva di tragitto giornaliero (andata+ritorno) rispetto all'auto, oppure se non esiste un collegamento ragionevole con l'orario di lavoro (turni notturni, zone rurali mal collegate). Se preferisci semplicemente l'auto per comodità, il fisco può rifiutare la deduzione e limitarti al costo equivalente dell'abbonamento di trasporto pubblico più economico disponibile."
      },
      {
        h: "Ufficio a casa (Home Office)",
        p: "Se il tuo datore di lavoro non ti fornisce un posto di lavoro e lavori regolarmente da casa, puoi dedurre una parte proporzionale dell'affitto/valore locativo, del riscaldamento e dell'elettricità corrispondente alla stanza usata esclusivamente come ufficio. Devi poterlo dimostrare con una lettera del datore di lavoro che confermi l'assenza di una postazione fissa in ufficio; questa deduzione viene esaminata con attenzione dall'ufficio delle imposte."
      },
      {
        h: "Esempio numerico",
        p: "Salario lordo CHF 90'000 → Pauschalabzug = 3% = CHF 2'700 (entro l'intervallo 2'000-4'000). Se inoltre hai un abbonamento ZVV di CHF 2'200/anno e mangi fuori 220 giorni senza mensa (220 × CHF 15 = CHF 3'300, ma limitato a CHF 3'200/anno), il totale delle spese professionali sarebbe CHF 2'700 + 2'200 + 3'200 = CHF 8'100."
      },
    ],
  },

  assegurances: {
    heading: "Assicurazioni e previdenza (Pilastro 3a)",
    tePensionskasse: { label: "Sei affiliato a una cassa pensioni (Pensionskasse / 2° pilastro) tramite il lavoro?", si: "Sì", no: "No (indipendente senza 2° pilastro)" },
    pilar3a: { label: "Versamento annuo al Pilastro 3a (conto o assicurazione di previdenza vincolata)" },
    einkaufPK: { label: "Riscatto volontario (Einkauf) nella cassa pensioni quest'anno" },
    primaSalut: { label: "Premi annui di assicurazione malattia e infortuni (KVG/LAMal) — dichiarante" },
    primaVida: { label: "Premi di assicurazione vita / altre assicurazioni private deducibili" },
    interessosEstalvi: { label: "Interessi generati dai risparmi (conto risparmio, ecc.)" },
    hint: "Il pilastro 3a è una delle deduzioni più efficaci. I premi di malattia/vita si deducono fino a un tetto fisso.",
    info: [
      {
        h: "Conto 3a vs assicurazione 3a vincolata",
        p: "Un conto bancario 3a offre piena flessibilità (puoi versare l'importo che vuoi ogni anno fino al massimo, e scegliere tra risparmio puro o risparmio con investimento in fondi). Una polizza assicurativa di previdenza vincolata (3a con assicurazione vita) ti obbliga a pagare premi fissi per anni e penalizza fortemente la disdetta anticipata — di norma è consigliabile solo se hai bisogno di una copertura vita/invalidità reale, non solo per risparmiare sulle imposte."
      },
      {
        h: "Termine: 31 dicembre",
        p: "Il versamento al 3a deve essere effettuato (bonifico ricevuto dalla banca/assicurazione) entro il 31 dicembre dell'anno fiscale corrispondente. Non può essere effettuato con effetto retroattivo a gennaio dell'anno successivo."
      },
      {
        h: "Riscatto della cassa pensioni (Einkauf) e regola dei 3 anni",
        p: "Se hai avuto lacune contributive (anni senza lavoro, arrivo dall'estero, aumento di stipendio), puoi effettuare un versamento volontario (Einkauf) alla tua Pensionskasse per colmare la prestazione obiettivo. Questo versamento è deducibile al 100% nell'anno in cui viene effettuato. Attenzione: se ritiri capitale (non rendita) dalla cassa pensioni nei 3 anni successivi a un Einkauf, il fisco può annullare retroattivamente la deduzione fiscale di quel riscatto (regola dei 3 anni / Sperrfrist)."
      },
      {
        h: "Strategia: appianare la progressività",
        p: "Poiché l'imposta svizzera è progressiva, spesso è più efficiente ripartire un grande Einkauf in più versamenti più piccoli nel corso di diversi anni (anziché in un'unica soluzione) per evitare che una grande deduzione in un solo anno \"si perda\" in uno scaglione basso mentre negli altri anni paghi aliquote marginali più alte."
      },
    ],
  },

  familia: {
    heading: "Famiglia e figli",
    despesesGuarderia: { label: "Spese di asilo nido / babysitter per figli minori di 14 anni, mentre lavori o studi" },
    pensioAlimentaria: { label: "Assegno di mantenimento pagato (all'altro genitore)" },
    hint: "La deduzione per figli (Kinderabzug) e la deduzione personale si applicano già automaticamente in base al numero di figli e allo stato civile indicati nella scheda 1.",
    chfAnyPlaceholder: "CHF/anno",
    info: [
      {
        h: "Condizioni per dedurre l'asilo nido",
        p: "Serve una fattura ufficiale del fornitore (asilo nido, babysitter con contratto dichiarato, colonie diurne) che indichi il suo numero UID/IVA. La cura deve essere necessaria affinché i genitori possano lavorare, studiare, oppure per incapacità/malattia comprovata — occuparsi del figlio mentre si è disoccupati di norma non qualifica. I nonni che si prendono cura gratuitamente non generano deduzione (non c'è fattura); se li paghi formalmente e lo dichiarano come reddito, potrebbe qualificare."
      },
      {
        h: "Assegno di mantenimento: chi lo dichiara?",
        p: "Chi lo paga lo deduce integralmente; chi lo riceve deve dichiararlo come reddito imponibile. Questo vale sia per l'assegno all'ex coniuge sia per quello del figlio fino alla maggiore età (o fino alla fine degli studi, in alcuni casi, se così stabilito dall'accordo)."
      },
      {
        h: "Affido condiviso e Kinderabzug",
        p: "Se l'affido è condiviso in parti uguali e non c'è assegno di mantenimento tra i genitori, Zurigo di norma ripartisce la deduzione per figlio (Kinderabzug) in parti uguali tra entrambi i genitori. Se un genitore riceve l'assegno di mantenimento dall'altro, di norma è chi convive principalmente con il figlio a mantenere l'intera deduzione."
      },
    ],
  },

  altres: {
    heading: "Altre deduzioni",
    donacions: { label: "Donazioni a enti con finalità pubblica/benefica riconosciuti" },
    interessosDeute: { label: "Interessi su debiti privati pagati (mutuo privato, prestiti, carte)" },
    despesesMediques: { label: "Spese mediche e dentistiche non coperte dall'assicurazione (proprie, non rimborsate)" },
    hint: "Le spese mediche sono deducibili solo per la parte che supera una percentuale del tuo reddito netto. Le donazioni devono superare un importo minimo annuo.",
    info: [
      {
        h: "Donazioni: requisiti della ricevuta",
        p: "L'ente ricevente deve avere l'esenzione fiscale riconosciuta per finalità pubblica o di pubblica utilità (la maggior parte delle ONG e fondazioni svizzere lo indica nella loro ricevuta/conferma annuale). Conserva sempre la conferma annuale delle donazioni che questi enti inviano a gennaio — è il giustificativo che ti verrà richiesto."
      },
      {
        h: "Quali interessi sul debito contano?",
        p: "Gli interessi su mutuo privato, prestiti personali, carte di credito e scoperti bancari sono deducibili (entro il limite del rendimento degli attivi + CHF 50'000). Le rate di ammortamento del capitale NON sono deducibili, solo la parte di interessi — controlla il certificato annuale della banca che già separa le due voci."
      },
      {
        h: "Spese mediche: la franchigia nascosta",
        p: "Si deduce solo la parte di spese mediche/dentistiche non rimborsate che supera il 5% del tuo reddito netto. Ad esempio, con un reddito netto di CHF 80'000, i primi CHF 4'000 di spesa medica non contano — solo l'eccedenza. Conserva tutte le fatture (dentista, occhiali, fisioterapia non coperta) e sommale tutte insieme per superare più facilmente questa soglia."
      },
    ],
  },

  resum: {
    heading: "Riepilogo e checklist dei documenti",
    xifresClauTitle: "Cifre chiave (anno fiscale {year})",
    conceptCol: "Voce",
    importCol: "Importo",
    ingressosBrutTotal: "Redditi lordi totali",
    totalDeduccionsEst: "Totale deduzioni stimate",
    ingresImposableEst: "Reddito imponibile stimato",
    avisPilar3a: "⚠️ Hai inserito {aportat} nel Pilastro 3a, ma il massimo deducibile per il tuo caso è {max}. L'eccedenza di {exces} non è deducibile.",
    avisTransportZhCap: "⚠️ A livello federale il costo di trasporto è deducibile solo fino a {fedMax}/anno; a livello cantonale ZH il tetto è {zhMax}/anno.",
    avisTransportZhReal: "⚠️ A livello federale il costo di trasporto è deducibile solo fino a {fedMax}/anno; a livello cantonale ZH puoi dedurre il costo reale ({real}) fino a un tetto di {zhMax}/anno.",
    avisFormacio: "⚠️ Le spese di formazione continua sono deducibili solo fino a {max} per persona (fonte: modulo ufficiale). L'eccedenza di {exces} non è deducibile.",
    detallTitle: "Dettaglio per casella del modulo (orientativo)",
    casellaCol: "Casella tipica (Ziffer)",
    importDeclararCol: "Importo da dichiarare",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 11.1)",
      fahrkosten: "Fahrkosten — trasporto (Ziffer 11.1)",
      verpflegung: "Verpflegungsmehrkosten — pasti (Ziffer 11.1)",
      weiterbildung: "Weiterbildungskosten — formazione (Ziffer 16.2)",
      saule3a: "Säule 3a (Ziffer 14.1)",
      versicherung: "Versicherungsprämien — assicurazioni (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten — asilo nido (Ziffer 16.6)",
      kinderabzug: "Kinderabzug ({n} figlio/i) (Ziffer 24.1)",
      spenden: "Spenden — donazioni (Ziffer 22.2)",
      schuldzinsen: "Schuldzinsen — interessi sul debito (Ziffer 12)",
      krankheit: "Krankheitskosten — spese mediche (Ziffer 22.1)",
    },
    checklistTitle: "📋 Checklist dei documenti da preparare",
    checklist: {
      lohnausweis: "Certificato di salario (Lohnausweis) di ogni impiego",
      abonament: "Fattura/ricevuta dell'abbonamento ai trasporti pubblici",
      dietes: "Giustificazione dell'assenza di mensa sovvenzionata (se applicabile)",
      formacio: "Ricevute di corsi/formazione continua",
      pilar3a: "Certificato annuale del conto/polizza del Pilastro 3a",
      einkauf: "Conferma del riscatto (Einkauf) della cassa pensioni",
      assegurances: "Polizze e ricevute di assicurazione salute/vita",
      guarderia: "Fatture dell'asilo nido/babysitter con numero fiscale del fornitore",
      pensio: "Accordo o sentenza sull'assegno di mantenimento",
      donacions: "Ricevute/conferme di donazioni",
      interessos: "Estratti degli interessi sul debito (mutuo, prestiti)",
      mediques: "Fatture mediche non rimborsate dall'assicurazione",
      comptes: "Estratti di tutti i conti bancari al 31/12",
      titols: "Elenco di titoli/azioni (Wertschriftenverzeichnis) se ne possiedi",
    },
    howToFileTitle: "📝 Come presentare la dichiarazione, passo dopo passo",
    howToFile: [
      "1. Scarica il software ufficiale gratuito ZHprivateTax da zh.ch, oppure usa il portale online ZHservices (eTax).",
      "2. Inserisci i dati del tuo Lohnausweis e degli altri documenti della checklist casella per casella (usa la tabella sopra come guida).",
      "3. Il programma calcola automaticamente l'imposta cantonale e federale — controlla il riepilogo prima di inviare.",
      "4. Presentala entro il 31 marzo, oppure richiedi la proroga gratuita a ZHservices se hai bisogno di più tempo.",
      "5. Conserva una copia firmata (digitale o cartacea) e tutti i giustificativi per almeno 10 anni, nel caso il fisco ne richieda qualcuno.",
    ],
    export: {
      title: "Riepilogo fiscale orientativo — Canton Zurigo — Anno fiscale {year}",
      generated: "Generato",
      estatCivil: "Stato civile",
      municipi: "Comune",
      fills: "Figli a carico",
      ingressosBrutTotal: "Redditi lordi totali",
      totalDeduccions: "Totale deduzioni stimate",
      ingresImposable: "Reddito imponibile stimato",
      detailHeader: "--- Dettaglio deduzioni ---",
      pauschal: "Berufsauslagen (fisso)",
      transport: "Fahrkosten (trasporto)",
      dietes: "Verpflegungsmehrkosten (pasti)",
      formacio: "Weiterbildung (formazione)",
      saule3a: "Säule 3a",
      einkauf: "Einkauf cassa pensioni",
      assegurances: "Assicurazioni",
      guarderia: "Asilo nido",
      pensio: "Assegno di mantenimento",
      kinderabzug: "Kinderabzug",
      donacions: "Donazioni",
      interessos: "Interessi sul debito",
      mediques: "Spese mediche",
      footer: "Questa è una stima orientativa. Verifica le cifre sul portale ufficiale zh.ch prima di presentare la dichiarazione.",
    },
    confirmReset: "Sei sicuro di voler cancellare tutti i dati inseriti?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Certificato di salario", explanation: "Documento annuale che il datore di lavoro ti consegna con tutti i tuoi redditi e le trattenute alla fonte. È la base di tutta la dichiarazione." },
    { de: "Steuererklärung", translation: "Dichiarazione dei redditi", explanation: "Il modulo annuale (cartaceo o ZHprivateTax) che devi presentare al fisco." },
    { de: "Berufskosten", translation: "Spese professionali", explanation: "Insieme delle spese legate al lavoro che si possono dedurre: trasporto, pasti, formazione, ecc." },
    { de: "Pauschalabzug", translation: "Deduzione fissa", explanation: "Importo fisso (3% del salario, tra CHF 2'000 e 4'000) che si deduce senza bisogno di giustificativi." },
    { de: "Fahrkosten", translation: "Spese di trasporto", explanation: "Costo dello spostamento giornaliero tra casa e lavoro, deducibile entro limiti." },
    { de: "Verpflegungsmehrkosten", translation: "Pasti / sovraccosto per il vitto", explanation: "Importo fisso al giorno quando mangi fuori casa senza mensa sovvenzionata." },
    { de: "Weiterbildungskosten", translation: "Spese di formazione continua", explanation: "Corsi e formazione legati alla tua professione attuale o futura." },
    { de: "Säule 3a", translation: "Pilastro 3a", explanation: "Previdenza privata vincolata con vantaggio fiscale; il versamento annuo è deducibile al 100% fino al massimo legale." },
    { de: "Pensionskasse", translation: "Cassa/fondo pensioni (2° pilastro)", explanation: "Il tuo piano pensionistico professionale obbligatorio, gestito dall'azienda." },
    { de: "Einkauf", translation: "Riscatto / versamento volontario", explanation: "Versamento volontario alla cassa pensioni per colmare lacune contributive; deducibile nell'anno in cui viene effettuato." },
    { de: "Versicherungsprämien", translation: "Premi assicurativi", explanation: "Premi di salute e vita deducibili fino a un tetto annuo fisso." },
    { de: "Kinderbetreuungskosten", translation: "Spese di asilo nido/cura dei figli", explanation: "Costo dell'asilo nido o del babysitter necessario affinché tu possa lavorare o studiare." },
    { de: "Kinderabzug", translation: "Deduzione per figlio", explanation: "Importo fisso che si deduce per ogni figlio a carico." },
    { de: "Spenden", translation: "Donazioni", explanation: "Donazioni a enti riconosciuti, deducibili oltre un minimo annuo." },
    { de: "Schuldzinsen", translation: "Interessi sul debito", explanation: "Interessi (non il capitale) di prestiti e mutui privati." },
    { de: "Krankheitskosten", translation: "Spese mediche", explanation: "Spese sanitarie non rimborsate, deducibili oltre una franchigia." },
    { de: "Sozialabzug", translation: "Deduzione sociale/personale", explanation: "Deduzioni generali applicate in base allo stato civile e ai carichi familiari." },
    { de: "Steuerfuss", translation: "Moltiplicatore fiscale", explanation: "Percentuale che il cantone e il comune applicano sull'imposta di base per calcolare l'imposta finale." },
    { de: "Quellensteuer", translation: "Imposta alla fonte", explanation: "Imposta trattenuta direttamente dallo stipendio, applicata a certi residenti stranieri senza permesso C." },
    { de: "Wertschriftenverzeichnis", translation: "Elenco titoli", explanation: "Inventario di conti, azioni e altri attivi finanziari al 31 dicembre." },
  ],
};
