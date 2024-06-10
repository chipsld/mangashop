<script>
  import { createEventDispatcher } from 'svelte';
  import { dictionary } from '@/translations/i18n';

  export let value;

  const dispatch = createEventDispatcher();

  const availablesLocales = Object.keys($dictionary);

  const handleLocaleChange = (event) => {
    dispatch('locale-changed', event.target.value);
  };
</script>

<div class="ml-2">
  <div>
    <select {value} on:change|preventDefault={handleLocaleChange} class="px-2 py-1 border rounded-full cursor-pointer">
      {#each availablesLocales as locale}
        <option value={locale}>{locale}</option>
      {/each}
    </select>
  </div>
</div>
