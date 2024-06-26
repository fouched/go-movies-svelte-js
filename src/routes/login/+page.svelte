<script>
	import { page } from '$app/stores'
	import Alert from "$lib/components/Alert.svelte";
	import authStore from '$lib/stores/auth.store.js';
	import {afterLogin} from "$lib/helpers/route.helper.js";

	let alertClassName = "d-none"
	let alertMessage = ""

	// @ts-ignore
	const onLogin = async (event) => {

		const formData = new FormData(event.target)
		const email = formData.get("email")
		const password = formData.get("password")

		// build request payload
		let payload = {
			email: email,
			password: password,
		}

		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			credentials: 'include',
			body: JSON.stringify(payload)
		}

		// @ts-ignore
		await fetch(`http://localhost:9080/authenticate`, requestOptions)
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						console.log("login error", data.error);
						alertClassName = "alert-danger";
						alertMessage = "Invalid credentials";
					} else {
						console.log("login success");
						authStore.jwtToken(data.access_token);
						afterLogin($page.url, data.access_token);
					}
				})
				.catch(err => {
					console.log(err.message)
				});

		//clear the form
		event.target.reset()
	}

</script>
<Alert className={alertClassName} message={alertMessage}/>
<div class="col-md-6 offset-md-3">
	<h2 class="mb-3 text-center">Login</h2>
	<form on:submit|preventDefault={onLogin}>
		<label for="email" class="form-label">Email</label>
		<input id="email" name="email" type="text" class="form-control" autocomplete="off">
		<label for="password" class="form-label">Password</label>
		<input id="password" name="password" type="password" class="form-control mb-3" autocomplete="off">
		<input type="submit" class="btn btn-primary" value="Log in" />
	</form>
</div>