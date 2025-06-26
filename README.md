# Curriculum-Vitae

https://kiakiraki.github.io/curriculum-vitae/

## 概要

これは、職務経歴書を静的Webページとして構成し、GitHub Pagesでホスティングするためのプロジェクトです。Astroフレームワークを使用し、高速な表示とシンプルな開発体験を目指しています。

## 🛠️ 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **コード品質**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **スタイリング**: CSS Variables + レスポンシブデザイン
- **フォント**: Google Fonts (Noto Sans JP)
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 インストール

```bash
# 依存関係のインストール
npm install
```

## 🏃‍♂️ 開発コマンド

プロジェクトのルートディレクトリで以下のコマンドを実行してください。

| コマンド | 動作 |
| :--- | :--- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | 開発サーバーを起動 (`localhost:4321`) |
| `npm run build` | 本番用サイトを `./dist/` にビルド |
| `npm run preview` | ビルド結果をローカルでプレビュー |
| `npm run lint` | ESLintでコードの静的解析を実行 |
| `npm run format`| Prettierでコードをフォーマット |

## 🏗️ ビルドとデプロイ

`main`ブランチにpushすると、GitHub Actionsによって自動でビルドとデプロイが実行されます。

## 📁 プロジェクト構成

```
cv-website/
├── .github/
│   └── workflows/
│       ├── ci.yml              # CI設定 (ビルド・テスト)
│       └── deploy.yml          # GitHub Actionsによるデプロイ設定
├── public/
│   └── favicon.svg             # ファビコン
├── src/
│   ├── pages/
│   │   └── index.astro         # メインページ
│   └── styles/
│       └── resume.css          # スタイルシート
├── .gitignore
├── .prettierrc.json            # Prettier設定ファイル
├── astro.config.mjs            # Astro設定ファイル
├── eslint.config.js            # ESLint設定ファイル
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 🎨 カスタマイズ

### 内容の更新

職務経歴書の内容を更新する場合は、`src/pages/index.astro` ファイルのHTML部分を編集してください。

### テーマカラーの変更

`src/styles/resume.css` 内のCSS変数を編集してください：

```css
:root {
  --accent-color: #0066cc; /* アクセントカラー */
  --bg-color: #ffffff; /* 背景色 */
  --text-color: #1a1a1a; /* テキスト色 */
}
```

## 📧 連絡先

- **GitHub**: [kiakiraki](https://github.com/kiakiraki)
- **Twitter**: [@**__kiakiraki__**](https://twitter.com/__kiakiraki__)

---

Built with ❤️ using [Astro](https://astro.build/)