<script>
    export let name = ''
    export let title = ''
    export let className = ''
    export let placeholder = ''
    export let value = ''
    export let errors = []
    export let errorMsg = ''
</script>
<div class="mb-3">
    <label for={name} class="form-label">
        {title}
    </label>
    <input
            id={name}
            name={name}
            type="date"
            class={className}
            class:is-invalid={errors.indexOf(name) !== -1}
            placeholder={placeholder}
            bind:value
    />
    {#if errors.indexOf(name) !== -1}
        <div class="text-danger">{errorMsg}</div>
    {/if}
</div>