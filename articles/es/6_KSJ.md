---
title: "Datos GIS esenciales del gobierno: Servicio de Descarga de Información Numérica del Territorio Nacional"
description: 'Sobre el Servicio de Descarga de Información Numérica del Territorio Nacional, que proporciona datos GIS esenciales y gratuitos del gobierno japonés'
date: 2025-08-10
category: [service, government]
author: "Eita.H"
---

# Descripción general

El «Servicio de Descarga de Información Numérica del Territorio Nacional» (Kokudo Suuchi Jouhou) de Japón[^1] es el catálogo de datos GIS más representativo proporcionado por el Ministerio de Tierra, Infraestructura, Transporte y Turismo (MLIT). Ofrece diversa información geoespacial sobre el territorio nacional de Japón como datos GIS gratuitos. Dado que proporciona una cobertura integral de la información espacial fundamental del país, es uno de los servicios más accesibles y frecuentemente utilizados por los usuarios de GIS japoneses, desde principiantes hasta expertos.

# Principales categorías de datos

A partir de 2025, el sitio web del Servicio de Descarga de Información Numérica del Territorio Nacional[^1] ofrece tres categorías principales de menú: «Información Numérica del Territorio Nacional», «Información de Referencia de Ubicación» y «Encuesta Nacional», junto con un sistema de cartografía web dedicado para la navegación simple de datos.

- **Información Numérica del Territorio Nacional**: Una colección de bases de datos que proporciona información espacial fundamental sobre el territorio nacional como datos GIS, incluyendo topografía, uso del suelo, instalaciones públicas y transporte

- **Información de Referencia de Ubicación**: Un conjunto de datos que contiene información de ubicación a nivel de manzana en todo el país, con nombres de manzanas y coordenadas de punto representativo (latitud y longitud)

- **Encuesta Nacional**: Información de encuestas relacionada con la clasificación del suelo y la gestión hídrica para el control de inundaciones y la utilización del agua

La sección de Información Numérica del Territorio Nacional contiene numerosos conjuntos de datos que sirven como base para el análisis GIS. Los ejemplos incluyen escuelas, estaciones de tren y parques. Además, muchos conjuntos de datos incluyen valiosa información de atributos para el análisis, como el número de pasajeros para las estaciones de tren, que complementa los datos básicos de instalaciones públicas.

# Formatos de datos

Los formatos de datos principales cumplen con los estándares JPGIS 2.1 y se proporcionan en formatos Shapefile, XML y GeoJSON. Los datos de descarga se almacenan en formato ZIP. Se admiten casos de uso tanto comerciales como no comerciales, con información de licencia especificada en los metadatos de cada conjunto de datos.

En febrero de 2025, el servicio realizó una encuesta a usuarios sobre preferencias de formato de datos, generando extensas discusiones a través de formularios de cuestionario y el repositorio de GitHub pertinente.[^2] Los formatos de datos de muestra presentados incluían FlatGeobuf, GeoPackage, GeoParquet, GeoArrow y PMTiles. A partir de 2025, sigue existiendo una fuerte demanda del formato Shapefile entre los usuarios tradicionales de GIS de Japón. Sin embargo, la importancia de los formatos adecuados para sistemas de cartografía web de alto rendimiento y análisis a gran escala se ha destacado con frecuencia en los últimos años. En este contexto, la discusión sobre métodos contemporáneos de provisión de datos GIS ha generado un considerable debate. Los resultados de esta revisión no se han finalizado a agosto de 2025.

# Historia del servicio

La Información Numérica del Territorio Nacional, que sirve como fuente de datos para el servicio de descarga, tiene una larga historia que se remonta a 1974, cuando comenzó su desarrollo. Un factor determinante fue el plan integral de desarrollo nacional anunciado en 1969, que identificó datos territoriales insuficientes y la falta de metodologías científicas para el desarrollo regional.[^3] Inicialmente, los datos compilados se proporcionaban únicamente a instituciones públicas y organizaciones de investigación a través de un sistema basado en solicitudes.[^3]

En 2001, el sitio web GIS, predecesor del actual sitio de Descarga de Información Numérica del Territorio Nacional, fue lanzado, haciendo que los datos GIS fueran ampliamente accesibles al público en general para su descarga.

Además, en 2010, todos los datos comenzaron a convertirse y proporcionarse en formato Shapefile, que era el formato de datos GIS de propósito general más ampliamente utilizado en ese momento. Esto hizo que el servicio fuera ampliamente accesible para diversos usuarios de GIS, incluyendo agencias gubernamentales, empresas privadas, estudiantes y ciudadanos en general. Sin embargo, no puede negarse que esta adopción generalizada del formato Shapefile se ha convertido en una deuda técnica en los últimos años.

En este contexto, el «Grupo de Estudio sobre Enfoques Futuros para el Desarrollo de Información Numérica del Territorio Nacional»[^4] fue establecido en 2023 para examinar métodos contemporáneos de provisión de datos GIS.

# Iniciativas de promoción del servicio

Como se mencionó, el Servicio de Descarga de Información Numérica del Territorio Nacional se caracteriza no solo como un sitio web familiar para los usuarios de GIS japoneses, sino también como un servicio que demuestra enfoques contemporáneos de provisión de datos GIS.

Para promover aún más el aprovechamiento de los datos, el servicio organiza el «Premio Ichi-BIZ», un concurso de ideas de negocio utilizando el Servicio de Descarga de Información Numérica del Territorio Nacional. El nombre «Ichi» se refiere a «ubicación» en japonés, enfatizando la naturaleza geoespacial de la competencia de negocios.

Además, a través del «Grupo de Estudio sobre Enfoques Futuros para el Desarrollo de Información Numérica del Territorio Nacional»,[^4] el servicio ha solicitado activamente opiniones de los usuarios a través de encuestas y el repositorio de GitHub pertinente,[^2] facilitando intercambios vibrantes de opiniones sobre los formatos de datos GIS esperados. Esto demuestra la política del servicio de evolucionar mediante la colaboración con los usuarios de GIS.

Bajo tales iniciativas, el Servicio de Descarga de Información Numérica del Territorio Nacional continuará sirviendo como un recurso fundamental que apoya a los usuarios de GIS japoneses.

# Referencias

[^1]: https://nlftp.mlit.go.jp/ksj/
[^2]: https://github.com/gislab-mlit/next-ksj-formats
[^3]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/content/001711014.pdf
[^4]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/tochi_fudousan_kensetsugyo_tk17_000001_00029.html
