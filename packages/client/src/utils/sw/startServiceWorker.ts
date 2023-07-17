export function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      const sw = '/src/utils/sw/sw.ts';

      try {
        const registration = await navigator.serviceWorker.register(sw);

        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      } catch (error) {
        console.log('ServiceWorker registration failed: ', error);
      }
    });
  }
}
