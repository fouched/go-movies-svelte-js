<script>
	export let data

	// async function getMovies() {
	// 	return fetch(`http://localhost:9080/movies`)
	// 			.then((res) => res.json())
	// 			.catch(err => console.log(err));
	// }
</script>
<div>
	<h2>Movies</h2>
	<hr />
	<table class="table table-striped table-hover">
		<thead>
		<tr>
			<th>Title</th>
			<th>Release Date</th>
			<th>Rating</th>
		</tr>
		</thead>
		<tbody>
		<!--{#await getMovies()}-->
		<!--	<tr><td colspan="3" class="text-center">Loading...</td></tr>-->
		<!--{:then movies}-->
		<!--	{#each movies as movie}-->
		<!--		<tr>-->
		<!--			<td><a href="/movies/{movie.id}">{movie.title}</a></td>-->
		<!--			<td>{movie.release_date}</td>-->
		<!--			<td>{movie.mpaa_rating}</td>-->
		<!--		</tr>-->
		<!--	{/each}-->
		<!--{/await}-->
		{#each data.moviesList as movie}
			<tr>
				<td><a href="/movies/{movie.id}">{movie.title}</a></td>
				<td>{movie.release_date.substring(0,10)}</td>
				<td>{movie.mpaa_rating}</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>