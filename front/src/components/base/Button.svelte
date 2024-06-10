<script>
  import { Icon } from '@/components';
  import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

  export let styleType = 'primary';
  export let classes = '';
  export let loading = false;
  export let disabled = false;
</script>

<button disabled={disabled | loading} class="button {styleType} {classes}" on:click {...$$restProps}>
  {#if loading}
    <Icon name={faCircleNotch} classes="animate-spin" />
  {/if}

  <slot />
</button>

<style lang="postcss" scoped>
  .button {
    @apply inline-flex justify-center items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed;
  }

  .primary {
    @apply bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-orange-600 disabled:bg-orange-400;
  }

  .outlined {
    @apply text-orange-600 border-2 border-orange-600 hover:text-orange-500 hover:border-orange-500 disabled:border-orange-400 disabled:text-orange-400;
  }
</style>
