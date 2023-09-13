import { QueryClient, QueryClientProvider, useQueries, useQuery } from 'react-query';
import React, { useState } from 'react';

import { SSRRouters } from './routes';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loadUser } from '@store/thunks/user';

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

  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadUser);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SSRRouters user={user} />
    </QueryClientProvider>
  );
}

export default App;
