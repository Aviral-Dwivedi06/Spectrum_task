import { toggleTheme } from '../utils/theme'

export default function Navbar() {
  return (
    <header style={{position:'sticky',top:0,background:'var(--surface)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h2>Project Spectrum</h2>
      <nav>
        <a href="#about">About</a>
        <a href="#articles">Articles</a>
        <a href="#professors">Talks</a>
        <button onClick={toggleTheme} style={{marginLeft:'15px'}}>Toggle</button>
      </nav>
    </header>
  )
}

