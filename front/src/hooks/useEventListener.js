/* 
This function is designed to manage event listeners within Svelte components.
It sets up event listeners on a specified DOM element and ensures proper cleanup when the component is destroyed.

Parameters
- eventNames (Array of Strings): An array containing the names of the events to listen for. Ex: ['scroll', 'resize']
- element (DOM Element): The target DOM element on which the event listeners will be attached.
- eventFunction (Function): The event handler function to be executed when the specified events occur.
*/

import { onDestroy } from 'svelte';

const useEventListener = (eventNames, element, eventFunction) => {
  if (element) {
    eventNames.forEach((e) => {
      element.addEventListener(e, eventFunction);

      onDestroy(() => {
        element.removeEventListener(e, eventFunction);
      });
    });
  }
};

export default useEventListener;
