import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>
        Diseño y Desarrollo Web Profesional en Patagonia y Buenos Aires |
        PatagoniaScript
      </title>
      <meta
        name="description"
        content="Somos un equipo apasionado por el diseño web, comprometidos a dar vida a tus ideas en el vasto mundo digital. Con sedes en la Patagonia y Buenos Aires, conectamos tu visión con el mundo."
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://patagoniascript.vercel.app/" />
      <meta name="author" content="PatagoniaScript" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PatagoniaScript" />
      <meta
        property="og:title"
        content="Diseño y Desarrollo Web en Patagonia y Buenos Aires | PatagoniaScript"
      />
      <meta
        property="og:description"
        content="Diseño web profesional, creativo y escalable desde Patagonia y Buenos Aires para todo el país."
      />
      <meta property="og:url" content="https://patagoniascript.vercel.app/" />
      <meta
        property="og:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Diseño Web Profesional | PatagoniaScript"
      />
      <meta
        name="twitter:description"
        content="Diseño web profesional, creativo y escalable desde Patagonia y Buenos Aires."
      />
      <meta
        name="twitter:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />

      <link rel="preconnect" href="https://patagoniascript.vercel.app/" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
