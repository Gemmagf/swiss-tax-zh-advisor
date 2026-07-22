window.I18N = window.I18N || {};
window.I18N.en = {
  meta: { code: "en", name: "English" },

  app: {
    title: "🇨🇭 Tax Advisor · Canton of Zürich",
    exportBtn: "Export summary",
    resetBtn: "Clear data",
    disclaimer: "⚠️ <strong>Important notice:</strong> This tool provides a <strong>rough estimate</strong> based on the general deduction rules of the canton of Zürich and direct federal tax. It does not replace advice from a licensed tax advisor or the use of the official <em>ZHprivateTax</em> software, but it aims to include as much detail and explanation as possible so you can file your return with confidence. Always verify current figures and limits at <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a> before filing. Data is entered only in your browser (localStorage) — nothing is sent to any server.",
    footer: "Unofficial personal tool · Canton of Zürich · Data stored locally in your browser · Nothing is sent to any server",
    dataYearNote: "Reference figures: tax year {year}.",
  },

  tabs: {
    perfil: "1. Profile",
    ingressos: "2. Income",
    professionals: "3. Work expenses",
    assegurances: "4. Insurance & 3a",
    familia: "5. Family and children",
    altres: "6. Other deductions",
    resum: "7. Summary and checklist",
    glossary: "8. Official glossary",
  },

  wizard: {
    guidedMode: "🧭 Guided mode (step by step)",
    allTabsMode: "📑 All tabs",
    stepOf: "Step {current} of {total}",
    back: "◀ Back",
    next: "Next ▶",
    finish: "✅ Done",
  },

  glossaryIntro: "The official Zürich tax form (paper or ZHprivateTax) is always in German. This table translates the key terms so you can locate the right box on the real form.",

  sidebar: {
    totalsTitle: "Live totals",
    totIngressos: "Total gross income",
    totDeduccions: "Total estimated deductions",
    totImposable: "Estimated taxable income",
    hint: "A simplified estimate that doesn't apply the real tax-rate curve. Useful for comparing scenarios (\"what if I contribute more to my 3a?\").",
    desglosTitle: "Deduction breakdown",
    empty: "No data entered yet",
    despProfessionals: "Work expenses (flat-rate + transport + meals + training)",
  },

  perfil: {
    heading: "Tax profile",
    estatCivil: {
      label: "Marital status",
      solter: "Single",
      casat: "Married or registered partnership (joint filing)",
    },
    municipi: {
      label: "Municipality (for the municipal multiplier, Steuerfuss)",
      placeholder: "e.g. Zürich, Winterthur, Uster...",
    },
    esglesia: {
      label: "Are you a member of a recognized church (Kirchensteuer)?",
      no: "No",
      si: "Yes",
    },
    numFills: { label: "Number of dependent children" },
    dobleIngres: {
      label: "Do both partners work? (relevant for the Zweitverdienerabzug)",
      no: "No / not applicable",
      si: "Yes",
    },
    hint: "This information determines which deductions and thresholds apply to you on the following tabs.",
    info: [
      {
        h: "Who must file a tax return in Zürich?",
        p: "Anyone resident in the canton of Zürich on December 31, or who worked or owned property there during the year, must file a tax return (Steuererklärung). If you have recently arrived in Switzerland on a B permit and are taxed at source (Quellensteuer), in many cases no return is required — but if you exceed a certain income threshold (usually CHF 120,000/year) or have assets or real estate, you will need to file one."
      },
      {
        h: "Deadline and extension",
        p: "The standard deadline is March 31 of the following year. Zürich allows you to request a free, automatic extension until the end of September/November through the ZHservices portal (online, no reason required). Filing late without an extension can result in a payment reminder and, in repeated cases, a fine."
      },
      {
        h: "Joint vs. separate filing",
        p: "Married couples and registered partnerships always file a single joint tax return in Switzerland (there is no option for separate taxation as in some other countries). Both partners' income and deductions are combined; that's why this tool asks for your spouse's salary if applicable."
      },
      {
        h: "Church tax (Kirchensteuer)",
        p: "If you are officially registered as a member of the Reformed, Catholic, or Christian Catholic Church, you'll pay an additional church tax (usually 10-12% of the cantonal tax). You can deregister (Kirchenaustritt) at your municipality's civil registry office at any time; the tax effect generally applies from the following year onward."
      },
    ],
  },

  ingressos: {
    heading: "Annual gross income",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Annual gross salary (filer) — salary box on the salary certificate (Lohnausweis)" },
    salariBrutConjuge: { label: "Annual gross salary (spouse, if filing jointly)" },
    altresIngressos: { label: "Other income (rent, dividends, other)" },
    hint: "Use the figures from your Lohnausweis (salary certificate) provided by your employer. If you have more than one job, add them together here.",
    info: [
      {
        h: "Your Lohnausweis, box by box",
        list: [
          "Ziffer 1: total gross salary — the main figure to enter here.",
          "Ziffer 2.1-2.3: bonuses, commissions, profit shares — add these to the gross salary.",
          "Ziffer 3: irregular benefits (severance pay, stock options) — also taxable.",
          "Ziffer 7: company car for private use — added as income in kind (0.9%/month of the purchase price).",
          "Ziffer 13.1.1/13.1.2: representation and training expenses already paid by the employer — usually NOT deductible again (avoid double-counting them on tab 3).",
        ]
      },
      {
        h: "Multiple jobs or a secondary job",
        p: "If you have more than one employer, add up all the gross salaries from the corresponding Lohnausweis. Secondary jobs (Nebenerwerb) are also fully taxable; at the federal level there is a small additional deduction for secondary-job expenses if the income is not very significant."
      },
      {
        h: "Social benefits: what's taxable and what isn't",
        p: "Unemployment benefits (ALV), accident/sickness benefits (SUVA, IV) and pensions (AVS/AI/2nd pillar) ARE taxed as income. Family allowances (Kinder- und Ausbildungszulagen) are also taxable. On the other hand, supplementary benefits (Ergänzungsleistungen) and certain compensation for moral damages are NOT taxable."
      },
    ],
  },

  professionals: {
    heading: "Work expenses (Berufskosten)",
    transport: {
      legend: "🚋 Transport (Fahrkosten)",
      costTransportPublic: { label: "Annual cost of your public transport pass (SBB/ZVV/etc.)" },
      usaCotxe: { label: "Do you drive a private car because there is NO reasonable public transport option?", no: "No", si: "Yes" },
      kmAny: { label: "Km traveled (round trip) x working days per year", placeholder: "km/year" },
      hint: "At the federal level, commuting costs are deductible up to an annual maximum (see summary). At the ZH cantonal level, the limit may differ.",
    },
    dietes: {
      legend: "🍽️ Meals away from home (Verpflegungsmehrkosten)",
      diesMenjarFora: { label: "Working days per year you eat away from home without a subsidized canteen", placeholder: "days/year" },
      teCantina: { label: "Does your employer have a canteen or subsidize your meals?", no: "No", si: "Yes (deduction halved)" },
      hint: "A fixed amount per day applies. If you have a subsidized canteen, the daily deduction is halved.",
    },
    formacio: {
      legend: "🎓 Continuing education and other work expenses",
      formacio: { label: "Continuing education expenses related to your job (courses, materials)" },
      altresProfessionals: { label: "Other actual work expenses (work clothing, tools, home office...) — only if they exceed the flat-rate amount" },
      hint: "By default, a flat-rate deduction (Pauschalabzug) applies to your gross salary. It's only worth declaring actual expenses if they exceed this flat rate.",
    },
    info: [
      {
        h: "Pauschalabzug or actual expenses: which should you choose?",
        p: "Zürich automatically applies 3% of net salary (minimum CHF 2,000, maximum CHF 4,000) as a flat-rate deduction to cover minor work expenses (clothing, phone, small supplies) without needing receipts. It's only worth declaring actual expenses (real receipts) if their total clearly exceeds this flat amount — otherwise you're wasting time for no gain."
      },
      {
        h: "When is public transport considered \"unreasonable\"?",
        p: "The Zürich tax office generally accepts a private car as a deductible expense only if public transport would add more than one extra hour to the daily commute (round trip) compared to driving, or if there is no reasonable connection to your work schedule (night shifts, poorly connected rural areas). If you simply prefer driving for convenience, the tax office may reject the deduction and limit you to the cost of the cheapest available public transport pass."
      },
      {
        h: "Home office",
        p: "If your employer doesn't provide you with a workplace and you regularly work from home, you can deduct a proportional share of the rent/rental value, heating, and electricity corresponding to the room used exclusively as an office. You must be able to prove this with a letter from your employer confirming the lack of a fixed office space; this deduction is examined closely by the tax office."
      },
      {
        h: "Numerical example",
        p: "Gross salary CHF 90,000 → Pauschalabzug = 3% = CHF 2,700 (within the 2,000-4,000 range). If you also have a ZVV pass costing CHF 2,200/year and eat out 220 days without a canteen (220 × CHF 15 = CHF 3,300, but capped at CHF 3,200/year), total work expenses would be CHF 2,700 + 2,200 + 3,200 = CHF 8,100."
      },
    ],
  },

  assegurances: {
    heading: "Insurance and retirement provision (Pillar 3a)",
    tePensionskasse: { label: "Are you enrolled in a pension fund (Pensionskasse / 2nd pillar) through your job?", si: "Yes", no: "No (self-employed without a 2nd pillar)" },
    pilar3a: { label: "Annual contribution to Pillar 3a (tied retirement account or insurance policy)" },
    einkaufPK: { label: "Voluntary buy-in (Einkauf) to your pension fund this year" },
    primaSalut: { label: "Annual health and accident insurance premiums (KVG/LAMal) — filer" },
    primaVida: { label: "Life insurance premiums / other deductible private insurance" },
    interessosEstalvi: { label: "Interest earned on savings (savings account, etc.)" },
    hint: "Pillar 3a is one of the most powerful deductions. Health/life insurance premiums are deductible up to a fixed cap.",
    info: [
      {
        h: "3a account vs. tied 3a insurance policy",
        p: "A 3a bank account offers full flexibility (you can contribute any amount you want each year up to the maximum, and choose between pure savings or savings invested in funds). A tied retirement insurance policy (3a with life insurance) obligates you to pay fixed premiums for years and heavily penalizes early cancellation — this is generally only advisable if you need real life/disability coverage, not just to save on taxes."
      },
      {
        h: "Deadline: December 31",
        p: "The 3a contribution must be made (received by the bank/insurer) before December 31 of the corresponding tax year. It cannot be made retroactively in January of the following year."
      },
      {
        h: "Pension fund buy-in (Einkauf) and the 3-year rule",
        p: "If you have had contribution gaps (years without work, arrival from abroad, salary increase), you can make a voluntary contribution (Einkauf) to your Pensionskasse to match your target benefit. This contribution is 100% deductible in the year you make it. Caution: if you withdraw capital (not a pension) from the pension fund within 3 years of an Einkauf, the tax office can retroactively cancel the tax deduction for that buy-in (the 3-year rule / Sperrfrist)."
      },
      {
        h: "Strategy: flattening progressivity",
        p: "Since Swiss tax is progressive, it's often more efficient to spread a large Einkauf across several smaller contributions over multiple years (rather than a single one) to avoid a large deduction in a single year being \"wasted\" in a low bracket while in other years you pay higher marginal rates."
      },
    ],
  },

  familia: {
    heading: "Family and children",
    despesesGuarderia: { label: "Childcare / nanny expenses for children under 14, while you work or study" },
    pensioAlimentaria: { label: "Alimony/child support paid (to the other parent)" },
    hint: "The child deduction (Kinderabzug) and the personal deduction are already applied automatically based on the number of children and marital status indicated on tab 1.",
    chfAnyPlaceholder: "CHF/year",
    info: [
      {
        h: "Conditions for deducting childcare",
        p: "An official invoice from the provider is required (daycare, a nanny with a declared contract, day camps) showing their UID/VAT number. The care must be necessary so the parents can work, study, or due to a documented incapacity/illness — caring for a child while you are unemployed usually does not qualify. Grandparents who provide care for free do not generate a deduction (no invoice); if you pay them formally and they declare it as income, it could qualify."
      },
      {
        h: "Alimony/child support: who declares it?",
        p: "Whoever pays it deducts it in full; whoever receives it must declare it as taxable income. This applies both to alimony paid to an ex-spouse and to child support until the child reaches legal age (or until the end of their studies, in some cases, if so established in the agreement)."
      },
      {
        h: "Shared custody and the Kinderabzug",
        p: "If custody is shared equally and there is no child support between the parents, Zürich generally splits the child deduction (Kinderabzug) equally between both parents. If one parent receives child support from the other, the parent the child lives with primarily usually keeps the full deduction."
      },
    ],
  },

  altres: {
    heading: "Other deductions",
    donacions: { label: "Donations to recognized public-benefit / charitable organizations" },
    interessosDeute: { label: "Interest paid on private debts (private mortgage, loans, credit cards)" },
    despesesMediques: { label: "Medical and dental expenses not covered by insurance (your own, not reimbursed)" },
    hint: "Medical expenses are only deductible for the portion that exceeds a percentage of your net income. Donations must exceed a minimum annual amount.",
    info: [
      {
        h: "Donations: receipt requirements",
        p: "The recipient organization must have recognized tax-exempt status for public or charitable purposes (most Swiss NGOs and foundations state this on their receipt/annual confirmation). Always keep the annual donation confirmation these organizations send in January — it's the proof you'll be asked for."
      },
      {
        h: "Which debt interest counts?",
        p: "Interest on private mortgages, personal loans, credit cards, and bank overdrafts is deductible (within the limit of asset income + CHF 50,000). Principal repayment installments are NOT deductible, only the interest portion — check the annual statement from your bank, which already separates the two."
      },
      {
        h: "Medical expenses: the hidden deductible",
        p: "Only the portion of unreimbursed medical/dental expenses that exceeds 5% of your net income is deductible. For example, with a net income of CHF 80,000, the first CHF 4,000 of medical expenses don't count — only the excess. Keep all your receipts (dentist, glasses, physiotherapy not covered) and add them all together to more easily exceed this threshold."
      },
    ],
  },

  resum: {
    heading: "Summary and document checklist",
    xifresClauTitle: "Key figures (tax year {year})",
    conceptCol: "Item",
    importCol: "Amount",
    ingressosBrutTotal: "Total gross income",
    totalDeduccionsEst: "Total estimated deductions",
    ingresImposableEst: "Estimated taxable income",
    avisPilar3a: "⚠️ You entered {aportat} for Pillar 3a, but the maximum deductible in your case is {max}. The excess of {exces} is not deductible.",
    avisTransportZhCap: "⚠️ At the federal level, transport costs are only deductible up to {fedMax}/year; at the ZH cantonal level, the cap is {zhMax}/year.",
    avisTransportZhReal: "⚠️ At the federal level, transport costs are only deductible up to {fedMax}/year; at the ZH cantonal level, you can deduct the actual cost ({real}) up to a cap of {zhMax}/year.",
    avisFormacio: "⚠️ Continuing-education expenses are only deductible up to {max} per person (source: official form). The excess of {exces} is not deductible.",
    detallTitle: "Breakdown by form box (approximate)",
    casellaCol: "Typical box (Ziffer)",
    importDeclararCol: "Amount to declare",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 10.1)",
      fahrkosten: "Fahrkosten — transport (Ziffer 10.1)",
      verpflegung: "Verpflegungsmehrkosten — meals (Ziffer 10.1)",
      weiterbildung: "Weiterbildungskosten — education (Ziffer 10.4)",
      saule3a: "Säule 3a (Ziffer 11.1)",
      versicherung: "Versicherungsprämien — insurance (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten — childcare (Ziffer 14)",
      kinderabzug: "Kinderabzug ({n} child/children) (Ziffer 21.1)",
      spenden: "Spenden — donations (Ziffer 18)",
      schuldzinsen: "Schuldzinsen — debt interest (Ziffer 13)",
      krankheit: "Krankheitskosten — medical expenses (Ziffer 17)",
    },
    checklistTitle: "📋 Document checklist to prepare",
    checklist: {
      lohnausweis: "Salary certificate (Lohnausweis) from each job",
      abonament: "Invoice/receipt for the public transport pass",
      dietes: "Proof that you don't have a subsidized canteen (if applicable)",
      formacio: "Receipts for courses/continuing education",
      pilar3a: "Annual statement of the Pillar 3a account/policy",
      einkauf: "Confirmation of the pension fund buy-in (Einkauf)",
      assegurances: "Health/life insurance policies and receipts",
      guarderia: "Childcare/nanny invoices with the provider's tax ID",
      pensio: "Alimony/child support agreement or ruling",
      donacions: "Donation receipts/confirmations",
      interessos: "Debt interest statements (mortgage, loans)",
      mediques: "Medical invoices not reimbursed by insurance",
      comptes: "Statements for all bank accounts as of 12/31",
      titols: "List of securities/shares (Wertschriftenverzeichnis) if you have any",
    },
    howToFileTitle: "📝 How to file your return, step by step",
    howToFile: [
      "1. Download the free official ZHprivateTax software from zh.ch, or use the online ZHservices portal (eTax).",
      "2. Enter the data from your Lohnausweis and the rest of the checklist documents box by box (use the table above as a guide).",
      "3. The software automatically calculates the cantonal and federal tax — review the summary before submitting.",
      "4. File it before March 31, or request the free extension via ZHservices if you need more time.",
      "5. Keep a signed copy (digital or paper) and all supporting documents for at least 10 years, in case the tax office requests any of them.",
    ],
    export: {
      title: "Approximate tax summary — Canton of Zürich — Tax year {year}",
      generated: "Generated",
      estatCivil: "Marital status",
      municipi: "Municipality",
      fills: "Dependent children",
      ingressosBrutTotal: "Total gross income",
      totalDeduccions: "Total estimated deductions",
      ingresImposable: "Estimated taxable income",
      detailHeader: "--- Deduction breakdown ---",
      pauschal: "Berufsauslagen (flat-rate)",
      transport: "Fahrkosten (transport)",
      dietes: "Verpflegungsmehrkosten (meals)",
      formacio: "Weiterbildung (education)",
      saule3a: "Säule 3a",
      einkauf: "Pension fund buy-in (Einkauf)",
      assegurances: "Insurance",
      guarderia: "Childcare",
      pensio: "Alimony/child support",
      kinderabzug: "Kinderabzug",
      donacions: "Donations",
      interessos: "Debt interest",
      mediques: "Medical expenses",
      footer: "This is an approximate estimate. Verify the figures on the official zh.ch portal before filing your return.",
    },
    confirmReset: "Are you sure you want to clear all entered data?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Salary certificate", explanation: "Annual document your employer gives you showing all your income and deductions at source. It's the basis for the entire tax return." },
    { de: "Steuererklärung", translation: "Tax return", explanation: "The annual form (paper or ZHprivateTax) you must submit to the tax office." },
    { de: "Berufskosten", translation: "Work expenses", explanation: "Job-related expenses that can be deducted: transport, meals, education, etc." },
    { de: "Pauschalabzug", translation: "Flat-rate deduction", explanation: "A fixed amount (3% of salary, between CHF 2,000 and 4,000) deducted without needing receipts." },
    { de: "Fahrkosten", translation: "Transport costs", explanation: "The cost of the daily commute between home and work, deductible within limits." },
    { de: "Verpflegungsmehrkosten", translation: "Meal allowance / extra meal costs", explanation: "A fixed amount per day when you eat away from home without a subsidized canteen." },
    { de: "Weiterbildungskosten", translation: "Continuing education expenses", explanation: "Courses and training related to your current or future profession." },
    { de: "Säule 3a", translation: "Pillar 3a", explanation: "Tied private retirement provision with tax benefits; the annual contribution is 100% deductible up to the legal maximum." },
    { de: "Pensionskasse", translation: "Pension fund (2nd pillar)", explanation: "Your mandatory occupational pension plan, managed by your employer." },
    { de: "Einkauf", translation: "Buy-in / voluntary contribution", explanation: "A voluntary contribution to the pension fund to cover contribution gaps; deductible in the year you make it." },
    { de: "Versicherungsprämien", translation: "Insurance premiums", explanation: "Health and life insurance premiums, deductible up to a fixed annual cap." },
    { de: "Kinderbetreuungskosten", translation: "Childcare expenses", explanation: "The cost of daycare or a nanny necessary so you can work or study." },
    { de: "Kinderabzug", translation: "Child deduction", explanation: "A fixed amount deducted for each dependent child." },
    { de: "Spenden", translation: "Donations", explanation: "Donations to recognized organizations, deductible above a minimum annual amount." },
    { de: "Schuldzinsen", translation: "Debt interest", explanation: "Interest (not the principal) on private loans and mortgages." },
    { de: "Krankheitskosten", translation: "Medical expenses", explanation: "Unreimbursed health expenses, deductible above a deductible threshold." },
    { de: "Sozialabzug", translation: "Social/personal deduction", explanation: "General deductions applied based on marital status and family responsibilities." },
    { de: "Steuerfuss", translation: "Tax multiplier", explanation: "The percentage the canton and municipality apply to the base tax to calculate the final tax." },
    { de: "Quellensteuer", translation: "Withholding tax at source", explanation: "Tax withheld directly from payroll, applied to certain foreign residents without a C permit." },
    { de: "Wertschriftenverzeichnis", translation: "List of securities", explanation: "Inventory of accounts, shares, and other financial assets as of December 31." },
  ],
};
