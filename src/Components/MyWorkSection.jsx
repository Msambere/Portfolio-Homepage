import ProjectComponent from './ProjectComponent';
import { ProjectList } from '../ProjectList';

function MyWorkSection() {
  return (
    <div className="section project-section">
      <h1>My Work</h1>
      <div className="all-projects-container">
        {ProjectList.map((project) => (
          <ProjectComponent project={project} />
        ))}
      </div>
    </div>
  );
}

export default MyWorkSection;
