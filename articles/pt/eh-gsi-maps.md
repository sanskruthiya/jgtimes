---
title: "GSI Maps: o serviço oficial de mapeamento web do Japão"
description: "GSI Maps: o serviço oficial de mapeamento web do Japão"
date: 2025-10-19
category: [service, government]
author: "Eita.H"
thumbnail: NA
---

# Visão geral

**GSI Maps** é o aplicativo oficial de mapeamento web desenvolvido e operado pela **Autoridade de Informações Geoespaciais do Japão (GSI)**.

Ele fornece informações abrangentes sobre o território nacional do Japão capturadas pela GSI, incluindo mapas topográficos, fotografias aéreas, mapas de altitude, classificações geomorfológicas e informações sobre desastres. A plataforma também oferece funcionalidades para criar perfis topográficos, comparar fotografias históricas e atuais, e visualização em 3D.[^1] [^2]

![Imagem do GSI Maps em 19/10/2025](/images/articles/eita-h/eh_GSImaps.webp)
GSI Maps, acessado em 19 de outubro de 2025 [^2]

# Histórico de desenvolvimento

Por volta do ano 2000, a Autoridade de Informações Geoespaciais do Japão vislumbrava **«uma sociedade onde as informações geoespaciais possam ser acessadas a qualquer hora e em qualquer lugar pela Internet, permitindo que todos compartilhem informações»**.[^3]

Para realizar essa visão, **«o Sistema Web de Cartografia do Território Nacional Digital»** (ou Portal do Território Nacional Digital) foi desenvolvido em 2003. O sistema da época era fornecido como ferramenta de visualização de mapas para o Internet Explorer (IE), projetado para integrar e exibir as informações detidas pela GSI.[^4]

Posteriormente, enquanto o Google Maps e outros sistemas de mapeamento web privados se espalharam rapidamente no final dos anos 2000, a GSI assumiu o papel de preencher as lacunas que os sistemas de empresas privadas não conseguiam cobrir.

Concretamente, com o conceito de **fornecer serviços mais adequados aos governos locais e às agências nacionais**, a GSI lançou experimentalmente o sistema sucessor **«Digital National Land Web.NEXT»** em 2012. As especificações deste sistema sucessor também foram influenciadas pelo Grande Terremoto do Japão Oriental de 2011. Por exemplo, após o terremoto, a demanda por informações de altitude aumentou em razão das preocupações com tsunamis e inundações, levando ao aprimoramento das funções de exibição de informações topográficas e de altitude.[^3]

Nesse contexto, em outubro de 2013, **«Digital National Land Web.NEXT»** foi renomeado para **«GSI Maps»** e oficialmente lançado.[^5]

Em 2022, a GSI começou a fornecer experimentalmente **«tiles vetoriais otimizados para GSI»** no GitHub.[^13] As direções futuras incluem a implementação da exibição e distribuição de tiles vetoriais, bem como a promoção da operação estável, da implantação distribuída, da modularização das funções e do uso de dados de altitude de alta precisão.[^6]

Do ponto de vista técnico como mapa web, o sistema foi aprimorado em 2010 para ser baseado em OpenLayers.[^7]
Posteriormente, nas melhorias implementadas no ano fiscal de 2014, a configuração foi alterada para ser baseada em LeafletJS a fim de obter um sistema mais leve.[^8]

# Características do GSI Maps

Uma característica importante do GSI Maps é que se trata de um mapa web exibindo a **«representação oficial do Japão»** fornecida pelo Japão como nação.
No entanto, ele **NÃO inclui informações comerciais como lojas**. Isso pode ser visto como resultado de uma diferenciação de funções com os mapas web privados, conforme esclarecido no histórico de desenvolvimento mencionado acima.

O GSI Maps distribui principalmente as seguintes informações:[^7]
- Fotografias aéreas
- Mapas de base incluindo formas de edifícios e estradas
- Mapas temáticos como mapas codificados por cores com base no ambiente e nas condições naturais
- Informações sobre desastres
- Dados de altitude

As principais funções do mapa web incluem exibição do mapa, busca de localização, comparação em tela dupla, desenho, medição e exibição 3D.
Além disso, como sistema de mapeamento web, a GSI também fornece **o serviço «GSI Tiles»** para distribuição de dados de tiles.

A interface do usuário do GSI Maps pode parecer excessivamente tradicional para aqueles que preferem mapas web modernos. Essa interface do usuário também pode ser vista como resultado do desenvolvimento voltado para os governos locais.

# Uso e aplicações do GSI Maps

O acesso ao GSI Maps tem aumentado regularmente nos últimos anos, com **mais de 8 bilhões de tiles** distribuídos por mês em 2021.[^6]

O caso de uso específico mais proeminente do GSI Maps é seu uso como **mapas de informações relacionadas a desastres** pelos governos locais.[^9]

Além disso, há muitos casos em que o GSI Maps é simplesmente usado como mapas de fundo para vários aplicativos de mapeamento municipais. Os mapas do território nacional contêm muitos elementos sensíveis como reivindicações territoriais e nomes oficiais. Nessa perspectiva, os mapas fornecidos pelo governo podem ser usados com segurança como mapas de fundo, o que representa uma vantagem significativa para os governos locais.

O GSI Maps também recebe acesso substancial de usuários não governamentais. Em razão de funcionalidades como mapas de altitude de alta precisão e a capacidade de comparar fotografias aéreas de diferentes épocas, há um número considerável de entusiastas no Japão.
Por exemplo, o **«Fan Club do GSI Maps»**, uma comunidade de voluntários, conta com mais de 4.000 seguidores nas redes sociais a partir de 2025.[^10] [^11]
Assim, o GSI Maps pode ser qualificado como um serviço amplamente apreciado não apenas para fins profissionais por funcionários municipais, mas também para fins de lazer pelos cidadãos em geral.
Além disso, existe a **«Rede de Parceiros GSI Maps»** como espaço oficial de troca de informações e opiniões sobre o GSI Maps.[^12]
A existência dessas comunidades fornece uma base sólida para promover o uso do GSI Maps e dos GSI Tiles.

# Desafios futuros

Como mencionado acima, o GSI Maps promove a implementação de tiles vetoriais, a operação estável, a implantação distribuída, a modularização das funções e o uso de dados de altitude de alta precisão.[^6]
Tecnicamente, a partir de 2025, o sistema é baseado em LeafletJS, mas considerando a futura implementação de tiles vetoriais e as atualizações de versão principal do LeafletJS, novas melhorias podem ser implementadas em breve.
Nessas circunstâncias, a interface de usuário tradicional projetada para governos locais também pode precisar de atualizações mais amigáveis nas próximas versões.
Enquanto os serviços de mapeamento privados passam por evolução rápida, a atualização dos sistemas existentes representa uma tarefa difícil. Ajustes cuidadosos serão necessários com base em entrevistas com diferentes tipos de usuários, incluindo governos locais, setor privado e particulares.

# Referências

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
