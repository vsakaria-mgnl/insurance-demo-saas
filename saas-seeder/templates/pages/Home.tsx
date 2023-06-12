import React from 'react';
import { EditableArea, EditableComponent } from '@magnolia/react-editor';

function renderHomeHeader({ content }: any) {
	console.table('content', content);
	return <div className="header">Header</div>;
}

export default function Home(props: any) {
	const { main, header } = props;

	return (
		<>
			<main>
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
