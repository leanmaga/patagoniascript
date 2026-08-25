import "@/core/styles/globals.css";
import { Provider } from "@/core/ui/Provider";

const RootLayout = ({ children }) => (
  <html lang="es" suppressHydrationWarning>
    <body className="bg-primary-black">
      <Provider>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;
