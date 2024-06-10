<script>
  import { createEventDispatcher } from 'svelte';
  import { location, paths } from '@/router/routes';
  import { cookieConsent } from '@/stores';
  import { _ } from '@/translations/i18n';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';
  import { Button, Icon } from '@/components';

  const dispatch = createEventDispatcher();

  $: showBannerTitle = $location === paths.legalNotice.path;

  const acceptCookies = () => {
    cookieConsent.set(true);
    dispatch('cookieConsent');
    /* Add your logic here (example: enable Google Analytics) */
  };

  const declineCookies = () => {
    cookieConsent.set(false);
    dispatch('cookieConsent');
    /* Add your logic here (example: disable Google Analytics) */
  };
</script>

{#if showBannerTitle}
  <div class="flex items-center justify-between mb-4 font-semibold text-gray-800">
    {$_('legal_notice.cookies_policy')}
  </div>
{/if}

<div class="mb-6 text-sm text-gray-600">
  {$_('cookies_banner.content')}
  <!-- TODO: Change cookie policy link -->
  <a href="https://kinoba.fr" class="text-orange-500">
    {$_('cookies_banner.link')}
  </a>
</div>

<div class="flex space-x-4">
  <Button on:click={acceptCookies} disabled={$cookieConsent}>
    {#if $cookieConsent}
      {$_('cookies_banner.accepted_cookies')} <Icon name={faCheck} />
    {:else}
      {$_('cookies_banner.accept')}
    {/if}
  </Button>

  <Button styleType="outlined" on:click={declineCookies} disabled={$cookieConsent === false}>
    {#if $cookieConsent === false}
      {$_('cookies_banner.declined_cookies')} <Icon name={faCheck} />
    {:else}
      {$_('cookies_banner.decline')}
    {/if}
  </Button>
</div>
