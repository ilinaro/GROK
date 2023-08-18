import StoreState from '@store';

declare const __SERVER_PORT__: number;

declare global {
  interface Window {
    initialState?: StoreState;
  }
}
