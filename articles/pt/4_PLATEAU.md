---
title: "Projeto PLATEAU: o modelo de cidade 3D liderado pelo governo japonês"
description: "Projeto PLATEAU liderado pelo Ministério de Território, Infraestrutura, Transporte e Turismo"
date: 2025-08-01
category: project
author: "Eita.H"
---

**PLATEAU é um projeto de gêmeo digital urbano em escala nacional no Japão** promovido pelo Ministério de Território, Infraestrutura, Transporte e Turismo (MLIT) em colaboração com diversas partes interessadas.
Lançado em 2020, em 2021 já havia desenvolvido e publicado modelos de cidade 3D como dados abertos para 56 cidades por todo o Japão.[^1]

Também oferece serviços como o **PLATEAU VIEW (um visualizador)**, um site portal e APIs.

# Links
- Projeto PLATEAU[^1]
- PLATEAU VIEW[^2]
- Site Portal PLATEAU do Centro de Informações G-Espacial[^3]

![Imagem de exemplo do PLATEAU View em 01/08/2025](/images/articles/eita-h/PLATEAUVIEW.webp)
PLATEAU View, acessado em 1º de agosto de 2025 [^2]

# Visão geral

Este projeto, liderado pelo Ministério de Território, Infraestrutura, Transporte e Turismo (MLIT), visa desenvolver e publicar **modelos de cidade 3D de alta precisão** para cidades por todo o Japão.
Uma característica significativa deste projeto é que desenvolve dados 3D de formas de edifícios urbanos, alturas e informações de uso do solo com qualidade garantida pelo governo, e disponibiliza grande parte desses dados como dados abertos com metadados, gratuitamente.

Espera-se que esses dados abertos acelerem a realização de **gêmeos digitais e iniciativas de cidades inteligentes** no Japão, permitindo aplicações avançadas em vários campos como planejamento urbano, prevenção de desastres, transporte, turismo e arquitetura.[^7]

Desde o lançamento do projeto em 2020, os casos de uso por empresas privadas, instituições de pesquisa e desenvolvedores cidadãos estão aumentando, e o PLATEAU continua crescendo como **uma nova base para as informações geoespaciais no Japão**.

# Conceito

O nome PLATEAU é explicado assim: «Os modelos de cidade 3D fornecem incontáveis pontos de conexão com a sociedade, e por meio deles, vários campos se tornam interconectados e se desenvolvem através do ciberespaço — a denominação PLATEAU encarna a expectativa de um desenvolvimento mundial autônomo e resiliente, similar ao que Deleuze e Guattari antecipavam em "Mil Platôs"».[^1]
Isso reflete seu sentido filosófico e ambicioso.

O site e outros materiais apresentam designs sofisticados em comparação com as agências governamentais tradicionais. Acredita-se que essa abordagem reflita o histórico acadêmico de **Yuya Uchiyama, figura-chave do MLIT que liderou o projeto PLATEAU** e tem um incomum histórico em filosofia, bem como a estratégia de **Seiichi Saito, que foi responsável pelo branding**.[^4]

Além disso, em 2017, a Federação de Empresas do Japão apresentou a estratégia relacionada à **«Sociedade 5.0»**, promovendo a criação de um «Japão Virtual» mais futurista e avançado por meio da colaboração público-privada.[^5] [^12]

Embora não exista uma relação direta entre a Sociedade 5.0 e o PLATEAU, espera-se que os modelos de cidade 3D do PLATEAU desempenhem um papel significativo na realização dessa estratégia nacional.

# Abordagem de desenvolvimento e casos de uso

O núcleo do Projeto PLATEAU são os dados, em particular os **conjuntos de dados de modelos de cidade 3D**, que estão sendo desenvolvidos e publicados sequencialmente em **cada um dos governos locais do Japão**.

Desde o lançamento do projeto em 2020, **o número de municípios participantes tem aumentado ano a ano**, com o objetivo de publicar dados para 500 cidades até 2027.[^6]

Além disso, em vez de limitar os casos de uso pelo lado do PLATEAU, muito é deixado ao critério e às ideias dos usuários. Por isso, **são realizados vários eventos para compartilhar casos de uso do aproveitamento de dados**, permitindo que muitas pessoas compreendam e utilizem o valor do PLATEAU.[^7]

Entre as aplicações práticas, **a estimativa do potencial de geração de energia solar e a simulação de reflexão** usando formas de edifícios 3D demonstram a utilidade prática dos dados do PLATEAU.[^16]

![Imagem de exemplo de caso de uso do PLATEAU em 01/08/2025](/images/articles/eita-h/PLATEAU_usecase_uc.webp)
Caso de uso do PLATEAU: estimativa do potencial de geração de energia solar, acessado em 1º de agosto de 2025 [^16]

Além das aplicações práticas, o PLATEAU também incentiva a exploração criativa por meio de competições. Exemplos concretos incluem o **PLATEAU AWARD**[^14], um concurso anual onde casos de uso em campos como prevenção de desastres, saúde e conteúdo de AR/VR são apresentados.

Além disso, o **PLATEAU Hack Challenge**, um hackathon, viu muitos protótipos originais propostos, incluindo simulações de Godzilla destruindo cidades.[^15]

![Imagem de exemplo de caso de uso do PLATEAU em 01/08/2025](/images/articles/eita-h/PLATEAU_usecase_gz.webp)
Caso de uso do PLATEAU: simulação de destruição de cidade por Godzilla, acessado em 1º de agosto de 2025 [^15]

# Modelos de cidade 3D

Os modelos de cidade 3D do PLATEAU estão sendo desenvolvidos e publicados pelos municípios em etapas, do **LOD0 ao LOD2**.[^8]

Embora dados urbanos 3D possam estar disponíveis de outros fornecedores de mapas, uma das vantagens notáveis do PLATEAU parece ser a **qualidade de alta precisão e os metadados garantidos pelo governo**. Por isso, espera-se que seja utilizado em campos que requerem interesse público, como **planejamento urbano, prevenção de desastres, transporte, turismo e arquitetura**.

Além disso, embora os modelos de cidade 3D possam evocar imagens de processamento com software de modelagem 3D como o Blender, uma característica significativa do PLATEAU é que ele pode ser gerenciado como **dados GIS**. Embora os dados originais suportem vários tipos de formato como GeoJSON, são publicados principalmente no formato **CityGML** conforme com a OGC, e são fornecidas ferramentas de código aberto para **converter o CityGML do PLATEAU em dados GIS comuns**.[^9] [^10]

# Desafios

O Projeto PLATEAU, que teve início em 2020, alcançou certos sucessos, mas atualmente enfrenta muitos desafios.

Em primeiro lugar, o desenvolvimento dos dados requer **um orçamento significativo**. Segundo uma empresa líder de topografia japonesa, o custo de desenvolvimento para um município típico com uma população de 150.000 habitantes e uma área de 200 km² é de aproximadamente 23 milhões de ienes (aproximadamente 140.000-160.000 USD).[^13]

Além disso, um desafio comum a todos os dados geoespaciais é que uma vez desenvolvidos, **os dados precisam ser atualizados periodicamente**. Isso também requer orçamento substancial, tornando necessário explorar métodos mais eficientes e rentáveis. A partir de 2025, estão sendo propostos métodos que utilizam dados de nuvem de pontos LiDAR para desenvolver os modelos de cidade 3D do PLATEAU como experimentos de demonstração, e também está sendo considerada a atualização de dados por meio de imagens de satélite.[^11]

# Referências

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
