---
title: "Project PLATEAU: Government-led 3D City Model in Japan"
description: 'Project PLATEAU led by the Ministry of Land, Infrastructure, Transport and Tourism'
date: 2025-08-01
category: project
author: "Eita.H"
---

**PLATEAU is a nationwide urban digital twin project in Japan** promoted by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT) in collaboration with various stakeholders.
Launched in 2020, by 2021 it had developed and released 3D city models as open data for 56 cities across Japan. [^1] 

It also offers services such as **PLATEAU VIEW (a viewer)**, a portal site, and APIs.

# Links
- Project PLATEAU [^1]
- PLATEAU VIEW [^2]
- G-Spatial Information Center PLATEAU Portal Site [^3]

![PLATEAU View Sample Image as of 2025/08/01](/images/articles/eita-h/PLATEAUVIEW.webp)
PLATEAU View, accessed August 1, 2025 [^2]

# Overview
This project, led by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT), aims to develop and publish **high-precision 3D city models for cities** throughout Japan.
A significant feature of this project is that it develops 3D data of urban building shapes, heights, and land use information with government-guaranteed quality, and makes much of this data available as open data with metadata, free of charge.

This open data is expected to accelerate the realization of **digital twins and smart city initiatives** in Japan, enabling advanced applications in various fields such as urban planning, disaster prevention, transportation, tourism, and architecture. [^7]

Since the project's launch in 2020, use cases by private companies, research institutions, and citizen developers have been increasing, and PLATEAU continues to grow as **a new foundation for geospatial information in Japan**.

# Concept
The name PLATEAU is explained as: "3D city models provide countless connection points to society, and through these, various fields become interconnected and develop through cyberspace—the naming PLATEAU embodies the expectation for autonomous and resilient world development, similar to what Deleuze and Guattari anticipated in 'A Thousand Plateaus'". [^1] 
This reflects its philosophical and ambitious meaning.

The website and other materials feature sophisticated designs compared to traditional government agencies. This approach is believed to reflect the academic background of **Yuya Uchiyama, a key person from MLIT who has led the PLATEAU project** and has an unusual background in philosophy, as well as the strategy of **Seiichi Saito, who was responsible for branding**. [^4]

Additionally, in 2017, the Japan Business Federation presented the **"Society 5.0"** related strategy, promoting the creation of a more futuristic and advanced "Virtual Japan" through public-private collaboration. [^5] [^12] 

While there is no direct relationship between Society 5.0 and PLATEAU, the 3D city models of PLATEAU are expected to play a significant role in realizing this national strategy.

# Development Approach and Use Cases
The core of Project PLATEAU is data, particularly **3D city model datasets**, which are being developed and released sequentially in **each of Japan's local governments**. 

Since the project's launch in 2020, **the number of participating municipalities has increased year by year**, with a goal of publishing data for 500 cities by 2027. [^6]

Furthermore, rather than limiting the use cases from PLATEAU's side, much is left to the discretion and ideas of users. Therefore, **various events are held to share use cases for data utilization**, enabling many people to understand and utilize the value of PLATEAU. [^7]

Among practical applications, **solar power generation potential estimation and reflection simulation** using 3D building shapes demonstrates the real-world utility of PLATEAU data. [^16]

![PLATEAU Usecase Sample Image as of 2025/08/01](/images/articles/eita-h/PLATEAU_usecase_uc.webp)
PLATEAU use case: solar power generation potential estimation, accessed August 1, 2025 [^16]

Beyond practical applications, PLATEAU also encourages creative exploration through competitions. Specific examples include the **PLATEAU AWARD** [^14], an annual contest where use cases in fields such as disaster prevention, healthcare, and AR/VR content are presented. 

Additionally, the **PLATEAU Hack Challenge**, a hackathon, has seen many unique prototypes proposed, including simulations of Godzilla destroying cities. [^15]

![PLATEAU Usecase Sample Image as of 2025/08/01](/images/articles/eita-h/PLATEAU_usecase_gz.webp)
PLATEAU use case: Godzilla city destruction simulation, accessed August 1, 2025 [^15]

# 3D City Models
PLATEAU's 3D city models are being developed and published by municipalities in stages from **LOD0 to LOD2**. [^8]

While 3D urban data may be available from other map vendors, one of PLATEAU's notable advantages appears to be the **high-precision quality and metadata guaranteed by the government**. Therefore, it is expected to be utilized in fields requiring public interest, such as **urban planning, disaster prevention, transportation, tourism, and architecture**.

Additionally, while 3D city models might evoke images of processing with 3D modeling software like Blender, a significant feature of PLATEAU is that it can be handled as **GIS data**. While the original data supports various format types such as GeoJSON, it is primarily published in the OGC-compliant **CityGML format**, and open-source tools are provided to **convert PLATEAU's CityGML to common GIS data**. [^9] [^10]

# Challenges
The PLATEAU project, which began in 2020, has achieved certain successes, but currently faces many challenges.

First, developing the data requires **a significant budget**. According to a leading Japanese surveying company, the development cost for a typical municipality with a population of 150,000 and an area of 200 km² is approximately JPY 23 million (roughly USD 140,000-160,000). [^13]

Additionally, a common challenge for all geospatial data is that once developed, **the data needs to be updated periodically**. This also requires a substantial budget, necessitating the exploration of more efficient and cost-effective methods. As of 2025, methods using LiDAR point cloud data to develop PLATEAU's 3D city models are being proposed as demonstration experiments, and data updates using satellite imagery are also being considered. [^11]

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
[^12]: https://www8.cao.go.jp/cstp/society5_0/
[^13]: https://www.kkc.co.jp/service/lp/27544/
[^14]: https://www.mlit.go.jp/plateau-next/award/#top
[^15]: https://ascii.jp/elem/000/004/065/4065283/
[^16]: https://www.mlit.go.jp/plateau/use-case/uc24-15/
