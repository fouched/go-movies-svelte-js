<script>
    export let name = ''
    export let title = ''
    export let className = ''
    export let value = ''
    export let rows = 2
    export let errors = []
    export let errorMsg = ''
</script>
<div class="mb-3">
    <label for={name} class="form-label">
        {title}
    </label>
    <textarea
            id={name}
            name={name}
            class={className}
            class:is-invalid={errors.indexOf(name) !== -1}
            rows={rows}
            bind:value
    />
    {#if errors.indexOf(name) !== -1}
        <div class="text-danger">{errorMsg}</div>
    {/if}
</div>