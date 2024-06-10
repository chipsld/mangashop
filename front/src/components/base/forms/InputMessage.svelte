<script>
  export let errorMessage = null;
  export let successMessage = null;
  export let classes = '';
</script>

{#if errorMessage}
  <p class="error-message {classes}">{errorMessage}</p>
{:else if successMessage}
  <p class="success-message {classes}">{successMessage}</p>
{/if}
