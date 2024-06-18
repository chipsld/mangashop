<script>
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import { Icon } from '@/components';
  import { push, paths } from '@/router/routes';
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
    <div class="flex items-center justify-center max-w-screen-xl max-[640px]:flex-col sm:justify-between p-4 mx-auto">
      <button
        type="button"
        class="flex items-center flex-shrink-0"
        on:click={() => {
          push(paths.home.path);
        }}
      >
         <img src="src/assets/svg/logo.svg" alt="mangashop logo" class="sm:w-28 2xl:w-full">
      </button>
      <button
        type="button"
        class="text-jump-black text-4xl mt-4 min-[640px]:hidden focus:outline-none"
        aria-expanded="false"
        on:click={toggleNavbar}
      >
        <Icon name={faBars}/>
      </button>
      <div class="{navbarOpen ? 'block' : 'hidden'} w-full min-[640px]:block">
        <ul class="flex font-medium flex-row justify-end space-x-2 max-[640px]:flex-col max-[640px]:items-center max-[640px]:space-x-0">
          <hr class="my-4 border-gray-200 w-full sm:mx-auto lg:my-8 min-[640px]:hidden" />

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
                class="px-3 py-1 2xl:text-2xl sm:text-lg font-medium text-gray-800"
                on:click={() => {
                  push(paths.login.path);
                }}><img src="src/assets/svg/icon-user.svg" alt="user icon" class="h-10"></button
              >
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </nav>
</header>
