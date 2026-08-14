---
title: "れきちず：モダンデザインで蘇る日本の歴史地図"
description: 'れきちずは、歴史地図をモダンなデザインで閲覧できるウェブサービスです。現在は江戸時代後期（1800〜1840年頃）の地図が公開・定期的に更新されています。'
date: 2025-11-14
category: [project, opensource]
author: 'Sorami Shiromizu'
thumbnail: '/images/articles/sorami-shiromizu/rekichizu/thumbnail.png'
---

[![れきちずサムネイル](/images/articles/sorami-shiromizu/rekichizu/thumbnail.png)](https://rekichizu.jp/)

[れきちず](https://rekichizu.jp/) は、**モダンなデザインで歴史地図を閲覧**できるウェブサービスです。

現在は**江戸時代後期（1800〜1840年頃）** の地図が公開・定期的に更新されています。

プロジェクトは2023年8月に公開されました。2025年11月には**英語版・ひらがな版**もリリースされ、より幅広い方々がこれらの歴史地図を楽しめるようになりました。

基盤となるデータ（地図タイルとスタイル）は、[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja) ライセンスのもとで**オープンデータ**として提供されています。

詳細は[公式サイト](https://rekichizu.jp/)をご覧ください。

_（注：[著者](https://sorami.dev/)はれきちずプロジェクトのコントリビューターです。）_

## できること

![れきちず - 地図表示例](/images/articles/sorami-shiromizu/rekichizu/feature-1.webp)

れきちずは、古地図をもとに独自に大規模なデジタルデータを丁寧に作成し、そのデータをオリジナルのモダンデザインで表現することで、日常的に使うウェブ地図サービスと同様の感覚で操作できるインタラクティブな地図サービスを実現しています。

場所の検索は、日本語・ひらがな・英語に対応しています。左上の虫眼鏡アイコンをクリックすると、組み込みのシンプルなジオコーディングサービスで地名を検索できます。

![れきちず - 3D地形表示例](/images/articles/sorami-shiromizu/rekichizu/feature-2.webp)

地形を3Dで表示することもできます。右下の山のボタンを押すと、地図を立体的にレンダリングできます。

![れきちず - 比較モード（分割）の例](/images/articles/sorami-shiromizu/rekichizu/feature-3.webp)

![れきちず - 比較モード（スコープ）の例](/images/articles/sorami-shiromizu/rekichizu/feature-4.webp)

歴史地図を現代の地図や航空写真と直接比較することもできます。左右分割（並列・スプリット）、スコープ、オーバーレイなど複数の比較方法が用意されており、ある場所が時代とともにどのように変化してきたかを理解するための、楽しく強力なツールとなっています。

![れきちず - GPS機能の例](/images/articles/sorami-shiromizu/rekichizu/feature-5.webp)

れきちずは、歴史的なエリアを散策する際の理想的なお供でもあります。GPS機能を有効にすると、現在地が江戸時代にどのような場所であったかを一目で確認でき、普段の散歩がまるでタイムトラベルのような体験に変わります。

## れきちずの歩み

れきちずは、グラフィックデザイナーの[Hajime Kato](https://chizutodesign.com/)氏（SNSでは[@chizutodesign](https://x.com/chizutodesign)として広く知られる）の個人的な情熱から生まれたプロジェクトです。Kato氏は地図やデータビジュアライゼーションへの独創的なアプローチで知られており、2023年にはIKAROS出版から[『地図とか路線図とか@chizutodesign』](https://books.ikaros.jp/book/b10080873.html)を出版しています。

### 始まり：SNSで拡散した江戸風地図

歴史と地図に深い関心を持つKato氏は、古地図は魅力的である一方、その複雑さから現代のユーザーには読み取りにくいという課題を見出していました。

2019年、この課題に触発されたKato氏は、Googleマップ風の江戸時代地図の静止画像を作成してTwitter（現X）に投稿しました。この画像はたちまち大きな反響を呼び、当時約4万いいねを獲得するほどの話題となりました。なお、この初期バージョンはAdobe Illustratorのみで作成された単一の静止画像でした。

![Googleマップ風の歴史地図](https://cdn.myportfolio.com/ac25a482-e8dc-40bb-82f3-d586ec7c6f47/3e1b3a11-2b01-4a3c-b8f7-cbafee9c2512_rw_1920.jpg?h=e149025d6d253def164a0c99fb7aa726)

_図：[地図とかデザインとか / chizutodesign - 江戸時代のGoogleマップ風地図](https://chizutodesign.com/gmaps-edo)_

### ウェブ地図化と一般公開へ

この静止画像をインタラクティブなウェブサービスへと発展させるため、Kato氏はデジタルデータの作成という労力を要するプロセスに着手しました。国土地理院が提供する[地理院地図](https://maps.gsi.go.jp/)を参照しながらデータの補正・調整を行い、実際の描画とデータ作成には無料・オープンソースの地理情報システム（GIS）ソフトウェアである[QGIS](https://qgis.org/)を使用しました。

2023年8月、Kato氏はれきちずの最初の一般公開版をリリースしました。その反響は即座かつ圧倒的なもので、翌日には100万ページビューを達成し、ウェブメディア、全国紙、テレビ番組でも取り上げられました。

### 株式会社MIERUNEとともに

当初の成功を受けながらも、主にデザイナーであるKato氏はサービスを拡張するためのソフトウェアエンジニアリングのスキルとリソースに課題を感じていました。

社内での協議を経て、Kato氏が在籍する地理空間情報の専門企業[株式会社MIERUNE](https://www.mierune.co.jp/)が2024年5月に正式にプロジェクトを引き継ぎました。

MIERUNEはこのプロジェクトに最適な存在でした。同社はFOSS4G（地理空間情報のためのフリー・オープンソースソフトウェア）コミュニティから生まれ、積極的に貢献しているという独自の特徴を持っています[^1]。この背景から、OSSや必ずしも営利目的ではないプロジェクトへの親和性が高く、Kato氏自身も2022年にFOSS4Gカンファレンスで登壇したことがきっかけでMIERUNEに入社しています。

それ以降、Kato氏とMIERUNEチームはれきちずの機能を共同で拡張し、地図のベクトルタイル生成、ジオコーディング、比較機能、国際化（i18n）などの主要機能を実装してきました。2025年11月には英語版・ひらがな版もリリースされ、より広い国際的なユーザーが歴史地図を楽しめるようになりました。

### 受賞歴

れきちずへの献身的な取り組みにより、Kato氏はすぐに業界から高い評価を受けました。主な受賞歴として、[デジタルコンテンツ・オブ・ザ・イヤー'23 / 第29回AMD Award 江波戸昭賞（新人賞）](https://amd.or.jp/pressrelease/2024/2024_0215_info.html)、および[2024年デジタルアーカイブ産業賞 奨励賞](https://dapcon.jp/news/award_2024/)を受賞しています。

## コラボレーション

公開以降、れきちずは積極的に外部機関とのコラボレーションを展開してきました。

### 人文学オープンデータ共同利用センター（ROIS-DS CODH）

![人文学オープンデータ共同利用センターとのコラボレーション - 江戸主要街道データセットおよび「江戸切絵図」町屋敷エリアデータセット](/images/articles/sorami-shiromizu/rekichizu/collaboration-1.webp)

2025年、[人文学オープンデータ共同利用センター（ROIS-DS CODH）](https://codh.rois.ac.jp/)との協働により、江戸時代の主要街道約7,700km分のデータを作成しました。このデータセットはGIS形式でダウンロード可能です。詳細は[こちら](https://codh.rois.ac.jp/historical-gis/edo-road/)をご覧ください。

2024年には、同センターとの協働により、「江戸切絵図」全29枚から町屋敷エリアを抽出しました。このデータはれきちず上に公開されています（地図上では薄い茶色で着色されたエリア）。データセットはGIS形式でダウンロード可能です。詳細は[こちら](https://codh.rois.ac.jp/edo-maps/rekichizu/)をご覧ください。

このコラボレーションの技術的・学術的な詳細については、[FOSS4G 2024 Japan](https://www.osgeo.jp/events/2024-2/foss4g-2024-japan/coreday) での共同発表資料をご参照ください：[『江戸ビッグデータのオープン化：「れきちず」を活用した歴史的地理情報基盤に向けて』](https://agora.ex.nii.ac.jp/~kitamoto/research/publications/foss4g24-ppt.pdf)（[Asanobu Kitamoto](https://agora.ex.nii.ac.jp/~kitamoto/index.html.ja)氏（国立情報学研究所）とHajime Kato氏による共同発表）

### 小説「札幌誕生」

![書店に並ぶ小説「札幌誕生」](/images/articles/sorami-shiromizu/rekichizu/collaboration-2.webp)

![「札幌誕生」特設サイト - 地図](/images/articles/sorami-shiromizu/rekichizu/collaboration-3.webp)

Yoshinobu Kadoi氏による小説[「札幌誕生」](https://www.kawade.co.jp/np/isbn/9784309039480/)（[河出書房新社](https://www.kawade.co.jp/np/index.html)刊）とのコラボレーションとして、れきちずは江戸時代後期から昭和にかけての札幌の地図と特設サイトを制作しました。詳細は[こちら](https://sapporo-tanjo.rekichizu.jp/)をご覧ください。

## れきちずの作り方

では、れきちずのような歴史ウェブ地図は実際どのように作られているのでしょうか。それには複数の分野にわたる膨大な努力が必要です。このセクションでは、コアデータの作成、独自の地図スタイルのデザイン、オープンソースソフトウェアの活用、そして国際化機能の実装について詳しく解説します。

### データ

すべてのデータ作成は、無料・オープンソースのGISソフトウェアであるQGISを使用して行われています[^2]。

基本的なプロセスは、現代の地理院地図の上に古地図や歴史的な文献を重ね合わせ、道路・海岸線・POI（スポット情報）といった歴史的情報をデジタルでトレース・描画することです。

![全国各地の図書館を訪問し、大量の資料を収集する様子](/images/articles/sorami-shiromizu/rekichizu/making-1.webp)

必要な参考資料の多くはデジタル図書館では入手できないため、Kato氏は全国各地の図書館を訪れ、実物の資料を収集してきました。

現時点では、プロジェクトが使用する参考資料は400点以上にのぼります。[全リストは公式サイト](https://rekichizu.jp/#references)で確認できます。これらの資料をもとに作成された道路の総延長は4万km以上、POIの数は6,100件を超えています。

現在も、データ作成はKato氏が一人で担当しています。全国規模の初期データ公開には2年を要しており、プロジェクトは現在も進行中です。

### デザイン

![れきちずの地図デザイン例](/images/articles/sorami-shiromizu/rekichizu/making-2.webp)

れきちずは、歴史的な雰囲気を視覚的に伝えながら、現代的な読みやすさを保つことを目指した、独自のオリジナル地図デザインを採用しています。特定の色調やテクスチャを使うことで時代感を演出しており、とくに道路は苔むした石畳をイメージした色彩で表現されています。また、商業地、寺社境内、武家屋敷、緑地といった様々な歴史的土地利用を明確に区別するデザインとなっています。

![れきちずのオリジナルアイコン](/images/articles/sorami-shiromizu/rekichizu/making-3.webp)

スポットを示すアイコンはすべてオリジナルデザインで、江戸時代の歴史的なランドマークを表現しています。関所、宿場、城、商家、茶屋、橋などのカスタムアイコンが用意されています。

![れきちずのためにデザインされたオリジナルのOpenStreetMapスタイル](/images/articles/sorami-shiromizu/rekichizu/making-4.webp)

さらに、視覚的に統一感のある体験を実現するため、[OpenStreetMap](https://openstreetmap.org/)（OSM）のデータを使用した現代地図のスタイルも、れきちずの歴史地図の美観・カラーパレットに合わせて丁寧にカスタマイズされています。

### ソフトウェア

インタラクティブなウェブサービスの実現には、MIERUNEチームの専門的な技術力が活かされています。

コアとなる地図描画エンジンには、強力なオープンソースのウェブ地図ライブラリ[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)を使用しています[^3]。フロントエンドフレームワークには、MIERUNEが全社的に採用している[Svelte](https://svelte.dev/)を使用しています。

この環境で効率的にインタラクティブな地図を構築するため、れきちずではMIERUNEのメンバーである[Taku Fukada](https://github.com/ciscorn)氏が作成したオープンソースライブラリ[Svelte MapLibre GL](https://svelte-maplibre-gl.mierune.dev/)を活用しています。このライブラリにより、Svelteのリアクティブな特性を活かした地図の作成が容易になっています。地図の比較機能は、[Svelte MapLibre GL のSide by Sideサンプル](https://svelte-maplibre-gl.mierune.dev/examples/side-by-side)（[react-map-gl](https://visgl.github.io/react-map-gl/examples/maplibre/side-by-side)のコンセプトに着想を得たもの）を参考に実装されました。

比較地図での現在地マーカーを同期させるため、チームは独自のOSSツール[maplibre-gl-manual-geolocate](https://github.com/MIERUNE/maplibre-gl-manual-geolocate)を開発しました。このコントロールは、ブラウザのジオロケーションAPIを使わずに任意の座標にユーザー位置マーカーを表示することができます。

ホスティングには[Cloudflare Workers](https://workers.cloudflare.com/)（以前は[AWS Amplify](https://aws.amazon.com/amplify/)）を利用しています。

技術的な実装の詳細に興味のある方は、以下の記事・発表資料をご参照ください。

- [現代風歴史マップ「れきちず」フロントエンドのウラとオモテ](https://speakerdeck.com/hjmkth/240824-frontendo-kato-iguchi)（[Frontend Conference Hokkaido 2024](https://www.frontend-conf.jp/2024) にて、Hajime Kato氏と[Kanahiro Iguchi](https://spatialty.io/)氏が発表）
- [MapLibre GL JS を Svelte の世界で快適に使うためのライブラリを作りました](https://qiita.com/ciscorn/items/6f97f681f31cafe513bd)（Taku Fukada氏）
- [maplibre-gl-manual-geolocate: 任意の場所を「現在地」にするMapLibre GL JSライブラリ](https://zenn.dev/mierune/articles/a30cf312409119)（Sorami Shiromizu氏）

### 国際化

れきちずは、元来の日本語に加え、現在は[ひらがな](https://ja.wikipedia.org/wiki/%E3%81%B2%E3%82%89%E3%81%8C%E3%81%AA)（日本語の表音文字）と英語の2つのロケールに対応しています。この国際化（i18n）の取り組みは、ウェブアプリケーションと基盤となる地図データの両面で実施されました。

ウェブアプリケーションのi18n機能には、専用ライブラリの[Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)を使用しています。

地図データについては、地名を各ロケール向けに変換・翻訳するために高度な技術を活用しました。データ量が膨大であることから、ルールベースアプローチとLLM（[OpenAI API](https://openai.com/api/)）を組み合わせた自然言語処理（NLP）技術を活用しました。この手法は半自動処理として非常に効果的で、最終的な手動修正の作業量を大幅に削減することができました。

この技術的プロセスの詳細については、以下の記事をご参照ください：[LLMを用いた地名のひらがな・英語化と、Paraglide JSによるi18n: モダンな歴史地図「れきちず」の事例](https://zenn.dev/mierune/articles/f7c446995e445f)（Sorami Shiromizu氏）

現代地図（OSM）スタイルの各ロケール対応では、OSMの詳細なタグシステムを活用しています。

- ひらがな表記には、[ja-Hira](https://wiki.openstreetmap.org/wiki/Key:name:ja-Hira)（[BCP 47](https://www.rfc-editor.org/info/bcp47)準拠）および従来から使われている[name:ja_kana](https://wiki.openstreetmap.org/wiki/Key:name:ja_kana)を使用しています。
- 英語・ローマ字表記には、[name:en](https://wiki.openstreetmap.org/wiki/Key:name:en)、[ja-Latn](https://wiki.openstreetmap.org/wiki/Key:name:ja-Latn)（BCP 47準拠）、および従来の[name:ja_rm](https://wiki.openstreetmap.org/wiki/JA:Key:name:ja_rm)を使用しています。

なお、OSMのすべての地物で全ロケールのデータが揃っているわけではありませんが、OSMはオープンなプラットフォームのため、不足している情報はどなたでも追加・修正できます。

最後に技術的な補足として、チームは当初、現代の OpenStreetMap スタイルに [LINE Seed フォント](https://seed.line.me/index_en.html)を使用していました。しかし、このフォントには[長音記号](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%AF%E3%83%AD%E3%83%B3)（「Tōkyō」のような長母音を示す記号）が含まれておらず、英語のOSMデータの一部にこの記号が使われていることがわかりました。そのため、OSMの英語スタイルのフォントを[Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)に変更し、正しいレンダリングを実現しました。

## れきちずのこれから

れきちずプロジェクトは継続的な開発によって成長を続けており、データ・機能の両面でさまざまな拡張のアイデアが検討されています。

![れきちずの将来構想 - POI情報](/images/articles/sorami-shiromizu/rekichizu/future-1.webp)

最初の大きな構想は、POI（スポット情報）の本格的な充実です。この機能では、地点をクリックすると詳細情報が表示され、浮世絵などの歴史的な画像も合わせて閲覧できるようになる予定です。

![れきちずの将来構想 - ルート検索](/images/articles/sorami-shiromizu/rekichizu/future-2.webp)

歴史的なルート案内機能（ルート検索）も検討されています。現代のウェブ地図では徒歩が基本ですが、この機能では馬、駕籠、飛脚といった時代に合わせた移動手段を組み込み、歴史をより身近に体感できる独自の体験を提供する予定です。

![れきちずの将来構想 - 複数時代のデータ](/images/articles/sorami-shiromizu/rekichizu/future-3.webp)

プロジェクトの長期的な目標は、現在の江戸時代後期に留まらず、多層的な歴史地図へと発展することです。平安、戦国、明治、大正、昭和といった、より広い時代範囲の日本の歴史を段階的にカバーすることが最終目標です。

![れきちずの将来構想 - さらなるコラボレーション（画像：旧中山道の街並み）](/images/articles/sorami-shiromizu/rekichizu/future-4.webp)

これまでのパートナーシップが示すように、新たな出会いや協働を大切にしています。れきちずは教育・観光など様々な分野での連携を模索しており、ご興味のある方はぜひお声がけください。

![れきちずの将来構想 - データ統合の構想](/images/articles/sorami-shiromizu/rekichizu/future-5.webp)

個人や団体が個別に作成した価値ある歴史データが、孤立した状態のまま眠っていることが多いのが現状です。それらの集合的な価値を解き放つため、れきちずが**データ統合・共同創造のためのプラットフォーム**へと進化することが大きな構想の一つです。既存のデータを個人や組織から取り込みやすくするシステムを構築し、コミュニティ全体で新たな歴史地理情報を共同創造・連携できる基盤を目指しています。

## さっそく体験してみよう！

ぜひれきちずを実際に体験して、日本の過去と現在の景観を比べる楽しさを感じてみてください。[こちらから体験スタート](https://rekichizu.jp/)！　改善のためのご意見・ご感想も[いつでも歓迎しています](https://rekichizu.jp/#contact)。

## 参考文献

- [「れきちず」のこれまでとこれから - 誰にでもわかりやすい歴史地図を目指して](https://speakerdeck.com/hjmkth/251012-foss4g-japan-rekichizu)（[FOSS4G 2025 Japan](https://osgeo-jp.github.io/foss4g-2025-japan/) にてHajime Kato氏・Sorami Shiromizu氏が発表）
- [Modern-style Historical Map Design with QGIS](https://speakerdeck.com/hjmkth/231129-foss4g-asia-2023-kato)（英語）（[FOSS4G ASIA 2023](https://foss4g.asia/2023/) にてHajime Kato氏が発表）

[^1]: MIERUNEは[FOSS4G北海道](https://foss4g.hokkaido.jp/)の3名の主催者によって設立されました。また、チームには複数の[OSGeo財団チャーターメンバー](https://www.osgeo.org/about/charter-members/)が在籍しており、MIERUNEは[OSGeo.JPの組織会員](https://www.osgeo.jp/sponsor)でもあります。MIERUNEの取締役である[Toru Mori](https://www.linkedin.com/in/toru-mori-9a4984b/)氏は、2006年から2018年まで日本支部のOSGeo代表を務め、FOSS4Gのグローバルな発展を黎明期から支え続けてきた中心的人物です。
[^2]: MIERUNEは2017年より[QGISの公式スポンサー](https://qgis.org/#sustaining-members)であり、[QGIS国ユーザーグループの投票メンバー](https://qgis.org/community/groups/)でもあります。
[^3]: MIERUNEはMapLibreプロジェクトの主要支援者であり、[2022年に世界初のスポンサー](https://maplibre.org/news/2022-06-10-mierune-announcement/)となりました（Meta、Microsoft、AWSなどと並んで）。また、プロジェクトのガバナンスにも深く関わっており、CEO [Yasunori Kirimoto](https://www.dayjournal.dev/)氏およびCTO Kanahiro Iguchi氏はともに[プロジェクトの投票メンバー](https://github.com/maplibre/maplibre/blob/main/VOTING_MEMBERS.md)を務めています。

---

_この記事は[DEV Community](https://dev.to/mierune/rekichizu-a-modern-take-on-japans-historical-maps-53gp)にも掲載されています。_
