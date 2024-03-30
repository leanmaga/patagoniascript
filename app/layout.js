import { Nav } from '@/components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (

  <html lang="en">
    <body> 
        
        <Nav />
      
        {children}
    </body>
  </html>
);

export default RootLayout;