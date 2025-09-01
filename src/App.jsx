import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Articles from "./Components/Articles";
import Professors from "./Components/Professors";
import Footer from "./Components/Footer";
import StarsBackground from "./Components/StarsBackground";

function App() {
  return (
    <div>
      <StarsBackground />
      <Navbar />
      <Hero />
      <About />
      <Articles />
      <Professors />
      <Footer />
    </div>
  );
}

export default App;



