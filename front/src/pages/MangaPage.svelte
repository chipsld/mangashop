<script async>
  import { parse } from 'qs';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { writable } from 'svelte/store';
  import { querystring } from 'svelte-spa-router';

  import { Icon } from '@/components';
  import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
  import { _ } from '@/translations/i18n';
  import { getManga } from '@/services/manga';
  import { postComment } from '@/services/comment';

  $: query = parse($querystring);

  let manga = writable({});
  let recommendations = writable([]);

  onMount(async () => {
    const mangaData = await getManga(query.id);
    console.log(mangaData);
    manga.set(mangaData.manga);
    recommendations.set(mangaData.recommendations);
  });

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    postComment(text);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
</script>

<div in:fade|global={{ duration: 500 }} class="mt-20 flex-center-center">
  <div class="flex flex-col justify-between gap-4 max-[640px]:mt-12 max-[800px]:flex-col max-[800px]:items-center">
    <button type="button" class="h-80 rounded ml-4 min-[801px]:fixed" on:click={scrollToTop}>
      <img class="h-80 w-52 rounded" src="{$manga.cover}" alt="">
    </button>
    <div>
      <div class="border rounded shadow-md p-4 mx-4 min-[801px]:ml-60 mb-4">
        <h2 class="text-4xl">{$manga.title}</h2>
        <h3 class="text-2xl">{$manga.author}</h3>
      </div> 
      <div class="border p-4 mx-4 min-[801px]:ml-60 shadow-md mb-4">
        <p>{$manga.synopsis}</p>
      </div>
      <div class="border p-4 mx-4 min-[801px]:ml-60 shadow-md">
        <h4 class="text-xl mb-4">Recommendations : </h4>
        <ul class="flex flex-wrap gap-4 justify-center">
          {#each $recommendations as recommendation}
            <li>
              <a href="{recommendation.entry.url}" target="_blank">
                <img class="h-60 w-40" src="{recommendation.entry.images.jpg.imageUrl}" alt="{recommendation.entry.title} cover" />
                <p class="truncate w-32">{recommendation.entry.title}</p>
              </a>
              <p>Votes: {recommendation.votes}</p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    {#if $manga.comments}
      <section class="min-[801px]:border min-[801px]:rounded min-[801px]:shadow-md p-4 min-[801px]:mx-4 max-[800px]:w-full min-[801px]:ml-60 min-[801px]:mb-4">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900">
              Discussion ({$manga.comments.length})
            </h2>
          </div>
          <form class="mb-6" on:submit|preventDefault={handleSubmit}>
            <div
              class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200"
            >
              <label for="comment" class="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                class="px-0 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-jump-red rounded-lg hover:bg-jump-red-hover focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Post comment
            </button>
          </form>

          {#each $manga.comments as comment}
            <article class="p-6 text-base bg-white rounded-lg">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900">
                    {comment.user.firstName}
                    {comment.user.lastName}
                  </p>
                  <p class="text-sm text-gray-600">
                    <time pubdate datetime="2022-02-08" title="February 8th, 2022">{comment.createdAt}</time>
                  </p>
                </div>
              </footer>
              <p class="text-gray-500">
                {comment.text}
              </p>
            </article>
          {/each}
        </div>
      </section>
    {/if}
  </div>
  <button class="fixed flex-center-center right-4 bottom-4 rounded opacity-50 bg-jump-red h-12 w-12 text-4xl text-center md:hidden hover:opacity-100 transition duration-300 ease-in-out" on:click={scrollToTop}><Icon classes="text-white h-16" name={faChevronUp}/></button>
</div>

