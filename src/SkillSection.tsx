import './SkillSection.scss';
import SectionTitle from './SectionTitle';

import data from './data/skills.json';
import { useMemo } from 'react';

type SkillType = '' | 'framework' | 'language';

const MAX_PROFICIENCY = 5;

export interface SkillItemProps {
	item: SkillObject;
}

export interface SkillObject {
	name: string;
	type: string;
	proficiency: number;
}

function SkillItem({ item }: SkillItemProps) {
    const proficiency = useMemo(() => {
        return ((item.proficiency / MAX_PROFICIENCY) * 100).toString() + '%'
    }, []);
    return (
        <div className="skill">
            <div className="skill-name">{item.name}</div>
                <div className="skill-bar">
                <div className="skill-per" data-per={proficiency} style={{ maxWidth: proficiency }}></div>
            </div>
      </div>
    )
}

export default function SkillSection() {
    const skills: SkillObject[] = useMemo(() => data, []);

	return (
		<div className="skill-section section-component animate-on-scroll">
            <SectionTitle title={'Skills'}/>
			<span className="skill-section-text skills">
                {skills.map(skill => <SkillItem item={skill} />)}
			</span>
		</div>
	);
}