<script async>
  import { parse } from 'qs';
  import { querystring } from 'svelte-spa-router';

  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
  import { getManga } from '@/services/manga';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import MangaCard from '@/components/base/MangaCard.svelte';

  $: query = parse($querystring);

  let manga = writable({});
  let recommendations = writable({});
  onMount(async () => {
    const mangaData = await getManga(query.id);
    manga.set(mangaData.manga);
    recommendations.set(mangaData.recommendations);
  });
</script>
</script>

<div in:fade|global={{ duration: 500 }} class="mt-20 flex-center-center">
  <div class="flex">
    {$manga.id}
  </div>
</div>
