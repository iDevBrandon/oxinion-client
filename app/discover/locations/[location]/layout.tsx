import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: any) {
  return {
    title: ` ${params.location.toUpperCase()} | OXINION`,
    description: `Discover ${params.location} with OXINION`,
  };
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
