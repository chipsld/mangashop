import '@/assets/styles/app.scss';
import App from '@/App.svelte';

import * as Sentry from '@sentry/svelte';

Sentry.init({
  dsn: import.meta.env.VITE_APP_SENTRY_DSN,
  environment: import.meta.env.VITE_APP_SENTRY_ENV,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  tracesSampleRate: parseFloat(import.meta.env.VITE_APP_SENTRY_TRACES_SAMPLE),

  // Set tracePropagationTargets to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [import.meta.env.VITE_APP_API_BASE_URL],

  // Set capture replay session to 0.1 for 10% of all sessions,
  replaysSessionSampleRate: parseFloat(import.meta.env.VITE_APP_SENTRY_REPLAYS_SESSION_SAMPLE),
  // Set capture replay error sessions to 1.0 for 100% of errors sessions
  replaysOnErrorSampleRate: parseFloat(import.meta.env.VITE_APP_SENTRY_REPLAYS_ERROR_SAMPLE)
});

const app = new App({
  target: document.getElementById('app')
});

export default app;
