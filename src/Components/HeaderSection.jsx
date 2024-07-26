import React from 'react';
import SkillCarousel from './SkillCarousel';

function HeaderSection() {
  return (
    <div className="section header-section">
      <img src="src/assets/selfie.jpg" alt="selfie" id="selfie" />
      <h1>Amber Edwards</h1>
      <div className="tagline">
        <p>Web Developer | Cybersecurity Analyst | Data Analyst | Educator</p>
      </div>
      <SkillCarousel />
    </div>
  );
}

export default HeaderSection;
