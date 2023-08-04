import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './routes';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            staleTime: 1000,
            // отключил потому что в основном, здесь все запросы по кнопке проходят, а не автоматом
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
