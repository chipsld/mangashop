<script>
  import dayjs from 'dayjs';
  import { _ } from '@/translations/i18n';
  import { link, paths } from '@/router/routes';
  import { Icon } from '@/components';
  import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

  const currentYear = dayjs().year();
</script>

<footer class="w-full mt-auto bg-white border-t border-gray-200">
  <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
    <div class="md:flex md:justify-between max-[894px]:flex-col">
      <div class="flex items-center mb-6 min-[894px]:mb-0">
        <img src="src/assets/svg/footer.svg" alt="mangashop logo" class="w-80">
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="h3">
            {$_('footer.resources.title')}
          </h2>
          <ul class="font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://tailwindcss.com/" target="_blank" class="hover:underline"
                >{$_('footer.resources.tailwind')}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="h3">
            {$_('footer.follow.title')}
          </h2>
          <ul class="font-medium text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://github.com/Kinoba/boilerplate-svelte" target="_blank" class="hover:underline"
                >{$_('footer.follow.github')}</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="h3">{$_('footer.legal.title')}</h2>
          <ul class="font-medium text-gray-500">
            <li class="mb-4">
              <a href={paths.legalNotice.path} use:link class="hover:underline">
                {$_('footer.legal.privacy_policy')}
              </a>
            </li>
            <li>
              <a href="https://kinoba.fr" target="_blank" class="hover:underline">{$_('footer.legal.terms')}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center"
        >{$_('footer.legal.copyright')}
        {currentYear} <a href="https://flowbite.com/" class="hover:underline">{$_('title')}™</a>. {$_(
          'footer.legal.rights'
        )}
      </span>
      <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
        <a href="https://twitter.com/kinoba_" target="_blank" class="text-gray-500 hover:text-gray-900">
          <Icon name={faTwitter} />
        </a>
        <a
          href="https://github.com/Kinoba/boilerplate-svelte"
          target="_blank"
          class="text-gray-500 hover:text-gray-900"
        >
          <Icon name={faGithub} />
        </a>
      </div>
    </div>
  </div>
</footer>
