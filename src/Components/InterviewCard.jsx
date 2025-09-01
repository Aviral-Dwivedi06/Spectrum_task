export default function InterviewCard({ name, date, snippet }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p style={{fontSize:'12px',color:'var(--muted)'}}>{date}</p>
      <p>{snippet}</p>
    </div>
  )
}
