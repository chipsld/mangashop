import { toast } from '@zerodevx/svelte-toast';

export const displayToast = (message, status) => {
  toast.push(message, {
    classes: [`custom-${status}-toaster`]
  });
};
