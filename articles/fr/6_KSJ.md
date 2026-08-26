---
title: "Données GIS essentielles du gouvernement : Service de Téléchargement d'Information Numérique du Territoire National"
description: "À propos du Service de Téléchargement d'Information Numérique du Territoire National, fournissant des données GIS essentielles et gratuites du gouvernement japonais"
date: 2025-08-10
category: [service, government]
author: "Eita.H"
---

# Vue d'ensemble

Le « Service de Téléchargement d'Information Numérique du Territoire National » (Kokudo Suuchi Jouhou) du Japon[^1] est le catalogue de données GIS le plus représentatif fourni par le Ministère de l'Aménagement du Territoire, des Infrastructures, des Transports et du Tourisme (MLIT). Il offre diverses informations géospatiales sur le territoire national du Japon en tant que données GIS gratuites. Puisqu'il fournit une couverture complète des informations spatiales fondamentales du pays, c'est l'un des services les plus accessibles et les plus fréquemment utilisés par les utilisateurs japonais de GIS, des débutants aux experts.

# Principales catégories de données

À partir de 2025, le site web du Service de Téléchargement d'Information Numérique du Territoire National[^1] propose trois catégories de menu principales : « Information Numérique du Territoire National », « Information de Référence de Localisation » et « Enquête Nationale », ainsi qu'un système de cartographie web dédié pour la navigation simple des données.

- **Information Numérique du Territoire National** : Une collection de bases de données fournissant des informations spatiales fondamentales sur le territoire national en tant que données GIS, incluant la topographie, l'utilisation des terres, les équipements publics et le transport

- **Information de Référence de Localisation** : Un ensemble de données contenant des informations de localisation au niveau des îlots dans tout le pays, avec les noms des îlots et les coordonnées de point représentatif (latitude et longitude)

- **Enquête Nationale** : Informations d'enquête liées à la classification des terres et à la gestion des eaux pour le contrôle des inondations et l'utilisation des eaux

La section Information Numérique du Territoire National contient de nombreux ensembles de données qui servent de base à l'analyse GIS. Les exemples incluent les écoles, les gares ferroviaires et les parcs. De plus, de nombreux ensembles de données comprennent de précieuses informations d'attributs pour l'analyse, telles que le nombre de passagers pour les gares ferroviaires, qui complètent les données de base sur les équipements publics.

# Formats de données

Les formats de données principaux sont conformes aux normes JPGIS 2.1 et sont fournis aux formats Shapefile, XML et GeoJSON. Les données téléchargées sont stockées au format ZIP. Les cas d'usage commerciaux et non commerciaux sont tous deux pris en charge, les informations de licence étant spécifiées dans les métadonnées de chaque ensemble de données.

En février 2025, le service a mené une enquête auprès des utilisateurs sur les préférences de format de données, générant de nombreuses discussions via des formulaires de questionnaire et le dépôt GitHub pertinent.[^2] Les formats de données présentés en exemple comprenaient FlatGeobuf, GeoPackage, GeoParquet, GeoArrow et PMTiles. À partir de 2025, la demande pour le format Shapefile reste forte parmi les utilisateurs traditionnels de GIS au Japon. Cependant, l'importance des formats adaptés aux systèmes de cartographie web haute performance et à l'analyse à grande échelle a été fréquemment soulignée ces dernières années. Dans ce contexte, la discussion sur les méthodes contemporaines de fourniture de données GIS a suscité un débat considérable. Les résultats de cette révision n'avaient pas encore été finalisés en août 2025.

# Historique du service

L'Information Numérique du Territoire National, qui sert de source de données pour le service de téléchargement, a une longue histoire remontant à 1974, date à laquelle son développement a commencé. Un facteur majeur était le plan de développement national global annoncé en 1969, qui avait identifié des données territoriales insuffisantes et l'absence de méthodologies scientifiques pour le développement régional.[^3] Initialement, les données compilées n'étaient fournies qu'aux institutions publiques et aux organisations de recherche via un système à demande.[^3]

En 2001, le site web GIS, prédécesseur du site actuel de Téléchargement d'Information Numérique du Territoire National, a été lancé, rendant les données GIS largement accessibles au grand public pour le téléchargement.

De plus, en 2010, toutes les données ont commencé à être converties et fournies au format Shapefile, qui était à l'époque le format de données GIS à usage général le plus largement utilisé. Cela a rendu le service largement accessible à divers utilisateurs de GIS, notamment les agences gouvernementales, les entreprises privées, les étudiants et les citoyens en général. Cependant, on ne peut nier que cette adoption généralisée du format Shapefile est devenue une dette technique ces dernières années.

Dans ce contexte, le « Groupe d'Étude sur les Approches Futures du Développement de l'Information Numérique du Territoire National »[^4] a été créé en 2023 pour examiner les méthodes contemporaines de fourniture de données GIS.

# Initiatives de promotion du service

Comme mentionné ci-dessus, le Service de Téléchargement d'Information Numérique du Territoire National se caractérise non seulement comme un site web familier pour les utilisateurs japonais de GIS, mais aussi comme un service qui démontre des approches contemporaines de fourniture de données GIS.

Pour promouvoir davantage l'utilisation des données, le service organise le « Prix Ichi-BIZ », un concours d'idées commerciales utilisant le Service de Téléchargement d'Information Numérique du Territoire National. Le nom « Ichi » fait référence à « localisation » en japonais, soulignant la nature géospatiale du concours d'affaires.

De plus, via le « Groupe d'Étude sur les Approches Futures du Développement de l'Information Numérique du Territoire National »,[^4] le service a activement sollicité des opinions d'utilisateurs via des enquêtes et le dépôt GitHub pertinent,[^2] facilitant des échanges d'opinions vivants sur les formats de données GIS attendus. Cela démontre la politique du service d'évoluer en collaboration avec les utilisateurs de GIS.

Grâce à de telles initiatives, le Service de Téléchargement d'Information Numérique du Territoire National continuera de servir de ressource fondamentale soutenant les utilisateurs japonais de GIS.

# Références

[^1]: https://nlftp.mlit.go.jp/ksj/
[^2]: https://github.com/gislab-mlit/next-ksj-formats
[^3]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/content/001711014.pdf
[^4]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/tochi_fudousan_kensetsugyo_tk17_000001_00029.html
