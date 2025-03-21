import React, { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import FloatingHearts from "./components/FloatingHearts";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  // Refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
 
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <FloatingHearts />
      {/* Pass scroll function to Navbar */}
      <Navbar scrollToSection={scrollToSection} refs={{ heroRef, aboutRef,  projectsRef, contactRef }} />
      
      <Layout>
        <div ref={heroRef}>
          <Hero />
        </div>
        <TechStack />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </Layout>
    </div>
  );
};

export default App;
