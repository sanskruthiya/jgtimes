---
title: "Rekichizu: una visión moderna de los mapas históricos de Japón"
description: 'Rekichizu es un sitio web donde puedes ver mapas históricos con un diseño de mapa moderno. Actualmente se publican y actualizan regularmente mapas del período Edo tardío (alrededor de 1800-1840).'
date: 2025-11-14
category: [project, opensource]
author: 'Sorami Shiromizu'
thumbnail: '/images/articles/sorami-shiromizu/rekichizu/thumbnail.png'
---

[![Miniatura de Rekichizu](/images/articles/sorami-shiromizu/rekichizu/thumbnail.png)](https://rekichizu.jp/en)

[Rekichizu](https://rekichizu.jp/en) es un sitio web donde puedes ver **mapas históricos con un diseño de mapa moderno**.

Actualmente, se publican y actualizan regularmente mapas del **período Edo tardío (alrededor de 1800-1840)**.

El proyecto se lanzó en agosto de 2023. En noviembre de 2025, se publicaron las versiones en **inglés e hiragana** del sitio web, haciendo estos mapas históricos accesibles a un público más amplio.

Los datos subyacentes (teselas de mapa y estilos) se proporcionan como **datos abiertos** bajo la licencia [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es).

Consulta el [sitio web](https://rekichizu.jp/en) para más información.

_(Nota: [La autora](https://sorami.dev/) es colaboradora del proyecto Rekichizu.)_

## Qué puedes hacer

![Rekichizu - Vista de mapa de ejemplo](/images/articles/sorami-shiromizu/rekichizu/feature-1.webp)

Rekichizu está construido sobre sus propios datos digitales originales a gran escala, elaborados meticulosamente a partir de mapas antiguos. Estos datos se presentan con un estilo de mapa moderno original, ofreciendo un servicio de mapa interactivo similar a las plataformas que usas a diario.

Los usuarios pueden buscar ubicaciones en japonés, hiragana o inglés. Al hacer clic en el ícono de lupa en la esquina superior izquierda, se puede utilizar el servicio de geocodificación simple integrado para buscar nombres de lugares.

![Rekichizu - Ejemplo de terreno 3D](/images/articles/sorami-shiromizu/rekichizu/feature-2.webp)

Puedes ver el terreno en 3D. Presiona el botón de montaña en la esquina inferior derecha para renderizar el mapa en tres dimensiones.

![Rekichizu - Ejemplo de modo de comparación (división)](/images/articles/sorami-shiromizu/rekichizu/feature-3.webp)

![Rekichizu - Ejemplo de modo de comparación (lupa)](/images/articles/sorami-shiromizu/rekichizu/feature-4.webp)

Puedes comparar los mapas históricos directamente con mapas modernos y fotografías aéreas. Están disponibles varios métodos de comparación, incluyendo vistas en paralelo (lado a lado), lupa y superposición. Esta función es una herramienta potente y entretenida para comprender cómo ha cambiado una ubicación a lo largo del tiempo.

![Rekichizu - Ejemplo de GPS](/images/articles/sorami-shiromizu/rekichizu/feature-5.webp)

Rekichizu es un compañero ideal para explorar zonas históricas. Al activar la función GPS, puedes ver de un vistazo cómo era tu ubicación actual durante el período Edo, convirtiendo un simple paseo en una experiencia cautivadora de viaje en el tiempo.

## La historia de Rekichizu

Rekichizu nació como proyecto de pasión personal del diseñador gráfico [Hajime Kato](https://chizutodesign.com/), ampliamente conocido en línea como [@chizutodesign](https://x.com/chizutodesign). Kato es reconocido por su enfoque creativo y original hacia los mapas y las visualizaciones de datos. Posteriormente publicó un libro, [『地図とか路線図とか@chizutodesign』](https://books.ikaros.jp/book/b10080873.html) (_«Mapas y planos de rutas»_, en japonés) por IKAROS Publications LTD., en 2023.

### Los comienzos: un mapa de estilo Edo que se volvió viral

Profundamente interesado en la historia y los mapas, Kato reconoció que si bien los mapas antiguos son fascinantes, su complejidad los hace difíciles de leer e interpretar para los usuarios contemporáneos.

En 2019, este desafío lo inspiró a crear y publicar una imagen estática de un mapa del período Edo al estilo de Google Maps en Twitter. Rápidamente ganó una tracción significativa, convirtiéndose en viral con alrededor de 40.000 «me gusta» en ese momento. Crucialmente, esta versión inicial era una imagen estática única creada exclusivamente con Adobe Illustrator.

![Mapa histórico de estilo Google Maps](https://cdn.myportfolio.com/ac25a482-e8dc-40bb-82f3-d586ec7c6f47/3e1b3a11-2b01-4a3c-b8f7-cbafee9c2512_rw_1920.jpg?h=e149025d6d253def164a0c99fb7aa726)

_Figura: [地図とかデザインとか / chizutodesign - 江戸時代のGoogleマップ風地図 / Mapa histórico de estilo Google Maps](https://chizutodesign.com/gmaps-edo)_

### Hacia el mapa web y el lanzamiento público

Para transformar esta imagen estática en el servicio web interactivo que vemos hoy, Kato inició un laborioso proceso de creación de datos digitales. Corrigió y ajustó esos datos tomando como referencia el Mapa de la Autoridad de Información Geoespacial ([地理院地図](https://maps.gsi.go.jp/)). Luego, el dibujo real y la creación de datos se realizaron con [QGIS](https://qgis.org/), un software de sistema de información geoespacial (GIS) libre y de código abierto.

En agosto de 2023, Kato publicó la versión pública inicial de Rekichizu. La respuesta fue inmediata y arrolladora, alcanzando 100.000 páginas vistas al día siguiente y obteniendo cobertura en medios digitales, periódicos nacionales y programas de televisión.

### Expansión con MIERUNE Inc.

A pesar del éxito inicial, Kato, siendo principalmente un diseñador, enfrentó dificultades con las habilidades de ingeniería de software y los recursos necesarios para escalar el servicio.

Tras discusiones internas, [MIERUNE Inc.](https://www.mierune.co.jp/), la empresa geoespacial profesional donde trabaja Kato, tomó oficialmente el proyecto a cargo en mayo de 2024.

MIERUNE encajaba de forma natural, ya que la empresa tiene características únicas: nació de la comunidad FOSS4G (Free and Open Source Software for Geospatial) y contribuye activamente a ella.[^1] Esta base le da a la empresa familiaridad con OSS (software de código abierto) y proyectos que no son estrictamente con fines de lucro. El propio Kato se había unido a MIERUNE en 2022 tras ser invitado a presentar en una de las conferencias FOSS4G.

Desde entonces, Kato y el equipo de MIERUNE han ampliado colectivamente las capacidades de Rekichizu, implementando funcionalidades clave como la generación de teselas vectoriales para el mapa, la geocodificación, la función de comparación, la internacionalización (i18n) y mucho más. En noviembre de 2025, se publicaron las versiones en inglés e hiragana del sitio web, haciendo estos mapas históricos accesibles a un público internacional más amplio.

### Reconocimiento público

La dedicación de Kato al proyecto Rekichizu le valió rápidamente importantes honores en la industria. Sus logros incluyen recibir el [Premio Enami Naomi (Premio a la Revelación) en Digital Content of the Year '23 / 29.º Premio AMD](https://amd.or.jp/pressrelease/2024/2024_0215_info.html) y el [«Premio de Aliento» en los Premios de la Industria de Archivo Digital 2024](https://dapcon.jp/news/award_2024/).

## Colaboraciones

Desde su lanzamiento, Rekichizu ha colaborado activamente con instituciones externas.

### Centro ROIS-DS de Datos Abiertos en las Humanidades

![Colaboraciones con el Centro ROIS-DS de Datos Abiertos en las Humanidades - Conjunto de datos de vías principales del período Edo y conjunto de datos de áreas de casas urbanas «Edo Kiriezu»](/images/articles/sorami-shiromizu/rekichizu/collaboration-1.webp)

En 2025, en colaboración con el [Centro ROIS-DS de Datos Abiertos en las Humanidades](https://codh.rois.ac.jp/index.html.en), Rekichizu creó datos de aproximadamente 7.700 km de vías principales del período Edo. El conjunto de datos está disponible para descarga en formato GIS. Para más detalles, consulta [esta página](https://codh.rois.ac.jp/historical-gis/edo-road/).

En 2024, en colaboración con el Centro ROIS-DS de Datos Abiertos en las Humanidades, Rekichizu extrajo las áreas de casas urbanas de las 29 hojas del «Edo Kiriezu». Los datos están publicados en Rekichizu (áreas pintadas en marrón claro en el mapa). El conjunto de datos está disponible para descarga en formato GIS. Para más detalles, consulta [esta página](https://codh.rois.ac.jp/edo-maps/rekichizu/).

Para quienes estén interesados en los detalles técnicos y académicos de esta colaboración, se realizó una charla conjunta en [FOSS4G 2024 Japan](https://www.osgeo.jp/events/2024-2/foss4g-2024-japan/coreday): [『江戸ビッグデータのオープン化：「れきちず」を活用した歴史的地理情報基盤に向けて』](https://agora.ex.nii.ac.jp/~kitamoto/research/publications/foss4g24-ppt.pdf) _«Apertura de los grandes datos de Edo: Hacia una plataforma de información geográfica histórica utilizando "Rekichizu"»_ (en japonés), por [Asanobu Kitamoto](https://agora.ex.nii.ac.jp/~kitamoto/index.html.en) (Instituto Nacional de Informática) y Hajime Kato.

### La novela «Sapporo Tanjo (El nacimiento de Sapporo)»

!["Sapporo Tanjo" la novela, en una librería](/images/articles/sorami-shiromizu/rekichizu/collaboration-2.webp)
!
![Sitio especial de "Sapporo Tanjo" - el mapa](/images/articles/sorami-shiromizu/rekichizu/collaboration-3.webp)

En colaboración con una novela de Yoshinobu Kadoi, [«Sapporo Tanjo (El nacimiento de Sapporo)»](https://www.kawade.co.jp/np/isbn/9784309039480/) (publicada por [Kawade Shobo Shinsha](https://www.kawade.co.jp/np/index.html)), Rekichizu creó mapas de Sapporo desde el período Edo tardío hasta la era Showa y un sitio web especial. Para más detalles, consulta [esta página](https://sapporo-tanjo.rekichizu.jp/).

## La elaboración de Rekichizu

¿Cómo se hace exactamente un mapa web histórico como Rekichizu? Requiere mucho esfuerzo en varias áreas. Esta sección desglosa la dedicación necesaria para crear los datos centrales, diseñar el estilo de mapa único, ensamblar el conjunto de software de código abierto e implementar todas las funciones de internacionalización.

### Los datos

Toda la creación de datos se realiza con QGIS, un software de Sistema de Información Geoespacial libre y de código abierto.[^2]

El proceso central implica trazar y dibujar digitalmente información histórica —como carreteras, costas y puntos de interés (POI)— tomando como referencia mapas antiguos y otros documentos históricos sobre el mapa moderno de la Autoridad de Información Geoespacial (地理院地図).

![Visita a bibliotecas de todo Japón y gran cantidad de documentos](/images/articles/sorami-shiromizu/rekichizu/making-1.webp)

Dado que muchos de los materiales de referencia necesarios no están disponibles en bibliotecas digitales, Kato ha visitado numerosas bibliotecas de todo Japón para recopilar documentos físicos.

A día de hoy, el proyecto utiliza más de 400 materiales de referencia. Puedes ver [la lista completa en el sitio web](https://rekichizu.jp/en#references). Basándose en estos documentos, la longitud total de carreteras creadas supera los 40.000 km, y el número de POI supera los 6.100.

Actualmente, Kato sigue siendo el único responsable de la creación continua de datos. La publicación de los datos iniciales a nivel nacional llevó dos años, y el proyecto sigue en desarrollo.

### El diseño

![Ejemplo del diseño del mapa de Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-2.webp)

Rekichizu presenta un diseño de mapa original y distintivo que busca transmitir visualmente la atmósfera histórica mientras mantiene la legibilidad moderna. El diseño utiliza elecciones específicas de color y textura para evocar el período, en particular coloreando las carreteras para sugerir pavimentos de piedra con musgo. Además, el diseño ayuda a distinguir claramente entre diversos usos históricos del suelo, como distritos comerciales, terrenos de templos y santuarios, residencias de samuráis y espacios verdes.

![Los íconos originales de Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-3.webp)

Todos los íconos que representan puntos de interés son creaciones originales, reflejando los hitos históricos del período Edo. Estos íconos personalizados incluyen diseños para Barrera (関所), Ciudad de Posta (宿場), Castillos, Tiendas, Casas de té (茶屋) y Puentes.

![El diseño original de OpenStreetMap para Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-4.webp)

Finalmente, para garantizar una experiencia visualmente armoniosa, el diseño del mapa moderno integrado, que utiliza datos de [OpenStreetMap](https://openstreetmap.org/) (OSM), ha sido cuidadosamente estilizado para coincidir con la estética y la paleta de colores del mapa histórico original de Rekichizu.

### El software

El servicio web interactivo aprovecha la experiencia profesional del equipo de MIERUNE.

El motor de mapas principal es [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/), una potente biblioteca de mapas web de código abierto.[^3] El framework web front-end elegido es [Svelte](https://svelte.dev/), que MIERUNE ha adoptado a nivel de toda la empresa como su stack predeterminado.

Para construir mapas interactivos de forma eficiente en este entorno, Rekichizu utiliza [Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/), una biblioteca de código abierto creada por el miembro de MIERUNE [Taku Fukada](https://github.com/ciscorn). Esta biblioteca permite la creación sencilla de mapas utilizando las capacidades reactivas de Svelte. Las funciones de comparación de mapas fueron específicamente inspiradas por el [ejemplo Side by Side de Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/examples/side-by-side), que a su vez se basó en el concepto original de [react-map-gl](https://visgl.github.io/react-map-gl/examples/maplibre/side-by-side).

Para lograr marcadores de ubicación actual sincronizados en los mapas de comparación, el equipo creó una herramienta OSS personalizada: [maplibre-gl-manual-geolocate](https://github.com/MIERUNE/maplibre-gl-manual-geolocate). Este control permite mostrar un marcador de posición del usuario en coordenadas especificadas sin requerir la API de geolocalización del navegador.

Para el alojamiento, Rekichizu se apoya en [Cloudflare Workers](https://workers.cloudflare.com/) (anteriormente [AWS Amplify](https://aws.amazon.com/amplify/)).

Para quienes estén interesados en los detalles de implementación técnica, hay varios artículos y presentaciones completos (en japonés) disponibles:

- [現代風歴史マップ「れきちず」フロントエンドのウラとオモテ](https://speakerdeck.com/hjmkth/240824-frontendo-kato-iguchi) _«Frente y reverso del frontend del mapa histórico de estilo moderno "Rekichizu"»_, presentado en [Frontend Conference Hokkaido 2024](https://www.frontend-conf.jp/2024) por Hajime Kato y [Kanahiro Iguchi](https://spatialty.io/)
- [MapLibre GL JS を Svelte の世界で快適に使うためのライブラリを作りました](https://qiita.com/ciscorn/items/6f97f681f31cafe513bd) _«Creé una biblioteca para usar MapLibre GL JS cómodamente en el mundo de Svelte»_, por Taku Fukada
- [maplibre-gl-manual-geolocate: 任意の場所を「現在地」にするMapLibre GL JSライブラリ](https://zenn.dev/mierune/articles/a30cf312409119) _«maplibre-gl-manual-geolocate: Una biblioteca MapLibre GL JS para convertir cualquier lugar en "la ubicación actual"»_, por Sorami Shiromizu

### La internacionalización

Además del formato japonés original, Rekichizu está disponible actualmente en otras dos configuraciones regionales: [Hiragana](https://es.wikipedia.org/wiki/Hiragana) (un alfabeto fonético utilizado en japonés) e inglés. Este esfuerzo de internacionalización (i18n) se abordó tanto en la aplicación web como en los datos del mapa subyacente.

La función i18n de la propia aplicación web se gestiona utilizando la biblioteca dedicada [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).

Para los datos del mapa, la conversión y traducción de los nombres de lugares a estas diversas configuraciones regionales requirió técnicas avanzadas. Dado el tamaño masivo de los datos, el equipo aprovechó técnicas de Procesamiento del Lenguaje Natural (PLN), incluyendo un enfoque basado en reglas y un LLM ([OpenAI API](https://openai.com/api/)). Este enfoque fue muy eficaz para el proceso semi-automatizado, reduciendo significativamente el esfuerzo de corrección manual requerido en el paso final.

Más detalles sobre este proceso técnico están disponibles en el siguiente artículo (en japonés): [LLMを用いた地名のひらがな・英語化と、Paraglide JSによるi18n: モダンな歴史地図「れきちず」の事例](https://zenn.dev/mierune/articles/f7c446995e445f) _«Conversión de nombres de lugares a inglés e hiragana mediante LLM e i18n con Paraglide JS: El caso del mapa histórico moderno "Rekichizu"»_, por Sorami Shiromizu.

Para dar estilo al mapa moderno (OSM) en varias configuraciones regionales fue necesario aprovechar el detallado sistema de etiquetado de OSM:

- Para el hiragana, se utilizan propiedades como [ja-Hira](https://wiki.openstreetmap.org/wiki/Key:name:ja-Hira) (compatible con [BCP 47](https://www.rfc-editor.org/info/bcp47)) y el tradicionalmente usado [name:ja_kana](https://wiki.openstreetmap.org/wiki/Key:name:ja_kana).
- Para el inglés y la romanización, se emplean propiedades como [name:en](https://wiki.openstreetmap.org/wiki/Key:name:en), [ja-Latn](https://wiki.openstreetmap.org/wiki/Key:name:ja-Latn) (compatible con BCP 47) y el tradicional [name:ja_rm](https://wiki.openstreetmap.org/wiki/JA:Key:name:ja_rm).

Es importante señalar que si bien no todos los elementos en OSM tienen datos listados para cada configuración regional, la plataforma es abierta. Se anima a los usuarios a contribuir con la información faltante para seguir mejorando los mapas.

Como detalle técnico final, el equipo utilizó originalmente la [fuente LINE Seed](https://seed.line.me/index_en.html) para el estilo moderno de OpenStreetMap. Sin embargo, dado que esta fuente carecía del [macrón](https://es.wikipedia.org/wiki/Macrón) (el símbolo de vocal larga, como en `Tōkyō`), y este símbolo aparece en algunos nombres en inglés de OSM, el equipo finalmente cambió a una fuente diferente ([Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)) para el estilo OSM en inglés, para garantizar una representación adecuada.

## El futuro de Rekichizu

El proyecto Rekichizu se sustenta en esfuerzos continuos de desarrollo. El equipo tiene diversas ideas para futuras expansiones tanto en aspectos de datos como de funcionalidades.

![Idea futura de Rekichizu - Información sobre POI](/images/articles/sorami-shiromizu/rekichizu/future-1.webp)

La primera gran idea es el desarrollo exhaustivo de Puntos de Interés (POI). Esta función permitirá a los usuarios hacer clic en una ubicación para acceder a información detallada, que incluirá la visualización de imágenes asociadas, como ukiyo-e (浮世絵) históricos, para ilustrar vívidamente el pasado del lugar.

![Idea futura de Rekichizu - Búsqueda de rutas](/images/articles/sorami-shiromizu/rekichizu/future-2.webp)

El equipo también está considerando una función de orientación histórica de rutas (búsqueda de rutas). Mientras que los mapas web modernos se centran en caminar, esta función integrará métodos de transporte apropiados para la época, como a caballo, en palanquín (駕籠) o mediante servicio de mensajería (飛脚), ofreciendo una experiencia práctica y única de la historia.

![Idea futura de Rekichizu - Datos para diferentes eras](/images/articles/sorami-shiromizu/rekichizu/future-3.webp)

El objetivo a largo plazo del proyecto es ir más allá del período Edo tardío actual para crear un mapa histórico verdaderamente multicapa. La meta final es incluir gradualmente mapas que abarquen un rango cronológico más amplio de la historia japonesa, como los períodos Heian (平安), Sengoku (戦国, Estados Combatientes), Meiji (明治), Taishō (大正) y Shōwa (昭和).

![Idea futura de Rekichizu - Más colaboraciones (imagen: antigua calle Nakasendo)](/images/articles/sorami-shiromizu/rekichizu/future-4.webp)

Como han demostrado nuestras colaboraciones anteriores, valoramos mucho encontrar nuevas personas y organizaciones con quienes trabajar. Rekichizu siempre busca colaborar más en diferentes campos como la educación y el turismo para ampliar su alcance y utilidad. ¡Si estás interesado en unir fuerzas, nos encantaría escucharte!

![Idea futura de Rekichizu - Concepto de integración de datos](/images/articles/sorami-shiromizu/rekichizu/future-5.webp)

Nos damos cuenta de que una gran cantidad de datos históricos valiosos suele estar aislada, creada individualmente o por grupos diferentes. Para desbloquear todo ese valor colectivo, la gran idea de Rekichizu es evolucionar hacia una plataforma de integración de datos y creación colaborativa. Queremos construir un sistema que facilite reunir datos existentes de individuos u organizaciones, empoderando a toda la comunidad para crear y conectar colectivamente nueva información geoespacial histórica.

## ¡Pruébalo!

Esperamos que te tomes el tiempo de probar Rekichizu y disfrutar comparando los paisajes del pasado y el presente de Japón. [¡Haz clic aquí para empezar](https://rekichizu.jp/en)! Buscamos constantemente maneras de mejorar, así que no dudes en [contactarnos con cualquier comentario o sugerencia que tengas](https://rekichizu.jp/en#contact).

## Referencias

- [「れきちず」のこれまでとこれから - 誰にでもわかりやすい歴史地図を目指して](https://speakerdeck.com/hjmkth/251012-foss4g-japan-rekichizu) _«Rekichizu: pasado y futuro — haciendo mapas históricos fáciles de explorar para todos»_ (en japonés), presentado en [FOSS4G 2025 Japan](https://osgeo-jp.github.io/foss4g-2025-japan/) por Hajime Kato y Sorami Shiromizu
- [Modern-style Historical Map Design with QGIS](https://speakerdeck.com/hjmkth/231129-foss4g-asia-2023-kato) _(en inglés)_, presentado en [FOSS4G ASIA 2023](https://foss4g.asia/2023/) por Hajime Kato

[^1]: MIERUNE fue fundada por los tres organizadores de [FOSS4G Hokkaido](https://foss4g.hokkaido.jp/). El equipo de la empresa también incluye múltiples [Miembros Charter de la Fundación OSGeo](https://www.osgeo.org/about/charter-members/), y MIERUNE es [miembro organizacional de OSGeo.JP](https://www.osgeo.jp/sponsor). [Toru Mori](https://www.linkedin.com/in/toru-mori-9a4984b/), miembro del consejo directivo de MIERUNE, es una figura clave en el apoyo al movimiento FOSS4G global desde sus inicios, sirviendo como Representante OSGeo del Capítulo de Japón de 2006 a 2018.
[^2]: MIERUNE es [patrocinador oficial de QGIS](https://qgis.org/#sustaining-members) desde 2017 y [miembro votante del Grupo de Usuarios del País QGIS](https://qgis.org/community/groups/).
[^3]: MIERUNE es un importante apoyo del proyecto MapLibre, convirtiéndose en el [primer patrocinador del mundo en 2022](https://maplibre.org/news/2022-06-10-mierune-announcement/) (junto con empresas como Meta, Microsoft y AWS). Además, el compromiso de MIERUNE se extiende a la gobernanza del proyecto, ya que el CEO [Yasunori Kirimoto](https://www.dayjournal.dev/) y el CTO Kanahiro Iguchi son ambos [miembros votantes del proyecto](https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md).

---

_Este artículo también está publicado en [DEV Community](https://dev.to/mierune/rekichizu-a-modern-take-on-japans-historical-maps-53gp)._
