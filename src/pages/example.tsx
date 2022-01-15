import { Pagination } from '@mui/material';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { privateNews } from '../hooks/query/useOrderNews';
interface Character {
  location: {
    name: string;
  };
  id: string;
  name: string;
  image: string;
  species: string;
}
interface CharacterRes {
  results: Character[];
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
}
export default function Example() {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  const { data } = useQuery<CharacterRes, Error>(
    ['characters', page],
    async () =>
      await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then((result) =>
        result.json(),
      ),
    {
      keepPreviousData: true,
    },
  );
  const handlePageNation = useCallback(
    (e: ChangeEvent<HTMLInputElement>, value: number) => {
      setPage(value);
      router.push(`example/?page=${value}`, undefined, { shallow: true });
    },
    [router],
  );

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    }
  }, [router.query.page]);
  return (
    <>
      <div className="grid grid-cols-8 gap-8 p-8 m-auto max-w-7xl">
        {data?.results?.map((character) => (
          <article key={character.id}>
            <Image src={character.image} alt={character.name} height={200} width={200} />
            <div>
              <p>Name: {character.name}</p>
              <p>Lives in: {character.location.name}</p>
              <p>Species: {character.species}</p>
              <i>Id: {character.id} </i>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        count={data?.info.pages}
        variant="outlined"
        color="primary"
        className="mx-96 mb-64"
        page={page}
        onChange={handlePageNation}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string;
  const queryClient = new QueryClient();
  // プリフェッチ
  await queryClient.prefetchQuery('news', () => privateNews(id));
  // キャッシュのデータ取得
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};
