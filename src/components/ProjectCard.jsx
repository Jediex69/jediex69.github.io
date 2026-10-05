export default function ProjectCard({ project }) {
  const cardContent = (
        <div className="card h-100 glass-card project-card rounded-4 overflow-hidden">
      {project.image && (
        <div
          className={`project-thumbnail-wrapper${project.thumbnailFit === "natural" ? " project-thumbnail-wrapper-natural" : ""}`}
        >
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            className={`project-thumbnail-img${project.thumbnailFit === "contain" ? " project-thumbnail-img-contain" : project.thumbnailFit === "natural" ? " project-thumbnail-img-natural" : ""}`}
            loading="lazy"
          />
        </div>
      )}
      <div className="card-body p-4 d-flex flex-column">
        <span className="badge custom-badge align-self-start mb-3">{project.category}</span>
        <h5 className="fw-bold">{project.title}</h5>
        <p className="text-soft flex-grow-1">{project.description}</p>
        <div className="d-flex flex-wrap gap-2 mt-3">
          {project.tech.map((item) => (
            <span className="badge rounded-pill outline-badge" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  
    
  );

  return (
    <div className="col-md-6 col-lg-4 reveal-on-scroll reveal-scale">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-card-link"
          aria-label={`Abrir proyecto ${project.title} en una nueva pestaña`}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </div>
  );
}
