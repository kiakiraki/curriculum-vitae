// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // カスタムドメインでホスティングする場合の設定
  site: 'https://curriculum_vitae.kiakiraki.dev',
  base: '',

  // 静的サイト生成
  output: 'static',

  // ビルド設定
  build: {
    assets: 'assets',
  },
})
