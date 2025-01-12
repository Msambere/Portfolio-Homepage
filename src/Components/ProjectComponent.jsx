import './ProjectComponent.css';

function ProjectComponent({ project }) {
  return (
    <div className="project-card">
      <img className="project-image" src={project.img} alt={project.alt} />
      <h3 className="project-title">{project.name}</h3>
      <h4>{project.subtitle}</h4>
      <div className="project-details">
        <p className="description">{project.description}</p>
        <p className="label">Environment: </p>
        <p className="tools">{project.tools.join(' / ')}</p>
      </div>
      <div className="project-buttons">
        <a href={project.live} target="_blank">
          <img src="/external-link.png" alt="external link" />
        </a>
        <a href={project.github} target="_blank">
          <img src="/github-sign.png" alt="Github link" />
        </a>
      </div>
    </div>
  );
}

export default ProjectComponent;
