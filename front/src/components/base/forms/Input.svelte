<script>
  import { InputMessage } from '@/components';

  export let label = null;
  export let value = null;
  export let errorMessage = null;
  export let successMessage = null;
  export let classes = '';
</script>

<label class="form-element {classes}" class:error={errorMessage} class:success={successMessage}>
  {#if label}
    <span class="label">{label}</span>
  {/if}

  <input class="field" {...$$restProps} bind:value />

  <InputMessage {errorMessage} {successMessage} />
</label>
