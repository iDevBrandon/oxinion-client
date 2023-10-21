import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Providers from "./Providers";
import Footer from "@/components/Footer";
import { cookies, headers } from "next/headers";
import GoogleAnalytics from "./GoogleAnalytics";
// import 'mapbox-gl/dist/mapbox-gl.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OXINION",
  description: "The Future of Travel",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = headers();
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Providers>
          <GlobalStyles />
          <Header />
          <GoogleAnalytics />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
