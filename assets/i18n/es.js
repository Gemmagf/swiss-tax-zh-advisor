window.I18N = window.I18N || {};
window.I18N.es = {
  meta: { code: "es", name: "Español" },

  app: {
    title: "🇨🇭 Asesor Fiscal · Cantón de Zúrich",
    exportBtn: "Exportar resumen",
    resetBtn: "Borrar datos",
    disclaimer: "⚠️ <strong>Aviso importante:</strong> Esta herramienta ofrece una <strong>estimación orientativa</strong> basada en las reglas generales de deducción del cantón de Zúrich y del impuesto federal directo. No sustituye el asesoramiento de un profesional fiscal titulado ni el uso del software oficial <em>ZHprivateTax</em>, pero incluye el máximo de detalle y explicaciones posible para que puedas presentar tu declaración con confianza. Verifica siempre las cifras y límites vigentes en <a href=\"https://www.zh.ch/de/steuern-finanzen.html\" target=\"_blank\" rel=\"noopener\">zh.ch</a> antes de presentar la declaración. Los datos se introducen solo en tu navegador (localStorage) — no se envían a ningún servidor.",
    footer: "Herramienta personal no oficial · Cantón de Zúrich · Datos locales en tu navegador · No envía datos a ningún servidor",
    dataYearNote: "Cifras de referencia: año fiscal {year}.",
  },

  tabs: {
    perfil: "1. Perfil",
    ingressos: "2. Ingresos",
    professionals: "3. Gastos profesionales",
    assegurances: "4. Seguros y 3a",
    familia: "5. Familia e hijos",
    altres: "6. Otras deducciones",
    resum: "7. Resumen y checklist",
    glossary: "8. Glosario oficial",
  },

  wizard: {
    guidedMode: "🧭 Modo guiado (paso a paso)",
    allTabsMode: "📑 Todas las pestañas",
    stepOf: "Paso {current} de {total}",
    back: "◀ Atrás",
    next: "Siguiente ▶",
    finish: "✅ Hecho",
  },

  glossaryIntro: "El formulario oficial de Zúrich (papel o ZHprivateTax) está siempre en alemán. Esta tabla traduce los términos clave para que puedas localizar la casilla correcta en el formulario real.",

  sidebar: {
    totalsTitle: "Totales en directo",
    totIngressos: "Ingresos brutos totales",
    totDeduccions: "Total deducciones estimadas",
    totImposable: "Ingreso imponible estimado",
    hint: "Estimación simplificada, sin aplicar la curva real de tipos impositivos. Útil para comparar escenarios (\"¿y si aporto más al 3a?\").",
    desglosTitle: "Desglose de deducciones",
    empty: "Todavía no se han introducido datos",
    despProfessionals: "Gastos profesionales (fijo + transporte + dietas + formación)",
  },

  perfil: {
    heading: "Perfil fiscal",
    estatCivil: {
      label: "Estado civil",
      solter: "Soltero/a",
      casat: "Casado/a o pareja registrada (declaración conjunta)",
    },
    municipi: {
      label: "Municipio (para el multiplicador municipal, Steuerfuss)",
      placeholder: "p. ej. Zúrich, Winterthur, Uster...",
    },
    esglesia: {
      label: "¿Eres miembro de una iglesia reconocida (Kirchensteuer)?",
      no: "No",
      si: "Sí",
    },
    numFills: { label: "Número de hijos a cargo" },
    dobleIngres: {
      label: "¿Trabajan los dos miembros de la pareja? (relevante para el Zweitverdienerabzug)",
      no: "No / no aplica",
      si: "Sí",
    },
    hint: "Estos datos determinan qué deducciones y umbrales te aplican en las siguientes pestañas.",
    info: [
      {
        h: "¿Quién debe presentar declaración en Zúrich?",
        p: "Toda persona domiciliada en el cantón de Zúrich a 31 de diciembre, o que haya trabajado o tenido propiedades allí durante el año, debe presentar declaración (Steuererklärung). Si acabas de llegar a Suiza con permiso B y tributas por retención en origen (Quellensteuer), en muchos casos no es necesaria una declaración — pero si superas cierto umbral de ingresos (normalmente CHF 120'000/año) o tienes patrimonio/inmuebles, sí deberás presentar una."
      },
      {
        h: "Plazo y prórroga",
        p: "El plazo estándar es el 31 de marzo del año siguiente. Zúrich permite solicitar una prórroga gratuita y automática hasta finales de septiembre/noviembre a través del portal ZHservices (en línea, sin justificar el motivo). Presentarla tarde sin prórroga puede conllevar un recordatorio de pago y, en casos reiterados, una multa."
      },
      {
        h: "Declaración conjunta vs separada",
        p: "Los matrimonios y parejas registradas siempre presentan una única declaración conjunta en Suiza (no existe la opción de tributación separada como en otros países). Los ingresos y deducciones de ambos se suman; por eso esta herramienta te pide el salario del cónyuge si corresponde."
      },
      {
        h: "Impuesto eclesiástico (Kirchensteuer)",
        p: "Si estás registrado oficialmente como miembro de la Iglesia Reformada, Católica o Católica Cristiana, pagarás un impuesto eclesiástico adicional (normalmente un 10-12% del impuesto cantonal). Puedes darte de baja (Kirchenaustritt) en la oficina civil de tu municipio en cualquier momento; el efecto fiscal se aplica generalmente a partir del año siguiente."
      },
    ],
  },

  ingressos: {
    heading: "Ingresos brutos anuales",
    chfPlaceholder: "CHF",
    salariBrut: { label: "Salario bruto anual (declarante) — casilla de salario del certificado salarial (Lohnausweis)" },
    salariBrutConjuge: { label: "Salario bruto anual (cónyuge, si declaración conjunta)" },
    altresIngressos: { label: "Otros ingresos (alquileres, dividendos, otros)" },
    hint: "Utiliza las cifras de tu Lohnausweis (certificado salarial) que te entrega la empresa. Si tienes más de un trabajo, súmalos aquí.",
    info: [
      {
        h: "Tu Lohnausweis casilla por casilla",
        list: [
          "Ziffer 1: salario bruto total — la cifra principal que debes introducir aquí.",
          "Ziffer 2.1-2.3: bonus, comisiones, participaciones en beneficios — sumarlos al salario bruto.",
          "Ziffer 3: prestaciones irregulares (indemnizaciones, opciones sobre acciones) — también tributables.",
          "Ziffer 7: coche de la empresa de uso privado — se añade como ingreso en especie (0,9%/mes del precio de compra).",
          "Ziffer 13.1.1/13.1.2: gastos de representación y formación ya pagados por la empresa — normalmente NO vuelven a ser deducibles (evita duplicarlos en la pestaña 3).",
        ]
      },
      {
        h: "Varios trabajos o trabajo secundario",
        p: "Si tienes más de un empleador, suma todos los salarios brutos del Lohnausweis correspondiente. Los trabajos accesorios (Nebenerwerb) también son plenamente tributables; a nivel federal existe una pequeña deducción adicional por gastos de trabajo accesorio si este no es muy significativo."
      },
      {
        h: "Prestaciones sociales: qué tributa y qué no",
        p: "Las prestaciones por desempleo (ALV), las indemnizaciones por accidente/enfermedad (SUVA, IV) y las pensiones (AVS/AI/2º pilar) SÍ tributan como ingreso. Las asignaciones familiares (Kinder- und Ausbildungszulagen) también tributan. En cambio, la prestación complementaria (Ergänzungsleistungen) y ciertas indemnizaciones por daño moral NO tributan."
      },
    ],
  },

  professionals: {
    heading: "Gastos profesionales (Berufskosten)",
    transport: {
      legend: "🚋 Transporte (Fahrkosten)",
      costTransportPublic: { label: "Coste anual del abono de transporte público (SBB/ZVV/etc.)" },
      usaCotxe: { label: "¿Usas el coche privado porque NO hay transporte público razonable?", no: "No", si: "Sí" },
      kmAny: { label: "Km recorridos (ida+vuelta) x días laborables al año", placeholder: "km/año" },
      hint: "A nivel federal el coste de desplazamiento es deducible hasta un máximo anual (ver resumen). A nivel cantonal ZH el límite puede ser diferente.",
    },
    dietes: {
      legend: "🍽️ Dietas / comida fuera de casa (Verpflegungsmehrkosten)",
      diesMenjarFora: { label: "Días laborables al año que comes fuera de casa sin cantina subvencionada", placeholder: "días/año" },
      teCantina: { label: "¿Tu empresa tiene cantina o te subvenciona la comida?", no: "No", si: "Sí (deducción reducida a la mitad)" },
      hint: "Se aplica un importe fijo por día. Si tienes cantina subvencionada, la deducción diaria se reduce a la mitad.",
    },
    formacio: {
      legend: "🎓 Formación continua y otros gastos profesionales",
      formacio: { label: "Gastos de formación continua relacionada con el trabajo (cursos, material)" },
      altresProfessionals: { label: "Otros gastos profesionales efectivos (ropa de trabajo, herramientas, despacho en casa...) — solo si superan el % fijo" },
      hint: "Por defecto se aplica una deducción fija (Pauschalabzug) sobre el salario bruto. Solo vale la pena declarar gastos efectivos si superan este importe fijo.",
    },
    info: [
      {
        h: "Pauschalabzug o gastos reales: ¿cuál eliges?",
        p: "Zúrich aplica automáticamente un 3% del salario neto (mínimo CHF 2'000, máximo CHF 4'000) como deducción fija para cubrir pequeños gastos profesionales (ropa, teléfono, material menor) sin necesidad de justificantes. Solo tiene sentido declarar gastos efectivos (recibos reales) si su total supera claramente este importe fijo — en caso contrario, estás perdiendo el tiempo sin ganar nada."
      },
      {
        h: "¿Cuándo se considera \"no razonable\" el transporte público?",
        p: "La oficina tributaria de Zúrich suele aceptar el coche privado como gasto deducible solo si el transporte público supone más de una hora adicional de trayecto diario (ida+vuelta) respecto al coche, o si no hay conexión razonable con el horario de trabajo (turnos de noche, zonas rurales mal conectadas). Si simplemente prefieres el coche por comodidad, Hacienda puede rechazar la deducción y limitarte al coste equivalente del abono de transporte público más barato disponible."
      },
      {
        h: "Despacho en casa (Home Office)",
        p: "Si tu empleador no te proporciona un puesto de trabajo y trabajas regularmente desde casa, puedes deducir una parte proporcional del alquiler/valor de alquiler, calefacción y electricidad correspondiente a la habitación utilizada exclusivamente como despacho. Debes poder demostrarlo con una carta del empleador que confirme la ausencia de un puesto fijo en la oficina; esta deducción es examinada con detalle por la oficina tributaria."
      },
      {
        h: "Ejemplo numérico",
        p: "Salario bruto CHF 90'000 → Pauschalabzug = 3% = CHF 2'700 (dentro del rango 2'000-4'000). Si además tienes un abono ZVV de CHF 2'200/año y comes fuera 220 días sin cantina (220 × CHF 15 = CHF 3'300, pero limitado a CHF 3'200/año), el total de gastos profesionales sería CHF 2'700 + 2'200 + 3'200 = CHF 8'100."
      },
    ],
  },

  assegurances: {
    heading: "Seguros y previsión (Pilar 3a)",
    tePensionskasse: { label: "¿Estás afiliado a un fondo de pensiones (Pensionskasse / 2º pilar) a través del trabajo?", si: "Sí", no: "No (autónomo sin 2º pilar)" },
    pilar3a: { label: "Aportación anual al Pilar 3a (cuenta o seguro de previsión vinculado)" },
    einkaufPK: { label: "Rescate voluntario (Einkauf) en la caja de pensiones este año" },
    primaSalut: { label: "Primas anuales de seguro de enfermedad y accidentes (KVG/LAMal) — declarante" },
    primaVida: { label: "Primas de seguro de vida / otros seguros privados deducibles" },
    interessosEstalvi: { label: "Intereses generados por ahorros (cuenta de ahorro, etc.)" },
    hint: "El pilar 3a es una de las deducciones más potentes. Las primas de salud/vida se deducen hasta un tope fijo.",
    info: [
      {
        h: "Cuenta 3a vs seguro 3a vinculado",
        p: "Una cuenta bancaria 3a ofrece flexibilidad total (puedes aportar la cantidad que quieras cada año hasta el máximo, y elegir entre ahorro puro o ahorro con inversión en fondos). Una póliza de seguro de previsión vinculado (3a con seguro de vida) te obliga a pagar primas fijas durante años y penaliza fuertemente la cancelación anticipada — normalmente solo es recomendable si necesitas cobertura de vida/invalidez real, no únicamente para ahorrar impuestos."
      },
      {
        h: "Plazo: 31 de diciembre",
        p: "La aportación al 3a debe realizarse (transferencia recibida por el banco/aseguradora) antes del 31 de diciembre del año fiscal correspondiente. No se puede hacer con efecto retroactivo en enero del año siguiente."
      },
      {
        h: "Rescate de la caja de pensiones (Einkauf) y regla de los 3 años",
        p: "Si has tenido lagunas de cotización (años sin trabajo, llegada desde el extranjero, aumento de sueldo), puedes hacer una aportación voluntaria (Einkauf) a tu Pensionskasse para igualar tu prestación objetivo. Esta aportación es 100% deducible el año en que la haces. Cuidado: si retiras capital (no renta) de la caja de pensiones en los 3 años siguientes a un Einkauf, Hacienda puede anular retroactivamente la deducción fiscal de aquel rescate (regla de los 3 años / Sperrfrist)."
      },
      {
        h: "Estrategia: aplanar la progresividad",
        p: "Como el impuesto suizo es progresivo, a menudo es más eficiente repartir un Einkauf grande en varias aportaciones más pequeñas a lo largo de varios años (en lugar de una sola) para evitar que una gran deducción de un solo año \"se pierda\" en un tramo bajo mientras que otros años pagas tipos marginales más altos."
      },
    ],
  },

  familia: {
    heading: "Familia e hijos",
    despesesGuarderia: { label: "Gastos de guardería / canguro para hijos menores de 14 años, mientras trabajas o estudias" },
    pensioAlimentaria: { label: "Pensión alimenticia pagada (al otro progenitor)" },
    hint: "La deducción por hijos (Kinderabzug) y la deducción personal ya se aplican automáticamente según el número de hijos y el estado civil indicados en la pestaña 1.",
    chfAnyPlaceholder: "CHF/año",
    info: [
      {
        h: "Condiciones para deducir la guardería",
        p: "Se necesita una factura oficial del proveedor (guardería, canguro con contrato declarado, colonias de día) que indique su número UID/IVA. El cuidado debe ser necesario para que los progenitores puedan trabajar, estudiar, o por incapacidad/enfermedad acreditada — cuidar al hijo mientras estás en el paro no suele calificar. Los abuelos que cuidan gratis no generan deducción (no hay factura); si les pagas formalmente y lo declaran como ingreso, sí podría calificar."
      },
      {
        h: "Pensión alimenticia: ¿quién la declara?",
        p: "Quien la paga la deduce íntegramente; quien la recibe debe declararla como ingreso tributable. Esto vale tanto para la pensión al excónyuge como para la del hijo hasta la mayoría de edad (o hasta el final de los estudios, en algunos casos, si así lo establece el convenio)."
      },
      {
        h: "Custodia compartida y Kinderabzug",
        p: "Si la custodia es compartida a partes iguales y no hay pensión alimenticia entre progenitores, Zúrich suele repartir la deducción por hijo (Kinderabzug) a partes iguales entre ambos progenitores. Si un progenitor recibe pensión alimenticia por parte del otro, normalmente es quien convive principalmente con el hijo quien se queda toda la deducción."
      },
    ],
  },

  altres: {
    heading: "Otras deducciones",
    donacions: { label: "Donaciones a entidades con finalidad pública/benéfica reconocidas" },
    interessosDeute: { label: "Intereses de deudas privadas pagados (hipoteca privada, préstamos, tarjetas)" },
    despesesMediques: { label: "Gastos médicos y dentales no cubiertos por el seguro (propios, no reembolsados)" },
    hint: "Los gastos médicos solo son deducibles por la parte que supera un porcentaje de tu ingreso neto. Las donaciones deben superar un importe mínimo anual.",
    info: [
      {
        h: "Donaciones: requisitos del recibo",
        p: "La entidad receptora debe tener reconocida la exención fiscal por finalidad pública o de utilidad pública (la mayoría de ONG y fundaciones suizas lo indican en su recibo/confirmación anual). Guarda siempre la confirmación anual de donaciones que envían estas entidades en enero — es el justificante que te pedirán."
      },
      {
        h: "¿Qué intereses de deuda cuentan?",
        p: "Los intereses de hipoteca privada, préstamos personales, tarjetas de crédito y descubiertos bancarios son deducibles (dentro del límite de rendimiento de activos + CHF 50'000). Las cuotas de amortización del capital NO son deducibles, solo la parte de intereses — revisa el certificado anual del banco, que ya separa ambos conceptos."
      },
      {
        h: "Gastos médicos: la franquicia oculta",
        p: "Solo se deduce la parte de gastos médicos/dentales no reembolsados que supere el 5% de tu ingreso neto. Por ejemplo, con un ingreso neto de CHF 80'000, los primeros CHF 4'000 de gasto médico no cuentan — solo el exceso. Guarda todas las facturas (dentista, gafas, fisioterapia no cubierta) y súmalas todas juntas para superar más fácilmente este umbral."
      },
    ],
  },

  resum: {
    heading: "Resumen y checklist de documentos",
    xifresClauTitle: "Cifras clave (año fiscal {year})",
    conceptCol: "Concepto",
    importCol: "Importe",
    ingressosBrutTotal: "Ingresos brutos totales",
    totalDeduccionsEst: "Total deducciones estimadas",
    ingresImposableEst: "Ingreso imponible estimado",
    avisPilar3a: "⚠️ Has introducido {aportat} en el Pilar 3a, pero el máximo deducible para tu caso es {max}. El exceso de {exces} no es deducible.",
    avisTransportZhCap: "⚠️ A nivel federal el coste de transporte solo es deducible hasta {fedMax}/año; a nivel cantonal ZH el tope es {zhMax}/año.",
    avisTransportZhReal: "⚠️ A nivel federal el coste de transporte solo es deducible hasta {fedMax}/año; a nivel cantonal ZH puedes deducir el coste real ({real}) hasta un tope de {zhMax}/año.",
    avisFormacio: "⚠️ Los gastos de formación continua solo son deducibles hasta {max} por persona (fuente: formulario oficial). El exceso de {exces} no es deducible.",
    detallTitle: "Detalle por casilla del formulario (orientativo)",
    casellaCol: "Casilla típica (Ziffer)",
    importDeclararCol: "Importe a declarar",
    rows: {
      berufsauslagen: "Berufsauslagen — Pauschalabzug (Ziffer 11.1)",
      fahrkosten: "Fahrkosten — transporte (Ziffer 11.1)",
      verpflegung: "Verpflegungsmehrkosten — dietas (Ziffer 11.1)",
      weiterbildung: "Weiterbildungskosten — formación (Ziffer 16.2)",
      saule3a: "Säule 3a (Ziffer 14.1)",
      versicherung: "Versicherungsprämien — seguros (Ziffer 15)",
      kinderbetreuung: "Kinderbetreuungskosten — guardería (Ziffer 16.6)",
      kinderabzug: "Kinderabzug ({n} hijo/s) (Ziffer 24.1)",
      spenden: "Spenden — donaciones (Ziffer 22.2)",
      schuldzinsen: "Schuldzinsen — intereses de deuda (Ziffer 12)",
      krankheit: "Krankheitskosten — gastos médicos (Ziffer 22.1)",
    },
    checklistTitle: "📋 Checklist de documentos a preparar",
    checklist: {
      lohnausweis: "Certificado salarial (Lohnausweis) de cada trabajo",
      abonament: "Factura/comprobante del abono de transporte público",
      dietes: "Justificación de que no tienes cantina subvencionada (si procede)",
      formacio: "Recibos de cursos/formación continua",
      pilar3a: "Certificado anual de la cuenta/póliza del Pilar 3a",
      einkauf: "Confirmación de rescate (Einkauf) de la caja de pensiones",
      assegurances: "Pólizas y recibos de seguro de salud/vida",
      guarderia: "Facturas de la guardería/canguro con NIF del proveedor",
      pensio: "Convenio o sentencia de pensión alimenticia",
      donacions: "Recibos/confirmaciones de donaciones",
      interessos: "Extractos de intereses de deuda (hipoteca, préstamos)",
      mediques: "Facturas médicas no reembolsadas por el seguro",
      comptes: "Extractos de todas las cuentas bancarias a 31/12",
      titols: "Listado de valores/acciones (Wertschriftenverzeichnis) si los tienes",
    },
    howToFileTitle: "📝 Cómo presentar la declaración, paso a paso",
    howToFile: [
      "1. Descarga el software oficial gratuito ZHprivateTax desde zh.ch, o utiliza el portal en línea ZHservices (eTax).",
      "2. Introduce los datos de tu Lohnausweis y el resto de documentos de la checklist casilla por casilla (usa la tabla de arriba como guía).",
      "3. El programa calcula automáticamente el impuesto cantonal y federal — revisa el resumen antes de enviarlo.",
      "4. Presenta la declaración antes del 31 de marzo, o solicita la prórroga gratuita en ZHservices si necesitas más tiempo.",
      "5. Guarda una copia firmada (digital o en papel) y todos los justificantes durante al menos 10 años, por si Hacienda solicita alguno.",
    ],
    export: {
      title: "Resumen fiscal orientativo — Cantón de Zúrich — Año fiscal {year}",
      generated: "Generado",
      estatCivil: "Estado civil",
      municipi: "Municipio",
      fills: "Hijos a cargo",
      ingressosBrutTotal: "Ingresos brutos totales",
      totalDeduccions: "Total deducciones estimadas",
      ingresImposable: "Ingreso imponible estimado",
      detailHeader: "--- Detalle deducciones ---",
      pauschal: "Berufsauslagen (fijo)",
      transport: "Fahrkosten (transporte)",
      dietes: "Verpflegungsmehrkosten (dietas)",
      formacio: "Weiterbildung (formación)",
      saule3a: "Säule 3a",
      einkauf: "Einkauf caja de pensiones",
      assegurances: "Seguros",
      guarderia: "Guardería",
      pensio: "Pensión alimenticia",
      kinderabzug: "Kinderabzug",
      donacions: "Donaciones",
      interessos: "Intereses de deuda",
      mediques: "Gastos médicos",
      footer: "Esta es una estimación orientativa. Verifica las cifras en el portal oficial zh.ch antes de presentar la declaración.",
    },
    confirmReset: "¿Seguro que quieres borrar todos los datos introducidos?",
  },

  glossary: [
    { de: "Lohnausweis", translation: "Certificado salarial", explanation: "Documento anual que la empresa te entrega con todos tus ingresos y deducciones en origen. Es la base de toda la declaración." },
    { de: "Steuererklärung", translation: "Declaración de impuestos", explanation: "El formulario anual (papel o ZHprivateTax) que debes presentar a Hacienda." },
    { de: "Berufskosten", translation: "Gastos profesionales", explanation: "Conjunto de gastos relacionados con el trabajo que se pueden deducir: transporte, dietas, formación, etc." },
    { de: "Pauschalabzug", translation: "Deducción fija", explanation: "Importe fijo (3% del salario, entre CHF 2'000 y 4'000) que se deduce sin necesidad de justificantes." },
    { de: "Fahrkosten", translation: "Gastos de transporte", explanation: "Coste del desplazamiento diario entre casa y el trabajo, deducible con límites." },
    { de: "Verpflegungsmehrkosten", translation: "Dietas / sobrecoste de comida", explanation: "Importe fijo por día cuando comes fuera de casa sin cantina subvencionada." },
    { de: "Weiterbildungskosten", translation: "Gastos de formación continua", explanation: "Cursos y formación relacionados con tu profesión actual o futura." },
    { de: "Säule 3a", translation: "Pilar 3a", explanation: "Previsión privada vinculada con ventaja fiscal; la aportación anual es 100% deducible hasta el máximo legal." },
    { de: "Pensionskasse", translation: "Caja/fondo de pensiones (2º pilar)", explanation: "Tu plan de pensiones profesional obligatorio, gestionado por la empresa." },
    { de: "Einkauf", translation: "Rescate / aportación voluntaria", explanation: "Aportación voluntaria a la caja de pensiones para cubrir lagunas de cotización; deducible el año en que la haces." },
    { de: "Versicherungsprämien", translation: "Primas de seguro", explanation: "Primas de salud y vida deducibles hasta un tope anual fijo." },
    { de: "Kinderbetreuungskosten", translation: "Gastos de guardería/cuidado de hijos", explanation: "Coste de guardería o canguro necesario para que puedas trabajar o estudiar." },
    { de: "Kinderabzug", translation: "Deducción por hijo", explanation: "Importe fijo que se deduce por cada hijo a cargo." },
    { de: "Spenden", translation: "Donaciones", explanation: "Donaciones a entidades reconocidas, deducibles por encima de un mínimo anual." },
    { de: "Schuldzinsen", translation: "Intereses de deuda", explanation: "Intereses (no el capital) de préstamos e hipotecas privadas." },
    { de: "Krankheitskosten", translation: "Gastos médicos", explanation: "Gastos de salud no reembolsados, deducibles por encima de una franquicia." },
    { de: "Sozialabzug", translation: "Deducción social/personal", explanation: "Deducciones generales aplicadas según el estado civil y las cargas familiares." },
    { de: "Steuerfuss", translation: "Multiplicador fiscal", explanation: "Porcentaje que el cantón y el municipio aplican sobre el impuesto base para calcular el impuesto final." },
    { de: "Quellensteuer", translation: "Retención en origen", explanation: "Impuesto retenido directamente de la nómina, aplicado a ciertos residentes extranjeros sin permiso C." },
    { de: "Wertschriftenverzeichnis", translation: "Listado de valores", explanation: "Inventario de cuentas, acciones y otros activos financieros a 31 de diciembre." },
  ],
};
