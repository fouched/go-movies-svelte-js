<script>
    export let name = ''
    export let title = ''
    export let className = ''
    export let placeholder = ''
    export let autocomplete = 'off'
    export let value = ''
    export let errorDiv = ''
    export let errorMsg = ''
</script>
<div class="mb-3">
    <label for={name} class="form-label">
        {title}
    </label>
    <input
            id={name}
            name={name}
            type="text"
            class={className}
            placeholder={placeholder}
            autocomplete={autocomplete}
            bind:value
    />
    <div class={errorDiv}>{errorMsg}</div>
</div>