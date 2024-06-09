<script>
    import { goto } from "$app/navigation";
    import authStore from "$lib/stores/auth.stores";

    const logOut = () => {
        authStore.logout()
        goto("/login")
    }

</script>
<div class="container">
    <div class="row">
        <div class="col">
            <h1 class="mt-3">Go Watch a Movie - Svelte!</h1>
        </div>
        <div class="col text-end">
            {#if $authStore.jwtToken === ""}
                <a href="/login"><span class="badge bg-success">Login</span></a>
            {:else}
                <a href="#!" on:click={logOut}><span class="badge bg-danger">Logout</span></a>
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
                    <a href="/genres" class="list-group-item list-group-item-action">Genres</a>
                    {#if $authStore.jwtToken !== ""}
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