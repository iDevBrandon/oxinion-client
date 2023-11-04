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
import axios from "axios";
import { backUrl } from "@/constants/api";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { cache } from "react";
import { loadMyInfoAPI } from "@/apis/auth";
// import 'mapbox-gl/dist/mapbox-gl.css';

const inter = Inter({ subsets: ["latin"] });

if (typeof backUrl === "string") {
  axios.defaults.baseURL = backUrl;
}
export const metadata: Metadata = {
  title: "OXINION",
  description: "The Future of Travel",
  icons: "favicon.ico",
};
const getQueryClient = cache(() => new QueryClient());

// const header = headers();
// const cookie = header.get("Cookie");
// await queryClient.prefetchQuery(["user"], () =>
// loadMyInfoAPI({ headers: cookie ? { cookie } : undefined })
// );
// const dehydratedState = dehydrate(queryClient);
// queryClient.clear();
// // async function getUserInfo() {
// //   const header = headers();
// //   const Cookie = header.get("Cookie"); // Capital??
// //   const res = await fetch("/users", {
// //     headers: Cookie ? { Cookie } : undefined,
// //   });
// //   return res.json();
// // }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const header = headers();
  const cookie = header.get("Cookie");
  await queryClient.prefetchQuery(["user"], () =>
    loadMyInfoAPI({ headers: cookie ? { cookie } : undefined })
  );
  const dehydratedState = dehydrate(queryClient);
  queryClient.clear();

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
