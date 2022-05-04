import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="application-name" content="MyApp" />
      </Head>
      <body className="light:text-black dark:text-white light:bg-slate-100 dark:bg-darkGrey">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
