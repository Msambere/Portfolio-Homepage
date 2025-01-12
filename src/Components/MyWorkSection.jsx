import ProjectComponent from './ProjectComponent';
import { ProjectList } from '../ProjectList';
import './MyWorkSection.css'

function MyWorkSection() {
  return (
    <div className="section project-section">
      <h1>My Work</h1>
      <div className="all-projects-container">
        {ProjectList.map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default MyWorkSection;
