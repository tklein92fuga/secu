/* Parcours contact / devis et candidature : maquettes finales HiFi (cadre 1440 px). */
ydTabs.contact = [['contact','Un besoin / un devis'],['contact?objet=question','Une question'],['contact?objet=partenariat','Un partenariat']];

const ydCtLead = 'Expliquez-nous votre situation. <br>L’échange permettra de préciser la réponse et de préparer, si nécessaire, un devis.';
const ydCtAside = `<aside class="yd-ct-aside"><h2>Et ensuite ?</h2><h3>Un échange avant une proposition.</h3><ol><li>Comprendre le contexte et les contraintes</li><li>Préciser le besoin ensemble</li><li>Proposer un dispositif adapté</li></ol><p>Vous n’avez pas à déterminer seul le nombre d’agents.</p></aside>`;
const ydCtEsc = v => String(v ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function ydCtFrame(active, title, box, aside, extra = '') {
  return ydShell(active, 'contact', `<div class="yd-ct ${extra}"><section class="yd-ct-title"><h1>${title}</h1><p>${ydCtLead}</p></section><div class="yd-ct-layout"><div class="yd-ct-box">${box}</div>${aside}</div></div>`);
}

function ydCtField(name, label, opts = {}) {
  const {type = 'text', required = false, placeholder = '', area = false, auto = ''} = opts;
  const attrs = `name="${name}" ${required ? 'required' : ''} ${placeholder ? `placeholder="${placeholder}"` : ''} ${auto ? `autocomplete="${auto}"` : ''}`;
  const control = area ? `<textarea ${attrs}>${ydCtEsc(draft[name])}</textarea>` : `<input type="${type}" ${attrs} value="${ydCtEsc(draft[name])}">`;
  return `<label class="yd-ct-field"><span>${label}${required ? ' *' : ''}</span>${control}</label>`;
}

function ydCtProgress() {
  return `<ol class="yd-ct-progress" aria-label="Progression">${['Situation','Votre besoin','Coordonnées'].map((label, i) => {
    const n = i + 1, state = n < stage ? 'is-done' : n === stage ? 'is-current' : '';
    return `<li class="${state}" ${n === stage ? 'aria-current="step"' : ''}>0${n} · ${label}</li>`;
  }).join('')}</ol>`;
}

const ydCtHints = {site:'Locaux, commerce, site occupé ou fermé',evenement:'Accueil, accès et flux du public',incendie:'Établissement, équipe ou organisation',incertain:'Explorons ensemble votre contexte'};

function ydCtStep() {
  if (stage === 1) return `<fieldset class="yd-ct-step yd-ct-step-1"><legend>Quelle est votre situation ?</legend><p class="yd-ct-sub">Pas besoin de connaître le nombre d’agents ou le métier adapté.</p><div class="yd-ct-choices">${Object.entries(needLabels).map(([v, l]) => `<label class="yd-ct-choice"><input type="radio" name="need" value="${v}" required ${draft.need === v ? 'checked' : ''}><span><strong>${l}</strong><small>${ydCtHints[v]}</small></span></label>`).join('')}</div></fieldset>`;
  if (stage === 2) {
    const ev = draft.need === 'evenement', fire = draft.need === 'incendie', site = draft.need === 'site';
    const specific = ev ? ydCtField('attendance', 'Public attendu (ordre de grandeur)', {required: true, placeholder: 'Ex. environ 3000 personnes'})
      : fire ? ydCtField('building', 'Type d’établissement', {required: true, placeholder: 'Ex. bureaux, hôtel, lieu recevant du public'})
      : site ? `<label class="yd-ct-field"><span>Quand avez-vous besoin d’une présence ?</span><select name="frequency">${['À préciser ensemble','En journée','La nuit / pendant la fermeture','Jour et nuit','Ponctuellement'].map(x => `<option ${draft.frequency === x ? 'selected' : ''}>${x}</option>`).join('')}</select></label>` : '';
    return `<fieldset class="yd-ct-step yd-ct-step-2"><legend>Parlez-nous de votre ${ev ? 'événement' : 'contexte'}</legend><p class="yd-ct-sub">champs * obligatoires.</p>${ydCtField('place', ev ? 'Lieu/ville de l’événement' : 'Lieu/ville du site', {required: true, auto: 'address-level2'})}${specific}${ydCtField('timing', ev ? 'Date(s) et horaires envisagés' : 'Période / échéance envisagée', {placeholder: 'À préciser si vous ne savez pas encore'})}${ydCtField('detail', ev ? 'Votre événement, ses accès et ses contraintes' : fire ? 'Votre organisation actuelle et ce qui vous amène à nous contacter' : 'Ce que vous souhaitez protéger ou améliorer', {area: true, placeholder: 'Décrivez la situation, les usages du lieu et vos principales attentes'})}<p class="yd-ct-note">Le dispositif et les effectifs seront évalués avec vous, après cet échange.</p></fieldset>`;
  }
  const extra = draft.need === 'evenement' ? [['Public', draft.attendance || 'À préciser']] : draft.need === 'incendie' ? [['Établissement', draft.building || 'À préciser']] : draft.need === 'site' ? [['Présence', draft.frequency || 'À préciser ensemble']] : [];
  const rows = [['Situation', needLabels[draft.need] || 'À préciser'], ['Lieu', draft.place || 'Lieu à préciser'], ['Période', draft.timing || 'À préciser'], ...extra, ['Contexte', draft.detail || 'Contexte de la demande à compléter']];
  return `<fieldset class="yd-ct-step yd-ct-step-3"><legend>Comment vous recontacter ?</legend><p class="yd-ct-sub">Vérifiez votre demande puis indiquez vos coordonnées fictives</p><details class="yd-ct-recap" ${ydCtRecapOpen ? 'open' : ''}><summary>Récapitulatif de votre besoin</summary><dl>${rows.map(([k, v]) => `<div><dt>${k}&nbsp;:</dt><dd>${ydCtEsc(v)}</dd></div>`).join('')}</dl></details><button class="yd-ct-edit" type="button" data-back="2">Modifier mon besoin</button><div class="yd-ct-pair">${ydCtField('name', 'Nom et prénom', {required: true, auto: 'name'})}${ydCtField('company', 'Entreprise / organisation', {auto: 'organization'})}</div>${ydCtField('email', 'Adresse e-mail', {type: 'email', required: true, auto: 'email'})}${ydCtField('phone', 'Téléphone (facultatif)', {type: 'tel', auto: 'tel'})}</fieldset>`;
}
let ydCtRecapOpen = true;

function ydCtSimple() {
  const partner = contactMode === 'partenariat';
  return `<form class="yd-ct-form yd-ct-simple" id="simplecontact"><fieldset class="yd-ct-step"><legend>${partner ? 'Proposer un partenariat' : 'Poser une question'}</legend><p class="yd-ct-sub">champs * obligatoires.</p><div class="yd-ct-pair">${ydCtField('name', 'Nom et prénom', {required: true, auto: 'name'})}${ydCtField('company', 'Entreprise / organisation', {required: partner, auto: 'organization'})}</div>${ydCtField('email', 'Adresse e-mail', {type: 'email', required: true, auto: 'email'})}${ydCtField('message', partner ? 'Votre proposition' : 'Votre question', {area: true, required: true, placeholder: partner ? 'Présentez votre structure et le partenariat envisagé' : 'Écrivez votre question'})}</fieldset><div class="yd-ct-actions"><button class="yd-ct-btn" type="submit">Envoyer le message →</button></div></form>`;
}

ydContact = function (query) {
  if (query) {
    const objet = query.get('objet');
    contactMode = objet === 'partenariat' ? 'partenariat' : objet === 'question' ? 'question' : 'devis';
    const need = query.get('besoin');
    if (need && needLabels[need] && draft.need !== need) { draft = initial(); draft.need = need; stage = 1; }
  }
  const active = contactMode === 'devis' ? 'contact' : 'contact?objet=' + contactMode;
  if (contactMode !== 'devis') return ydCtFrame(active, 'Parlons de votre besoin', ydCtSimple(), ydCtAside);
  const actions = `<div class="yd-ct-actions">${stage > 1 ? `<button class="yd-ct-btn is-ghost" type="button" data-back="${stage - 1}">Retour</button>` : ''}<button class="yd-ct-btn" type="submit">${stage === 3 ? 'Terminer le formulaire →' : 'Continuer →'}</button></div>`;
  return ydCtFrame(active, 'Parlons de votre besoin', `<form class="yd-ct-form yd-ct-form-${stage}" id="contactform">${ydCtProgress()}${ydCtStep()}${actions}</form>`, ydCtAside);
};

function ydCtStatus(kind, back = 'contact') {
  const error = kind === 'erreur';
  return `<div class="yd-ct-status ${error ? 'is-error' : ''}" role="${error ? 'alert' : 'status'}"><h2>${error ? '<span class="yd-ct-ico" aria-hidden="true">×</span>Il y a un souci' : '<span class="yd-ct-ico" aria-hidden="true">✓</span>Message envoyé'}</h2><p>${error ? 'Votre demande n’a pas pu être envoyée. Vérifiez votre connexion puis refaites la demande.' : 'Merci, votre message sera traité par nos équipes le plus rapidement possible.'}</p></div><div class="yd-ct-actions"><a class="yd-ct-btn is-ghost" href="#/${back}">Retour</a>${error ? `<a class="yd-ct-btn" href="#/${back}">Refaire la demande →</a>` : '<a class="yd-ct-btn" href="#/">Retour à l’accueil →</a>'}</div>`;
}

ydConfirmation = function () {
  const state = new URLSearchParams(location.hash.split('?')[1] || '').get('etat') === 'erreur' ? 'erreur' : 'envoye';
  const active = confirmation === 'message' && contactMode !== 'devis' ? 'contact?objet=' + contactMode : 'contact';
  return ydCtFrame(active, 'Parlons de votre besoin', ydCtStatus(state, active), ydCtAside, 'yd-ct-done');
};

/* Candidature : formulaire existant, état « envoyé » de la maquette finale. */
let ydCandState = 'form';
const ydCandAside = `<aside class="yd-ct-aside yd-ct-aside-cand"><h2>Avant de candidater</h2><p>Découvrez les métiers et la manière dont les équipes sont accompagnées.</p><div class="yd-ct-todo"><p>À compléter : critères de recrutement, qualifications demandées, zone géographique et traitement des candidatures.</p></div><a href="#/approche/humain">L’accompagnement humain →</a></aside>`;
function ydCandBox() {
  if (ydCandState === 'sent') return `<div class="yd-ct-cand-sent" role="status"><div class="yd-ct-cand-card"><h2><span class="yd-ct-ico" aria-hidden="true">✓</span>Message bien envoyé</h2><p>Aucune donnée ni pièce jointe n’est enregistrée par ce prototype.</p></div><div class="yd-ct-cand-card is-social"><h2>Pour suivre l’actualité de l’entreprise</h2><a class="yd-ct-linkedin" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div><a class="yd-ct-btn" href="#/">Retour à l’accueil →</a></div>`;
  if (ydCandState === 'error') return `<div class="yd-ct-status is-error" role="alert"><h2><span class="yd-ct-ico" aria-hidden="true">×</span>Votre candidature n’a pas pu être envoyée</h2><p>Veuillez réessayer ou transmettre votre candidature par e-mail.</p></div><div class="yd-ct-actions"><button class="yd-ct-btn is-ghost" type="button" data-yd-cand-reset>Retour</button><button class="yd-ct-btn" type="button" data-yd-cand-reset>Refaire la demande →</button></div>`;
  return `<form id="yd-ct-cand-form" class="yd-ct-form yd-ct-cand-form"><fieldset class="yd-ct-step"><legend>Parlez-nous de votre parcours</legend><p class="yd-ct-sub">champs * obligatoires.</p><label class="yd-ct-field"><span>Nom et prénom *</span><input name="name" autocomplete="name" required></label><label class="yd-ct-field"><span>Adresse e-mail *</span><input name="email" type="email" autocomplete="email" required></label><label class="yd-ct-field"><span>Métier recherché *</span><select name="job" required><option value="">Choisir un métier</option><option>Sécurité &amp; prévention</option><option>Sécurité incendie</option><option>Sécurité événementielle</option><option>Agent cynophile</option></select></label><label class="yd-ct-field"><span>CV (facultatif · PDF)</span><input type="file" name="cv" accept="application/pdf,.pdf"><small>Sélection locale uniquement, aucun fichier transféré.</small></label><label class="yd-ct-field"><span>Votre message (facultatif)</span><textarea name="message" placeholder="Votre expérience, vos qualifications, vos disponibilités"></textarea></label><label class="yd-ct-consent"><input type="checkbox" name="consent" required><span>YD Sécurité utilise vos données pour étudier votre candidature. Pour connaître vos droits, consultez notre <a href="#/confidentialite">politique de confidentialité</a>.</span></label></fieldset><div class="yd-ct-actions"><button class="yd-ct-btn" type="submit">Envoyer ma candidature →</button></div></form>`;
}
ydRecruitment = function () {
  const etat = new URLSearchParams(location.hash.split('?')[1] || '').get('etat');
  if (etat === 'erreur') ydCandState = 'error'; else if (etat === 'envoye') ydCandState = 'sent';
  return ydCtFrame('formation', 'Candidature', ydCandBox(), ydCandAside, 'yd-ct-cand');
};
function ydCandRedraw() { const box = document.querySelector('.yd-ct-cand .yd-ct-box'); if (!box) return; box.innerHTML = ydCandBox(); box.querySelector('h2,legend')?.setAttribute('tabindex', '-1'); box.querySelector('h2,legend')?.focus({preventScroll: true}); box.scrollIntoView({block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }
document.addEventListener('submit', e => { if (e.target.id === 'yd-ct-cand-form') { e.preventDefault(); ydCandState = 'sent'; ydCandRedraw(); } });
document.addEventListener('click', e => { if (e.target.closest('[data-yd-cand-reset]')) { ydCandState = 'form'; ydCandRedraw(); } });
document.addEventListener('toggle', e => { if (e.target.classList?.contains('yd-ct-recap')) ydCtRecapOpen = e.target.open; }, true);
window.addEventListener('hashchange', () => { if (!location.hash.startsWith('#/formation')) ydCandState = 'form'; });
