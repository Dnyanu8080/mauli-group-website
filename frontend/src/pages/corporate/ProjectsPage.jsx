import {
  ongoingProjects,
  completedProjects,
} from "../../data/companyData";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

import {
  ongoingProjects,
  completedProjects,
} from "../../data/companyData";

function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="projects-page">

        <section className="page-hero">
          <div className="container">
            <p className="section-eyebrow">OUR WORK</p>

            <h1>Projects</h1>

            <p>
              Explore the ongoing and completed construction
              projects associated with Mauli Group.
            </p>
          </div>
        </section>

        <section className="projects-section">
          <div className="container">

            <div className="section-heading">
              <p className="section-eyebrow">
                CURRENT PROJECTS
              </p>

              <h2>Ongoing Projects</h2>

              <p>
                Projects currently under development.
              </p>
            </div>

            <div className="projects-grid">
              {ongoingProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </div>
        </section>

        <section className="projects-section completed-projects-section">
          <div className="container">

            <div className="section-heading">
              <p className="section-eyebrow">
                OUR EXPERIENCE
              </p>

              <h2>Completed Projects</h2>

              <p>
                A selection of completed residential
                construction projects.
              </p>
            </div>

            <div className="projects-grid">
              {completedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default ProjectsPage;