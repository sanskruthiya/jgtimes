---
title: "Dados GIS essenciais do governo: Serviço de Download de Informações Numéricas do Território Nacional"
description: "Sobre o Serviço de Download de Informações Numéricas do Território Nacional, que fornece dados GIS essenciais e gratuitos do governo japonês"
date: 2025-08-10
category: [service, government]
author: "Eita.H"
---

# Visão geral

O «Serviço de Download de Informações Numéricas do Território Nacional» (Kokudo Suuchi Jouhou) do Japão[^1] é o catálogo de dados GIS mais representativo fornecido pelo Ministério de Território, Infraestrutura, Transporte e Turismo (MLIT). Ele oferece diversas informações geoespaciais sobre o território nacional do Japão como dados GIS gratuitos. Como fornece cobertura abrangente das informações espaciais fundamentais do país, é um dos serviços mais acessíveis e frequentemente utilizados pelos usuários japoneses de GIS, desde iniciantes até especialistas.

# Principais categorias de dados

A partir de 2025, o site do Serviço de Download de Informações Numéricas do Território Nacional[^1] oferece três categorias principais de menu: «Informações Numéricas do Território Nacional», «Informações de Referência de Localização» e «Levantamento Nacional», além de um sistema de mapeamento web dedicado para navegação simples dos dados.

- **Informações Numéricas do Território Nacional**: Uma coleção de bases de dados que fornece informações espaciais fundamentais sobre o território nacional como dados GIS, incluindo topografia, uso do solo, equipamentos públicos e transporte

- **Informações de Referência de Localização**: Um conjunto de dados contendo informações de localização em nível de quarteirão em todo o país, com nomes de quarteirões e coordenadas de ponto representativo (latitude e longitude)

- **Levantamento Nacional**: Informações de levantamento relacionadas à classificação do solo e à gestão hídrica para controle de inundações e utilização da água

A seção de Informações Numéricas do Território Nacional contém numerosos conjuntos de dados que servem de base para a análise GIS. Os exemplos incluem escolas, estações ferroviárias e parques. Além disso, muitos conjuntos de dados incluem valiosas informações de atributos para análise, como o número de passageiros para as estações ferroviárias, que complementam os dados básicos de equipamentos públicos.

# Formatos de dados

Os principais formatos de dados são conformes com os padrões JPGIS 2.1 e são fornecidos nos formatos Shapefile, XML e GeoJSON. Os dados baixados são armazenados no formato ZIP. Casos de uso comerciais e não comerciais são ambos suportados, com informações de licença especificadas nos metadados de cada conjunto de dados.

Em fevereiro de 2025, o serviço realizou uma pesquisa com usuários sobre preferências de formato de dados, gerando numerosas discussões por meio de formulários de questionário e o repositório GitHub pertinente.[^2] Os formatos de dados apresentados como exemplos incluíam FlatGeobuf, GeoPackage, GeoParquet, GeoArrow e PMTiles. A partir de 2025, a demanda pelo formato Shapefile permanece forte entre os usuários tradicionais de GIS no Japão. No entanto, a importância dos formatos adequados para sistemas de mapeamento web de alto desempenho e análise em grande escala tem sido frequentemente destacada nos últimos anos. Nesse contexto, a discussão sobre métodos contemporâneos de fornecimento de dados GIS gerou debate considerável. Os resultados dessa revisão não haviam sido finalizados em agosto de 2025.

# Histórico do serviço

As Informações Numéricas do Território Nacional, que servem como fonte de dados para o serviço de download, têm uma longa história que remonta a 1974, quando seu desenvolvimento teve início. Um fator determinante foi o plano abrangente de desenvolvimento nacional anunciado em 1969, que identificou dados territoriais insuficientes e a ausência de metodologias científicas para o desenvolvimento regional.[^3] Inicialmente, os dados compilados eram fornecidos apenas a instituições públicas e organizações de pesquisa por meio de um sistema baseado em solicitações.[^3]

Em 2001, o site GIS, predecessor do atual site de Download de Informações Numéricas do Território Nacional, foi lançado, tornando os dados GIS amplamente acessíveis ao público em geral para download.

Além disso, em 2010, todos os dados começaram a ser convertidos e fornecidos no formato Shapefile, que era na época o formato de dados GIS de uso geral mais amplamente utilizado. Isso tornou o serviço amplamente acessível a diversos usuários de GIS, incluindo agências governamentais, empresas privadas, estudantes e cidadãos em geral. No entanto, não se pode negar que essa ampla adoção do formato Shapefile se tornou uma dívida técnica nos últimos anos.

Nesse contexto, o «Grupo de Estudo sobre Abordagens Futuras para o Desenvolvimento de Informações Numéricas do Território Nacional»[^4] foi criado em 2023 para examinar métodos contemporâneos de fornecimento de dados GIS.

# Iniciativas de promoção do serviço

Como mencionado, o Serviço de Download de Informações Numéricas do Território Nacional se caracteriza não apenas como um site familiar para os usuários japoneses de GIS, mas também como um serviço que demonstra abordagens contemporâneas de fornecimento de dados GIS.

Para promover ainda mais o aproveitamento dos dados, o serviço organiza o «Prêmio Ichi-BIZ», um concurso de ideias de negócios usando o Serviço de Download de Informações Numéricas do Território Nacional. O nome «Ichi» refere-se a «localização» em japonês, enfatizando a natureza geoespacial da competição de negócios.

Além disso, por meio do «Grupo de Estudo sobre Abordagens Futuras para o Desenvolvimento de Informações Numéricas do Território Nacional»,[^4] o serviço tem solicitado ativamente opiniões de usuários por meio de pesquisas e o repositório GitHub pertinente,[^2] facilitando trocas vibrantes de opiniões sobre os formatos de dados GIS esperados. Isso demonstra a política do serviço de evoluir em colaboração com os usuários de GIS.

Por meio de tais iniciativas, o Serviço de Download de Informações Numéricas do Território Nacional continuará servindo como recurso fundamental que apoia os usuários japoneses de GIS.

# Referências

[^1]: https://nlftp.mlit.go.jp/ksj/
[^2]: https://github.com/gislab-mlit/next-ksj-formats
[^3]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/content/001711014.pdf
[^4]: https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/chirikukannjoho/tochi_fudousan_kensetsugyo_tk17_000001_00029.html
