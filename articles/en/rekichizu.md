---
title: "Rekichizu: A Modern Take on Japan's Historical Maps"
description: 'Rekichizu is a website where you can view historical maps with modern map design. Currently, maps from the late Edo period (around 1800-1840) are published and updated regularly.'
date: 2025-11-13
category: [project]
author: 'Sorami Shiromizu'
thumbnail: '/images/articles/sorami-shiromizu/rekichizu/thumbnail.png'
---

[![Rekichizu Thumbnail](/images/articles/sorami-shiromizu/rekichizu/thumbnail.png)](https://rekichizu.jp/en)

[Rekichizu](https://rekichizu.jp/en) is a website where you can view **historical maps with modern map design**.

Currently, maps from the **late Edo period (around 1800-1840)** are published and updated regularly.

The project launched in August 2023. In November 2025, the **English and Hiragana** versions of the website were released, making these historical maps accessible to a wider audience.

The underlying data (map tiles and styles) is provided as **open data** under the [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en) license.

See the [website](https://rekichizu.jp/en) for more information.

_(Note: [The author](https://sorami.dev/) is a contributor to the Rekichizu project.)_

## What You Can Do

![Rekichizu - Example map view](/images/articles/sorami-shiromizu/rekichizu/feature-1.webp)

Rekichizu is built upon its own original large-scale, hand-crafted digital data meticulously derived from old maps. This data is presented with an original modern design map style, offering an interactive map service similar to the platforms you use daily.

Users can search for locations in Japanese, Hiragana, or English. By clicking the magnifying glass icon in the upper-left, you can use the built-in simple geocoding service to search for place names.

![Rekichizu - Example of 3D terrain](/images/articles/sorami-shiromizu/rekichizu/feature-2.webp)

You can view the terrain in 3D. Press the mountain button in the lower-right corner to render the map in three dimensions.

![Rekichizu - Example of comparison mode (split)](/images/articles/sorami-shiromizu/rekichizu/feature-3.webp)

![Rekichizu - Example of comparison mode (scope)](/images/articles/sorami-shiromizu/rekichizu/feature-4.webp)

You can compare the historical maps directly with modern maps and aerial photographs. Several comparison methods are available, including side-by-side (parallel/split) views, scope, and overlay. This capability is a powerful and fun tool for understanding how a location has changed over time.

![Rekichizu - Example of GPS](/images/articles/sorami-shiromizu/rekichizu/feature-5.webp)

Rekichizu is an ideal companion for exploring historical areas. By enabling the GPS feature, you can see at a glance what your current location was like during the Edo period, turning a simple walk into an engaging, time-traveling experience.

## The History of Rekichizu

Rekichizu originated as a personal passion project of graphic designer [Hajime Kato](https://chizutodesign.com/), widely known online as [@chizutodesign](https://x.com/chizutodesign). Kato is recognized for his creative and original approach to maps and data visualizations. He later published a book, [『地図とか路線図とか@chizutodesign』](https://books.ikaros.jp/book/b10080873.html) (_"Maps and Route Maps," in Japanese_) by IKAROS Publications LTD., in 2023.

### The Beginning: A Viral Edo-Style Map

Deeply interested in history and maps, Kato recognized that while old maps are fascinating, their complexity makes them difficult for contemporary users to read and interpret. 

In 2019, this challenge inspired him to create and release a static image of a Google Maps style Edo-period map on Twitter. It quickly gained significant traction, becoming a viral buzz with around 40,000 likes at the time. Crucially, this initial version was a static single image created solely using Adobe Illustrator.

![Google Maps style historical map](https://cdn.myportfolio.com/ac25a482-e8dc-40bb-82f3-d586ec7c6f47/3e1b3a11-2b01-4a3c-b8f7-cbafee9c2512_rw_1920.jpg?h=e149025d6d253def164a0c99fb7aa726)

_Figure: [地図とかデザインとか / chizutodesign - 江戸時代のGoogleマップ風地図 / Google Maps style historical map](https://chizutodesign.com/gmaps-edo)_

### Towards Web Map and Public Launch

To transform this static image into the interactive web service seen today, Kato began a labor-intensive process of creating the digital data. He corrected and adjusted those data by referencing the Geospatial Information Authority Map ([地理院地図](https://maps.gsi.go.jp/)). Then actual drawing and data creation was performed using [QGIS](https://qgis.org/), a free and open-source geospatial information system (GIS) software.

In August 2023, Kato released the initial public version of Rekichizu. The response was immediate and overwhelming, reaching 100,000 page views the very next day and gaining features in online media, national newspapers, and TV programs.

### Expansion with MIERUNE Inc.

Despite the initial success, Kato, primarily a designer, faced challenges with the software engineering skills and resources needed to scale the service.

Following internal discussions, [MIERUNE Inc.](https://www.mierune.co.jp/), the geospatial professional firm where Kato is working, officially took over the project in May 2024. 

MIERUNE was a natural fit, as the company has unique characteristics: it was born out of the FOSS4G (Free and Open Source Software for Geospatial) community and actively contributes to it [^1]. This foundation gives the firm familiarity with OSS (Open Source Software) and projects that aren't strictly for profit. Kato himself had joined MIERUNE in 2022 after being invited to present at one of the FOSS4G conferences.

Since then, Kato and the MIERUNE team have collectively expanded Rekichizu's capabilities, implementing key features such as generating the vector tiles for the map, implementing the geocoding, the comparison feature, internationalization (i18n), and much more. In November 2025, the English and Hiragana versions of the website were released, making these historical maps accessible to a wider international audience.

### Public Recognition

Kato's dedication to the Rekichizu project quickly earned him significant industry honors. His achievements include receiving the [Enami Naomi Award (Newcomer Award) at Digital Content of the Year '23 / 29th AMD Award](https://amd.or.jp/pressrelease/2024/2024_0215_info.html) and the  ["Encouragement Award" at the 2024 Digital Archive Industry Awards](https://dapcon.jp/news/award_2024/).

## Collaborations

Since its release, Rekichizu has actively collaborated with outside institutions.

![Collaborations with ROIS-DS Center for Open Data in the Humanities - Edo Major Roads Dataset and "Edo Kiriezu" Townhouse Area Dataset](/images/articles/sorami-shiromizu/rekichizu/collaboration-1.webp)

In 2025, in collaboration with the [ROIS-DS Center for Open Data in the Humanities](https://codh.rois.ac.jp/index.html.en), Rekichizu has created data for approximately 7,700 km of major roads from the Edo period. The dataset is available for download in GIS format. For details, please see [this page](https://codh.rois.ac.jp/historical-gis/edo-road/).

In 2024, in collaboration with the ROIS-DS Center for Open Data in the Humanities, Rekichizu extracted townhouse areas from all 29 sheets of 'Edo Kiriezu'. The data is published on Rekichizu (areas painted in light brown on the map). The dataset is available for download in GIS format. For details, please see [this page](https://codh.rois.ac.jp/edo-maps/rekichizu/).

For those interested in the technical and academic details of this collaboration, a joint talk was delivered at [FOSS4G 2024 Japan](https://www.osgeo.jp/events/2024-2/foss4g-2024-japan/coreday): [『江戸ビッグデータのオープン化：「れきちず」を活用した歴史的地理情報基盤に向けて』](https://agora.ex.nii.ac.jp/~kitamoto/research/publications/foss4g24-ppt.pdf) _'Making Edo Big Data Open: Towards a Historical Geographic Information Platform Using "Rekichizu"' (in Japanese)_, by [Asanobu Kitamoto](https://agora.ex.nii.ac.jp/~kitamoto/index.html.en) (National Institute of Informatics) and Hajime Kato

!["Sapporo Tanjo" the novel, in a bookstore](/images/articles/sorami-shiromizu/rekichizu/collaboration-2.webp)

!["Sapporo Tanjo" special site - the map](/images/articles/sorami-shiromizu/rekichizu/collaboration-3.webp)

In collaboration with a novel by Yoshinobu Kadoi, ["Sapporo Tanjo (The Birth of Sapporo)"](https://www.kawade.co.jp/np/isbn/9784309039480/) (published by [Kawade Shobo Shinsha](https://www.kawade.co.jp/np/index.html)), Rekichizu created maps of Sapporo from the late Edo period to the Showa era and a special website. For details, please see [this page](https://sapporo-tanjo.rekichizu.jp/).

## The Making of Rekichizu

### The Data

All data creation is conducted using QGIS, a free and open-source Geospatial Information System (GIS) software [^2].

The core process involves digitally tracing and drawing historical information—such as roads, coastlines, and points of interest (POI)—by referencing old maps and other historical documents on top of the modern Geospatial Information Authority Map (地理院地図).

![Visited libraries around Japan, and large amount of documents](/images/articles/sorami-shiromizu/rekichizu/making-1.webp)

Since many of the necessary reference materials are not available in digital libraries, Kato has visited numerous libraries around Japan to collect physical documents.

As of today, the project utilizes more than 400 reference materials. You may see [the complete list on the website](https://rekichizu.jp/en#references). Based on these documents, the total length of roads created is more than 40,000 km, and the POI count exceeds 6,100.

Currently, Kato remains solely responsible for the ongoing data creation. Releasing the initial country-wide data took two years, and the project is still a work in progress.

### The Design

![The example of Rekichizu map design](/images/articles/sorami-shiromizu/rekichizu/making-2.webp)

Rekichizu features a distinctive, original map design that aims to visually convey the historical atmosphere while maintaining modern readability. The design uses specific color and texture choices to evoke the period, notably by coloring the roads to suggest mossy stone pavements. Furthermore, the design helps to clearly distinguish between various historical land uses, such as commercial districts, temple and shrine grounds, samurai residences, and green spaces.

![The original icons of Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-3.webp)

All icons representing points of interest are original creations, reflecting historical landmarks of the Edo period. These custom icons include designs for Barrier (関所), Post Town (宿場), Castles, Shops, Teahouses (茶屋), and Bridges.

![The original OpenStreetMap design for Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-4.webp)

Finally, to ensure a visually harmonious experience, the design of the integrated modern map, which utilizes [OpenStreetMap](https://openstreetmap.org/) (OSM) data, has been carefully styled to match the aesthetic and color palette of the original Rekichizu historical map.

### The Software

The interactive web service leverages the professional expertise of the MIERUNE team.

The core mapping engine is [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/), a powerful open-source web map library [^3]. The front-end web framework of choice is [Svelte](https://svelte.dev/), which MIERUNE has adopted company-wide as its default stack.

To build interactive maps efficiently within this environment, Rekichizu uses [Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/), an open-source library created by MIERUNE member [Taku Fukada](https://github.com/ciscorn). This library allows for the effortless creation of maps using Svelte's reactive capabilities. The map comparison features were specifically inspired by the [Side by Side example found in Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/examples/side-by-side), which itself was based on the original concept from [react-map-gl](https://visgl.github.io/react-map-gl/examples/maplibre/side-by-side).

For achieving synchronized current location markers in the comparison maps, the team created a custom OSS tool: [maplibre-gl-manual-geolocate](https://github.com/MIERUNE/maplibre-gl-manual-geolocate). This control enables the display of a user position marker at specified coordinates without requiring the browser's geolocation API.

For hosting, Rekichizu relies on [Cloudflare Workers](https://workers.cloudflare.com/) (previously [AWS Amplify](https://aws.amazon.com/amplify/)).

For those interested in the technical implementation details, several comprehensive articles and presentations (in Japanese) are available:

- [現代風歴史マップ「れきちず」フロントエンドのウラとオモテ](https://speakerdeck.com/hjmkth/240824-frontendo-kato-iguchi) _'Front and Back of Modern-style Historical Map "Rekichizu"'_, presented at Frontend Conference Hokkaido 2024 by Hajime Kato and [Kanahiro Iguchi](https://spatialty.io/)
- [MapLibre GL JS を Svelte の世界で快適に使うためのライブラリを作りました](https://qiita.com/ciscorn/items/6f97f681f31cafe513bd) _"I created a library for comfortable use of MapLibre GL JS in the Svelte world"_ by Taku Fukada
- [maplibre-gl-manual-geolocate: 任意の場所を「現在地」にするMapLibre GL JSライブラリ](https://zenn.dev/mierune/articles/a30cf312409119) _maplibre-gl-manual-geolocate: A MapLibre GL JS library to make any place "the current location"_ by Sorami Shiromizu

### The Internationalization

In addition to the original Japanese format, Rekichizu is currently available in two other locales: [Hiragana](https://en.wikipedia.org/wiki/Hiragana) (a phonetic script used in Japanese) and English. This internationalization (i18n) effort was tackled across both the web application and the underlying map data.

The i18n feature for the web application itself is managed using the dedicated library [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).

For the map data, converting and translating the place names into these various locales required advanced techniques. Given the massive size of the data, the team leveraged Natural Language Processing (NLP) techniques, including a rule-based approach and an LLM ([OpenAI API](https://openai.com/api/)). This approach was highly effective for the semi-automated process, significantly reducing the manual correction effort required in the final step.

More details on this technical process are available in the following article (in Japanese): [LLMを用いた地名のひらがな・英語化と、Paraglide JSによるi18n: モダンな歴史地図「れきちず」の事例](https://zenn.dev/mierune/articles/f7c446995e445f) _'English and Hiragana conversion of place names using LLM and i18n with Paraglide JS: The case of the modern historical map "Rekichizu"'_ by Sorami Shiromizu.

Styling the modern map (OSM) style in various locales required leveraging OSM's detailed tagging system:

- For the Hiragana script, properties like [ja-Hira](https://wiki.openstreetmap.org/wiki/Key:name:ja-Hira) ([BCP 47](https://www.rfc-editor.org/info/bcp47) compliant) and the traditionally used [name:ja_kana](https://wiki.openstreetmap.org/wiki/Key:name:ja_kana) are utilized.
- For English and Romanization, properties such as [name:en](https://wiki.openstreetmap.org/wiki/Key:name:en), [ja-Latn](https://wiki.openstreetmap.org/wiki/Key:name:ja-Latn) (BCP 47 compliant), and the traditional [name:ja_rm](https://wiki.openstreetmap.org/wiki/JA:Key:name:ja_rm) are employed.

It's important to note that while not all features in OSM have data listed for every locale, the platform is open. Users are encouraged to contribute missing information to further improve the maps.

As a final technical detail, the team originally used the [LINE Seed font](https://seed.line.me/index_en.html) for the modern OpenStreetMap style. However, because this font lacked the [macron](https://en.wikipedia.org/wiki/Macron_(diacritic)) (the long-vowel symbol, as in `Tōkyō`), and this symbol appears in some OSM English names, the team ultimately switched to a different font ([Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)) for the OSM English style to ensure proper rendering.

## The Future of Rekichizu

The Rekichizu project is sustained by continuous development efforts. The team has various ideas for future expansions for both data and feature aspects.

![Rekichizu future idea - POI information](/images/articles/sorami-shiromizu/rekichizu/future-1.webp)

The first major idea is the thorough development of Points of Interest (POI). This feature will allow users to click a location to access detailed information, which will include displaying associated images, such as historical Ukiyo-e (浮世絵), to vividly illustrate the site's past.

![Rekichizu future idea - Route search](/images/articles/sorami-shiromizu/rekichizu/future-2.webp)

The team is also considering a historical route guidance feature (route search). While modern web maps focus on walking, this feature will integrate era-appropriate transportation methods, such as horseback, palanquin travel (駕籠), or messenger service (飛脚), providing a unique and practical taste of the history experience.

![Rekichizu future idea - Data for different eras](/images/articles/sorami-shiromizu/rekichizu/future-3.webp)

The project's long-term objective is to move beyond the current late Edo period to create a truly multi-layered historical map. The ultimate goal is to gradually include maps spanning a wider chronological range of Japanese history, such as the Heian (平安), Sengoku (戦国, Warring States), Meiji (明治), Taishō (大正), and Shōwa (昭和) periods.

![Rekichizu future idea - More collaboration (image: Old Nakasendo streetscape)](/images/articles/sorami-shiromizu/rekichizu/future-4.webp)

As our previous partnerships have shown, we really value finding new people and organizations to work with. Rekichizu is always looking to collaborate further across different fields like education and tourism to expand its reach and usefulness. If you're interested in joining forces, we'd love to hear from you!

![Rekichizu future idea - Data intergration concept](/images/articles/sorami-shiromizu/rekichizu/future-5.webp)

We realize that a lot of awesome historical data is often sitting isolated, created individually or by different groups. To unlock all that collective value, Rekichizu's big idea is to evolve into a platform for data integration and collaborative creation. We want to build a system that makes it easy to bring together existing data from individuals or organizations, empowering the entire community to collectively create and connect new historical geospatial information.

## Try It Out!

We hope you will take the time to try Rekichizu yourself and enjoy comparing the past and present landscapes of Japan. [Click here to start](https://rekichizu.jp/en)! We are constantly seeking ways to improve, so please feel free to [reach out with any feedback or suggestions you may have](https://rekichizu.jp/en#contact)!

## References

- [「れきちず」のこれまでとこれから - 誰にでもわかりやすい歴史地図を目指して](https://speakerdeck.com/hjmkth/251012-foss4g-japan-rekichizu) _"Rekichizu: Past and Future — Making Historical Maps Easy for Everyone to Explore" (in Japanese)_, presented at [FOSS4G 2025 Japan](https://osgeo-jp.github.io/foss4g-2025-japan/) by Hajime Kato and Sorami Shiromizu
- [Modern-style Historical Map Design with QGIS](https://speakerdeck.com/hjmkth/231129-foss4g-asia-2023-kato),  _(in English)_, presented at [FOSS4G ASIA 2023](https://foss4g.asia/2023/) by Hajime Kato

[^1]: MIERUNE was founded by the three organizers of [FOSS4G Hokkaido](https://foss4g.hokkaido.jp/). The company's team also includes multiple [Charter Members of the OSGeo Foundation](https://www.osgeo.org/about/charter-members/), and MIERUNE is an [organizational member of OSGeo.JP](https://www.osgeo.jp/sponsor). [Toru Mori](https://www.linkedin.com/in/toru-mori-9a4984b/), a board member of MIERUNE, is a key figure in supporting the global FOSS4G movement from its very inception, serving as the OSGeo Representative of the Japan Chapter from 2006 to 2018.
[^2]: MIERUNE is an [official QGIS sponsor](https://qgis.org/#sustaining-members) since 2017 and a [voting member of the QGIS Country User Group](https://qgis.org/community/groups/).
[^3]: MIERUNE is a major supporter of the MapLibre project, becoming the [world's first sponsor in 2022](https://maplibre.org/news/2022-06-10-mierune-announcement/) (alongside companies like Meta, Microsoft, and AWS). Furthermore, MIERUNE's commitment extends to project governance, as CEO [Yasunori Kirimoto](https://www.dayjournal.dev/) and CTO Kanahiro Iguchi are both [voting members of the project](https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md).
