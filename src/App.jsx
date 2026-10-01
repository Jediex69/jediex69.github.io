import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import cvJesus from "./assets/CV_Jesus.pdf";
import profilePhoto from "./assets/foto.png";
import theBridgeLogo from "./assets/the_bridge_logo.svg";
import atentoLogo from "./assets/logos/atento.png";
import bootstrapLogo from "./assets/logos/bootstrap.svg";
import burpSuiteLogo from "./assets/logos/burp-suite.svg";
import ciscoLogo from "./assets/logos/cisco.svg";
import csharpLogo from "./assets/logos/csharp.svg";
import css3Logo from "./assets/logos/css3.svg";
import diviLogo from "./assets/logos/divi.svg";
import dockerLogo from "./assets/logos/docker.svg";
import elementorLogo from "./assets/logos/elementor.svg";
import expressLogo from "./assets/logos/express.svg";
import fortinetLogo from "./assets/logos/fortinet.svg";
import gitLogo from "./assets/logos/git.svg";
import googleLogo from "./assets/logos/google.svg";
import html5Logo from "./assets/logos/html5.svg";
import ilernaLogo from "./assets/logos/ilerna.png";
import javaLogo from "./assets/logos/java.svg";
import javascriptLogo from "./assets/logos/javascript.svg";
import kaliLinuxLogo from "./assets/logos/kali-linux.svg";
import laravelLogo from "./assets/logos/laravel.svg";
import linuxLogo from "./assets/logos/linux.svg";
import metasploitLogo from "./assets/logos/metasploit.svg";
import mongodbLogo from "./assets/logos/mongodb.svg";
import mysqlLogo from "./assets/logos/mysql.svg";
import nmapLogo from "./assets/logos/nmap.svg";
import nodejsLogo from "./assets/logos/nodejs.svg";
import oracleLogo from "./assets/logos/oracle.svg";
import phpLogo from "./assets/logos/php.svg";
import pythonLogo from "./assets/logos/python.svg";
import reactLogo from "./assets/logos/react.svg";
import smalldevLogo from "./assets/logos/smalldev.png";
import wiresharkLogo from "./assets/logos/wireshark.svg";
import wordpressLogo from "./assets/logos/wordpress.svg";

export default function PortfolioLanding() {
  const [showCv, setShowCv] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  const projects = [
    {
      title: "PassKeeper",
      category: "Desarrollo Web",
      description:
        "Aplicación web tipo bóveda para gestión segura de credenciales, desarrollada como proyecto final DAW con PHP, MySQL, HTML, CSS y JavaScript.",
      tech: ["PHP", "MySQL", "JavaScript", "Seguridad"],
    },
    {
      title: "CTF Reports",
      category: "Ciberseguridad",
      description:
        "Repositorio de writeups técnicos sobre laboratorios de pentesting, reconocimiento, explotación y escalada de privilegios.",
      tech: ["Kali Linux", "Nmap", "Wireshark", "Netcat", "Metasploit", "Burp Suite"],
    },
    {
      title: "Proyectos DAW",
      category: "Full Stack Junior",
      description:
        "Ejercicios y proyectos académicos orientados a desarrollo web, bases de datos, interfaces y programación backend.",
      tech: ["Java", "C#", "SQL", "Laravel"],
    },
  ];

  const skillGroups = [
    {
      title: "Lenguajes",
      skills: [
        { name: "JavaScript", logo: javascriptLogo },
        { name: "PHP", logo: phpLogo },
        { name: "Java", logo: javaLogo },
        { name: "C#", logo: csharpLogo },
        { name: "Python", logo: pythonLogo },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", logo: html5Logo },
        { name: "CSS3", logo: css3Logo },
        { name: "React", logo: reactLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", logo: nodejsLogo },
        { name: "Express", logo: expressLogo },
        { name: "Laravel", logo: laravelLogo },
      ],
    },
    {
      title: "Bases de datos",
      skills: [
        { name: "SQL", logo: mysqlLogo },
        { name: "MongoDB", logo: mongodbLogo },
        { name: "Oracle", logo: oracleLogo },
      ],
    },
    {
      title: "Ciberseguridad",
      skills: [
        { name: "Kali Linux", logo: kaliLinuxLogo },
        { name: "Nmap", logo: nmapLogo },
        { name: "Wireshark", logo: wiresharkLogo },
        { name: "Metasploit", logo: metasploitLogo },
        { name: "Burp Suite", logo: burpSuiteLogo },
      ],
    },
    {
      title: "Herramientas y CMS",
      skills: [
        { name: "Linux", logo: linuxLogo },
        { name: "Docker", logo: dockerLogo },
        { name: "Git/GitHub", logo: gitLogo },
        { name: "WordPress", logo: wordpressLogo },
        { name: "Elementor", logo: elementorLogo },
        { name: "Divi", logo: diviLogo },
      ],
    },
  ];

  const services = [
    {
      icon: "bi-code-slash",
      title: "Desarrollo web",
      text: "Creación de interfaces modernas, landing pages, páginas corporativas y pequeñas aplicaciones web.",
    },
    {
      icon: "bi-shield-lock",
      title: "Ciberseguridad junior",
      text: "Apoyo en análisis básico de seguridad, documentación técnica, hardening inicial y laboratorios controlados.",
    },
    {
      icon: "bi-diagram-3",
      title: "Soporte IT y documentación",
      text: "Experiencia en gestión de incidencias, coordinación entre equipos y elaboración de documentación clara.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Perfil con una combinación poco habitual: experiencia real en atención, gestión de incidencias y una clara transición técnica hacia IT.",
      author: "Responsable de equipo",
      role: "Operaciones / Back Office",
    },
    {
      quote:
        "Destaca por su constancia, capacidad de aprendizaje y forma estructurada de documentar procesos complejos.",
      author: "Mentor académico",
      role: "Formación DAW / Ciberseguridad",
    },
  ];

  const certifications = [
    {
      icon: "bi-terminal",
      title: "Introducción al Hacking",
      issuer: "Hack4you",
      date: "Nov 2025",
    },
    {
      logo: ciscoLogo,
      title: "Junior Cybersecurity Career Path",
      issuer: "Cisco",
      date: "Ago 2025",
    },
    {
      logo: googleLogo,
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "Jun 2025",
    },
    {
      logo: fortinetLogo,
      title: "Fortinet Certificate Associate Cybersecurity",
      issuer: "Fortinet",
      date: "Jun 2025",
    },
    {
      icon: "bi-cpu",
      title: "Inteligencia Artificial aplicada a la empresa",
      issuer: "SEPE",
      date: "Feb 2025",
    },
    {
      icon: "bi-bug",
      title: "Ethical Hacker & Penetration Tester",
      issuer: "Cyberland Sec",
      date: "Nov 2024",
    },
    {
      logo: ciscoLogo,
      title: "Network Technician Career Path",
      issuer: "Cisco",
      date: "Oct 2024",
    },
    {
      logo: googleLogo,
      title: "Introduction to Large Language Model",
      issuer: "Google",
      date: "Jun 2024",
    },
    {
      icon: "bi-lock",
      title: "Gestión de la seguridad informática en la empresa",
      issuer: "SEPE",
      date: "Jun 2022",
    },
    {
      icon: "bi-database",
      title: "Sistemas informáticos y almacenamiento de datos",
      issuer: "FYSA",
      date: "Abr 2022",
    },
    {
      logo: googleLogo,
      title: "Protege tu negocio: Ciberseguridad en el trabajo",
      issuer: "Google",
      date: "Ago 2021",
    },
  ];

  return (
    <div className="portfolio-shell">
      <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
        <div className="container py-2">
          <a className="navbar-brand fw-bold" href="#inicio" onClick={() => setIsNavOpen(false)}>
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
              <li className="nav-item"><a className="nav-link" href="#experiencia" onClick={() => setIsNavOpen(false)}>Experiencia</a></li>
              <li className="nav-item"><a className="nav-link" href="#proyectos" onClick={() => setIsNavOpen(false)}>Proyectos</a></li>
              <li className="nav-item"><a className="nav-link" href="#habilidades" onClick={() => setIsNavOpen(false)}>Habilidades</a></li>
              <li className="nav-item"><a className="nav-link" href="#formacion" onClick={() => setIsNavOpen(false)}>Formación</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicios" onClick={() => setIsNavOpen(false)}>Servicios</a></li>
              <li className="nav-item"><a className="btn btn-accent rounded-pill px-4" href="#contacto" onClick={() => setIsNavOpen(false)}>Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="inicio" className="py-5">
        <div className="container py-5">
          <div className="row align-items-center align-items-lg-start g-5">
            <div className="col-lg-7 reveal-on-scroll">
              <span className="badge custom-badge rounded-pill mb-3 px-3 py-2">
                Desarrollador web junior · Ciberseguridad · Soporte IT
              </span>
              <h1 className="display-4 fw-bold lh-1 mb-4">
                Perfil IT Junior orientado a                 
                <span className="gradient-text"> desarrollo web, ciberseguridad</span>
                <span className="gradient-text"> y troubleshooting.</span>
              </h1>
              <p className="lead text-soft mb-4">
                Soy Jesús Díaz, profesional en transición hacia IT con formación en Desarrollo de Aplicaciones Web y ciberseguridad ofensiva. Combino experiencia en gestión de incidencias, atención a clientes críticos y aprendizaje técnico continuo.
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
                  <div className="mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center icon-orb" style={{ width: 120, height: 120 }}>
                    <img className="profile-photo rounded-circle" src={profilePhoto} alt="Jesús Díaz" />
                  </div>
                  <h2 className="fw-bold mb-2">Jesús Díaz</h2> 
                  <p className="mb-4 text-soft">Full Stack Junior · Cybersecurity Analyst Junior · IA Enthusiast</p>
                  <div className="d-flex justify-content-center gap-3 fs-4">
                    <a className="text-white" href="https://github.com/Jediex69" aria-label="GitHub"><i className="bi bi-github"></i></a>
                    <a className="text-white" href="https://www.linkedin.com/in/jesus-diaz-exposito/" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a className="text-white" href="mailto:jediex69@gmail.com" aria-label="Email"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="experiencia" className="py-5 section-soft">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 text-center reveal-on-scroll">
              <span className="gradient-text fw-semibold">Experiencia</span>
              <h2 className="fw-bold mt-2 mb-3">De la gestión de incidencias críticas al desarrollo de soluciones IT.</h2>
              <p className="text-soft mx-auto mb-0" style={{ maxWidth: 760 }}>
                Mi trayectoria combina atención especializada, coordinación operativa y resolución de problemas complejos con una evolución progresiva hacia desarrollo web y ciberseguridad.
              </p>
            </div>
            <div className="col-12">
              <div className="experience-grid">
                <div className="card glass-card experience-card rounded-4 reveal-on-scroll reveal-delay-1">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                      <div className="experience-title">
                        <span className="company-logo-frame">
                          <img className="company-logo" src={smalldevLogo} alt="Smalldev" />
                        </span>
                        <h5 className="fw-bold mb-0">Prácticas DAW · Desarrollo web</h5>
                      </div>
                      <span className="badge outline-badge">Marzo 2026 — Actualidad</span>
                    </div>
                    <p className="text-soft mb-0">
                      Prácticas de Desarrollo de Aplicaciones Web en Smalldev, participando en tareas de desarrollo, mantenimiento y mejora de proyectos digitales. Aplicación práctica de tecnologías web, trabajo con entornos profesionales y colaboración en procesos orientados a soluciones digitales para clientes.
                    </p>
                  </div>
                </div>
                <div className="card glass-card experience-card rounded-4 reveal-on-scroll reveal-delay-1">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                      <div className="experience-title">
                        <span className="company-logo-frame">
                          <img className="company-logo" src={atentoLogo} alt="Atento" />
                        </span>
                        <h5 className="fw-bold mb-0">Back Office · Presidencia y Alta Dirección</h5>
                      </div>
                      <span className="badge outline-badge">2021 — 2024</span>
                    </div>
                    <p className="text-soft mb-0">
                      Colaboración con Presidencia y Alta Dirección de Telefónica en gestión interna y atención a clientes clave, directivos y VIP. Responsable de contratación, resolución de incidencias complejas y coordinación interdepartamental, con cumplimiento constante de objetivos y reconocimientos por calidad de servicio, precisión y orientación al detalle.
                    </p>
                  </div>
                </div>
                <div className="card glass-card experience-card rounded-4 reveal-on-scroll reveal-delay-2">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                      <div className="experience-title">
                        <span className="company-logo-frame">
                          <img className="company-logo" src={atentoLogo} alt="Atento" />
                        </span>
                        <h5 className="fw-bold mb-0">Atención al cliente · Autónomos y empresas</h5>
                      </div>
                      <span className="badge outline-badge">2011 — 2021</span>
                    </div>
                    <p className="text-soft mb-0">
                      Asesoramiento personalizado a clientes profesionales y autónomos en contratación, incidencias, facturación y fidelización. Gestión de altas, bajas, portabilidades, cambios de tarifa, reclamaciones, cobros y venta cruzada, contribuyendo a generar ingresos, reducir bajas y mejorar tiempos de respuesta y satisfacción del cliente.
                    </p>
                  </div>
                </div>
                <div className="card glass-card experience-card rounded-4 reveal-on-scroll reveal-delay-3">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                      <div className="experience-title">
                        <span className="company-logo-frame">
                          <img className="company-logo" src={atentoLogo} alt="Atento" />
                        </span>
                        <h5 className="fw-bold mb-0">Especialista de soporte técnico</h5>
                      </div>
                      <span className="badge outline-badge">2005 — 2011</span>
                    </div>
                    <p className="text-soft mb-0">
                      Soporte técnico especializado en servicios de Internet, televisión y telefonía móvil para clientes residenciales y pequeñas empresas. Diagnóstico remoto de averías, configuración de routers, decodificadores y servicios digitales, con alta resolución en primera llamada, cumplimiento de SLA y excelente feedback por claridad técnica y eficacia en la atención.
                    </p>
                  </div>
                </div>
                <div className="card glass-card experience-card rounded-4 reveal-on-scroll reveal-delay-3">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
                      <h5 className="fw-bold mb-0">Formación IT · DAW y ciberseguridad</h5>
                      <span className="badge outline-badge">Actualidad</span>
                    </div>
                    <p className="text-soft mb-0">
                      Desarrollo de aplicaciones web, programación, bases de datos, laboratorios de pentesting y documentación técnica de proyectos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5 reveal-on-scroll">
            <span className="gradient-text fw-semibold">Proyectos</span>
            <h2 className="fw-bold mt-2">Trabajo práctico y orientado a portfolio</h2>
            <p className="text-soft mx-auto" style={{ maxWidth: 680 }}>
              Una selección de proyectos que reflejan mi evolución como desarrollador web y mi interés por la seguridad ofensiva.
            </p>
          </div>
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4 reveal-on-scroll reveal-scale" key={project.title}>
                <div className="card h-100 glass-card project-card rounded-4">
                  <div className="card-body p-4 d-flex flex-column">
                    <span className="badge custom-badge align-self-start mb-3">{project.category}</span>
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-soft flex-grow-1">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                      {project.tech.map((item) => (
                        <span className="badge rounded-pill outline-badge" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-5 section-soft">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 reveal-on-scroll">
              <span className="gradient-text fw-semibold">Habilidades</span>
              <h2 className="fw-bold mt-2 mb-3">Stack técnico en crecimiento continuo.</h2>
              <p className="text-soft">
                Trabajo con tecnologías de desarrollo web, bases de datos, herramientas de control de versiones y fundamentos de ciberseguridad aplicados en laboratorios.
              </p>
            </div>
            <div className="col-12 reveal-on-scroll reveal-delay-1">
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3 className="skill-group-title">{group.title}</h3>
                    <div className="d-flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span className="badge outline-badge skill-badge rounded-pill px-2 py-1" key={skill.name}>
                          <img className="skill-logo" src={skill.logo} alt="" aria-hidden="true" />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="formacion" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5 reveal-on-scroll">
            <span className="gradient-text fw-semibold">Formación complementaria</span>
            <h2 className="fw-bold mt-2">Certificaciones y aprendizaje continuo</h2>
            <p className="text-soft mx-auto" style={{ maxWidth: 720 }}>
              Cursos y certificaciones orientados a ciberseguridad, redes, inteligencia artificial y sistemas, alineados con mi transición hacia perfiles técnicos IT.
            </p>
          </div>
          <div className="row g-4">
            {certifications.map((certification) => (
              <div className="col-md-6 col-xl-4 reveal-on-scroll reveal-scale" key={`${certification.title}-${certification.date}`}>
                <div className="card h-100 glass-card certification-card rounded-4">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="certification-icon mb-3">
                      {certification.logo ? (
                        <img className="certification-logo" src={certification.logo} alt={certification.issuer} />
                      ) : (
                        <i className={`bi ${certification.icon}`}></i>
                      )}
                    </div>
                    <h5 className="fw-bold flex-grow-1">{certification.title}</h5>
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-3">
                      <span className="badge custom-badge">{certification.issuer}</span>
                      <span className="badge outline-badge">{certification.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5 reveal-on-scroll">
            <span className="gradient-text fw-semibold">Servicios</span>
            <h2 className="fw-bold mt-2">Cómo puedo aportar valor</h2>
          </div>
          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-4 reveal-on-scroll reveal-scale" key={service.title}>
                <div className="card h-100 glass-card service-card rounded-4 text-center">
                  <div className="card-body p-4">
                    <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 icon-orb" style={{ width: 72, height: 72 }}>
                      <i className={`bi ${service.icon} fs-2`}></i>
                    </div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-soft mb-0">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="py-5 section-soft">
        <div className="container py-5">
          <div className="text-center mb-5 reveal-on-scroll">
            <span className="gradient-text fw-semibold">Testimonios</span>
            <h2 className="fw-bold mt-2">Lo que destaca de mi perfil</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((item) => (
              <div className="col-md-6 reveal-on-scroll reveal-scale" key={item.author}>
                <div className="card h-100 glass-card rounded-4">
                  <div className="card-body p-4 d-flex flex-column">
                    <i className="bi bi-quote fs-1 gradient-text"></i>
                    <p className="lead mt-3 flex-grow-1">“{item.quote}”</p>
                    <hr className="border-light opacity-25" />
                    <strong>{item.author}</strong>
                    <p className="text-soft mb-0">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal-on-scroll">
              <span className="gradient-text fw-semibold">Contacto</span>
              <h2 className="fw-bold mb-3 mt-2">¿Hablamos de tu próximo proyecto?</h2>
              <p className="lead text-soft mb-4">
                Estoy abierto a oportunidades junior en desarrollo web, soporte IT, documentación técnica y ciberseguridad de entrada.
              </p>
              <div className="d-flex flex-column gap-2 text-soft">
                <a className="contact-link" href="mailto:jediex69@gmail.com">
                  <i className="bi bi-envelope me-2 gradient-text"></i> jediex69@gmail.com
                </a>
                <a className="contact-link" href="https://github.com/Jediex69" target="_blank" rel="noreferrer">
                  <i className="bi bi-github me-2 gradient-text"></i> github.com/Jediex69
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/jesus-diaz-exposito/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin me-2 gradient-text"></i> linkedin.com/in/jesus-diaz-exposito
                </a>
                <span><i className="bi bi-geo-alt me-2 gradient-text"></i> Córdoba, España</span>
              </div>
            </div>
            <div className="col-lg-6 reveal-on-scroll reveal-scale reveal-delay-1">
              <form className="card glass-card rounded-4 p-4">
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="name">Nombre</label>
                  <input id="name" type="text" className="form-control form-control-lg" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-control form-control-lg" placeholder="tu@email.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" htmlFor="message">Mensaje</label>
                  <textarea id="message" className="form-control" rows="4" placeholder="Cuéntame en qué puedo ayudarte"></textarea>
                </div>
                <button type="submit" className="btn btn-accent btn-lg rounded-pill px-4">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 footer-custom text-white">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="mb-0 text-soft">© {new Date().getFullYear()} Jesús Díaz. Todos los derechos reservados.</p>
          <div className="d-flex gap-3">
            <a className="text-white text-decoration-none" href="#inicio">Inicio</a>
            <a className="text-white text-decoration-none" href="#proyectos">Proyectos</a>
            <a className="text-white text-decoration-none" href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
