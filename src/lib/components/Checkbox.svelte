<script>
    export let name = ''
    export let title = ''
    export let value = ''
    export let checked = false
</script>
<div class="form-check">
    <input
            id={name}
            name={name}
            class="form-check-input"
            type="checkbox"
            value={value}
            bind:checked={checked}
    />
    <label for={name} class="form-check-label">
        {title}
    </label>
</div>