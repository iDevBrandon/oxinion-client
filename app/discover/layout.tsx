import React from "react";
import Discover from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OXINION | Discover",
  description: "Join OXINION today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
