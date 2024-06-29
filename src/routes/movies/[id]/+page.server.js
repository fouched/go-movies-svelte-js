export async function load({ params }) {
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	const requestOptions = {
		method: "GET",
		headers: headers,
	}

	let movie = {};
	await fetch(`http://localhost:9080/movies/${params.id}`, requestOptions)
		.then((res) => res.json())
		.then(data => movie = data)
		.catch(err => console.log(err))

	if (movie.genres) {
		movie.genres = Object.values(movie.genres)
	} else {
		movie.genres = []
	}

	return { movie };
}