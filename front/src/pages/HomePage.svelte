<script async>
  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
  import { getMangas } from '@/services/manga';
  import { currentUser } from '@/stores';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
import MangaCard from '@/components/base/MangaCard.svelte';

  let mangas = writable([]);
  onMount(async () => {
    const mangasData = await getMangas();
    mangas.set(mangasData);

  });

</script>

<div in:fade|global={{ duration: 500 }} class="mt-20 flex-center-center">
  <div class="flex">
    <div class="grid grid-cols-4 gap-4">
        {#each $mangas as manga}
            <MangaCard manga={manga}></MangaCard>
        {/each}
    </div>


  </div>
</div>
