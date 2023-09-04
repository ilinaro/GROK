import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

import { SSRRouters } from './routes';

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
    <QueryClientProvider client={queryClient}>
      <SSRRouters />
    </QueryClientProvider>
  );
}

export default App;
