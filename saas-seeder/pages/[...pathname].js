import { EditablePage, EditorContextHelper } from '@magnolia/react-editor';
import { baseUrl, spaRootNodePath, languages, config } from '../utils/config';

import { pagesApi, templateAnnotationsApi } from '../utils/api';

export async function getServerSideProps(context) {
	const resolvedUrl = context.resolvedUrl;
	const magnoliaContext = EditorContextHelper.getMagnoliaContext(
		resolvedUrl,
		spaRootNodePath,
		languages
	);

	const props = {};

	let pageJson;

	console.log('Pages', pagesApi);

	const pagesRes = await fetch(pagesApi);

	pageJson = await pagesRes.json();

	if (!pageJson.error) props.page = pageJson;

	let templateAnnotationsJson;

	if (magnoliaContext.isMagnolia) {
		const templateAnnotationsRes = await fetch(templateAnnotationsApi);
		templateAnnotationsJson = await templateAnnotationsRes.json();
		props.templateAnnotations = templateAnnotationsJson;
	}

	props.urls = {
		pagesApi,
		templateAnnotationsApi,
	};

	// Required by @magnolia/react-editor
	global.mgnlInPageEditor = magnoliaContext.isMagnoliaEdit;

	console.log('Temples', templateAnnotationsApi);
	return { props };
}

export default function Pathname(props) {
	const { page = {}, templateAnnotations = {} } = props;
	const title = page.browserTitle || page['@name'];

	return (
		<EditablePage
			content={page}
			config={config}
			templateAnnotations={templateAnnotations}
		/>
	);
}
