import { writable } from 'svelte/store';

const storedAuthToken = JSON.parse(localStorage.getItem('authToken'));
export const authToken = writable(storedAuthToken);
authToken.subscribe((value) => {
  localStorage.setItem('authToken', JSON.stringify(value));
});
