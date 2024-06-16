export async function load() {

	let moviesList = []

	await fetch(`http://localhost:9080/movies`)
		.then((res) => res.json())
		.then(data => moviesList = data)
		.catch(err => console.log(err));

	return { moviesList };
}