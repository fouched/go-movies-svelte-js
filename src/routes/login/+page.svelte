<script>
	import authStore from "$lib/stores/auth.stores";
	import {goto} from "$app/navigation";
	import Alert from "$lib/components/Alert.svelte";

	let alertClassName = "d-none"
	let alertMessage = ""

	const onLogin = (/** @type {any} */ event) => {
		const formData = new FormData(event.target)

		const email = formData.get("email")
		authStore.login(email)
		//clear the form
		event.target.reset()

		if ($authStore.jwtToken !== "") {
			goto("/")
		} else {
			alertClassName = "alert-danger"
			alertMessage = "Invalid credentials"
		}

	}

</script>
<Alert className={alertClassName} message={alertMessage}/>
<div class="col-md-6 offset-md-3">
	<h2 class="mb-3 text-center">Login</h2>
	<form on:submit|preventDefault={onLogin}>
		<label for="email" class="form-label">Email</label>
		<input id="email" name="email" type="text" class="form-control" autocomplete="off">
		<label for="password" class="form-label">Password</label>
		<input id="password" name="password" type="password" class="form-control mb-3">
		<input type="submit" class="btn btn-primary" value="Log in" />
	</form>
</div>