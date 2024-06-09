<script>
	export let data;
</script>
<div>
	<h2>Movie: {data.movie.title}</h2>
	<small><em>{data.movie.release_date}, {data.movie.runtime}, Rated {data.movie.mpaa_rating}</em></small>
	<hr />
	<p>{data.movie.description}</p>
</div>