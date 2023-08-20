import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from '@store/index';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './routes';
import { ToggleTheme } from '@components/specific/Toggle/ToggleTheme';

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
    <React.StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ToggleTheme />
          <RouterProvider router={Routers} />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
