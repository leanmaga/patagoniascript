import Script from 'next/script';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
     
      
    </head>
    <body>
    <div id="fb-root"></div>
      {children}
      {/*<Script  crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0" nonce="hhPeiPhy"/> facebook comments*/}
    </body>
  </html>
);

export default RootLayout;