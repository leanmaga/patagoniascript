import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>PatagoniaScript</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Permissions-Policy" content="ambient-light-sensor=(false)"/>

      <link rel="preconnect" href="https://www.patagoniascript.com" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
