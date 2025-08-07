---
title: "Essential GIS Data from the Government: National Land Numerical Information Download Service"
description: 'About the National Land Numerical Information Download Service providing free and essential GIS data from the Japanese government'
date: 2025-07-30
category: [service, government]
author: "Eita.H"
---

# Overview
Japan's "National Land Numerical Information Download Service" (Kokudo Suuchi Jouhou)[^1] is the most representative GIS data catalog provided by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT). It offers various geospatial information about Japan's national land as free GIS data. Since it provides comprehensive coverage of fundamental spatial information about the country, it is one of the most accessible and frequently used services for Japanese GIS users, from beginners to experts.

# Main Data Categories
As of 2025, the National Land Numerical Information Download Service website[^1] provides three main menu categories: "National Land Numerical Information", "Location Reference Information" and "National Survey", along with a dedicated web mapping system for simple data browsing.

- **National Land Numerical Information**: A database collection providing fundamental spatial information about the national land as GIS data, including topography, land use, public facilities, and transportation

- **Location Reference Information**: A dataset containing block-level location information nationwide, with block names and representative point coordinates (latitude and longitude)

- **National Survey**: Survey information related to land classification and water management for flood control and water utilization

The National Land Numerical Information section contains numerous datasets that serve as the foundation for GIS analysis. Examples include schools, railway stations, and parks. Furthermore, many datasets include valuable attribute information for analysis, such as passenger numbers for railway stations, which complement the basic public facility data.

# Data Formats
The main data formats comply with JPGIS 2.1 standards and are provided in Shapefile, XML, and GeoJSON formats. Download data is stored in ZIP format. Both commercial and non-commercial use cases are supported, with licensing information specified in the metadata for each dataset.

In February 2025, the service conducted a user survey regarding data format preferences, generating extensive discussions through questionnaire forms and the relevant GitHub repository[^2]. Sample data formats presented included FlatGeobuf, GeoPackage, GeoParquet, GeoArrow, and PMTiles. As of 2025, there remains strong demand for Shapefile format among Japan's traditional GIS users. However, the importance of formats suitable for high-performance web mapping system and large-scale analysis has been frequently highlighted in recent years. Against this backdrop, the discussion of contemporary GIS data provision methods has generated considerable debate. The results of this review have not yet been finalized as of August 2025.

# Service History
The National Land Numerical Information, which serves as the data source for the download service, has a long history dating back to 1974 when its development began. A major factor was the comprehensive national development plan announced in 1969, which identified insufficient national land data and lack of scientific methodologies for regional development.[^3] Initially, the compiled data was provided only to public institutions and research organizations through an application-based system.[^3]

In 2001, the GIS website, the predecessor to the current National Land Numerical Information Download site, was launched, making GIS data widely accessible to the general public for download.

Furthermore, in 2010, all data began to be converted and provided in Shapefile format, which was the most widely used general-purpose GIS data format at the time. This made the service broadly accessible to various GIS users, including government agencies, private companies, students, and general citizens. However, it cannot be denied that this widespread adoption of Shapefile format has become a technical debt in recent years.

Against this background, the "Study Group on Future Approaches to National Land Numerical Information Development"[^4] was established in 2023 to examine contemporary methods for providing GIS data.

# Service Promotion Initiatives
As mentioned above, the National Land Numerical Information Download Service is characterized not only as a familiar website for Japanese GIS users but also as a service that demonstrates contemporary approaches to GIS data provision.

To further promote data utilization, the service hosts the "Ichi-BIZ Award," a business idea contest utilizing the National Land Numerical Information Download Service. The name "Ichi" refers to "location" in Japanese, emphasizing the geospatial nature of the business competition.

Additionally, through the "Study Group on Future Approaches to National Land Numerical Information Development"[^4], the service has actively solicited opinions from users through surveys and the relevant GitHub repository[^2], facilitating vibrant exchanges of opinions about expected GIS data formats. This demonstrates the service's policy of evolving through collaboration with GIS users.

Under such initiatives, the National Land Numerical Information Download Service will continue to serve as a fundamental resource that supports Japanese GIS users.

# References
[^1]: https://nlftp.mlit.go.jp/ksj/
[^2]: https://github.com/gislab-mlit/next-ksj-formats
[^3]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/content/001711014.pdf
[^4]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/tochi_fudousan_kensetsugyo_tk17_000001_00029.html
