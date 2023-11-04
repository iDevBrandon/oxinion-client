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

async function getUserInfo() {
  const header = headers();
  const Cookie = header.get("Cookie"); // Capital??
  const res = await fetch("http://localhost:8800/api/users", {
    headers: Cookie ? { Cookie } : undefined,
  });
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getUserInfo();

  console.log(me);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Providers>
          <GlobalStyles />
          <Header me={me} />
          <GoogleAnalytics />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
