function ProjectComponent({ project }) {
  return (
    <div className="project-card" key={project.id}>
      <img className="project-image" src={project.img} alt={project.alt} />
      <h3 className="project-title">{project.name}</h3>
      <div className="project-details">
        <p>Description: </p>
        <p>{project.description}</p>
        <p>Environment: </p>
        <p>{project.tools}</p>
      </div>
      <div className="project-buttons">
        <a href={project.live} target="_blank">
          <button className="project-live-button">live</button>
        </a>
        <a href={project.github} target="_blank">
          <button className="project-github-button">GitHub</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectComponent;
