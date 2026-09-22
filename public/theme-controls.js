;(() => {
  const root = document.documentElement
  const themeBtn = document.querySelector('#theme-btn')
  const pdfBtn = document.querySelector('#pdf-btn')
  const body = document.body
  let printLayoutForced = false

  if (!themeBtn) {
    console.error('Theme button not found')
    return
  }

  const ICONS = {
    auto: '🖥️',
    light: '☀️',
    dark: '🌙',
  }
  const CYCLE = ['auto', 'light', 'dark']

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const applyTheme = (mode) => {
    const theme = mode === 'auto' ? getSystemTheme() : mode
    root.setAttribute('data-theme', theme)
    root.setAttribute('data-theme-mode', mode)
    themeBtn.textContent = ICONS[mode]
  }

  themeBtn.textContent = ICONS[root.getAttribute('data-theme-mode') || 'auto']

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (root.getAttribute('data-theme-mode') === 'auto') {
        applyTheme('auto')
      }
    })

  const setPdfButtonState = (enabled) => {
    if (!pdfBtn) return
    pdfBtn.setAttribute('aria-pressed', enabled ? 'true' : 'false')
  }

  const applyPdfLayout = (enabled) => {
    if (enabled) {
      body.setAttribute('data-layout', 'pdf')
    } else {
      body.removeAttribute('data-layout')
    }
    setPdfButtonState(enabled)
    themeBtn.disabled = enabled
  }

  if (localStorage.getItem('pdf-layout') === 'enabled') {
    applyPdfLayout(true)
  } else {
    setPdfButtonState(false)
  }

  themeBtn.addEventListener('click', () => {
    const mode = root.getAttribute('data-theme-mode') || 'auto'
    const idx = CYCLE.indexOf(mode)
    const nextMode = CYCLE[(idx + 1) % CYCLE.length]
    applyTheme(nextMode)
    localStorage.setItem('theme-mode', nextMode)
  })

  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      const nextState = body.getAttribute('data-layout') !== 'pdf'
      applyPdfLayout(nextState)
      localStorage.setItem('pdf-layout', nextState ? 'enabled' : 'disabled')
    })
  } else {
    console.error('PDF button not found')
  }

  window.addEventListener('beforeprint', () => {
    if (body.getAttribute('data-layout') !== 'pdf') {
      applyPdfLayout(true)
      printLayoutForced = true
    }
  })

  window.addEventListener('afterprint', () => {
    if (printLayoutForced) {
      applyPdfLayout(false)
      printLayoutForced = false
    }
  })
})()
