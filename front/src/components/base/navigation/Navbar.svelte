<script>
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import { push, paths } from '@/router/routes';
  import { LocaleSwitcher, Icon } from '@/components';
  import { currentUser } from '@/stores';
  import { _, locale, setupI18n } from '@/translations/i18n';
  import { logout } from '@/services/auth';

  const env = import.meta.env.VITE_APP_BUN_ENV;
  let navbarOpen = false;

  const toggleNavbar = () => {
    navbarOpen = !navbarOpen;
  };
</script>

<header>
  <nav class="fixed top-0 z-10 w-full bg-white shadow-md">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
      <button
        type="button"
        class="flex items-center flex-shrink-0"
        on:click={() => {
          push(paths.home.path);
        }}
      >
        <Icon name="svelte" customIcon classes="h-8 w-8 m-auto" />
      </button>
      <button
        type="button"
        class="text-gray-500 md:hidden focus:outline-none"
        aria-expanded="false"
        on:click={toggleNavbar}
      >
        <Icon name={faBars} />
      </button>
      <div class="{navbarOpen ? 'block' : 'hidden'} w-full md:block md:w-auto">
        <ul class="flex flex-col p-4 mt-4 font-medium md:p-0 md:flex-row md:space-x-2 md:mt-0">
          <li>
            {#if env === 'development'}
              <button
                type="button"
                class="px-3 py-1 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={() => {
                  push(paths.designSystem);
                }}>{$_('design_system.title')}</button
              >
            {/if}
          </li>
          {#if $currentUser}
            <li>
              <button
                type="button"
                class="px-3 py-1 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={() => {
                  push(paths.about.path);
                }}>{$_('about')}</button
              >
            </li>
            <li>
              <button
                type="button"
                class="px-3 py-1 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={logout}>{$_('logout')}</button
              >
            </li>
          {:else}
            <li>
              <button
                type="button"
                class="px-3 py-1 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={() => {
                  push(paths.login.path);
                }}>{$_('login')}</button
              >
            </li>
          {/if}
          <li>
            <LocaleSwitcher value={$locale} on:locale-changed={(e) => setupI18n({ withLocale: e.detail })} />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
