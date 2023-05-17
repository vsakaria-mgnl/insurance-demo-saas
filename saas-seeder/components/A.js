// import { useContext } from 'react';
import Link from 'next/link';
// import { spaRootNodePath } from '../utils/config';
// import MagnoliaContext from '../utils/MagnoliaContext';

function A(props) {
	const { className, href, label, children, searchParams } = props;
	// const magnoliaContext = useContext(MagnoliaContext);
	const isFallbackLocale = magnoliaContext.currentLanguage === 'en';
	let pathname = href.replace(
		new RegExp('(.*' + 'spaRootNodePath' + '|.html|/$)', 'g'),
		''
	);

	return (
		<Link
			href={{
				pathname,
				query: Object.assign({}, searchParams),
			}}
		>
			<a className={className}>
				{label}
				{children}
			</a>
		</Link>
	);
}

export default A;
