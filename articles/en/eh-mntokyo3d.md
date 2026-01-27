---
title: "Use Case - Mini Tokyo 3D: A Digital Twin of Tokyo's Public Transportation"
description: "A use case of geospatial data - Introduction to Mini Tokyo 3D: A Digital Twin of Tokyo's Public Transportation"
date: 2025-11-06
category: [usecase, opensource]
author: "Eita.H"
thumbnail: NA
---

# Overview
Since the 2010s, various geospatial data have been made available as open data in Japan, primarily by national and local governments.
This article introduces **"Mini Tokyo 3D"** as a use case of map applications that leverage this open data.

**Mini Tokyo 3D** is a digital twin application that visualizes the real-time operational status of public transportation in Tokyo and surrounding areas.[^1]
It displays the movements of Tokyo's trains and buses as an intuitive 3D map.

As of 2025, it supports **four languages**. We encourage you to experience this **digital twin of Tokyo's public transportation** through the following site.

- Live site: [Mini Tokyo 3D](https://minitokyo3d.com/)
- User guide: [Overview of Mini Tokyo 3D](https://minitokyo3d.com/docs/master/user-guide/overview.html)

![MiniTokyo3D image as of 2025/11/04](/images/articles/eita-h/eh_MiniTokyo3D.webp)
MiniTokyo3D image, accessed November 4, 2025[^1]

# Development Background
Mini Tokyo 3D was developed by software engineer **Akihiko Kusanagi**.[^2]
The development was triggered in 2019 by the **"Tokyo Public Transportation Open Data Competition"**, a public competition hosted by the Public Transportation Open Data Center.[^2] [^7]

One of the purposes of this contest was to **"enable foreign visitors to navigate Tokyo's public transportation during the Tokyo Olympics"**.[^3]
However, the developer stated, "I personally wanted to create an interesting digital twin, and I was looking for good data for that purpose when I came across this competition".[^3]

Therefore, this development can be characterized as a project that began when the **developer's personal interests aligned with available data**, rather than being driven by business or social needs.

As a result, the app won the grand prize in this competition and subsequently gained widespread attention through events such as COVID-19 lockdowns and the Tokyo Olympics.[^4]

# Application Features
As is widely known, Japan's public transportation network is designed with world-class precision.
In Tokyo, more than **40 railway operators run over 140 lines**. During peak hours, trains run **every 1 minute and 50 seconds**, with a total of **40 million passengers per day**.[^2]
Mini Tokyo 3D recreates this complex transportation network with smooth operability. It is truly an application that can be called a **"digital twin of Tokyo"**.

The main features are as follows:

🚊 **Real-time Transportation Visualization**
- Real-time 3D visualization of the positions and delay information of trains, buses, and aircraft in Tokyo and surrounding areas.
- Implementation of proprietary logic to correct lag between distributed data and actual train movements, enhancing real-time performance. [^3]
- Smooth animation rendering of simultaneous operation of over 2,200 trains[^3] during rush hours.

🎨 **Visual Design & Interface**
- Ensuring visibility with simple 3D objects color-coded by route.
- Subway networks are displayed through layer switching to avoid visual competition with surface transportation networks.
- Dynamic coloring reflecting day/night, weather, and events (such as fireworks).
- Realistic urban landscape with 3D building shapes.

🌐 **Integration & Accessibility**
- Integration with live camera footage (YouTube) to verify correspondence with the real world.
- Support for 4 languages (Japanese, English, Chinese, Korean). Additionally, the user interface supports Thai, Nepali, Portuguese, French, Spanish, and German.[^1]

By combining these elements, Mini Tokyo 3D has become **a highly sophisticated digital twin application** that allows users to experience a real-time moving city.

# Technical Features
Mini Tokyo 3D is built on **Mapbox GL JS, combined with Three.js and deckgl**.[^2]
(During the early development phase, prototypes were created using D3.js and LeafletJS.)[^3]

Real-time data is obtained by combining APIs provided by **the Public Transportation Open Data Center (ODPT API)**[^5] and various data in **GTFS (General Transit Feed Specification)**[^6] format.

Additionally, proprietary logic has been implemented to correct data update delays and trajectory deviations, maximizing real-time performance.[^3]

There are also innovations in visual representation, where **moving objects are simplified as color-coded box shapes** to reduce rendering load while supporting intuitive understanding.

For the background map, OpenStreetMap was initially used, but has now been replaced with **Zenrin (Japan's most famous map provider company) through integration with MapBox**.[^2]

In this way, Mini Tokyo 3D achieves a **balance between design and technical optimization**, making it an excellent reference model for map applications and digital twin development in Japan.

# Use Cases
Mini Tokyo 3D can be expected to have versatile applications as a tool for visualizing real-time public transportation operations.
While practical uses such as route planning and delay status checking are possible, dedicated route planning apps are widely used in Japan. Therefore, this application's use for route planning purposes is likely limited.

Rather, this app has high value as **a showcase for observing Tokyo's public transportation movements**.
Due to its high level of completion as a digital twin, users can gain **a bird's-eye view understanding of urban movements**.

This can be described as an **urban understanding promotion tool** that visualizes how Tokyo as a city is precisely supported by high-density transportation infrastructure.

# Key Learnings from This Case
The development of Mini Tokyo 3D can be said to be one of **the successful examples of Japan's open data policy bearing fruit**.

This app was born from a public competition to promote the utilization of open data and grew into a globally recognized achievement by a solo developer.
This is a symbolic case showing that **publishing data can elicit creative individual participation**.

The following four points are particularly noteworthy:

1. **🤝 Compatibility between open data and a solo development project**  
   This achievement demonstrates that individuals can freely reconstruct data provided by governments and local authorities to create social value.

2. **💡 Interest-driven development process**  
   While social or business needs are important, they may not be essential for developing such applications. To promote open data use and generate social impact, matching individual interests with available data can be equally important.

3. **🎯 Fusion of design and technology**  
   This application is supported by excellent design concepts and the technology to realize them. This enables the realization of a digital twin to promote understanding of cities.

4. **📚 Technical implementation model**  
   The code for this application is published as open source, serving as a model for similar data utilization.

Like this case, there are many projects in Japan where individuals use open data to rediscover and share cities.

Open data is becoming not just a means of information disclosure by government, but **a catalyst for citizens to deeply understand the cities they live in**.

# About GTFS Box
Finally, as an extended version of this application, we introduce an application called **GTFS Box**.
This is a project that visualizes public transportation networks such as buses in several cities around the world.

We will continue to monitor future developments.

Live site: [GTFS Box](https://nagix.github.io/gtfs-box/)

# References
[^1]: https://minitokyo3d.com/docs/master/user-guide/overview.html
[^2]: https://blog.mapbox.com/mini-tokyo-3d-a-real-time-3d-map-of-public-transportation-in-tokyo-1f19fb207632
[^3]: https://internet.watch.impress.co.jp/docs/column/chizu2/1226660.html
[^4]: https://internet.watch.impress.co.jp/docs/column/chizu3/2054836.html
[^5]: https://developer.odpt.org/
[^6]: https://www.gtfs.jp/
[^7]: https://www.odpt.org/overview/
