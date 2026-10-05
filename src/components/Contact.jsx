import { useState } from "react";

export default function Contact() {
  const [contactStatus, setContactStatus] = useState("");
  const [contactStatusType, setContactStatusType] = useState("info");
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const contactFormEndpoint =
    import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "https://formspree.io/f/mdajaley";

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (!contactFormEndpoint) {
      setContactStatusType("error");
      setContactStatus("El formulario necesita configurar VITE_CONTACT_FORM_ENDPOINT para enviar mensajes.");
      return;
    }

    setIsSubmittingContact(true);
    setContactStatusType("info");
    setContactStatus("Enviando mensaje...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const subject = `Contacto portfolio - ${name || "Nuevo mensaje"}`;

    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    formData.set("_replyto", email);
    formData.set("_subject", subject);

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        let errorMessage = "No se pudo enviar el mensaje.";

        try {
          const payload = await response.json();
          if (payload?.errors?.length) {
            errorMessage = payload.errors.map((item) => item.message).join(" ");
          }
        } catch {
          // Si no devuelve JSON, mantenemos el mensaje generico.
        }

        throw new Error(errorMessage);
      }

      form.reset();
      setContactStatusType("success");
      setContactStatus("Mensaje enviado correctamente. Te responderé lo antes posible.");
    } catch (error) {
      setContactStatusType("error");
      setContactStatus(`${error.message} Prueba de nuevo o escríbeme a jediex69@gmail.com.`);
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <section id="contacto" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 reveal-on-scroll">
            <span className="gradient-text fw-semibold">Contacto</span>
            <h2 className="fw-bold mb-3 mt-2">¿Hablamos de tu próximo proyecto?</h2>
            <p className="lead text-soft mb-4">
              Estoy abierto a oportunidades junior en soporte IT, ciberseguridad y desarrollo web.
            </p>
            <div className="d-flex flex-column gap-2 text-soft">
              <a className="contact-link" href="mailto:jediex69@gmail.com">
                <i className="bi bi-envelope me-2 gradient-text"></i> jediex69@gmail.com
              </a>
              <a
                className="contact-link"
                href="https://github.com/Jediex69"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github me-2 gradient-text"></i> github.com/Jediex69
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/jesus-diaz-exposito/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin me-2 gradient-text"></i> linkedin.com/in/jesus-diaz-exposito
              </a>
              <span>
                <i className="bi bi-geo-alt me-2 gradient-text"></i> Córdoba, España
              </span>
            </div>
          </div>
          <div className="col-lg-6 reveal-on-scroll reveal-scale reveal-delay-1">
            <form className="card glass-card rounded-4 p-4" onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Cuéntame en qué puedo ayudarte"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-accent btn-lg rounded-pill px-4"
                disabled={isSubmittingContact}
              >
                {isSubmittingContact ? "Enviando..." : "Enviar mensaje"}
              </button>
              {contactStatus && (
                <p className={`form-status form-status-${contactStatusType} mt-3 mb-0`} aria-live="polite">
                  {contactStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
