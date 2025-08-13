import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  {
    ignores: ['.astro/**/*'],
  },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "no-unused-vars": "warn"
    },
  },
]
