const readyPageIds = ['prevention', 'incendie', 'evenementiel', 'cynophile'];
const readyDebt = "La dette publique désigne l'ensemble des emprunts contractés par les administrations";
const readyDebtLong = "La dette publique désigne l'ensemble des emprunts contractés par les administrations publiques (l'État, les collectivités territoriales, la Sécurité sociale) pour financer leurs dépenses.";
const readyErp = "Commerces, hôtels, salle de spectacles, établissements d’enseignement : la présence d’agents qualifiés peut être exigée selon la catégorie";

function readyHeader(active) {
  const tabs = [
    ['prevention', 'Sécurité & prévention', 'metiers'],
    ['incendie', 'Sécurité incendie', 'metiers/incendie'],
    ['evenementiel', 'Sécurité événementiels', 'metiers/evenementiel'],
    ['cynophile', 'Agent Cynophile', 'metiers/cynophile']
  ];
  return `<header class="ready-header"><a class="ready-brand" href="#/" aria-label="YD Securite, accueil"><img src="assets/yd-logo.png" width="48" height="48" alt=""><span>YD SECURITE</span></a><nav class="ready-main-nav" aria-label="Navigation principale"><a class="active" href="#/metiers">Nos métiers</a><a href="#/approche">Notre approche</a><a href="#/references">Références</a><a href="#/histoire">Notre histoire</a><a href="#/formation">Recrutement</a></nav><a class="ready-contact" href="#/contact">Parlons de votre besoin</a></header><nav class="ready-tabs" aria-label="Nos métiers"><div>${tabs.map(([id,label,route])=>`<a href="#/${route}" ${id===active?'aria-current="page"':''}>${label}</a>`).join('')}</div></nav>`;
}

function readyHero(title) {
  return `<section class="ready-hero"><div class="ready-container"><h1>${title}</h1><p>Distinguez les niveaux de mission, puis échangeons sur votre établissement.</p></div></section>`;
}

function readyCta() {
  return `<section class="ready-cta"><div class="ready-cta-inner"><h2>Chaque situation<br>mérite d’être<br>comprise.</h2><p>Décrivez-nous votre contexte. Nous définirons<br>ensemble le besoin.</p><a href="#/contact">Parlons de votre besoin →</a></div></section>`;
}

function readyFooter() {
  const discover = `<div><span>Découvrir</span><a href="#/metiers">Nos métiers</a><a href="#/approche">Notre approche</a><a href="#/references">Références & cas clients</a><a href="#/histoire">Notre histoire</a></div>`;
  const exchange = `<div><span>Échanger</span><a href="#/contact">Contact / demande de devis</a><a href="#/formation">Rejoindre l’équipe</a><a href="#/contact?objet=partenariat">Proposer un partenariat</a><a href="#/plan">Plan du site & notes</a></div>`;
  const legal = `<div><span>Mentions légales</span><a href="#/mentions-legales">Informations légales</a><a href="#/confidentialite">Politique de confidentialité</a><a href="#/cookies">Politique cookies</a><a href="#/signalement-securite">Divulgation responsable</a></div>`;
  return `<footer class="ready-footer"><div class="ready-footer-inner"><div class="ready-footer-brand"><a class="ready-brand" href="#/"><img src="assets/yd-logo.png" width="68" height="68" alt=""><span>YD SECURITE</span></a><p>Une entreprise familiale.<br>Plus de 30 ans d’expérience à vos côtés.</p><p>Interventions étudiées selon votre site et votre zone géographique.</p></div>${discover}${exchange}${legal}</div></footer>`;
}

function readyGray(className='') {
  return `<div class="ready-gray ${className}" aria-hidden="true"></div>`;
}

function readyAccordion() {
  return `<section class="ready-accordion-section"><div class="ready-container ready-accordion-layout"><h2>Une présence adaptée à la vie de votre site</h2><div class="ready-accordion">${[0,1,2,3,4].map((_,i)=>`<details ${i===0?'open':''}><summary>Sécurité Incendie</summary><p>${readyDebtLong}</p></details>`).join('')}</div></div></section>`;
}

function readyEvent() {
  return `<section class="ready-event-phases"><div class="ready-container"><div class="ready-section-heading"><h2>Chaque événement est<br>unique. Le dispositif aussi.</h2><p>Un concert, un salon et une soirée d’entreprise ne demandent ni la même présence, ni la même organisation. Notre mission se déroule en trois temps.</p></div><div class="ready-three-columns">${['Avant','Pendant','Après'].map(label=>`<article><h3>${label}</h3><p>${readyDebt}</p></article>`).join('')}</div></div></section>
  <section class="ready-event-journey"><div class="ready-container"><div class="ready-section-heading"><h2>La parcours du public,<br>de l’arrivée à la sortie.</h2><p>${readyDebt}</p></div>${readyGray('ready-wide-gray')}<div class="ready-five-columns">${Array.from({length:5},()=>`<article><h3>Arrivée &<br>Attente</h3><p>${readyDebt}</p></article>`).join('')}</div></div></section>${readyAccordion()}`;
}

function readySsiap() {
  const missions = ['Ronde de préventions et de surveillances','Sensibilisation des occupants','Accueil et guidage des secours','Première intervention et assistance aux personnes','Exploitation du poste de sécurité'];
  return `<section class="ready-fire-ssiap"><div class="ready-container"><h2>SSIAP 1, 2, 3 : Quel niveau pour quelle mission ?</h2><div class="ready-three-columns">${Array.from({length:3},()=>`<article><h3>SSIAP 1</h3><h4>Agent de sécurité incendie</h4><div><strong>Role</strong><p>Assurer la présence opérationnelle au quotidien.</p></div><div><strong>Missions</strong><ul>${missions.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><strong>Adapté A</strong><p>Bâtiments occupés nécessitant une présence permanente ou ponctuelle d’agents formés.</p></div></article>`).join('')}</div></div></section>`;
}

function readyFire() {
  return `<section class="ready-fire-intro"><div class="ready-container"><h2>Un incendie se prépare<br>avant de se déclarer</h2><div class="ready-three-columns">${Array.from({length:3},()=>`<article><h3>Établissement recevant du public (ERP)</h3><p>${readyErp}</p></article>`).join('')}</div></div></section>${readySsiap()}
  <section class="ready-fire-post"><div class="ready-container ready-two-columns">${readyGray()}<div><h2>Le poste de sécurité, centre<br>de la vigilance.</h2><p>${readyDebtLong}</p><p>${readyDebtLong}</p></div></div></section>
  <section class="ready-fire-buildings"><div class="ready-container"><div class="ready-section-heading"><h2>Quels bâtiments sont<br>concernés ?</h2><p>Distinguez les niveaux de mission, puis échangeons sur votre établissement.</p></div><div class="ready-building-grid">${['Établissement recevant du public (ERP)','Immeuble de grande hauteur (IGH)','Établissement recevant du public (ERP)','Établissement recevant du public (ERP)','Établissement recevant du public (ERP)'].map(x=>`<article><h3>${x}</h3><p>${readyErp}</p></article>`).join('')}</div></div></section>${readyAccordion()}`;
}

function readyPrevention() {
  const agentLabels=['Accueil & orientation','Accueil & orientation','Surveillance des locaux','Accueil & orientation','Accueil & orientation','Accueil & orientation'];
  return `<section class="ready-prevention-intro"><div class="ready-container"><div class="ready-section-heading"><h2>Une présence adaptée à la<br>vie de votre site</h2><p>La sécurité et prévention repose sur un principe simple : être là au bon moment, au bon endroit avec la bonne posture.</p></div><div class="ready-two-columns">${readyGray()}<div><p>${readyDebtLong}</p><p>${readyDebtLong}</p><p>${readyDebtLong}</p></div></div></div></section>
  <section class="ready-prevention-agent"><div class="ready-container"><div class="ready-section-heading"><h2>Ce que fait l’agent au<br>quotidien</h2><p>${readyDebt}</p></div><div class="ready-two-columns">${readyGray()}<div class="ready-agent-grid">${agentLabels.map(x=>`<article><h3>${x}</h3><p>${readyDebt}</p></article>`).join('')}</div></div></div></section>
  <section class="ready-prevention-journey"><div class="ready-container"><div class="ready-section-heading"><h2>La parcours du public,<br>de l’arrivée à la sortie.</h2><p>${readyDebt}</p></div>${readyGray('ready-wide-gray')}<div class="ready-four-columns">${Array.from({length:4},()=>`<article><h3>Accueil & orientation</h3><p>${readyDebt}</p></article>`).join('')}</div></div></section>${readyAccordion()}`;
}

function readyCynophile() {
  const short = "La dette publique désigne l'ensemble.";
  const bullets = count => `<ul>${Array.from({length:count},()=>`<li>${short}</li>`).join('')}</ul>`;
  const lines = count => `<p>${Array.from({length:count},()=>short).join('<br>')}</p>`;
  const heading = (title, description) => `<div class="ready-section-heading"><h2>${title}</h2><p>${description}</p></div>`;
  return `<section class="ready-cyno-intro"><div class="ready-container">${heading('Une présence adaptée à la<br>vie de votre site','La sécurité et prévention repose sur un principe simple : être là au bon moment, au bon endroit avec la bonne posture.')}<div class="ready-two-columns">${readyGray()}<div class="ready-cyno-contributions"><article><h3>L’agent apporte</h3>${bullets(4)}</article><article><h3>Le chien apporte</h3>${bullets(4)}</article></div></div></div></section>
  <section class="ready-cyno-effects"><div class="ready-container">${heading('Trois effets sur la sécurité<br>de votre site',readyDebt)}<div class="ready-three-columns">${['Dissuader','Détecter','Appuyer'].map(label=>`<article><h3>${label}</h3><p>${readyDebt}</p></article>`).join('')}</div></div></section>
  <section class="ready-cyno-hours"><div class="ready-container">${heading('Un dispositif qui s’adapte à<br>l’heure.','Un concert, un salon et une soirée d’entreprise ne demandent ni la même présence, ni la même organisation. Notre mission se déroule en trois temps.')}<div class="ready-two-columns">${['De jour','De nuit'].map(label=>`<article><h3>${label}</h3>${bullets(4)}</article>`).join('')}</div></div></section>
  <section class="ready-cyno-choice"><div class="ready-container">${heading('Quand privilégier un<br>binôme cynophile ?','Un concert, un salon et une soirée d’entreprise ne demandent ni la même présence, ni la même organisation. Notre mission se déroule en trois temps.')}<div class="ready-two-columns">${['Un binôme particulièrement adapté','Un autre dispositif souvent plus flexible'].map(label=>`<article><h3>${label}</h3>${lines(4)}</article>`).join('')}</div></div></section>
  <section class="ready-cyno-welfare"><div class="ready-container ready-two-columns"><div><h2>Le bien-être du chien fait<br>partie du dispositif.</h2><article><h3>Accueil & orientation</h3><p>${readyDebt}</p>${bullets(4)}</article></div>${readyGray()}</div></section>
  <section class="ready-cyno-faq"><div class="ready-container ready-accordion-layout"><h2>Vos questions, nos<br>réponses</h2><div class="ready-accordion">${Array.from({length:5},(_,i)=>`<details ${i===0?'open':''}><summary>Sécurité Incendie</summary><p>${readyDebtLong}</p>${i===0?'<a href="#/contact">Échanger sur ce besoin ↗</a>':''}</details>`).join('')}</div></div></section>`;
}

function readyService(id) {
  const titles={prevention:'Sécurité & Prévention',incendie:'Sécurité incendie',evenementiel:'Sécurité événementiel',cynophile:'Agent Cynophile'};
  const content={prevention:readyPrevention,incendie:readyFire,evenementiel:readyEvent,cynophile:readyCynophile};
  if(!content[id])return '';
  return `<div class="ready-page ready-${id}">${readyHeader(id)}${readyHero(titles[id])}<div class="ready-content">${content[id]()}</div>${readyCta()}${readyFooter()}</div>`;
}

