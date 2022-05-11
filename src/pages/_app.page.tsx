import 'tailwindcss/tailwind.css';
import '../styles/Header.css';
import '../styles/globals.css';
import '../styles/markdown.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { NextPageWithLayout } from '../interface/page';
import { store } from '../redux/store';
import { useUserChanged } from '../util/firebase/useUserChanged';

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
            staleTime: Infinity,
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
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
              className: 'mt-16',
              loading: {
                duration: Infinity,
              },
            }}
          />
          <Component {...pageProps} />
        </Provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>,
  );
}

export default MyApp;
