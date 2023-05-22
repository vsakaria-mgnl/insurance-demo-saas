import '../styles/desktop.css';
import '../styles/grid.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
