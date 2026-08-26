---
title: "État des lieux du GIS × IA au Japon"
description: "Un panorama de l'état actuel et des perspectives futures de l'intégration de l'information géospatiale et de l'IA au Japon"
date: 2026-07-01
category: [service, government]
author: "Eita.H"
---

# Introduction

Dans les années 2020, l'IA générative — centrée sur les grands modèles de langage (LLM) — a entraîné des transformations accélérées dans de nombreux secteurs de la société. Cette tendance a également atteint le domaine de l'information géospatiale : au Japon, l'application de l'IA au GIS progresse dans les sphères gouvernementale, académique et privée.

Cependant, l'IA générative actuelle, fondée sur le texte et les images, est considérée comme peu adaptée à l'analyse de l'information géospatiale.[^1] Parmi les raisons invoquées figurent le fait que lire une carte implique d'interpréter une information dense et à fort contexte créée par des tiers, et — d'un point de vue technique — le défi de permettre à l'IA de traiter des informations multimodales telles que des cartes, des images satellitaires, des données de nuage de points et des données de séries temporelles.[^2]

C'est pourquoi des initiatives concrètes autour du GIS × IA se sont multipliées ces dernières années au Japon, à travers le **Groupe d'étude sur la GéoIA** piloté par le **Ministère de l'Aménagement du Territoire, des Infrastructures, des Transports et du Tourisme (MLIT)** et le **Secrétariat du Cabinet**,[^3] les sessions GéoIA au sein de la **Société Japonaise d'Intelligence Artificielle**,[^4] et des présentations de recherche dans des communautés liées au GIS.

Cet article offre un panorama de l'état actuel du GIS × IA au Japon à partir de 2026, sous les angles pratique et politique.

# Le GIS × IA au Japon aujourd'hui

À partir de 2026, parmi les développements les plus marquants du GIS × IA au Japon figurent le lancement du « Groupe d'étude sur la GéoIA » piloté par le MLIT et le Secrétariat du Cabinet,[^3] ainsi que l'utilisation croissante de l'IA générative dans les services GIS tant par des organismes gouvernementaux que par des entreprises privées.

## Classification du GIS × IA

Le Groupe d'étude sur la GéoIA a abordé deux perspectives sur la collaboration entre information géospatiale et IA — **AI for GIS** et **GIS for AI** —, définies comme suit :[^5]
- **AI for GIS** : Faciliter l'utilisation du GIS grâce à l'IA
- **GIS for AI** : Permettre à l'IA de comprendre les relations spatiales et de proposer des prédictions et des actions dans le monde réel

Le Groupe indique également que, si l'objectif à long terme pour le Japon est le déploiement social du **GIS for AI**, la situation actuelle montre que l'**AI for GIS** est en avance.[^5]

Dans la catégorie **AI for GIS** — l'utilisation de l'IA pour exploiter les systèmes d'information géographique —, l'auteur identifie les configurations suivantes dans le panorama actuel :

- **Agent d'opérations GIS** : Agents IA (assistants), principalement en format de chat, permettant aux utilisateurs d'exploiter les logiciels GIS en langage naturel, pour la collecte de données, la visualisation, l'analyse et la prise de décision.
- **Analyse de données GIS** : IA comprenant et analysant de façon intégrée l'information des couches associées à une région ou thématique désignée par l'utilisateur.
- **Génération de données GIS** : Extraction automatisée d'éléments géographiques à partir de données satellitaires et d'images aériennes par IA, les transformant en données vectorielles ou autres formats.
- **Infrastructure d'intégration GIS-IA** : Logiciels et infrastructures de données connectant divers services IA aux services GIS.

![Classification du GIS × IA (élaboration de l'auteur)](/images/articles/eita-h/eh_geoai_image01.webp)
*Classification des applications GIS × IA (Source : Auteur)*

## Applications de l'IA dans les services GIS du secteur privé

Les cas d'usage de l'AI for GIS se multiplient également dans les entreprises privées au Japon. Les principales entreprises japonaises de GIS proposent ainsi des services de surveillance exploitant des données satellitaires, des images aériennes et l'IA.

Concrètement, **PASCO Corporation**, reconnue pour son expertise en topographie, a lancé en 2025 **« Mieteru Morido »**, un service surveillant les remblais à la recherche de risques de glissement de terrain grâce à des données satellitaires et à l'IA.[^6] Sa concurrente, **Kokusai Kogyo Co., Ltd.**, développe conjointement avec d'autres institutions de recherche un système IA multimodal qui analyse les catastrophes sédimentaires à partir d'images de drones avec un niveau de précision expert.[^7]

![Système d'analyse des catastrophes sédimentaires de Kokusai Kogyo](/images/articles/eita-h/eh_geoai_image02.webp)
*Système IA multimodal pour l'analyse des catastrophes sédimentaires à niveau expert (Source : Kokusai Kogyo Co., Ltd.)*

![Détection des changements topographiques par données satellitaires de PASCO](/images/articles/eita-h/eh_geoai_image03.webp)
*« Mieteru Morido » — service de surveillance des remblais par données satellitaires et IA (Source : PASCO Corporation)*

Citons également **« open-hinata3 »**, présenté dans un article précédent, qui permet aux utilisateurs d'analyser automatiquement les conditions d'une zone spécifique à partir de plus de 700 couches dans une application de carte web et de consulter un agent IA.[^8] De plus, plusieurs entreprises de location intelligence, dont **LocationAI**, ont lancé des services intégrant des fonctionnalités de chat avec IA dans leurs plateformes d'analyse de données.[^9] Par ailleurs, **Geolonia** développe un système d'exploitation urbain à usage gouvernemental en tant qu'infrastructure GIS × IA.[^10] Dans une initiative singulière, **GeoTechnologies, Inc.** a mis à disposition gratuitement, pour la recherche et le développement centrés sur l'IA, des données ouvertes sur les feux de circulation et autres éléments.[^11]

## Applications de l'IA dans les services GIS gouvernementaux

De même, les services AI for GIS proposés par le gouvernement national et les collectivités locales sont en hausse, l'accent étant mis en grande partie sur la construction de l'infrastructure de base pour le GIS × IA. Un développement notable est qu'en 2026, le **MLIT** a publié le **« Serveur MCP Géospatial - MLIT Geospatial MCP Server - »** (version alpha), permettant d'accéder à 25 ensembles de données de la **Bibliothèque d'Information Immobilière** — un service de données pour les transactions immobilières — via l'IA.[^12]

De même, l'**Agence Japonaise d'Exploration Aérospatiale (JAXA)** fournit un serveur MCP pour l'acquisition et l'analyse de données satellitaires par IA.[^13] Des expériences de preuve de concept pour l'extraction et la mise à jour automatisée d'éléments géographiques par IA sont également menées dans le cadre des mises à jour de données du Modèle de Ville 3D du **Projet PLATEAU**.[^14]

![Service de la JAXA](/images/articles/eita-h/eh_geoai_image04.webp)
*Serveur MCP de la JAXA permettant l'acquisition et l'analyse de données satellitaires par IA (Source : JAXA)*

## Délibérations au sein du Groupe d'étude sur la GéoIA du Gouvernement

Le **« Groupe d'étude sur la GéoIA »** sous l'égide du **MLIT** et du **Secrétariat du Cabinet** est un comité de délibération gouvernemental créé en 2026.[^3] Au moment de la rédaction de cet article, quatre réunions ont eu lieu. Les points clés suivants sont tirés du rapport provisoire :[^5]

- L'objectif à long terme est le déploiement social du GIS for AI, où l'IA comprend les relations spatiales et formule des prédictions et des propositions.
- La préparation de données AI-ready est le goulot d'étranglement et le prochain sujet clé à traiter.
- La construction d'une infrastructure de distribution de données d'entraînement, orientée vers le développement de modèles applicables à l'échelle nationale, est le défi central.
- En tant que domaine de base où le Japon peut faire valoir ses atouts, le développement d'une « ontologie spatiale » pour relier le GIS à l'IA générative a été mis en avant.

Ce rapport concentre l'attention en tant que cadre directeur pour la future stratégie du Japon autour de l'information géospatiale × IA. L'intégration de l'information géospatiale et de l'IA figure également parmi les principes directeurs du **« Projet du Cinquième Plan de Base pour l'Avancement de l'Utilisation de l'Information Géospatiale »** publié en juin 2026.[^15]

![Projet du Cinquième Plan de Base pour l'Avancement de l'Utilisation de l'Information Géospatiale (traduction anglaise)](/images/articles/eita-h/eh_geoai_image05.webp)
*Projet du Cinquième Plan de Base — traduction anglaise (Source : Secrétariat du Cabinet, juin 2026)*

# Défis pour le GIS × IA au Japon

L'information géospatiale englobe généralement des données cartographiques raster et vectorielles, des données 3D, des images satellitaires et photographiques aériennes, des valeurs de coordonnées, des systèmes de référence de coordonnées, la topologie, les relations spatiales et des données de séries temporelles. L'une des principales raisons pour lesquelles le GIS × IA est difficile à réaliser est que l'IA doit intégrer et interpréter l'ensemble de ces informations complexes.

À partir de 2026, il reste à déterminer si des modèles spécialisés en information géospatiale seront nécessaires pour relever ce défi, et quels types de données spatiales et de développement d'ontologie seront requis.[^5]

De plus, les règles de gouvernance et d'exploitation pour le GIS for AI laissent une marge de discussion considérable. Par exemple, des débats sont en cours sur la question de savoir si l'on peut faire confiance à l'IA pour prendre des décisions vitales lorsqu'elle est appliquée au GIS de prévention des catastrophes.[^5] Le rapport provisoire du Groupe d'étude sur la GéoIA publié en mai 2026 a également noté que la préparation de données géospatiales AI-ready reste un goulot d'étranglement.[^5] Dans le même temps, le développement de l'ontologie GIS étant aussi un domaine de force pour le Japon, ce goulot d'étranglement pourrait représenter une grande opportunité tant pour le gouvernement que pour les entreprises privées.

# Conclusion

Cet article a offert un panorama de l'état actuel du GIS × IA au Japon sous les angles pratique et politique. De nombreux développements sont encore en phase exploratoire et nécessiteront un suivi continu. Si de nouvelles initiatives ou des changements de politique surviennent, cet article sera mis à jour en conséquence.

# Références

[^1]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/content/002003984.pdf
[^2]: https://note.com/kiyota_yoji/n/n7e67c5c113fc
[^3]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/tochi_fudousan_kensetsugyo_tk17_000001_00072.html
[^4]: https://pub.confit.atlas.jp/ja/event/jsai2026/session/EhdUWGpU
[^5]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/content/002003985.pdf
[^6]: https://www.pasco.co.jp/biz/service/morido/
[^7]: https://www.kkc.co.jp/news/release/2025/06/17_30237/
[^8]: https://jgtimes.org/articles/eh-hinatagis
[^9]: https://prtimes.jp/main/html/rd/p/000000141.000037476.html
[^10]: https://www.geolonia.com/archives/6773/
[^11]: https://geot.jp/pressrelease-20251009/
[^12]: https://www.mlit.go.jp/report/press/tochi_fudousan_kensetsugyo17_hh_000001_00076.html
[^13]: https://data.earth.jaxa.jp/en/
[^14]: https://www.mlit.go.jp/plateau/use-case/uc22-044/
[^15]: https://www.cas.go.jp/jp/seisaku/sokuitiri/20260605/siryou1.pdf
