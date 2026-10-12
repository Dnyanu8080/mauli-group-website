import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <p className="hero-eyebrow">
          MAULI GROUP
        </p>

        <h1>
          Building Quality.
          <br />
          Delivering on Time.
          <br />
          Earning Trust.
        </h1>

        <p className="hero-description">
          {companyInfo.description}
        </p>

        <div className="hero-actions">

          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>

          <Link to="/get-quote" className="btn btn-outline">
            Get a Quote
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;