---
title: "Proyecto PLATEAU: el modelo de ciudad 3D liderado por el gobierno de Japón"
description: 'Proyecto PLATEAU liderado por el Ministerio de Tierra, Infraestructura, Transporte y Turismo'
date: 2025-08-01
category: project
author: "Eita.H"
---

**PLATEAU es un proyecto de gemelo digital urbano a escala nacional en Japón** promovido por el Ministerio de Tierra, Infraestructura, Transporte y Turismo (MLIT) en colaboración con diversas partes interesadas.
Lanzado en 2020, para 2021 había desarrollado y publicado modelos de ciudad 3D como datos abiertos para 56 ciudades de todo Japón.[^1]

También ofrece servicios como **PLATEAU VIEW (un visor)**, un sitio portal y APIs.

# Enlaces
- Proyecto PLATEAU[^1]
- PLATEAU VIEW[^2]
- Sitio Portal PLATEAU del Centro de Información G-Espacial[^3]

![Imagen de muestra de PLATEAU View a 2025/08/01](/images/articles/eita-h/PLATEAUVIEW.webp)
PLATEAU View, accedido el 1 de agosto de 2025 [^2]

# Descripción general

Este proyecto, liderado por el Ministerio de Tierra, Infraestructura, Transporte y Turismo (MLIT), tiene como objetivo desarrollar y publicar **modelos de ciudad 3D de alta precisión** para ciudades de todo Japón.
Una característica significativa de este proyecto es que desarrolla datos 3D de formas de edificios urbanos, alturas e información de uso del suelo con calidad garantizada por el gobierno, y hace que gran parte de estos datos estén disponibles como datos abiertos con metadatos, de forma gratuita.

Se espera que estos datos abiertos aceleren la realización de **gemelos digitales e iniciativas de ciudades inteligentes** en Japón, habilitando aplicaciones avanzadas en diversos campos como planificación urbana, prevención de desastres, transporte, turismo y arquitectura.[^7]

Desde el lanzamiento del proyecto en 2020, los casos de uso por parte de empresas privadas, instituciones de investigación y desarrolladores ciudadanos han ido en aumento, y PLATEAU continúa creciendo como **una nueva base para la información geoespacial en Japón**.

# Concepto

El nombre PLATEAU se explica así: «Los modelos de ciudad 3D proporcionan innumerables puntos de conexión con la sociedad, y a través de ellos, diversos campos se interconectan y se desarrollan a través del ciberespacio — la denominación PLATEAU encarna la expectativa de un desarrollo del mundo autónomo y resiliente, similar a lo que Deleuze y Guattari anticiparon en "Mil Mesetas"».[^1]
Esto refleja su significado filosófico y ambicioso.

El sitio web y otros materiales presentan diseños sofisticados en comparación con las agencias gubernamentales tradicionales. Se cree que este enfoque refleja el trasfondo académico de **Yuya Uchiyama, figura clave del MLIT que ha liderado el proyecto PLATEAU** y tiene un inusual trasfondo en filosofía, así como la estrategia de **Seiichi Saito, quien fue responsable del branding**.[^4]

Además, en 2017, la Federación Empresarial de Japón presentó la estrategia relacionada con **«Sociedad 5.0»**, promoviendo la creación de un «Japón Virtual» más futurista y avanzado mediante la colaboración público-privada.[^5] [^12]

Si bien no existe una relación directa entre Sociedad 5.0 y PLATEAU, se espera que los modelos de ciudad 3D de PLATEAU desempeñen un papel significativo en la realización de esta estrategia nacional.

# Enfoque de desarrollo y casos de uso

El núcleo del Proyecto PLATEAU son los datos, en particular los **conjuntos de datos de modelos de ciudad 3D**, que se están desarrollando y publicando de forma secuencial en **cada uno de los gobiernos locales de Japón**.

Desde el lanzamiento del proyecto en 2020, **el número de municipios participantes ha aumentado año tras año**, con el objetivo de publicar datos para 500 ciudades en 2027.[^6]

Además, en lugar de limitar los casos de uso desde el lado de PLATEAU, se deja mucho al criterio e ideas de los usuarios. Por ello, **se celebran diversos eventos para compartir casos de uso del aprovechamiento de datos**, permitiendo a muchas personas comprender y utilizar el valor de PLATEAU.[^7]

Entre las aplicaciones prácticas, **la estimación del potencial de generación de energía solar y la simulación de reflexión** utilizando formas de edificios 3D demuestra la utilidad en el mundo real de los datos de PLATEAU.[^16]

![Imagen de muestra de caso de uso de PLATEAU a 2025/08/01](/images/articles/eita-h/PLATEAU_usecase_uc.webp)
Caso de uso de PLATEAU: estimación del potencial de generación de energía solar, accedido el 1 de agosto de 2025 [^16]

Más allá de las aplicaciones prácticas, PLATEAU también fomenta la exploración creativa a través de competencias. Los ejemplos específicos incluyen el **PLATEAU AWARD**[^14], un concurso anual donde se presentan casos de uso en campos como prevención de desastres, atención médica y contenido de AR/VR.

Además, el **PLATEAU Hack Challenge**, un hackathon, ha visto propuestos muchos prototipos únicos, incluyendo simulaciones de Godzilla destruyendo ciudades.[^15]

![Imagen de muestra de caso de uso de PLATEAU a 2025/08/01](/images/articles/eita-h/PLATEAU_usecase_gz.webp)
Caso de uso de PLATEAU: simulación de destrucción de ciudad por Godzilla, accedido el 1 de agosto de 2025 [^15]

# Modelos de ciudad 3D

Los modelos de ciudad 3D de PLATEAU están siendo desarrollados y publicados por los municipios en etapas desde **LOD0 hasta LOD2**.[^8]

Si bien los datos urbanos 3D pueden estar disponibles de otros proveedores de mapas, una de las ventajas notables de PLATEAU parece ser la **calidad de alta precisión y los metadatos garantizados por el gobierno**. Por ello, se espera que sea utilizado en campos que requieren interés público, como **planificación urbana, prevención de desastres, transporte, turismo y arquitectura**.

Además, si bien los modelos de ciudad 3D podrían evocar imágenes de procesamiento con software de modelado 3D como Blender, una característica significativa de PLATEAU es que puede manejarse como **datos GIS**. Si bien los datos originales admiten varios tipos de formato como GeoJSON, se publican principalmente en el formato **CityGML** conforme con OGC, y se proporcionan herramientas de código abierto para **convertir el CityGML de PLATEAU a datos GIS comunes**.[^9] [^10]

# Desafíos

El proyecto PLATEAU, que comenzó en 2020, ha logrado ciertos éxitos, pero actualmente enfrenta muchos desafíos.

En primer lugar, el desarrollo de los datos requiere **un presupuesto significativo**. Según una empresa líder de topografía japonesa, el costo de desarrollo para un municipio típico con una población de 150.000 habitantes y un área de 200 km² es de aproximadamente 23 millones de yenes (aproximadamente 140.000-160.000 USD).[^13]

Además, un desafío común para todos los datos geoespaciales es que una vez desarrollados, **los datos deben actualizarse periódicamente**. Esto también requiere un presupuesto sustancial, lo que hace necesario explorar métodos más eficientes y rentables. A partir de 2025, se están proponiendo métodos que utilizan datos de nube de puntos LiDAR para desarrollar los modelos de ciudad 3D de PLATEAU como experimentos de demostración, y también se está considerando la actualización de datos mediante imágenes satelitales.[^11]

# Referencias

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
