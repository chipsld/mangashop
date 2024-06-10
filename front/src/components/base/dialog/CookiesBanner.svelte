<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cookieConsent } from '@/stores';
  import { _ } from '@/translations/i18n';
  import { CookiesConsent } from '@/components';

  export let fadeDuration = 200;
  export let showCookieBanner = false;

  onMount(() => {
    checkCookieStatus();
  });

  const checkCookieStatus = () => {
    showCookieBanner = $cookieConsent === undefined || $cookieConsent === null;
  };
</script>

{#if showCookieBanner}
  <div
    in:fade|global={{ duration: fadeDuration }}
    out:fade|global={{ duration: fadeDuration }}
    class="fixed right-0 z-50 max-w-lg p-4 mx-4 bg-white border border-orange-500 rounded-md shadow-lg bottom-4"
    role="alert"
  >
    <h3 class="flex items-center justify-between mb-4 font-semibold text-gray-800 h3">
      {$_('cookies_banner.title')}
    </h3>

    <CookiesConsent on:cookieConsent={checkCookieStatus} />
  </div>
{/if}
