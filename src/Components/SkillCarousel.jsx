import { IconList } from '../IconList';

function SkillCarousel() {
  return (
    <div className=" section carousel">
      {/* <button id="carousel-button-prev" aria-label="Previous">
        <img src="/previous-icon.png" alt="previous" />
      </button> */}
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
      {/* <button id="carousel-button-next" aria-label="Next">
        <img src="/next-icon.png" alt="next" />
      </button> */}
    </div>
  );
}

export default SkillCarousel;
