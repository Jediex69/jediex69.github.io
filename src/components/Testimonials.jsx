import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
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
  );
}
