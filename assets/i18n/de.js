window.I18N = window.I18N || {};
window.I18N.de = {
  meta: { code: "de", name: "Deutsch" },

  app: {
    title: "🇨🇭 Steuerberater · Kanton Zürich",
    exportBtn: "Zusammenfassung exportieren",
    resetBtn: "Daten löschen",
    disclaimer: "⚠️ <strong>Wichtiger Hinweis:</strong> Dieses Tool bietet eine <strong>orientierende Schätzung</strong> basierend auf den allgemeinen Abzugsregeln des Kantons Zürich und der direkten Bundessteuer. Es ersetzt weder die Beratung durch eine diplomierte Steuerberaterin bzw. einen diplomierten Steuerberater noch die offizielle Software <em>ZHprivateTax</em>, bietet jedoch möglichst viele Details und Erklärungen, damit du deine Steuererklärung mit Zuversicht einreichen kannst. Überprüfe die geltenden Zahlen und Höchstbeträge stets auf <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a>, bevor du die Steuererklärung einreichst. Die Daten werden ausschliesslich in deinem Browser gespeichert (localStorage) — es erfolgt keine Übermittlung an einen Server.",
    footer: "Inoffizielles privates Tool · Kanton Zürich · Daten lokal in deinem Browser · Keine Datenübermittlung an einen Server",
    dataYearNote: "Referenzzahlen: Steuerjahr {year}.",
  },

  tabs: {
    perfil: "1. Profil",
    ingressos: "2. Einkommen",
    professionals: "3. Berufskosten",
    assegurances: "4. Versicherungen und 3. Säule",
    familia: "5. Familie und Kinder",
    altres: "6. Weitere Abzüge",
    resum: "7. Zusammenfassung und Checkliste",
    glossary: "8. Offizielles Glossar",
  },

  wizard: {
    guidedMode: "🧭 Geführter Modus (Schritt für Schritt)",
    allTabsMode: "📑 Alle Register",
    stepOf: "Schritt {current} von {total}",
    back: "◀ Zurück",
    next: "Weiter ▶",
    finish: "✅ Fertig",
  },

  glossaryIntro: "Das offizielle Zürcher Steuerformular (Papierform oder ZHprivateTax) ist stets auf Deutsch. Diese Tabelle erläutert die wichtigsten Begriffe, damit du die richtige Ziffer im echten Formular findest.",

  sidebar: {
    totalsTitle: "Totale in Echtzeit",
    totIngressos: "Gesamtes Bruttoeinkommen",
    totDeduccions: "Geschätzte Abzüge total",
    totImposable: "Geschätztes steuerbares Einkommen",
    hint: "Vereinfachte Schätzung ohne Anwendung der tatsächlichen Steuersatzkurve. Nützlich, um Szenarien zu vergleichen (\"was wäre, wenn ich mehr in die Säule 3a einzahle?\").",
    desglosTitle: "Aufschlüsselung der Abzüge",
    empty: "Es wurden noch keine Daten eingegeben",
    despProfessionals: "Berufskosten (Pauschale + Fahrkosten + Verpflegung + Weiterbildung)",
  },

  perfil: {
    heading: "Steuerprofil",
    estatCivil: {
      label: "Zivilstand",
      solter: "Ledig",
      casat: "Verheiratet oder eingetragene Partnerschaft (gemeinsame Veranlagung)",
    },
    municipi: {
      label: "Gemeinde (für den Gemeinde-Multiplikator, Steuerfuss)",
      placeholder: "z. B. Zürich, Winterthur, Uster...",
    },
    esglesia: {
      label: "Bist du Mitglied einer anerkannten Kirche (Kirchensteuer)?",
      no: "Nein",
      si: "Ja",
    },
    numFills: { label: "Anzahl unterhaltsberechtigter Kinder" },
    dobleIngres: {
      label: "Arbeiten beide Partner? (relevant für den Zweitverdienerabzug)",
      no: "Nein / nicht anwendbar",
      si: "Ja",
    },
    hint: "Diese Angaben bestimmen, welche Abzüge und Schwellenwerte in den folgenden Registerkarten für dich gelten.",
    info: [
      {
        h: "Wer muss in Zürich eine Steuererklärung einreichen?",
        p: "Wer am 31. Dezember im Kanton Zürich Wohnsitz hat oder im Laufe des Jahres dort gearbeitet oder Liegenschaften besessen hat, muss eine Steuererklärung einreichen. Wenn du erst kürzlich mit einer B-Bewilligung in die Schweiz gekommen bist und der Quellensteuer unterliegst, entfällt in vielen Fällen die ordentliche Steuererklärung — überschreitest du jedoch eine bestimmte Einkommensschwelle (in der Regel CHF 120'000/Jahr) oder besitzt du Vermögen bzw. Liegenschaften, musst du trotzdem eine Steuererklärung einreichen."
      },
      {
        h: "Frist und Fristverlängerung",
        p: "Die ordentliche Frist ist der 31. März des Folgejahres. Zürich erlaubt es, über das Portal ZHservices kostenlos und automatisch eine Fristverlängerung bis Ende September/November zu beantragen (online, ohne Begründung). Eine verspätete Einreichung ohne Fristverlängerung kann eine Mahnung und bei wiederholten Verstössen eine Busse zur Folge haben."
      },
      {
        h: "Gemeinsame vs. getrennte Veranlagung",
        p: "Ehepaare und eingetragene Partnerschaften reichen in der Schweiz stets eine einzige gemeinsame Steuererklärung ein (eine getrennte Veranlagung wie in anderen Ländern gibt es nicht). Die Einkommen und Abzüge beider Partner werden zusammengerechnet; deshalb fragt dich dieses Tool gegebenenfalls auch nach dem Lohn des Ehepartners bzw. der Ehepartnerin."
      },
      {
        h: "Kirchensteuer",
        p: "Bist du offiziell als Mitglied der Reformierten, der Römisch-katholischen oder der Christkatholischen Kirche eingetragen, zahlst du eine zusätzliche Kirchensteuer (in der Regel 10-12% der Kantonssteuer). Du kannst jederzeit beim Zivilstandsamt deiner Wohngemeinde den Kirchenaustritt erklären; die steuerliche Wirkung tritt in der Regel erst ab dem Folgejahr ein."
      },
    ],
  },

  ingressos: {
    heading: "Jährliches Bruttoeinkommen",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Jährlicher Bruttolohn (steuerpflichtige Person) — Ziffer Lohn im Lohnausweis" },
    salariBrutConjuge: { label: "Jährlicher Bruttolohn (Ehepartner/in, bei gemeinsamer Veranlagung)" },
    altresIngressos: { label: "Übrige Einkünfte (Mietzinse, Dividenden, Sonstiges)" },
    hint: "Verwende die Zahlen aus deinem Lohnausweis, den dir der Arbeitgeber ausstellt. Hast du mehrere Arbeitsstellen, zähle die Beträge hier zusammen.",
    info: [
      {
        h: "Dein Lohnausweis Ziffer für Ziffer",
        list: [
          "Ziffer 1: Gesamter Bruttolohn — die Hauptzahl, die du hier eingeben musst.",
          "Ziffer 2.1-2.3: Bonus, Provisionen, Gewinnbeteiligungen — zum Bruttolohn dazuzählen.",
          "Ziffer 3: unregelmässige Leistungen (Abgangsentschädigungen, Mitarbeiteroptionen) — ebenfalls steuerbar.",
          "Ziffer 7: Geschäftsauto zur privaten Nutzung — wird als Naturallohn dazugerechnet (0,9%/Monat des Kaufpreises).",
          "Ziffer 13.1.1/13.1.2: Spesen und Weiterbildungskosten, die bereits vom Arbeitgeber übernommen wurden — dürfen in der Regel NICHT nochmals abgezogen werden (Doppelabzug auf Registerkarte 3 vermeiden).",
        ]
      },
      {
        h: "Mehrere Arbeitsstellen oder Nebenerwerb",
        p: "Hast du mehr als einen Arbeitgeber, zähle alle Bruttolöhne aus den entsprechenden Lohnausweisen zusammen. Auch Nebenerwerb ist voll steuerbar; auf Bundesebene besteht ein kleiner Zusatzabzug für Nebenerwerbskosten, sofern dieser nicht sehr bedeutend ist."
      },
      {
        h: "Sozialleistungen: was steuerbar ist und was nicht",
        p: "Arbeitslosenentschädigung (ALV), Unfall-/Krankentaggelder (SUVA, IV) und Renten (AHV/IV/2. Säule) sind als Einkommen steuerbar. Kinder- und Ausbildungszulagen sind ebenfalls steuerbar. Ergänzungsleistungen und bestimmte Genugtuungszahlungen sind hingegen NICHT steuerbar."
      },
    ],
  },

  professionals: {
    heading: "Berufskosten",
    transport: {
      legend: "🚋 Fahrkosten",
      costTransportPublic: { label: "Jährliche Kosten des Abonnements für den öffentlichen Verkehr (SBB/ZVV/etc.)" },
      usaCotxe: { label: "Benutzt du das Privatauto, weil KEIN zumutbares öffentliches Verkehrsmittel vorhanden ist?", no: "Nein", si: "Ja" },
      kmAny: { label: "Gefahrene Kilometer (Hin- und Rückweg) x Arbeitstage pro Jahr", placeholder: "km/Jahr" },
      hint: "Auf Bundesebene sind die Fahrkosten bis zu einem jährlichen Höchstbetrag abziehbar (siehe Zusammenfassung). Auf kantonaler Ebene ZH kann der Höchstbetrag abweichen.",
    },
    dietes: {
      legend: "🍽️ Verpflegungsmehrkosten",
      diesMenjarFora: { label: "Arbeitstage pro Jahr, an denen du auswärts isst, ohne verbilligte Kantine", placeholder: "Tage/Jahr" },
      teCantina: { label: "Bietet dein Arbeitgeber eine Kantine oder einen Verpflegungszuschuss?", no: "Nein", si: "Ja (Abzug wird halbiert)" },
      hint: "Es gilt ein fixer Betrag pro Tag. Bei verbilligter Kantine wird der Tagesabzug halbiert.",
    },
    formacio: {
      legend: "🎓 Weiterbildung und weitere Berufskosten",
      formacio: { label: "Kosten für berufsbezogene Weiterbildung (Kurse, Unterlagen)" },
      altresProfessionals: { label: "Weitere effektive Berufsauslagen (Arbeitskleidung, Werkzeug, Arbeitszimmer zu Hause...) — nur wenn sie die Pauschale übersteigen" },
      hint: "Standardmässig wird ein fixer Pauschalabzug auf den Bruttolohn angewendet. Effektive Auslagen lohnt es sich nur zu deklarieren, wenn sie diese Pauschale übersteigen.",
    },
    info: [
      {
        h: "Pauschalabzug oder effektive Auslagen: was wählen?",
        p: "Zürich wendet automatisch 3% des Nettolohns (mindestens CHF 2'000, höchstens CHF 4'000) als Pauschalabzug an, um kleinere Berufsauslagen (Kleidung, Telefon, kleines Material) ohne Belege abzudecken. Effektive Auslagen (mit Belegen) zu deklarieren, lohnt sich nur, wenn deren Total diesen Pauschalbetrag klar übersteigt — andernfalls verschwendest du nur Zeit, ohne etwas zu gewinnen."
      },
      {
        h: "Wann gilt der öffentliche Verkehr als \"nicht zumutbar\"?",
        p: "Das Steueramt des Kantons Zürich akzeptiert das Privatauto als abziehbare Auslage in der Regel nur, wenn der öffentliche Verkehr täglich (Hin- und Rückweg zusammen) mehr als eine Stunde zusätzliche Fahrzeit bedeutet, oder wenn keine zumutbare Verbindung zu den Arbeitszeiten besteht (Nachtschichten, schlecht erschlossene ländliche Gebiete). Bevorzugst du das Auto lediglich aus Bequemlichkeit, kann das Steueramt den Abzug verweigern und dich auf die Kosten des günstigsten verfügbaren ÖV-Abonnements beschränken."
      },
      {
        h: "Arbeitszimmer zu Hause (Home Office)",
        p: "Stellt dir dein Arbeitgeber keinen Arbeitsplatz zur Verfügung und arbeitest du regelmässig von zu Hause aus, kannst du einen anteiligen Teil der Miete bzw. des Mietwerts, der Heizkosten und des Stroms für das ausschliesslich als Arbeitszimmer genutzte Zimmer abziehen. Dies muss mit einer Bestätigung des Arbeitgebers belegt werden können, dass kein fester Arbeitsplatz im Büro besteht; dieser Abzug wird vom Steueramt genau geprüft."
      },
      {
        h: "Zahlenbeispiel",
        p: "Bruttolohn CHF 90'000 → Pauschalabzug = 3% = CHF 2'700 (innerhalb des Bereichs 2'000-4'000). Hast du zusätzlich ein ZVV-Abonnement für CHF 2'200/Jahr und isst an 220 Tagen auswärts ohne Kantine (220 × CHF 15 = CHF 3'300, gedeckelt auf CHF 3'200/Jahr), betragen die gesamten Berufskosten CHF 2'700 + 2'200 + 3'200 = CHF 8'100."
      },
    ],
  },

  assegurances: {
    heading: "Versicherungen und Vorsorge (Säule 3a)",
    tePensionskasse: { label: "Bist du über die Arbeit einer Pensionskasse (2. Säule) angeschlossen?", si: "Ja", no: "Nein (Selbständigerwerbende ohne 2. Säule)" },
    pilar3a: { label: "Jährliche Einzahlung in die Säule 3a (Konto oder gebundene Vorsorgeversicherung)" },
    einkaufPK: { label: "Freiwilliger Einkauf in die Pensionskasse in diesem Jahr" },
    primaSalut: { label: "Jährliche Prämien der Kranken- und Unfallversicherung (KVG) — steuerpflichtige Person" },
    primaVida: { label: "Prämien der Lebensversicherung / weitere abziehbare Privatversicherungen" },
    interessosEstalvi: { label: "Zinserträge aus Ersparnissen (Sparkonto usw.)" },
    hint: "Die Säule 3a ist einer der wirkungsvollsten Abzüge. Kranken-/Lebensversicherungsprämien sind bis zu einem fixen Höchstbetrag abziehbar.",
    info: [
      {
        h: "3a-Konto oder gebundene 3a-Versicherung",
        p: "Ein 3a-Bankkonto bietet volle Flexibilität (du kannst jedes Jahr den gewünschten Betrag bis zum Maximum einzahlen und zwischen reinem Sparen oder Fondssparen wählen). Eine gebundene Vorsorgeversicherung (3a mit Lebensversicherung) verpflichtet dich, während Jahren fixe Prämien zu zahlen, und sieht bei vorzeitiger Auflösung erhebliche Nachteile vor — sie empfiehlt sich in der Regel nur, wenn du einen echten Lebens-/Invaliditätsschutz benötigst, nicht nur zum Steuernsparen."
      },
      {
        h: "Frist: 31. Dezember",
        p: "Die Einzahlung in die Säule 3a muss (als beim Bank- bzw. Versicherungsinstitut eingegangene Überweisung) bis zum 31. Dezember des betreffenden Steuerjahres erfolgen. Eine rückwirkende Einzahlung im Januar des Folgejahres ist nicht möglich."
      },
      {
        h: "Einkauf in die Pensionskasse und die 3-Jahres-Regel",
        p: "Hattest du Beitragslücken (Jahre ohne Erwerbstätigkeit, Zuzug aus dem Ausland, Lohnerhöhung), kannst du einen freiwilligen Einkauf in deine Pensionskasse tätigen, um deine Vorsorgeleistung aufzustocken. Dieser Einkauf ist im Jahr der Einzahlung zu 100% abziehbar. Achtung: Beziehst du innerhalb von 3 Jahren nach einem Einkauf Kapital (nicht Rente) aus der Pensionskasse, kann das Steueramt den Steuerabzug für diesen Einkauf rückwirkend streichen (3-Jahres-Regel / Sperrfrist)."
      },
      {
        h: "Strategie: die Progression glätten",
        p: "Da die Schweizer Einkommenssteuer progressiv ausgestaltet ist, ist es oft effizienter, einen grossen Einkauf auf mehrere kleinere Einzahlungen über mehrere Jahre zu verteilen (statt auf einmal), damit ein grosser Abzug in einem einzigen Jahr nicht in einer tiefen Progressionsstufe \"verpufft\", während du in anderen Jahren höhere Grenzsteuersätze zahlst."
      },
    ],
  },

  familia: {
    heading: "Familie und Kinder",
    despesesGuarderia: { label: "Kosten für Kinderkrippe / Tagesbetreuung für Kinder unter 14 Jahren, während du arbeitest oder studierst" },
    pensioAlimentaria: { label: "Bezahlte Unterhaltsbeiträge (an den anderen Elternteil)" },
    hint: "Der Kinderabzug und der persönliche Abzug werden automatisch entsprechend der Anzahl Kinder und dem auf Registerkarte 1 angegebenen Zivilstand berücksichtigt.",
    chfAnyPlaceholder: "CHF/Jahr",
    info: [
      {
        h: "Voraussetzungen für den Abzug der Kinderbetreuungskosten",
        p: "Erforderlich ist eine offizielle Rechnung des Anbieters (Kinderkrippe, deklarierte Tagesmutter mit Vertrag, Tagesferienlager) mit Angabe der UID/MWST-Nummer. Die Betreuung muss notwendig sein, damit die Eltern arbeiten, studieren können oder wegen ausgewiesener Erwerbsunfähigkeit/Krankheit — die Betreuung des Kindes während der Arbeitslosigkeit qualifiziert in der Regel nicht. Grosseltern, die unentgeltlich betreuen, begründen keinen Abzug (keine Rechnung); zahlst du ihnen formell und deklarieren sie dies als Einkommen, kann dies hingegen qualifizieren."
      },
      {
        h: "Unterhaltsbeiträge: wer deklariert was?",
        p: "Wer die Unterhaltsbeiträge bezahlt, kann sie vollständig abziehen; wer sie erhält, muss sie als steuerbares Einkommen deklarieren. Dies gilt sowohl für Unterhaltsbeiträge an den früheren Ehepartner bzw. die frühere Ehepartnerin als auch für Kinderalimente bis zur Volljährigkeit (oder, je nach Vereinbarung, bis zum Abschluss der Ausbildung)."
      },
      {
        h: "Gemeinsame Obhut und Kinderabzug",
        p: "Besteht eine gleichmässig geteilte Obhut und werden keine Unterhaltsbeiträge zwischen den Elternteilen bezahlt, teilt Zürich den Kinderabzug in der Regel hälftig zwischen beiden Elternteilen auf. Erhält ein Elternteil Unterhaltsbeiträge vom anderen, steht der gesamte Abzug in der Regel demjenigen Elternteil zu, bei dem das Kind hauptsächlich lebt."
      },
    ],
  },

  altres: {
    heading: "Weitere Abzüge",
    donacions: { label: "Zuwendungen an gemeinnützige oder öffentliche Zwecke verfolgende, anerkannte Institutionen" },
    interessosDeute: { label: "Bezahlte Schuldzinsen (private Hypothek, Darlehen, Kreditkarten)" },
    despesesMediques: { label: "Nicht von der Versicherung gedeckte Arzt- und Zahnarztkosten (eigene, nicht rückerstattete)" },
    hint: "Krankheitskosten sind nur für den Teil abziehbar, der einen Prozentsatz deines Nettoeinkommens übersteigt. Zuwendungen müssen einen jährlichen Mindestbetrag übersteigen.",
    info: [
      {
        h: "Zuwendungen: Anforderungen an die Bestätigung",
        p: "Die empfangende Institution muss für gemeinnützige oder im öffentlichen Interesse liegende Zwecke steuerbefreit sein (die meisten Schweizer NGOs und Stiftungen weisen dies auf ihrer jährlichen Bestätigung aus). Bewahre die jährliche Spendenbestätigung, die diese Institutionen im Januar versenden, immer auf — es ist der Beleg, den das Steueramt verlangt."
      },
      {
        h: "Welche Schuldzinsen zählen?",
        p: "Zinsen aus privater Hypothek, Privatkrediten, Kreditkarten und Kontoüberzügen sind abziehbar (innerhalb der Grenze des Vermögensertrags plus CHF 50'000). Amortisationszahlungen auf das Kapital sind NICHT abziehbar, nur der Zinsanteil — prüfe den Jahreskontoauszug der Bank, der beide Positionen bereits ausweist."
      },
      {
        h: "Krankheitskosten: die versteckte Franchise",
        p: "Abziehbar ist nur der Teil der nicht rückerstatteten Arzt-/Zahnarztkosten, der 5% deines Nettoeinkommens übersteigt. Bei einem Nettoeinkommen von CHF 80'000 zählen beispielsweise die ersten CHF 4'000 an Krankheitskosten nicht — nur der übersteigende Betrag. Bewahre alle Belege auf (Zahnarzt, Brille, nicht gedeckte Physiotherapie) und zähle sie zusammen, um diese Schwelle leichter zu übersteigen."
      },
    ],
  },

  resum: {
    heading: "Zusammenfassung und Dokumenten-Checkliste",
    xifresClauTitle: "Schlüsselzahlen (Steuerjahr {year})",
    conceptCol: "Position",
    importCol: "Betrag",
    ingressosBrutTotal: "Gesamtes Bruttoeinkommen",
    totalDeduccionsEst: "Geschätzte Abzüge total",
    ingresImposableEst: "Geschätztes steuerbares Einkommen",
    avisPilar3a: "⚠️ Du hast {aportat} in die Säule 3a eingezahlt, doch der für dich maximal abziehbare Betrag ist {max}. Der übersteigende Betrag von {exces} ist nicht abziehbar.",
    avisTransportZhCap: "⚠️ Auf Bundesebene sind Fahrkosten nur bis {fedMax}/Jahr abziehbar; auf kantonaler Ebene ZH liegt der Höchstbetrag bei {zhMax}/Jahr.",
    avisTransportZhReal: "⚠️ Auf Bundesebene sind Fahrkosten nur bis {fedMax}/Jahr abziehbar; auf kantonaler Ebene ZH kannst du die effektiven Kosten ({real}) bis zu einem Höchstbetrag von {zhMax}/Jahr abziehen.",
    avisFormacio: "⚠️ Weiterbildungskosten sind nur bis {max} pro Person abzugsfähig (Quelle: offizielles Formular). Der übersteigende Betrag von {exces} ist nicht abzugsfähig.",
    detallTitle: "Detail nach Formularziffer (orientierend)",
    casellaCol: "Übliche Ziffer",
    importDeclararCol: "Zu deklarierender Betrag",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 10.1)",
      fahrkosten: "Fahrkosten (Ziffer 10.1)",
      verpflegung: "Verpflegungsmehrkosten (Ziffer 10.1)",
      weiterbildung: "Weiterbildungskosten (Ziffer 10.4)",
      saule3a: "Säule 3a (Ziffer 11.1)",
      versicherung: "Versicherungsprämien (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten (Ziffer 14)",
      kinderabzug: "Kinderabzug ({n} Kind/er) (Ziffer 21.1)",
      spenden: "Spenden (Ziffer 18)",
      schuldzinsen: "Schuldzinsen (Ziffer 13)",
      krankheit: "Krankheitskosten (Ziffer 17)",
    },
    checklistTitle: "📋 Checkliste der vorzubereitenden Dokumente",
    checklist: {
      lohnausweis: "Lohnausweis von jeder Arbeitsstelle",
      abonament: "Rechnung/Beleg des ÖV-Abonnements",
      dietes: "Nachweis, dass keine verbilligte Kantine besteht (falls zutreffend)",
      formacio: "Belege für Kurse/Weiterbildung",
      pilar3a: "Jahresausweis des Säule-3a-Kontos/der Police",
      einkauf: "Bestätigung des Einkaufs in die Pensionskasse",
      assegurances: "Policen und Belege der Kranken-/Lebensversicherung",
      guarderia: "Rechnungen der Kinderkrippe/Tagesmutter mit UID-Nummer des Anbieters",
      pensio: "Vereinbarung oder Urteil betreffend Unterhaltsbeiträge",
      donacions: "Belege/Bestätigungen von Zuwendungen",
      interessos: "Zinsausweise zu Schulden (Hypothek, Darlehen)",
      mediques: "Nicht von der Versicherung rückerstattete Arztrechnungen",
      comptes: "Kontoauszüge sämtlicher Bankkonten per 31.12.",
      titols: "Verzeichnis der Wertschriften/Aktien (Wertschriftenverzeichnis), falls vorhanden",
    },
    howToFileTitle: "📝 So reichst du die Steuererklärung ein, Schritt für Schritt",
    howToFile: [
      "1. Lade die kostenlose offizielle Software ZHprivateTax von zh.ch herunter oder nutze das Online-Portal ZHservices (eTax).",
      "2. Erfasse die Angaben aus deinem Lohnausweis und den übrigen Dokumenten der Checkliste Ziffer für Ziffer (die obige Tabelle dient dir als Anleitung).",
      "3. Das Programm berechnet automatisch die Kantons- und die Bundessteuer — prüfe die Zusammenfassung vor dem Absenden.",
      "4. Reiche die Steuererklärung bis zum 31. März ein, oder beantrage bei ZHservices die kostenlose Fristverlängerung, falls du mehr Zeit benötigst.",
      "5. Bewahre eine unterzeichnete Kopie (digital oder Papier) sowie alle Belege während mindestens 10 Jahren auf, falls das Steueramt danach fragt.",
    ],
    export: {
      title: "Orientierende Steuerzusammenfassung — Kanton Zürich — Steuerjahr {year}",
      generated: "Erstellt",
      estatCivil: "Zivilstand",
      municipi: "Gemeinde",
      fills: "Unterhaltsberechtigte Kinder",
      ingressosBrutTotal: "Gesamtes Bruttoeinkommen",
      totalDeduccions: "Geschätzte Abzüge total",
      ingresImposable: "Geschätztes steuerbares Einkommen",
      detailHeader: "--- Detail der Abzüge ---",
      pauschal: "Berufsauslagen (Pauschale)",
      transport: "Fahrkosten",
      dietes: "Verpflegungsmehrkosten",
      formacio: "Weiterbildung",
      saule3a: "Säule 3a",
      einkauf: "Einkauf in die Pensionskasse",
      assegurances: "Versicherungen",
      guarderia: "Kinderbetreuung",
      pensio: "Unterhaltsbeiträge",
      kinderabzug: "Kinderabzug",
      donacions: "Zuwendungen",
      interessos: "Schuldzinsen",
      mediques: "Krankheitskosten",
      footer: "Dies ist eine orientierende Schätzung. Überprüfe die Zahlen auf dem offiziellen Portal zh.ch, bevor du die Steuererklärung einreichst.",
    },
    confirmReset: "Möchtest du wirklich alle eingegebenen Daten löschen?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Jahreslohnbescheinigung", explanation: "Dokument, das dir der Arbeitgeber jährlich mit allen Einkünften und Abzügen an der Quelle ausstellt. Es ist die Grundlage der gesamten Steuererklärung." },
    { de: "Steuererklärung", translation: "Steuerformular", explanation: "Das jährliche Formular (Papierform oder ZHprivateTax), das du beim Steueramt einreichen musst." },
    { de: "Berufskosten", translation: "Arbeitsbedingte Auslagen", explanation: "Gesamtheit der arbeitsbezogenen Auslagen, die abziehbar sind: Fahrkosten, Verpflegung, Weiterbildung usw." },
    { de: "Pauschalabzug", translation: "Fixer Abzugsbetrag", explanation: "Fixer Betrag (3% des Lohns, zwischen CHF 2'000 und 4'000), der ohne Belege abgezogen wird." },
    { de: "Fahrkosten", translation: "Auslagen für den Arbeitsweg", explanation: "Kosten des täglichen Wegs zwischen Wohnort und Arbeitsplatz, abziehbar mit Höchstbeträgen." },
    { de: "Verpflegungsmehrkosten", translation: "Zusatzkosten für auswärtige Verpflegung", explanation: "Fixer Tagesbetrag, wenn ohne verbilligte Kantine auswärts gegessen wird." },
    { de: "Weiterbildungskosten", translation: "Kosten für berufliche Weiterbildung", explanation: "Kurse und Ausbildung im Zusammenhang mit deinem aktuellen oder künftigen Beruf." },
    { de: "Säule 3a", translation: "Gebundene private Vorsorge", explanation: "Steuerlich begünstigte private Vorsorge; die jährliche Einzahlung ist bis zum gesetzlichen Höchstbetrag zu 100% abziehbar." },
    { de: "Pensionskasse", translation: "Berufliche Vorsorgeeinrichtung (2. Säule)", explanation: "Deine obligatorische berufliche Vorsorge, verwaltet durch den Arbeitgeber." },
    { de: "Einkauf", translation: "Freiwillige Zusatzeinzahlung", explanation: "Freiwillige Einzahlung in die Pensionskasse zur Deckung von Beitragslücken; abziehbar im Jahr der Einzahlung." },
    { de: "Versicherungsprämien", translation: "Prämienzahlungen", explanation: "Kranken- und Lebensversicherungsprämien, abziehbar bis zu einem fixen Jahreshöchstbetrag." },
    { de: "Kinderbetreuungskosten", translation: "Auslagen für die Kinderbetreuung", explanation: "Kosten für Kinderkrippe oder Tagesmutter, die nötig sind, damit du arbeiten oder studieren kannst." },
    { de: "Kinderabzug", translation: "Abzug pro Kind", explanation: "Fixer Betrag, der für jedes unterhaltsberechtigte Kind abgezogen wird." },
    { de: "Spenden", translation: "Zuwendungen", explanation: "Zuwendungen an anerkannte Institutionen, abziehbar oberhalb eines jährlichen Mindestbetrags." },
    { de: "Schuldzinsen", translation: "Zinsen auf Schulden", explanation: "Zinsen (nicht das Kapital) von privaten Krediten und Hypotheken." },
    { de: "Krankheitskosten", translation: "Gesundheitsauslagen", explanation: "Nicht rückerstattete Gesundheitskosten, abziehbar oberhalb einer Freigrenze." },
    { de: "Sozialabzug", translation: "Persönlicher Abzug", explanation: "Allgemeine Abzüge, die je nach Zivilstand und familiären Lasten gewährt werden." },
    { de: "Steuerfuss", translation: "Steueranteil der Gemeinde/des Kantons", explanation: "Prozentsatz, den Kanton und Gemeinde auf die einfache Steuer anwenden, um die endgültige Steuer zu berechnen." },
    { de: "Quellensteuer", translation: "Steuer direkt ab Lohn", explanation: "Steuer, die direkt vom Lohn abgezogen wird und bestimmte ausländische Personen ohne C-Bewilligung betrifft." },
    { de: "Wertschriftenverzeichnis", translation: "Vermögensaufstellung", explanation: "Verzeichnis der Konten, Aktien und weiteren Vermögenswerte per 31. Dezember." },
  ],
};
