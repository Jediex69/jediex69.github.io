import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
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
  );
}
