# Infinite Scroll

- [Description](#description)
- [How to use](#how-to-use)
- [Examples](#examples)
  - [Infinite Scroll](#infinite-scroll)

## Description

This boilerplate features an Infinite Scroll component, useful to organize large amount of scrollable data. You can find it in `components/base/loading`.

## How to use

1. Add the component to the DOM

2. Set component props

| Props name      | Default | Type    | Description                                                                                               |
| --------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `threshold`     | `0`     | number  | The threshold value at which the `loadMore` event is triggered.                                           |
| `elementScroll` | `null`  | element | The DOM element to which the scroll event is bound. If not provided, the component's parent node is used. |
| `hasMore`       | `true`  | boolean | Indicates whether there is more content to load.                                                          |

## Examples

### Infinite Scroll

```html
<script>
  import { InfiniteScroll } from '@/components';

  let scrollItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const loadMore = () => {
    scrollItems = [...scrollItems, ...Array.from({ length: 5 }).map((_, i) => scrollItems.length + i + 1)];
  };
</script>

<ul class="max-w-xs p-4 overflow-y-scroll list-none border rounded-lg max-h-36">
  {#each scrollItems as item}
  <li>{item}</li>
  {/each}

  <InfiniteScroll hasMore="{scrollItems.length}" threshold="{50}" on:loadMore="{loadMore}" />
</ul>
```
