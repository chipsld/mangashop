import { writable } from 'svelte/store';

const storedCookieConsent = JSON.parse(localStorage.getItem('cookieConsent'));
export const cookieConsent = writable(storedCookieConsent);
cookieConsent.subscribe((value) => {
  localStorage.setItem('cookieConsent', value);
});
