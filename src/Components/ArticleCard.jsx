export default function ArticleCard({ title, excerpt }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{color:'var(--muted)'}}>{excerpt}</p>
      <a href="#">Read more</a>
    </div>
  )
}
