// import { useContext } from 'react';
import Link from 'next/link';
// import { spaRootNodePath } from '../utils/config';
// import MagnoliaContext from '../utils/MagnoliaContext';

function A(props) {
	const { href, label } = props;

	return <Link href={href}>{label}</Link>;
}

export default A;
