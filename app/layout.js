import Script from 'next/script';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans-Bold.css" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus"/>
      
    </head>
    <body>
    <div id="fb-root"></div>
      {children}
      <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0" nonce="hhPeiPhy"/>
    </body>
  </html>
);

export default RootLayout;