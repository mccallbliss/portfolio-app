import React from 'react';

export default function SectionTitle({title}: SectionTitleProps) {
	return (
		<h1 id={title.toLowerCase()}>{title}</h1>
	);
}

interface SectionTitleProps {
    title: string;
}