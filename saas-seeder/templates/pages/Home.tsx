import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

export default function Home({ main }: { main: {} }) {
	return <>{main && <EditableArea content={main} />}</>;
}
