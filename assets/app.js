/* Assessor Fiscal Suís — Cantó de Zúric
 * Estimació orientativa. Xifres de referència per a l'any fiscal 2025 (ZH + Bundessteuer).
 * IMPORTANT: verificar sempre a zh.ch abans de presentar la declaració real.
 */

const TAX_YEAR = 2025;
const SUPPORTED_LANGS = ["ca","es","en","fr","de","it","el","pl","ru"];
const LANG_STORAGE_KEY = "swissTaxLang";

// Constants de deducció — cantó de Zúric (ZH) i impost federal directe (Bundessteuer).
// Es mantenen en un sol lloc perquè es puguin actualitzar fàcilment any rere any.
const CONST = {
  pauschalBerufskosten: {
    zhPct: 0.03, zhMin: 2000, zhMax: 4000,
    fedPct: 0.03, fedMin: 2000, fedMax: 4000,
  },
  fahrkostenFedMax: 3200,
  fahrkostenZhMax: 5000,

  dietaDiaSenseCantina: 15,
  dietaDiaAmbCantina: 7.5,
  dietaMaxAnySenseCantina: 3200,
  dietaMaxAnyAmbCantina: 1600,

  kmRate: 0.70,
  kmMaxAny: 6000,

  pilar3aAmbPK: 7258,
  pilar3aSensePK_pct: 0.20,
  pilar3aSensePK_max: 36288,

  assegurances: {
    zhSolter: 2700, zhCasat: 5550, zhPerFill: 700,
    fedSolter: 1800, fedCasat: 3600, fedPerFill: 700,
  },

  kinderabzug: { zh: 9300, fed: 6600 },

  guarderia: { zhMaxPerFill: 10100, fedMaxPerFill: 25000 },

  zweitverdienerFed: { min: 8600, maxPct: 0.5, max: 14100 },

  donacions: { minAny: 100, maxPctIngresNet: 0.20 },

  interessosDeuteExtra: 50000,

  despesesMediquesFranquiciaPct: 0.05,
};

const $ = (id) => document.getElementById(id);

const FIELDS = [
  "estatCivil","municipi","esglesia","numFills","dobleIngres",
  "salariBrut","salariBrutConjuge","altresIngressos",
  "costTransportPublic","usaCotxe","kmAny",
  "diesMenjarFora","teCantina","formacio","altresProfessionals",
  "tePensionskasse","pilar3a","einkaufPK","primaSalut","primaVida","interessosEstalvi",
  "despesesGuarderia","pensioAlimentaria",
  "donacions","interessosDeute","despesesMediques",
];

const STORAGE_KEY = "swissTaxZH_v1";

let currentLang = "ca";

// ---------- i18n ----------
function detectDefaultLang(){
  const nav = (navigator.language || "en").slice(0,2).toLowerCase();
  return SUPPORTED_LANGS.includes(nav) ? nav : "en";
}

function t(path, vars){
  const dict = (window.I18N && window.I18N[currentLang]) || {};
  const fallback = (window.I18N && window.I18N.en) || {};
  const raw = getPath(dict, path);
  const value = (raw === undefined || raw === null) ? getPath(fallback, path) : raw;
  const str = (value === undefined || value === null) ? path : value;
  return typeof str === "string" ? interpolate(str, vars) : str;
}

function getPath(obj, path){
  return path.split(".").reduce((o,k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function interpolate(str, vars){
  if(!vars) return str;
  return str.replace(/\{(\w+)\}/g, (m, key) => (vars[key] !== undefined ? vars[key] : m));
}

function applyI18n(){
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const path = el.getAttribute("data-i18n");
    const val = t(path);
    if(el.children.length === 0 || el.tagName === "OPTION"){
      el.textContent = val;
    } else {
      // element has child nodes (e.g. a <label> wrapping an <input>) — only replace the leading text node
      for(const node of el.childNodes){
        if(node.nodeType === Node.TEXT_NODE){
          node.textContent = val + " ";
          break;
        }
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });

  $("dataYearNote").textContent = " " + t("app.dataYearNote", {year: TAX_YEAR});

  ["perfil","ingressos","professionals","assegurances","familia","altres"].forEach(renderInfoPanel);
  renderGlossary();
  render();
}

function renderInfoPanel(section){
  const container = $("info-" + section);
  if(!container) return;
  const info = t(section + ".info");
  if(!Array.isArray(info)){ container.innerHTML = ""; return; }
  container.innerHTML = info.map(item => `
    <details class="info-item">
      <summary>${escapeHtml(item.h)}</summary>
      ${item.p ? `<p>${escapeHtml(item.p)}</p>` : ""}
      ${item.list ? `<ul>${item.list.map(li => `<li>${escapeHtml(li)}</li>`).join("")}</ul>` : ""}
    </details>
  `).join("");
}

function renderGlossary(){
  const container = $("glossaryContingut");
  if(!container) return;
  const rows = t("glossary");
  if(!Array.isArray(rows)){ container.innerHTML = ""; return; }
  container.innerHTML = `
    <table class="resum-table glossary-table">
      <tr><th>Deutsch</th><th>${escapeHtml(currentLangName())}</th><th></th></tr>
      ${rows.map(r => `<tr><td class="glossary-de">${escapeHtml(r.de)}</td><td><strong>${escapeHtml(r.translation)}</strong></td><td>${escapeHtml(r.explanation)}</td></tr>`).join("")}
    </table>
  `;
}

function currentLangName(){
  return (window.I18N[currentLang] && window.I18N[currentLang].meta && window.I18N[currentLang].meta.name) || currentLang;
}

function escapeHtml(s){
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

// ---------- State persistence ----------
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}

function saveState(){
  const state = {};
  FIELDS.forEach(id => {
    const el = $(id);
    if(!el) return;
    state[id] = el.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function applyState(state){
  FIELDS.forEach(id => {
    const el = $(id);
    if(el && state[id] !== undefined) el.value = state[id];
  });
}

function num(id){
  const el = $(id);
  if(!el) return 0;
  const v = parseFloat(el.value);
  return isNaN(v) ? 0 : v;
}
function str(id){
  const el = $(id);
  return el ? el.value : "";
}
function fmt(n){
  return "CHF " + Math.round(n).toLocaleString("de-CH");
}

// ---------- Tabs ----------
function setupTabs(){
  const btns = document.querySelectorAll(".tab-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      $("panel-" + btn.dataset.tab).classList.add("active");
    });
  });
}

// ---------- Calculation ----------
function calcDeduccions(){
  const casat = str("estatCivil") === "casat";
  const nFills = num("numFills");

  const salariTotal = num("salariBrut") + (casat ? num("salariBrutConjuge") : 0);
  const salariDeclarant = num("salariBrut");
  const pauschalZh = clamp(salariDeclarant * CONST.pauschalBerufskosten.zhPct, CONST.pauschalBerufskosten.zhMin, CONST.pauschalBerufskosten.zhMax);
  const pauschalFed = clamp(salariDeclarant * CONST.pauschalBerufskosten.fedPct, CONST.pauschalBerufskosten.fedMin, CONST.pauschalBerufskosten.fedMax);
  const pauschalBerufskosten = Math.max(pauschalZh, pauschalFed);

  let transportRaw = 0;
  if(str("usaCotxe") === "si"){
    transportRaw = Math.min(num("kmAny") * CONST.kmRate, CONST.kmMaxAny);
  } else {
    transportRaw = num("costTransportPublic");
  }
  const transport = Math.min(transportRaw, CONST.fahrkostenZhMax);
  const transportFedDeductible = Math.min(transportRaw, CONST.fahrkostenFedMax);

  const ambCantina = str("teCantina") === "si";
  const dietaDia = ambCantina ? CONST.dietaDiaAmbCantina : CONST.dietaDiaSenseCantina;
  const dietaMaxAny = ambCantina ? CONST.dietaMaxAnyAmbCantina : CONST.dietaMaxAnySenseCantina;
  const dietes = Math.min(num("diesMenjarFora") * dietaDia, dietaMaxAny);

  const formacio = num("formacio");
  const altresProf = num("altresProfessionals");

  const totalProfessionals = pauschalBerufskosten + transport + dietes + formacio + altresProf;

  const pilar3aMax = str("tePensionskasse") === "si"
    ? CONST.pilar3aAmbPK
    : Math.min(salariDeclarant * CONST.pilar3aSensePK_pct, CONST.pilar3aSensePK_max);
  const pilar3aAportat = num("pilar3a");
  const pilar3aDeduible = Math.min(pilar3aAportat, pilar3aMax);
  const pilar3aExces = Math.max(0, pilar3aAportat - pilar3aMax);
  const einkaufPK = num("einkaufPK");

  const primaAssegurances = num("primaSalut") + num("primaVida");
  const sostreAsseg = (casat ? CONST.assegurances.zhCasat : CONST.assegurances.zhSolter)
    + nFills * CONST.assegurances.zhPerFill;
  const assegurancesDeduible = Math.min(primaAssegurances, sostreAsseg);
  const interessosEstalvi = num("interessosEstalvi");

  const guarderia = Math.min(num("despesesGuarderia"), CONST.guarderia.zhMaxPerFill * Math.max(nFills,1));
  const pensioAlimentaria = num("pensioAlimentaria");
  const kinderabzugTotal = nFills * CONST.kinderabzug.zh;

  const ingresNetAprox = Math.max(0, salariTotal + num("altresIngressos") - totalProfessionals - pilar3aDeduible - assegurancesDeduible);
  const donacionsInput = num("donacions");
  const donacionsDeduible = donacionsInput >= CONST.donacions.minAny
    ? Math.min(donacionsInput, ingresNetAprox * CONST.donacions.maxPctIngresNet)
    : 0;
  const interessosDeute = num("interessosDeute");
  const despesesMediquesInput = num("despesesMediques");
  const franquiciaMediques = ingresNetAprox * CONST.despesesMediquesFranquiciaPct;
  const despesesMediquesDeduible = Math.max(0, despesesMediquesInput - franquiciaMediques);

  const totalDeduccions = totalProfessionals + pilar3aDeduible + einkaufPK + assegurancesDeduible
    + guarderia + pensioAlimentaria + kinderabzugTotal + donacionsDeduible
    + interessosDeute + despesesMediquesDeduible;

  const ingressosBrutTotal = salariTotal + num("altresIngressos");
  const imposableEstimat = Math.max(0, ingressosBrutTotal - totalDeduccions);

  return {
    casat, nFills, salariTotal, ingressosBrutTotal,
    pauschalBerufskosten, transport, transportFedDeductible, dietes, dietaDia, formacio, altresProf, totalProfessionals,
    pilar3aMax, pilar3aAportat, pilar3aDeduible, pilar3aExces, einkaufPK,
    primaAssegurances, sostreAsseg, assegurancesDeduible, interessosEstalvi,
    guarderia, pensioAlimentaria, kinderabzugTotal,
    donacionsDeduible, interessosDeute, despesesMediquesDeduible,
    totalDeduccions, imposableEstimat,
  };
}

function clamp(v, min, max){
  return Math.min(Math.max(v, min), max);
}

// ---------- Render ----------
function render(){
  const c = calcDeduccions();

  $("totIngressos").textContent = fmt(c.ingressosBrutTotal);
  $("totDeduccions").textContent = fmt(c.totalDeduccions);
  $("totImposable").textContent = fmt(c.imposableEstimat);

  const items = [
    [t("sidebar.despProfessionals"), c.totalProfessionals],
    [t("resum.export.saule3a"), c.pilar3aDeduible],
    [t("resum.export.einkauf"), c.einkaufPK],
    [t("resum.export.assegurances"), c.assegurancesDeduible],
    [t("resum.export.guarderia"), c.guarderia],
    [t("resum.export.pensio"), c.pensioAlimentaria],
    [t("resum.export.kinderabzug"), c.kinderabzugTotal],
    [t("resum.export.donacions"), c.donacionsDeduible],
    [t("resum.export.interessos"), c.interessosDeute],
    [t("resum.export.mediques"), c.despesesMediquesDeduible],
  ];
  $("desglossList").innerHTML = items
    .filter(([,v]) => v > 0)
    .map(([label, v]) => `<li><span>${escapeHtml(label)}</span><strong>${fmt(v)}</strong></li>`)
    .join("") || `<li><span>${escapeHtml(t("sidebar.empty"))}</span></li>`;

  renderResum(c);
}

function renderResum(c){
  const avisPilar3a = c.pilar3aExces > 0
    ? `<p class="hint">${escapeHtml(t("resum.avisPilar3a", {aportat: fmt(c.pilar3aAportat), max: fmt(c.pilar3aMax), exces: fmt(c.pilar3aExces)}))}</p>`
    : "";

  const avisTransport = (c.transport > CONST.fahrkostenFedMax)
    ? `<p class="hint">${escapeHtml(
        c.transport > CONST.fahrkostenZhMax
          ? t("resum.avisTransportZhCap", {fedMax: fmt(CONST.fahrkostenFedMax), zhMax: fmt(CONST.fahrkostenZhMax)})
          : t("resum.avisTransportZhReal", {fedMax: fmt(CONST.fahrkostenFedMax), real: fmt(c.transport), zhMax: fmt(CONST.fahrkostenZhMax)})
      )}</p>`
    : "";

  const checklist = buildChecklist(c);
  const rows = t("resum.rows");
  const howTo = t("resum.howToFile");

  $("resumContingut").innerHTML = `
    <div class="resum-section">
      <h3>${escapeHtml(t("resum.xifresClauTitle", {year: TAX_YEAR}))}</h3>
      <table class="resum-table">
        <tr><th>${escapeHtml(t("resum.conceptCol"))}</th><th>${escapeHtml(t("resum.importCol"))}</th></tr>
        <tr><td>${escapeHtml(t("resum.ingressosBrutTotal"))}</td><td>${fmt(c.ingressosBrutTotal)}</td></tr>
        <tr><td>${escapeHtml(t("resum.totalDeduccionsEst"))}</td><td>${fmt(c.totalDeduccions)}</td></tr>
        <tr><td><strong>${escapeHtml(t("resum.ingresImposableEst"))}</strong></td><td><strong>${fmt(c.imposableEstimat)}</strong></td></tr>
      </table>
      ${avisPilar3a}
      ${avisTransport}
    </div>

    <div class="resum-section">
      <h3>${escapeHtml(t("resum.detallTitle"))}</h3>
      <table class="resum-table">
        <tr><th>${escapeHtml(t("resum.casellaCol"))}</th><th>${escapeHtml(t("resum.importDeclararCol"))}</th></tr>
        <tr><td>${escapeHtml(rows.berufsauslagen)}</td><td>${fmt(c.pauschalBerufskosten)}</td></tr>
        <tr><td>${escapeHtml(rows.fahrkosten)}</td><td>${fmt(c.transport)}</td></tr>
        <tr><td>${escapeHtml(rows.verpflegung)}</td><td>${fmt(c.dietes)}</td></tr>
        <tr><td>${escapeHtml(rows.weiterbildung)}</td><td>${fmt(c.formacio)}</td></tr>
        <tr><td>${escapeHtml(rows.saule3a)}</td><td>${fmt(c.pilar3aDeduible)}</td></tr>
        <tr><td>${escapeHtml(rows.versicherung)}</td><td>${fmt(c.assegurancesDeduible)}</td></tr>
        <tr><td>${escapeHtml(rows.kinderbetreuung)}</td><td>${fmt(c.guarderia)}</td></tr>
        <tr><td>${escapeHtml(interpolate(rows.kinderabzug, {n: c.nFills}))}</td><td>${fmt(c.kinderabzugTotal)}</td></tr>
        <tr><td>${escapeHtml(rows.spenden)}</td><td>${fmt(c.donacionsDeduible)}</td></tr>
        <tr><td>${escapeHtml(rows.schuldzinsen)}</td><td>${fmt(c.interessosDeute)}</td></tr>
        <tr><td>${escapeHtml(rows.krankheit)}</td><td>${fmt(c.despesesMediquesDeduible)}</td></tr>
      </table>
    </div>

    <div class="resum-section">
      <h3>${escapeHtml(t("resum.checklistTitle"))}</h3>
      <ul class="checklist">${checklist}</ul>
    </div>

    <div class="resum-section">
      <h3>${escapeHtml(t("resum.howToFileTitle"))}</h3>
      <ol class="howto-list">${Array.isArray(howTo) ? howTo.map(s => `<li>${escapeHtml(s)}</li>`).join("") : ""}</ol>
    </div>
  `;

  document.querySelectorAll(".checklist input[type=checkbox]").forEach(cb => {
    const key = "chk_" + cb.dataset.key;
    cb.checked = localStorage.getItem(key) === "1";
    cb.addEventListener("change", () => {
      localStorage.setItem(key, cb.checked ? "1" : "0");
    });
  });
}

function buildChecklist(c){
  const cl = t("resum.checklist");
  const items = [
    ["lohnausweis", cl.lohnausweis, true],
    ["abonament", cl.abonament, c.transport > 0],
    ["dietes", cl.dietes, c.dietes > 0],
    ["formacio", cl.formacio, c.formacio > 0],
    ["pilar3a", cl.pilar3a, c.pilar3aDeduible > 0],
    ["einkauf", cl.einkauf, c.einkaufPK > 0],
    ["assegurances", cl.assegurances, c.assegurancesDeduible > 0],
    ["guarderia", cl.guarderia, c.guarderia > 0],
    ["pensio", cl.pensio, c.pensioAlimentaria > 0],
    ["donacions", cl.donacions, c.donacionsDeduible > 0],
    ["interessos", cl.interessos, c.interessosDeute > 0],
    ["mediques", cl.mediques, c.despesesMediquesDeduible > 0],
    ["comptes", cl.comptes, true],
    ["titols", cl.titols, true],
  ];
  return items
    .filter(([,,show]) => show)
    .map(([key, label]) => `<li><input type="checkbox" data-key="${key}"> ${escapeHtml(label)}</li>`)
    .join("");
}

// ---------- Export ----------
function exportSummary(){
  const c = calcDeduccions();
  const ex = t("resum.export");
  const lines = [
    interpolate(ex.title, {year: TAX_YEAR}),
    `${ex.generated}: ${new Date().toLocaleDateString(currentLang)}`,
    "",
    `${ex.estatCivil}: ${str("estatCivil")}`,
    `${ex.municipi}: ${str("municipi") || "-"}`,
    `${ex.fills}: ${num("numFills")}`,
    "",
    `${ex.ingressosBrutTotal}: ${fmt(c.ingressosBrutTotal)}`,
    `${ex.totalDeduccions}: ${fmt(c.totalDeduccions)}`,
    `${ex.ingresImposable}: ${fmt(c.imposableEstimat)}`,
    "",
    ex.detailHeader,
    `${ex.pauschal}: ${fmt(c.pauschalBerufskosten)}`,
    `${ex.transport}: ${fmt(c.transport)}`,
    `${ex.dietes}: ${fmt(c.dietes)}`,
    `${ex.formacio}: ${fmt(c.formacio)}`,
    `${ex.saule3a}: ${fmt(c.pilar3aDeduible)}`,
    `${ex.einkauf}: ${fmt(c.einkaufPK)}`,
    `${ex.assegurances}: ${fmt(c.assegurancesDeduible)}`,
    `${ex.guarderia}: ${fmt(c.guarderia)}`,
    `${ex.pensio}: ${fmt(c.pensioAlimentaria)}`,
    `${ex.kinderabzug}: ${fmt(c.kinderabzugTotal)}`,
    `${ex.donacions}: ${fmt(c.donacionsDeduible)}`,
    `${ex.interessos}: ${fmt(c.interessosDeute)}`,
    `${ex.mediques}: ${fmt(c.despesesMediquesDeduible)}`,
    "",
    ex.footer,
  ];
  const blob = new Blob([lines.join("\n")], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `resum-fiscal-zh-${TAX_YEAR}-${currentLang}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

function resetAll(){
  if(!confirm(t("resum.confirmReset"))) return;
  localStorage.removeItem(STORAGE_KEY);
  FIELDS.forEach(id => {
    const el = $(id);
    if(!el) return;
    if(el.tagName === "SELECT") el.selectedIndex = 0;
    else el.value = "";
  });
  render();
}

function setLang(lang){
  if(!SUPPORTED_LANGS.includes(lang)) lang = "en";
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  $("langSwitcher").value = lang;
  applyI18n();
}

// ---------- Init ----------
function init(){
  currentLang = localStorage.getItem(LANG_STORAGE_KEY) || detectDefaultLang();
  setupTabs();
  applyState(loadState());
  FIELDS.forEach(id => {
    const el = $(id);
    if(el) el.addEventListener("input", saveState);
  });
  $("btnExport").addEventListener("click", exportSummary);
  $("btnReset").addEventListener("click", resetAll);
  $("langSwitcher").addEventListener("change", (e) => setLang(e.target.value));
  setLang(currentLang);
}

document.addEventListener("DOMContentLoaded", init);
