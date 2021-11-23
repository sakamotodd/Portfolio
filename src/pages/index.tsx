// import { Auth } from '../components/Auth';
import { GetStaticProps } from 'next';
import { dehydrate } from 'react-query/hydration';
// import { fetchNews } from '../hooks/useQueryNews';
// import { News } from '../types/types';
// import { QueryClient, useQueryClient } from 'react-query';
import Header from '../components/IndexPage/First';
import Introduction from '../components/IndexPage/Second';
import Third from '../components/IndexPage/Third';
//import Footer from '../components/IndexPage/End';

export default function Home() {
  //const queryClient = useQueryClient();
  //const data = queryClient.getQueryData<News[]>('news');

  return (
    <>
      <Header />
      <Introduction />
      <Third />
    </>
  );
}
