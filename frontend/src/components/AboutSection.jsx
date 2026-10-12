import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="container about-grid">

        <div className="about-image">

          <div className="about-image-placeholder">
            <span>MAULI GROUP</span>
            <strong>CONSTRUCTION</strong>
          </div>

        </div>

        <div className="about-content">

          <p className="section-eyebrow">
            ABOUT MAULI GROUP
          </p>

          <h2>
            Building with purpose.
            <br />
            Creating lasting value.
          </h2>

          <p>
            Mauli Group is focused on delivering professional
            construction solutions with attention to quality,
            safety, timely execution and customer satisfaction.
          </p>

          <p>
            From project planning and estimation to construction
            and final handover, our approach emphasizes structured
            execution and responsible project management.
          </p>

          <Link to="/about" className="text-link">
            Discover Our Story →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;