import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Earn",
  description: "Earn and Travel with OXINION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
