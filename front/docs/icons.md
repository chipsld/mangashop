# Icons

The `Icon` component uses FontAwesome by default.

## FontAwesome icons

You can display FontAwesome icons by passing the icon in the `name` prop (you have to import it before).

```Svelte
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { Icon } from '@/components';

  <Icon name={faGithub} />
```

## Custom icons

You can use a custom icon by setting the `customIcon` prop to `true`.

The `name` prop has to match the name of the file you want to use : put the file inside the `assets/svg` folder and name it `icon-{name}.svg`.

For example :

```Svelte
    <Icon name="svelte" customIcon />
```

Will fetch `/assets/svg/icon-svelte.svg`
