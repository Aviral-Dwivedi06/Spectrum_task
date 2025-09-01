import "./Professors.css";

const professors = [
  {
    name: "Dr. Rickmoy Samanta",
    date: "July 2023",
    snippet: "In this talk, Dr. Rickmoy Samanta discussed the role of Physics in modern research.",
    img: "/public/images/prof1.png",
  },
  {
    name: "Dr. Subhadeep Roy",
    date: "August 2023",
    snippet: "Dr. Subhadeep Roy shared insights on contribution of maxwell equations to Physics",
    img: "/public/images/prof2.png",
  },
   {
     name: "Dr. Sashideep Gutti",
    date: "August 2023",
    snippet: "Dr. Sashideep Gutti shared his knowledge of curl and divergence.",
    img: "/public/images/prof3.png",
  }
];

export default function Professors() {
  return (
    <section id="professors" className="professors-section">
      <div className="professors-container">
        <h2 className="professors-title">Talks with Professors</h2>
        <div className="professors-grid">
          {professors.map((prof, index) => (
            <div key={index} className="prof-card">
              <img src={prof.img} alt={prof.name} className="prof-img" />
              <div className="prof-content">
                <h3>{prof.name}</h3>
                <p className="prof-date">Date: {prof.date}</p>
                <p>{prof.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


