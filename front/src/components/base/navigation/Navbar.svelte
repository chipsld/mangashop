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
    <div class="flex items-center justify-center sm:justify-between p-4 mx-auto">
      <button
        type="button"
        class="flex items-center flex-shrink-0"
        on:click={() => {
          push(paths.home.path);
        }}
      >
        <!-- <Icon name="svelte" customIcon classes="h-8 w-8 m-auto" /> -->
         <img src="src/assets/svg/logo.svg" alt="mangashop logo" class="sm:w-28 2xl:w-full">
      </button>
      <!-- <button
        type="button"
        class="text-gray-500 md:hidden focus:outline-none"
        aria-expanded="false"
        on:click={toggleNavbar}
      >
        <Icon name={faBars} />
      </button> -->
      <div class="{navbarOpen ? 'block' : 'hidden'} w-full min-[640px]:block w-auto">
        <ul class="flex p-0 mt-4 font-medium flex-row justify-end space-x-2 mt-0">
          <li>
            {#if env === 'development'}
              <button
                type="button"
                class="px-3 py-1 2xl:text-2xl sm:text-lg font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
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
                class="px-3 py-1 2xl:text-2xl sm:text-lg font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={() => {
                  push(paths.about.path);
                }}>{$_('about')}</button
              >
            </li>
            <li>
              <button
                type="button"
                class="px-3 py-1 2xl:text-2xl sm:text-lg font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={logout}>{$_('logout')}</button
              >
            </li>
          {:else}
            <li>
              <button
                type="button"
                class="px-3 py-1 2xl:text-2xl sm:text-lg font-medium text-gray-800 rounded-md hover:bg-gray-700 hover:text-white"
                on:click={() => {
                  push(paths.login.path);
                }}>{$_('login')}</button
              >
            </li>
          {/if}
          <!-- <li>
            <LocaleSwitcher value={$locale} on:locale-changed={(e) => setupI18n({ withLocale: e.detail })} />
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</header>
