<script>
  import Fa from 'svelte-fa';
  import * as customIcons from '@/assets/svg';

  export let name,
    classes = '',
    customIcon = false;
</script>

{#if customIcon}
  <svg
    class={classes}
    viewBox="0 0 24 24"
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    focusable="false"
  >
    <use href={`${customIcons[name]}#icon-${name}`} />
  </svg>
{:else}
  <Fa icon={name} class={classes} />
{/if}
