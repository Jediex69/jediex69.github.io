import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
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
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
