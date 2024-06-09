<script>
    import { page } from '$app/stores';
</script>

<div class="container">
    <div class="col-md-6 offset-md-3">
        <h1 class="mt-3">Oops</h1>
        <p>Sorry, an unexpected error occurred</p>
        <p>
            <em>{$page.status || $page.error?.message}</em>
        </p>
    </div>
</div>