import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { useUserChanged } from '../hooks/login/useUserChanged';
import { NextPageWithLayout } from '../interface/page';
import { store } from '../redux/store';

type Props = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
  const {} = useUserChanged();
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <NextNprogress
            color="#29D"
            startPosition={0.2}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>,
  );
}

export default MyApp;