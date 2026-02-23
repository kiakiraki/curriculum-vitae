# Curriculum-Vitae

https://curriculum-vitae.kiakiraki.dev/

## 概要

これは、職務経歴書を静的Webページとして構成し、Cloudflare Workersでホスティングし、カスタムドメインで公開するためのプロジェクトです。Astroフレームワークを使用し、高速な表示とシンプルな開発体験を目指しています。

## 🛠️ 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **UIコンポーネント**: [Preact](https://preactjs.com/) (エディタUI)
- **データ形式**: YAML (CVコンテンツ管理)
- **コード品質**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **スタイリング**: CSS Variables + レスポンシブデザイン
- **フォント**: Google Fonts (Noto Sans JP), [Font Awesome](https://fontawesome.com/)
- **図表**: [Mermaid.js](https://mermaid.js.org/) - ネットワーク図やダイアグラムの作成
- **ホスティング**: Cloudflare Workers (Static Assets)
- **CI/CD**: GitHub Actions

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

## 🏗️ ビルドとデプロイ

`main`ブランチにpushすると、GitHub ActionsによってビルドされCloudflare Workersにデプロイされます。

## 📁 プロジェクト構成

```
cv-website/
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI設定 (ビルド・テスト)
│       └── deploy.yml          # Cloudflare Workersへのデプロイ設定
├── public/
│   ├── favicon.svg             # ファビコン
│   ├── css/
│   │   └── all.min.css         # Font Awesome スタイルシート
│   └── webfonts/               # Font Awesome フォント
├── src/
│   ├── components/
│   │   ├── cv/                 # CV表示用Astroコンポーネント
│   │   └── editor/             # エディタ用Preactコンポーネント
│   ├── data/
│   │   └── cv-data.yaml        # CVコンテンツデータ (Single Source of Truth)
│   ├── pages/
│   │   ├── index.astro         # メインページ
│   │   └── editor.astro        # エディタページ (開発環境のみ)
│   ├── styles/
│   │   ├── resume.css          # CVスタイルシート
│   │   └── editor.css          # エディタスタイルシート
│   └── types/
│       └── cv-data.ts          # CVデータの型定義
├── vite-plugins/
│   └── cv-editor-api.js        # エディタAPI (開発環境のみ)
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

職務経歴書の内容を更新するには、以下の2つの方法があります：

#### 方法1: ビジュアルエディタを使用 (推奨)

開発サーバーを起動し、ブラウザでエディタにアクセスします：

```bash
npm run dev
# http://localhost:4321/editor にアクセス
```

フォームで編集すると、変更は自動的に `src/data/cv-data.yaml` に保存されます。

#### 方法2: YAMLファイルを直接編集

`src/data/cv-data.yaml` を直接編集することもできます：

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

ホームネットワーク構成図は [Mermaid.js](https://mermaid.js.org/) を使用して実装されています。`src/data/cv-data.yaml` 内の `networkDiagram.mermaidCode` を編集してください：

```yaml
networkDiagram:
  mermaidCode: |
    graph TD
    Router["<i class='fas fa-wifi'></i> NEC Aterm WX11000T12"]
    Switch["<i class='fas fa-network-wired'></i> NETGEAR XS505M"]
    Router --> Switch
    ...
```

Font Awesome のアイコンを使用して各デバイスを視覚的に識別しやすくしています。

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

## 📝 エディタについて

ビジュアルエディタは開発環境でのみ利用可能です。本番ビルドでは `/editor` にアクセスすると自動的にトップページにリダイレクトされます。

エディタの主な機能：

- セクション別のフォーム編集
- タグ入力 (技術スタック等)
- 配列項目の追加・削除・並び替え
- 自動保存 (1秒のデバウンス)

---

Built with ❤️ using [Astro](https://astro.build/)
