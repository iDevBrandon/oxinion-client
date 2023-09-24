"use client";

import React from "react";
import { DiscoverContainer, LocationHeader, MapSection } from "./styles";
import { RiMapPin2Line } from "react-icons/ri";
import ShowMap from "@/components/Common/ShowMap";

const Discover = () => {
  return (
    <DiscoverContainer>
      <MapSection>
        <ShowMap />
      </MapSection>

      <div>
        <LocationHeader>
          <div className="icon-container">
            <div className="header-icon">
              <RiMapPin2Line />
            </div>
          </div>
          <div className="header-text">
            <h4>Browsing in</h4>
            <h3>London, United Kingdom</h3>
          </div>
        </LocationHeader>
        <div>
          {/* <div>Thigns to do</div>
            <div>Restaurants</div>
            <div>Stays</div>
            <div>Attractions</div> */}
          {/* <div>Ride</div> */}
          {/* <div>Flights</div> */}
        </div>
      </div>
      <div>
        <div>Top posts</div>
        <div>Most Recent</div>
      </div>
    </DiscoverContainer>
  );
};

export default Discover;
