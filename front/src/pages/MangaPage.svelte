<script async>
  import { parse } from 'qs';
  import { querystring } from 'svelte-spa-router';

  import { fade } from 'svelte/transition';
  import { _ } from '@/translations/i18n';
  import { getManga } from '@/services/manga';
  import { postComment } from '@/services/comment';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  $: query = parse($querystring);

  let manga = writable({});
  let recommendations = writable({});
  onMount(async () => {
    const mangaData = await getManga(query.id);
    manga.set(mangaData.manga);
    recommendations.set(mangaData.recommendations);
  });

  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    postComment(text);
  };
</script>

<div in:fade|global={{ duration: 500 }} class="mt-20 flex-center-center">
  <div class="flex">
    {#if $manga.comments}
      <section class="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({$manga.comments.length})
            </h2>
          </div>
          <form class="mb-6" on:submit|preventDefault={handleSubmit}>
            <div
              class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            >
              <label for="comment" class="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-4 font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-200hover:bg-primary-800"
            >
              Post comment
            </button>
          </form>

          {#each $manga.comments as comment}
            <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                  <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    {comment.user.firstName}
                    {comment.user.lastName}
                  </p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate datetime="2022-02-08" title="February 8th, 2022">{comment.createdAt}</time>
                  </p>
                </div>
              </footer>
              <p class="text-gray-500 dark:text-gray-400">
                {comment.text}
              </p>
            </article>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</div>
