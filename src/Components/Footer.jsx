export default function Footer() {
  return (
    <footer style={{textAlign:'center'}}>
      <p>© {new Date().getFullYear()} Project Spectrum</p>
      <p>
        <a href="mailto:contact@club.edu">contact@club.edu</a> |
        <a href="#"> Twitter</a> |
        <a href="#"> LinkedIn</a>
      </p>
    </footer>
  )
}
