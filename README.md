# Curriculum-Vitae

https://curriculum-vitae.kiakiraki.dev/

## 概要

これは、職務経歴書を静的Webページとして構成し、Cloudflare Workersでホスティングし、カスタムドメインで公開するためのプロジェクトです。Astroフレームワークを使用し、高速な表示とシンプルな開発体験を目指しています。

## 🛠️ 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **データ形式**: YAML (CVコンテンツ管理)
- **コード品質**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **スタイリング**: CSS Variables + レスポンシブデザイン
- **フォント**: Google Fonts (Noto Sans JP, Source Sans 3, JetBrains Mono)
- **ホスティング**: Cloudflare Workers (Static Assets)
- **CI**: GitHub Actions
- **CD**: Cloudflare Workers Builds

## 📦 インストール

```bash
# 依存関係のインストール
npm install
```

## 🏃‍♂️ 開発コマンド

プロジェクトのルートディレクトリで以下のコマンドを実行してください。

| コマンド          | 動作                                  |
| :---------------- | :------------------------------------ |
| `npm install`     | 依存関係をインストール                |
| `npm run dev`     | 開発サーバーを起動 (`localhost:4321`) |
| `npm run build`   | 本番用サイトを `./dist/` にビルド     |
| `npm run preview` | ビルド結果をローカルでプレビュー      |
| `npm run lint`    | ESLintでコードの静的解析を実行        |
| `npm run format`  | Prettierでコードをフォーマット        |
| `npm run check`   | Astroで型チェックを実行               |

## 🏗️ ビルドとデプロイ

`main`ブランチにpushすると、Cloudflare Workers Buildsがビルドしてデプロイします。GitHub ActionsはPRと`main`へのpushで、ビルド・型チェック・lint・formatを実行します。

Workers Buildsのbuild commandはダッシュボード側の設定で、`wrangler.toml`の`[build]`は使いません。lockfileどおりに入れるなら、ダッシュボード側も`npm ci && npm run build`にしてください。

## 📁 プロジェクト構成

```
cv-website/
├── .github/
│   ├── dependabot.yml          # Dependabot設定
│   └── workflows/
│       └── ci.yml              # CI設定 (ビルド・型チェック・lint)
├── public/
│   ├── favicon.svg             # ファビコン
│   ├── theme-init.js           # 描画前のテーマ適用
│   ├── theme-controls.js       # テーマとPDFレイアウトの切替
│   └── _headers                # セキュリティヘッダ
├── src/
│   ├── components/
│   │   └── cv/                 # CV表示用Astroコンポーネント
│   ├── data/
│   │   └── cv-data.yaml        # CVコンテンツデータ (Single Source of Truth)
│   ├── lib/
│   │   └── load-cv.ts          # YAML読み込みとURL検証
│   ├── pages/
│   │   └── index.astro         # メインページ
│   ├── styles/
│   │   └── resume.css          # CVスタイルシート
│   └── types/
│       └── cv-data.ts          # CVデータの型定義
├── .gitignore
├── .prettierrc.json            # Prettier設定ファイル
├── wrangler.toml               # Cloudflare Workers設定ファイル
├── astro.config.mjs            # Astro設定ファイル
├── eslint.config.js            # ESLint設定ファイル
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 🎨 カスタマイズ

### 内容の更新

職務経歴書の内容は `src/data/cv-data.yaml` を編集して更新します。リンクは `http:` と `https:` だけを許可し、それ以外のスキームはビルド時に失敗します。

```yaml
meta:
  title: 鶴田 洸 - 職務経歴書
  description: 鶴田洸の職務経歴書 - 機械学習エンジニア/バックエンドエンジニア
  updateDate: 2025/06現在

basicInfo:
  name:
    ja: 鶴田 洸
    en: Akira TSURUDA
  links:
    - label: GitHub
      url: https://github.com/kiakiraki
      displayText: kiakiraki
    # ...
```

### ネットワーク構成図の編集

ホームネットワーク構成図は `src/components/cv/NetworkDiagram.astro` の静的なツリーです。機器の追加や接続の変更は、このコンポーネントを編集してください。

### テーマカラーの変更

`src/styles/resume.css` 内のCSS変数を編集してください：

```css
:root {
  --accent-color: #0066cc; /* アクセントカラー */
  --bg-color: #ffffff; /* 背景色 */
  --text-color: #1a1a1a; /* テキスト色 */
}

/* ダークモード用の変数 */
[data-theme='dark'] {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  /* ... */
}
```

---

Built with ❤️ using [Astro](https://astro.build/)
