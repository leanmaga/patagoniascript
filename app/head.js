import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Desarrollo Web | PatagoniaScript</title>
      <meta name="description" content="Somos un equipo apasionado por el diseño web, comprometidos a dar vida a tus ideas en el vasto mundo digital. Cada proyecto es una aventura, y cada línea de código cuenta una historia. Con sedes en la majestuosa Patagonia y Buenos Aires, nuestra misión es conectar tu visión con el mundo a través de la magia de la web." />
      <meta name="keywords" content="diseño web, Patagonia, Buenos Aires, desarrollo web, diseño de sitios web, diseño de páginas web" />
      <meta name="author" content="PatagoniaScript" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Permissions-Policy" content="ambient-light-sensor=(false)" />
      <link rel="preconnect" href="https://www.patagoniascript.com" />
      <meta property="og:title" content="Diseño Web en Patagonia y Buenos Aires | PatagoniaScript" />
      <meta property="og:description" content="Somos un equipo apasionado por el diseño web, comprometidos a dar vida a tus ideas en el vasto mundo digital. Cada proyecto es una aventura, y cada línea de código cuenta una historia. Con sedes en la majestuosa Patagonia y Buenos Aires, nuestra misión es conectar tu visión con el mundo a través de la magia de la web." />
      <meta property="og:url" content="https://www.patagoniascript.com" />
      <meta property="og:image" content="logo.png" />
      <meta name="twitter:title" content="Diseño Web en Patagonia y Buenos Aires | PatagoniaScript" />
      <meta name="twitter:description" content="Somos un equipo apasionado por el diseño web, comprometidos a dar vida a tus ideas en el vasto mundo digital. Cada proyecto es una aventura, y cada línea de código cuenta una historia. Con sedes en la majestuosa Patagonia y Buenos Aires, nuestra misión es conectar tu visión con el mundo a través de la magia de la web." />
      <meta name="twitter:image" content="/logo.png" />
    </Head>
    
    <Component {...pageProps} />

  </>
);

export default MyApp;

