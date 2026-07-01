---
title: "Where GIS × AI Stands Today in Japan"
description: "An overview of the current state and future prospects of geospatial information and AI integration in Japan"
date: 2026-07-01
category: [service, government]
author: "Eita.H"
---

# Introduction
In the 2020s, generative AI—centered on large language models (LLMs)—has brought rapid change to many sectors of society. This trend has reached the geospatial information field as well, and in Japan, the application of AI to GIS is advancing across government, research, and private-sector domains.

However, current generative AI that works with text and images is said to struggle with geospatial information analysis.[^1] The reasons cited include the fact that reading a map involves interpreting dense, high-context information created by others, and—from a technical standpoint—the challenge of making multimodal information such as maps, satellite imagery, point cloud data, and time-series data readable by AI.[^2]

For this reason, in recent years in Japan, concrete initiatives around GIS × AI have been growing rapidly through channels such as the **GeoAI Study Group** led by the **Ministry of Land, Infrastructure, Transport and Tourism (MLIT)** and the **Cabinet Secretariat**,[^3] the GeoAI session at the **Japanese Society for Artificial Intelligence**,[^4] and research presentations in GIS-related communities.

This article provides an overview of where GIS × AI stands in Japan as of 2026, from both practical and policy perspectives.

# GIS × AI in Japan Today
As of 2026, notable developments in GIS × AI in Japan include the launch of the "GeoAI Study Group" led by MLIT and the Cabinet Secretariat,[^3] and the growing use of generative AI in GIS services by both government agencies and private companies.

## Classifying GIS × AI
The GeoAI Study Group has discussed two perspectives on the collaboration between geospatial information and AI—**AI for GIS** and **GIS for AI**—defined as follows:[^5]
- **AI for GIS**: Making the use of GIS easier through AI
- **GIS for AI**: Enabling AI to understand spatial relationships and propose predictions and actions in the real world

The Study Group also notes that while the long-term goal for Japan is the social implementation of **GIS for AI**, the current situation sees **AI for GIS** taking the lead.[^5]

Within the **AI for GIS** category—the use of AI to handle geographic information systems—the author sees the following patterns in the current landscape:

- **GIS Operation Agent**: AI agents (assistants), primarily chat-based, that enable users to operate GIS software through natural language, supporting data acquisition, visualization, analysis, and decision-making.
- **GIS Data Analysis**: AI that comprehensively understands and analyzes layer information associated with a specific area or theme designated by the user.
- **GIS Data Generation**: Automated extraction of geographic features from satellite data and aerial imagery using AI, converting them into vector data and other formats.
- **GIS-AI Integration Infrastructure**: Software and data infrastructure that connects various AI services with GIS services.

![Classification of GIS × AI (by the author)](/images/articles/eita-h/eh_geoai_image01.webp)
*Classification of GIS × AI applications (Source: Author)*

## AI Applications in Private-Sector GIS Services
AI for GIS use cases are also increasing among private companies in Japan. For example, major Japanese GIS firms are providing monitoring services that leverage satellite data, aerial imagery, and AI.

Specifically, **PASCO Corporation**, known for its surveying expertise, launched **"Mieteru Morido"** in 2025—a service that monitors embankments for slope failure risks using satellite data and AI.[^6] Its competitor, **Kokusai Kogyo Co., Ltd.**, has been jointly developing with other research institutions a multimodal AI system that analyzes sediment disasters from drone imagery at an expert level.[^7]

![Sediment Disaster Analysis System by Kokusai Kogyo](/images/articles/eita-h/eh_geoai_image02.webp)
*Multimodal AI system for sediment disaster analysis at expert level (Source: Kokusai Kogyo Co., Ltd.)*

![Terrain Change Detection via Satellite Data by PASCO](/images/articles/eita-h/eh_geoai_image03.webp)
*"Mieteru Morido" — embankment monitoring service using satellite data and AI (Source: PASCO Corporation)*

Also notable is **"open-hinata3"**, introduced in a previous article, which enables users to automatically analyze conditions in a specific area based on over 700 layers in a web map application and to query an AI agent.[^8] Similarly, several location intelligence companies, including **LocationAI**, have launched services that integrate AI chat functionality into their proprietary data analysis platforms.[^9] Additionally, **Geolonia** is developing an urban OS for government use as GIS × AI infrastructure.[^10] In another unique initiative, **GeoTechnologies, Inc.** has made road sign data and other open data freely available for AI-focused research and development.[^11]

## AI Applications in Government GIS Services
Likewise, AI for GIS services offered by national and local governments are also growing, with much of the focus on building the foundational infrastructure for GIS × AI. A notable development is that in 2026, **MLIT** released the **"Geospatial MCP Server - MLIT Geospatial MCP Server -"** (alpha version). This enables access to 25 datasets from the **Real Estate Information Library**—a data service for real estate transactions—through AI.[^12]

Additionally, the **Japan Aerospace Exploration Agency (JAXA)** provides an MCP server for acquiring and analyzing satellite data through AI.[^13] Furthermore, proof-of-concept experiments are underway for AI-assisted automated extraction and updating of geographic features in the 3D City Model data updates under **Project PLATEAU**.[^14]

![JAXA Service](/images/articles/eita-h/eh_geoai_image04.webp)
*JAXA's MCP server enabling satellite data acquisition and analysis through AI (Source: JAXA)*

## Discussions at the Government's GeoAI Study Group
The **"GeoAI Study Group"** under **MLIT** and the **Cabinet Secretariat** is a government deliberation committee launched in 2026.[^3] As of the time of writing, four meetings have been held. The following key points are drawn from the interim report:[^5]

- The long-term goal is the social implementation of GIS for AI, where AI understands spatial relationships and makes predictions and proposals.
- AI-ready data preparation is the bottleneck and the next key issue to address.
- Building a distribution infrastructure for training data, aimed at developing universally applicable nationwide models, is the central challenge.
- As a foundational area where Japan can leverage its strengths, the development of "spatial ontology" to connect GIS with generative AI has been highlighted.

This report is drawing attention as a guiding framework for Japan's future strategy around geospatial information × AI. The integration of geospatial information and AI is also listed as one of the core principles in the **"Fifth Basic Plan for the Advancement of Utilizing Geospatial Information (Draft Outline)"** released in June 2026.[^15]

![Fifth Basic Plan for the Advancement of Utilizing Geospatial Information (Draft Outline, English translation)](/images/articles/eita-h/eh_geoai_image05.webp)
*Fifth Basic Plan for the Advancement of Utilizing Geospatial Information, Draft Outline — English translation (Source: Cabinet Secretariat, June 2026)*

# Challenges for GIS × AI in Japan
Geospatial information generally encompasses raster and vector map data, 3D data, satellite imagery, aerial photography, coordinate values, coordinate reference systems, topology, spatial relationships, and time-series data. A major reason why achieving GIS × AI is difficult is that AI must integrate and interpret all of this complex information.

As of 2026, discussions are still ongoing about whether dedicated models specialized in geospatial information will be needed to address this challenge, and what kinds of spatial data and ontology development will be required.[^5]

Furthermore, governance and operational rules for GIS for AI leave considerable room for discussion. For example, there are ongoing debates about whether AI can be trusted to make life-or-death decisions when applied to disaster prevention GIS.[^5] The GeoAI Study Group's interim report released in May 2026 also pointed out that the preparation of AI-ready geospatial data remains a bottleneck.[^5] At the same time, because developing GIS ontology is also an area of strength for Japan, this bottleneck could represent a major opportunity for both the government and private companies.

# Conclusion
This article has provided an overview of the current state of GIS × AI in Japan from both practical and policy perspectives. Many of these developments are still in an exploratory phase, and continued close attention will be necessary. Should new initiatives or policy changes emerge, this article will be updated accordingly.

# References
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
