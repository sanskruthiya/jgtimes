---
title: "Cas d'usage — Mini Tokyo 3D : un jumeau numérique des transports en commun de Tokyo"
description: "Cas d'usage de données géospatiales — Introduction à Mini Tokyo 3D : un jumeau numérique des transports en commun de Tokyo"
date: 2025-11-06
category: [usecase, opensource]
author: "Eita.H"
thumbnail: NA
---

# Vue d'ensemble

Depuis les années 2010, diverses données géospatiales ont été mises à disposition en tant que données ouvertes au Japon, principalement par le gouvernement national et les gouvernements locaux.
Cet article présente **« Mini Tokyo 3D »** comme cas d'usage d'applications cartographiques exploitant ces données ouvertes.

**Mini Tokyo 3D** est une application de jumeau numérique qui visualise l'état opérationnel en temps réel des transports en commun de Tokyo et de ses environs.[^1]
Elle affiche les mouvements des trains et des bus de Tokyo sur une carte 3D intuitive.

À partir de 2025, elle prend en charge **quatre langues**. Nous vous invitons à découvrir ce **jumeau numérique des transports en commun de Tokyo** via le site suivant.

- Site en direct : [Mini Tokyo 3D](https://minitokyo3d.com/)
- Guide utilisateur : [Vue d'ensemble de Mini Tokyo 3D](https://minitokyo3d.com/docs/master/user-guide/overview.html)

![Image de MiniTokyo3D au 04/11/2025](/images/articles/eita-h/eh_MiniTokyo3D.webp)
Image de MiniTokyo3D, consultée le 4 novembre 2025 [^1]

# Contexte du développement

Mini Tokyo 3D a été développé par l'ingénieur logiciel **Akihiko Kusanagi**.[^2]
Le développement a été initié en 2019 par le **« Concours de Données Ouvertes sur les Transports Publics de Tokyo »**, une compétition publique organisée par le Centre de Données Ouvertes sur les Transports Publics.[^2] [^7]

L'un des objectifs de ce concours était de **« permettre aux visiteurs étrangers de naviguer dans les transports en commun de Tokyo pendant les Jeux Olympiques de Tokyo »**.[^3]
Cependant, le développeur a déclaré : « Personnellement, je voulais créer un jumeau numérique intéressant, et je cherchais de bonnes données à cette fin quand j'ai découvert ce concours ».[^3]

Ce développement peut donc être caractérisé comme un projet qui a débuté lorsque **les intérêts personnels du développeur se sont alignés avec les données disponibles**, plutôt que d'être motivé par des besoins commerciaux ou sociaux.

En conséquence, l'application a remporté le grand prix de ce concours et a ensuite attiré une large attention grâce à des événements tels que les confinements liés au COVID-19 et les Jeux Olympiques de Tokyo.[^4]

# Caractéristiques de l'application

Comme il est largement connu, le réseau de transports en commun du Japon est conçu avec une précision de classe mondiale.
À Tokyo, **plus de 40 opérateurs ferroviaires gèrent plus de 140 lignes**. Aux heures de pointe, les trains circulent **toutes les 1 minute et 50 secondes**, pour un total de **40 millions de passagers par jour**.[^2]
Mini Tokyo 3D recrée ce réseau de transport complexe avec une fluidité de fonctionnement remarquable. C'est véritablement une application qui peut être qualifiée de **« jumeau numérique de Tokyo »**.

Les principales caractéristiques sont les suivantes :

🚊 **Visualisation des transports en temps réel**
- Visualisation 3D en temps réel des positions et des informations de retard des trains, bus et avions de Tokyo et ses environs.
- Implémentation d'une logique propre pour corriger le décalage entre les données distribuées et les mouvements réels des trains, améliorant les performances en temps réel.[^3]
- Rendu d'animations fluides de l'exploitation simultanée de plus de 2 200 trains[^3] aux heures de pointe.

🎨 **Design visuel et interface**
- Garantie de visibilité avec des objets 3D simples codés par couleur selon la ligne.
- Les réseaux de métro sont affichés via un changement de couches pour éviter la concurrence visuelle avec les réseaux de transport en surface.
- Coloration dynamique reflétant le jour/la nuit, la météo et les événements (comme les feux d'artifice).
- Paysage urbain réaliste avec des formes de bâtiments en 3D.

🌐 **Intégration et accessibilité**
- Intégration avec des images de caméras en direct (YouTube) pour vérifier la correspondance avec le monde réel.
- Prise en charge de 4 langues (japonais, anglais, chinois, coréen). De plus, l'interface utilisateur est compatible avec le thaï, le népalais, le portugais, le français, l'espagnol et l'allemand.[^1]

En combinant ces éléments, Mini Tokyo 3D est devenu **une application de jumeau numérique hautement sophistiquée** qui permet aux utilisateurs de vivre une ville en mouvement en temps réel.

# Caractéristiques techniques

Mini Tokyo 3D est construit sur **Mapbox GL JS, combiné avec Three.js et deckgl**.[^2]
(Pendant la phase de développement initiale, des prototypes ont été créés avec D3.js et LeafletJS.)[^3]

Les données en temps réel sont obtenues en combinant les API fournies par **le Centre de Données Ouvertes sur les Transports Publics (ODPT API)**[^5] et diverses données au format **GTFS (General Transit Feed Specification)**.[^6]

De plus, une logique propre a été implémentée pour corriger les retards dans les mises à jour de données et les déviations de trajectoire, maximisant les performances en temps réel.[^3]

Il existe également des innovations dans la représentation visuelle, où **les objets en mouvement sont simplifiés sous forme de boîtes codées par couleur** pour réduire la charge de rendu tout en facilitant la compréhension intuitive.

Pour la carte de fond, OpenStreetMap a été utilisé initialement, mais a depuis été remplacé par **Zenrin (la plus célèbre entreprise de cartographie du Japon) via l'intégration MapBox**.[^2]

Ainsi, Mini Tokyo 3D réalise un **équilibre entre design et optimisation technique**, en faisant un excellent modèle de référence pour le développement d'applications cartographiques et de jumeaux numériques au Japon.

# Cas d'usage

Mini Tokyo 3D peut être utilisé de manière polyvalente comme outil pour visualiser les opérations de transports en commun en temps réel.
Si des utilisations pratiques comme la planification d'itinéraires et la vérification de l'état des retards sont possibles, les applications dédiées à la planification d'itinéraires sont largement utilisées au Japon. Ainsi, l'utilisation de cette application pour la planification d'itinéraires sera probablement limitée.

Cette application a plutôt une grande valeur **en tant que vitrine pour observer les mouvements des transports en commun de Tokyo**.
En raison de son haut niveau de complétude en tant que jumeau numérique, les utilisateurs peuvent obtenir **une compréhension panoramique des mouvements urbains**.

Cela peut être décrit comme un **outil de promotion de la compréhension urbaine** qui visualise comment Tokyo en tant que ville est précisément soutenue par une infrastructure de transport à haute densité.

# Principaux enseignements de ce cas

Le développement de Mini Tokyo 3D peut être considéré comme l'un des **exemples réussis de la politique de données ouvertes du Japon portant ses fruits**.

Cette application est née d'un concours public pour promouvoir l'exploitation des données ouvertes et a grandi jusqu'à devenir une réalisation de reconnaissance mondiale par un développeur individuel.
Il s'agit d'un cas symbolique montrant que **publier des données peut motiver la participation individuelle créative**.

Les quatre points suivants méritent particulièrement d'être soulignés :

1. **🤝 Compatibilité entre données ouvertes et projet de développement individuel**
   Cette réalisation démontre que les individus peuvent reconstruire librement les données fournies par les gouvernements et les autorités locales pour créer de la valeur sociale.

2. **💡 Processus de développement mû par des intérêts personnels**
   Bien que les besoins sociaux ou commerciaux soient importants, ils ne sont peut-être pas essentiels pour développer de telles applications. Pour promouvoir l'utilisation des données ouvertes et générer un impact social, faire coïncider les intérêts individuels avec les données disponibles peut être tout aussi important.

3. **🎯 Fusion du design et de la technologie**
   Cette application est soutenue par d'excellents concepts de design et la technologie pour les réaliser. Cela permet la réalisation d'un jumeau numérique pour promouvoir la compréhension des villes.

4. **📚 Modèle d'implémentation technique**
   Le code de cette application est publié en open source, servant de modèle pour l'exploitation de données similaires.

Comme dans ce cas, il existe de nombreux projets au Japon où des individus utilisent des données ouvertes pour redécouvrir et partager des villes.

Les données ouvertes deviennent non seulement un moyen de divulgation d'informations par le gouvernement, mais **un catalyseur pour que les citoyens comprennent profondément les villes dans lesquelles ils vivent**.

# À propos de GTFS Box

Enfin, comme version étendue de cette application, nous présentons une application appelée **GTFS Box**.
Il s'agit d'un projet qui visualise les réseaux de transports en commun comme les bus dans diverses villes du monde.

Nous continuerons à suivre les développements futurs.

Site en direct : [GTFS Box](https://nagix.github.io/gtfs-box/)

# Références

[^1]: https://minitokyo3d.com/docs/master/user-guide/overview.html
[^2]: https://blog.mapbox.com/mini-tokyo-3d-a-real-time-3d-map-of-public-transportation-in-tokyo-1f19fb207632
[^3]: https://internet.watch.impress.co.jp/docs/column/chizu2/1226660.html
[^4]: https://internet.watch.impress.co.jp/docs/column/chizu3/2054836.html
[^5]: https://developer.odpt.org/
[^6]: https://www.gtfs.jp/
[^7]: https://www.odpt.org/overview/
