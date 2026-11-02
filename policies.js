const policyLinks = [
  ['mentions-legales', 'Mentions légales'],
  ['confidentialite', 'Confidentialité'],
  ['cookies', 'Cookies'],
  ['signalement-securite', 'Signaler une vulnérabilité']
];

function policyPage(key, title, summary, content) {
  return `<div class="wrap legal-page policy-page"><div class="legal-intro"><span class="eyebrow">Informations & transparence</span><h1>${title}</h1><p class="lead">${summary}</p><p class="legal-alert"><strong>Prototype en cours de préparation.</strong> Les informations entre crochets sont à vérifier et à compléter avant la version définitive du site.</p></div><nav class="policy-nav" aria-label="Pages d’information">${policyLinks.map(([route, label]) => `<a href="#/${route}" ${route === key ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav><div class="legal-grid">${content}</div></div>`;
}

function legal() {
  return policyPage('mentions-legales', 'Mentions légales', 'Les informations essentielles sur l’éditeur du site, son hébergement et son activité de sécurité privée.', `
    <section class="legal-card"><h2>Éditeur du site</h2><dl>
      <dt>Raison sociale</dt><dd>YD SECURITE</dd>
      <dt>Forme juridique</dt><dd>Société par actions simplifiée (SAS)</dd>
      <dt>Président</dt><dd>Yann PICHON</dd>
      <dt>Capital social</dt><dd>1 000 €</dd>
      <dt>Siège social</dt><dd>CHEZ DAMIEN SARL, 2 RUE DES COMMERES, 78310 COIGNIERES, France</dd>
      <dt>SIREN</dt><dd>890 509 946</dd>
      <dt>SIRET du siège social</dt><dd>890 509 946 00012</dd>
      <dt>Immatriculation</dt><dd>Registre national des entreprises (RNE), le 29 octobre 2020</dd>
      <dt>TVA intracommunautaire</dt><dd>FR82 890 509 946</dd>
      <dt>Activité principale</dt><dd>Activités de sécurité privée (code APE 80.10Z)</dd>
      <dt>Courriel</dt><dd>[ADRESSE E-MAIL DE CONTACT]</dd>
      <dt>Téléphone</dt><dd>[NUMÉRO DE TÉLÉPHONE]</dd>
    </dl><p>Informations d’identification vérifiées le 2 novembre 2026 dans <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/yd-securite-890509946" target="_blank" rel="noopener noreferrer">l’Annuaire des entreprises</a>.</p></section>
    <section class="legal-card"><h2>Publication et hébergement</h2><dl>
      <dt>Direction de la publication</dt><dd>[NOM ET PRÉNOM]</dd>
      <dt>Responsable de la rédaction, le cas échéant</dt><dd>[NOM ET PRÉNOM OU SANS OBJET]</dd>
      <dt>Hébergeur</dt><dd>[DÉNOMINATION OU RAISON SOCIALE DE L’HÉBERGEUR]</dd>
      <dt>Adresse de l’hébergeur</dt><dd>[ADRESSE COMPLÈTE DE L’HÉBERGEUR]</dd>
      <dt>Téléphone de l’hébergeur</dt><dd>[NUMÉRO DE TÉLÉPHONE DE L’HÉBERGEUR]</dd>
    </dl></section>
    <section class="legal-card"><h2>Activité réglementée</h2><p>Les références de l’autorisation d’exercer doivent correspondre aux activités réellement autorisées de l’entreprise.</p><dl>
      <dt>Autorisation CNAPS</dt><dd>[NUMÉRO D’AUTORISATION ET ACTIVITÉS AUTORISÉES]</dd>
      <dt>Autorité compétente</dt><dd>[NOM ET ADRESSE DE L’AUTORITÉ AYANT DÉLIVRÉ L’AUTORISATION]</dd>
      <dt>Informations réglementaires complémentaires</dt><dd>[MENTIONS APPLICABLES À L’ACTIVITÉ]</dd>
    </dl></section>
    <section class="legal-card"><h2>Contenus, marques et images</h2><p>Les textes, photographies, illustrations et signes distinctifs présentés sur ce site peuvent être protégés. Toute réutilisation doit respecter les droits des personnes et des titulaires concernés.</p><dl>
      <dt>Titulaire des droits</dt><dd>[ENTREPRISE OU TITULAIRES CONCERNÉS]</dd>
      <dt>Crédits des visuels</dt><dd>[AUTEURS, LICENCES ET AUTORISATIONS DE DROIT À L’IMAGE]</dd>
    </dl></section>
    <section class="legal-card legal-wide"><h2>Informations et liens externes</h2><p>Les pages de ce prototype présentent des contenus indicatifs, à confirmer avec l’entreprise. Pour une prestation ou un devis, les informations fournies dans un échange direct prévalent sur cette présentation générale.</p><p>Certains liens peuvent conduire vers des sites tiers. Leurs contenus et leurs pratiques de confidentialité relèvent de leurs propres responsables.</p><p>Pour comprendre l’utilisation des données et des traceurs sur ce site, consultez la <a href="#/confidentialite">politique de confidentialité</a> et la <a href="#/cookies">page cookies</a>.</p></section>
  `);
}

function privacy() {
  return policyPage('confidentialite', 'Politique de confidentialité', 'Comment ce prototype traite les informations saisies et ce qu’il faudra préciser avant d’activer de vrais formulaires.', `
    <section class="legal-card legal-wide"><h2>Champ d’application</h2><p>Cette page concerne la navigation sur ce prototype et ses formulaires de contact simulés. Elle sera mise à jour avant toute collecte réelle de demandes, inscription à une newsletter ou ajout d’un outil d’analyse.</p></section>
    <section class="legal-card"><h2>Formulaires du prototype</h2><p>Les champs peuvent demander un nom, des coordonnées, une organisation et une description du besoin. Les saisies servent uniquement à tester le parcours à l’écran. Le site ne transmet pas ces informations à l’entreprise et ne les stocke pas dans une base de données.</p><p>Les informations restent temporairement dans la page et disparaissent à la fin de la simulation ou au rechargement. Évitez d’y saisir des données personnelles réelles.</p></section>
    <section class="legal-card"><h2>Navigation et hébergement</h2><p>Le code du prototype n’intègre ni outil d’analyse d’audience, ni publicité ciblée, ni compte utilisateur. Comme pour tout site hébergé, le fournisseur d’hébergement peut traiter des données techniques de connexion selon ses propres conditions.</p><p>Hébergeur et informations sur ses traitements : [IDENTITÉ ET LIEN VERS LA POLITIQUE DE L’HÉBERGEUR À CONFIRMER].</p></section>
    <section class="legal-card legal-wide"><h2>Avant l’activation d’un vrai formulaire</h2><p>La version définitive devra indiquer, pour chaque traitement réellement mis en place, les informations suivantes :</p><dl class="legal-data">
      <dt>Responsable du traitement</dt><dd>[RAISON SOCIALE ET COORDONNÉES]</dd>
      <dt>Données collectées</dt><dd>[CHAMPS ET DONNÉES TECHNIQUES EFFECTIVEMENT COLLECTÉS]</dd>
      <dt>Finalités et bases légales</dt><dd>[FINALITÉS ET BASE LÉGALE DE CHACUNE]</dd>
      <dt>Destinataires</dt><dd>[SERVICES ET PRESTATAIRES CONCERNÉS]</dd>
      <dt>Durées de conservation</dt><dd>[DURÉES OU CRITÈRES APPLICABLES]</dd>
      <dt>Transferts hors EEE</dt><dd>[TRANSFERTS ÉVENTUELS ET GARANTIES]</dd>
    </dl></section>
    <section class="legal-card legal-wide"><h2>Vos droits et votre contact</h2><p>Lorsque des données personnelles seront effectivement traitées, les personnes concernées pourront exercer les droits applicables, notamment l’accès, la rectification, l’effacement, l’opposition et, selon le cas, la limitation ou la portabilité.</p><p>Contact dédié : [ADRESSE E-MAIL OU POSTALE POUR LES DEMANDES RELATIVES AUX DONNÉES]. Si un délégué à la protection des données est désigné : [COORDONNÉES DU DPO]. Vous pouvez également déposer une réclamation auprès de la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">CNIL</a>.</p></section>
  `);
}

function cookies() {
  return policyPage('cookies', 'Cookies et traceurs', 'Une présentation claire des technologies utilisées aujourd’hui par le prototype et de celles qui pourraient être ajoutées plus tard.', `
    <section class="legal-card legal-wide"><h2>Qu’est-ce qu’un traceur ?</h2><p>Un cookie ou un autre traceur peut enregistrer ou lire une information sur votre appareil lors de la visite d’un site. Selon sa finalité, il peut être nécessaire au service ou servir à mesurer l’audience, personnaliser des contenus ou afficher de la publicité.</p></section>
    <section class="legal-card legal-wide"><h2>Situation de ce prototype</h2><div class="policy-table" role="table" aria-label="Traceurs du prototype"><div role="row"><strong role="columnheader">Catégorie</strong><strong role="columnheader">État dans le prototype</strong></div><div role="row"><span role="cell">Mesure d’audience</span><span role="cell">Aucun outil intégré</span></div><div role="row"><span role="cell">Publicité et réseaux sociaux</span><span role="cell">Aucun traceur intégré</span></div><div role="row"><span role="cell">Préférences du site</span><span role="cell">Aucun cookie déposé par le code du prototype</span></div></div><p>Le fournisseur d’hébergement peut conserver des journaux techniques de connexion. Ces journaux ne constituent pas un réglage de cookies proposé par ce prototype ; ses informations de traitement sont à confirmer : [LIEN VERS LA POLITIQUE DE L’HÉBERGEUR].</p></section>
    <section class="legal-card"><h2>Gestion dans votre navigateur</h2><p>Vous pouvez consulter et supprimer les cookies enregistrés sur votre appareil dans les paramètres de votre navigateur. La procédure varie selon le navigateur utilisé.</p></section>
    <section class="legal-card"><h2>Évolution du site</h2><p>Si des services de mesure d’audience, de vidéo intégrée ou de publicité sont ajoutés, cette page devra présenter leurs finalités, leurs fournisseurs et leurs durées. Un dispositif de choix sera proposé avant le dépôt des traceurs qui nécessitent un consentement.</p></section>
  `);
}

function disclosure() {
  return policyPage('signalement-securite', 'Signaler une vulnérabilité', 'Un canal pour signaler de manière responsable une éventuelle faille du site.', `
    <section class="legal-card legal-wide"><h2>Comment nous informer</h2><p>Si vous remarquez une vulnérabilité concernant ce site, envoyez une description précise à [ADRESSE E-MAIL DÉDIÉE À LA SÉCURITÉ]. Ce contact doit être créé et vérifié avant de rendre cette page opérationnelle.</p><p>Indiquez l’URL concernée, les étapes permettant de reproduire le problème, son impact possible et un moyen de vous répondre. Limitez les preuves aux éléments nécessaires et masquez toute donnée personnelle.</p></section>
    <section class="legal-card"><h2>Périmètre</h2><p>Ce canal concerne uniquement le site [DOMAINE OFFICIEL DU SITE À CONFIRMER] et ses fonctionnalités réellement exploitées. Les systèmes de tiers, y compris l’hébergeur et les services externes, ont leurs propres canaux de signalement.</p></section>
    <section class="legal-card"><h2>Précautions</h2><p>Merci de préserver la disponibilité du service et la confidentialité des données. En cas de découverte d’informations appartenant à autrui, interrompez vos vérifications et signalez le problème sans les diffuser.</p><p>Une fois le signalement reçu, [ÉQUIPE OU PERSONNE RESPONSABLE] pourra accuser réception et préciser les suites données. Aucun programme de récompense n’est annoncé pour ce prototype.</p></section>
  `);
}
