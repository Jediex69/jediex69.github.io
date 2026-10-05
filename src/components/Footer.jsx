export default function Footer() {
  return (
    <footer className="py-4 footer-custom text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0 text-soft">© {new Date().getFullYear()} Jesús Díaz.</p>
        <div className="d-flex gap-3">
          <a className="text-white text-decoration-none" href="#inicio">
            Inicio
          </a>
          <a className="text-white text-decoration-none" href="#proyectos">
            Proyectos
          </a>
          <a className="text-white text-decoration-none" href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
