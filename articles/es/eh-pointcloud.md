---
title: "Más allá de PLATEAU — Datos de nube de puntos y gemelos digitales en Japón"
description: "Un recorrido por las iniciativas de datos de nube de puntos en Japón, centradas en Virtual Shizuoka, y el desarrollo de gemelos digitales en diversas regiones"
date: 2026-04-02
category: [project, government]
author: "Eita.H"
---

# Introducción: el desarrollo de datos urbanos 3D en Japón

Desde 2020, Japón ha experimentado un avance acelerado en el desarrollo de datos urbanos tridimensionales. Una de las iniciativas más destacadas es **PLATEAU**, proyecto de desarrollo de modelos de ciudad 3D liderado por el Ministerio de Tierra, Infraestructura, Transporte y Turismo (MLIT).[^1]

**PLATEAU** representa edificios e infraestructura urbana como modelos estructurados basados en el concepto de **LOD (Nivel de Detalle)**, con aplicaciones previstas en planificación urbana, prevención de desastres, simulación y diversos campos más.

Por otro lado, en los últimos años ha surgido un enfoque diferente junto a PLATEAU: las iniciativas de desarrollo y publicación de datos urbanos y regionales en forma de **nubes de puntos** avanzan en todo Japón.

Los datos de nube de puntos consisten en enormes colecciones de puntos tridimensionales obtenidos mediante escaneado láser aéreo, mapeo móvil y otros métodos. Al incorporar información a estos puntos, es posible reproducir los espacios urbanos con alta resolución.

Este artículo presenta los proyectos de publicación de datos de nube de puntos más representativos de Japón y examina sus características y potencial futuro.

![Captura de Virtual Shizuoka a 2026/3/30](/images/articles/eita-h/eh_pointcloud_image01.webp)
Virtual Shizuoka visualizado en el visor del Proyecto de Gemelo Digital de Tokio, accedido el 30 de marzo de 2026 [^2]

# Caso de estudio: Virtual Shizuoka

Una de las iniciativas pioneras en publicación de datos de nube de puntos en Japón es el proyecto **"Virtual Shizuoka"** de la División de Política de Construcción de la Prefectura de Shizuoka, situada en el centro del país.

Desde 2019, la Prefectura de Shizuoka desarrolla datos de nube de puntos de alta densidad que cubren toda la prefectura mediante escaneado láser aéreo.[^2]

La publicación de estos datos como datos abiertos generó un impacto significativo en todo Japón. En 2025, la prefectura completó y publicó los datos correspondientes a toda la región.[^2]

![Captura de Virtual Shizuoka a 2026/3/30](/images/articles/eita-h/eh_pointcloud_image02.webp)
Virtual Shizuoka, accedido el 30 de marzo de 2026 [^2]

## Estado de desarrollo

La escala y las especificaciones de Virtual Shizuoka demuestran el alcance ambicioso de esta iniciativa.[^2] [^3] [^4] [^5]

- Más de **500.000 millones de puntos** de datos de nube de puntos construidos
- Cubre el área total de la prefectura: **7.777 km²**
- Datos publicados en el **Centro de Información G-Espacial** bajo licencia **CC-BY 4.0**
- Datos originales proporcionados en archivos comprimidos en **formato LAS**, junto con datos de terreno procesados, orto-imágenes, datos de recorrido MMS y varios conjuntos de datos relacionados
- El volumen total de datos publicados supera los **30 TB**; el tamaño promedio por malla es de 300 MB, llegando a superar los 5 GB en el máximo
- Cada punto contiene latitud, longitud, elevación, datos de color RGB, intensidad de recepción de luz e información de clasificación
- Visor web disponible mediante colaboración con el **Proyecto de Gemelo Digital de Tokio**
- Costo total del proyecto: **1.840 millones de yenes (11,6 millones de USD)**, financiado aproximadamente en un 23% por el gobierno nacional

Estas especificaciones permiten a la Prefectura de Shizuoka lograr un **gemelo digital a escala 1:1** de toda la región.

## Enfoque de desarrollo de datos

La adquisición de datos de nube de puntos combina tres tipos de métodos, cada uno con diferentes propósitos y densidades de puntos.[^3]

| Método de medición | Objetivo | Densidad de puntos |
|---|---|---|
| Escaneado Láser Aéreo (LP) | Suelo, edificios, árboles, etc. | 16 puntos/m² o más |
| Batimetría Láser Aérea (ALB) | Zonas de aguas poco profundas (costas, ríos) | 1 punto/m² o más |
| Sistema de Mapeo Móvil (MMS) | Superficies de carreteras, márgenes viales | 400 puntos/m² o más |

![Muestra de los tres tipos de datos de Virtual Shizuoka a 2026/3/30](/images/articles/eita-h/eh_pointcloud_image03.webp)
Virtual Shizuoka, accedido el 30 de marzo de 2026 [^6]

## Principales aplicaciones

Las aplicaciones de Virtual Shizuoka incluyen las siguientes:[^3]

- **Prevención de desastres**: Análisis de volúmenes de cambio antes y después de eventos de desastre
- **Transporte**: Desarrollo de mapas para la navegación de vehículos autónomos
- **Ingeniería civil**: Simplificación de los procesos de contratación de obras civiles
- **Planificación urbana**: Simulación de paisajes urbanos, apoyo a la formación de consensos
- **Gestión de infraestructura**: Gestión avanzada de inventarios mediante visualización 3D de servicios subterráneos
- **Energía**: Análisis del potencial de generación de energía solar
- **Cultura**: Mejora de la eficiencia en excavaciones arqueológicas, archivo digital de bienes culturales
- **Turismo**: Turismo en RV a través del metaverso

Se espera que los datos de nube de puntos de Virtual Shizuoka sean utilizados en diversos campos, incluyendo prevención de desastres, gestión de infraestructura, turismo, planificación de transporte y planificación urbana, con un uso creciente por parte de instituciones de investigación y empresas privadas.[^3] [^4]

En particular, en los campos de la construcción, la ingeniería civil y la respuesta ante desastres, se están implementando aplicaciones prácticas, y se trabaja en la expansión de ese conocimiento hacia otros municipios.[^4]

También se anticipa la aplicación a la conducción autónoma. Concretamente, los datos de Virtual Shizuoka se utilizan para desarrollar **mapas 3D de alta definición (HD maps)** para vehículos autónomos en experimentos de demostración denominados **"Proyecto Show CASE de Conducción Autónoma de Shizuoka"**.[^7]

# Otros proyectos de desarrollo de datos de nube de puntos

A partir de 2026, en Japón avanzan numerosos proyectos de datos de nube de puntos además de **Virtual Shizuoka**.

## Proyecto de Gemelo Digital de Tokio

Tokio, la capital de Japón, lanzó su **"Proyecto de Gemelo Digital"** en 2020, y desde 2022 inició el desarrollo de datos de nube de puntos como componente clave de esta iniciativa.[^8] [^9] [^10]

El desarrollo de datos de nube de puntos incluye préstamo de equipos, adquisición de datos y soporte para su aprovechamiento.

Entre los desafíos se señalan las dificultades de posicionamiento en ciertos lugares y la dificultad para reproducir la textura de los bienes culturales en los visores.[^9]

![Proyecto de Gemelo Digital de Tokio a 2026/3/30](/images/articles/eita-h/eh_pointcloud_image04.webp)
Proyecto de Gemelo Digital de Tokio, accedido el 30 de marzo de 2026 [^9]

## Open Nagasaki

La Prefectura de Nagasaki, situada en el sur de Japón, también avanza en **"Open Nagasaki"**, una iniciativa centrada en la publicación de datos de nube de puntos.[^11]

**Open Nagasaki**, lanzado alrededor de 2023, es reconocido como un ejemplo representativo de datos abiertos de nube de puntos en Japón, con un singular lema que exhorta a **"Úsalo libremente"** en tono imperativo.[^11]

Los datos de nube de puntos se distribuyen en **formato LAS**. Si bien no existe un visor oficial, el sitio web oficial enlaza a métodos de procesamiento de datos y ejemplos de uso.

Una característica distintiva de la iniciativa de Nagasaki es que la publicación de datos avanza en colaboración con investigadores y comunidades regionales, no solo con organismos gubernamentales. Estas iniciativas de datos abiertos tienen potencial de aplicación en diversos campos, incluyendo la preservación regional de bienes culturales, el turismo y la investigación urbana.

![Open Nagasaki a 2026/3/30](/images/articles/eita-h/eh_pointcloud_image05.webp)
Sitio web de Open Nagasaki, accedido el 30 de marzo de 2026 [^11]

## Proyecto de nube de puntos de la Expo de Osaka

Otro caso interesante es la iniciativa de desarrollo de datos de nube de puntos enfocada en el área del recinto de la **Expo Osaka-Kansai**.

Este proyecto adquiere el espacio completo del recinto de la expo, incluidos los pabellones de diversas regiones, como datos de nube de puntos de alta precisión y los preserva como gemelo digital.[^12]

Está siendo desarrollado y publicado como parte de **PLATEAU**, el proyecto de construcción de modelos de ciudad 3D liderado por el MLIT.

El MLIT señala explícitamente el uso previsto: «Esperamos que estos datos sean utilizados para desarrollar contenido que permita revisitar el recinto de la expo y materiales educativos», y **el uso comercial está prohibido**.[^12] [^13]

El desarrollo de datos de nube de puntos orientado a eventos de gran escala y duración limitada, como las exposiciones universales, atrae atención como una nueva aplicación diferente de la planificación urbana tradicional. Tales iniciativas también tienen un valor significativo desde la perspectiva del registro de espacios urbanos y el archivo digital.

![Expo Osaka 2025 a 2026/3/30](/images/articles/eita-h/eh_pointcloud_image06.webp)
Datos de nube de puntos de la Expo Osaka-Kansai, accedido el 30 de marzo de 2026 [^13]

# Perspectivas de futuro

Como se ha demostrado a lo largo de este artículo, el desarrollo de datos de nube de puntos en Japón ha avanzado rápidamente desde la entrada en la década de 2020. Desde la cobertura integral de toda la prefectura por **Virtual Shizuoka** hasta la iniciativa de archivo de eventos de la **Expo Osaka-Kansai**, están surgiendo en todo Japón diversos modelos de desarrollo de datos de nube de puntos.

Cada proyecto refleja diferentes prioridades y enfoques: desarrollo de infraestructura liderado por el gobierno, participación colaborativa de la comunidad y preservación digital de eventos de duración limitada. Esta diversidad sugiere que la tecnología de nube de puntos encuentra aplicaciones más allá de la planificación urbana y la prevención de desastres tradicionales.

Sin embargo, persisten desafíos significativos. Los datos de nube de puntos alcanzan tamaños enormes —como los 30 TB de Virtual Shizuoka—, lo que dificulta el procesamiento, el almacenamiento y la adopción generalizada por parte de municipios y organizaciones más pequeños que carecen de recursos técnicos sustanciales.

Desde esta perspectiva, el caso de **Virtual Shizuoka** ofrece un modelo especialmente prometedor para el futuro. En lugar de que cada municipio desarrolle sistemas aislados, Virtual Shizuoka comparte activamente su infraestructura técnica y conocimientos con otros gobiernos locales, creando una base para el desarrollo colaborativo.

Si bien las organizaciones administrativas japonesas son generalmente conocidas por su estructura organizativa vertical y compartimentada, **los esfuerzos de despliegue horizontal de Virtual Shizuoka** representan un cambio de paradigma. Este enfoque contribuirá significativamente no solo a la proliferación de datos de nube de puntos, sino a la visión más amplia de Japón de un gemelo digital nacional.

La expansión continua de estas iniciativas colaborativas a nivel municipal, combinada con los avances tecnológicos en procesamiento y visualización de datos, acelerará tanto el desarrollo como la utilización práctica de los datos de nube de puntos en todo Japón.

# Referencias

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
