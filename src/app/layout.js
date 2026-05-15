import "./globals.css";
import RouteReset from "@/components/RouteReset";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <RouteReset>{children}</RouteReset>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}