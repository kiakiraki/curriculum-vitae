// @ts-check
import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import { cvEditorApi } from './vite-plugins/cv-editor-api.js'

// https://astro.build/config
export default defineConfig({
  // カスタムドメインでホスティングする場合の設定
  site: 'https://curriculum-vitae.kiakiraki.dev',

  base: '',

  // 静的サイト生成
  output: 'static',

  // ビルド設定
  build: {
    assets: 'assets',
  },

  integrations: [preact()],

  // Vite設定 (開発時のみエディタAPIを有効化)
  vite: {
    plugins: [cvEditorApi()],
  },
})
