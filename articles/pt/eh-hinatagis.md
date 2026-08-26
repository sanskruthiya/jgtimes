---
title: "Caso de uso — Hinata GIS e open-hinata3: o GIS de código aberto ultra-versátil do Japão na prática"
description: "Caso de uso — Hinata GIS e open-hinata3: o GIS de código aberto ultra-versátil do Japão na prática"
date: 2026-01-27
category: [usecase, opensource]
author: "Eita.H"
---

# Visão geral

**Hinata GIS** é um GIS web de código aberto desenvolvido como projeto pessoal por um funcionário de um governo prefeitural japonês.[^1]

É conhecido como um **aplicativo de mapa versátil** que inclui mais de **600 tipos de camadas** provenientes de vários dados abertos e informações estatísticas publicadas no Japão, permitindo aos usuários sobrepô-las livremente e visualizá-las/analisá-las.[^2]

![Captura de tela do OH3 em 26 de janeiro de 2026](/images/articles/eita-h/eh_OH3_image02.webp)
*open-hinata3, acessado em 26 de janeiro de 2026* [^3]

É notável que, embora seja um projeto de desenvolvimento individual, **a versão original «Hinata GIS» foi oficialmente adotada como serviço web pela Prefeitura de Miyazaki**, onde trabalhava o desenvolvedor.[^4]

Posteriormente, o projeto sucessor **open-hinata3 (doravante OH3)** continua sendo desenvolvido pelo mesmo desenvolvedor.

Nos últimos anos, ele atraiu atenção tanto do ponto de vista da inovação técnica quanto do aproveitamento de dados abertos, com desenvolvimentos como o **suporte a tiles vetoriais e a implementação de funcionalidades de agente de IA**.

## Links relacionados
- Versão mais recente ➡️ [**open-hinata3 (OH3)**](https://kenzkenz.jp/oh3/)
- Primeira edição ➡️ [**Hinata GIS**](https://hgis.pref.miyazaki.lg.jp/hinata/)
>Disponível apenas em japonês. A partir de 2026, o open-hinata3 é recomendado para usuários em geral.

# Contexto

**«Hinata GIS»** é um GIS web que **Kenji Ochiai (@kenzkenz)**,[^5] então funcionário de um governo local japonês, começou a desenvolver por interesse pessoal.[^6] [^9]

O desenvolvimento teve início por volta de 2015. O desenvolvedor, vinculado ao departamento de política de informação da Prefeitura de Miyazaki, localizada na região de Kyushu no sul do Japão, o construiu de forma autodidata com o conceito de **«tornar os dados acessíveis a todos»**.[^6] [^1]
O nome **«Hinata» significa «lugar ensolarado»** em japonês e é um termo usado no slogan da Prefeitura de Miyazaki.[^4]

No Japão dos anos 2010, a publicação e o aproveitamento de dados abertos pelo governo nacional e pelos governos locais avançavam rapidamente,[^7] e o Hinata GIS se posiciona como um dos exemplos práticos representativos nascidos dessa tendência.

Posteriormente, em março de 2017, ele conquistou o **grande prêmio do «Concurso de Aplicativos RESAS»** organizado pelo Gabinete do Primeiro-Ministro do Japão, ganhando amplo reconhecimento entre os usuários de GIS e os governos locais japoneses.[^1]

A primeira versão **«Hinata GIS» foi então adotada como mapa web oficial da Prefeitura de Miyazaki**.

![Captura de tela do Hinata GIS em 26 de janeiro de 2026](/images/articles/eita-h/eh_HinataGIS_Image01.webp)
*Hinata GIS no site oficial da Prefeitura de Miyazaki, acessado em 26 de janeiro de 2026* [^4]

Após a adoção oficial, o desenvolvedor criou uma versão modernizada usando tecnologias como tiles vetoriais.

Além disso, por volta de 2024, ele iniciou a implementação de uma nova versão migrando o framework web de OpenLayers para MapLibre GL JS.
Nesse processo, a versão reconstruída sobre MapLibre GL JS foi posicionada como **a terceira versão principal** e batizada de **open-hinata3 (OH3)** pelo próprio desenvolvedor.

A partir de 2026, o OH3 não apenas aumenta o número de camadas, mas também avança em extensões funcionais ambiciosas como as capacidades de **análise por IA**.[^2]

Além disso, o projeto evoluiu para uma comunidade mais ampla, com usuários contribuindo com relatórios detalhados e guias de uso.[^8]

# Características

Desde os anos 2010, várias ferramentas e serviços GIS abertos emergiram no Japão no contexto da expansão dos **dados abertos municipais** e das **comunidades OSS ativas**.[^7]

Entre eles, o Hinata GIS se destaca como exemplo representativo, tendo **conquistado competições**, sido **oficialmente adotado por governos locais** e mantido **mais de 10 anos de desenvolvimento contínuo**, incluindo o desenvolvimento de serviços sucessores.

## Conceito de desenvolvimento

O Hinata GIS foi desenvolvido com o conceito de **«tornar os dados acessíveis a todos»**.[^1]

O desenvolvedor também declara que aspira criar um serviço que permita a muitas pessoas usar o GIS para **finalidades diversas, como o Microsoft Excel**.[^6]

De fato, é ativamente usado não apenas por entusiastas de GIS, mas também por **funcionários de governos locais, professores e topógrafos privados** no Japão.[^8]

Além disso, no sucessor OH3, o conceito de **«ultra-versátil»** é destacado com as seguintes palavras:[^10]
> OH3 reúne mapas, camadas, análises e saídas em um único espaço de trabalho. Não define o uso. Não é reservado para setores específicos. É uma ferramenta para «pessoas que querem pensar olhando para mapas».

Além disso, a **funcionalidade de agente de IA** instalada no OH3 em 2025 é apresentada como **«OH3 × IA que viaja no tempo: um novo diálogo entre você e os mapas»**.[^10]

Isso ilustra um conceito funcional de análise interativa de **informações geográficas com IA usando os diversos conjuntos de dados do OH3 do passado até o presente**, propondo uma nova forma de conceber o **GIS na era da IA**.

![Captura incluindo a funcionalidade de IA](/images/articles/eita-h/eh_OH3_image04.webp)
*Funcionalidade de agente de IA no OH3, acessada em 26 de janeiro de 2026*

## Pontos fortes do OH3

Como o próprio desenvolvedor o denomina «**ultra-versátil**», o maior trunfo do OH3 são seus **mais de 600 tipos de camadas** sem limitação de uso.[^10]

O que ainda fortaleceu esse trunfo é a **funcionalidade de agente de IA** mencionada acima. Isso permite ao OH3 demonstrar **efeitos sinérgicos** ao integrar e analisar transversalmente por IA a massiva informação de camadas do passado até o presente para qualquer localização nacional especificada pelos usuários.

Em outras palavras, o OH3 evoluiu de uma simples ferramenta de visualização de camadas para um sistema de integração e interpretação de dados de forma cronológica e interdisciplinar a partir de locais específicos.

Em seguida, a **simplicidade e a fluidez da operabilidade** também são pontos fortes deste serviço. A interface do OH3 tem um design similar aos GIS web mantidos pelo governo nacional e pelos governos locais do Japão, como o GSI Maps.[^11]

Assim, funcionários de governos locais e professores pouco familiarizados com softwares GIS profissionais podem começar a usá-lo **sem custos de aprendizado adicionais**.

Além disso, sendo o OH3 um projeto de desenvolvimento individual, o desenvolvedor @kenzkenz **comunica frequentemente os métodos de uso e as novas funcionalidades pelas redes sociais**.[^5]

Esse **grande número de pontos de contato com o desenvolvedor** também é atraente. Por conseguinte, alguns usuários se tornaram evangelistas: por exemplo, **o manual de usuário mais detalhado do OH3** foi criado não pelo próprio desenvolvedor, mas por **um escritório de topografia que é usuário**.[^8]

![Manual de usuário do OH3 por um escritório de topografia](/images/articles/eita-h/eh_OH3_image03.webp)
*Manual de usuário do open-hinata3 por um escritório de topografia, acessado em 26 de janeiro de 2026* [^8]

## Funcionalidades

Em janeiro de 2026, a riqueza das funcionalidades do OH3 pode ser apreciada numericamente na tabela a seguir.[^2]

| Item | Valor |
|---|---|
| Total de camadas de dados | 625+ tipos |
| Funções de análise por IA | 10 tipos |
| Funções da caixa de ferramentas | 16 tipos |
| Gráficos estatísticos | 47 tipos |
| Formatos de arquivo suportados | 10+ tipos |
| Camadas de extensão | 47 tipos |

## Funcionalidades distintivas

No OH3, várias funções estão integradas além das funções básicas de operação de mapa web.
A seguir, algumas delas (em janeiro de 2026):

- Exibição multi-tela (até 4 telas divididas) para análise comparativa
- Mais de 625 mapas base e camadas
- Ferramentas de desenho/edição (caneta, linha, polígono, etc. Cálculo automático da área das formas desenhadas, compartilhamento com outros possível)
- Integração de dados em tempo real (previsões meteorológicas, informações de tráfego, etc.)
- Função de criação de relatórios de análise por IA (relatórios automáticos de 10 tipos incluindo prevenção de desastres e ambiente de creche para cada localização)
- Agente de IA
- Compartilhamento do conteúdo das conversas de IA com outros usuários
- Melhoria de imagens por IA
- Compartilhamento de mapas
- Chat em grupo
- Impressão
- Perfil de população
- Memo fotográfico
- Leitura OCR
- Cursor temporal então e agora
- Registro de camadas favoritas
- Exportações de arquivos variados

## Camadas populares

A caixa de ferramentas do OH3 permite consultar as «Top 100 camadas populares».
As 12 camadas mais populares em janeiro de 2026 eram as seguintes:

- Mapa do registro fundiário 2025
- Fotos recentes (fotografias aéreas)
- Mapa nacional de números de parcela
- Mapa do registro fundiário 2025 - Pontos de controle
- Pontos de controle de quarteirão
- Mapa do registro fundiário 2025 - Quadro de mapa
- Pontos de controle de base
- Fotografias aéreas 1974-78 (nacional)
- Vetor GSI
- Pirâmide populacional do censo 2020
- Limites de bairros 2020
- Aldeias do final da era Edo (século XIX)

## Principais aplicações

O OH3 é um GIS «**ultra-versátil**» em conformidade com o conceito acima, e suas aplicações não se limitam a usos específicos.

Entre as citadas no site oficial estão: **prevenção de desastres, imóveis, levantamentos, planejamento urbano, educação, pesquisa e lazer**.[^10]

- Pessoas que desejam explorar mapas de forma descontraída: comparação de topografia, estrutura urbana, mapas históricos e fotografias aéreas
- Pessoas que usam mapas no trabalho: operações diárias em governos locais, imóveis, construção, infraestrutura e levantamentos
- Pessoas que desejam aprender/ensinar: materiais pedagógicos para aulas, workshops e treinamentos
- Profissionais: trabalho especializado em topografia, levantamento, imóveis e vários tipos de consultoria

Além disso, observando as **camadas populares** mencionadas, nota-se que camadas relacionadas a **topografia, população e fotografias aéreas históricas** têm frequência de uso particularmente alta entre os usuários.

Deduz-se que os casos de uso são especialmente frequentes em **levantamentos topográficos, prática de planejamento urbano, ensino de geografia/prevenção de desastres e navegação casual de mapas**.

# Perspectivas futuras e desafios

À medida que esses dados e funcionalidades se acumulam, o OH3 torna-se cada vez mais atraente. O OH3 funciona como um **ponto de agregação de dados abertos**, um **campo de experimentação do GIS** e uma **plataforma que promove a interação entre dados e usuários**.

Em particular, a **combinação de IA e GIS ultra-versátil** é inovadora, e ao permitir que diversos usuários a explorem livremente além das aplicações GIS tradicionais, espera-se descobrir **possibilidades inesperadas do GIS**.

Por outro lado, o desenvolvedor mencionou com franqueza nas suas comunicações os desafios próprios do desenvolvimento individual.
Entre eles estão a solidão e a dificuldade de manter a motivação continuando o desenvolvimento sozinho por um longo período, o volume de respostas às solicitações, e os problemas de custos como as despesas operacionais do servidor.[^6]

Como em muitos projetos de código aberto, **os incentivos e a sustentabilidade serão desafios difíceis**.

# Lições aprendidas — Um ponto de inflexão para o GIS de código aberto

O Hinata GIS e o OH3 podem ser considerados um dos exemplos mais representativos do aproveitamento de dados abertos no Japão, com este sistema desenvolvido individualmente sendo oficialmente adotado por um governo local e mantendo seu desenvolvimento por mais de 10 anos.

A força motriz por trás disso foi a **paixão do desenvolvedor** em persistir no desenvolvimento individual. A mentalidade de desenvolvimento individual muito flexível permitiu **ideias inovadoras** como a aplicação de IA ao GIS «ultra-versátil» e a **prototipagem rápida**, mas ao mesmo tempo, sua **sustentabilidade permanece um desafio constante**.

Em suma, a trajetória do Hinata GIS e do OH3 mostra que as tendências de dados abertos no Japão estão passando da etapa de «**publicar dados**» para a etapa de «**reconsiderar quem usa, alimenta e sustenta o ecossistema de dados, e como**».

Quem aproveita e como a paixão do desenvolvimento individual, e em que papéis a sustenta? Como o governo nacional e os governos locais, as empresas e as comunidades devem cada um se envolver?
A partir de 2026, o GIS de código aberto pode estar em uma encruzilhada onde tais questões se colocam.

# Referências

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
