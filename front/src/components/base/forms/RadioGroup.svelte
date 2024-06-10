<script>
  import { createEventDispatcher } from 'svelte';
  import { InputMessage } from '@/components';

  export let options;
  export let name;
  export let selected = null;
  export let label = null;
  export let errorMessage = null;
  export let successMessage = null;
  export let classes = '';

  const dispatch = createEventDispatcher();

  const valueChange = (event) => {
    dispatch('valueChange', event.target.value);
  };
</script>

<fieldset class="form-element {classes}" class:error={errorMessage} class:success={successMessage}>
  {#if label}
    <legend class="label mb-2">{label}</legend>
  {/if}

  {#each options as option}
    <label class="flex items-center gap-2 text-sm text-gray-800">
      <input
        {name}
        type="radio"
        value={option.value}
        class="appearance-none flex-center-center w-4 h-4 bg-white shadow-sm border border-gray-300 rounded-full radio"
        bind:group={selected}
        on:change={valueChange}
      />
      {option.label}
    </label>
  {/each}

  <InputMessage {errorMessage} {successMessage} classes="mt-2" />
</fieldset>

<style lang="postcss" scoped>
  .radio {
    @apply focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600 checked:border-orange-600 checked:bg-orange-600 checked:after:block checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full;
  }
</style>
