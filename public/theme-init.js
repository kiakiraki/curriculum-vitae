;(() => {
  const mode = localStorage.getItem('theme-mode') || 'auto'
  const theme =
    mode === 'auto'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : mode
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.setAttribute('data-theme-mode', mode)
})()
