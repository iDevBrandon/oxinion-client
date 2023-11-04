 import { loadMyInfoAPI } from "@/apis/auth";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useMyInfoQuery = () => {
  return useQuery(["user"], loadMyInfoAPI, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export default useMyInfoQuery;
