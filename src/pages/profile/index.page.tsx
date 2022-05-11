import { Tab } from '@headlessui/react';
import { gql } from 'graphql-request';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import { UserNewsDTO } from '../../interface/types';
import { Layout } from '../../layout/Layout';
import { graphqlRequestClient } from '../../util/GraphQL/graphqlRequestClient';
import { useOpenNews } from '../../util/reactQuery/useOrderNews';



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function ProfilePage() {
  const { data, isLoading } = useOpenNews();
  console.log('🚀 ~ file: index.page.tsx ~ line 22 ~ ProfilePage ~ data', data);

  const router = useRouter();
  const [ex, setEx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    toast.success(selectedIndex.toString());
  }, [selectedIndex]);

  const [categories] = useState({
    非公開: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    公開: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    ブックマーク: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  // if (status === 'loading') return <div>{'Loading...'}</div>;
  // if (status === 'error') return <div>{'Error'}</div>;
  return (
    <div>
      <div className="flex flex-col items-center w-full min-h-[calc(100vh-3.6rem)] font-hiragino text-black dark:text-white">
        <div className="mt-8 w-2/3">
          <section id="profile" className="flex justify-between items-center w-full">
            <div className="w-1/5 h-full bg-green-300">
              test test test test test test test test test test test test test test test test test
            </div>
            <div className="w-4/5 h-full bg-green-600">
              test test test test test test test test test test test test test test test test test{' '}
              test test test test test test test test test test test test test test test test test{' '}
              test test test test test test test test test test test test test test test test test{' '}
              test test test test test test test test test test test test test test test test test{' '}
              test test test test test test test test test test test test test test test test test{' '}
            </div>
          </section>
          <section className="py-16 px-2 sm:px-0 w-full">
            <Tab.Group>
              <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'rounded-xl bg-white p-3',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    )}
                  >
                    <ul>
                      {posts.map((post) => (
                        <li key={post.id} className="relative p-3 hover:bg-gray-100 rounded-md">
                          <h3 className="text-sm font-medium leading-5">{post.title}</h3>
                          <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li>{post.date}</li>
                            <li>&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li>&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>
                          <a
                            href="#"
                            className={classNames(
                              'absolute inset-0 rounded-md',
                              'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </section>
        </div>
        <div>
          {data.user?.map((usr) => {
            return (
              <div key={usr.id}>
                <span>{usr.email}</span>
              </div>
            );
          })}
          {data.user?.map((usr) => {
            return usr.news?.map((info) => {
              return (
                <div key={info.id}>
                  <span>{info.email}</span>
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
}

ProfilePage.getLayout = (page: ReactNode) => {
  return (
    <Layout title="TweetApp" styles="h-[calc(100vh-3.5rem)]">
      {page}
    </Layout>
  );
};
