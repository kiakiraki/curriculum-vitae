# Curriculum-Vitae

2020/11現在

## 基本情報

|key|value|
|---|-----|
|Name|鶴田 洸 (Akira TSURUDA)|
|LAPRAS|https://lapras.com/public/I8IXHAC|
|GitHub|[kiakiraki](https://github.com/kiakiraki)|
|Twitter|[`@__kiakiraki__`](https://twitter.com/__kiakiraki__)|
|Qiita|[kiakiraki](https://qiita.com/kiakiraki)|
|LinkedIn|[Akira TSURUDA](https://www.linkedin.com/in/akira-tsuruda-aa1316156/)|
|Connpass|[あきらき](https://connpass.com/user/kiakiraki/)

## 職歴

* 2014/04～2018/08 富士通株式会社
    * ～2016/07 仮想化ソフトウェア技術統括部
    * 2016/07～2018/08 AIプラットフォーム事業部
* 2018/08～2020/02 株式会社スカイディスク
    * AIエンジニアリング本部 シニアAIエンジニア
    * 2019/10～ 事業推進本部 AIエンジニアリング部 兼 クラウドシステム部 シニアAIエンジニア
* 2020/03〜2021/02 株式会社AIメディカルサービス
    * 研究開発部門 AIモデルチーム AIエンジニア (兼 インフラ/バックエンド)
* 2021/03〜 株式会社ミクシィ
    * みてね事業部 機械学習エンジニア

## スキル

### Machine Learning / Deep Learning

業務で約4年、顧客データを用いた PoC やシステム開発を実施。
AIメディカルサービスでは、医療系の画像データ (内視鏡画像) を用いた画像認識モデルの研究開発、及び医療機関との共同研究を実施。

主な対象は、画像データ、センサデータ(数値/時系列データ)など。
顧客対応 (業務課題のヒアリング等) からモデルの作成、顧客システム開発までを含む、幅広い範囲を担当。

最近はMLOps基盤の整備に興味があり、現職でMLFlowを用いた開発環境・実験管理基盤を構築。

* Python / Flask
    * 機械学習のモデル開発、データ処理、バックエンド開発に利用
* Keras / TensorFlow / PyTorch / BVLC Caffe
    * Deep Learning 向けフレームワーク
* scikit-learn / Pandas
    * 機械学習/データ分析フレームワーク
* その他、OpenCV や Pillow を用いた画像処理など

### Windows Application

業務で約2年間、ミドルウェア製品 (システムバックアップソフトウェア) の開発を実施

* C# / .NET Framework
    * 主に製品内部で利用するライブラリを開発
* Windows ADK
    * PXE で用いる Windows PE ブートエージェントのカスタマイズなど

### 仮想化基盤/ハイパーバイザ

製品開発の中で、VMware vShpere 等の仮想化基盤を用いた環境構築/API による制御を実施

* VMware vSphere/ESXi
    * vCenter を含む開発環境の構築
    * VMware vSphere Web Services SDK を用いたホスト/VM の制御
    * Virtual Disk Development Kit (VDDK) を用いた仮想ディスクアクセス

### Network

学生時代、ネットワークプロトコル (特に無線LAN、Ethernet) 関連の研究を実施

* WireShark 等を用いたパケット解析
* QualNet
    * (特に無線環境向けの) ネットワークシミュレータ

### その他

* Docker(nvidia-dockerを含む) / docker-compose (開発環境として) / Kubernetes
   * 開発環境管理や社内向けサービス提供に利用
* Arduino/RasPi 等の簡単なマイコン制御
    * 顧客案件のPoCや社内のハッカソンなどで利用
* C/C++/ShellScript(Bash)/VBScript を基礎程度

## 強み

* 機械学習案件において、顧客対応(問題定義)/データ分析/モデル作成/システム構築を一貫して実施した経験
* 実際の顧客データ (特に、「汚い」「量の少ない」データ) を利用した機械学習モデル (特に Deep Learning) の作成経験
* 内視鏡画像等、特殊な機材で撮影した画像データの利用経験
* 産業データや医療データ等、顧客のドメイン知識を要する案件の対応経験
* ネットワークに対するプロトコルレベルの理解
* 幅広い分野に手を出すマインド (技術的探究心)、未経験の分野で結果を出す適応力
* エンジニアの文化づくり
    * 社内LT会の立ち上げ
    * 「分報(times)」文化の推進
    * 社内ハッカソン運営
* 業務改善への提言、各種業務ツールの積極的な導入
    * 大企業時代、チームに GitLab / Mattermost (Slack風チャットツール) / HackMD (ドキュメント共同編集ツール) / Wekan (カンバンツール) などを導入

## 職務経験 (2014/04～2018/08 : 富士通株式会社)

### システムバックアップソフトウェアの開発

2014/11～2016/06

* 富士通製システムバックアップソフトウェア SystemcastWizard Professional/Datacloing Wizard の開発、及びリリース後のサポート業務を実施
* 特に、VMware vSphere 仮想化環境対応を主担当として実施
    * 仮想マシンのバックアップ/構成復元を数クリックで実現する機能を開発
    * 業界初の Raw Disk Mapping (RDM) 対応を実現
* 部内に有識者がいない状況、かつ自身もまったく経験がない分野だったが、地道な実機調査で納期内の開発を達成
* その他、Windows / vSphereの新機能調査、非互換の試験を担当

利用技術：C# (.NET Framework) / Windows ADK / VMware vSphere Web Services SDK / VMware Virtual Disk
Development Kit など

* 参考 1 : FUJITSU Software SystemcastWizard Professional V6.0 強化ポイント - Fujitsu Japan
http://www.fujitsu.com/jp/products/software/infrastructure-software/infrastructure-software/scw/enhancement/scw-60.html
* 参考 2 : FUJITSU Software DatacloningWizard DatacloningWizard for Server V6.0 強化ポイント - Fujitsu Japan
http://www.fujitsu.com/jp/products/software/infrastructure-software/infrastructure-software/dcw/enhancement/dcw-sv-60.html

### Deep Learning 技術を用いた REST API の開発

2016/11 ～ 2017/03

* 「Zinrai プラットフォームサービス」にて提供するサービスのうち、画像系 REST API の開発に参加
    * 一般画像分類、シーン分類、物体検出など
* Python/Flask を用いた REST API の仕様策定、教師データの作成、及びモデルの学習を担当
* 当時の最新手法の導入、教師データ収集/アノテーションツールの作成により、他社と遜色ない性能を実現

利用技術：Python / Flask / BVLC Caffe  / Nvidia Docker など

参考 : Zinrai プラットフォームサービス - FUJITSU Human Centric AI Zinrai（ジンライ） : Fujitsu Japan
http://www.fujitsu.com/jp/solutions/business-technology/ai/ai-zinrai/services/platform/

### Deep Learning 技術のコンサルティング、PoC (概念実証)、及び顧客システム開発

2016/07～

* お客様業務のヒアリングから機械学習モデルの作成、場合によっては顧客システムの開発まで一貫して実施
* 「とりあえず業務の改善がしたい」「流行の Deep Learning 技術をなにか業務に取り入れたい」といった過大の曖昧な案件、あるいはお客様がDeep Learning技術に対して過度な期待を抱いている案件も経験
* 論文等から最新技術を随時調査/トライアルし、必要に応じて随時商談へ投入

利用技術：Python / TensorFlow・Keras (Deep Learning Framework) / OpenCV など

プレスリリース済の担当商談の例： 道路陥没を防ぐ川崎地質の路面下空洞探査に富士通の AI 技術を活用 : 富士通
http://pr.fujitsu.com/jp/news/2017/05/15-2.html

参考 : Zinrai導入支援／構築／運用サービス - FUJITSU Human Centric AI Zinrai（ジンライ）
http://www.fujitsu.com/jp/solutions/business-technology/ai/ai-zinrai/services/integration/

## 職務経験 (2018/08～2020/02 : 株式会社スカイディスク)

### Deep Learning技術を活用した外観検査装置の開発

2018/08～2018/11

* Deep Learningによる画像認識技術を応用した、工場ライン向け外観検査装置を開発
* 撮影方法を工夫し、カメラ1台のみで様々な以上の検出に対応

参考: AI外観検査機をIoT/M2M展秋で初披露 ベルトコンベア設置ハードウェア、カメラでのデータ取得、組込AIをセットで提供| 製造業向けAIサービスを提供する株式会社スカイディスク https://skydisc.jp/information/1265/https://skydisc.jp/information/1265/

### 機械学習技術のコンサルティング、PoC (概念実証)、及び顧客システム開発

2018/08～2020/02

* お客様業務のヒアリングから機械学習モデルの作成、顧客システムの開発まで一貫して実施
* 主に製造業を対象として、顧客ドメイン知識の理解を要する案件を多数経験

利用技術:Python / TensorFlow・Keras / OpenCV / Flask など

参考: SkyAI| 製造業向けAIサービスを提供する株式会社スカイディスク
https://skydisc.jp/service/sky_ai/

## 職務経験 (2020/02～現在 : 株式会社AIメディカルサービス)

### Deep Learning技術を用いた内視鏡 AI 製品の研究開発

* 内視鏡画像から病変を検出する AI モデルの開発を担当
  * 特殊なカメラの特性や医療機関毎のバイアスを意識した画像処理・モデル開発を実施
* その他、開発を支援するツール類の作成を実施
  * データ管理 / アノテーションツール
  * 医師の判別スキルを測定するツールの開発 (薬機申請支援) など

利用技術: Python / Pytorch / OpenCV / ffmpeg / Flask / Pandas / Google Compute Engine など

### 医療機関との共同研究

* 内視鏡を扱う医療機関と共同で、論文発表及び将来の製品開発に向けた共同研究を実施中
* 他社では実績がない領域での、難易度の高いモデル作成を行う

参考: ACHIEVEMENTS | INFORMATION | AIメディカルサービス
https://www.ai-ms.com/information/?category=achievements&page=1

### 開発基盤の構築・運用

* モデル開発で利用するオンプレ開発基盤の構築及び運用を実施中
  * DGX A100 を含むGPUサーバ (GPU約20台)、その他ストレージなど
* 製品で利用するモデルの継続的改善、開発環境管理、及び薬機申請に向けたエビデンス取得のため、MLOps 基盤 (MLflow) を導入

主な利用技術: Ubuntu / CentOS / KVM / Kubernetes / NVIDIA Docker / MLFlow など

## その他

* 社内ハッカソンの運営に参加 (富士通時代)
    * 「自転車向けナビゲーションシステム」のアイデアで1度優勝、その後運営側へ
    * 参考 : 受託型SEを“共創人材”へ、ハッカソンを推進する富士通 | 日経 xTECH（クロステック） http://tech.nikkeibp.co.jp/it/atcl/column/15/020200024/
* 社内LT会主催 (SKYDISC時代)
    * おやじベンチャーのここが良い「人に聞かせたくなる社内LT会」 | 株式会社スカイディスク's Blog
https://www.wantedly.com/companies/skydisc/post_articles/175638
* フランス開催のロケット打ち上げ競技会 C'Space に参加 (学生時代)
    * 搭載する電子機器の配線や配置の設計、及び実装を担当
    * フランスの大会で学生ロケットを打ち上げました！ | 九州工業大学戸畑キャンパス
http://www.tobata.kyutech.ac.jp/node/945