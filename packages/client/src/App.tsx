import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';

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
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
