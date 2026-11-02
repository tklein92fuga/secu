const policyStylesheet = document.createElement('link');
policyStylesheet.rel = 'stylesheet';
policyStylesheet.href = 'policies.css?v=20261102';
document.head.append(policyStylesheet);

const policyLinks = [
  ['mentions-legales', 'Mentions légales'],
  ['confidentialite', 'Politique de confidentialité'],
  ['cookies', 'Politique cookies'],
  ['signalement-securite', 'Divulgation responsable']
];

const policyContact = {
  legal: '[ contact@yd-securite.fr — adresse à confirmer ]',
  data: '[ donnees@yd-securite.fr — adresse à confirmer ]',
  security: '[ securite@yd-securite.fr — adresse à confirmer ]'
};

function policyHeader(active) {
  return `<header class="ready-header"><a class="ready-brand" href="#/" aria-label="YD SECURITE, accueil"><img src="assets/yd-logo.png" width="48" height="48" alt=""><span>YD SECURITE</span></a><nav class="ready-main-nav" aria-label="Navigation principale"><a href="#/metiers">Nos métiers</a><a href="#/approche">Notre approche</a><a href="#/references">Références</a><a href="#/histoire">Notre histoire</a><a href="#/formation">Recrutement</a></nav><a class="ready-contact" href="#/contact">Parlons de votre besoin</a></header><nav class="ready-tabs policy-tabs" aria-label="Informations légales"><div>${policyLinks.map(([route, label]) => `<a href="#/${route}" ${route === active ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</div></nav>`;
}

function policySection(index, title, content) {
  const id = `section-${index}`;
  return `<section class="policy-section" id="${id}" aria-labelledby="${id}-title"><span class="policy-number">${String(index).padStart(2, '0')}</span><h2 id="${id}-title">${title}</h2>${content}</section>`;
}

function policyFacts(items) {
  return `<dl class="policy-facts">${items.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;
}

function policyCards(items, className = '') {
  return `<div class="policy-cards ${className}">${items.map(([title, body]) => `<div><h3>${title}</h3><p>${body}</p></div>`).join('')}</div>`;
}

function policyPage(key, title, summary, sections, contact, heroExtra = '') {
  document.body.classList.add('ready-mode');
  return `<div class="ready-page policy-ready">${policyHeader(key)}<section class="policy-hero"><div class="policy-hero-inner"><p class="policy-breadcrumb"><a href="#/">Accueil</a> / Informations légales / ${title}</p><h1>${title}</h1><p class="policy-hero-summary">${summary}</p><div class="policy-hero-actions"><span class="policy-updated">Dernière mise à jour : 2 novembre 2026</span>${heroExtra}</div><img class="policy-hero-mark" src="assets/yd-logo.png" alt="" aria-hidden="true"></div></section><div class="policy-content"><aside class="policy-sidebar"><div class="policy-sidebar-sticky"><p class="policy-sidebar-label">SOMMAIRE</p><nav aria-label="Sommaire de la page">${sections.map((section, index) => `<a href="#section-${index + 1}" ${index === 0 ? 'class="active"' : ''}><span>${String(index + 1).padStart(2, '0')}</span><strong>${section[0]}</strong></a>`).join('')}</nav><div class="policy-help"><strong>Une question ?</strong><p>Écrivez-nous à ${contact}</p></div></div></aside><div class="policy-article">${sections.map(([heading, content], index) => policySection(index + 1, heading, content)).join('')}</div></div>${readyCta()}${readyFooter()}<dialog class="policy-dialog" id="policy-cookie-dialog"><h2>Préférences des cookies</h2><p>Ce prototype ne dépose aucun cookie facultatif. Aucun outil de mesure d’audience ou de publicité n’est actuellement intégré.</p><button type="button" data-cookie-close>Fermer</button></dialog></div>`;
}

function legal() {
  const facts = policyFacts([
    ['Dénomination sociale', 'YD SECURITE'],
    ['Forme juridique', 'Société par actions simplifiée (SAS)'],
    ['Capital social', '1 000 €'],
    ['Siège social', 'CHEZ DAMIEN SARL, 2 RUE DES COMMERES, 78310 COIGNIERES'],
    ['Immatriculation', 'SIREN 890 509 946 · RNE depuis le 29 octobre 2020'],
    ['SIRET du siège', '890 509 946 00012'],
    ['TVA intracommunautaire', 'FR82 890 509 946'],
    ['Activité (code APE)', '80.10Z · Activités de sécurité privée'],
    ['Téléphone', '[ NUMÉRO À CONFIRMER ]'],
    ['E-mail', policyContact.legal]
  ]);
  const sections = [
    ['Éditeur du site', `<p>Ce site présente la société YD SECURITE. Ses informations d’identification ont été vérifiées dans <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/yd-securite-890509946" target="_blank" rel="noopener noreferrer">l’Annuaire des entreprises</a>.</p>${facts}`],
    ["Autorisation d’exercice", `<div class="policy-highlight"><small>Numéro d’autorisation à vérifier auprès de l’entreprise et du CNAPS</small><strong>[ AUT-078-2119-10-23-20200607343 ]</strong></div><p>La maquette indique cette référence d’autorisation. Elle doit être confirmée avant d’être présentée comme une autorisation en vigueur. Les activités effectivement autorisées et les mentions réglementaires associées restent également à valider.</p>`],
    ['Directeur de la publication', `<p>Le nom du directeur de la publication reste à confirmer. Yann PICHON est indiqué comme président de YD SECURITE dans l’Annuaire des entreprises ; cette fonction ne suffit pas à établir la direction de la publication du site.</p><p><strong>[ NOM ET QUALITÉ DU DIRECTEUR DE LA PUBLICATION À CONFIRMER ]</strong></p>`],
    ['Hébergement', `<p>Les informations de l’hébergeur du site public doivent être confirmées avant publication définitive.</p>${policyFacts([['Hébergeur','[ DÉNOMINATION À CONFIRMER ]'],['Forme et immatriculation','[ FORME SOCIALE ET IMMATRICULATION ]'],['Adresse','[ ADRESSE COMPLÈTE ]'],['Téléphone','[ NUMÉRO DE TÉLÉPHONE ]']])}`],
    ['Conception et réalisation', policyFacts([['Design et développement','[ RESPONSABLE DE LA CONCEPTION À CONFIRMER ]'],['Crédits photographiques','[ SOURCES ET AUTORISATIONS DES VISUELS ]']])],
    ['Propriété intellectuelle', `<p>Les textes, photographies, illustrations, logos et autres éléments du site peuvent être protégés par des droits de propriété intellectuelle. Leur réutilisation doit respecter les droits de leurs titulaires respectifs.</p><p>Les titulaires des droits, les licences et les autorisations des visuels restent à vérifier avant la mise en ligne définitive.</p>`],
    ['Responsabilité', `<p>Les informations présentées dans ce prototype sont indicatives. Elles ne constituent ni une offre contractuelle, ni une analyse de sécurité adaptée à une situation particulière.</p><p>Chaque dispositif fait l’objet d’un échange et d’une proposition tenant compte du site, des contraintes et du besoin exprimé.</p>`],
    ['Liens hypertextes', `<p>Ce site peut contenir des liens vers des sites tiers. Leurs contenus et leurs pratiques relèvent de leurs propres responsables.</p>`],
    ['Données personnelles et cookies', `<p>La situation actuelle du prototype est décrite dans la <a href="#/confidentialite">politique de confidentialité</a> et la <a href="#/cookies">politique cookies</a>. Les formulaires simulent le parcours et ne transmettent pas de demande à l’entreprise.</p>`],
    ['Droit applicable', `<p>Le site et les présentes mentions sont soumis au droit français, sous réserve des règles impératives applicables.</p>`]
  ];
  return policyPage('mentions-legales', 'Mentions légales', "Les informations relatives à l’éditeur du site, à son autorisation d’exercice, à son hébergement et aux conditions d’utilisation du site.", sections, policyContact.legal);
}

function privacy() {
  const sections = [
    ["L’essentiel", `<div class="policy-summary-grid"><div><small>Responsable</small><strong>YD SECURITE, Coignières</strong></div><div><small>Vos données</small><strong>Ne sont pas vendues ni louées</strong></div><div><small>Hébergement</small><strong>[ LOCALISATION À CONFIRMER ]</strong></div><div><small>Contact</small><strong>${policyContact.data}</strong></div></div><p>Cette page décrit la situation du prototype. Les formulaires de contact et de devis sont actuellement simulés : les informations saisies ne sont pas transmises à YD SECURITE ni enregistrées dans une base de données par le site. Une politique définitive devra refléter les traitements réellement activés.</p>`],
    ['Responsable du traitement', `<p>Pour les traitements qui seront réellement mis en place sur le site, le responsable sera à confirmer. YD SECURITE est une SAS identifiée sous le SIREN 890 509 946, dont le siège est situé CHEZ DAMIEN SARL, 2 RUE DES COMMERES, 78310 COIGNIERES.</p><p>Contact relatif aux données : ${policyContact.data}</p>`],
    ['Données collectées', `${policyCards([['Contact et devis','Le prototype affiche des champs de nom, coordonnées, organisation et description du besoin. Les saisies ne sont pas envoyées.'],['Candidatures','[ CHAMPS ET MODE DE COLLECTE À CONFIRMER SI UN PARCOURS DE CANDIDATURE EST ACTIVÉ ]'],['Navigation','L’hébergeur peut traiter des données techniques de connexion selon ses propres conditions, à confirmer.'],['Échanges','[ CANAUX ET DONNÉES EFFECTIVEMENT TRAITÉS À CONFIRMER ]']])}<p>Merci de ne pas saisir de données personnelles réelles dans les formulaires de démonstration.</p>`],
    ['Finalités, bases légales et durées', `<p>Avant d’activer une collecte, YD SECURITE devra préciser pour chaque traitement sa finalité, sa base légale et sa durée de conservation.</p>${policyCards([['Demandes de contact et de devis','[ BASE LÉGALE ET DURÉE À CONFIRMER ]'],['Relation client','[ BASE LÉGALE ET DURÉE À CONFIRMER ]'],['Candidatures','[ BASE LÉGALE ET DURÉE À CONFIRMER ]'],['Mesure d’audience','Aucun outil de mesure d’audience intégré au prototype.'],['Sécurité du site','[ JOURNAUX TECHNIQUES ET DURÉE À CONFIRMER AVEC L’HÉBERGEUR ]'],['Exercice des droits','[ MODALITÉS ET DURÉE À CONFIRMER ]']])}`],
    ['Destinataires de vos données', `<p>Ce prototype n’envoie aucune donnée issue de ses formulaires à l’entreprise. Si un service réel est activé, les destinataires et prestataires concernés devront être précisés ici.</p><p>Le fournisseur d’hébergement peut recevoir des données techniques de connexion selon ses propres conditions.</p>`],
    ["Transferts hors de l’Union européenne", `<p>La localisation de l’hébergement et l’existence d’éventuels transferts hors de l’Espace économique européen sont <strong>[ À CONFIRMER ]</strong>. Le cas échéant, les garanties applicables seront indiquées.</p>`],
    ['Sécurité de vos données', `<p>La version définitive précisera les mesures effectivement appliquées à la collecte et à la protection des données.</p>${policyCards([['Accès limité','[ PERSONNES HABILITÉES ET CONTRÔLES À CONFIRMER ]'],['Connexion chiffrée','La page publiée est accessible en HTTPS.'],['Prestataires choisis','[ PRESTATAIRES ET GARANTIES À CONFIRMER ]'],['Signalement des failles','Consultez la page de divulgation responsable pour connaître le canal proposé.']])}`],
    ['Vos droits', `<p>Lorsque des données personnelles sont effectivement traitées, vous disposez des droits applicables selon le RGPD.</p><div class="policy-rights">${[['Droit d’accès','Obtenir la confirmation qu’un traitement vous concerne et, selon le cas, une copie des données.'],['Droit de rectification','Faire corriger des données inexactes ou incomplètes.'],["Droit à l’effacement",'Demander la suppression de données dans les cas prévus par la réglementation.'],['Droit à la limitation','Demander la limitation d’un traitement dans les cas applicables.'],["Droit d’opposition",'Vous opposer à certains traitements dans les conditions prévues.'],['Droit à la portabilité','Recevoir certaines données dans un format structuré lorsque ce droit s’applique.'],['Retrait du consentement','Retirer votre consentement pour les traitements qui en dépendent.']].map(([title, body], index) => `<details ${index === 0 ? 'open' : ''}><summary>${title}</summary><p>${body}</p></details>`).join('')}</div>`],
    ['Exercer vos droits', `${policyFacts([['Par e-mail',policyContact.data],['Par courrier','YD SECURITE · CHEZ DAMIEN SARL, 2 RUE DES COMMERES, 78310 COIGNIERES']])}<p>Vous pouvez également déposer une réclamation auprès de la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">CNIL</a>. Une adresse de contact dédiée et la procédure de réponse devront être confirmées avant activation des traitements.</p>`],
    ['Modifications de la politique', `<p>Cette politique sera adaptée si les fonctionnalités du site ou ses traitements évoluent. La date de mise à jour figure en haut de cette page.</p>`]
  ];
  return policyPage('confidentialite', 'Politique de confidentialité', 'Comment YD SECURITE traite les informations saisies dans ce prototype et ce qui devra être précisé avant toute collecte réelle.', sections, policyContact.data);
}

function cookies() {
  const settingsButton = '<button class="policy-button policy-button-light" type="button" data-cookie-settings>Gérer mes préférences</button>';
  const sections = [
    ["Qu’est-ce qu’un cookie ?", `<p>Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site. Il peut servir à mémoriser une information pendant une durée limitée. D’autres traceurs, comme le stockage local du navigateur, peuvent remplir des fonctions similaires.</p>${policyCards([['Cookie de session','Supprimé à la fermeture du navigateur.'],['Cookie persistant','Conservé pendant une durée définie.'],['Cookie propriétaire','Déposé par le site consulté.'],['Cookie tiers','Déposé par un service externe intégré au site.']])}`],
    ['Votre consentement', `<div class="policy-summary-grid policy-three"><div><strong>Accepter</strong><small>Choix proposé si des cookies facultatifs sont ajoutés.</small></div><div><strong>Refuser</strong><small>Choix proposé avec la même facilité.</small></div><div><strong>Personnaliser</strong><small>Choix par catégorie si nécessaire.</small></div></div><p>Le prototype actuel n’intègre aucun cookie soumis à consentement. Le bandeau et les préférences illustrés dans la maquette ne correspondent pas à un outil de suivi actif.</p>`],
    ['Les cookies que nous utilisons', `<div class="policy-status-list"><div><h3>Strictement nécessaires</h3><span>À confirmer</span><p>Les éventuels mécanismes techniques de l’hébergeur devront être documentés.</p></div><div><h3>Mesure d’audience</h3><span>Non utilisée</span><p>Aucun outil de mesure d’audience intégré au code du prototype.</p></div><div><h3>Contenus tiers</h3><span>Non utilisés</span><p>Aucun lecteur vidéo ou carte intégrée ne dépose de traceur dans ce prototype.</p></div><div><h3>Publicitaires</h3><span>Non utilisés</span><p>Aucun cookie publicitaire ou de ciblage intégré.</p></div></div>`],
    ['Liste détaillée des cookies', `<p>Aucun cookie n’est déposé par le code du prototype. La liste détaillée sera établie si des traceurs sont ajoutés après vérification technique de leur nom, émetteur, finalité et durée.</p><div class="policy-empty">Aucun cookie applicatif identifié dans la version actuelle.</div>`],
    ['Gérer vos choix', `<p>Il n’y a actuellement aucun cookie facultatif à activer ou refuser sur ce prototype.</p>${settingsButton}<p>Vous pouvez aussi consulter et supprimer les cookies enregistrés dans les paramètres de votre navigateur.</p>`],
    ['Nous contacter', `<p>Pour toute question sur les traceurs du site, le contact dédié reste ${policyContact.data}. Consultez également notre <a href="#/confidentialite">politique de confidentialité</a>.</p>`]
  ];
  return policyPage('cookies', 'Politique cookies', 'Ce que sont les cookies, ceux que ce prototype utilise et comment garder la main sur vos choix.', sections, policyContact.data, settingsButton);
}

function disclosure() {
  const sections = [
    ['Comment nous signaler une faille', `<div class="policy-highlight policy-highlight-action"><div><small>Adresse dédiée aux signalements</small><strong>${policyContact.security}</strong></div><span class="policy-button">Canal à confirmer</span></div><p>Le canal indiqué dans la maquette doit être créé et vérifié avant d’être utilisé. N’employez pas le formulaire commercial pour transmettre des informations techniques sensibles.</p><div class="policy-steps">${[['1','Vous signalez','Vous décrivez la vulnérabilité.'],['2','Réception','[ DÉLAI DE RÉPONSE À CONFIRMER ]'],['3','Correction','La situation est analysée et corrigée.'],['4','Clôture','Une réponse vous est adressée.']].map(([number,title,body]) => `<div><span>${number}</span><h3>${title}</h3><p>${body}</p></div>`).join('')}</div>`],
    ['Ce que doit contenir votre signalement', `<ul class="policy-checks"><li>Le type de vulnérabilité et une description claire</li><li>L’URL ou le composant concerné</li><li>Les étapes permettant de reproduire le problème</li><li>Une preuve limitée aux éléments nécessaires, sans données réelles de tiers</li><li>L’impact estimé</li><li>Un moyen de vous répondre</li></ul>`],
    ['Périmètre du programme', `${policyCards([['Dans le périmètre','Le site actuellement publié sur tklein92fuga.github.io/secu et ses fonctionnalités. Le domaine définitif reste à confirmer.'],['Hors périmètre','Les sites, systèmes et équipements des clients ; les services tiers ; les dispositifs de sécurité physique.']])}<p>Aucun test physique, aucune intrusion sur un site et aucune manipulation d’équipements ne sont autorisés par cette page.</p>`],
    ['Règles à respecter', `${policyCards([['Ce que nous vous demandons','Agir de bonne foi, limiter les tests, cesser toute vérification si des données d’autrui apparaissent et préserver la confidentialité du signalement.'],['Ce qui est interdit','Perturber la disponibilité du service, accéder aux données d’autrui, pratiquer l’ingénierie sociale ou divulguer la faille avant correction.']])}`],
    ['Nos engagements', `<p>La procédure et les délais de réponse restent <strong>[ À CONFIRMER AVEC L’ENTREPRISE ]</strong> avant l’ouverture d’un canal de signalement. Aucun programme de récompense n’est annoncé pour ce prototype.</p><p>Vous pouvez aussi consulter les informations de l’<a href="https://cyber.gouv.fr/decouvrir-lanssi" target="_blank" rel="noopener noreferrer">ANSSI</a> sur les signalements de sécurité.</p>`],
    ['Vos données personnelles', `<p>Les modalités de traitement et de conservation des informations reçues dans le cadre d’un futur signalement devront être précisées avant l’activation du canal. Voir également notre <a href="#/confidentialite">politique de confidentialité</a>.</p><p>Contact dédié : ${policyContact.data}</p>`]
  ];
  return policyPage('signalement-securite', 'Divulgation responsable', 'Vous avez identifié une faille de sécurité sur notre site ? Voici comment nous la signaler de façon responsable.', sections, policyContact.security);
}

document.addEventListener('click', event => {
  const sectionLink = event.target.closest('.policy-sidebar a[href^="#section-"]');
  if (sectionLink) {
    event.preventDefault();
    document.querySelector(sectionLink.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.policy-sidebar a').forEach(link => link.classList.toggle('active', link === sectionLink));
  }
  if (event.target.closest('[data-cookie-settings]')) document.querySelector('#policy-cookie-dialog')?.showModal();
  if (event.target.closest('[data-cookie-close]')) document.querySelector('#policy-cookie-dialog')?.close();
});
