---
title: "GSI Maps: Japan's Official Web Mapping Service"
description: "GSI Maps: Japan's Official Web Mapping Service"
date: 2025-10-19
category: [service, government]
author: "Eita.H"
thumbnail: NA
---

# Overview
**GSI Maps** is the official web mapping application developed and operated by **the Geospatial Information Authority of Japan (GSI)**. 

It provides comprehensive information about Japan's national territory captured by GSI, including topographic maps, aerial photographs, elevation maps, geomorphological classifications, and disaster information. The platform also features capabilities for creating topographic cross-sections, comparing historical and current photographs, and 3D visualization.[^1] [^2]

![GSI maps image as of 2025/10/19](/images/articles/eita-h/eh_GSImaps.webp)
GSI maps, accessed October 19, 2025 [^2]

# Development History
Around 2000, the Geospatial Information Authority of Japan envisioned **"a society where geospatial information can be accessed anytime and anywhere via the Internet, enabling everyone to share information with each other."**[^3] 

To realize this vision, **"the Digital National Land Web Mapping System"** (or Digital National Land Portal) was developed in 2003. The system at that time was provided as a map viewing tool for Internet Explorer (IE), designed to integrate and display information held by GSI.[^4] 

Subsequently, as Google Maps and other private web mapping systems rapidly became widespread in the late 2000s, GSI took on the role of complementing gaps that private enterprise systems could not cover. 

Specifically, with the concept of **providing services better tailored to local governments and national agencies**, GSI experimentally launched the successor system **"Digital National Land Web.NEXT"** in 2012. The specifications of this successor system were also influenced by the Great East Japan Earthquake of 2011. For example, following the earthquake, there was increased demand for elevation information due to concerns about tsunamis and flooding, leading to enhanced display functions for topographic and elevation information.[^3]

Against this background, in October 2013, **"Digital National Land Web.NEXT"** was renamed **"GSI Maps"** and officially launched.[^5]

In 2022, GSI began experimental provision of **"GSI-optimized vector tiles"** on GitHub.[^13] Future directions include implementing vector tile display and distribution, along with promoting stable operation, distributed deployment, function modularization, and utilization of high-precision elevation data.[^6]

From a technical perspective as a web map, the system was improved in 2010 to be based on OpenLayers.[^7]
Subsequently, in improvements implemented in fiscal year 2014, the configuration was changed to be based on LeafletJS to achieve a more lightweight system.[^8]

# Features of GSI Maps
A major characteristic of GSI Maps is that it is a web map displaying the **"official representation of Japan"** provided by Japan as a nation.
However, it **DOES NOT include commercial information such as stores**. This can be seen as a result of role differentiation with private web maps, as clarified in the development history mentioned above.

GSI Maps primarily distributes the following information:[^7]
- Aerial photographs
- Basic maps including building shapes and roads
- Thematic maps such as color-coded maps based on natural environment and conditions
- Disaster information
- Elevation data

The main functions of the web map include map display, location search, dual-screen comparison, drawing, measurement, and 3D display.
Furthermore, in addition to the GSI Maps website as a web mapping system, GSI also provides **the "GSI Tiles" service** for distributing tile data.

The user interface of GSI Maps might seem too traditional for those who prefer modern web maps. This user interface can also be seen as a result of development targeting local governments.

# Usage and Applications of GSI Maps
Access to GSI Maps has been steadily increasing in recent years, with **over 8 billion tiles** distributed per month in 2021.[^6]

The most prominent specific use case for GSI Maps is its utilization as **disaster-related information maps** by local governments.[^9]

Additionally, there are many cases where GSI Maps is simply used as background maps for various municipal map applications. National territory maps contain many sensitive elements such as territorial claims and official names. From this perspective, maps provided by the government can be used safely as background maps, which is a significant advantage for local governments.

GSI Maps also receives substantial access from non-governmental users. Due to features such as high-precision elevation maps and the ability to compare aerial photographs from different eras, there is a certain number of enthusiasts within Japan.
For example, **"the GSI Maps Fan Club"**, a volunteer community, has over 4,000 social media followers as of 2025.[^10] [^11]
Therefore, GSI Maps can be said to be a service widely appreciated not only for business purposes by municipal staff but also for hobby purposes by general citizens.
Furthermore, there is the **"GSI Maps Partner Network"** as an official venue for information sharing and opinion exchange regarding GSI Maps.[^12]
The existence of these communities provides a solid foundation for promoting the utilization of GSI Maps and GSI Tiles.

# Future Challenges
As mentioned above, GSI Maps is promoting vector tile implementation, stable operation, distributed deployment, function modularization, and utilization of high-precision elevation data.[^6]
Technically, as of 2025, the system is based on LeafletJS, but considering future vector tile implementation and major version upgrades of LeafletJS, new improvements may be implemented in the near future.
Under these circumstances, the traditional UI designed for local governments may also require more user-friendly updates in future releases.
As private mapping services undergo rapid evolution, upgrading existing systems presents a challenging task. Careful adjustments will be required based on interviews with various types of users including local governments, private sector, and individuals.

# References
[^1]: https://maps.gsi.go.jp/help/intro/index.html
[^2]: https://maps.gsi.go.jp/
[^3]: https://internet.watch.impress.co.jp/docs/column/chizu/581167.html
[^4]: https://www.gsi.go.jp/common/000024540.pdf
[^5]: https://www.gsi.go.jp/common/000091037.pdf
[^6]: https://maps.gsi.go.jp/pn/meeting_partners/data/20221206/02_%E5%9C%B0%E7%90%86%E9%99%A2%E5%9C%B0%E5%9B%B3%E3%81%AE%E4%BB%8A%E5%BE%8C%E3%81%AE%E5%B1%95%E9%96%8B.pdf
[^7]: https://www.ajg.or.jp/disaster/files/202103_TeqSymposium_S106.pdf
[^8]: https://www.gsi.go.jp/common/000104529.pdf
[^9]: https://renkei2.gsi.go.jp/renkei/130104kyotei/riyourei_low.pdf
[^10]: https://hackmd.io/@ccfc/SkZjLTyX_
[^11]: https://x.com/CChizu_FC
[^12]: https://maps.gsi.go.jp/pn/
[^13]: https://github.com/gsi-cyberjapan/optimal_bvmap