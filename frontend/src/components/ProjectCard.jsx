import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">

        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
          />
        ) : (
          <div className="project-image-placeholder">
            MAULI GROUP
          </div>
        )}

        <span className="project-status">
          {project.status}
        </span>

      </div>

      <div className="project-content">

        <p className="project-location">
          {project.location}
        </p>

        <h3>
          {project.name}
        </h3>

        <p>
          {project.type}
        </p>

        {project.progress !== undefined && (
          <div className="project-progress">

            <div className="progress-header">
              <span>Project Progress</span>
              <strong>{project.progress}%</strong>
            </div>

            <div className="progress-bar">
              <span
                style={{
                  width: `${project.progress}%`,
                }}
              ></span>
            </div>

          </div>
        )}

        <Link
          to={`/projects/${project.id}`}
          className="project-link"
        >
          View Project →
        </Link>

      </div>

    </article>
  );
}

export default ProjectCard;