// src/Components/Articles.jsx
import React from "react";
import "./Articles.css";

const articles = [
  {
    id: 1,
    title: "The Legacy of C.V. Raman: Beyond the Raman Effect",
    desc:
      "C.V. Raman’s groundbreaking discovery of the scattering of light not only earned him the Nobel Prize in Physics in 1930 but also placed Indian science on the global map. What is often overlooked, however, is his deep dedication to mentoring young scientists and building a culture of scientific curiosity in India. This article explores his life, his journey through Calcutta University and the Indian Institute of Science, and how his work continues to inspire future generations of researchers.",
    img: "/public/images/article1.jpg",
  },
  {
    id: 2,
    title: "Meghnad Saha and the Birth of Astrophysics in India",
    desc:
      "Meghnad Saha revolutionized our understanding of stars with his Ionization Equation, a contribution that still forms the foundation of modern astrophysics. Despite humble beginnings, his relentless pursuit of knowledge reshaped how we study stellar atmospheres. This article delves into his vision, his role in shaping scientific institutions in India, and how his ideas continue to ignite young minds interested in astrophysics and space science.",
    img: "/public/images/article2.png",
  },
  {
    id: 3,
    title: "The Unsung Genius: Satyendra Nath Bose and Quantum Statistics",
    desc:
      "Often remembered through the term “Bosons,” Satyendra Nath Bose’s collaboration with Albert Einstein laid the groundwork for quantum mechanics. Yet, his story is also about perseverance, humility, and a passion for teaching. This article highlights Bose’s struggles in getting recognition, his groundbreaking paper that Einstein himself translated, and his legacy in shaping India’s academic and research culture.",
    img: "/public/images/article3.png",
  },
  {
    id: 4,
    title: "Research as a Student at BITS",
    desc:
      "Research is not just about high-tech labs and big discoveries—it begins with asking simple questions. Many Indian physicists started their journey with curiosity about everyday phenomena, leading them to discoveries that changed the world. This article emphasizes how undergraduate students can take small steps into research, from reading papers and discussing ideas to trying simple experiments. The message is clear: great science often begins with curiosity and persistence.",
    img: "/public/images/article4.png",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="articles-section">
      <div className="articles-container">
        <h2 className="articles-title">Latest Articles</h2>

        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="img-wrap">
                <img src={article.img} alt={article.title} className="article-img" />
              </div>

              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-desc">{article.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


