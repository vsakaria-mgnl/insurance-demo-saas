import React from 'react';
import { EditableArea, EditableComponent } from '@magnolia/react-editor';

const url =
	'https://author.sales-demo-prod.eu-playground.magnolia-platform.com/dam/jcr:8b9597ab-847e-4b0e-8152-7ad9cd10a8a1/Background_bottom_01.png';

function renderHomeHeader(content: any) {
	console.log(content);
	return (
		<div className="header">
			Header
			{/* {content['@nodes'].map((nodeName: any) => (
				<div key={content[nodeName]['@id']}>
					<EditableComponent content={{ ...content[nodeName] }} />
				</div>
			))} */}
		</div>
	);
}

export default function Home(props: any) {
	const { main, header } = props;

	console.log(props);

	return (
		<>
			<h1>I am </h1>
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
