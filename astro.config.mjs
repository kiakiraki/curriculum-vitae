// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://curriculum-vitae.kiakiraki.dev',

  base: '',

  output: 'static',

  build: {
    assets: 'assets',
  },
})
