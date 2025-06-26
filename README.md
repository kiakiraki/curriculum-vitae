# Curriculum-Vitae

https://kiakiraki.github.io/curriculum-vitae/

## 🛠️ 技術スタック

- **フレームワーク**: [Astro](https://astro.build/)
- **スタイリング**: CSS Variables + レスポンシブデザイン
- **フォント**: Google Fonts (Noto Sans JP)
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 インストール

```bash
# 依存関係のインストール
npm install
```

## 🏃‍♂️ 開発

```bash
# 開発サーバーの起動
npm run dev
```

開発サーバーが起動後、[http://localhost:4321/curriculum-vitae](http://localhost:4321/curriculum-vitae) にアクセスしてください。

## 🏗️ ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

## 🚀 デプロイ

### GitHub Pages

1. GitHubリポジトリの設定で「Pages」セクションに移動
2. Source を「GitHub Actions」に設定
3. `main` または `master` ブランチにpushすると自動でデプロイされます

### 手動デプロイ

```bash
# ビルド後、distディレクトリの内容を任意のWebサーバーにアップロード
npm run build
```

## 📁 プロジェクト構成

```
cv-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions設定
├── public/
│   └── favicon.svg             # ファビコン
├── src/
│   └── pages/
│       └── index.astro         # メインページ
├── astro.config.mjs            # Astro設定ファイル
├── package.json
└── README.md
```

## 🎨 カスタマイズ

### テーマカラーの変更

`src/pages/index.astro` 内のCSS変数を編集してください：

```css
:root {
  --accent-color: #0066cc; /* アクセントカラー */
  --bg-color: #ffffff; /* 背景色 */
  --text-color: #1a1a1a; /* テキスト色 */
}
```

### 内容の更新

職務経歴書の内容を更新する場合は、`src/pages/index.astro` ファイルのHTML部分を編集してください。

## 🧞 コマンド

プロジェクトのルートディレクトリで以下のコマンドを実行してください：

| コマンド          | 動作                                  |
| :---------------- | :------------------------------------ |
| `npm install`     | 依存関係をインストール                |
| `npm run dev`     | 開発サーバーを起動 (`localhost:4321`) |
| `npm run build`   | 本番用サイトを `./dist/` にビルド     |
| `npm run preview` | ビルド結果をローカルでプレビュー      |

## 📧 連絡先

- **GitHub**: [kiakiraki](https://github.com/kiakiraki)
- **Twitter**: [@**kiakiraki**](https://twitter.com/__kiakiraki__)
- **LinkedIn**: [Akira TSURUDA](https://www.linkedin.com/in/akira-tsuruda-aa1316156/)

---

Built with ❤️ using [Astro](https://astro.build/)
