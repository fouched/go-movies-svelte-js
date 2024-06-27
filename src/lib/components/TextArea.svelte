<script>
    export let name = ''
    export let title = ''
    export let className = ''
    export let value = ''
    export let rows = 2
    export let errorDiv = ''
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
            rows={rows}
            bind:value
    />
    <div class={errorDiv}>{errorMsg}</div>
</div>