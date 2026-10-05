import { useState } from "react";
import profilePhoto from "../assets/foto.png";
import theBridgeLogo from "../assets/the_bridge_logo.svg";
import ilernaLogo from "../assets/logos/ilerna.png";

const cvJesus = "/CV_general2.pdf";

export default function Hero() {
  const [showCv, setShowCv] = useState(false);

  return (
    <header id="inicio" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center align-items-lg-start g-5">
          <div className="col-lg-7 reveal-on-scroll">
            <span className="badge custom-badge rounded-pill mb-3 px-3 py-2">
              Soporte IT · Ciberseguridad junior · Desarrollador web junior
            </span>
            <h1 className="display-4 fw-bold lh-1 mb-4">
              Perfil IT Junior orientado a{" "}
              <span className="gradient-text"> soporte técnico, ciberseguridad</span>
              <span className="gradient-text"> y desarrollo web.</span>
            </h1>
            <p className="lead text-soft mb-4">
              Soy Jesús Díaz, profesional en transición hacia IT con formación en Desarrollo de Aplicaciones Web y ciberseguridad. Combino experiencia en gestión de incidencias, atención a clientes críticos y aprendizaje técnico continuo.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#proyectos" className="btn btn-accent btn-lg rounded-pill px-4">
                Ver proyectos
              </a>
              <a href="#contacto" className="btn btn-ghost btn-lg rounded-pill px-4">
                Hablemos
              </a>
            </div>
            <div className="row mt-5 g-3">
              <div className="col-6 col-md-4">
                <div className="metric-card rounded-4 p-3 h-100">
                  <h3 className="fw-bold mb-0 gradient-text">18+</h3>
                  <small className="text-soft">años de experiencia profesional</small>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="metric-card rounded-4 p-3 h-100">
                  <div className="metric-heading">
                    <span className="metric-logo-frame">
                      <img className="metric-logo" src={ilernaLogo} alt="Ilerna" />
                    </span>
                    <h3 className="fw-bold mb-0 gradient-text">DAW</h3>
                  </div>
                  <small className="text-soft">formación en desarrollo web</small>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="metric-card rounded-4 p-3 h-100">
                  <div className="metric-heading">
                    <span className="metric-logo-frame metric-logo-frame-dark">
                      <img className="metric-logo" src={theBridgeLogo} alt="The Bridge" />
                    </span>
                    <h3 className="fw-bold mb-0 gradient-text">Red Team</h3>
                  </div>
                  <small className="text-soft">bootcamp de ciberseguridad</small>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-ghost rounded-pill px-4"
                onClick={() => setShowCv((isVisible) => !isVisible)}
                aria-expanded={showCv}
                aria-controls="cv-viewer"
              >
                <i className="bi bi-file-earmark-person me-2"></i>
                {showCv ? "Ocultar CV" : "Ver CV"}
              </button>
            </div>
            {showCv && (
              <div id="cv-viewer" className="cv-viewer mt-4 reveal-on-scroll is-visible">
                <div className="cv-viewer-actions">
                  <span className="text-soft">CV Jesús Díaz</span>
                  <a href={cvJesus} download="CV_Jesus.pdf" className="btn btn-accent rounded-pill px-3 py-2">
                    <i className="bi bi-download me-2"></i>
                    Descargar
                  </a>
                </div>
                <iframe className="cv-frame" src={cvJesus} title="CV Jesús Díaz"></iframe>
              </div>
            )}
          </div>
          <div className="col-lg-5 reveal-on-scroll reveal-scale reveal-delay-1">
            <div className="card glass-card-strong rounded-5 overflow-hidden hero-profile-card">
              <div className="card-body p-4 text-center">
                <div
                  className="mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center icon-orb"
                  style={{ width: 120, height: 120 }}
                >
                  <img className="profile-photo rounded-circle" src={profilePhoto} alt="Jesús Díaz" />
                </div>
                <h2 className="fw-bold mb-2">Jesús Díaz</h2>
                <p className="mb-4 text-soft">
                  Soporte IT · Ciberseguridad Junior · Desarrollador Web Junior · Entusiasta de la IA
                </p>
                <div className="d-flex justify-content-center gap-3 fs-4">
                  <a className="text-white" href="https://github.com/Jediex69" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    className="text-white"
                    href="https://www.linkedin.com/in/jesus-diaz-exposito/"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-white" href="mailto:jediex69@gmail.com" aria-label="Email">
                    <i className="bi bi-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
