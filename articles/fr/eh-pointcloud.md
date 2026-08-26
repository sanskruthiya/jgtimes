---
title: "Au-delà de PLATEAU — Données de nuage de points et jumeaux numériques au Japon"
description: "Un tour d'horizon des initiatives de nuage de points au Japon, centrées sur Virtual Shizuoka, et du développement des jumeaux numériques dans diverses régions"
date: 2026-04-02
category: [project, government]
author: "Eita.H"
---

# Introduction : le développement des données urbaines 3D au Japon

Depuis 2020, le Japon connaît une progression rapide dans le développement de données urbaines tridimensionnelles. L'une des initiatives les plus emblématiques est **PLATEAU**, projet de développement de modèles de ville 3D piloté par le Ministère de l'Aménagement du Territoire, des Infrastructures, des Transports et du Tourisme (MLIT).[^1]

**PLATEAU** représente les bâtiments et infrastructures urbaines sous forme de modèles structurés basés sur le concept de **LOD (Level of Detail)**, avec des applications attendues dans la planification urbaine, la prévention des catastrophes, la simulation et de nombreux autres domaines.

Par ailleurs, ces dernières années, une approche différente a émergé parallèlement à PLATEAU : les initiatives de développement et de publication de données urbaines et régionales sous forme de **nuages de points** progressent dans tout le Japon.

Les données de nuage de points consistent en d'immenses collections de points tridimensionnels acquis par levé laser aérien, cartographie mobile et d'autres méthodes. En intégrant des informations à ces points, les espaces urbains peuvent être reproduits avec une haute résolution.

Cet article présente les projets de publication de données de nuage de points les plus représentatifs du Japon et examine leurs caractéristiques et leur potentiel futur.

![Capture d'écran de Virtual Shizuoka au 30/03/2026](/images/articles/eita-h/eh_pointcloud_image01.webp)
Virtual Shizuoka visualisé dans le viewer du Projet de Jumeau Numérique de Tokyo, consulté le 30 mars 2026 [^2]

# Étude de cas : Virtual Shizuoka

L'une des initiatives pionnières en matière de publication de données de nuage de points au Japon est le projet **« Virtual Shizuoka »** de la Division de politique de construction de la Préfecture de Shizuoka, située dans le centre du Japon.

Depuis 2019, la Préfecture de Shizuoka développe des données de nuage de points à haute densité couvrant l'ensemble de la préfecture par levé laser aérien.[^2]

La publication de ces données en open data a eu un impact significatif dans tout le Japon. En 2025, la préfecture a achevé et publié les données couvrant l'ensemble de la région.[^2]

![Capture d'écran de Virtual Shizuoka au 30/03/2026](/images/articles/eita-h/eh_pointcloud_image02.webp)
Virtual Shizuoka, consulté le 30 mars 2026 [^2]

## État de développement

L'échelle et les spécifications de Virtual Shizuoka témoignent de la portée ambitieuse de cette initiative.[^2] [^3] [^4] [^5]

- Plus de **500 milliards de points** de données de nuage de points construits
- Couvre la superficie totale de la préfecture : **7 777 km²**
- Données publiées sur le **Centre d'information G-Spatial** sous licence **CC-BY 4.0**
- Données originales fournies en fichiers compressés au **format LAS**, avec des données de terrain traitées, des ortho-images, des données de conduite MMS et divers ensembles de données connexes
- Le volume total des données publiées dépasse **30 To** ; la taille moyenne par maille est de 300 Mo, pouvant dépasser 5 Go au maximum
- Chaque point contient latitude, longitude, altitude, données de couleur RVB, intensité de réception lumineuse et informations de classification
- Visionneuse web fournie en collaboration avec le **Projet de Jumeau Numérique de Tokyo**
- Coût total du projet : **1,84 milliard de yens (11,6 millions USD)**, financé à environ 23 % par le gouvernement national

Ces spécifications permettent à la Préfecture de Shizuoka de réaliser un **jumeau numérique à l'échelle 1:1** de l'ensemble de la région.

## Approche de développement des données

L'acquisition de données de nuage de points combine trois types d'approches, chacune avec des objectifs et des densités de points différents.[^3]

| Méthode de mesure | Cible | Densité de points |
|---|---|---|
| Balayage laser aérien (LP) | Sol, bâtiments, arbres, etc. | 16 points/m² ou plus |
| Bathymétrie laser aérienne (ALB) | Zones d'eaux peu profondes (côtes, rivières) | 1 point/m² ou plus |
| Système de cartographie mobile (MMS) | Surfaces de chaussées, abords des routes | 400 points/m² ou plus |

![Échantillon des trois types de données de Virtual Shizuoka au 30/03/2026](/images/articles/eita-h/eh_pointcloud_image03.webp)
Virtual Shizuoka, consulté le 30 mars 2026 [^6]

## Principales applications

Les applications de Virtual Shizuoka comprennent notamment :[^3]

- **Prévention des catastrophes** : Analyse des volumes de changement avant et après un événement catastrophique
- **Transport** : Développement de cartes pour la navigation des véhicules autonomes
- **Génie civil** : Simplification des processus de passation des marchés de travaux civils
- **Planification urbaine** : Simulation paysagère, aide à la concertation
- **Gestion des infrastructures** : Gestion avancée des inventaires par visualisation 3D des réseaux souterrains
- **Énergie** : Analyse du potentiel de production d'énergie solaire
- **Culture** : Amélioration de l'efficacité des fouilles archéologiques, archivage numérique des biens culturels
- **Tourisme** : Tourisme en réalité virtuelle via le métavers

Les données de nuage de points de Virtual Shizuoka sont appelées à être utilisées dans des domaines variés tels que la prévention des catastrophes, la gestion des infrastructures, le tourisme, la planification des transports et la planification urbaine, avec une utilisation croissante par les institutions de recherche et les entreprises privées.[^3] [^4]

En particulier dans les domaines du bâtiment, du génie civil et de la gestion des catastrophes, des applications pratiques sont mises en œuvre et des efforts sont en cours pour étendre ces connaissances à d'autres municipalités.[^4]

L'application à la conduite autonome est également anticipée. Concrètement, les données de Virtual Shizuoka sont utilisées pour développer des **cartes 3D haute définition (cartes HD)** pour les véhicules autonomes dans des expériences de démonstration intitulées **« Projet Show CASE de Conduite Autonome de Shizuoka »**.[^7]

# Autres projets de développement de données de nuage de points

À partir de 2026, de nombreux projets de données de nuage de points sont en cours au Japon en plus de **Virtual Shizuoka**.

## Projet de Jumeau Numérique de Tokyo

Tokyo, la capitale du Japon, a lancé son **« Projet de Jumeau Numérique »** en 2020, avec le développement de données de nuage de points débutant en 2022 comme composante clé de cette initiative.[^8] [^9] [^10]

Le développement des données de nuage de points comprend le prêt d'équipements, l'acquisition de données et l'assistance à leur valorisation.

Parmi les défis figurent des difficultés de positionnement dans certains endroits et la difficulté à reproduire la texture des biens culturels dans les visionneuses.[^9]

![Projet de Jumeau Numérique de Tokyo au 30/03/2026](/images/articles/eita-h/eh_pointcloud_image04.webp)
Projet de Jumeau Numérique de Tokyo, consulté le 30 mars 2026 [^9]

## Open Nagasaki

La Préfecture de Nagasaki, située dans le sud du Japon, fait également progresser **« Open Nagasaki »**, une initiative centrée sur la publication de données de nuage de points.[^11]

**Open Nagasaki**, lancé vers 2023, est connu comme un exemple représentatif de données ouvertes de nuage de points au Japon, avec un slogan unique qui intime à **« Utilisez-le librement »** sur un ton impératif.[^11]

Les données de nuage de points sont distribuées au **format LAS**. Bien qu'il n'existe pas de visionneuse officielle, le site officiel renvoie vers des méthodes de traitement des données et des exemples d'utilisation.

Une caractéristique distinctive de l'initiative de Nagasaki est que la publication des données progresse en collaboration avec des chercheurs et des communautés régionales, et pas seulement avec des organismes gouvernementaux. Ces initiatives de données ouvertes offrent des possibilités d'application dans divers domaines, notamment la préservation du patrimoine culturel local, le tourisme et la recherche urbaine.

![Open Nagasaki au 30/03/2026](/images/articles/eita-h/eh_pointcloud_image05.webp)
Site web d'Open Nagasaki, consulté le 30 mars 2026 [^11]

## Projet de nuage de points de l'Expo d'Osaka

Un autre cas intéressant est l'initiative de développement de données de nuage de points ciblant la zone du site de l'**Expo Osaka-Kansai**.

Ce projet acquiert l'intégralité de l'espace du site de l'expo, y compris les pavillons de diverses régions, sous forme de données de nuage de points de haute précision et les conserve en tant que jumeau numérique.[^12]

Il est développé et publié dans le cadre de **PLATEAU**, le projet de construction de modèles de ville 3D piloté par le MLIT.

Le MLIT précise explicitement l'usage prévu : « Nous espérons que ces données seront utilisées pour développer du contenu permettant de revisiter le site de l'expo et des supports pédagogiques », et **l'usage commercial est interdit**.[^12] [^13]

Le développement de données de nuage de points ciblant des événements à grande échelle et à durée limitée comme les expositions universelles attire l'attention comme une nouvelle application différente de la planification urbaine traditionnelle. Ces initiatives ont également une valeur significative du point de vue de l'enregistrement des espaces urbains et de l'archivage numérique.

![Expo Osaka 2025 au 30/03/2026](/images/articles/eita-h/eh_pointcloud_image06.webp)
Données de nuage de points de l'Expo Osaka-Kansai, consultées le 30 mars 2026 [^13]

# Perspectives d'avenir

Comme démontré tout au long de cet article, le développement de données de nuage de points au Japon a progressé rapidement depuis l'entrée dans les années 2020. De la couverture préfectorale complète de **Virtual Shizuoka** à l'initiative d'archivage d'événements de l'**Expo Osaka-Kansai**, des modèles diversifiés de développement de données de nuage de points émergent dans tout le Japon.

Chaque projet reflète des priorités et des approches différentes : développement d'infrastructures piloté par le gouvernement, engagement collaboratif avec les communautés et préservation numérique d'événements à durée limitée. Cette diversité suggère que la technologie de nuage de points trouve des applications au-delà de la planification urbaine et de la prévention des catastrophes traditionnelles.

Cependant, des défis importants subsistent. Les données de nuage de points atteignent des tailles énormes — comme les 30 To de Virtual Shizuoka —, ce qui rend le traitement, le stockage et l'adoption généralisée difficiles pour les municipalités et organisations plus petites ne disposant pas de ressources techniques substantielles.

De ce point de vue, le cas de **Virtual Shizuoka** offre un modèle particulièrement prometteur pour l'avenir. Plutôt que chaque municipalité développe des systèmes isolés, Virtual Shizuoka partage activement son infrastructure technique et ses connaissances avec d'autres collectivités locales, créant une base pour le développement collaboratif.

Bien que les organisations administratives japonaises soient généralement connues pour leur structure organisationnelle verticale et cloisonnée, **les efforts de déploiement horizontal de Virtual Shizuoka** représentent un changement de paradigme. Cette approche contribuera significativement non seulement à la prolifération des données de nuage de points, mais à la vision plus large du Japon d'un jumeau numérique national.

L'expansion continue de ces initiatives collaboratives au niveau municipal, combinée aux avancées technologiques continues en matière de traitement et de visualisation des données, accélérera à la fois le développement et l'utilisation pratique des données de nuage de points dans tout le Japon.

# Références

[^1]: https://jgtimes.org/articles/4_PLATEAU
[^2]: https://virtualshizuokaproject.my.canva.site/
[^3]: https://www.pref.shizuoka.jp/_res/projects/default_project/_page_/001/052/183/jireishu8.pdf
[^4]: https://fmc.pref.shizuoka.jp/fujinokuni/article/article-19/
[^5]: https://www.geospatial.jp/ckan/dataset/virtual-shizuoka-mw
[^6]: https://www.geospatial.jp/ckan/dataset/shizuoka-19-20-pointcloud
[^7]: https://lumiarch.ntt-east.co.jp/articles/202501_virtualshizuoka/
[^8]: https://club.informatix.co.jp/?p=19382
[^9]: https://info.tokyo-digitaltwin.metro.tokyo.lg.jp/
[^10]: https://www.digital-recruit.metro.tokyo.lg.jp/interview/digitaltwin/
[^11]: https://opennagasaki.nerc.or.jp/
[^12]: https://www.expo2025.or.jp/news/news-20260306-01/
[^13]: https://www.geospatial.jp/ckan/dataset/osakaexpo-2025
