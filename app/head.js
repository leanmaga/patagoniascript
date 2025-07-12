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
        content="🚀 Desarrollo web profesional desde Patagonia y Buenos Aires. Landing pages, e-commerce y sitios web personalizados. ¡Transformamos tu idea en realidad digital!"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://patagoniascript.vercel.app/" />
      <meta name="author" content="PatagoniaScript" />

      {/* Meta etiquetas esenciales para WhatsApp y redes sociales */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PatagoniaScript" />
      <meta property="og:locale" content="es_AR" />
      <meta
        property="og:title"
        content="🚀 PatagoniaScript - Desarrollo Web Profesional"
      />
      <meta
        property="og:description"
        content="💻 Desarrollo web profesional desde Patagonia y Buenos Aires. Landing pages, e-commerce y sitios web personalizados. ¡Transformamos tu idea en realidad digital!"
      />
      <meta property="og:url" content="https://patagoniascript.vercel.app/" />
      <meta
        property="og:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="PatagoniaScript - Desarrollo Web Profesional"
      />
      <meta property="og:image:type" content="image/png" />

      {/* Meta etiquetas específicas para WhatsApp */}
      <meta
        property="whatsapp:title"
        content="🚀 PatagoniaScript - Desarrollo Web"
      />
      <meta
        property="whatsapp:description"
        content="💻 Desarrollo web profesional desde Patagonia y Buenos Aires. ¡Transformamos tu idea en realidad digital!"
      />
      <meta
        property="whatsapp:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />

      {/* Twitter Cards (también usado por algunas plataformas) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="🚀 PatagoniaScript - Desarrollo Web Profesional"
      />
      <meta
        name="twitter:description"
        content="💻 Desarrollo web profesional desde Patagonia y Buenos Aires. Landing pages, e-commerce y sitios personalizados."
      />
      <meta
        name="twitter:image"
        content="https://patagoniascript.vercel.app/logo.png"
      />
      <meta
        name="twitter:image:alt"
        content="PatagoniaScript - Desarrollo Web Profesional"
      />

      {/* Meta etiquetas adicionales para mejor SEO */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />

      {/* Favicons */}
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />

      {/* Preconnect para mejor rendimiento */}
      <link rel="preconnect" href="https://patagoniascript.vercel.app/" />

      {/* JSON-LD para SEO estructurado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PatagoniaScript",
            description:
              "Desarrollo web profesional desde Patagonia y Buenos Aires",
            url: "https://patagoniascript.vercel.app/",
            logo: "https://patagoniascript.vercel.app/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54-911-2776-4823",
              contactType: "customer service",
            },
            areaServed: ["Argentina", "Patagonia", "Buenos Aires"],
            serviceType: ["Desarrollo Web", "Diseño Web", "E-commerce"],
          }),
        }}
      />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
