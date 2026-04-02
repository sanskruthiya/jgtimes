---
title: "Beyond PLATEAU — Japan's Point Cloud Data and Digital Twin Initiatives"
description: "Exploring Japan's expanding point cloud data initiatives, centered on Virtual Shizuoka, and digital twin development across regions"
date: 2026-04-02
category: [project, government]
author: "Eita.H"
---

# Introduction: Japan's 3D Urban Data Development
Since 2020, Japan has seen rapid progress in developing three-dimensional urban data. One of the most prominent initiatives is **PLATEAU**, a 3D city model development project led by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT).[^1]

**PLATEAU** represents urban buildings and infrastructure as structured models based on the concept of **LOD (Level of Detail)**, with applications expected in urban planning, disaster prevention, simulation, and various other fields.

Meanwhile, in recent years, a different approach has emerged alongside PLATEAU: initiatives to develop and publish urban and regional data as **point clouds** are advancing across Japan.

Point cloud data consists of massive collections of three-dimensional points acquired through aerial laser surveying, mobile mapping, and other methods. By embedding information in these points, urban spaces can be reproduced with high resolution.

This article introduces representative point cloud data publication projects in Japan and examines their characteristics and future potential.

![Virtual Shizuoka screenshot as of 2026/3/30](/images/articles/eita-h/eh_pointcloud_image01.webp)
Virtual Shizuoka viewed on Tokyo Digital Twin Project viewer, accessed March 30, 2026 [^2]

# Case Study: Virtual Shizuoka
One of the pioneering initiatives in point cloud data publication in Japan is the **"Virtual Shizuoka"** project by the Construction Policy Division of Shizuoka Prefecture, located in central Japan.

Since 2019, Shizuoka Prefecture has been developing high-density point cloud data covering the entire prefecture through aerial laser surveying.[^2]

By publishing this data as open data, the project has had a significant impact throughout Japan. As of 2025, the prefecture has completed and published data covering the entire region.[^2]

![Virtual Shizuoka screenshot as of 2026/3/30](/images/articles/eita-h/eh_pointcloud_image02.webp)
Virtual Shizuoka, accessed March 30, 2026 [^2]

## Development Status
The scale and specifications of Virtual Shizuoka demonstrate the ambitious scope of this initiative.[^2] [^3] [^4] [^5]

- Over **500 billion point cloud data points** constructed
- Covers entire prefecture area of **7,777 km²**
- Data published on **G-Spatial Information Center** under **CC-BY 4.0 license**
- Original data provided as compressed **LAS format** files, along with processed terrain data, ortho-images, MMS driving data, and various related datasets
- Total published data volume exceeds **30TB**; average size per mesh is 300MB, with maximum exceeding 5GB
- Each point contains latitude, longitude, elevation, RGB color data, light reception intensity, and classification information
- Web-based viewer provided through collaboration with **Tokyo Digital Twin Project**
- Total project cost: **1.84 billion yen (11.6 million USD)**, approximately 23% funded by national government

These specifications enable Shizuoka Prefecture to achieve a **1:1 scale digital twin** of the entire region.

## Data Development Approach
Point cloud data acquisition combines three types of approaches, each with different purposes and point densities. [^3]

| Measurement Method | Target | Point Density |
|-------------------|--------|---------------|
| Airborne Laser Scanning (LP) | Ground, buildings, trees, etc. | 16 points/m² or more |
| Airborne Laser Bathymetry (ALB) | Shallow water areas (coasts, rivers) | 1 point/m² or more |
| Mobile Mapping System (MMS) | Road surfaces, roadside areas | 400 points/m² or more |

![Virtual Shizuoka three data types sample as of 2026/3/30](/images/articles/eita-h/eh_pointcloud_image03.webp)
Virtual Shizuoka, accessed March 30, 2026 [^6]

## Main Applications
Virtual Shizuoka's applications include the following: [^3]

- **Disaster Prevention**: Analysis of change volumes before and after disaster events
- **Transportation**: Map development for autonomous vehicle navigation
- **Civil Engineering**: Simplification of civil engineering project ordering processes
- **Urban Planning**: Landscape simulation, consensus-building support
- **Infrastructure Management**: Advanced ledger management through 3D visualization of underground utilities
- **Energy**: Solar power generation potential analysis
- **Culture**: Efficiency improvement in archaeological excavations, digital archiving of cultural properties
- **Tourism**: VR tourism through metaverse

Virtual Shizuoka's point cloud data is expected to be utilized in various fields including disaster prevention, infrastructure management, tourism, transportation planning, and urban planning, with increasing use by research institutions and private companies.[^3] [^4]

Particularly in construction, civil engineering, and disaster response fields, practical applications are being implemented, with efforts underway to expand this knowledge to other municipalities.[^4]

Application to autonomous driving is also anticipated. Specifically, Virtual Shizuoka data is being used to develop **high-definition 3D maps (HD maps)** for autonomous vehicles in demonstration experiments titled **"Shizuoka Autonomous Driving Show CASE Project."**[^7]

# Other Point Cloud Data Development Projects

As of 2026, many point cloud data development projects are underway in Japan in addition to **Virtual Shizuoka**.

## Tokyo Digital Twin Project
Tokyo, Japan's capital, launched its **"Digital Twin Project"** in 2020, with point cloud data development beginning in 2022 as a key component of this initiative.[^8] [^9] [^10]

The point cloud data development includes equipment lending, data acquisition, and utilization support.

Challenges include difficulties in positioning in certain locations and difficulties in reproducing the texture of cultural properties in viewers.[^9]

![Tokyo Digital Twin Project as of 2026/3/30](/images/articles/eita-h/eh_pointcloud_image04.webp)
Tokyo Digital Twin Project, accessed March 30, 2026 [^9]

## Open Nagasaki
Nagasaki Prefecture, located in southern Japan, is also advancing **"Open Nagasaki,"** an initiative centered on point cloud data publication.[^11]

**Open Nagasaki**, launched around 2023, is known as a representative example of Japan's point cloud open data, with a unique catchphrase that commands **"Use it freely"** in an imperative tone.[^11]

Point cloud data is distributed in **LAS format**. While there is no official viewer, the official website links to data processing methods and usage examples.

A distinctive feature of Nagasaki's initiative is that data publication proceeds in collaboration with regional researchers and communities, not just government agencies. Such open data initiatives have potential applications in various fields including regional cultural property preservation, tourism, and urban research.

![Open Nagasaki as of 2026/3/30](/images/articles/eita-h/eh_pointcloud_image05.webp)
Open Nagasaki Website, accessed March 30, 2026 [^11]

## Osaka Expo Point Cloud Project
Another interesting case is the point cloud data development initiative targeting the **Osaka-Kansai Expo** venue area.

This project acquires the entire expo venue space, including pavilions from various regions, as high-precision point cloud data and preserves it as a digital twin.[^12]

This is being developed and published as part of **PLATEAU**, the 3D city model construction project led by MLIT.

MLIT explicitly states the intended use: "We expect this data to be utilized in developing content that allows revisiting the expo venue and educational materials," and **commercial use is prohibited**.[^12] [^13]

Point cloud data development targeting large-scale, time-limited events like expos attracts attention as a new application different from traditional urban planning. Such initiatives also hold significant value from the perspective of recording urban spaces and digital archiving.

![Osaka Expo 2025 as of 2026/3/30](/images/articles/eita-h/eh_pointcloud_image06.webp)
Osaka-Kansai Expo Point Cloud Data, accessed March 30, 2026 [^13]

# Future Outlook
As demonstrated throughout this article, point cloud data development in Japan has progressed rapidly since entering the 2020s. From **Virtual Shizuoka's** comprehensive prefecture-wide coverage to the **Osaka-Kansai Expo's** event archiving initiative, diverse models of point cloud data development are emerging across Japan.

Each project reflects different priorities and approaches: government-led infrastructure development, collaborative community engagement, and digital preservation of time-limited events. This diversity suggests that point cloud technology is finding applications beyond traditional urban planning and disaster prevention.

However, significant challenges remain. Point cloud data becomes enormous in size—as seen in Virtual Shizuoka's 30TB dataset—making processing, storage, and widespread adoption difficult for smaller municipalities and organizations without substantial technical resources.

From this perspective, the **Virtual Shizuoka** case offers a particularly promising model for the future. Rather than each municipality developing isolated systems, Virtual Shizuoka actively shares its technical infrastructure and knowledge with other local governments, creating a foundation for collaborative development.

While Japanese administrative organizations are generally known for their vertical, siloed organizational structure, **Virtual Shizuoka's horizontal deployment efforts** represent a paradigm shift. This approach will significantly contribute not only to point cloud data proliferation but to Japan's broader national digital twin vision.

The continued expansion of such collaborative initiatives at the municipal level, combined with ongoing technological advances in data processing and visualization, will accelerate both the development and practical utilization of point cloud data across Japan.

# References
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
