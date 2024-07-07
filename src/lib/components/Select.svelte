<script>
    export let name = ''
    export let title = ''
    export let placeholder = ''
    export let errors = []
    export let errorMsg = ''
    export let options = []
    export let value = ''

</script>
<div class="mb-3">
    <label for={name} class="form-label">
        {title}
    </label>
    <select
            id={name}
            name={name}
            class="form-select"
            class:is-invalid={errors.indexOf(name) !== -1}
            bind:value
    >
        <option value="">{placeholder}</option>
        {#each options as option}
            <option value={option.id}>{option.value}</option>
        {/each}
    </select>
    {#if errors.indexOf(name) !== -1}
        <div class="text-danger">{errorMsg}</div>
    {/if}
</div>