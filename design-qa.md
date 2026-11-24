# Vérification de l’intégration YD Sécurité

Sources : maquettes finales et ressources dans `C:/Users/qalte/Desktop/YD/`.

## Réalisé

- Accueil, quatre métiers, trois pages d’approche, liste et détail des références, histoire, devis et candidature : gabarits responsive, navigation, CTA et photos.
- Pages légales conservées avec les données de l’Annuaire des entreprises et leurs précautions sur les informations encore à confirmer.
- Logos fournis, watermark et images réelles intégrés comme éléments HTML/CSS. Les captures de maquette ne sont pas publiées.
- 28 photos et logos convertis ou conservés dans `assets/yd/` ; poids des photos réduit par compression JPEG.

## Contrôles précédents

- Syntaxe JavaScript de `yd-final.js` et du script de la page : validée par Node.
- Rendu de 16 routes dans un contexte de validation JavaScript : une page et un H1 produits pour chaque route.
- Références d’images dans les 16 pages : tous les fichiers sont présents.
- Accolades de la feuille de style : équilibrées.

Le navigateur intégré a refusé l’ouverture de `file://` pour des raisons de sécurité. Le contrôle visuel sur le site HTTPS publié reste nécessaire. Les maquettes contiennent certains textes et résultats provisoires ; les blocs du site utilisent des formulations éditoriales cohérentes plutôt que ces exemples. Le parcours de devis et la candidature ne sont pas reliés à un service d’envoi : ils l’indiquent à l’utilisateur.

## Nouvelles maquettes : histoire, approche, références et candidature

final result: blocked

Les dix nouvelles maquettes ont été ouvertes et les pages locales correspondantes sont en place. Le navigateur intégré refuse l’URL locale `file:///…/site-vitrine-securite/index.html`. La tentative de capture locale en mode sans interface n’a produit aucune image. Il manque donc une capture rendue à la même largeur que les maquettes pour juger les écarts visuels pixel par pixel.

Vérifications effectuées : syntaxe JavaScript valide, neuf routes contrôlées (les deux états de candidature partagent une route), aucune image référencée manquante, aucun conflit signalé par `git diff --check`.

Écart connu dans les ressources fournies : la seconde photographie historique, avec Alain Afflelou et une femme, n’a pas été retrouvée comme fichier séparé. La page emploie provisoirement la photographie historique principale à cet emplacement.

À reprendre dès qu’une capture locale est accessible : comparer typographie, espacements, couleurs, cadrages photo et textes aux dix captures source ; corriger les écarts mesurés et vérifier les états du formulaire.

## Références & cas clients : maquette finale (21/11/2026)

final result: passed

Page `#/references` recalée sur la maquette « YD — Références & cas clients » (cadre 1440 px). Contrôle par capture Chrome sans interface à 1440 px : hauteur de page identique (6950 px) et toutes les limites de sections au pixel près (en-tête 91, onglets 177, chiffres 1019–1809, photos 800 px espacées de 160, formulaire 4829–5836, bandeau final 5936–6536, pied 6536–6950).

- Logos à taille native (1250 × 160), titres 48 px, cartes chiffres 368 px avec séparateur, chiffres centrés.
- Blocs contexte : photo 630 × 800, colonne texte 630, puces « • », encadré cas client #dee8fd, bouton aligné sur le bas de la photo.
- Formulaire : colonne 570 px, bouton « Envoyer » à droite, portrait 280 px.
- Bandeau final avec le griffon détaillé ; pied de page agrandi (16 px).
- Styles limités à cette page (`.yd-v2-refs-overview`) ; adaptations 1100 / 900 / 600 px vérifiées.

Écarts volontaires par rapport à la maquette : coquilles corrigées (« maîtrise », « Mentions légales », « Confidentialité », « Gestion des cookies », « © ») ; liens métiers du site tertiaire nommés « Sécurité & prévention » et « Sécurité incendie » plutôt que « Découvrir le métier » en double. Changement global : libellés du pied de page « Sécurité & prévention » et « Gestion des cookies » sur toutes les pages.

## Références · Événement : maquette finale (21/11/2026)

final result: passed

Page `#/references/evenement` recalée sur la maquette « YD — Références · Événement » (cadre 1440 px). Hauteur de page identique (7023 px) ; limites de sections au pixel près (onglets 177, bandeau chiffres 1977–2674, bandeau final 6009–6609, pied 6609–7023). Positions mesurées et alignées : titre, fiche [Nom de l’événement], visuels réservés 840/420 px, cartes avant/dispositif/après (282 px), trois chiffres (cartes 412 × 341), six formats (visuels 412 × 232), bloc détails et visuels 630/311/311, formulaire (bouton pleine largeur).

En-tête 91 px, onglets (soulignement 42 px), bandeau final avec griffon détaillé et grand pied de page désormais partagés entre la vue d’ensemble et Événement (`.yd-v2-final-frame`). Adaptations 1100 / 900 / 600 px vérifiées. Les pages Site tertiaire et Site à surveiller ne sont pas modifiées.

Écarts volontaires : coquilles du pied de page corrigées comme sur la vue d’ensemble ; « Sécurité événementielle » conservé.

## Références · Site tertiaire et Site à surveiller : maquettes finales (21/11/2026)

final result: passed

- Site tertiaire (`#/references/tertiaire`) : hauteur identique à la maquette (7279 px), toutes les sections au pixel près. Photo 1300 × 440, « Risque résolue » en 3 colonnes de 346 px, panneaux 312 px avec flèches longues (icône SVG), deux blocs « Les repères » en 4 colonnes.
- Site à surveiller (`#/references/surveillance`) : 7037 px contre 7029 px. Durées (bandeaux 64 px + cartes 411 px), bande « Ce qu’un site vide attire », tableau Si non / Si oui restructuré en lignes (rôles ARIA de tableau), encadré « Dans tous les cas » et colonne d’assurance alignés.
- Les quatre pages Références partagent le cadre final (en-tête, onglets, formulaire, bandeau final avec griffon détaillé, pied de page). Adaptations 1100 / 900 / 600 px vérifiées ; accueil, métiers et approche inchangés.

Écart volontaire : sur Site à surveiller, les textes « Intrusion » et « Incendie » sont au même corps (20 px) que les trois autres risques, contre 16 px dans la maquette ; d’où les 8 px de hauteur en plus. Le texte « Intrusion » de la maquette reprend le texte légal de la page Événement (seuil de 1 500 personnes) : contenu à remplacer.

## Notre histoire, Métiers (×4) et Notre approche (×3) : maquettes finales (21/11/2026)

final result: passed

Hauteurs de page à 1440 px, maquette → site :
- Notre histoire : 5354 → 5354
- Sécurité & prévention : 6811 → 6811
- Sécurité événementielle : 6723 → 6723
- Sécurité incendie : 6857 → 6857
- Agent cynophile : 7482 → 7482
- Comment nous travaillons : 7226 → 7226
- Encadrement & suivi : 7733 → 7733
- Accompagnement humain : 9021 → 9025 (maquette fournie en JPG 1300 px, remise à l'échelle 1440 ; écart d'arrondi)

Titres, boutons, formulaire, bandeau final et pied de page alignés au pixel près (±2 px) sur toutes les pages.

- En-tête 100 px des pages Métiers et Notre approche (logo, menu, onglets, soulignement 4 px) recalé sur ces maquettes ; les pages Références gardent leur en-tête 91 px.
- Formulaire compact (881 px) partagé par toutes les pages Métiers et Notre approche ; Notre histoire garde le grand formulaire (1007 px) comme sa maquette.
- Nouvelles images : `story-group.jpg` et `story-afflelou.jpg` (découpées dans la maquette, absentes du dossier Ressources), `cyno-duo.jpg` et `cyno-welfare.jpg` (cadrage de la maquette), `follow-tablet.jpg` (IMG12 des Ressources), `circuit-icon.png` (Icone.png des Ressources).
- Contenus ajoutés pour suivre les maquettes : exemples du « malaise dans le hall » (Encadrement), phrase sur le stress post-traumatique et note sur le médecin du travail (Accompagnement humain), circuit d'une demande avec icônes.
- Adaptations 1100 / 900 / 600 px vérifiées, sans débordement horizontal ni erreur JS. Accueil, contact, recrutement, pages légales et Références inchangés (comparaison pixel à pixel).

## Pages légales, parcours devis/contact, Candidature et Accueil : derniers écrans (23/11/2026)

final result: passed

Hauteurs de page à 1440 px, maquette → site :
- Mentions légales : 5787 → 5790
- Politique de confidentialité : 6761 → 6766
- Politique cookies : 4675 → 4665
- Divulgation responsable : 4734 → 4730
- Devis · 01 Situation : 2493 → 2493
- Devis · 02 Votre besoin (événement) : 2595 → 2596
- Devis · 03 Coordonnées, récapitulatif ouvert : 2721 → 2721
- Message envoyé / Erreur : 2087 → 2087
- Candidature envoyée : 2151 → 2151
- Accueil (zone « Main_Content », sans pied de page) : toutes les sections à ±2 px jusqu'au formulaire (5802 → 5802, fin 6683 → 6683)

- Pages légales (`yd-legal.js`) : textes complets des maquettes, repères [ … ] conservés, sommaire latéral, accordéon des droits, boîte « Gérer mes préférences », filigrane du griffon dans le bandeau bleu.
- Parcours devis (`yd-contact.js`) : en-tête 91 px + onglets Un besoin / Une question / Un partenariat (liens réels), barre de progression 3 étapes, cartes radio, champs 48 px, récapitulatif repliable, états « Message envoyé » et « Il y a un souci » (`#/confirmation?etat=erreur`). Une question et Un partenariat reprennent le même cadre (pas de maquette dédiée).
- Candidature : même cadre ; l'envoi affiche l'état de la maquette (Message bien envoyé, LinkedIn, Retour à l'accueil). L'ancien état d'erreur reste accessible par `#/formation?etat=erreur`.
- Accueil : griffon détaillé gris dans le bloc méthode, marque blanche opaque et non grasse dans l'en-tête, onglets méthode, cartes métiers, espacements des sections cas / témoignages / histoire et formulaire 570 px recalés.
- Adaptations 1024 / 768 / 390 px vérifiées sans débordement ni erreur JS (corrigé au passage : grille et filigrane des pages légales en mobile, rail de logos de l'accueil en 390 px, espaces perdus quand les retours à la ligne sont masqués).
- Métiers, Notre approche, Références et Notre histoire : comparaison pixel à pixel avec la version précédente, aucun écart.

Écarts volontaires :
- Fautes de la maquette corrigées : « Conitnuer », « Termine le formulaire », « Il y a un soucis », « Les dispositif », virgule dans « Votre événement, ses accès… ».
- Texte provisoire de l'état d'erreur (« Ecrire un truc qui explique… ») remplacé par une vraie phrase, à valider.
- Étape 3 : les deux maquettes proposent des boutons différents (Retour + Terminer le formulaire / grand bouton « Simuler l'envoi »). Retenu : Retour + Terminer le formulaire, cohérent avec les étapes 1 et 2.
- La case « simulation » de l'étape 3 a été retirée comme dans la maquette : il manque désormais la mention sur les données personnelles dans ce formulaire.
- Candidature : la maquette reprend les onglets et le sous-titre du devis (« …préparer, si nécessaire, un devis »). Onglets gardés mais aucun n'est marqué actif ; le sous-titre reste celui de la maquette, à réécrire.
- Formulaire de l'accueil : le second champ « Organisation (facultatif) » de la maquette est un doublon ; le champ Téléphone est conservé.

## Maquettes mobiles 390 px (24/11/2026)

final result: passed

Nouveau fichier `yd-mobile.css` (chargé en dernier, actif sous 600 px uniquement). Desktop 1440 : comparaison pixel à pixel avant/après sur 18 pages, aucun écart visible.

Hauteurs de page à 390 px, maquette → site :
- Accueil 11389 → 11386 · Références 9844 → 9844 · Site tertiaire 10881 → 10881 · Événement 11038 → 11036 · Site à surveiller 11620 → 11617
- Notre histoire 6335 → 6334 · Comment nous travaillons 11510 → 11510 · Encadrement & suivi 12888 → 12892 · Accompagnement humain 15683 → 15683
- Devis 01 3463 → 3463 · Devis 03 (récap ouvert) 3907 → 3909 · Message envoyé 3109 → 3114

- En-tête 80 px, bouton Menu ; menu ouvert plein écran avec sous-rubriques de la section courante et bouton « Parlons de votre besoin » (Échap ferme le menu).
- Bandeau final et pied de page mobiles (colonne « Échanger » sur les pages qui ne l'avaient pas).
- Accueil : photo recadrée, grille de logos 2 colonnes (logos extraits du bandeau existant), cartes, méthode, témoignages, photo d'archive recadrée pour le mobile.
- Comment nous travaillons : tableau comparatif remplacé en mobile par des cartes empilées (bloc dédié, masqué en desktop).
- Vérifié à 360 / 390 / 430 / 600 / 768 / 1024 px : pas de débordement horizontal, pas d'erreur JS.

Écarts volontaires :
- Les 4 maquettes Métiers (dossier « MOBILE METIER 4 ») sont en basse fidélité (photos grises, pas de formulaire de contact). Mise en page, onglets, bandeau titre, tailles de texte et listes calés dessus ; photos réelles et formulaire de contact conservés. Les boutons intermédiaires absents de la maquette Sécurité & Prévention sont masqués en mobile.
- Devis 03 récap fermé : la maquette montre un seul bouton « Simuler l'envoi » ; gardé Retour + Terminer comme sur les autres étapes.
- Candidature : la maquette n'a pas de champ e-mail et titre « Parlez-nous de votre événement » ; champ e-mail et titre « Parlez-nous de votre parcours » conservés.
- Message envoyé / erreur : style mobile de la maquette (fond blanc, message dans un encadré bleu clair) ; texte d'erreur inchangé.

## Conformité au design system — couleurs, contraste, focus, statuts (24/11/2026)

final result: passed

Règle retenue : les maquettes priment sur le design system. Seules les corrections sans impact sur la mise en page ont été appliquées.

- Couleurs : toutes les valeurs codées en dur ramenées à la palette (échelle bleue 50→950, neutres, statuts). Bleu de marque unique #03137F (5 variantes supprimées), survol #1033A8 (bleu 600), appui #010A5D (bleu 800), texte #24262B (gris-canon), textes secondaires #5F6875 (gris-acier), bordures #AEB4BE / #E5E8EC. Audit des styles calculés sur 23 écrans × 2 largeurs : 0 couleur hors palette.
- Contraste : 0 texte sous 4,5:1 (formulaire de contact, mention RGPD, légendes, cookies corrigés).
- Focus : champs de formulaire avec l'anneau border/focus (3 px #5C82DA), comme les liens et boutons.
- Statuts : erreur en #A11B2B sur #FDECEF avec contour ; icône (✓ / ×) sur « Message envoyé », « Il y a un souci », erreur et confirmation de candidature.
- Hauteurs de page inchangées à 1440, 1024 et 390 px.

Écarts conservés volontairement (maquettes prioritaires) : tailles de titres et de texte, navigation 18 px, boutons du bandeau final, espacements hors grille de 4 px, angles droits, bouton secondaire bleu, confirmation d'envoi en bleu.

## Largeur > 1440 px et en-tête unifié (24/11/2026)

- Au-delà de 1440 px, la composition 1440 est agrandie proportionnellement (zoom calculé sur la largeur de la fenêtre) : plus de marges latérales, rendu identique à 1440. Vérifié à 1920 et 2560 px, sans défilement horizontal.
- En-tête et onglets de toutes les pages intérieures (Métiers, Approche, Contact, Candidature, pages légales) alignés sur Références : en-tête 91 px, logo 55 × 60 et texte 39 px, onglets gris #E5E8EC de 42 px, onglet actif en gras souligné 2 px. Vérifié à 1440, 1024 et 768 px ; mobile inchangé.
