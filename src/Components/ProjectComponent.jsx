function ProjectComponent({ project }) {
  return (
    <div className="project-card" key={project.id}>
      <h3 className="project-title">{project.name}</h3>
      <img className="project-image" src={project.img} alt={project.alt} />
      <div className="project-details">
        <p>Description:</p>
        <p>{project.description}</p>
        <p>Environment: </p>
        <p>{project.tools}</p>
      </div>
      <div className="project-buttons">
        <button className="project-live-button">live</button>
        <button className="project-github-button">GitHub</button>
      </div>
    </div>
  );
}

export default ProjectComponent;
