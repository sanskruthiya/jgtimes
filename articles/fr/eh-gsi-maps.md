---
title: "GSI Maps : le service officiel de cartographie web du Japon"
description: "GSI Maps : le service officiel de cartographie web du Japon"
date: 2025-10-19
category: [service, government]
author: "Eita.H"
thumbnail: NA
---

# Vue d'ensemble

**GSI Maps** est l'application officielle de cartographie web développée et exploitée par **l'Autorité d'Information Géospatiale du Japon (GSI)**.

Elle fournit des informations complètes sur le territoire national du Japon capturées par la GSI, notamment les cartes topographiques, les photographies aériennes, les cartes d'altitude, les classifications géomorphologiques et les informations sur les catastrophes. La plateforme offre également des fonctionnalités pour créer des profils topographiques, comparer des photographies historiques et actuelles, et la visualisation en 3D.[^1] [^2]

![Image de GSI Maps au 19/10/2025](/images/articles/eita-h/eh_GSImaps.webp)
GSI Maps, consulté le 19 octobre 2025 [^2]

# Historique du développement

Vers l'an 2000, l'Autorité d'Information Géospatiale du Japon envisageait **« une société où l'information géospatiale peut être accessible à tout moment et partout via Internet, permettant à chacun de partager des informations »**.[^3]

Pour réaliser cette vision, **« le Système Web de Cartographie du Territoire National Numérique »** (ou Portail du Territoire National Numérique) a été développé en 2003. Le système de l'époque était fourni comme outil de visualisation de cartes pour Internet Explorer (IE), conçu pour intégrer et afficher les informations détenues par la GSI.[^4]

Par la suite, alors que Google Maps et d'autres systèmes de cartographie web privés se sont rapidement répandus à la fin des années 2000, la GSI a assumé le rôle de combler les lacunes que les systèmes d'entreprises privées ne pouvaient pas couvrir.

Concrètement, avec le concept de **fournir des services mieux adaptés aux collectivités locales et aux agences nationales**, la GSI a lancé expérimentalement le système successeur **« Digital National Land Web.NEXT »** en 2012. Les spécifications de ce système successeur ont également été influencées par le Grand Séisme du Japon de l'Est de 2011. Par exemple, à la suite du séisme, la demande d'informations d'altitude a augmenté en raison des préoccupations liées aux tsunamis et aux inondations, conduisant à l'amélioration des fonctions d'affichage des informations topographiques et d'altitude.[^3]

Dans ce contexte, en octobre 2013, **« Digital National Land Web.NEXT »** a été rebaptisé **« GSI Maps »** et officiellement lancé.[^5]

En 2022, la GSI a commencé à fournir expérimentalement des **« tuiles vectorielles optimisées pour GSI »** sur GitHub.[^13] Les orientations futures comprennent la mise en œuvre de l'affichage et de la distribution de tuiles vectorielles, ainsi que la promotion de l'exploitation stable, du déploiement distribué, de la modularisation des fonctions et de l'utilisation de données d'altitude de haute précision.[^6]

D'un point de vue technique en tant que carte web, le système a été amélioré en 2010 pour être basé sur OpenLayers.[^7]
Par la suite, dans les améliorations mises en œuvre au cours de l'exercice 2014, la configuration a été modifiée pour être basée sur LeafletJS afin d'obtenir un système plus léger.[^8]

# Caractéristiques de GSI Maps

Une caractéristique majeure de GSI Maps est qu'il s'agit d'une carte web affichant la **« représentation officielle du Japon »** fournie par le Japon en tant que nation.
Cependant, elle **n'inclut PAS d'informations commerciales telles que les magasins**. Cela peut être vu comme le résultat d'une différenciation des rôles avec les cartes web privées, telle que clarifiée dans l'historique du développement mentionné ci-dessus.

GSI Maps distribue principalement les informations suivantes :[^7]
- Photographies aériennes
- Cartes de base incluant les formes des bâtiments et les routes
- Cartes thématiques telles que des cartes à code couleur basées sur l'environnement et les conditions naturelles
- Informations sur les catastrophes
- Données d'altitude

Les fonctions principales de la carte web comprennent l'affichage de la carte, la recherche de localisation, la comparaison en double écran, le dessin, la mesure et l'affichage 3D.
De plus, en tant que système de cartographie web, la GSI fournit également **le service « GSI Tiles »** pour la distribution de données de tuiles.

L'interface utilisateur de GSI Maps peut sembler trop traditionnelle pour ceux qui préfèrent les cartes web modernes. Cette interface utilisateur peut également être vue comme le résultat du développement ciblant les collectivités locales.

# Utilisation et applications de GSI Maps

L'accès à GSI Maps a augmenté régulièrement ces dernières années, avec **plus de 8 milliards de tuiles** distribuées par mois en 2021.[^6]

Le cas d'usage spécifique le plus prominent de GSI Maps est son utilisation comme **cartes d'information liées aux catastrophes** par les collectivités locales.[^9]

De plus, il existe de nombreux cas où GSI Maps est simplement utilisé comme cartes de fond pour diverses applications cartographiques municipales. Les cartes du territoire national contiennent de nombreux éléments sensibles tels que les revendications territoriales et les noms officiels. Dans cette perspective, les cartes fournies par le gouvernement peuvent être utilisées en toute sécurité comme cartes de fond, ce qui représente un avantage significatif pour les collectivités locales.

GSI Maps reçoit également un accès substantiel de la part d'utilisateurs non gouvernementaux. En raison de fonctionnalités telles que les cartes d'altitude de haute précision et la capacité de comparer des photographies aériennes de différentes époques, il existe un certain nombre d'enthousiastes au Japon.
Par exemple, **« le Fan Club de GSI Maps »**, une communauté de volontaires, compte plus de 4 000 abonnés sur les réseaux sociaux à partir de 2025.[^10] [^11]
Ainsi, GSI Maps peut être qualifié de service largement apprécié non seulement à des fins professionnelles par le personnel municipal, mais aussi à des fins de loisirs par les citoyens en général.
De plus, il existe le **« Réseau de Partenaires GSI Maps »** comme espace officiel d'échange d'informations et d'opinions sur GSI Maps.[^12]
L'existence de ces communautés fournit une base solide pour promouvoir l'utilisation de GSI Maps et des GSI Tiles.

# Défis futurs

Comme mentionné ci-dessus, GSI Maps promeut la mise en œuvre des tuiles vectorielles, l'exploitation stable, le déploiement distribué, la modularisation des fonctions et l'utilisation des données d'altitude de haute précision.[^6]
Techniquement, à partir de 2025, le système est basé sur LeafletJS, mais compte tenu de la future implémentation des tuiles vectorielles et des mises à niveau majeures de version de LeafletJS, de nouvelles améliorations pourraient être implémentées prochainement.
Dans ces circonstances, l'interface utilisateur traditionnelle conçue pour les collectivités locales pourrait également nécessiter des mises à jour plus conviviales dans les prochaines versions.
Alors que les services de cartographie privés connaissent une évolution rapide, la mise à niveau des systèmes existants représente une tâche difficile. Des ajustements minutieux seront nécessaires sur la base d'entretiens avec différents types d'utilisateurs, notamment les collectivités locales, le secteur privé et les particuliers.

# Références

[^1]: https://maps.gsi.go.jp/help/intro/index.html
[^2]: https://maps.gsi.go.jp/
[^3]: https://internet.watch.impress.co.jp/docs/column/chizu/581167.html
[^4]: https://www.gsi.go.jp/common/000024540.pdf
[^5]: https://www.gsi.go.jp/common/000091037.pdf
[^6]: https://maps.gsi.go.jp/pn/meeting_partners/data/20221206/02_%E5%9C%B0%E7%90%86%E9%99%A2%E5%9C%B0%E5%9B%B3%E3%81%AE%E4%BB%8A%E5%BE%8C%E3%81%AE%E5%B1%95%E9%96%8B.pdf
[^7]: https://www.ajg.or.jp/disaster/files/202103_TeqSymposium_S106.pdf
[^8]: https://www.gsi.go.jp/common/000104529.pdf
[^9]: https://renkei2.gsi.go.jp/renkei/130104kyotei/riyourei_low.pdf
[^10]: https://hackmd.io/@ccfc/SkZjLTyX_
[^11]: https://x.com/CChizu_FC
[^12]: https://maps.gsi.go.jp/pn/
[^13]: https://github.com/gsi-cyberjapan/optimal_bvmap
