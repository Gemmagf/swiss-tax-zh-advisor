window.I18N = window.I18N || {};
window.I18N.pl = {
  meta: { code: "pl", name: "Polski" },

  app: {
    title: "🇨🇭 Doradca podatkowy · Kanton Zurych",
    exportBtn: "Eksportuj podsumowanie",
    resetBtn: "Wyczyść dane",
    disclaimer: "⚠️ <strong>Ważna informacja:</strong> To narzędzie oferuje jedynie <strong>orientacyjne oszacowanie</strong> oparte na ogólnych zasadach odliczeń podatkowych obowiązujących w kantonie Zurych oraz w federalnym podatku bezpośrednim. Nie zastępuje porady wykwalifikowanego doradcy podatkowego ani oficjalnego oprogramowania <em>ZHprivateTax</em>, ale zawiera możliwie najwięcej szczegółów i wyjaśnień, abyś mógł/mogła złożyć swoje zeznanie podatkowe z większą pewnością. Zawsze sprawdzaj aktualne kwoty i limity na stronie <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a> przed złożeniem zeznania. Dane wprowadzane są wyłącznie w Twojej przeglądarce (localStorage) — nie są wysyłane na żaden serwer.",
    footer: "Nieoficjalne narzędzie osobiste · Kanton Zurych · Dane lokalne w Twojej przeglądarce · Brak wysyłania danych na serwer",
    dataYearNote: "Wartości referencyjne: rok podatkowy {year}.",
  },

  tabs: {
    perfil: "1. Profil",
    ingressos: "2. Dochody",
    professionals: "3. Wydatki zawodowe",
    assegurances: "4. Ubezpieczenia i 3. filar",
    familia: "5. Rodzina i dzieci",
    altres: "6. Inne odliczenia",
    resum: "7. Podsumowanie i lista kontrolna",
    glossary: "8. Oficjalny słowniczek",
  },

  wizard: {
    guidedMode: "🧭 Tryb prowadzony (krok po kroku)",
    allTabsMode: "📑 Wszystkie zakładki",
    stepOf: "Krok {current} z {total}",
    back: "◀ Wstecz",
    next: "Dalej ▶",
    finish: "✅ Gotowe",
  },

  glossaryIntro: "Oficjalny formularz podatkowy kantonu Zurych (papierowy lub ZHprivateTax) jest zawsze w języku niemieckim. Ta tabela tłumaczy kluczowe terminy, abyś mógł/mogła zlokalizować właściwe pole w prawdziwym formularzu.",

  sidebar: {
    totalsTitle: "Sumy na bieżąco",
    totIngressos: "Łączne dochody brutto",
    totDeduccions: "Suma szacowanych odliczeń",
    totImposable: "Szacowany dochód podlegający opodatkowaniu",
    hint: "Uproszczone oszacowanie, bez zastosowania rzeczywistej krzywej stawek podatkowych. Przydatne do porównywania scenariuszy (\"a co, jeśli wpłacę więcej na 3a?\").",
    desglosTitle: "Podział odliczeń",
    empty: "Nie wprowadzono jeszcze żadnych danych",
    despProfessionals: "Wydatki zawodowe (kwota ryczałtowa + transport + wyżywienie + szkolenia)",
  },

  perfil: {
    heading: "Profil podatkowy",
    estatCivil: {
      label: "Stan cywilny",
      solter: "Kawaler/panna",
      casat: "Osoba zamężna/żonaty lub zarejestrowany związek partnerski (wspólne zeznanie)",
    },
    municipi: {
      label: "Gmina (dla mnożnika gminnego, Steuerfuss)",
      placeholder: "np. Zurych, Winterthur, Uster...",
    },
    esglesia: {
      label: "Czy jesteś członkiem uznanego kościoła (Kirchensteuer)?",
      no: "Nie",
      si: "Tak",
    },
    numFills: { label: "Liczba dzieci na utrzymaniu" },
    dobleIngres: {
      label: "Czy oboje partnerzy pracują? (istotne dla Zweitverdienerabzug)",
      no: "Nie / nie dotyczy",
      si: "Tak",
    },
    hint: "Te dane określają, jakie odliczenia i progi mają zastosowanie w kolejnych zakładkach.",
    info: [
      {
        h: "Kto musi złożyć zeznanie podatkowe w Zurychu?",
        p: "Każda osoba zamieszkała w kantonie Zurych na dzień 31 grudnia, lub która pracowała/posiadała nieruchomości w kantonie w danym roku, musi złożyć zeznanie podatkowe (Steuererklärung). Jeśli dopiero przyjechałeś/aś do Szwajcarii z zezwoleniem B i podlegasz opodatkowaniu u źródła (Quellensteuer), w wielu przypadkach zeznanie nie jest wymagane — jednak jeśli przekraczasz określony próg dochodów (zwykle CHF 120'000/rok) lub posiadasz majątek/nieruchomości, będziesz musiał/a je złożyć."
      },
      {
        h: "Termin i przedłużenie",
        p: "Standardowy termin to 31 marca roku następnego. Zurych umożliwia bezpłatne i automatyczne przedłużenie terminu do końca września/listopada za pośrednictwem portalu ZHservices (online, bez konieczności podawania powodu). Spóźnione złożenie zeznania bez przedłużenia terminu może skutkować przypomnieniem o płatności, a w powtarzających się przypadkach — grzywną."
      },
      {
        h: "Zeznanie wspólne kontra osobne",
        p: "Małżeństwa i zarejestrowane związki partnerskie zawsze składają jedno wspólne zeznanie podatkowe w Szwajcarii (nie ma możliwości osobnego opodatkowania jak w innych krajach). Dochody i odliczenia obojga partnerów sumuje się; dlatego to narzędzie pyta o wynagrodzenie współmałżonka, jeśli dotyczy."
      },
      {
        h: "Podatek kościelny (Kirchensteuer)",
        p: "Jeśli jesteś oficjalnie zarejestrowany/a jako członek Kościoła Reformowanego, Katolickiego lub Katolicko-Chrześcijańskiego, zapłacisz dodatkowy podatek kościelny (zwykle 10-12% podatku kantonalnego). Możesz wystąpić z kościoła (Kirchenaustritt) w urzędzie stanu cywilnego swojej gminy w dowolnym momencie; skutek podatkowy zwykle obowiązuje od roku następnego."
      },
    ],
  },

  ingressos: {
    heading: "Roczne dochody brutto",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Roczne wynagrodzenie brutto (osoba składająca zeznanie) — pole wynagrodzenia z certyfikatu wynagrodzeń (Lohnausweis)" },
    salariBrutConjuge: { label: "Roczne wynagrodzenie brutto (współmałżonek, jeśli zeznanie wspólne)" },
    altresIngressos: { label: "Inne dochody (czynsze, dywidendy, inne)" },
    hint: "Skorzystaj z wartości z Twojego Lohnausweis (certyfikatu wynagrodzeń), który otrzymujesz od pracodawcy. Jeśli masz więcej niż jedną pracę, zsumuj je tutaj.",
    info: [
      {
        h: "Twój Lohnausweis pole po polu",
        list: [
          "Ziffer 1: łączne wynagrodzenie brutto — główna kwota, którą należy tu wprowadzić.",
          "Ziffer 2.1-2.3: premie, prowizje, udział w zyskach — należy je doliczyć do wynagrodzenia brutto.",
          "Ziffer 3: świadczenia nieregularne (odprawy, opcje na akcje) — również podlegają opodatkowaniu.",
          "Ziffer 7: samochód służbowy do użytku prywatnego — dolicza się jako dochód w naturze (0,9%/miesiąc ceny zakupu).",
          "Ziffer 13.1.1/13.1.2: wydatki reprezentacyjne i szkoleniowe już opłacone przez pracodawcę — zwykle NIE podlegają ponownemu odliczeniu (unikaj podwójnego liczenia w zakładce 3).",
        ]
      },
      {
        h: "Kilka miejsc pracy lub praca dodatkowa",
        p: "Jeśli masz więcej niż jednego pracodawcę, zsumuj wszystkie wynagrodzenia brutto z odpowiednich Lohnausweis. Praca dodatkowa (Nebenerwerb) również w pełni podlega opodatkowaniu; na poziomie federalnym istnieje niewielkie dodatkowe odliczenie za wydatki związane z pracą dodatkową, jeśli nie jest ona bardzo znacząca."
      },
      {
        h: "Świadczenia socjalne: co podlega opodatkowaniu, a co nie",
        p: "Świadczenia dla bezrobotnych (ALV), odszkodowania z tytułu wypadku/choroby (SUVA, IV) oraz renty/emerytury (AVS/AI/2. filar) PODLEGAJĄ opodatkowaniu jako dochód. Dodatki rodzinne (Kinder- und Ausbildungszulagen) również podlegają opodatkowaniu. Natomiast świadczenia uzupełniające (Ergänzungsleistungen) i niektóre odszkodowania za krzywdę moralną NIE podlegają opodatkowaniu."
      },
    ],
  },

  professionals: {
    heading: "Wydatki zawodowe (Berufskosten)",
    transport: {
      legend: "🚋 Transport (Fahrkosten)",
      costTransportPublic: { label: "Roczny koszt biletu na transport publiczny (SBB/ZVV/itp.)" },
      usaCotxe: { label: "Jeździsz prywatnym samochodem, ponieważ NIE ma rozsądnego transportu publicznego?", no: "Nie", si: "Tak" },
      kmAny: { label: "Przejechane km (w obie strony) x dni robocze w roku", placeholder: "km/rok" },
      hint: "Na poziomie federalnym koszt dojazdu podlega odliczeniu do rocznego maksimum (patrz podsumowanie). Na poziomie kantonalnym ZH limit może być inny.",
    },
    dietes: {
      legend: "🍽️ Wyżywienie poza domem (Verpflegungsmehrkosten)",
      diesMenjarFora: { label: "Dni robocze w roku, w których jesz poza domem bez dofinansowanej stołówki", placeholder: "dni/rok" },
      teCantina: { label: "Czy Twoja firma ma stołówkę lub dofinansowuje posiłki?", no: "Nie", si: "Tak (odliczenie zmniejszone o połowę)" },
      hint: "Stosuje się stałą kwotę za dzień. Jeśli masz dofinansowaną stołówkę, dzienne odliczenie jest zmniejszone o połowę.",
    },
    formacio: {
      legend: "🎓 Kształcenie ustawiczne i inne wydatki zawodowe",
      formacio: { label: "Wydatki na kształcenie ustawiczne związane z pracą (kursy, materiały)" },
      altresProfessionals: { label: "Inne rzeczywiste wydatki zawodowe (odzież robocza, narzędzia, biuro domowe...) — tylko jeśli przekraczają stały procent" },
      hint: "Domyślnie stosuje się stałe odliczenie (Pauschalabzug) od wynagrodzenia brutto. Deklarowanie rzeczywistych wydatków ma sens tylko wtedy, gdy przekraczają tę stałą kwotę.",
    },
    info: [
      {
        h: "Pauschalabzug czy rzeczywiste wydatki: co wybrać?",
        p: "Zurych automatycznie stosuje 3% wynagrodzenia netto (minimum CHF 2'000, maksimum CHF 4'000) jako stałe odliczenie pokrywające drobne wydatki zawodowe (odzież, telefon, drobny sprzęt) bez konieczności okazywania dowodów. Deklarowanie rzeczywistych wydatków (z prawdziwymi rachunkami) ma sens tylko wtedy, gdy ich suma wyraźnie przekracza tę stałą kwotę — w przeciwnym razie tracisz czas bez żadnej korzyści."
      },
      {
        h: "Kiedy transport publiczny uznaje się za \"nierozsądny\"?",
        p: "Urząd skarbowy Zurychu zazwyczaj akceptuje prywatny samochód jako odliczalny wydatek tylko wtedy, gdy transport publiczny wiąże się z dodatkową godziną podróży dziennie (w obie strony) w porównaniu z samochodem, lub gdy nie ma rozsądnego połączenia dostosowanego do godzin pracy (praca zmianowa nocna, słabo skomunikowane obszary wiejskie). Jeśli po prostu wolisz samochód dla wygody, urząd skarbowy może odrzucić odliczenie i ograniczyć je do kosztu równoważnego najtańszemu dostępnemu biletowi transportu publicznego."
      },
      {
        h: "Biuro domowe (Home Office)",
        p: "Jeśli Twój pracodawca nie zapewnia Ci miejsca pracy, a Ty regularnie pracujesz z domu, możesz odliczyć proporcjonalną część czynszu/wartości najmu, ogrzewania i energii elektrycznej przypadającą na pomieszczenie wykorzystywane wyłącznie jako biuro. Musisz to udokumentować pismem od pracodawcy potwierdzającym brak stałego miejsca pracy w biurze; to odliczenie jest szczegółowo weryfikowane przez urząd skarbowy."
      },
      {
        h: "Przykład liczbowy",
        p: "Wynagrodzenie brutto CHF 90'000 → Pauschalabzug = 3% = CHF 2'700 (w przedziale 2'000-4'000). Jeśli dodatkowo masz bilet ZVV o wartości CHF 2'200/rok i jesz poza domem 220 dni bez stołówki (220 × CHF 15 = CHF 3'300, ale ograniczone do CHF 3'200/rok), łączna kwota wydatków zawodowych wyniesie CHF 2'700 + 2'200 + 3'200 = CHF 8'100."
      },
    ],
  },

  assegurances: {
    heading: "Ubezpieczenia i zabezpieczenie emerytalne (Filar 3a)",
    tePensionskasse: { label: "Czy jesteś objęty/a funduszem emerytalnym (Pensionskasse / 2. filar) poprzez pracę?", si: "Tak", no: "Nie (osoba samozatrudniona bez 2. filaru)" },
    pilar3a: { label: "Roczna wpłata na Filar 3a (rachunek lub powiązane ubezpieczenie emerytalne)" },
    einkaufPK: { label: "Dobrowolny wykup (Einkauf) w kasie emerytalnej w tym roku" },
    primaSalut: { label: "Roczne składki ubezpieczenia zdrowotnego i wypadkowego (KVG/LAMal) — osoba składająca zeznanie" },
    primaVida: { label: "Składki ubezpieczenia na życie / inne prywatne ubezpieczenia podlegające odliczeniu" },
    interessosEstalvi: { label: "Odsetki wygenerowane od oszczędności (konto oszczędnościowe itp.)" },
    hint: "Filar 3a to jedno z najsilniejszych odliczeń. Składki zdrowotne/życiowe odlicza się do stałego pułapu.",
    info: [
      {
        h: "Rachunek 3a a powiązane ubezpieczenie 3a",
        p: "Rachunek bankowy 3a oferuje pełną elastyczność (możesz wpłacać dowolną kwotę każdego roku do maksimum, wybierając między czystym oszczędzaniem a oszczędzaniem z inwestycją w fundusze). Polisa powiązanego ubezpieczenia emerytalnego (3a z ubezpieczeniem na życie) zobowiązuje Cię do płacenia stałych składek przez lata i mocno penalizuje wcześniejsze anulowanie — zwykle jest polecana tylko wtedy, gdy potrzebujesz rzeczywistej ochrony na życie/inwalidztwo, a nie tylko oszczędności podatkowych."
      },
      {
        h: "Termin: 31 grudnia",
        p: "Wpłata na 3a musi zostać dokonana (przelew otrzymany przez bank/ubezpieczyciela) przed 31 grudnia danego roku podatkowego. Nie można jej dokonać z mocą wsteczną w styczniu roku następnego."
      },
      {
        h: "Wykup kasy emerytalnej (Einkauf) i zasada 3 lat",
        p: "Jeśli miałeś/aś luki w składkach (lata bez pracy, przyjazd z zagranicy, podwyżka wynagrodzenia), możesz dokonać dobrowolnej wpłaty (Einkauf) do swojej Pensionskasse, aby wyrównać docelowe świadczenie. Ta wpłata w 100% podlega odliczeniu w roku, w którym jej dokonujesz. Uwaga: jeśli wypłacisz kapitał (nie rentę) z kasy emerytalnej w ciągu 3 lat po Einkauf, urząd skarbowy może z mocą wsteczną unieważnić odliczenie podatkowe tego wykupu (zasada 3 lat / Sperrfrist)."
      },
      {
        h: "Strategia: wygładzanie progresji",
        p: "Ponieważ szwajcarski podatek jest progresywny, często bardziej efektywne jest rozłożenie dużego Einkauf na kilka mniejszych wpłat w ciągu kilku lat (zamiast jednej dużej), aby uniknąć sytuacji, w której duże odliczenie w jednym roku \"marnuje się\" w niskim progu, podczas gdy w innych latach płacisz wyższe stawki krańcowe."
      },
    ],
  },

  familia: {
    heading: "Rodzina i dzieci",
    despesesGuarderia: { label: "Wydatki na żłobek/opiekunkę dla dzieci poniżej 14 roku życia, w czasie gdy pracujesz lub studiujesz" },
    pensioAlimentaria: { label: "Zapłacone alimenty (na rzecz drugiego rodzica)" },
    hint: "Odliczenie na dziecko (Kinderabzug) oraz odliczenie osobiste są stosowane automatycznie na podstawie liczby dzieci i stanu cywilnego wskazanych w zakładce 1.",
    chfAnyPlaceholder: "CHF/rok",
    info: [
      {
        h: "Warunki odliczenia kosztów opieki nad dziećmi",
        p: "Wymagana jest oficjalna faktura od dostawcy usługi (żłobek, opiekunka z zadeklarowaną umową, kolonie dzienne) wskazująca jego numer UID/VAT. Opieka musi być konieczna, aby rodzice mogli pracować, studiować, lub z powodu udokumentowanej niezdolności do pracy/choroby — opieka nad dzieckiem w czasie bezrobocia zwykle się nie kwalifikuje. Dziadkowie opiekujący się dziećmi bezpłatnie nie generują odliczenia (brak faktury); jeśli płacisz im formalnie, a oni zadeklarują to jako dochód, może to się kwalifikować."
      },
      {
        h: "Alimenty: kto je deklaruje?",
        p: "Osoba płacąca odlicza je w całości; osoba otrzymująca musi zadeklarować je jako dochód podlegający opodatkowaniu. Dotyczy to zarówno alimentów na byłego małżonka, jak i na dziecko do pełnoletności (lub do zakończenia studiów, w niektórych przypadkach, jeśli tak ustala umowa)."
      },
      {
        h: "Opieka naprzemienna a Kinderabzug",
        p: "Jeśli opieka jest podzielona po równo, a między rodzicami nie ma alimentów, Zurych zwykle dzieli odliczenie na dziecko (Kinderabzug) po równo między oboje rodziców. Jeśli jeden rodzic otrzymuje alimenty od drugiego, zwykle to rodzic, z którym dziecko mieszka głównie, zachowuje całe odliczenie."
      },
    ],
  },

  altres: {
    heading: "Inne odliczenia",
    donacions: { label: "Darowizny na rzecz uznanych organizacji użyteczności publicznej/charytatywnych" },
    interessosDeute: { label: "Zapłacone odsetki od zadłużenia prywatnego (kredyt hipoteczny prywatny, pożyczki, karty kredytowe)" },
    despesesMediques: { label: "Wydatki medyczne i stomatologiczne niepokryte przez ubezpieczenie (własne, niezwrócone)" },
    hint: "Wydatki medyczne podlegają odliczeniu tylko w części przekraczającej określony procent Twojego dochodu netto. Darowizny muszą przekroczyć minimalną roczną kwotę.",
    info: [
      {
        h: "Darowizny: wymagania dotyczące potwierdzenia",
        p: "Organizacja otrzymująca darowiznę musi mieć uznane zwolnienie podatkowe ze względu na cel publiczny lub użyteczność publiczną (większość szwajcarskich organizacji pozarządowych i fundacji wskazuje to w swoim potwierdzeniu/rocznym zaświadczeniu). Zawsze zachowuj roczne potwierdzenie darowizn, które te organizacje wysyłają w styczniu — to dokument, którego będą od Ciebie wymagać."
      },
      {
        h: "Jakie odsetki od zadłużenia się liczą?",
        p: "Odsetki od prywatnego kredytu hipotecznego, pożyczek osobistych, kart kredytowych i debetów bankowych podlegają odliczeniu (w granicach dochodu z aktywów + CHF 50'000). Raty spłaty kapitału NIE podlegają odliczeniu, tylko część odsetkowa — sprawdź roczne zaświadczenie z banku, które już rozdziela te dwie pozycje."
      },
      {
        h: "Wydatki medyczne: ukryta franszyza",
        p: "Odlicza się tylko część niezwróconych wydatków medycznych/stomatologicznych przekraczającą 5% Twojego dochodu netto. Na przykład przy dochodzie netto CHF 80'000 pierwsze CHF 4'000 wydatków medycznych się nie liczy — tylko nadwyżka. Zachowaj wszystkie rachunki (dentysta, okulary, fizjoterapia niepokryta przez ubezpieczenie) i zsumuj je wszystkie razem, aby łatwiej przekroczyć ten próg."
      },
    ],
  },

  resum: {
    heading: "Podsumowanie i lista kontrolna dokumentów",
    xifresClauTitle: "Kluczowe liczby (rok podatkowy {year})",
    conceptCol: "Pozycja",
    importCol: "Kwota",
    ingressosBrutTotal: "Łączne dochody brutto",
    totalDeduccionsEst: "Suma szacowanych odliczeń",
    ingresImposableEst: "Szacowany dochód podlegający opodatkowaniu",
    avisPilar3a: "⚠️ Wprowadzono {aportat} na Filar 3a, ale maksymalna kwota podlegająca odliczeniu w Twoim przypadku to {max}. Nadwyżka {exces} nie podlega odliczeniu.",
    avisTransportZhCap: "⚠️ Na poziomie federalnym koszt transportu podlega odliczeniu tylko do {fedMax}/rok; na poziomie kantonalnym ZH pułap wynosi {zhMax}/rok.",
    avisTransportZhReal: "⚠️ Na poziomie federalnym koszt transportu podlega odliczeniu tylko do {fedMax}/rok; na poziomie kantonalnym ZH możesz odliczyć rzeczywisty koszt ({real}) do pułapu {zhMax}/rok.",
    avisFormacio: "⚠️ Koszty kształcenia ustawicznego podlegają odliczeniu tylko do {max} na osobę (źródło: formularz urzędowy). Nadwyżka w wysokości {exces} nie podlega odliczeniu.",
    detallTitle: "Szczegóły według pola formularza (orientacyjnie)",
    casellaCol: "Typowe pole (Ziffer)",
    importDeclararCol: "Kwota do zadeklarowania",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 11.1)",
      fahrkosten: "Fahrkosten — transport (Ziffer 11.1)",
      verpflegung: "Verpflegungsmehrkosten — wyżywienie (Ziffer 11.1)",
      weiterbildung: "Weiterbildungskosten — kształcenie (Ziffer 16.2)",
      saule3a: "Säule 3a (Ziffer 14.1)",
      versicherung: "Versicherungsprämien — ubezpieczenia (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten — opieka nad dziećmi (Ziffer 16.6)",
      kinderabzug: "Kinderabzug ({n} dziecko/dzieci) (Ziffer 24.1)",
      spenden: "Spenden — darowizny (Ziffer 22.2)",
      schuldzinsen: "Schuldzinsen — odsetki od zadłużenia (Ziffer 12)",
      krankheit: "Krankheitskosten — wydatki medyczne (Ziffer 22.1)",
    },
    checklistTitle: "📋 Lista kontrolna dokumentów do przygotowania",
    checklist: {
      lohnausweis: "Certyfikat wynagrodzeń (Lohnausweis) z każdej pracy",
      abonament: "Faktura/potwierdzenie biletu na transport publiczny",
      dietes: "Potwierdzenie braku dofinansowanej stołówki (jeśli dotyczy)",
      formacio: "Rachunki za kursy/kształcenie ustawiczne",
      pilar3a: "Roczne zaświadczenie z rachunku/polisy Filaru 3a",
      einkauf: "Potwierdzenie wykupu (Einkauf) kasy emerytalnej",
      assegurances: "Polisy i rachunki ubezpieczenia zdrowotnego/na życie",
      guarderia: "Faktury żłobka/opiekunki z numerem identyfikacyjnym usługodawcy",
      pensio: "Umowa lub wyrok dotyczący alimentów",
      donacions: "Rachunki/potwierdzenia darowizn",
      interessos: "Wyciągi odsetek od zadłużenia (kredyt hipoteczny, pożyczki)",
      mediques: "Rachunki medyczne niezwrócone przez ubezpieczenie",
      comptes: "Wyciągi ze wszystkich rachunków bankowych na dzień 31/12",
      titols: "Wykaz papierów wartościowych/akcji (Wertschriftenverzeichnis), jeśli posiadasz",
    },
    howToFileTitle: "📝 Jak złożyć zeznanie podatkowe, krok po kroku",
    howToFile: [
      "1. Pobierz bezpłatne oficjalne oprogramowanie ZHprivateTax ze strony zh.ch, lub skorzystaj z portalu online ZHservices (eTax).",
      "2. Wprowadź dane ze swojego Lohnausweis oraz pozostałych dokumentów z listy kontrolnej pole po polu (skorzystaj z powyższej tabeli jako przewodnika).",
      "3. Program automatycznie oblicza podatek kantonalny i federalny — sprawdź podsumowanie przed wysłaniem.",
      "4. Złóż zeznanie przed 31 marca lub poproś o bezpłatne przedłużenie terminu w ZHservices, jeśli potrzebujesz więcej czasu.",
      "5. Zachowaj podpisaną kopię (cyfrową lub papierową) oraz wszystkie dokumenty potwierdzające przez co najmniej 10 lat, na wypadek gdyby urząd skarbowy o nie poprosił.",
    ],
    export: {
      title: "Orientacyjne podsumowanie podatkowe — Kanton Zurych — Rok podatkowy {year}",
      generated: "Wygenerowano",
      estatCivil: "Stan cywilny",
      municipi: "Gmina",
      fills: "Dzieci na utrzymaniu",
      ingressosBrutTotal: "Łączne dochody brutto",
      totalDeduccions: "Suma szacowanych odliczeń",
      ingresImposable: "Szacowany dochód podlegający opodatkowaniu",
      detailHeader: "--- Szczegóły odliczeń ---",
      pauschal: "Berufsauslagen (ryczałt)",
      transport: "Fahrkosten (transport)",
      dietes: "Verpflegungsmehrkosten (wyżywienie)",
      formacio: "Weiterbildung (kształcenie)",
      saule3a: "Säule 3a",
      einkauf: "Einkauf kasy emerytalnej",
      assegurances: "Ubezpieczenia",
      guarderia: "Opieka nad dziećmi",
      pensio: "Alimenty",
      kinderabzug: "Kinderabzug",
      donacions: "Darowizny",
      interessos: "Odsetki od zadłużenia",
      mediques: "Wydatki medyczne",
      footer: "To jedynie orientacyjne oszacowanie. Sprawdź kwoty na oficjalnym portalu zh.ch przed złożeniem zeznania podatkowego.",
    },
    confirmReset: "Czy na pewno chcesz usunąć wszystkie wprowadzone dane?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Certyfikat wynagrodzeń", explanation: "Roczny dokument wystawiany przez pracodawcę, zawierający wszystkie Twoje dochody i odliczenia u źródła. To podstawa całego zeznania podatkowego." },
    { de: "Steuererklärung", translation: "Zeznanie podatkowe", explanation: "Roczny formularz (papierowy lub ZHprivateTax), który musisz złożyć w urzędzie skarbowym." },
    { de: "Berufskosten", translation: "Wydatki zawodowe", explanation: "Zbiór wydatków związanych z pracą, które podlegają odliczeniu: transport, wyżywienie, kształcenie itp." },
    { de: "Pauschalabzug", translation: "Odliczenie ryczałtowe", explanation: "Stała kwota (3% wynagrodzenia, między CHF 2'000 a 4'000), która podlega odliczeniu bez konieczności okazywania dowodów." },
    { de: "Fahrkosten", translation: "Koszty transportu", explanation: "Koszt codziennego dojazdu między domem a pracą, podlegający odliczeniu w określonych granicach." },
    { de: "Verpflegungsmehrkosten", translation: "Wyżywienie / dodatkowe koszty posiłków", explanation: "Stała kwota za dzień, gdy jesz poza domem bez dofinansowanej stołówki." },
    { de: "Weiterbildungskosten", translation: "Wydatki na kształcenie ustawiczne", explanation: "Kursy i szkolenia związane z Twoim obecnym lub przyszłym zawodem." },
    { de: "Säule 3a", translation: "Filar 3a", explanation: "Prywatne zabezpieczenie emerytalne z korzyścią podatkową; roczna wpłata w 100% podlega odliczeniu do prawnego maksimum." },
    { de: "Pensionskasse", translation: "Kasa/fundusz emerytalny (2. filar)", explanation: "Twój obowiązkowy zawodowy plan emerytalny, zarządzany przez pracodawcę." },
    { de: "Einkauf", translation: "Wykup / dobrowolna wpłata", explanation: "Dobrowolna wpłata do kasy emerytalnej w celu pokrycia luk w składkach; podlega odliczeniu w roku, w którym jest dokonywana." },
    { de: "Versicherungsprämien", translation: "Składki ubezpieczeniowe", explanation: "Składki zdrowotne i na życie podlegające odliczeniu do stałego rocznego pułapu." },
    { de: "Kinderbetreuungskosten", translation: "Wydatki na opiekę nad dziećmi", explanation: "Koszt żłobka lub opiekunki koniecznej, abyś mógł/mogła pracować lub studiować." },
    { de: "Kinderabzug", translation: "Odliczenie na dziecko", explanation: "Stała kwota odliczana za każde dziecko na utrzymaniu." },
    { de: "Spenden", translation: "Darowizny", explanation: "Darowizny na rzecz uznanych organizacji, podlegające odliczeniu powyżej rocznego minimum." },
    { de: "Schuldzinsen", translation: "Odsetki od zadłużenia", explanation: "Odsetki (nie kapitał) od prywatnych pożyczek i kredytów hipotecznych." },
    { de: "Krankheitskosten", translation: "Wydatki medyczne", explanation: "Wydatki na zdrowie niezwrócone przez ubezpieczenie, podlegające odliczeniu powyżej franszyzy." },
    { de: "Sozialabzug", translation: "Odliczenie socjalne/osobiste", explanation: "Ogólne odliczenia stosowane w zależności od stanu cywilnego i obciążeń rodzinnych." },
    { de: "Steuerfuss", translation: "Mnożnik podatkowy", explanation: "Procent, który kanton i gmina stosują do podatku podstawowego, aby obliczyć podatek końcowy." },
    { de: "Quellensteuer", translation: "Podatek u źródła", explanation: "Podatek potrącany bezpośrednio z wynagrodzenia, stosowany wobec niektórych zagranicznych rezydentów bez zezwolenia C." },
    { de: "Wertschriftenverzeichnis", translation: "Wykaz papierów wartościowych", explanation: "Inwentarz rachunków, akcji i innych aktywów finansowych na dzień 31 grudnia." },
  ],
};
