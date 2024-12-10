import React from 'react';
import './AboutSection.scss';
import SectionTitle from './SectionTitle';

function AboutSection() {
    return (
        <div className="about-section section-component">
            <SectionTitle title={'About'}/>
            <div className="about-section-description">
                I love <span className="underlined">creativity</span>. I will take on anything that involves wracking my brain for a unique and innovative way to solve a problem. 
                It's why I majored in Computer Science at Tufts University with a minor in Multimedia Arts. I try to use a combination of programming, 
                design, and marketing in order to better develop the most innovative and user-friendly products in the technology industry.
            </div>
        </div>
    );
}

export default AboutSection;
