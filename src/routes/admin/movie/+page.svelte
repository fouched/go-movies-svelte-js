<script>
	import InputText from "$lib/components/InputText.svelte";
	import InputDate from "$lib/components/InputDate.svelte";
	import InputNumber from "$lib/components/InputNumber.svelte";
	import Select from "$lib/components/Select.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
	import Checkbox from "$lib/components/Checkbox.svelte";
	import Swal from "sweetalert2";

	export let data;


	const movie = {
		id: 0,
		title: '',
		release_date: '',
		runtime: '',
		mpaa_rating: '',
		description: '',
		genres: data.genres,
	}

	const mpaaOptions = [
		{id: 'G', value:'G'},
		{id: 'PG', value:'PG'},
		{id: 'PG13', value:'PG13'},
		{id: 'R', value:'R'},
		{id: '18', value:'18'},
	]

	let errors = []

	// @ts-ignore
	const submitForm = async (event) => {

		const formData = new FormData(event.target)
		movie.title = String(formData.get('title'));
		movie.release_date = String(formData.get('release_date'));
		movie.runtime = String(formData.get('runtime'));
		movie.description = String(formData.get('description'));
		movie.mpaa_rating = String(formData.get('mpaa_rating'));

		let required = [
			{ field: movie.title, name: "title"},
			{ field: movie.release_date, name: "release_date"},
			{ field: movie.runtime, name: "runtime"},
			{ field: movie.description, name: "description"},
			{ field: movie.mpaa_rating, name: "mpaa_rating"},
		]

		// first clear previous errors
		errors = []
		required.forEach(function (obj) {
			if (obj.field === "") {
				errors.push(obj.name)
			}
		})


		let counter = 0;
		for (let i = 0; i < movie.genres.length; i++) {
			if (movie.genres[i].checked) {
				counter++;
				break;
			}
		}

		if (counter === 0) {
			await Swal.fire({
				title: 'Error',
				text: 'Please choose at least one genre',
				icon: 'error',
				confirmButtonText: 'OK',
			})
			errors.push("genres");
		}

		// Svelte's reactivity is triggered by assignments.
		// Methods that mutate arrays or objects will not
		// trigger updates by themselves.
		errors = errors

		if (errors.length > 0) {
			return false
		}
	}

</script>
<div>
	<h2>Add/Edit Movie</h2>
	<hr/>
<!--	<pre>{JSON.stringify(movie, null, 3)}</pre>-->
	<form on:submit|preventDefault={submitForm}>
		<input type="hidden" id="id" name="id" value={movie.id}/>
		<InputText
				title="Title"
				className="form-control"
				name="title"
				bind:value={movie.title}
				bind:errors
				errorMsg="Please enter a title"
		/>
		<InputDate
				title="Release Date"
				className="form-control"
				name="release_date"
				bind:value={movie.release_date}
				bind:errors
				errorMsg="Please enter a release date"
		/>
		<InputNumber
				title="Runtime"
				className="form-control"
				name="runtime"
				bind:value={movie.runtime}
				bind:errors
				errorMsg="Please enter a runtime"
		/>
		<Select
				title="MPAA Rating"
				name="mpaa_rating"
				options={mpaaOptions}
				placeholder="Choose..."
				bind:value={movie.mpaa_rating}
				bind:errors
				errorMsg="Please choose"
		/>
		<TextArea
				title="Description"
				name="description"
				className="form-control"
				rows={3}
				bind:value={movie.description}
				bind:errors
				errorMsg="Please enter a description"
		/>
		<hr />
		{#each data.genres as g, idx(g)}
			<Checkbox
					title={g.genre}
					name={"genre-" + idx}
					value={g.id}
					bind:checked={movie.genres[idx].checked}
			/>
		{/each}
		<hr />
		<button class="btn btn-primary" type="submit">Save</button>
	</form>
</div>