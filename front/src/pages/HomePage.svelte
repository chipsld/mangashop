<script async>
  import { fade } from 'svelte/transition';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  import { _ } from '@/translations/i18n';
  import { getMangas } from '@/services/manga';
  import MangaCard from '@/components/base/MangaCard.svelte';

  let mangas = writable([]);
  onMount(async () => {
    const mangasData = await getMangas();
    mangas.set(mangasData);
  });

</script>

<div in:fade|global={{ duration: 500 }} class="mt-20 flex-center-center">
  <div class="flex">
    <div class="grid grid-cols-1 max-[640px]:mt-12 min-[524px]:grid-cols-2 min-[776px]:grid-cols-3 min-[1022px]:grid-cols-4 2xl:grid-cols-6 gap-4 mb-8">
        {#each $mangas as manga}
            <MangaCard manga={manga}></MangaCard>
        {/each}
    </div>
  </div>
</div>