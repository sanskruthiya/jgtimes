---
title: "Projet PLATEAU : le modèle de ville 3D piloté par le gouvernement japonais"
description: "Projet PLATEAU piloté par le Ministère de l'Aménagement du Territoire, des Infrastructures, des Transports et du Tourisme"
date: 2025-08-01
category: project
author: "Eita.H"
---

**PLATEAU est un projet de jumeau numérique urbain à l'échelle nationale au Japon** promu par le Ministère de l'Aménagement du Territoire, des Infrastructures, des Transports et du Tourisme (MLIT) en collaboration avec diverses parties prenantes.
Lancé en 2020, il avait développé et publié des modèles de ville 3D en tant que données ouvertes pour 56 villes à travers le Japon dès 2021.[^1]

Il offre également des services tels que **PLATEAU VIEW (un visualiseur)**, un site portail et des API.

# Liens
- Projet PLATEAU[^1]
- PLATEAU VIEW[^2]
- Site Portail PLATEAU du Centre d'Information G-Spatial[^3]

![Image exemple de PLATEAU View au 01/08/2025](/images/articles/eita-h/PLATEAUVIEW.webp)
PLATEAU View, consulté le 1er août 2025 [^2]

# Vue d'ensemble

Ce projet, dirigé par le Ministère de l'Aménagement du Territoire, des Infrastructures, des Transports et du Tourisme (MLIT), vise à développer et à publier des **modèles de ville 3D de haute précision** pour les villes à travers le Japon.
Une caractéristique significative de ce projet est qu'il développe des données 3D des formes des bâtiments urbains, des hauteurs et des informations d'utilisation des terres avec une qualité garantie par le gouvernement, et met une grande partie de ces données à disposition en tant que données ouvertes avec métadonnées, gratuitement.

Ces données ouvertes devraient accélérer la réalisation de **jumeaux numériques et d'initiatives de villes intelligentes** au Japon, permettant des applications avancées dans divers domaines tels que la planification urbaine, la prévention des catastrophes, les transports, le tourisme et l'architecture.[^7]

Depuis le lancement du projet en 2020, les cas d'usage par les entreprises privées, les institutions de recherche et les développeurs citoyens augmentent, et PLATEAU continue de croître comme **un nouveau fondement pour l'information géospatiale au Japon**.

# Concept

Le nom PLATEAU s'explique ainsi : « Les modèles de ville 3D fournissent d'innombrables points de connexion à la société, et à travers eux, divers domaines deviennent interconnectés et se développent à travers le cyberespace — la dénomination PLATEAU incarne l'attente d'un développement mondial autonome et résilient, similaire à ce que Deleuze et Guattari anticipaient dans "Mille Plateaux" ».[^1]
Cela reflète son sens philosophique et ambitieux.

Le site web et les autres supports présentent des designs sophistiqués par rapport aux agences gouvernementales traditionnelles. Cette approche est censée refléter le parcours académique de **Yuya Uchiyama, personnage clé du MLIT qui a dirigé le projet PLATEAU** et possède un parcours inhabituel en philosophie, ainsi que la stratégie de **Seiichi Saito, qui était responsable du branding**.[^4]

De plus, en 2017, la Fédération des Entreprises Japonaises a présenté la stratégie relative à **« Société 5.0 »**, promouvant la création d'un « Japon Virtuel » plus futuriste et avancé grâce à la collaboration public-privé.[^5] [^12]

Bien qu'il n'existe pas de relation directe entre Société 5.0 et PLATEAU, les modèles de ville 3D de PLATEAU devraient jouer un rôle significatif dans la réalisation de cette stratégie nationale.

# Approche de développement et cas d'usage

Le cœur du Projet PLATEAU est les données, en particulier les **ensembles de données de modèles de ville 3D**, qui sont développés et publiés séquentiellement dans **chacune des collectivités locales du Japon**.

Depuis le lancement du projet en 2020, **le nombre de municipalités participantes a augmenté d'année en année**, avec pour objectif de publier des données pour 500 villes d'ici 2027.[^6]

De plus, plutôt que de limiter les cas d'usage du côté de PLATEAU, beaucoup est laissé à la discrétion et aux idées des utilisateurs. C'est pourquoi **divers événements sont organisés pour partager les cas d'usage du data utilization**, permettant à de nombreuses personnes de comprendre et d'utiliser la valeur de PLATEAU.[^7]

Parmi les applications pratiques, **l'estimation du potentiel de production d'énergie solaire et la simulation de réflexion** utilisant les formes de bâtiments 3D illustrent l'utilité pratique des données PLATEAU.[^16]

![Image exemple de cas d'usage PLATEAU au 01/08/2025](/images/articles/eita-h/PLATEAU_usecase_uc.webp)
Cas d'usage PLATEAU : estimation du potentiel de production d'énergie solaire, consulté le 1er août 2025 [^16]

Au-delà des applications pratiques, PLATEAU encourage également l'exploration créative à travers des compétitions. Des exemples concrets incluent le **PLATEAU AWARD**[^14], un concours annuel où des cas d'usage dans des domaines tels que la prévention des catastrophes, la santé et le contenu AR/VR sont présentés.

De plus, le **PLATEAU Hack Challenge**, un hackathon, a vu de nombreux prototypes originaux proposés, notamment des simulations de Godzilla détruisant des villes.[^15]

![Image exemple de cas d'usage PLATEAU au 01/08/2025](/images/articles/eita-h/PLATEAU_usecase_gz.webp)
Cas d'usage PLATEAU : simulation de destruction de ville par Godzilla, consulté le 1er août 2025 [^15]

# Modèles de ville 3D

Les modèles de ville 3D de PLATEAU sont développés et publiés par les municipalités par étapes, du **LOD0 au LOD2**.[^8]

Si des données urbaines 3D peuvent être disponibles chez d'autres fournisseurs de cartes, l'un des avantages notables de PLATEAU semble être la **qualité de haute précision et les métadonnées garanties par le gouvernement**. C'est pourquoi il devrait être utilisé dans des domaines nécessitant un intérêt public, tels que **la planification urbaine, la prévention des catastrophes, les transports, le tourisme et l'architecture**.

De plus, bien que les modèles de ville 3D puissent évoquer des images de traitement avec des logiciels de modélisation 3D comme Blender, une caractéristique significative de PLATEAU est qu'il peut être géré comme **des données GIS**. Si les données originales prennent en charge divers types de formats tels que GeoJSON, elles sont principalement publiées au format **CityGML** conforme OGC, et des outils open source sont fournis pour **convertir le CityGML de PLATEAU en données GIS courantes**.[^9] [^10]

# Défis

Le projet PLATEAU, qui a débuté en 2020, a réalisé certains succès, mais fait actuellement face à de nombreux défis.

Premièrement, le développement des données nécessite **un budget significatif**. Selon une entreprise japonaise de topographie de premier plan, le coût de développement pour une municipalité typique d'une population de 150 000 habitants et d'une superficie de 200 km² est d'environ 23 millions de yens (environ 140 000 à 160 000 USD).[^13]

De plus, un défi commun à toutes les données géospatiales est qu'une fois développées, **les données doivent être mises à jour périodiquement**. Cela nécessite également un budget conséquent, rendant nécessaire l'exploration de méthodes plus efficaces et rentables. À partir de 2025, des méthodes utilisant des données de nuage de points LiDAR pour développer les modèles de ville 3D de PLATEAU sont proposées comme expériences de démonstration, et des mises à jour des données utilisant des images satellitaires sont également envisagées.[^11]

# Références

[^1]: https://www.mlit.go.jp/plateau/about/
[^2]: https://www.mlit.go.jp/plateau/plateau-view-app/
[^3]: https://www.geospatial.jp/ckan/dataset/plateau
[^4]: https://www.mlit.go.jp/plateau/journal/j060/
[^5]: https://club.informatix.co.jp/?p=13629
[^6]: https://www.zenrin.co.jp/product/article/project-plateau/index.html
[^7]: https://www.mlit.go.jp/plateau/use-case/
[^8]: https://www.mlit.go.jp/plateau/learning/tpc03-3/
[^9]: https://www.ogc.org/standards/citygml/
[^10]: https://github.com/Project-PLATEAU/PLATEAU-GIS-Converter
[^11]: https://club.informatix.co.jp/?p=13629
[^12]: https://www8.cao.go.jp/cstp/society5_0/
[^13]: https://www.kkc.co.jp/service/lp/27544/
[^14]: https://www.mlit.go.jp/plateau-next/award/#top
[^15]: https://ascii.jp/elem/000/004/065/4065283/
[^16]: https://www.mlit.go.jp/plateau/use-case/uc24-15/
