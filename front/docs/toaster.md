# Toaster

We are using `@zerodevx/svelte-toast` package to display toasts.  
Find the official doc [here](https://www.npmjs.com/package/@zerodevx/svelte-toast)

## Usage

1. Import the `displayToast` helper into your component:

```javascript
import { displayToast } from '@/helpers';
```

2. Use the helper. It takes 2 arguments: `message: string` and `status: success`

```javascript
displayToast($_('success.api'), 'success');
```

## Helper

Toaster helper logic can be found into `src/helpers/toasts.js`

## Styles

You can find the toaster styles into a SCSS partial: `src/assets/styles/base/_toasters.scss`

If you want to add a new toaster style, you can add it in this file and pass the new status through the toaster helper argument (cf [Helper](#helper))

Note: we are using TailwindCSS theme inside this SCSS partial
