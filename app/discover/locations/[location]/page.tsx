import React from "react";

const Location = ({ params }: any) => {
  console.log(params);
  const location = params.location;
  return <div>City : {location}</div>;
};

export default Location;
