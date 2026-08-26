---
title: "Caso de uso — Mini Tokyo 3D: um gêmeo digital do transporte público de Tóquio"
description: "Caso de uso de dados geoespaciais — Introdução ao Mini Tokyo 3D: um gêmeo digital do transporte público de Tóquio"
date: 2025-11-06
category: [usecase, opensource]
author: "Eita.H"
thumbnail: NA
---

# Visão geral

Desde os anos 2010, diversas informações geoespaciais foram disponibilizadas como dados abertos no Japão, principalmente pelo governo nacional e pelos governos locais.
Este artigo apresenta o **«Mini Tokyo 3D»** como caso de uso de aplicativos de mapa que aproveitam esses dados abertos.

**Mini Tokyo 3D** é um aplicativo de gêmeo digital que visualiza o estado operacional em tempo real do transporte público de Tóquio e arredores.[^1]
Ele exibe os movimentos de trens e ônibus de Tóquio em um mapa 3D intuitivo.

A partir de 2025, ele suporta **quatro idiomas**. Convidamos você a descobrir este **gêmeo digital do transporte público de Tóquio** pelo seguinte site.

- Site ao vivo: [Mini Tokyo 3D](https://minitokyo3d.com/)
- Guia do usuário: [Visão geral do Mini Tokyo 3D](https://minitokyo3d.com/docs/master/user-guide/overview.html)

![Imagem do MiniTokyo3D em 04/11/2025](/images/articles/eita-h/eh_MiniTokyo3D.webp)
Imagem do MiniTokyo3D, acessada em 4 de novembro de 2025 [^1]

# Contexto do desenvolvimento

O Mini Tokyo 3D foi desenvolvido pelo engenheiro de software **Akihiko Kusanagi**.[^2]
O desenvolvimento foi iniciado em 2019 pelo **«Concurso de Dados Abertos de Transporte Público de Tóquio»**, uma competição pública organizada pelo Centro de Dados Abertos de Transporte Público.[^2] [^7]

Um dos objetivos deste concurso era **«permitir que visitantes estrangeiros naveguem no transporte público de Tóquio durante os Jogos Olímpicos de Tóquio»**.[^3]
No entanto, o desenvolvedor declarou: «Pessoalmente, eu queria criar um gêmeo digital interessante, e estava procurando bons dados para esse fim quando descobri este concurso».[^3]

Esse desenvolvimento pode, portanto, ser caracterizado como um projeto que teve início quando **os interesses pessoais do desenvolvedor se alinharam com os dados disponíveis**, em vez de ser motivado por necessidades comerciais ou sociais.

Como resultado, o aplicativo conquistou o grande prêmio deste concurso e posteriormente atraiu ampla atenção por meio de eventos como os lockdowns relacionados à COVID-19 e os Jogos Olímpicos de Tóquio.[^4]

# Características do aplicativo

Como é amplamente conhecido, a rede de transporte público do Japão é projetada com precisão de classe mundial.
Em Tóquio, **mais de 40 operadores ferroviários gerenciam mais de 140 linhas**. Nos horários de pico, os trens circulam **a cada 1 minuto e 50 segundos**, totalizando **40 milhões de passageiros por dia**.[^2]
O Mini Tokyo 3D recria essa complexa rede de transporte com fluidez operacional notável. É verdadeiramente um aplicativo que pode ser qualificado de **«gêmeo digital de Tóquio»**.

As principais características são as seguintes:

🚊 **Visualização do transporte em tempo real**
- Visualização 3D em tempo real das posições e das informações de atraso de trens, ônibus e aviões de Tóquio e arredores.
- Implementação de lógica própria para corrigir a defasagem entre os dados distribuídos e os movimentos reais dos trens, melhorando o desempenho em tempo real.[^3]
- Renderização de animações fluidas da operação simultânea de mais de 2.200 trens[^3] nos horários de pico.

🎨 **Design visual e interface**
- Garantia de visibilidade com objetos 3D simples codificados por cores de acordo com a linha.
- As redes de metrô são exibidas por meio de troca de camadas para evitar concorrência visual com as redes de transporte na superfície.
- Coloração dinâmica refletindo o dia/noite, o clima e os eventos (como fogos de artifício).
- Paisagem urbana realista com formas de edifícios em 3D.

🌐 **Integração e acessibilidade**
- Integração com imagens de câmeras ao vivo (YouTube) para verificar a correspondência com o mundo real.
- Suporte a 4 idiomas (japonês, inglês, chinês, coreano). Além disso, a interface do usuário é compatível com tailandês, nepalês, português, francês, espanhol e alemão.[^1]

Ao combinar esses elementos, o Mini Tokyo 3D tornou-se **um aplicativo de gêmeo digital altamente sofisticado** que permite aos usuários vivenciar uma cidade em movimento em tempo real.

# Características técnicas

O Mini Tokyo 3D é construído sobre **Mapbox GL JS, combinado com Three.js e deckgl**.[^2]
(Durante a fase de desenvolvimento inicial, protótipos foram criados com D3.js e LeafletJS.)[^3]

Os dados em tempo real são obtidos combinando as APIs fornecidas pelo **Centro de Dados Abertos de Transporte Público (ODPT API)**[^5] e vários dados no formato **GTFS (General Transit Feed Specification)**.[^6]

Além disso, uma lógica própria foi implementada para corrigir os atrasos nas atualizações de dados e as desvios de trajetória, maximizando o desempenho em tempo real.[^3]

Há também inovações na representação visual, onde **os objetos em movimento são simplificados como caixas codificadas por cores** para reduzir a carga de renderização enquanto facilita a compreensão intuitiva.

Para o mapa de fundo, o OpenStreetMap foi inicialmente utilizado, mas foi substituído pela **Zenrin (a empresa de cartografia mais famosa do Japão) por meio da integração MapBox**.[^2]

Assim, o Mini Tokyo 3D realiza um **equilíbrio entre design e otimização técnica**, tornando-o um excelente modelo de referência para o desenvolvimento de aplicativos de mapa e gêmeos digitais no Japão.

# Casos de uso

O Mini Tokyo 3D pode ser usado de forma versátil como ferramenta para visualizar as operações de transporte público em tempo real.
Se usos práticos como planejamento de rotas e verificação do estado de atrasos são possíveis, os aplicativos dedicados ao planejamento de rotas são amplamente utilizados no Japão. Assim, o uso deste aplicativo para planejamento de rotas provavelmente será limitado.

Este aplicativo tem antes um grande valor **como vitrine para observar os movimentos do transporte público de Tóquio**.
Devido ao seu alto nível de completude como gêmeo digital, os usuários podem obter **uma compreensão panorâmica dos movimentos urbanos**.

Isso pode ser descrito como uma **ferramenta de promoção da compreensão urbana** que visualiza como Tóquio como cidade é precisamente sustentada por uma infraestrutura de transporte de alta densidade.

# Principais aprendizados deste caso

O desenvolvimento do Mini Tokyo 3D pode ser considerado como um dos **exemplos bem-sucedidos da política de dados abertos do Japão dando frutos**.

Este aplicativo nasceu de um concurso público para promover o aproveitamento de dados abertos e cresceu até se tornar uma realização de reconhecimento mundial por um desenvolvedor individual.
É um caso simbólico que mostra que **publicar dados pode motivar a participação criativa individual**.

Os quatro pontos a seguir merecem destaque especial:

1. **🤝 Compatibilidade entre dados abertos e projeto de desenvolvimento individual**
   Esta realização demonstra que os indivíduos podem reconstruir livremente os dados fornecidos por governos e autoridades locais para criar valor social.

2. **💡 Processo de desenvolvimento movido por interesses pessoais**
   Embora as necessidades sociais ou comerciais sejam importantes, elas podem não ser essenciais para desenvolver tais aplicativos. Para promover o uso de dados abertos e gerar impacto social, alinhar os interesses individuais com os dados disponíveis pode ser igualmente importante.

3. **🎯 Fusão de design e tecnologia**
   Este aplicativo é sustentado por excelentes conceitos de design e a tecnologia para realizá-los. Isso permite a realização de um gêmeo digital para promover a compreensão das cidades.

4. **📚 Modelo de implementação técnica**
   O código deste aplicativo é publicado como código aberto, servindo de modelo para o aproveitamento de dados similares.

Como neste caso, existem muitos projetos no Japão onde indivíduos usam dados abertos para redescobrir e compartilhar cidades.

Os dados abertos estão se tornando não apenas um meio de divulgação de informações pelo governo, mas **um catalisador para que os cidadãos compreendam profundamente as cidades em que vivem**.

# Sobre o GTFS Box

Por fim, como versão estendida deste aplicativo, apresentamos um aplicativo chamado **GTFS Box**.
É um projeto que visualiza as redes de transporte público como ônibus em várias cidades do mundo.

Continuaremos acompanhando os desenvolvimentos futuros.

Site ao vivo: [GTFS Box](https://nagix.github.io/gtfs-box/)

# Referências

[^1]: https://minitokyo3d.com/docs/master/user-guide/overview.html
[^2]: https://blog.mapbox.com/mini-tokyo-3d-a-real-time-3d-map-of-public-transportation-in-tokyo-1f19fb207632
[^3]: https://internet.watch.impress.co.jp/docs/column/chizu2/1226660.html
[^4]: https://internet.watch.impress.co.jp/docs/column/chizu3/2054836.html
[^5]: https://developer.odpt.org/
[^6]: https://www.gtfs.jp/
[^7]: https://www.odpt.org/overview/
