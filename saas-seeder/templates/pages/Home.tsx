import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

const url =
	'https://author.sales-demo-prod.eu-playground.magnolia-platform.com/dam/jcr:8b9597ab-847e-4b0e-8152-7ad9cd10a8a1/Background_bottom_01.png';

export default function Home({ main }: { main: {} }) {
	return (
		<>
			<main style={{ backgroundImage: 'url(' + url + ')' }}>
				{main && <EditableArea content={main} />}
			</main>
		</>
	);
}
