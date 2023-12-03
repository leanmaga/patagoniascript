import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans-Bold.css" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus"/>

    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;