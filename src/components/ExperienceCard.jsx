export default function ExperienceCard({ experience }) {
  return (
    <div className={`card glass-card experience-card rounded-4 reveal-on-scroll ${experience.delayClass || ""}`}>
      <div className="card-body p-4">
        <div className="d-flex justify-content-between flex-wrap gap-2 mb-2">
          <div className="experience-title">
            <span className="company-logo-frame">
              <img className="company-logo" src={experience.logo} alt={experience.company} />
            </span>
            <h5 className="fw-bold mb-0">{experience.role}</h5>
          </div>
          <span className="badge outline-badge">{experience.period}</span>
        </div>
        <div className="text-soft mb-0 experience-list">
          <ul>
            {experience.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        {experience.preview && (
          <a
            className="experience-site-preview"
            href={experience.preview.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={experience.preview.ariaLabel}
          >
            <span className="experience-site-preview-image">
              <img
                src={experience.preview.imageUrl}
                alt={`Vista previa de la web de ${experience.preview.label}`}
                loading="lazy"
              />
            </span>
            <span className="experience-site-preview-label">{experience.preview.label}</span>
          </a>
        )}
      </div>
    </div>
  );
}
