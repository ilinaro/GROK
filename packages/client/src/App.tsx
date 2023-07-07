import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from '@store/index';
import { Auth } from 'fuature/auth';

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
          <Auth />
        </QueryClientProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
