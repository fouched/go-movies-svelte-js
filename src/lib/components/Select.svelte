<script>
    export let name = ''
    export let title = ''
    export let placeholder = ''
    export let errorDiv = ''
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
            bind:value
    >
        <option value="">{placeholder}</option>
        {#each options as option}
            <option value={option.id}>{option.value}</option>
        {/each}
    </select>
    <div class={errorDiv}>{errorMsg}</div>
</div>