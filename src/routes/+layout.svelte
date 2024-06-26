<script>
    import authStore from '$lib/stores/auth.store.js';
    import {afterLogin} from "$lib/helpers/route.helper.js";
    import {page} from "$app/stores";
    import {refreshToken} from "$lib/auth/refreshToken.js";
    import {onMount} from "svelte";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";

    export let data
    if (data.jwt !== '') {
        authStore.jwtToken(data.jwt)
    }
    let isLoggedIn = data.jwt !== ''
    $: isLoggedIn = $authStore.jwtToken !== ''

    console.log("isLoggedIn", isLoggedIn)
    if (browser && !isLoggedIn) {
        goto("/login")
    }

    // cater for browser refresh
    onMount(() => {
        refreshToken(true)
    });

    const logOut = async () => {

        const requestOptions = {
            method: "GET",
            credentials: "include",
        }

        // @ts-ignore
        await fetch("http://localhost:9080/logout", requestOptions)
            .catch((err) => {
                console.log("error logging out", err);
            })
            .finally(() => {
                authStore.jwtToken("");
                afterLogin($page.url, "")
            });
    }

</script>
<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="mt-3">Go Watch a Movie - Svelte!</h1>
        </div>
        <div class="col text-end">
            {#if isLoggedIn }
                <a href="#!" on:click={logOut}><span class="badge bg-danger">Logout</span></a>
            {:else}
                <a href="/login"><span class="badge bg-success">Login</span></a>
            {/if}
        </div>
        <hr class="mb-3">
    </div>
    <div class="row">
        <div class="col-md-2">
            <nav>
                <div class="list-group">
                    <a href="/" class="list-group-item list-group-item-action">Home</a>
                    <a href="/movies" class="list-group-item list-group-item-action">Movies</a>
                    <a href="/movies-cs" class="list-group-item list-group-item-action">Movies CS</a>
                    <a href="/genres" class="list-group-item list-group-item-action">Genres</a>
                    {#if isLoggedIn }
                        <a href="/admin/movie" class="list-group-item list-group-item-action">Add Movie</a>
                        <a href="/catalogue" class="list-group-item list-group-item-action">Manage Catalogue</a>
                        <a href="/graphql" class="list-group-item list-group-item-action">GraphQL</a>
                    {/if}
                </div>
            </nav>
        </div>
        <div class="col-md-10">
            <slot />
        </div>
    </div>
</div>