import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Add your custom font link here */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
