import { Metadata } from "next";
import React from "react";
import Signup from "./page";

export const metadata: Metadata = {
  title: "OXINION | Sign Up",
  description: "Join OXINION today!",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default layout;
