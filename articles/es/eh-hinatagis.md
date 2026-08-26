---
title: "Caso de uso — Hinata GIS y open-hinata3: el GIS de código abierto ultraversátil de Japón en acción"
description: "Caso de uso — Hinata GIS y open-hinata3: el GIS de código abierto ultraversátil de Japón en acción"
date: 2026-01-27
category: [usecase, opensource]
author: "Eita.H"
---

# Descripción general

**Hinata GIS** es un GIS web de código abierto desarrollado como proyecto personal por un empleado de un gobierno prefectural japonés.[^1]

Es conocido como una **aplicación de mapa de uso general** que incluye más de **600 tipos de capas** procedentes de diversos datos abiertos e información estadística publicada en Japón, permitiendo a los usuarios superponerlos libremente y visualizarlos/analizarlos.[^2]

![Captura de pantalla de OH3 a 27 de enero de 2026](/images/articles/eita-h/eh_OH3_image02.webp)
*open-hinata3, accedido el 26 de enero de 2026* [^3]

Cabe destacar que, pese a ser un proyecto de desarrollo individual, **la versión original "Hinata GIS" fue adoptada oficialmente como servicio web por la Prefectura de Miyazaki**, donde trabajaba el desarrollador.[^4]

Posteriormente, el proyecto sucesor **open-hinata3 (en adelante, OH3)** sigue siendo desarrollado por el mismo programador.

En los últimos años ha ganado atención tanto desde la perspectiva de la innovación técnica como de la utilización de datos abiertos, con desarrollos como la **compatibilidad con teselas vectoriales y la implementación de funcionalidad de agente de IA**.

## Enlaces relacionados
- Versión más reciente ➡️ [**open-hinata3 (OH3)**](https://kenzkenz.jp/oh3/)
- Primera edición ➡️ [**Hinata GIS**](https://hgis.pref.miyazaki.lg.jp/hinata/)
>Disponible únicamente en japonés. A partir de 2026, se recomienda open-hinata3 para los usuarios en general.

# Antecedentes

**"Hinata GIS"** es un GIS web que **Kenji Ochiai (@kenzkenz)**,[^5] entonces empleado de un gobierno local japonés, comenzó a desarrollar por interés personal.[^6] [^9]

El desarrollo comenzó alrededor de 2015. El programador, perteneciente al departamento de política de información de la Prefectura de Miyazaki, situada en la región de Kyushu, en el sur de Japón, lo construyó de forma autodidacta bajo el concepto de **"acercar los datos a todos"**.[^6] [^1]
El nombre **"Hinata" significa "lugar soleado"** en japonés y es un término empleado en el lema de la Prefectura de Miyazaki.[^4]

En el Japón de los años 2010, la publicación y aprovechamiento de datos abiertos por parte del gobierno nacional y los gobiernos locales avanzaba rápidamente,[^7] y Hinata GIS se posiciona como uno de los ejemplos prácticos más representativos surgidos de esa tendencia.

Posteriormente, en marzo de 2017, ganó el **gran premio en el "Concurso de Aplicaciones RESAS"** organizado por la Oficina del Gabinete de Japón, ganando amplio reconocimiento entre los usuarios de GIS y los gobiernos locales japoneses.[^1]

La primera versión **"Hinata GIS" fue entonces adoptada como el mapa web oficial de la Prefectura de Miyazaki**.

![Captura de pantalla de Hinata GIS a 26 de enero de 2026](/images/articles/eita-h/eh_HinataGIS_Image01.webp)
*Hinata GIS en el sitio web oficial de la Prefectura de Miyazaki, accedido el 26 de enero de 2026* [^4]

Tras la adopción oficial, el desarrollador creó una versión modernizada utilizando tecnologías como las teselas vectoriales.

Además, alrededor de 2024, comenzó la implementación de una nueva versión cambiando el framework web de OpenLayers a MapLibre GL JS.
En este proceso, la versión reconstruida sobre MapLibre GL JS fue posicionada como **la tercera versión mayor** y bautizada por el propio desarrollador como **open-hinata3 (OH3)**.

A partir de 2026, OH3 no solo aumenta el número de capas, sino que también avanza en expansiones funcionales desafiantes como las capacidades de **análisis con IA**.[^2]

Además, el proyecto ha evolucionado hacia una comunidad más amplia, con usuarios que contribuyen con informes detallados y guías de uso.[^8]

# Características

Desde la década de 2010, en Japón han surgido diversas herramientas y servicios GIS abiertos, en el contexto de la expansión de los **datos abiertos municipales** y las **comunidades OSS activas**.[^7]

Entre ellos, Hinata GIS destaca como ejemplo representativo al haber **ganado concursos**, sido **adoptado oficialmente por gobiernos locales** y mantenido **más de 10 años de desarrollo continuo**, incluyendo el desarrollo de servicios sucesores.

## Concepto de desarrollo

Hinata GIS fue desarrollado con el concepto de "**acercar los datos a todos**".[^1]

El desarrollador también afirma que aspira a crear un servicio que permita a muchas personas usar el GIS para **diversos propósitos, como Microsoft Excel**.[^6]

De hecho, es utilizado activamente no solo por entusiastas del GIS, sino también por **empleados de gobiernos locales, profesores de escuela y topógrafos privados** en Japón.[^8]

Además, en el sucesor OH3, el concepto de "**ultraversátil**" se enfatiza con las siguientes palabras:[^10]
> OH3 reúne mapas, capas, análisis y salida en un único espacio de trabajo. No define el propósito. No es para industrias específicas. Es una herramienta para "personas que quieren pensar mientras miran mapas".

Asimismo, la **funcionalidad de agente de IA** instalada en OH3 en 2025 se presenta como "**OH3 que viaja en el tiempo × IA: un nuevo diálogo entre tú y los mapas**".[^10]

Esto muestra un concepto funcional de analizar **información geográfica de forma interactiva con IA, utilizando los diversos conjuntos de datos de OH3 desde el pasado hasta el presente**, proponiendo una nueva forma de **GIS en la era de la IA**.

![Captura que incluye la funcionalidad de IA](/images/articles/eita-h/eh_OH3_image04.webp)
*Funcionalidad de agente de IA en OH3, accedido el 26 de enero de 2026*

## Fortalezas de OH3

Como el propio desarrollador lo llama "**ultraversátil**", la mayor fortaleza de OH3 son sus **más de 600 tipos de capas** sin limitación de propósito.[^10]

Lo que potenció aún más esa fortaleza es la mencionada **funcionalidad de agente de IA**. Esto permite a OH3 demostrar **efectos sinérgicos** al integrar y analizar transversalmente, mediante IA, la masiva información de capas desde el pasado hasta el presente para cualquier ubicación nacional especificada por los usuarios.

En otras palabras, OH3 ha evolucionado de una simple herramienta de visualización de capas a un sistema para integrar e interpretar datos cronológicamente y de forma interdisciplinaria a partir de ubicaciones específicas.

A continuación, la **operabilidad simple y fluida** es también una fortaleza de este servicio. La interfaz de OH3 tiene un diseño similar al de los GIS web mantenidos por el gobierno nacional y los gobiernos locales de Japón, como GSI Maps.[^11]

Por ello, los empleados de gobiernos locales y los profesores que no están familiarizados con software GIS profesional pueden comenzar a usarlo **sin costes adicionales de aprendizaje**.

Además, dado que OH3 es un proyecto de desarrollo individual, el desarrollador @kenzkenz **comunica frecuentemente métodos de uso y nuevas funcionalidades a través de las redes sociales**.[^5]

Esta **alta cantidad de puntos de contacto con el desarrollador** también resulta atractiva. Como resultado, algunos usuarios se han convertido en evangelistas: por ejemplo, **el manual de usuario más detallado de OH3** fue creado no por el propio desarrollador, sino por **una oficina de topografía que es usuaria del servicio**.[^8]

![Manual de usuario de OH3 por una oficina de topografía](/images/articles/eita-h/eh_OH3_image03.webp)
*Manual de usuario de open-hinata3 elaborado por una oficina de topografía, accedido el 26 de enero de 2026* [^8]

## Funcionalidades

A enero de 2026, la riqueza funcional de OH3 puede apreciarse numéricamente en la siguiente tabla.[^2]

| Elemento | Valor |
|---|---|
| Total de capas de datos | 625+ tipos |
| Funciones de análisis con IA | 10 tipos |
| Funciones del cuadro de herramientas | 16 tipos |
| Gráficos estadísticos | 47 tipos |
| Formatos de archivo compatibles | 10+ tipos |
| Capas de extensión | 47 tipos |

## Funcionalidades destacadas

En OH3, diversas funciones se integran además de las funciones básicas de operación de mapas web.
A continuación se presentan algunas de ellas (a enero de 2026):

- Visualización multipantalla (hasta 4 pantallas divididas) para análisis comparativo
- Más de 625 mapas base y capas
- Herramientas de dibujo/edición (lápiz, línea, polígono, etc. Cálculo automático de áreas de figuras dibujadas, posibilidad de compartir con otros)
- Integración de datos en tiempo real (pronóstico meteorológico, información de tráfico, etc.)
- Función de creación de informes de análisis con IA (informes automáticos de 10 tipos, incluyendo prevención de desastres y entorno de crianza de hijos, para cada ubicación)
- Agente de IA
- Compartir contenido de conversaciones con IA con otros usuarios
- Mejora de imágenes con IA
- Compartir mapas
- Chat grupal
- Impresión
- Perfilado de población
- Notas fotográficas
- Lectura OCR
- Deslizador temporal de entonces y ahora
- Registro de capas favoritas
- Exportación de diversos tipos de archivos

## Capas más populares

El cuadro de herramientas de OH3 permite ver las "100 capas más populares".
Las 12 capas más populares confirmadas a enero de 2026 eran las siguientes:

- Mapa del Registro de Propiedad 2025
- Fotos más recientes (fotografías aéreas)
- Mapa Nacional de Números de Parcela
- Mapa del Registro de Propiedad 2025 - Puntos de control
- Puntos de control de bloque
- Mapa del Registro de Propiedad 2025 - Marco de mapa
- Puntos de control básicos
- Fotografías aéreas 1974-78 (nacional)
- Vector GSI
- Pirámide de población del Censo 2020
- Límites de barrios y distritos 2020
- Pueblos del período Edo tardío (siglo XIX)

## Principales aplicaciones

OH3 es un GIS "**ultraversátil**" conforme al concepto anterior, y sus aplicaciones no se limitan a usos específicos.

Entre los ejemplos que figuran en el sitio web oficial se enumeran los siguientes: **prevención de desastres, bienes raíces, estudios, planificación urbana, educación, investigación y pasatiempos**.[^10]

- Personas que desean explorar mapas de manera casual: Comparar topografía, estructura urbana, mapas históricos y fotografías aéreas
- Personas que usan mapas en el trabajo: Operaciones diarias en gobiernos locales, bienes raíces, construcción, infraestructura y estudios
- Personas que quieren aprender/enseñar: Materiales didácticos para clases, talleres y formaciones
- Profesionales: Trabajo especializado en topografía, investigación, bienes raíces y diversos tipos de consultoría

Además, al observar las **capas populares** mencionadas, se aprecia que las capas relacionadas con **topografía, población y fotografías aéreas históricas** tienen una frecuencia de uso particularmente alta entre los usuarios.

Por ello, se infiere que los casos de uso son especialmente comunes en **investigaciones topográficas, práctica de planificación urbana, educación en geografía/prevención de desastres y exploración casual de mapas**.

# Perspectivas futuras y desafíos

A medida que se acumulan datos y funcionalidades, OH3 se vuelve cada vez más atractivo. OH3 funciona como un **punto de agregación de datos abiertos**, un **campo experimental de GIS** y una **plataforma que promueve la interacción entre datos y usuarios**.

En particular, la **combinación de IA y GIS ultraversátil** es innovadora, y al permitir que diversos usuarios lo utilicen libremente más allá de las aplicaciones GIS tradicionales, cabe esperar que se descubran **posibilidades inesperadas del GIS**.

Por otro lado, el desarrollador ha mencionado con franqueza en sus comunicaciones los desafíos propios del desarrollo individual.
Concretamente, estos incluyen la soledad y la dificultad de mantener la motivación al continuar el desarrollo solo durante un largo período, el volumen de respuestas a consultas, y problemas de costos como los gastos de operación del servidor.[^6]

Como ocurre con muchos proyectos de código abierto, **los incentivos y la sostenibilidad serán desafíos difíciles**.

# Lecciones aprendidas — Una encrucijada para el GIS de código abierto

Hinata GIS y OH3 pueden considerarse uno de los ejemplos más representativos del aprovechamiento de datos abiertos en Japón, dado que este sistema desarrollado individualmente fue adoptado oficialmente por un gobierno local y ha continuado su desarrollo por más de 10 años.

La fuerza impulsora detrás de esto fue la **pasión del desarrollador** por persistir en el desarrollo individual. La mentalidad de desarrollo individual altamente flexible ha posibilitado **ideas innovadoras** como la aplicación de IA al GIS "ultraversátil" y la **creación rápida de prototipos**, pero al mismo tiempo, su **sostenibilidad sigue siendo un desafío constante**.

En conjunto, el camino recorrido por Hinata GIS y OH3 muestra que las tendencias de datos abiertos de Japón están transitando de la etapa de "**publicar datos**" a la etapa de "**reconsiderar quién usa, cultiva y apoya el ecosistema de datos, y cómo**".

¿Quién aprovecha y cómo la pasión del desarrollo individual, y en qué roles la apoya? ¿Cómo deberían involucrarse el gobierno nacional y los locales, las empresas y las comunidades, respectivamente?
A partir de 2026, el GIS de código abierto puede estar en una encrucijada donde se plantean tales preguntas.

# Referencias

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
