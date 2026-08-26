---
title: "Além do PLATEAU — Dados de nuvem de pontos e gêmeos digitais no Japão"
description: "Um panorama das iniciativas de nuvem de pontos no Japão, com foco no Virtual Shizuoka, e o desenvolvimento de gêmeos digitais em várias regiões"
date: 2026-04-02
category: [project, government]
author: "Eita.H"
---

# Introdução: o desenvolvimento de dados urbanos 3D no Japão

Desde 2020, o Japão vem registrando avanços rápidos no desenvolvimento de dados urbanos tridimensionais. Uma das iniciativas mais emblemáticas é o **PLATEAU**, projeto de desenvolvimento de modelos de cidade 3D conduzido pelo Ministério de Território, Infraestrutura, Transporte e Turismo (MLIT).[^1]

O **PLATEAU** representa edifícios e infraestruturas urbanas por meio de modelos estruturados baseados no conceito de **LOD (Nível de Detalhe)**, com aplicações esperadas em planejamento urbano, prevenção de desastres, simulação e muitos outros campos.

Além disso, nos últimos anos, uma abordagem diferente emergiu paralelamente ao PLATEAU: iniciativas de desenvolvimento e publicação de dados urbanos e regionais na forma de **nuvens de pontos** avançam por todo o Japão.

Os dados de nuvem de pontos consistem em imensos conjuntos de pontos tridimensionais adquiridos por levantamento a laser aéreo, mapeamento móvel e outros métodos. Ao integrar informações a esses pontos, os espaços urbanos podem ser reproduzidos com alta resolução.

Este artigo apresenta os projetos mais representativos de publicação de dados de nuvem de pontos no Japão e examina suas características e potencial futuro.

![Captura de tela do Virtual Shizuoka em 30/03/2026](/images/articles/eita-h/eh_pointcloud_image01.webp)
Virtual Shizuoka visualizado no visualizador do Projeto de Gêmeo Digital de Tóquio, acessado em 30 de março de 2026 [^2]

# Estudo de caso: Virtual Shizuoka

Uma das iniciativas pioneiras em publicação de dados de nuvem de pontos no Japão é o projeto **«Virtual Shizuoka»** da Divisão de Política de Construção da Prefeitura de Shizuoka, localizada no centro do Japão.

Desde 2019, a Prefeitura de Shizuoka desenvolve dados de nuvem de pontos de alta densidade cobrindo toda a prefeitura por levantamento a laser aéreo.[^2]

A publicação desses dados como dados abertos gerou impacto significativo em todo o Japão. Em 2025, a prefeitura concluiu e publicou os dados cobrindo toda a região.[^2]

![Captura de tela do Virtual Shizuoka em 30/03/2026](/images/articles/eita-h/eh_pointcloud_image02.webp)
Virtual Shizuoka, acessado em 30 de março de 2026 [^2]

## Estado de desenvolvimento

A escala e as especificações do Virtual Shizuoka atestam a ambição desta iniciativa.[^2] [^3] [^4] [^5]

- Mais de **500 bilhões de pontos** de dados de nuvem de pontos construídos
- Cobre a área total da prefeitura: **7.777 km²**
- Dados publicados no **Centro de Informações G-Espacial** sob licença **CC-BY 4.0**
- Dados originais fornecidos em arquivos compactados no **formato LAS**, com dados de terreno processados, orto-imagens, dados de condução MMS e vários conjuntos de dados relacionados
- O volume total dos dados publicados supera **30 TB**; o tamanho médio por malha é de 300 MB, podendo ultrapassar 5 GB no máximo
- Cada ponto contém latitude, longitude, altitude, dados de cor RGB, intensidade de recepção luminosa e informações de classificação
- Visualizador web fornecido em colaboração com o **Projeto de Gêmeo Digital de Tóquio**
- Custo total do projeto: **1,84 bilhão de ienes (aproximadamente 11,6 milhões de USD)**, financiado em cerca de 23% pelo governo nacional

Essas especificações permitem à Prefeitura de Shizuoka realizar um **gêmeo digital em escala 1:1** de toda a região.

## Abordagem de desenvolvimento dos dados

A aquisição de dados de nuvem de pontos combina três tipos de abordagens, cada uma com objetivos e densidades de pontos diferentes.[^3]

| Método de medição | Alvo | Densidade de pontos |
|---|---|---|
| Varredura a laser aérea (LP) | Solo, edifícios, árvores, etc. | 16 pontos/m² ou mais |
| Batimetria a laser aérea (ALB) | Zonas de águas rasas (costas, rios) | 1 ponto/m² ou mais |
| Sistema de mapeamento móvel (MMS) | Superfícies de pavimentos, margens de estradas | 400 pontos/m² ou mais |

![Amostra dos três tipos de dados do Virtual Shizuoka em 30/03/2026](/images/articles/eita-h/eh_pointcloud_image03.webp)
Virtual Shizuoka, acessado em 30 de março de 2026 [^6]

## Principais aplicações

As aplicações do Virtual Shizuoka incluem notadamente:[^3]

- **Prevenção de desastres**: Análise de volumes de mudança antes e depois de um evento catastrófico
- **Transporte**: Desenvolvimento de mapas para navegação de veículos autônomos
- **Engenharia civil**: Simplificação dos processos de licitação de obras civis
- **Planejamento urbano**: Simulação paisagística, apoio à consulta pública
- **Gestão de infraestrutura**: Gestão avançada de inventários por visualização 3D de redes subterrâneas
- **Energia**: Análise do potencial de geração de energia solar
- **Cultura**: Melhoria da eficiência das escavações arqueológicas, arquivamento digital de bens culturais
- **Turismo**: Turismo em realidade virtual via metaverso

Os dados de nuvem de pontos do Virtual Shizuoka devem ser utilizados em campos variados como prevenção de desastres, gestão de infraestrutura, turismo, planejamento de transportes e planejamento urbano, com uso crescente por instituições de pesquisa e empresas privadas.[^3] [^4]

Em particular, nos campos da construção civil, da engenharia civil e da gestão de desastres, aplicações práticas estão sendo implementadas e esforços são realizados para expandir esse conhecimento a outros municípios.[^4]

A aplicação à condução autônoma também é antecipada. Concretamente, os dados do Virtual Shizuoka são usados para desenvolver **mapas 3D de alta definição (mapas HD)** para veículos autônomos em experimentos de demonstração intitulados **«Projeto Show CASE de Condução Autônoma de Shizuoka»**.[^7]

# Outros projetos de desenvolvimento de dados de nuvem de pontos

A partir de 2026, vários projetos de dados de nuvem de pontos estão em andamento no Japão além do **Virtual Shizuoka**.

## Projeto de Gêmeo Digital de Tóquio

Tóquio, a capital do Japão, lançou seu **«Projeto de Gêmeo Digital»** em 2020, com o desenvolvimento de dados de nuvem de pontos começando em 2022 como componente-chave desta iniciativa.[^8] [^9] [^10]

O desenvolvimento dos dados de nuvem de pontos inclui empréstimo de equipamentos, aquisição de dados e assistência para sua valorização.

Entre os desafios estão dificuldades de posicionamento em certos locais e a dificuldade de reproduzir a textura de bens culturais nos visualizadores.[^9]

![Projeto de Gêmeo Digital de Tóquio em 30/03/2026](/images/articles/eita-h/eh_pointcloud_image04.webp)
Projeto de Gêmeo Digital de Tóquio, acessado em 30 de março de 2026 [^9]

## Open Nagasaki

A Prefeitura de Nagasaki, localizada no sul do Japão, também avança com o **«Open Nagasaki»**, uma iniciativa centrada na publicação de dados de nuvem de pontos.[^11]

O **Open Nagasaki**, lançado por volta de 2023, é conhecido como exemplo representativo de dados abertos de nuvem de pontos no Japão, com um slogan único que instrui a **«Use livremente»** em tom imperativo.[^11]

Os dados de nuvem de pontos são distribuídos no **formato LAS**. Embora não haja um visualizador oficial, o site oficial remete a métodos de processamento dos dados e exemplos de uso.

Uma característica distintiva da iniciativa de Nagasaki é que a publicação dos dados avança em colaboração com pesquisadores e comunidades regionais, e não apenas com órgãos governamentais. Essas iniciativas de dados abertos oferecem possibilidades de aplicação em vários domínios, incluindo a preservação do patrimônio cultural local, o turismo e a pesquisa urbana.

![Open Nagasaki em 30/03/2026](/images/articles/eita-h/eh_pointcloud_image05.webp)
Site web do Open Nagasaki, acessado em 30 de março de 2026 [^11]

## Projeto de nuvem de pontos da Expo de Osaka

Outro caso interessante é a iniciativa de desenvolvimento de dados de nuvem de pontos voltada para a área do local da **Expo Osaka-Kansai**.

Este projeto adquire todo o espaço do local da expo, incluindo os pavilhões de várias regiões, na forma de dados de nuvem de pontos de alta precisão e os preserva como gêmeo digital.[^12]

É desenvolvido e publicado no âmbito do **PLATEAU**, o projeto de construção de modelos de cidade 3D conduzido pelo MLIT.

O MLIT explicita o uso pretendido: «Esperamos que esses dados sejam usados para desenvolver conteúdo que permita revisitar o local da expo e materiais pedagógicos», sendo que **o uso comercial é proibido**.[^12] [^13]

O desenvolvimento de dados de nuvem de pontos voltados para eventos de grande escala e duração limitada como as exposições universais atrai atenção como nova aplicação diferente do planejamento urbano tradicional. Essas iniciativas também têm valor significativo do ponto de vista do registro de espaços urbanos e do arquivamento digital.

![Expo Osaka 2025 em 30/03/2026](/images/articles/eita-h/eh_pointcloud_image06.webp)
Dados de nuvem de pontos da Expo Osaka-Kansai, acessados em 30 de março de 2026 [^13]

# Perspectivas futuras

Como demonstrado ao longo deste artigo, o desenvolvimento de dados de nuvem de pontos no Japão avançou rapidamente desde a entrada nos anos 2020. Da cobertura prefeitural completa do **Virtual Shizuoka** à iniciativa de arquivamento de eventos da **Expo Osaka-Kansai**, modelos diversificados de desenvolvimento de dados de nuvem de pontos emergem por todo o Japão.

Cada projeto reflete prioridades e abordagens diferentes: desenvolvimento de infraestrutura conduzido pelo governo, engajamento colaborativo com as comunidades e preservação digital de eventos de duração limitada. Essa diversidade sugere que a tecnologia de nuvem de pontos encontra aplicações além do planejamento urbano e da prevenção de desastres tradicionais.

No entanto, desafios importantes persistem. Os dados de nuvem de pontos atingem tamanhos imensos — como os 30 TB do Virtual Shizuoka —, o que torna o processamento, o armazenamento e a adoção generalizada difíceis para municípios e organizações menores que não dispõem de recursos técnicos substanciais.

Sob essa perspectiva, o caso do **Virtual Shizuoka** oferece um modelo particularmente promissor para o futuro. Em vez de cada município desenvolver sistemas isolados, o Virtual Shizuoka compartilha ativamente sua infraestrutura técnica e seu conhecimento com outros governos locais, criando uma base para o desenvolvimento colaborativo.

Embora as organizações administrativas japonesas sejam geralmente conhecidas por sua estrutura organizacional vertical e compartimentada, **os esforços de implantação horizontal do Virtual Shizuoka** representam uma mudança de paradigma. Essa abordagem contribuirá significativamente não apenas para a proliferação dos dados de nuvem de pontos, mas para a visão mais ampla do Japão de um gêmeo digital nacional.

A expansão contínua dessas iniciativas colaborativas em nível municipal, combinada com os avanços tecnológicos contínuos no processamento e na visualização de dados, acelerará tanto o desenvolvimento quanto o uso prático dos dados de nuvem de pontos em todo o Japão.

# Referências

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
