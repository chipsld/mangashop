<script>
  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
  import { paths, push } from '@/router/routes';
  // import api from '@/services/api';
  import { currentUser } from '@/stores';
  import { displayToast } from '@/helpers';
  import { Button, Input } from '@/components';

  let user = {
    email: null,
    password: null
  };

  const signIn = async () => {
    // NOTE: Request example
    // const { data } = await api.post('/users/sign_in', { user });

    let data = {
      id: 1,
      createdAt: '05/10/2023',
      email: user.email,
      firstname: 'John',
      lastname: 'Doe',
      role: 'user'
    };

    user = {
      email: null,
      password: null
    };

    displayToast($_('success.api'), 'success');
    currentUser.set(data);
    push(paths.home.path);
  };
</script>

<div in:fade|global={{ duration: 500 }} class="flex flex-col justify-center h-screen px-6 pb-8 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="h2 mt-10 text-center">
      {$_('login_form.title')}
    </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" on:submit|preventDefault={signIn}>
      <Input label={$_('login_form.email')} type="email" autocomplete="username" required bind:value={user.email} />

      <Input
        label={$_('login_form.password')}
        type="password"
        autocomplete="current-password"
        required
        bind:value={user.password}
      />

      <Button type="submit" classes="w-full">{$_('login_form.submit')}</Button>
    </form>

    <p class="text-center">
      <button type="button" class="mt-6 mx-auto text-sm font-semibold text-orange-600 hover:text-orange-500">
        {$_('login_form.forgot_password')}
      </button>
    </p>
  </div>
</div>
