import { services } from "../data/services";

export default function Services() {
  return (
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
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 icon-orb"
                    style={{ width: 72, height: 72 }}
                  >
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
  );
}
