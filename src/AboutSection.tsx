import React from 'react';
import './AboutSection.css';
import SectionTitle from './SectionTitle';

function AboutSection() {
  return (
    <div className="about-section section-component">
      <SectionTitle title={'About Me'}/>
      <div className="about-section-description">
      	I love creativity. I will take on anything that involves wracking my brain for a unique and innovative way to solve a problem. 
      	It's why I majored in Computer Science at Tufts University with a minor in Multimedia Arts. I try to use a combination of programming, 
      	design, and marketing in order to better develop the most innovative and user-friendly products in the technology industry.
      </div>
      <div className="about-section-signature">
      	McCall Bliss
      </div>
      <div className="about-section-links">
        <div className="button">Resume</div>
        <div className="button">Hire Me</div>
      </div>
    </div>
  );
}

export default AboutSection;
