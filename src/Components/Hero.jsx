// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  const sectionStyle = {
    position: "relative",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: "url('/src/assets/images/hero-bg.jpg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.65)", // stronger overlay so text is readable
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    padding: "0 24px",
    maxWidth: "1100px",
  };

  const titleStyle = {
    margin: 0,
    fontWeight: 900,
    lineHeight: 1.02,
    fontSize: "clamp(36px, 7vw, 72px)",
    color: "#ffffff", // fallback color if gradient text is unsupported
    backgroundImage: "linear-gradient(90deg, #ff7ce5, #ffd166, #7ee7ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 8px 28px rgba(0,0,0,0.9)",
    marginBottom: "18px",
  };

  const subtitleStyle = {
    margin: 0,
    fontSize: "clamp(14px, 2.2vw, 22px)",
    color: "#f0f6fa",
    textShadow: "0 6px 18px rgba(0,0,0,0.6)",
    marginBottom: "26px",
    opacity: 0.95,
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 22px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    letterSpacing: "0.3px",
    background: "linear-gradient(90deg,#5b8cff,#8b5cf6)",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(91,140,255,0.18)",
    transition: "transform 200ms ease, box-shadow 200ms ease",
    textDecoration: "none",
  };

  // small inline hover behavior (works without external CSS)
  function handleMouseEnter(e) {
    e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
    e.currentTarget.style.boxShadow = "0 20px 50px rgba(91,140,255,0.28)";
  }
  function handleMouseLeave(e) {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(91,140,255,0.18)";
  }

  return (
    <section id="hero" style={sectionStyle}>
      <div style={overlayStyle} />
      <div style={contentStyle}>
        <h1 style={titleStyle}>Welcome to Spectrum</h1>

        <p style={subtitleStyle}>
          Exploring Physics | Sharing Physics | Connecting Physics
        </p>

        <a
          href="#about"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          AT BITS
        </a>
      </div>
    </section>
  );
}
