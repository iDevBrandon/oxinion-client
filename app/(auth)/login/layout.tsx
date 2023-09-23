import React from "react";
import Login from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OXINION - Log In",
  description: "Log in to OXINION today!",
};

const layout = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default layout;
