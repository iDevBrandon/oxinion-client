"use client";
import React from "react";
import { RiMapPin2Line } from "react-icons/ri";
import {
  ContentsContainer,
  DiscoverContainer,
  LocationHeader,
  MapSection,
} from "../../styles";
import ShowMap from "@/components/Common/ShowMap";

const Location = ({ params }: any) => {
  console.log(params);
  const location = params.location;
  return (
    <DiscoverContainer>
      <MapSection>
        {/* <ShowMap /> */}
      </MapSection>

      <ContentsContainer>
        <LocationHeader>
          <div className="icon-container">
            <div className="header-icon">
              <RiMapPin2Line />
            </div>
          </div>
          <div className="header-text">
            {/* <h4>Looking for {term || 'ideas'}</h4>
          <h3>in {location || 'somewhere'}</h3> */}
            <div>Under construction</div>
          </div>
        </LocationHeader>
      </ContentsContainer>
    </DiscoverContainer>
  );
};

export default Location;
