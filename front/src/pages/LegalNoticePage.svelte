<script>
  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
  import { CookiesConsent } from '@/components';
</script>

<div in:fade|global={{ duration: 500 }} class="h-screen flex-center-center">
  <div class="block text-center">
    <h1 class="h1">{$_('legal_notice.title')}</h1>

    <div class="max-w-lg p-4 mt-20 text-left">
      <CookiesConsent />
    </div>
  </div>
</div>
