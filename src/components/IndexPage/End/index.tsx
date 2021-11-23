// import { GetStaticProps } from 'next';
// import React from 'react';
// import { QueryClient, useQueryClient } from 'react-query';
// import { dehydrate } from 'react-query/hydration';
// import { fetchNews } from '../../../hooks/useQueryNews';
// import { News } from '../../../types/types';
// import { Auth } from '../../Auth';

// const Footer = () => {
//   const queryClient = useQueryClient();
//   const data = queryClient.getQueryData<News[]>('news');
//   return (
//     <div
//       id="Home4"
//       className="flex flex-1 flex-col justify-center items-center w-screen pt-16 h-screen bg-gradient-to-r from-black to-gray-900 text-white"
//     >
//       <p className="mb-5 text-blue-500 text-xl">News list by SSG</p>
//       <div>
//         {data?.map((news) => (
//           <div key={news.id}>
//             <p className="font-bold">{news.content}</p>
//           </div>
//         ))}
//       </div>
//       <Auth />
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery('news', fetchNews);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 3,
//   };
// };

// export default Footer;
