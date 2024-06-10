import { writable } from 'svelte/store';

const storedUser = JSON.parse(localStorage.getItem('currentUser'));
export const currentUser = writable(storedUser);
currentUser.subscribe((value) => {
  localStorage.setItem('currentUser', JSON.stringify(value));
});
