import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  companyInfo,
  ongoingProjects,
} from "../../data/companyData";

function CorporatePageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function AboutPage() {
  return (
    <CorporatePageLayout>
      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow">ABOUT MAULI GROUP</p>

          <h1>Building Trust Through Quality Construction</h1>

          <p>
            Professional construction solutions focused on quality,
            safety, timely execution and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">

          <div className="about-image">
            <div className="about-image-placeholder">
              <span>MAULI GROUP</span>
              <strong>CONSTRUCTION</strong>
            </div>
          </div>

          <div className="about-content">
            <p className="section-eyebrow">WHO WE ARE</p>

            <h2>
              Building with purpose.
              <br />
              Creating lasting value.
            </h2>

            <p>
              {companyInfo.description}
            </p>

            <p>
              Our approach focuses on structured planning,
              responsible execution, quality control and
              customer satisfaction throughout the construction
              journey.
            </p>

            <p>
              From initial discussion and site visits to planning,
              construction, inspection and handover, every stage
              is approached with professionalism and attention
              to detail.
            </p>
          </div>

        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">

          {companyInfo.statistics.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-value">
                {stat.value}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </section>
    </CorporatePageLayout>
  );
}

export function ServicesPage() {
  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow">WHAT WE DO</p>

          <h1>Construction Services</h1>

          <p>
            Professional construction solutions for residential,
            commercial and civil requirements.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">

          <div className="services-grid">

            {companyInfo.services.map((service, index) => (
              <article
                className="service-card"
                key={service.title}
              >
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  to="/get-quote"
                  className="service-link"
                >
                  Discuss Your Project →
                </Link>
              </article>
            ))}

          </div>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function ProjectsPage() {
  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">
          <p className="section-eyebrow">OUR WORK</p>

          <h1>Projects</h1>

          <p>
            Explore construction projects currently showcased
            by Mauli Group.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">

          <div className="section-heading">
            <p className="section-eyebrow">ONGOING</p>
            <h2>Ongoing Projects</h2>
          </div>

          <div className="projects-grid">

            {ongoingProjects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >
                <div className="project-image">

                  <div className="project-image-placeholder">
                    MAULI GROUP
                  </div>

                  <span className="project-status">
                    {project.status}
                  </span>

                </div>

                <div className="project-content">

                  <p className="project-location">
                    {project.location}
                  </p>

                  <h3>{project.name}</h3>

                  <p>{project.type}</p>

                  <div className="project-progress">

                    <div className="progress-header">
                      <span>Project Progress</span>
                      <strong>
                        {project.progress}%
                      </strong>
                    </div>

                    <div className="progress-bar">
                      <span
                        style={{
                          width: `${project.progress}%`,
                        }}
                      ></span>
                    </div>

                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="project-link"
                  >
                    View Project →
                  </Link>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function ProjectDetailsPage() {
  const { id } = useParams();

  const project = ongoingProjects.find(
    (item) => String(item.id) === String(id)
  );

  if (!project) {
    return (
      <CorporatePageLayout>
        <section className="page-hero">
          <div className="container">

            <h1>Project Not Found</h1>

            <p>
              The requested project could not be found.
            </p>

            <Link
              to="/projects"
              className="btn btn-primary"
            >
              Back to Projects
            </Link>

          </div>
        </section>
      </CorporatePageLayout>
    );
  }

  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">

          <p className="section-eyebrow">
            {project.location}
          </p>

          <h1>{project.name}</h1>

          <p>{project.type}</p>

        </div>
      </section>

      <section className="about-section">
        <div className="container">

          <div className="about-content">

            <p className="section-eyebrow">
              PROJECT OVERVIEW
            </p>

            <h2>Construction Progress</h2>

            <p>
              This project is currently listed as an ongoing
              Mauli Group project.
            </p>

            <div className="project-progress">

              <div className="progress-header">
                <span>Current Progress</span>

                <strong>
                  {project.progress}%
                </strong>
              </div>

              <div className="progress-bar">
                <span
                  style={{
                    width: `${project.progress}%`,
                  }}
                ></span>
              </div>

            </div>

            <p>
              <strong>Status:</strong>{" "}
              {project.status}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {project.location}
            </p>

            <p>
              <strong>Project Type:</strong>{" "}
              {project.type}
            </p>

            <Link
              to="/projects"
              className="text-link"
            >
              ← Back to Projects
            </Link>

          </div>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function GalleryPage() {
  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">

          <p className="section-eyebrow">
            PROJECT GALLERY
          </p>

          <h1>Construction Gallery</h1>

          <p>
            Project photographs and construction stages will
            be displayed here.
          </p>

        </div>
      </section>

      <section className="projects-section">
        <div className="container">

          <div className="services-grid">

            <article className="service-card">
              <span className="service-number">
                01
              </span>

              <h3>Before Construction</h3>

              <p>
                Site preparation and initial project stages.
              </p>
            </article>

            <article className="service-card">
              <span className="service-number">
                02
              </span>

              <h3>During Construction</h3>

              <p>
                Progress photographs from active
                construction sites.
              </p>
            </article>

            <article className="service-card">
              <span className="service-number">
                03
              </span>

              <h3>Completed Projects</h3>

              <p>
                Final project photographs after completion.
              </p>
            </article>

          </div>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function LocationsPage() {
  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">

          <p className="section-eyebrow">
            WHERE WE WORK
          </p>

          <h1>Our Locations</h1>

          <p>
            Mauli Group currently serves major locations
            including Pune, Sangli and Baramati.
          </p>

        </div>
      </section>

      <section className="services-section">
        <div className="container">

          <div className="services-grid">

            {companyInfo.locations.map(
              (location, index) => (
                <article
                  className="service-card"
                  key={location}
                >
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{location}</h3>

                  <p>
                    Construction and project services
                    by Mauli Group.
                  </p>

                  <Link
                    to="/contact"
                    className="service-link"
                  >
                    Contact Us →
                  </Link>

                </article>
              )
            )}

          </div>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function ContactPage() {
  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">

          <p className="section-eyebrow">
            GET IN TOUCH
          </p>

          <h1>Contact Mauli Group</h1>

          <p>
            Contact us to discuss your construction
            requirements.
          </p>

        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">

          <div className="about-content">

            <p className="section-eyebrow">
              CONTACT INFORMATION
            </p>

            <h2>
              Let's discuss your project.
            </h2>

            <p>
              Our contact information will be updated
              with the company's verified phone number,
              email address and registered office details
              before client handover.
            </p>

            <p>
              <strong>Locations:</strong>
            </p>

            {companyInfo.locations.map(
              (location) => (
                <p key={location}>
                  {location}
                </p>
              )
            )}

          </div>

          <div className="service-card">

            <h3>Project Enquiry</h3>

            <p>
              Looking for construction services?
            </p>

            <Link
              to="/get-quote"
              className="btn btn-primary"
            >
              Get a Quote
            </Link>

          </div>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function GetQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <CorporatePageLayout>

      <section className="page-hero">
        <div className="container">

          <p className="section-eyebrow">
            START A PROJECT
          </p>

          <h1>Get a Quote</h1>

          <p>
            Tell us about your construction requirements.
          </p>

        </div>
      </section>

      <section className="about-section">
        <div className="container">

          <div className="section-heading">

            <p className="section-eyebrow">
              PROJECT ENQUIRY
            </p>

            <h2>
              Tell Us About Your Requirement
            </h2>

          </div>

          {submitted && (
            <div className="quote-success">
              Thank you. Your enquiry has been recorded
              locally for now. Backend enquiry integration
              will be connected next.
            </div>
          )}

          <form
            className="quote-form"
            onSubmit={handleSubmit}
          >

            <div className="form-grid">

              <div>
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label>Mobile</label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  required
                />
              </div>

              <div>
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label>Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="Project location"
                />
              </div>

              <div>
                <label>Property Type</label>

                <select name="propertyType">
                  <option value="">
                    Select property type
                  </option>

                  <option>
                    Residential
                  </option>

                  <option>
                    Commercial
                  </option>

                  <option>
                    Industrial
                  </option>

                  <option>
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label>Construction Type</label>

                <select name="constructionType">
                  <option value="">
                    Select construction type
                  </option>

                  <option>
                    New Construction
                  </option>

                  <option>
                    Renovation
                  </option>

                  <option>
                    Civil Work
                  </option>

                  <option>
                    Project Management
                  </option>
                </select>
              </div>

              <div>
                <label>Approximate Area</label>

                <input
                  type="text"
                  name="area"
                  placeholder="Example: 2500 sq.ft"
                />
              </div>

              <div>
                <label>Expected Start</label>

                <input
                  type="text"
                  name="expectedStart"
                  placeholder="Example: January 2027"
                />
              </div>

            </div>

            <div>

              <label>Requirements</label>

              <textarea
                name="requirements"
                rows="6"
                placeholder="Describe your construction requirements..."
              ></textarea>

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit Enquiry
            </button>

          </form>

        </div>
      </section>

    </CorporatePageLayout>
  );
}

export function CorporateNotFound() {
  return (
    <CorporatePageLayout>

      <section className="page-hero">

        <div className="container">

          <p className="section-eyebrow">
            404
          </p>

          <h1>Page Not Found</h1>

          <p>
            The page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="btn btn-primary"
          >
            Back to Home
          </Link>

        </div>

      </section>

    </CorporatePageLayout>
  );
}