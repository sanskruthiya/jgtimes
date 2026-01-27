---
title: "Use Case — Hinata GIS and open-hinata3: A Japan's Ultra-General-Purpose Open-Source GIS in Practice"
description: "Use Case — Hinata GIS and open-hinata3: A Japan's Ultra-General-Purpose Open-Source GIS in Practice"
date: 2026-01-27
category: [usecase, opensource]
author: "Eita.H"
---

# Overview
**Hinata GIS** is an open-source web GIS developed by a Japanese prefectural government employee as a personal project.[^1]

It is known as a **general-purpose map application** that includes over **600 types of layers** from diverse open data and statistical information published in Japan, allowing users to freely overlay and visualize/analyze them.[^2]

![Screenshot of OH3 as of January 26, 2026](/images/articles/eita-h/eh_OH3_image02.webp)
*open-hinata3, accessed January 26, 2026* [^3]

Notably, despite being a solo development project, **the original version "Hinata GIS" has been officially adopted as a web service by Miyazaki Prefecture**, where the developer worked.[^4]

Subsequently, the successor project **open-hinata3 (hereinafter OH3)** continues to be developed by the same developer.

In recent years, it has gained attention from both technical innovation and open data utilization perspectives, with developments including **vector tile support and AI agent functionality implementation**.

## Related Links
- Latest version ➡️ [**open-hinata3 (OH3)**](https://kenzkenz.jp/oh3/)
- First Edition ➡️ [**Hinata GIS**](https://hgis.pref.miyazaki.lg.jp/hinata/)
>Available only in Japanese. As of 2026, open-hinata3 is recommended for general users.

# Background
"**Hinata GIS**" is a web GIS that **Kenji Ochiai (@kenzkenz)**,[^5] who was a local government employee in Japan at the time, began developing based on personal interest.[^6] [^9]

Development began around 2015. The developer, who belonged to the information policy department of Miyazaki Prefecture located in the Kyushu region of southern Japan, built it through self-study with the concept of **"making data familiar to everyone"**.[^6] [^1]
The name **"Hinata" means "sunny place"** in Japanese and is a term used in Miyazaki Prefecture's slogan.[^4]

In Japan during the 2010s, the publication and utilization of open data by national and local governments was rapidly advancing,[^7] and Hinata GIS is positioned as one of the representative practical examples born from such trends.

Subsequently, in March 2017, it won the **grand prize at the "RESAS App Contest"** hosted by Japan's Cabinet Office, becoming widely recognized among Japanese GIS users and local governments.[^1] 

The first version **"Hinata GIS" was then adopted as Miyazaki Prefecture's official web map**.

![Screenshot of Hinata GIS as of January 26, 2026](/images/articles/eita-h/eh_HinataGIS_Image01.webp)
*Hinata GIS on Miyazaki Prefecture Official Website, accessed January 26, 2026* [^4]

After the official adoption, the developer created a modernized version using technologies such as vector tiles.

Furthermore, around 2024, he began implementation of a new version by switching the web framework from OpenLayers to MapLibre GL JS.
In this process, the version rebuilt based on MapLibre GL JS was positioned as **the third major version** and named **open-hinata3 (OH3)** by the developer himself.

As of 2026, OH3 is not only increasing the number of layers but also advancing challenging functional expansions such as **AI analysis** capabilities.[^2]

Additionally, the project has evolved into a broader community, with users contributing detailed reports and usage guides.[^8]

# Features
Since the 2010s, various open GIS tools and services have emerged in Japan against the backdrop of expanding **municipal open data** and **active OSS communities**.[^7]

Among them, Hinata GIS stands out as a representative example, having **won competitions**, been **officially adopted by local governments**, and maintained **over 10 years of continuous development** including subsequent successor service development.

## Development Concept
Hinata GIS was developed with the concept of "**making data familiar to everyone**."[^1]

The developer also states that he aims to create a service that allows many people to use GIS for **various purposes like Microsoft Excel**.[^6] 

In fact, it is actively used not only by GIS enthusiasts but also by **local government employees, school teachers, and private surveyors** in Japan.[^8]

Furthermore, in the successor OH3, the concept of "**ultra-general-purpose**" is emphasized as written below:[^10]
> OH3 brings together maps, layers, analysis, and output on one workbench. It doesn't decide the purpose. It is not for specific industries. It's a tool for "people who want to think while looking at maps".

Additionally, the **AI agent functionality** installed in OH3 in 2025 is introduced as "**Time-traveling OH3 × AI: A new dialogue between you and maps**". [^10] 

This shows a functional concept of interactively analyzing **geographic information with AI using OH3's diverse datasets from past to present**, proposing a new way of **GIS in the AI era**.

![Capture including AI functionality](/images/articles/eita-h/eh_OH3_image04.webp)
*AI agent functionality in OH3, accessed January 26, 2026*

## OH3's Strengths
As the developer himself calls it "**ultra-general-purpose**", the greatest strength of OH3 is its **over 600 types of layers** without limiting its purpose.[^10]

What further enhanced this strength is the aforementioned **AI agent functionality**. This enables OH3 to demonstrate **synergistic effects** by integrating and analyzing massive layer information from past to present for any domestic location specified by users through AI in a cross-sectional manner. 

In other words, OH3 has evolved from a simple layer viewing tool to a system for integrating and interpreting data chronologically and across disciplines based on specific locations.

Next, **simple and smooth operability** is also a strength of this service. OH3's UI has a design similar to web GIS maintained by Japan's national and local governments, such as GSI Maps[^11].

Therefore, local government employees and school teachers who are not familiar with professional GIS software can start using it **without additional learning costs**.

Also, since OH3 is a solo development project, the developer @kenzkenz **frequently communicates usage methods and new features through social media**.[^5]

This **high number of touchpoints with the developer** is also attractive. As a result, some users have become evangelists, for example, the **most detailed user manual for OH3** was created not by the developer himself but by **a surveyor's office that is a user**.[^8]

![OH3 User Manual by Surveyor's Office](/images/articles/eita-h/eh_OH3_image03.webp)
*open-hinata3 user manual by surveyor's office, accessed January 26, 2026* [^8]

## Functions

As of January 2026, the richness of OH3's functionality can be seen numerically in the table below. [^2]

| Item | Value |
|------|-------|
| Total Data Layers | 625+ types |
| AI Analysis Functions | 10 types |
| Toolbox Functions | 16 types |
| Statistical Charts | 47 types |
| Supported File Formats | 10+ types |
| Extension Layers | 47 types |

## Distinctive Features
In OH3, various functions are integrated in addition to basic web map operation functions. 
Below are some of them (as of January 2026):

- Multi-screen display (up to 4-screen split) for comparative analysis
- 625+ rich base maps and layers
- Drawing/editing tools (pen, line, polygon, etc. Automatic area calculation of drawn shapes, sharing with others possible)
- Real-time data integration (weather forecast, traffic information, etc.)
- AI analysis report creation function (automatic reporting of 10 types including disaster prevention and childcare environment for each location)
- AI agent
- Sharing AI conversation content with other users
- AI image enhancement
- Map sharing
- Group chat
- Printing
- Population profiling
- Photo memo
- OCR reading
- Then-and-now time slider
- Favorite layer registration
- Various file outputs

## Popular Layers
OH3's toolbox allows viewing "Top 100 Popular Layers".
The top 12 popular layers confirmed as of January 2026 were as follows:

- 2025 Land Registry Map
- Latest Photos (aerial photographs)
- National Lot Number Map
- 2025 Land Registry Map - Control Points
- Block Control Points
- 2025 Land Registry Map - Map Frame
- Basic Control Points
- 1974-78 Aerial Photos (nationwide)
- GSI Vector
- 2020 Census Population Pyramid
- 2020 Town Boundaries
- Late Edo Period (1800s) Villages

## Main Applications
OH3 is an "**ultra-general-purpose**" GIS as per the above concept, and its applications are not limited to specific uses.

Among those exemplified on the official website, the following are listed: **disaster prevention, real estate, surveys, town planning, education, research, and hobbies**.[^10]

- People who want to casually look at maps: Comparing topography, city structure, old maps, aerial photographs
- People who use maps for work: Daily operations in local government, real estate, construction, infrastructure, surveys
- People who want to learn/teach: Teaching materials for classes, workshops, training
- Professionals: Specialized work in surveying, investigation, real estate, various consulting

Also, looking at the above "**Popular Layers**", it can be seen that layers related to **surveying, population, and old aerial photographs** have particularly high usage frequency from users.

Therefore, it is inferred that usage cases are particularly common in **surveying investigations, urban planning practice, geography/disaster prevention education, and casual map browsing**.

# Future Prospects and Challenges
As such data and functions accumulate, OH3 is becoming increasingly attractive. OH3 functions as an **aggregation site for open data**, an **experimental ground for GIS**, and a **platform that promotes interaction between data and users**.

Particularly, the **combination of AI and ultra-general-purpose GIS** is innovative, and by having various users freely use this beyond traditional GIS applications, we can expect to discover **unexpected possibilities of GIS**.

On the other hand, the developer has frankly mentioned challenges unique to solo development in his communications.
Specifically, these include loneliness and difficulty maintaining motivation from continuing development alone over a long period, the volume of inquiry responses, and cost issues such as server operation expenses.[^6]

Like many open-source projects, **incentives and sustainability will be difficult challenges**.

# Lessons Learned - A Watershed for Open-Source GIS
Hinata GIS and OH3 can be said to be one of the representative examples of open data utilization in Japan, given that this individually developed system was officially adopted by a local government and has continued development for over 10 years.

The driving force behind this was the **developer's passion** to pursue solo development. The highly flexible solo development mindset has enabled **innovative ideas** such as applying AI to "ultra-general-purpose" GIS and **quick prototyping**, but at the same time, its **sustainability constantly remains a challenge**.

Overall, the journey of Hinata GIS and OH3 shows that Japan's open data trends are transitioning from the stage of "**publishing data**" to the stage of "**reconsidering who uses, nurtures, and supports the data ecosystem and how**."

Who utilizes solo development enthusiasm and how, and in what roles do they support it? How should national and local governments, companies, and communities each be involved?
As of 2026, open-source GIS may be standing at a watershed where such questions are being posed.

# References
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
