import { IconList } from '../IconList';
import './SkillCarousel.css';

function SkillCarousel() {
  return (
    <div className="section carousel">
      <h1>~Technical Skills~</h1>
      <div className=" section carousel-track">
        <div className="carousel-items-container">
          {IconList.map((icon) => (
            <div key={icon.id} className="carousel-item">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
          {IconList.map((icon) => (
            <div key={icon.id} className="carousel-item">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCarousel;
