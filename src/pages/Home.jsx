import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const timer = setTimeout(() => {
        const projectsSection = document.getElementById("projects");

        if (projectsSection) {
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        window.history.replaceState({}, document.title);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;