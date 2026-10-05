import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container py-2">
        <a className="navbar-brand fw-bold" href="#inicio" onClick={closeNav}>
          Jesús Díaz<span className="gradient-text">.</span>
        </a>
        <button
          className={`navbar-toggler border-0 ${isNavOpen ? "" : "collapsed"}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Abrir navegación"
          onClick={() => setIsNavOpen((isOpen) => !isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#experiencia" onClick={closeNav}>
                Experiencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos" onClick={closeNav}>
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades" onClick={closeNav}>
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formacion" onClick={closeNav}>
                Formación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios" onClick={closeNav}>
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-accent rounded-pill px-4" href="#contacto" onClick={closeNav}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
