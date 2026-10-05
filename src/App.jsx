import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function PortfolioLanding() {
  useScrollReveal();

  return (
    <div className="portfolio-shell">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
