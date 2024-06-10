<script>
  import { createEventDispatcher } from 'svelte';
  import { useEventListener } from '@/hooks';

  export let threshold = 0;
  export let elementScroll = null;
  export let hasMore = true;

  const dispatch = createEventDispatcher();
  let loadMore = false;
  let component;

  // Subscribe to changes in component or elementScroll
  $: {
    const targetElement = elementScroll || (component && component.parentNode);
    useEventListener(['scroll', 'resize'], targetElement, onScroll);
  }

  // Function to handle scrolling logic
  const onScroll = (el) => {
    const element = el.target;
    const offset = element.scrollHeight - element.clientHeight - element.scrollTop;

    if (offset <= threshold) {
      if (!loadMore && hasMore) {
        dispatch('loadMore');
      }
      loadMore = true;
    } else {
      loadMore = false;
    }
  };
</script>

<div bind:this={component} />
