---
title: "Rekichizu : une vision moderne des cartes historiques du Japon"
description: 'Rekichizu est un site web où vous pouvez consulter des cartes historiques avec un design de carte moderne. Actuellement, des cartes de la fin de la période Edo (vers 1800-1840) sont publiées et mises à jour régulièrement.'
date: 2025-11-14
category: [project, opensource]
author: 'Sorami Shiromizu'
thumbnail: '/images/articles/sorami-shiromizu/rekichizu/thumbnail.png'
---

[![Miniature de Rekichizu](/images/articles/sorami-shiromizu/rekichizu/thumbnail.png)](https://rekichizu.jp/en)

[Rekichizu](https://rekichizu.jp/en) est un site web où vous pouvez consulter des **cartes historiques avec un design de carte moderne**.

Actuellement, des cartes de la **fin de la période Edo (vers 1800-1840)** sont publiées et mises à jour régulièrement.

Le projet a été lancé en août 2023. En novembre 2025, les versions en **anglais et en hiragana** du site web ont été publiées, rendant ces cartes historiques accessibles à un public plus large.

Les données sous-jacentes (tuiles de carte et styles) sont fournies en tant que **données ouvertes** sous la licence [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr).

Consultez le [site web](https://rekichizu.jp/en) pour plus d'informations.

_(Note : [L'auteure](https://sorami.dev/) est contributrice au projet Rekichizu.)_

## Ce que vous pouvez faire

![Rekichizu - Exemple de vue de carte](/images/articles/sorami-shiromizu/rekichizu/feature-1.webp)

Rekichizu est construit sur ses propres données numériques originales à grande échelle, méticuleusement élaborées à partir de vieilles cartes. Ces données sont présentées avec un style de carte moderne original, offrant un service de carte interactif similaire aux plateformes que vous utilisez au quotidien.

Les utilisateurs peuvent rechercher des lieux en japonais, hiragana ou anglais. En cliquant sur l'icône loupe en haut à gauche, vous pouvez utiliser le service de géocodage simple intégré pour rechercher des noms de lieux.

![Rekichizu - Exemple de terrain 3D](/images/articles/sorami-shiromizu/rekichizu/feature-2.webp)

Vous pouvez voir le terrain en 3D. Appuyez sur le bouton montagne en bas à droite pour afficher la carte en trois dimensions.

![Rekichizu - Exemple de mode de comparaison (division)](/images/articles/sorami-shiromizu/rekichizu/feature-3.webp)

![Rekichizu - Exemple de mode de comparaison (loupe)](/images/articles/sorami-shiromizu/rekichizu/feature-4.webp)

Vous pouvez comparer les cartes historiques directement avec des cartes modernes et des photographies aériennes. Plusieurs méthodes de comparaison sont disponibles, notamment les vues côte à côte (parallèles/divisées), la loupe et la superposition. Cette fonctionnalité est un outil puissant et ludique pour comprendre comment un lieu a changé au fil du temps.

![Rekichizu - Exemple de GPS](/images/articles/sorami-shiromizu/rekichizu/feature-5.webp)

Rekichizu est un compagnon idéal pour explorer les zones historiques. En activant la fonction GPS, vous pouvez voir d'un coup d'œil à quoi ressemblait votre emplacement actuel pendant la période Edo, transformant une simple promenade en une expérience captivante de voyage dans le temps.

## L'histoire de Rekichizu

Rekichizu est né comme projet de passion personnel du graphiste [Hajime Kato](https://chizutodesign.com/), largement connu en ligne sous le nom de [@chizutodesign](https://x.com/chizutodesign). Kato est reconnu pour son approche créative et originale des cartes et des visualisations de données. Il a ensuite publié un livre, [『地図とか路線図とか@chizutodesign』](https://books.ikaros.jp/book/b10080873.html) (_« Cartes et plans de lignes »_, en japonais) aux éditions IKAROS Publications LTD., en 2023.

### Les débuts : une carte de style Edo qui est devenue virale

Profondément intéressé par l'histoire et les cartes, Kato a constaté que si les vieilles cartes sont fascinantes, leur complexité les rend difficiles à lire et à interpréter pour les utilisateurs contemporains.

En 2019, ce défi l'a inspiré à créer et publier une image statique d'une carte de la période Edo au style Google Maps sur Twitter. Elle a rapidement gagné une traction significative, devenant virale avec environ 40 000 « J'aime » à l'époque. Cette version initiale était une image statique unique créée uniquement avec Adobe Illustrator.

![Carte historique de style Google Maps](https://cdn.myportfolio.com/ac25a482-e8dc-40bb-82f3-d586ec7c6f47/3e1b3a11-2b01-4a3c-b8f7-cbafee9c2512_rw_1920.jpg?h=e149025d6d253def164a0c99fb7aa726)

_Figure : [地図とかデザインとか / chizutodesign - 江戸時代のGoogleマップ風地図 / Carte historique de style Google Maps](https://chizutodesign.com/gmaps-edo)_

### Vers la carte web et le lancement public

Pour transformer cette image statique en service web interactif tel qu'il est aujourd'hui, Kato a entrepris un processus laborieux de création de données numériques. Il a corrigé et ajusté ces données en se référant à la Carte de l'Autorité d'Information Géospatiale ([地理院地図](https://maps.gsi.go.jp/)). Le dessin réel et la création de données ont ensuite été réalisés avec [QGIS](https://qgis.org/), un logiciel de système d'information géospatiale (SIG) libre et open source.

En août 2023, Kato a publié la version publique initiale de Rekichizu. La réponse a été immédiate et écrasante, atteignant 100 000 pages vues le lendemain et obtenant une couverture dans les médias en ligne, les journaux nationaux et les émissions télévisées.

### Expansion avec MIERUNE Inc.

Malgré le succès initial, Kato, étant principalement un designer, a rencontré des difficultés avec les compétences en ingénierie logicielle et les ressources nécessaires pour faire évoluer le service.

À la suite de discussions internes, [MIERUNE Inc.](https://www.mierune.co.jp/), l'entreprise géospatiale professionnelle où travaille Kato, a officiellement repris le projet en mai 2024.

MIERUNE s'est imposée naturellement, car l'entreprise a des caractéristiques uniques : elle est née de la communauté FOSS4G (Free and Open Source Software for Geospatial) et y contribue activement.[^1] Cette base donne à l'entreprise une familiarité avec l'OSS (logiciels open source) et les projets qui ne sont pas strictement à but lucratif. Kato lui-même avait rejoint MIERUNE en 2022 après avoir été invité à présenter lors d'une des conférences FOSS4G.

Depuis lors, Kato et l'équipe MIERUNE ont collectivement étendu les capacités de Rekichizu, implémentant des fonctionnalités clés telles que la génération de tuiles vectorielles pour la carte, le géocodage, la fonction de comparaison, l'internationalisation (i18n) et bien plus encore. En novembre 2025, les versions anglaise et hiragana du site web ont été publiées, rendant ces cartes historiques accessibles à un public international plus large.

### Reconnaissance publique

Le dévouement de Kato au projet Rekichizu lui a rapidement valu d'importantes distinctions dans l'industrie. Ses réalisations comprennent la réception du [Prix Enami Naomi (Prix du Révélation) au Digital Content of the Year '23 / 29e Prix AMD](https://amd.or.jp/pressrelease/2024/2024_0215_info.html) et du [« Prix d'Encouragement » aux Prix de l'Industrie des Archives Numériques 2024](https://dapcon.jp/news/award_2024/).

## Collaborations

Depuis sa sortie, Rekichizu a activement collaboré avec des institutions extérieures.

### Centre ROIS-DS pour les données ouvertes en sciences humaines

![Collaborations avec le Centre ROIS-DS pour les données ouvertes en sciences humaines - Ensemble de données des grandes routes d'Edo et ensemble de données des zones de maisons urbaines « Edo Kiriezu »](/images/articles/sorami-shiromizu/rekichizu/collaboration-1.webp)

En 2025, en collaboration avec le [Centre ROIS-DS pour les données ouvertes en sciences humaines](https://codh.rois.ac.jp/index.html.en), Rekichizu a créé des données pour environ 7 700 km de grandes routes de la période Edo. L'ensemble de données est disponible en téléchargement au format SIG. Pour plus de détails, consultez [cette page](https://codh.rois.ac.jp/historical-gis/edo-road/).

En 2024, en collaboration avec le Centre ROIS-DS pour les données ouvertes en sciences humaines, Rekichizu a extrait les zones de maisons urbaines des 29 feuilles de l'« Edo Kiriezu ». Les données sont publiées sur Rekichizu (zones peintes en brun clair sur la carte). L'ensemble de données est disponible en téléchargement au format SIG. Pour plus de détails, consultez [cette page](https://codh.rois.ac.jp/edo-maps/rekichizu/).

Pour ceux intéressés par les détails techniques et académiques de cette collaboration, une conférence conjointe a été présentée à [FOSS4G 2024 Japan](https://www.osgeo.jp/events/2024-2/foss4g-2024-japan/coreday) : [『江戸ビッグデータのオープン化：「れきちず」を活用した歴史的地理情報基盤に向けて』](https://agora.ex.nii.ac.jp/~kitamoto/research/publications/foss4g24-ppt.pdf) _« Ouverture des mégadonnées d'Edo : vers une plateforme d'information géographique historique utilisant "Rekichizu" »_ (en japonais), par [Asanobu Kitamoto](https://agora.ex.nii.ac.jp/~kitamoto/index.html.en) (Institut National d'Informatique) et Hajime Kato.

### Le roman « Sapporo Tanjo (La naissance de Sapporo) »

!["Sapporo Tanjo" le roman, dans une librairie](/images/articles/sorami-shiromizu/rekichizu/collaboration-2.webp)
!
![Site spécial de "Sapporo Tanjo" - la carte](/images/articles/sorami-shiromizu/rekichizu/collaboration-3.webp)

En collaboration avec un roman de Yoshinobu Kadoi, [« Sapporo Tanjo (La naissance de Sapporo) »](https://www.kawade.co.jp/np/isbn/9784309039480/) (publié par [Kawade Shobo Shinsha](https://www.kawade.co.jp/np/index.html)), Rekichizu a créé des cartes de Sapporo de la fin de la période Edo à l'ère Showa et un site web spécial. Pour plus de détails, consultez [cette page](https://sapporo-tanjo.rekichizu.jp/).

## La fabrication de Rekichizu

Alors, comment exactement une carte web historique comme Rekichizu est-elle réalisée ? Cela demande beaucoup d'efforts dans plusieurs domaines. Cette section détaille le dévouement requis pour créer les données principales, concevoir le style de carte unique, assembler la pile de logiciels open source et implémenter toutes les fonctionnalités d'internationalisation.

### Les données

Toute la création de données est réalisée avec QGIS, un logiciel de Système d'Information Géospatiale libre et open source.[^2]

Le processus principal consiste à tracer et dessiner numériquement des informations historiques — telles que les routes, les côtes et les points d'intérêt (POI) — en se référant à de vieilles cartes et à d'autres documents historiques sur la Carte moderne de l'Autorité d'Information Géospatiale (地理院地図).

![Visite de bibliothèques à travers le Japon et grande quantité de documents](/images/articles/sorami-shiromizu/rekichizu/making-1.webp)

De nombreux matériaux de référence nécessaires n'étant pas disponibles dans les bibliothèques numériques, Kato a visité de nombreuses bibliothèques à travers le Japon pour collecter des documents physiques.

À ce jour, le projet utilise plus de 400 matériaux de référence. Vous pouvez consulter [la liste complète sur le site web](https://rekichizu.jp/en#references). Sur la base de ces documents, la longueur totale des routes créées dépasse 40 000 km, et le nombre de POI dépasse 6 100.

Actuellement, Kato reste seul responsable de la création continue des données. La publication des données initiales à l'échelle nationale a pris deux ans, et le projet est toujours en cours.

### Le design

![Exemple du design de la carte Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-2.webp)

Rekichizu présente un design de carte original et distinctif qui vise à transmettre visuellement l'atmosphère historique tout en maintenant une lisibilité moderne. Le design utilise des choix spécifiques de couleurs et de textures pour évoquer l'époque, notamment en colorant les routes pour suggérer des pavés moussus. De plus, le design aide à distinguer clairement les différents usages historiques des terres, tels que les quartiers commerciaux, les terrains de temples et sanctuaires, les résidences de samouraïs et les espaces verts.

![Les icônes originales de Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-3.webp)

Toutes les icônes représentant les points d'intérêt sont des créations originales, reflétant les jalons historiques de la période Edo. Ces icônes personnalisées comprennent des designs pour les Barrières (関所), les Villes de Poste (宿場), les Châteaux, les Boutiques, les Maisons de thé (茶屋) et les Ponts.

![Le design OpenStreetMap original pour Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-4.webp)

Enfin, pour garantir une expérience visuellement harmonieuse, le design de la carte moderne intégrée, qui utilise les données d'[OpenStreetMap](https://openstreetmap.org/) (OSM), a été soigneusement stylisé pour correspondre à l'esthétique et à la palette de couleurs de la carte historique Rekichizu originale.

### Le logiciel

Le service web interactif s'appuie sur l'expertise professionnelle de l'équipe MIERUNE.

Le moteur de cartographie principal est [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/), une puissante bibliothèque de cartes web open source.[^3] Le framework web front-end choisi est [Svelte](https://svelte.dev/), que MIERUNE a adopté à l'échelle de l'entreprise comme sa pile par défaut.

Pour construire des cartes interactives efficacement dans cet environnement, Rekichizu utilise [Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/), une bibliothèque open source créée par le membre de MIERUNE [Taku Fukada](https://github.com/ciscorn). Cette bibliothèque permet de créer facilement des cartes en utilisant les capacités réactives de Svelte. Les fonctionnalités de comparaison de cartes ont été spécifiquement inspirées par l'[exemple Side by Side de Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/examples/side-by-side), lui-même basé sur le concept original de [react-map-gl](https://visgl.github.io/react-map-gl/examples/maplibre/side-by-side).

Pour réaliser des marqueurs de localisation synchronisés dans les cartes de comparaison, l'équipe a créé un outil OSS personnalisé : [maplibre-gl-manual-geolocate](https://github.com/MIERUNE/maplibre-gl-manual-geolocate). Ce contrôle permet d'afficher un marqueur de position utilisateur à des coordonnées spécifiées sans nécessiter l'API de géolocalisation du navigateur.

Pour l'hébergement, Rekichizu s'appuie sur [Cloudflare Workers](https://workers.cloudflare.com/) (anciennement [AWS Amplify](https://aws.amazon.com/amplify/)).

Pour ceux intéressés par les détails d'implémentation technique, plusieurs articles et présentations complets (en japonais) sont disponibles :

- [現代風歴史マップ「れきちず」フロントエンドのウラとオモテ](https://speakerdeck.com/hjmkth/240824-frontendo-kato-iguchi) _« Avant et envers du frontend de la carte historique de style moderne "Rekichizu" »_, présenté à [Frontend Conference Hokkaido 2024](https://www.frontend-conf.jp/2024) par Hajime Kato et [Kanahiro Iguchi](https://spatialty.io/)
- [MapLibre GL JS を Svelte の世界で快適に使うためのライブラリを作りました](https://qiita.com/ciscorn/items/6f97f681f31cafe513bd) _« J'ai créé une bibliothèque pour utiliser MapLibre GL JS confortablement dans le monde de Svelte »_, par Taku Fukada
- [maplibre-gl-manual-geolocate: 任意の場所を「現在地」にするMapLibre GL JSライブラリ](https://zenn.dev/mierune/articles/a30cf312409119) _« maplibre-gl-manual-geolocate : Une bibliothèque MapLibre GL JS pour faire de n'importe quel endroit "la position actuelle" »_, par Sorami Shiromizu

### L'internationalisation

En plus du format japonais original, Rekichizu est actuellement disponible dans deux autres paramètres régionaux : le [Hiragana](https://fr.wikipedia.org/wiki/Hiragana) (un alphabet phonétique utilisé en japonais) et l'anglais. Cet effort d'internationalisation (i18n) a été abordé à la fois dans l'application web et dans les données cartographiques sous-jacentes.

La fonctionnalité i18n de l'application web elle-même est gérée à l'aide de la bibliothèque dédiée [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).

Pour les données cartographiques, la conversion et la traduction des noms de lieux dans ces différents paramètres régionaux ont nécessité des techniques avancées. Compte tenu de la taille massive des données, l'équipe a exploité des techniques de Traitement du Langage Naturel (TLN), incluant une approche basée sur des règles et un LLM ([OpenAI API](https://openai.com/api/)). Cette approche s'est révélée très efficace pour le processus semi-automatisé, réduisant considérablement l'effort de correction manuelle requis à l'étape finale.

Plus de détails sur ce processus technique sont disponibles dans l'article suivant (en japonais) : [LLMを用いた地名のひらがな・英語化と、Paraglide JSによるi18n: モダンな歴史地図「れきちず」の事例](https://zenn.dev/mierune/articles/f7c446995e445f) _« Conversion des noms de lieux en anglais et hiragana à l'aide de LLM et i18n avec Paraglide JS : Le cas de la carte historique moderne "Rekichizu" »_, par Sorami Shiromizu.

Pour le style de la carte moderne (OSM) dans divers paramètres régionaux, il a fallu exploiter le système de balisage détaillé d'OSM :

- Pour le hiragana, des propriétés telles que [ja-Hira](https://wiki.openstreetmap.org/wiki/Key:name:ja-Hira) (compatible [BCP 47](https://www.rfc-editor.org/info/bcp47)) et le traditionnel [name:ja_kana](https://wiki.openstreetmap.org/wiki/Key:name:ja_kana) sont utilisées.
- Pour l'anglais et la romanisation, des propriétés telles que [name:en](https://wiki.openstreetmap.org/wiki/Key:name:en), [ja-Latn](https://wiki.openstreetmap.org/wiki/Key:name:ja-Latn) (compatible BCP 47) et le traditionnel [name:ja_rm](https://wiki.openstreetmap.org/wiki/JA:Key:name:ja_rm) sont employées.

Il est important de noter que tous les éléments d'OSM n'ont pas de données listées pour chaque paramètre régional, mais la plateforme est ouverte. Les utilisateurs sont encouragés à contribuer les informations manquantes pour améliorer davantage les cartes.

Comme dernier détail technique, l'équipe utilisait initialement la [police LINE Seed](https://seed.line.me/index_en.html) pour le style OSM moderne. Cependant, cette police manquant du [macron](https://fr.wikipedia.org/wiki/Macron_(diacritique)) (le symbole de voyelle longue, comme dans `Tōkyō`), et ce symbole apparaissant dans certains noms anglais d'OSM, l'équipe a finalement opté pour une police différente ([Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)) pour le style OSM en anglais, afin de garantir un rendu correct.

## L'avenir de Rekichizu

Le projet Rekichizu est soutenu par des efforts de développement continus. L'équipe a diverses idées pour des expansions futures tant sur les aspects des données que des fonctionnalités.

![Idée future de Rekichizu - Informations POI](/images/articles/sorami-shiromizu/rekichizu/future-1.webp)

La première grande idée est le développement approfondi des Points d'Intérêt (POI). Cette fonctionnalité permettra aux utilisateurs de cliquer sur un lieu pour accéder à des informations détaillées, incluant l'affichage d'images associées, telles que des ukiyo-e (浮世絵) historiques, pour illustrer vivement le passé du site.

![Idée future de Rekichizu - Recherche d'itinéraire](/images/articles/sorami-shiromizu/rekichizu/future-2.webp)

L'équipe envisage également une fonctionnalité d'orientation historique d'itinéraire (recherche d'itinéraire). Alors que les cartes web modernes se concentrent sur la marche, cette fonctionnalité intégrera des modes de transport appropriés à l'époque, tels que le cheval, le palanquin (駕籠) ou le service de messager (飛脚), offrant une expérience pratique et unique de l'histoire.

![Idée future de Rekichizu - Données pour différentes ères](/images/articles/sorami-shiromizu/rekichizu/future-3.webp)

L'objectif à long terme du projet est d'aller au-delà de la fin de la période Edo actuelle pour créer une carte historique véritablement multicouche. L'objectif ultime est d'inclure progressivement des cartes couvrant une gamme chronologique plus large de l'histoire japonaise, comme les périodes Heian (平安), Sengoku (戦国, États en guerre), Meiji (明治), Taishō (大正) et Shōwa (昭和).

![Idée future de Rekichizu - Plus de collaborations (image : ancienne rue Nakasendo)](/images/articles/sorami-shiromizu/rekichizu/future-4.webp)

Comme nos partenariats précédents l'ont montré, nous accordons beaucoup de valeur à trouver de nouvelles personnes et organisations avec qui travailler. Rekichizu cherche toujours à collaborer davantage dans différents domaines comme l'éducation et le tourisme pour étendre sa portée et son utilité. Si vous êtes intéressé à unir vos forces, nous serions ravis de vous entendre !

![Idée future de Rekichizu - Concept d'intégration de données](/images/articles/sorami-shiromizu/rekichizu/future-5.webp)

Nous réalisons que beaucoup de données historiques précieuses sont souvent isolées, créées individuellement ou par différents groupes. Pour libérer toute cette valeur collective, la grande idée de Rekichizu est d'évoluer vers une plateforme d'intégration de données et de création collaborative. Nous voulons construire un système qui facilite le rassemblement des données existantes des individus ou organisations, permettant à toute la communauté de créer et connecter collectivement de nouvelles informations géospatiales historiques.

## Essayez-le !

Nous espérons que vous prendrez le temps d'essayer Rekichizu et de profiter de la comparaison des paysages passés et présents du Japon. [Cliquez ici pour commencer](https://rekichizu.jp/en) ! Nous cherchons constamment des moyens de nous améliorer, alors n'hésitez pas à [nous faire part de vos commentaires ou suggestions](https://rekichizu.jp/en#contact) !

## Références

- [「れきちず」のこれまでとこれから - 誰にでもわかりやすい歴史地図を目指して](https://speakerdeck.com/hjmkth/251012-foss4g-japan-rekichizu) _« Rekichizu : passé et futur — rendre les cartes historiques faciles à explorer pour tous »_ (en japonais), présenté à [FOSS4G 2025 Japan](https://osgeo-jp.github.io/foss4g-2025-japan/) par Hajime Kato et Sorami Shiromizu
- [Modern-style Historical Map Design with QGIS](https://speakerdeck.com/hjmkth/231129-foss4g-asia-2023-kato) _(en anglais)_, présenté à [FOSS4G ASIA 2023](https://foss4g.asia/2023/) par Hajime Kato

[^1]: MIERUNE a été fondée par les trois organisateurs de [FOSS4G Hokkaido](https://foss4g.hokkaido.jp/). L'équipe de l'entreprise comprend également plusieurs [Membres Fondateurs de la Fondation OSGeo](https://www.osgeo.org/about/charter-members/), et MIERUNE est [membre organisationnel d'OSGeo.JP](https://www.osgeo.jp/sponsor). [Toru Mori](https://www.linkedin.com/in/toru-mori-9a4984b/), membre du conseil d'administration de MIERUNE, est une figure clé du soutien au mouvement FOSS4G mondial depuis ses tout débuts, servant comme Représentant OSGeo du Chapitre Japonais de 2006 à 2018.
[^2]: MIERUNE est [sponsor officiel de QGIS](https://qgis.org/#sustaining-members) depuis 2017 et [membre votant du Groupe d'Utilisateurs National QGIS](https://qgis.org/community/groups/).
[^3]: MIERUNE est un important soutien du projet MapLibre, devenant le [premier sponsor au monde en 2022](https://maplibre.org/news/2022-06-10-mierune-announcement/) (aux côtés d'entreprises comme Meta, Microsoft et AWS). De plus, l'engagement de MIERUNE s'étend à la gouvernance du projet, le PDG [Yasunori Kirimoto](https://www.dayjournal.dev/) et le DT Kanahiro Iguchi étant tous deux [membres votants du projet](https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md).

---

_Cet article est également publié en cross-post sur [DEV Community](https://dev.to/mierune/rekichizu-a-modern-take-on-japans-historical-maps-53gp)._
