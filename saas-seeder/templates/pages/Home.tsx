import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

const url =
	'https://author.sales-demo-prod.eu-playground.magnolia-platform.com/dam/jcr:8b9597ab-847e-4b0e-8152-7ad9cd10a8a1/Background_bottom_01.png';

function renderHomeHeader(content: any) {
	console.log(content);
	return <div className="header">Header</div>;
}

export default function Home({ main, header }: { main: {}; header: {} }) {
	return (
		<>
			<main style={{ backgroundImage: 'url(' + url + ')' }}>
				{header && (
					<EditableArea
						content={header}
						customView={renderHomeHeader}
					/>
				)}

				{main && <EditableArea content={main} />}
			</main>
		</>
	);
}
