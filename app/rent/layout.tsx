import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "OXINION | Rent",
  description: "Find what you need at OXINION!",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
