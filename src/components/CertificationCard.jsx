export default function CertificationCard({ certification }) {
  return (
    <div className="col-md-6 col-xl-4 reveal-on-scroll reveal-scale">
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
          {certification.score ? (
            <span className="badge score-badge mt-3 align-self-start">
              Superado con scoring de {certification.score}
            </span>
          ) : null}
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-3 certification-meta">
            <span className="badge custom-badge">{certification.issuer}</span>
            <span className="badge outline-badge">{certification.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
