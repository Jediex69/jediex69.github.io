import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experiencia" className="py-5 section-soft">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 text-center reveal-on-scroll">
            <span className="section-kicker gradient-text fw-semibold">Experiencia</span>
            <h2 className="fw-bold mt-2 mb-3 section-title">
              De la gestión de incidencias críticas al desarrollo de soluciones IT.
            </h2>
            <p className="text-soft mx-auto mb-0 section-intro" style={{ maxWidth: 760 }}>
              Mi trayectoria combina atención especializada, coordinación operativa y resolución de problemas complejos con una evolución progresiva hacia soporte IT, ciberseguridad y desarrollo web.
            </p>
          </div>
          <div className="col-12">
            <div className="experience-grid">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
