---
title: "Project PLATEAU: Government-led 3D City Model in Japan"
description: 'Project PLATEAU led by the Ministry of Land, Infrastructure, Transport and Tourism'
date: 2025-08-01
category: project
author: "Eita.H"
---

PLATEAU is a nationwide urban digital twin project in Japan promoted by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT) in collaboration with various stakeholders.
Launched in 2020, by 2021 it had developed and released 3D city models as open data for 56 cities across Japan. It also offers services such as PLATEAU VIEW (a viewer), a portal site, and APIs.

# Links
- Project PLATEAU[^1]
- PLATEAU VIEW[^2]
- G-Spatial Information Center PLATEAU Portal Site[^3]

![PLATEAU View Sample Image as of 2025/08/01](/images/articles/eita-h/PLATEAUVIEW.webp)
PLATEAU View, accessed August 1, 2025[^2]

# 1. Overview of Project PLATEAU
This project, led by the Ministry of Land, Infrastructure, Transport and Tourism, aims to develop and publish high-precision 3D city models for cities throughout Japan.
A significant feature of this project is that it develops 3D data of urban building shapes, heights, and land use information with government-guaranteed quality, and makes much of this data available as open data with metadata, free of charge.
This open data is expected to accelerate the realization of digital twins and smart city initiatives in Japan, enabling advanced applications in various fields such as urban planning, disaster prevention, transportation, tourism, and architecture.
Since the project's launch in 2020, use cases by private companies, research institutions, and citizen developers have been increasing, and PLATEAU continues to grow as a new foundation for geospatial information in Japan.

# 2. PLATEAU's Concept
The name PLATEAU is explained as: "3D city models provide countless connection points to society, and through these, various fields become interconnected and develop through cyberspace—the naming PLATEAU embodies the expectation for autonomous and resilient world development, similar to what Deleuze and Guattari anticipated in 'A Thousand Plateaus'"[^1]. This reflects its philosophical and ambitious meaning.
The website and other materials feature sophisticated designs compared to traditional government agencies. This approach is believed to reflect the academic background of Yuya Uchiyama, a key person from MLIT who has led the PLATEAU project and has an unusual background in philosophy, as well as the strategy of Seiichi Saito, who was responsible for branding[^4].

Additionally, in 2017, the Japan Business Federation presented the "Society 5.0" strategy, promoting the creation of a more futuristic and advanced "Virtual Japan" through public-private collaboration[^5]. While there is no direct relationship between Society 5.0 and PLATEAU, the 3D city models of PLATEAU are expected to play a significant role in realizing this national strategy.

# 3. PLATEAU's Business Development Approach
The core of Project PLATEAU is data, particularly 3D city model datasets, which are being developed and released sequentially for each of Japan's more than 1,700 local governments. Since the project's launch in 2020, the number of participating municipalities has increased year by year, with a goal of publishing data for 500 cities by 2027[^6].
Furthermore, rather than limiting the use cases from PLATEAU's side, much is left to the discretion and ideas of users. Therefore, various events are held to share use cases for data utilization, enabling many people to understand and utilize the value of PLATEAU[^7].

# 4. Characteristics of PLATEAU's 3D City Models
PLATEAU's 3D city models are being developed and published by municipalities in stages from LOD0 to LOD2[^8]. While 3D urban data may be available from other map vendors, PLATEAU's significant strength lies in the high-precision quality and metadata guaranteed by the government. Therefore, it is expected to be utilized in fields requiring public interest, such as urban planning, disaster prevention, transportation, tourism, and architecture.
Additionally, while 3D city models might evoke images of processing with 3D modeling software like Blender, a significant feature of PLATEAU is that it can be handled as GIS data. While the original data supports various format types such as GeoJSON, it is primarily published in the OGC-compliant CityGML format[^9], and open-source tools are provided to convert PLATEAU's CityGML to common GIS data[^10].

# 5. Challenges for PLATEAU
The PLATEAU project, which began in 2020, currently faces many challenges.
First, developing the data requires a significant budget. According to a leading Japanese surveying company, the development cost for a municipality with a population of about 500,000 is approximately 12 million yen (USD: 1.5M).
Additionally, a common challenge for all geospatial data is that once developed, the data needs to be updated periodically. This also requires a substantial budget, necessitating the exploration of more efficient and cost-effective methods. As of 2025, methods using LiDAR point cloud data to develop PLATEAU's 3D city models are being proposed as demonstration experiments, and data updates using satellite imagery are also being considered[^11].

# References
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
