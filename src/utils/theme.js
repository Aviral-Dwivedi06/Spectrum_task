export function loadTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    document.documentElement.classList.add('light')
  }
}

export function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light')
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
}

