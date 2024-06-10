<script>
  import { createEventDispatcher } from 'svelte';
  import { InputMessage } from '@/components';

  export let label = null;
  export let errorMessage = null;
  export let successMessage = null;
  export let classes = '';

  const dispatch = createEventDispatcher();

  const valueChange = (event) => {
    dispatch('valueChange', event.target.value);
  };
</script>

<label class="form-element {classes}" class:error={errorMessage} class:success={successMessage}>
  {#if label}
    <span class="label">{label}</span>
  {/if}

  <textarea class="field h-36" {...$$restProps} on:keyup={valueChange}></textarea>

  <InputMessage {errorMessage} {successMessage} />
</label>
