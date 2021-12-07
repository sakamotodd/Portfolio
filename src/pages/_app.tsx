import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { useUserChanged } from '../hooks/useUserChanged';

function MyApp({ Component, pageProps }: AppProps) {
  const {} = useUserChanged();
  return <Component {...pageProps} />;
}

export default MyApp;
