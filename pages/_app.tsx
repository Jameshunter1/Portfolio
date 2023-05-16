import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="James Portfolio" />
        <meta
          name="keywords"
          content="James, Portfolio, Web Developer, Software Engineer"
        />
        <meta name="author" content="James" />
        <meta name="theme-color" content="#5572af" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
