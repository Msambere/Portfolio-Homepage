import ProjectComponent from './ProjectComponent';
import { ProjectList } from '../ProjectList';

function MyWorkSection() {
  return (
    <div className="section project-section">
      {ProjectList.map((project) => (
        <ProjectComponent project={project} />
      ))}
    </div>
  );
}

export default MyWorkSection;
