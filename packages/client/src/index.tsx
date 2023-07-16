import './styles/index.scss';

import App from './App';
import ReactDOM from 'react-dom/client';

const startServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/src/utils/sw/sw.ts')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error: string) => {
          console.log('ServiceWorker registration failed: ', error);
        });
    });
  }
};

startServiceWorker();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
