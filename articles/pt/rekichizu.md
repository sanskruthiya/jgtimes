---
title: "Rekichizu: uma visão moderna dos mapas históricos do Japão"
description: 'Rekichizu é um site onde você pode consultar mapas históricos com um design de mapa moderno. Atualmente, mapas do final do período Edo (por volta de 1800-1840) são publicados e atualizados regularmente.'
date: 2025-11-14
category: [project, opensource]
author: 'Sorami Shiromizu'
thumbnail: '/images/articles/sorami-shiromizu/rekichizu/thumbnail.png'
---

[![Miniatura do Rekichizu](/images/articles/sorami-shiromizu/rekichizu/thumbnail.png)](https://rekichizu.jp/en)

[Rekichizu](https://rekichizu.jp/en) é um site onde você pode consultar **mapas históricos com um design de mapa moderno**.

Atualmente, mapas do **final do período Edo (por volta de 1800-1840)** são publicados e atualizados regularmente.

O projeto foi lançado em agosto de 2023. Em novembro de 2025, as versões em **inglês e em hiragana** do site foram publicadas, tornando esses mapas históricos acessíveis a um público mais amplo.

Os dados subjacentes (tiles de mapa e estilos) são fornecidos como **dados abertos** sob a licença [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt).

Consulte o [site](https://rekichizu.jp/en) para mais informações.

_(Nota: [A autora](https://sorami.dev/) é colaboradora do projeto Rekichizu.)_

## O que você pode fazer

![Rekichizu - Exemplo de visualização de mapa](/images/articles/sorami-shiromizu/rekichizu/feature-1.webp)

O Rekichizu é construído sobre seus próprios dados digitais originais em grande escala, meticulosamente elaborados a partir de mapas antigos. Esses dados são apresentados com um estilo de mapa moderno original, oferecendo um serviço de mapa interativo similar às plataformas que você usa no dia a dia.

Os usuários podem pesquisar lugares em japonês, hiragana ou inglês. Ao clicar no ícone de lupa no canto superior esquerdo, você pode usar o serviço de geocodificação simples integrado para pesquisar nomes de lugares.

![Rekichizu - Exemplo de terreno 3D](/images/articles/sorami-shiromizu/rekichizu/feature-2.webp)

Você pode ver o terreno em 3D. Pressione o botão de montanha no canto inferior direito para exibir o mapa em três dimensões.

![Rekichizu - Exemplo de modo de comparação (divisão)](/images/articles/sorami-shiromizu/rekichizu/feature-3.webp)

![Rekichizu - Exemplo de modo de comparação (lupa)](/images/articles/sorami-shiromizu/rekichizu/feature-4.webp)

Você pode comparar os mapas históricos diretamente com mapas modernos e fotografias aéreas. Vários métodos de comparação estão disponíveis, incluindo visualizações lado a lado (paralelas/divididas), lupa e sobreposição. Esta funcionalidade é uma ferramenta poderosa e divertida para entender como um lugar mudou ao longo do tempo.

![Rekichizu - Exemplo de GPS](/images/articles/sorami-shiromizu/rekichizu/feature-5.webp)

O Rekichizu é um companheiro ideal para explorar áreas históricas. Ao ativar a função GPS, você pode ver de uma só vez como era sua localização atual durante o período Edo, transformando um simples passeio em uma experiência cativante de viagem no tempo.

## A história do Rekichizu

O Rekichizu nasceu como projeto de paixão pessoal do designer gráfico [Hajime Kato](https://chizutodesign.com/), amplamente conhecido online como [@chizutodesign](https://x.com/chizutodesign). Kato é reconhecido por sua abordagem criativa e original de mapas e visualizações de dados. Ele posteriormente publicou um livro, [『地図とか路線図とか@chizutodesign』](https://books.ikaros.jp/book/b10080873.html) (_«Mapas e mapas de linhas»_, em japonês) pela IKAROS Publications LTD., em 2023.

### Os primórdios: um mapa no estilo Edo que se tornou viral

Profundamente interessado em história e mapas, Kato constatou que, embora os mapas antigos sejam fascinantes, sua complexidade os torna difíceis de ler e interpretar para os usuários contemporâneos.

Em 2019, esse desafio o inspirou a criar e publicar uma imagem estática de um mapa do período Edo no estilo Google Maps no Twitter. Ela rapidamente ganhou tração significativa, tornando-se viral com cerca de 40.000 «curtidas» na época. Esta versão inicial era uma imagem estática única criada apenas com o Adobe Illustrator.

![Mapa histórico no estilo Google Maps](https://cdn.myportfolio.com/ac25a482-e8dc-40bb-82f3-d586ec7c6f47/3e1b3a11-2b01-4a3c-b8f7-cbafee9c2512_rw_1920.jpg?h=e149025d6d253def164a0c99fb7aa726)

_Figura: [地図とかデザインとか / chizutodesign - 江戸時代のGoogleマップ風地図 / Mapa histórico no estilo Google Maps](https://chizutodesign.com/gmaps-edo)_

### Rumo ao mapa web e ao lançamento público

Para transformar essa imagem estática em um serviço web interativo como é hoje, Kato empreendeu um processo trabalhoso de criação de dados digitais. Ele corrigiu e ajustou esses dados referenciando o Mapa da Autoridade de Informações Geoespaciais ([地理院地図](https://maps.gsi.go.jp/)). O desenho real e a criação de dados foram então realizados com [QGIS](https://qgis.org/), um software de sistema de informações geoespaciais (SIG) livre e de código aberto.

Em agosto de 2023, Kato publicou a versão pública inicial do Rekichizu. A resposta foi imediata e avassaladora, atingindo 100.000 visualizações de página no dia seguinte e obtendo cobertura em mídia online, jornais nacionais e programas de televisão.

### Expansão com a MIERUNE Inc.

Apesar do sucesso inicial, Kato, sendo principalmente um designer, encontrou dificuldades com as habilidades de engenharia de software e os recursos necessários para escalar o serviço.

Após discussões internas, a [MIERUNE Inc.](https://www.mierune.co.jp/), a empresa geoespacial profissional onde Kato trabalha, assumiu oficialmente o projeto em maio de 2024.

A MIERUNE se encaixou naturalmente, pois a empresa tem características únicas: ela nasceu da comunidade FOSS4G (Free and Open Source Software for Geospatial) e contribui ativamente para ela.[^1] Essa base dá à empresa familiaridade com OSS (software de código aberto) e projetos que não são estritamente orientados ao lucro. O próprio Kato tinha se juntado à MIERUNE em 2022 após ser convidado a apresentar em uma das conferências FOSS4G.

Desde então, Kato e a equipe MIERUNE expandiram coletivamente as capacidades do Rekichizu, implementando funcionalidades-chave como geração de tiles vetoriais para o mapa, geocodificação, função de comparação, internacionalização (i18n) e muito mais. Em novembro de 2025, as versões inglesa e hiragana do site foram publicadas, tornando esses mapas históricos acessíveis a um público internacional mais amplo.

### Reconhecimento público

A dedicação de Kato ao projeto Rekichizu rapidamente lhe rendeu importantes distinções na indústria. Suas realizações incluem o recebimento do [Prêmio Enami Naomi (Prêmio de Revelação) no Digital Content of the Year '23 / 29º Prêmio AMD](https://amd.or.jp/pressrelease/2024/2024_0215_info.html) e do [«Prêmio de Encorajamento» nos Prêmios da Indústria de Arquivos Digitais 2024](https://dapcon.jp/news/award_2024/).

## Colaborações

Desde seu lançamento, o Rekichizu colaborou ativamente com instituições externas.

### Centro ROIS-DS para Dados Abertos em Humanidades

![Colaborações com o Centro ROIS-DS para Dados Abertos em Humanidades - Conjunto de dados das grandes estradas de Edo e conjunto de dados das áreas de casas urbanas «Edo Kiriezu»](/images/articles/sorami-shiromizu/rekichizu/collaboration-1.webp)

Em 2025, em colaboração com o [Centro ROIS-DS para Dados Abertos em Humanidades](https://codh.rois.ac.jp/index.html.en), o Rekichizu criou dados para aproximadamente 7.700 km de grandes estradas do período Edo. O conjunto de dados está disponível para download no formato SIG. Para mais detalhes, consulte [esta página](https://codh.rois.ac.jp/historical-gis/edo-road/).

Em 2024, em colaboração com o Centro ROIS-DS para Dados Abertos em Humanidades, o Rekichizu extraiu as áreas de casas urbanas das 29 folhas do «Edo Kiriezu». Os dados são publicados no Rekichizu (áreas pintadas em marrom claro no mapa). O conjunto de dados está disponível para download no formato SIG. Para mais detalhes, consulte [esta página](https://codh.rois.ac.jp/edo-maps/rekichizu/).

Para aqueles interessados nos detalhes técnicos e acadêmicos desta colaboração, uma conferência conjunta foi apresentada no [FOSS4G 2024 Japan](https://www.osgeo.jp/events/2024-2/foss4g-2024-japan/coreday): [『江戸ビッグデータのオープン化：「れきちず」を活用した歴史的地理情報基盤に向けて』](https://agora.ex.nii.ac.jp/~kitamoto/research/publications/foss4g24-ppt.pdf) _«Abertura dos megadados de Edo: rumo a uma plataforma de informações geográficas históricas usando "Rekichizu"»_ (em japonês), por [Asanobu Kitamoto](https://agora.ex.nii.ac.jp/~kitamoto/index.html.en) (Instituto Nacional de Informática) e Hajime Kato.

### O romance «Sapporo Tanjo (O nascimento de Sapporo)»

!["Sapporo Tanjo" o romance, em uma livraria](/images/articles/sorami-shiromizu/rekichizu/collaboration-2.webp)
!
![Site especial de "Sapporo Tanjo" - o mapa](/images/articles/sorami-shiromizu/rekichizu/collaboration-3.webp)

Em colaboração com um romance de Yoshinobu Kadoi, [«Sapporo Tanjo (O nascimento de Sapporo)»](https://www.kawade.co.jp/np/isbn/9784309039480/) (publicado pela [Kawade Shobo Shinsha](https://www.kawade.co.jp/np/index.html)), o Rekichizu criou mapas de Sapporo do final do período Edo à era Showa e um site especial. Para mais detalhes, consulte [esta página](https://sapporo-tanjo.rekichizu.jp/).

## A fabricação do Rekichizu

Então, como exatamente um mapa web histórico como o Rekichizu é realizado? Isso exige muito esforço em várias áreas. Esta seção detalha a dedicação necessária para criar os dados principais, projetar o estilo de mapa único, montar a pilha de software de código aberto e implementar todas as funcionalidades de internacionalização.

### Os dados

Toda a criação de dados é realizada com QGIS, um software de Sistema de Informações Geoespaciais livre e de código aberto.[^2]

O processo principal consiste em traçar e desenhar digitalmente informações históricas — como estradas, linhas costeiras e pontos de interesse (POIs) — referenciando mapas antigos e outros documentos históricos sobre o Mapa moderno da Autoridade de Informações Geoespaciais (地理院地図).

![Visita a bibliotecas por todo o Japão e grande quantidade de documentos](/images/articles/sorami-shiromizu/rekichizu/making-1.webp)

Como muitos materiais de referência necessários não estão disponíveis em bibliotecas digitais, Kato visitou inúmeras bibliotecas por todo o Japão para coletar documentos físicos.

Até hoje, o projeto utiliza mais de 400 materiais de referência. Você pode consultar [a lista completa no site](https://rekichizu.jp/en#references). Com base nesses documentos, a extensão total das estradas criadas ultrapassa 40.000 km, e o número de POIs ultrapassa 6.100.

Atualmente, Kato continua sendo o único responsável pela criação contínua de dados. A publicação dos dados iniciais em escala nacional levou dois anos, e o projeto ainda está em andamento.

### O design

![Exemplo do design do mapa Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-2.webp)

O Rekichizu apresenta um design de mapa original e distintivo que visa transmitir visualmente a atmosfera histórica mantendo a legibilidade moderna. O design utiliza escolhas específicas de cores e texturas para evocar a época, incluindo colorir as estradas para sugerir pedras cobertas de musgo. Além disso, o design ajuda a distinguir claramente os diferentes usos históricos das terras, como bairros comerciais, terrenos de templos e santuários, residências de samurais e espaços verdes.

![Os ícones originais do Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-3.webp)

Todos os ícones representando pontos de interesse são criações originais, refletindo os marcos históricos do período Edo. Esses ícones personalizados incluem designs para as Barreiras (関所), as Cidades de Parada (宿場), os Castelos, as Lojas, as Casas de Chá (茶屋) e as Pontes.

![O design OpenStreetMap original para o Rekichizu](/images/articles/sorami-shiromizu/rekichizu/making-4.webp)

Por fim, para garantir uma experiência visualmente harmoniosa, o design do mapa moderno integrado, que utiliza dados do [OpenStreetMap](https://openstreetmap.org/) (OSM), foi cuidadosamente estilizado para corresponder à estética e à paleta de cores do mapa histórico Rekichizu original.

### O software

O serviço web interativo se apoia na expertise profissional da equipe MIERUNE.

O motor de mapeamento principal é o [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/), uma poderosa biblioteca de mapas web de código aberto.[^3] O framework web front-end escolhido é o [Svelte](https://svelte.dev/), que a MIERUNE adotou em toda a empresa como sua pilha padrão.

Para construir mapas interativos eficientemente neste ambiente, o Rekichizu utiliza o [Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/), uma biblioteca de código aberto criada pelo membro da MIERUNE [Taku Fukada](https://github.com/ciscorn). Esta biblioteca permite criar facilmente mapas usando as capacidades reativas do Svelte. As funcionalidades de comparação de mapas foram especificamente inspiradas pelo [exemplo Side by Side do Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/examples/side-by-side), ele próprio baseado no conceito original do [react-map-gl](https://visgl.github.io/react-map-gl/examples/maplibre/side-by-side).

Para realizar marcadores de localização sincronizados nos mapas de comparação, a equipe criou uma ferramenta OSS personalizada: [maplibre-gl-manual-geolocate](https://github.com/MIERUNE/maplibre-gl-manual-geolocate). Este controle permite exibir um marcador de posição do usuário em coordenadas especificadas sem necessitar da API de geolocalização do navegador.

Para hospedagem, o Rekichizu se apoia no [Cloudflare Workers](https://workers.cloudflare.com/) (anteriormente [AWS Amplify](https://aws.amazon.com/amplify/)).

Para aqueles interessados nos detalhes de implementação técnica, vários artigos e apresentações abrangentes (em japonês) estão disponíveis:

- [現代風歴史マップ「れきちず」フロントエンドのウラとオモテ](https://speakerdeck.com/hjmkth/240824-frontendo-kato-iguchi) _«Frente e verso do frontend do mapa histórico de estilo moderno "Rekichizu"»_, apresentado na [Frontend Conference Hokkaido 2024](https://www.frontend-conf.jp/2024) por Hajime Kato e [Kanahiro Iguchi](https://spatialty.io/)
- [MapLibre GL JS を Svelte の世界で快適に使うためのライブラリを作りました](https://qiita.com/ciscorn/items/6f97f681f31cafe513bd) _«Criei uma biblioteca para usar o MapLibre GL JS confortavelmente no mundo do Svelte»_, por Taku Fukada
- [maplibre-gl-manual-geolocate: 任意の場所を「現在地」にするMapLibre GL JSライブラリ](https://zenn.dev/mierune/articles/a30cf312409119) _«maplibre-gl-manual-geolocate: Uma biblioteca MapLibre GL JS para tornar qualquer lugar "a posição atual"»_, por Sorami Shiromizu

### A internacionalização

Além do formato japonês original, o Rekichizu está atualmente disponível em dois outros idiomas: [Hiragana](https://pt.wikipedia.org/wiki/Hiragana) (um alfabeto fonético usado em japonês) e inglês. Esse esforço de internacionalização (i18n) foi abordado tanto no aplicativo web quanto nos dados de mapa subjacentes.

A funcionalidade i18n do aplicativo web em si é gerenciada usando a biblioteca dedicada [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs).

Para os dados de mapa, a conversão e a tradução dos nomes de lugares nesses diferentes idiomas exigiram técnicas avançadas. Dado o tamanho massivo dos dados, a equipe aproveitou técnicas de Processamento de Linguagem Natural (PLN), incluindo uma abordagem baseada em regras e um LLM ([OpenAI API](https://openai.com/api/)). Essa abordagem se mostrou muito eficaz para o processo semi-automatizado, reduzindo consideravelmente o esforço de correção manual necessário na etapa final.

Mais detalhes sobre este processo técnico estão disponíveis no seguinte artigo (em japonês): [LLMを用いた地名のひらがな・英語化と、Paraglide JSによるi18n: モダンな歴史地図「れきちず」の事例](https://zenn.dev/mierune/articles/f7c446995e445f) _«Conversão de nomes de lugares para inglês e hiragana usando LLM e i18n com Paraglide JS: O caso do mapa histórico moderno "Rekichizu"»_, por Sorami Shiromizu.

Para o estilo do mapa moderno (OSM) em vários idiomas, foi necessário aproveitar o sistema detalhado de marcação do OSM:

- Para o hiragana, propriedades como [ja-Hira](https://wiki.openstreetmap.org/wiki/Key:name:ja-Hira) (compatível com [BCP 47](https://www.rfc-editor.org/info/bcp47)) e o tradicional [name:ja_kana](https://wiki.openstreetmap.org/wiki/Key:name:ja_kana) são usadas.
- Para o inglês e a romanização, propriedades como [name:en](https://wiki.openstreetmap.org/wiki/Key:name:en), [ja-Latn](https://wiki.openstreetmap.org/wiki/Key:name:ja-Latn) (compatível com BCP 47) e o tradicional [name:ja_rm](https://wiki.openstreetmap.org/wiki/JA:Key:name:ja_rm) são empregadas.

É importante notar que nem todos os elementos do OSM têm dados listados para cada idioma, mas a plataforma é aberta. Os usuários são encorajados a contribuir com as informações ausentes para melhorar ainda mais os mapas.

Como último detalhe técnico, a equipe inicialmente usava a [fonte LINE Seed](https://seed.line.me/index_en.html) para o estilo OSM moderno. No entanto, como essa fonte carece do [mácron](https://pt.wikipedia.org/wiki/M%C3%A1cron) (o símbolo de vogal longa, como em `Tōkyō`), e esse símbolo aparece em alguns nomes em inglês do OSM, a equipe optou por uma fonte diferente ([Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)) para o estilo OSM em inglês, a fim de garantir a renderização correta.

## O futuro do Rekichizu

O projeto Rekichizu é sustentado por esforços de desenvolvimento contínuos. A equipe tem várias ideias para expansões futuras tanto nos aspectos de dados quanto de funcionalidades.

![Ideia futura do Rekichizu - Informações de POI](/images/articles/sorami-shiromizu/rekichizu/future-1.webp)

A primeira grande ideia é o desenvolvimento aprofundado dos Pontos de Interesse (POIs). Esta funcionalidade permitirá aos usuários clicar em um lugar para acessar informações detalhadas, incluindo a exibição de imagens associadas, como ukiyo-e (浮世絵) históricos, para ilustrar vividamente o passado do local.

![Ideia futura do Rekichizu - Busca de rota](/images/articles/sorami-shiromizu/rekichizu/future-2.webp)

A equipe também vislumbra uma funcionalidade de orientação histórica de rota (busca de rota). Enquanto os mapas web modernos se concentram na caminhada, esta funcionalidade incorporará modos de transporte apropriados à época, como cavalo, palanquim (駕籠) ou serviço de mensageiro (飛脚), oferecendo uma experiência prática e única da história.

![Ideia futura do Rekichizu - Dados para diferentes eras](/images/articles/sorami-shiromizu/rekichizu/future-3.webp)

O objetivo de longo prazo do projeto é ir além do atual final do período Edo para criar um mapa histórico verdadeiramente multicamadas. O objetivo final é incluir progressivamente mapas cobrindo uma gama cronológica mais ampla da história japonesa, como os períodos Heian (平安), Sengoku (戦国, Estados em Guerra), Meiji (明治), Taishō (大正) e Shōwa (昭和).

![Ideia futura do Rekichizu - Mais colaborações (imagem: antiga rua Nakasendo)](/images/articles/sorami-shiromizu/rekichizu/future-4.webp)

Como nossas parcerias anteriores demonstraram, valorizamos muito encontrar novas pessoas e organizações com quem trabalhar. O Rekichizu está sempre buscando colaborar mais em diferentes áreas como educação e turismo para expandir seu alcance e utilidade. Se você estiver interessado em unir forças, adoraríamos ouvir de você!

![Ideia futura do Rekichizu - Conceito de integração de dados](/images/articles/sorami-shiromizu/rekichizu/future-5.webp)

Percebemos que muitos dados históricos valiosos frequentemente estão isolados, criados individualmente ou por diferentes grupos. Para liberar todo esse valor coletivo, a grande ideia do Rekichizu é evoluir para uma plataforma de integração de dados e criação colaborativa. Queremos construir um sistema que facilite a reunião de dados existentes de indivíduos ou organizações, permitindo que toda a comunidade crie e conecte coletivamente novas informações geoespaciais históricas.

## Experimente!

Esperamos que você reserve um tempo para experimentar o Rekichizu e aproveitar a comparação das paisagens passadas e presentes do Japão. [Clique aqui para começar](https://rekichizu.jp/en)! Estamos constantemente buscando maneiras de melhorar, então sinta-se à vontade para [nos enviar seus comentários ou sugestões](https://rekichizu.jp/en#contact)!

## Referências

- [「れきちず」のこれまでとこれから - 誰にでもわかりやすい歴史地図を目指して](https://speakerdeck.com/hjmkth/251012-foss4g-japan-rekichizu) _«Rekichizu: passado e futuro — tornando mapas históricos fáceis de explorar para todos»_ (em japonês), apresentado no [FOSS4G 2025 Japan](https://osgeo-jp.github.io/foss4g-2025-japan/) por Hajime Kato e Sorami Shiromizu
- [Modern-style Historical Map Design with QGIS](https://speakerdeck.com/hjmkth/231129-foss4g-asia-2023-kato) _(em inglês)_, apresentado no [FOSS4G ASIA 2023](https://foss4g.asia/2023/) por Hajime Kato

[^1]: A MIERUNE foi fundada pelos três organizadores do [FOSS4G Hokkaido](https://foss4g.hokkaido.jp/). A equipe da empresa também inclui vários [Membros Fundadores da Fundação OSGeo](https://www.osgeo.org/about/charter-members/), e a MIERUNE é [membro organizacional da OSGeo.JP](https://www.osgeo.jp/sponsor). [Toru Mori](https://www.linkedin.com/in/toru-mori-9a4984b/), membro do conselho da MIERUNE, é uma figura-chave no apoio ao movimento FOSS4G global desde seus primórdios, servindo como Representante OSGeo do Capítulo Japonês de 2006 a 2018.
[^2]: A MIERUNE é [patrocinadora oficial do QGIS](https://qgis.org/#sustaining-members) desde 2017 e [membro votante do Grupo de Usuários Nacionais QGIS](https://qgis.org/community/groups/).
[^3]: A MIERUNE é uma importante apoiadora do projeto MapLibre, tornando-se o [primeiro patrocinador do mundo em 2022](https://maplibre.org/news/2022-06-10-mierune-announcement/) (ao lado de empresas como Meta, Microsoft e AWS). Além disso, o engajamento da MIERUNE se estende à governança do projeto, com o CEO [Yasunori Kirimoto](https://www.dayjournal.dev/) e o DT Kanahiro Iguchi sendo ambos [membros votantes do projeto](https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md).

---

_Este artigo também é publicado em cross-post na [DEV Community](https://dev.to/mierune/rekichizu-a-modern-take-on-japans-historical-maps-53gp)._
