---
title: "Cas d'usage — Hinata GIS et open-hinata3 : le GIS open source ultra-polyvalent du Japon en pratique"
description: "Cas d'usage — Hinata GIS et open-hinata3 : le GIS open source ultra-polyvalent du Japon en pratique"
date: 2026-01-27
category: [usecase, opensource]
author: "Eita.H"
---

# Vue d'ensemble

**Hinata GIS** est un GIS web open source développé comme projet personnel par un employé d'un gouvernement préfectoral japonais.[^1]

Il est connu comme une **application cartographique polyvalente** incluant plus de **600 types de couches** issues de diverses données ouvertes et informations statistiques publiées au Japon, permettant aux utilisateurs de les superposer librement et de les visualiser/analyser.[^2]

![Capture d'écran d'OH3 au 26 janvier 2026](/images/articles/eita-h/eh_OH3_image02.webp)
*open-hinata3, consulté le 26 janvier 2026* [^3]

Il est notable que, bien qu'étant un projet de développement individuel, **la version originale « Hinata GIS » a été officiellement adoptée comme service web par la Préfecture de Miyazaki**, où travaillait le développeur.[^4]

Par la suite, le projet successeur **open-hinata3 (ci-après OH3)** continue d'être développé par le même développeur.

Ces dernières années, il a attiré l'attention tant du point de vue de l'innovation technique que de l'exploitation des données ouvertes, avec des développements tels que la **prise en charge des tuiles vectorielles et l'implémentation de fonctionnalités d'agent IA**.

## Liens connexes
- Dernière version ➡️ [**open-hinata3 (OH3)**](https://kenzkenz.jp/oh3/)
- Première édition ➡️ [**Hinata GIS**](https://hgis.pref.miyazaki.lg.jp/hinata/)
>Disponible uniquement en japonais. À partir de 2026, open-hinata3 est recommandé pour les utilisateurs généraux.

# Contexte

**« Hinata GIS »** est un GIS web que **Kenji Ochiai (@kenzkenz)**,[^5] alors employé d'une collectivité locale japonaise, a commencé à développer par intérêt personnel.[^6] [^9]

Le développement a débuté vers 2015. Le développeur, rattaché au département de politique d'information de la Préfecture de Miyazaki, située dans la région de Kyushu au sud du Japon, l'a construit en autodidacte avec le concept de **« rendre les données accessibles à tous »**.[^6] [^1]
Le nom **« Hinata » signifie « endroit ensoleillé »** en japonais et est un terme utilisé dans le slogan de la Préfecture de Miyazaki.[^4]

Dans le Japon des années 2010, la publication et l'exploitation des données ouvertes par le gouvernement national et les gouvernements locaux progressaient rapidement,[^7] et Hinata GIS se positionne comme l'un des exemples pratiques représentatifs nés de cette tendance.

Par la suite, en mars 2017, il a remporté le **grand prix du « Concours d'Applications RESAS »** organisé par le Cabinet du Premier ministre du Japon, gagnant une large reconnaissance parmi les utilisateurs de GIS et les collectivités locales japonaises.[^1]

La première version **« Hinata GIS » a ensuite été adoptée comme carte web officielle de la Préfecture de Miyazaki**.

![Capture d'écran de Hinata GIS au 26 janvier 2026](/images/articles/eita-h/eh_HinataGIS_Image01.webp)
*Hinata GIS sur le site officiel de la Préfecture de Miyazaki, consulté le 26 janvier 2026* [^4]

Après l'adoption officielle, le développeur a créé une version modernisée utilisant des technologies telles que les tuiles vectorielles.

De plus, vers 2024, il a commencé l'implémentation d'une nouvelle version en passant le framework web d'OpenLayers à MapLibre GL JS.
Dans ce processus, la version reconstruite sur MapLibre GL JS a été positionnée comme **la troisième version majeure** et baptisée **open-hinata3 (OH3)** par le développeur lui-même.

À partir de 2026, OH3 ne se contente pas d'augmenter le nombre de couches, mais fait également progresser des extensions fonctionnelles ambitieuses telles que les capacités d'**analyse IA**.[^2]

De plus, le projet a évolué vers une communauté plus large, avec des utilisateurs contribuant des rapports détaillés et des guides d'utilisation.[^8]

# Caractéristiques

Depuis les années 2010, divers outils et services GIS ouverts ont émergé au Japon dans le contexte de l'expansion des **données ouvertes municipales** et des **communautés OSS actives**.[^7]

Parmi eux, Hinata GIS se distingue comme un exemple représentatif, ayant **remporté des concours**, été **officiellement adopté par des collectivités locales** et maintenu **plus de 10 ans de développement continu**, incluant le développement de services successeurs.

## Concept de développement

Hinata GIS a été développé avec le concept de **« rendre les données accessibles à tous »**.[^1]

Le développeur déclare également qu'il aspire à créer un service permettant à de nombreuses personnes d'utiliser le GIS à des **fins diverses, comme Microsoft Excel**.[^6]

En fait, il est activement utilisé non seulement par les passionnés de GIS, mais aussi par les **employés des collectivités locales, les enseignants et les géomètres privés** au Japon.[^8]

De plus, dans le successeur OH3, le concept d'**« ultra-polyvalent »** est mis en avant avec les mots suivants :[^10]
> OH3 rassemble cartes, couches, analyses et sorties sur un seul plan de travail. Il ne définit pas l'usage. Il n'est pas réservé à des secteurs spécifiques. C'est un outil pour « les personnes qui veulent réfléchir en regardant des cartes ».

De plus, la **fonctionnalité d'agent IA** installée dans OH3 en 2025 est présentée comme **« OH3 × IA qui voyage dans le temps : un nouveau dialogue entre vous et les cartes »**.[^10]

Cela illustre un concept fonctionnel d'analyse interactive de l'**information géographique avec l'IA en utilisant les divers ensembles de données d'OH3 du passé jusqu'au présent**, proposant une nouvelle façon de concevoir le **GIS à l'ère de l'IA**.

![Capture incluant la fonctionnalité IA](/images/articles/eita-h/eh_OH3_image04.webp)
*Fonctionnalité d'agent IA dans OH3, consultée le 26 janvier 2026*

## Points forts d'OH3

Comme le développeur lui-même le nomme « **ultra-polyvalent** », le plus grand atout d'OH3 est ses **plus de 600 types de couches** sans limitation d'usage.[^10]

Ce qui a encore renforcé cet atout est la **fonctionnalité d'agent IA** précitée. Cela permet à OH3 de démontrer des **effets synergiques** en intégrant et analysant transversalement par IA la massive information de couches du passé jusqu'au présent pour tout emplacement national spécifié par les utilisateurs.

En d'autres termes, OH3 a évolué d'un simple outil de visualisation de couches à un système d'intégration et d'interprétation des données de façon chronologique et interdisciplinaire à partir d'emplacements spécifiques.

Ensuite, la **simplicité et la fluidité de l'opérabilité** sont également des atouts de ce service. L'interface d'OH3 a un design similaire aux GIS web maintenus par le gouvernement national et les collectivités locales du Japon, comme GSI Maps.[^11]

Ainsi, les employés des collectivités locales et les enseignants peu familiers avec les logiciels GIS professionnels peuvent commencer à l'utiliser **sans coûts d'apprentissage supplémentaires**.

De plus, OH3 étant un projet de développement individuel, le développeur @kenzkenz **communique fréquemment les méthodes d'utilisation et les nouvelles fonctionnalités via les réseaux sociaux**.[^5]

Ce **grand nombre de points de contact avec le développeur** est également attrayant. Par conséquent, certains utilisateurs sont devenus évangélistes : par exemple, **le manuel utilisateur le plus détaillé d'OH3** a été créé non par le développeur lui-même, mais par **un cabinet de géomètres qui est utilisateur**.[^8]

![Manuel utilisateur OH3 par un cabinet de géomètres](/images/articles/eita-h/eh_OH3_image03.webp)
*Manuel utilisateur d'open-hinata3 par un cabinet de géomètres, consulté le 26 janvier 2026* [^8]

## Fonctionnalités

En janvier 2026, la richesse des fonctionnalités d'OH3 peut être appréciée numériquement dans le tableau suivant.[^2]

| Élément | Valeur |
|---|---|
| Total des couches de données | 625+ types |
| Fonctions d'analyse IA | 10 types |
| Fonctions de la boîte à outils | 16 types |
| Graphiques statistiques | 47 types |
| Formats de fichiers pris en charge | 10+ types |
| Couches d'extension | 47 types |

## Fonctionnalités distinctives

Dans OH3, diverses fonctions sont intégrées en plus des fonctions de base d'exploitation de carte web.
Voici quelques-unes d'entre elles (en janvier 2026) :

- Affichage multi-écran (jusqu'à 4 écrans divisés) pour l'analyse comparative
- Plus de 625 fonds de carte et couches
- Outils de dessin/édition (stylo, ligne, polygone, etc. Calcul automatique de la surface des formes dessinées, partage avec d'autres possible)
- Intégration de données en temps réel (prévisions météo, informations sur le trafic, etc.)
- Fonction de création de rapports d'analyse IA (rapports automatiques de 10 types incluant prévention des catastrophes et environnement de garde d'enfants pour chaque emplacement)
- Agent IA
- Partage du contenu des conversations IA avec d'autres utilisateurs
- Amélioration d'images par IA
- Partage de cartes
- Chat de groupe
- Impression
- Profilage de population
- Mémo photo
- Lecture OCR
- Curseur temporel alors et maintenant
- Enregistrement de couches favorites
- Exports de fichiers divers

## Couches populaires

La boîte à outils d'OH3 permet de consulter les « Top 100 des couches populaires ».
Les 12 couches populaires les plus consultées en janvier 2026 étaient les suivantes :

- Carte du registre foncier 2025
- Photos récentes (photographies aériennes)
- Carte nationale des numéros de parcelle
- Carte du registre foncier 2025 - Points de contrôle
- Points de contrôle de bloc
- Carte du registre foncier 2025 - Cadre de carte
- Points de contrôle de base
- Photographies aériennes 1974-78 (national)
- Vecteur GSI
- Pyramide de population du recensement 2020
- Limites de quartiers 2020
- Villages de la fin de l'ère Edo (XIXe siècle)

## Principales applications

OH3 est un GIS « **ultra-polyvalent** » conformément au concept ci-dessus, et ses applications ne se limitent pas à des usages spécifiques.

Parmi ceux cités sur le site officiel figurent : **prévention des catastrophes, immobilier, enquêtes, urbanisme, éducation, recherche et loisirs**.[^10]

- Personnes souhaitant parcourir des cartes de façon détendue : comparaison de la topographie, de la structure urbaine, des cartes historiques et des photographies aériennes
- Personnes utilisant des cartes dans leur travail : opérations quotidiennes dans les collectivités locales, l'immobilier, la construction, les infrastructures et les enquêtes
- Personnes souhaitant apprendre/enseigner : supports pédagogiques pour les cours, ateliers et formations
- Professionnels : travail spécialisé en topographie, enquête, immobilier et divers types de conseil

De plus, en observant les **couches populaires** mentionnées, on constate que les couches liées à la **topographie, à la population et aux photographies aériennes historiques** ont une fréquence d'utilisation particulièrement élevée parmi les utilisateurs.

Il en est déduit que les cas d'usage sont particulièrement fréquents dans les **enquêtes topographiques, la pratique de la planification urbaine, l'enseignement de la géographie/prévention des catastrophes et la navigation cartographique occasionnelle**.

# Perspectives futures et défis

À mesure que ces données et fonctionnalités s'accumulent, OH3 devient de plus en plus attrayant. OH3 fonctionne comme un **point d'agrégation des données ouvertes**, un **terrain d'expérimentation du GIS** et une **plateforme favorisant l'interaction entre données et utilisateurs**.

En particulier, la **combinaison de l'IA et du GIS ultra-polyvalent** est innovante, et en permettant à divers utilisateurs de l'exploiter librement au-delà des applications GIS traditionnelles, on peut s'attendre à découvrir des **possibilités inattendues du GIS**.

D'autre part, le développeur a mentionné franchement dans ses communications les défis propres au développement individuel.
Ceux-ci incluent notamment la solitude et la difficulté à maintenir la motivation en continuant le développement seul pendant une longue période, le volume des réponses aux demandes, et les problèmes de coûts tels que les frais d'exploitation du serveur.[^6]

Comme pour de nombreux projets open source, **les incitations et la durabilité seront des défis difficiles**.

# Leçons tirées — Un tournant pour le GIS open source

Hinata GIS et OH3 peuvent être considérés comme l'un des exemples les plus représentatifs de l'exploitation des données ouvertes au Japon, ce système développé individuellement ayant été officiellement adopté par une collectivité locale et poursuivant son développement depuis plus de 10 ans.

La force motrice derrière cela était la **passion du développeur** pour persister dans le développement individuel. La mentalité de développement individuel très flexible a permis des **idées innovantes** telles que l'application de l'IA au GIS « ultra-polyvalent » et le **prototypage rapide**, mais en même temps, sa **durabilité reste un défi constant**.

Dans l'ensemble, le parcours de Hinata GIS et OH3 montre que les tendances des données ouvertes au Japon passent de l'étape de « **publier des données** » à l'étape de « **reconsidérer qui utilise, nourrit et soutient l'écosystème de données, et comment** ».

Qui exploite et comment la passion du développement individuel, et dans quels rôles la soutient-il ? Comment le gouvernement national et les collectivités locales, les entreprises et les communautés devraient-ils chacun s'impliquer ?
À partir de 2026, le GIS open source est peut-être à un carrefour où de telles questions se posent.

# Références

[^1]: https://www.nga.gr.jp/bank/details/13658/
[^2]: https://kenzkenz.jp/oh3/features.html
[^3]: https://kenzkenz.jp/oh3/
[^4]: https://hgis.pref.miyazaki.lg.jp/hinata/
[^5]: https://x.com/kenzkenz
[^6]: https://note.com/kenzkenz2536/n/nd278bdccbe51
[^7]: https://jgtimes.org/articles/3
[^8]: https://sakura.3ku.jp/gis/oh3-reversedictionary/
[^9]: https://www.stat.go.jp/dstart/case/16.html
[^10]: https://kenzkenz.jp/oh3/lp.html
[^11]: https://jgtimes.org/articles/eh-gsi-maps
