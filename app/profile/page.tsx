import React, { useEffect } from "react";
import { ProfileCard } from "./styles";
import Image from "next/image";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import { headers } from "next/headers";
import ProfilePage from "./page.client";
import { loadMyInfoAPI } from "@/apis/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const header = headers();
  const cookie = header.get("Cookie");

  const data = await loadMyInfoAPI({
    headers: cookie ? { cookie } : undefined,
  });
  if (!data) {
    redirect("/");
  }

  return <ProfilePage />;
};

export default Page;
