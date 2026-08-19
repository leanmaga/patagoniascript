import "@/styles/globals.css";
import Providers from "@/components/Providers";

const RootLayout = ({ children }) => (
  <html lang="es" suppressHydrationWarning>
    <body className="bg-primary-black">
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
