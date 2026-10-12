import { companyInfo } from "../data/companyData";

function Services() {
  return (
    <section className="services-section">

      <div className="container">

        <div className="section-heading">

          <p className="section-eyebrow">
            WHAT WE DO
          </p>

          <h2>
            Our Services
          </h2>

          <p>
            Professional construction solutions designed around
            quality, safety and reliable project execution.
          </p>

        </div>

        <div className="services-grid">

          {companyInfo.services.map((service, index) => (
            <article className="service-card" key={service.title}>

              <span className="service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <span className="service-link">
                Learn More →
              </span>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;