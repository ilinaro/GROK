import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

import { SSRRouters } from './routes';
import { useAppSelector } from '@store/hooks';

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

  const { auth } = useAppSelector((state) => state.user);

  return (
    <QueryClientProvider client={queryClient}>
      <SSRRouters />
      {/* <RouterProvider router={Routers} /> */}
      {/* SSR */}
    </QueryClientProvider>
  );
}

export default App;
