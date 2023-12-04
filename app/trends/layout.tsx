import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trends",
  description: "popular posts at OXINION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
