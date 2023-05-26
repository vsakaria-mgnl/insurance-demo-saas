import Home from '../templates/pages/Home';
import Basic from '../templates/pages/Basic';
import Section from '../templates/components/Section';
import Carousel from '../templates/components/Carousel';
import Banner from '../templates/components/Banner';
import TextImage from '../templates/components/TextImage';
import Card from '../templates/components/Card';
import Columns from '../templates/components/Columns';
import Quote from '../templates/components/Quote';
import Map from '../templates/components/Map';
import PageLink from '../templates/components/PageLink';

export const config = {
	componentMappings: {
		'insurance-demo:pages/Home': Home,
		'insurance-demo:pages/Basic': Basic,

		'insurance-demo:components/Section': Section,
		'insurance-demo:components/Carousel': Carousel,
		'insurance-demo:components/Banner': Banner,
		'insurance-demo:components/TextImage': TextImage,
		'insurance-demo:components/Card': Card,
		'insurance-demo:components/Columns': Columns,
		'insurance-demo:components/Quote': Quote,
		'insurance-demo:components/Map': Map,
		'insurance-demo:components/PageLink': PageLink,
	},
};
