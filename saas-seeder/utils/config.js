import Home from '../templates/pages/Home';
import Section from '../templates/components/Section';
import Carousel from '../templates/components/Carousel';
import Banner from '../templates/components/Banner';

export const config = {
	componentMappings: {
		'insurance-demo:pages/Home': Home,
		'insurance-demo:components/Section': Section,
		'insurance-demo:components/Carousel': Carousel,
		'insurance-demo:components/Banner': Banner,
	},
};
