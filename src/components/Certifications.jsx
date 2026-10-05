import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
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
            <CertificationCard
              key={`${certification.title}-${certification.date}`}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
