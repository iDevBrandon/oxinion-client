import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Username | OXINION",
  description: "Username | OXINION",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
