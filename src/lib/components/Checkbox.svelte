<script>
    export let name = ''
    export let title = ''
    export let className = ''
    export let value = ''
    export let checked = false
    export let errorDiv = ''
    export let errorMsg = ''
</script>
<div class="mb-3">
    <input
            id={name}
            name={name}
            class={className}
            type="checkbox"
            value={value}
            bind:checked={checked}
    />
    <label for={name} class="form-check-label">
        {title}
    </label>
    <div class={errorDiv}>{errorMsg}</div>
</div>