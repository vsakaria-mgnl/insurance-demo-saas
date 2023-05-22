import Home from '../templates/pages/Home';
import Section from '../templates/components/Section';
import Carousel from '../templates/components/Carousel';
import Banner from '../templates/components/Banner';
import TextImage from '../templates/components/TextImage';
import Card from '../templates/components/Card';
import Columns from '../templates/components/Columns';

export const config = {
	componentMappings: {
		'insurance-demo:pages/Home': Home,
		'insurance-demo:components/Section': Section,
		'insurance-demo:components/Carousel': Carousel,
		'insurance-demo:components/Banner': Banner,
		'insurance-demo:components/TextImage': TextImage,
		'insurance-demo:components/Card': Card,
		'insurance-demo:components/Columns': Columns,
	},
};
