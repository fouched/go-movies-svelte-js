<script>
	export let data;
</script>
<div>
	<h2>Movie: {data.movie.title}</h2>
	<small><em>{data.movie.release_date}, {data.movie.runtime}, Rated {data.movie.mpaa_rating}</em></small>
	<br />
	{#each data.movie.genres as g}
		<span class="badge bg-secondary me-2">{g.genre}</span>
	{/each}
	<hr />
	{#if data.movie.image !== ""}
		<div class="mb-3">
			<img src={`https://image.tmdb.org/t/p/w200${data.movie.image}`} alt="poster" />
		</div>
	{/if}
	<p>{data.movie.description}</p>
</div>