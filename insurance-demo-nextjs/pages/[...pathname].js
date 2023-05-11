export default function Page({ pathname, query }) {
	// Render the page
	return (
		<div>
			<h1>Pathname: {pathname}</h1>
			<h1>Query:{query}</h1>
		</div>
	);
}
