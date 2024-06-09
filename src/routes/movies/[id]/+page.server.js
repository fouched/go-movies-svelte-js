export function load({ params }) {

	console.log("Loading movie", params.id);

	const movie = {
		id: 1,
		title: 'Highlander',
		release_date: '1986-03-07',
		runtime: 116,
		mpaa_rating: 'R',
		description: 'Some long description'
	};

	return { movie };
}