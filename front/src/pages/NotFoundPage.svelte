<script>
  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
</script>

<div in:fade|global={{ duration: 500 }} class="h-screen flex-center-center">
  <div class="block text-center">
    <h1 class="h1">{$_('not_found')}</h1>
  </div>
</div>
