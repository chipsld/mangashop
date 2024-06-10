import { wrap } from 'svelte-spa-router/wrap';
import { get } from 'svelte/store';
import { currentUser } from '@/stores';
import { paths } from '@/router/paths';

const env = import.meta.env.VITE_APP_BUN_ENV;

const pages = {
  [paths.home.path]: wrap({
    asyncComponent: () => import('@/pages/HomePage.svelte')
  }),
  [paths.login.path]: wrap({
    asyncComponent: () => import('@/pages/AuthPage.svelte'),
    conditions: [() => !get(currentUser)]
  }),
  [paths.about.path]: wrap({
    asyncComponent: () => import('@/pages/AboutPage.svelte'),
    conditions: [() => get(currentUser) && get(currentUser).role === 'user']
  }),
  [paths.legalNotice.path]: wrap({
    asyncComponent: () => import('@/pages/LegalNoticePage.svelte')
  }),
  [paths.designSystem]: wrap({
    asyncComponent: () => import('@/pages/DesignSystemPage.svelte'),
    conditions: [() => env === 'development']
  }),
  // Catch-all route last
  [paths.notFound]: wrap({
    asyncComponent: () => import('@/pages/NotFoundPage.svelte')
  })
};

export default pages;
