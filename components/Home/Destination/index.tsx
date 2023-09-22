"use client";

import React from "react";
import { DestinationList } from "./styles";
import { cities } from "./DestinationData";
import DestinationItem from "./DestinationItem";

const Destination = () => {
  return (
    <div>
      <DestinationList>
        <div className="DestinationHeader">
          <h2>Top Cities</h2>
        </div>
        <div className="DestinationContents">
          <div className="slick-list">
            {cities.map((city, index) => {
              return <DestinationItem key={index} city={city} />;
            })}
          </div>
        </div>
      </DestinationList>
    </div>
  );
};

export default Destination;
