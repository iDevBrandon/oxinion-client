"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const Travel = () => {
  const { isLoading, isError, data, error } = useQuery(["travel"], async () => {
    const { data } = await axios.get(
      "https://random-data-api.com/api/v2/addresses"
    );
    return data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error:</span>;
  }

  return (
    <div>
      <h2>Always say yes to new adventures.</h2>
      City: {data?.city}
      <br />
      Country: {data?.country}
    </div>
  );
};

export default Travel;
