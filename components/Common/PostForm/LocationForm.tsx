import React from "react";
import ShowMap from "../ShowMap";

const LocationForm = () => {
  return (
    <div>
      <div id="map">
        <ShowMap />
      </div>
      <div>
        <input placeholder="Lat" />
        <input placeholder="Lng" />
      </div>
    </div>
  );
};

export default LocationForm;
