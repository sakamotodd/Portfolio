import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono text-sm bg-gray-100">
      <Head>
        <title>404ページ</title>
      </Head>
      <div className="flex flex-col justify-center items-center p-8 w-1/2 h-full bg-white">
        エラー画面404 エラー画面404 エラー画面404 エラー画面404 エラー画面404 エラー画面404
        エラー画面404 エラー画面404 エラー画面404 エラー画面404 エラー画面404 エラー画面404
        エラー画面404 エラー画面404 エラー画面404 エラー画面404 エラー画面404 エラー画面404
        エラー画面404 エラー画面404 エラー画面404
      </div>
      <button
        className="py-2 px-4 mt-12 font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg shadow-md transition-colors"
        onClick={() => router.push('/login/signIn')}
      >
        ログインページ
      </button>
    </div>
  );
}