import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  ongoingProjects,
  completedProjects,
} from "../../data/companyData";

function ProjectDetailsPage() {
  const { id } = useParams();

  const allProjects = [
    ...ongoingProjects,
    ...completedProjects,
  ];

  const project = allProjects.find(
    (item) => String(item.id) === String(id)
  );

  if (!project) {
    return (
      <>
        <Header />

        <main className="projects-page">
          <section className="page-hero">
            <div className="container">
              <p className="section-eyebrow">PROJECT</p>

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
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="project-details-page">

        <section className="page-hero">
          <div className="container">

            <p className="section-eyebrow">
              {project.status}
            </p>

            <h1>{project.name}</h1>

            <p>{project.location}</p>

          </div>
        </section>

        <section className="project-details-section">

          <div className="container project-details-grid">

            <div className="project-detail-image">

              <div className="project-image-placeholder">

                <span>MAULI GROUP</span>

                <strong>
                  {project.name}
                </strong>

              </div>

            </div>

            <div className="project-detail-content">

              <p className="section-eyebrow">
                PROJECT INFORMATION
              </p>

              <h2>{project.name}</h2>

              <div className="project-information">

                <div>
                  <span>Location</span>
                  <strong>{project.location}</strong>
                </div>

                <div>
                  <span>Project Type</span>
                  <strong>{project.type}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{project.status}</strong>
                </div>

              </div>

              <p>
                {project.description}
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

      </main>

      <Footer />
    </>
  );
}

export default ProjectDetailsPage;