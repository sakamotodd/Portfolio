import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="MyApp" />
      </Head>
      <body className="light:text-black dark:text-gray-200 light:bg-gray-100 dark:bg-gray-800">
        <Main />
        <NextScript />
      </body> 
    </Html>
  );
};

export default MyDocument;