<script>
  import Router from 'svelte-spa-router';
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import { routes, paths, push, location } from '@/router/routes';
  import { setupI18n } from '@/translations/i18n';
  import { Navbar, Footer, CookiesBanner } from '@/components';

  // Load translations
  setupI18n();

  // Routes interceptor function that redirects to homepage
  const routesConditionsFailed = () => {
    push(paths.home.path);
  };
</script>

<Navbar />
<main class="min-h-screen">
  <SvelteToast />
  {#if $location !== paths.legalNotice.path}
    <CookiesBanner />
  {/if}
  <Router {routes} on:conditionsFailed={routesConditionsFailed} />
</main>
<Footer />
