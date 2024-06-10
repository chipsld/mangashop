<script>
  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
  import { currentUser } from '@/stores';
</script>

<div in:fade|global={{ duration: 500 }} class="h-screen flex-center-center">
  <div class="block text-center">
    <h1>{$_('home')}</h1>
    <h2 class="h1">{$_('title')}</h2>

    {#if $currentUser}
      <h2 class="h2 mt-10 text-center">
        {$_('hello')}
        {$currentUser.firstname}
        {$currentUser.lastname}
      </h2>
      <ul class="mt-5 text-center">
        <li>- {$currentUser.email}</li>
        <li>- {$currentUser.createdAt}</li>
        <li>- {$currentUser.role}</li>
      </ul>
    {/if}
  </div>
</div>
