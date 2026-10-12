import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { ongoingProjects } from "../data/companyData";

function ProjectsSection() {
  return (
    <section className="projects-section">

      <div className="container">

        <div className="section-heading section-heading-row">

          <div>
            <p className="section-eyebrow">
              OUR WORK
            </p>

            <h2>
              Ongoing Projects
            </h2>

            <p>
              Explore projects currently being developed by
              Mauli Group.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-link"
          >
            View All Projects →
          </Link>

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
  );
}

export default ProjectsSection;
