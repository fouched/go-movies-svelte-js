export async function load({ cookies }) {

	let moviesList = []

	const headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', 'Bearer ' + cookies.get('jwt'));

	const requestOptions = {
		method: "GET",
		headers: headers,
	}

	await fetch(`http://localhost:9080/admin/movies`, requestOptions)
		.then((res) => res.json())
		.then(data => moviesList = data)
		.catch(err => console.log(err));

	return { moviesList };
}