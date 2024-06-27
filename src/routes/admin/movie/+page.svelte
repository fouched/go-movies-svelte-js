<script>
	import InputText from "$lib/components/InputText.svelte";
	import InputDate from "$lib/components/InputDate.svelte";
	import InputNumber from "$lib/components/InputNumber.svelte";
	import Select from "$lib/components/Select.svelte";
	import TextArea from "$lib/components/TextArea.svelte";

	const movie = {
		id: 0,
		title: '',
		release_date: '',
		runtime: '',
		mpaa_rating: '',
		description: '',
	}

	const mpaaOptions = [
		{id: 'G', value:'G'},
		{id: 'PG', value:'PG'},
		{id: 'PG13', value:'PG13'},
		{id: 'R', value:'R'},
		{id: '18', value:'18'},
	]

	const errors = []
	const hasError = (key) => {
		return errors.indexOf(key) !== -1;
	}


</script>
<div>
	<h2>Add/Edit Movie</h2>
	<hr/>
	<pre>{JSON.stringify(movie, null, 3)}</pre>
	<form>
		<input type="hidden" id="id" name="id" value={movie.id}/>
		<InputText
				title="Title"
				className="form-control"
				name="title"
				bind:value={movie.title}
				errorDiv={hasError('title') ? 'text-danger' : 'd-none'}
				errorMsg="Please enter a title"
		/>
		<InputDate
				title="Release Date"
				className="form-control"
				name="release_date"
				bind:value={movie.release_date}
				errorDiv={hasError('release_date') ? 'text-danger' : 'd-none'}
				errorMsg="Please enter a release date"
		/>
		<InputNumber
				title="Runtime"
				className="form-control"
				name="runtime"
				bind:value={movie.runtime}
				errorDiv={hasError('runtime') ? 'text-danger' : 'd-none'}
				errorMsg="Please enter a runtime"
		/>
		<Select
				title="MPAA Rating"
				name="mpaa_rating"
				options={mpaaOptions}
				bind:value={movie.mpaa_rating}
				placeholder="Choose..."
				errorDiv={hasError('mpaa_rating') ? 'text-danger' : 'd-none'}
				errorMsg="Please choose"
		/>
		<TextArea
				title="Description"
				name="description"
				className="form-control"
				bind:value={movie.description}
				rows={3}
				errorDiv={hasError('description') ? 'text-danger' : 'd-none'}
				errorMsg="Please enter a description"
		/>
	</form>
</div>