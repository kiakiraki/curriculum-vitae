// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // GitHub Pagesでホスティングする場合の設定
  site: 'https://kiakiraki.github.io',
  base: '/curriculum-vitae',

  // 静的サイト生成
  output: 'static',

  // ビルド設定
  build: {
    assets: 'assets',
  },
})
