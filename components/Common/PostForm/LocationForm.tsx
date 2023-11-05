import React from "react";
import ShowMap from "../ShowMap";

const LocationForm = ({ formData, setFormData }: any) => {
  // console.log(formData);
  console.log("abclat: " + formData.lat);
  console.log("xyzlat: " + formData.lng);

  return (
    <div>
      <div id="map">
        <ShowMap formData={formData} setFormData={setFormData} />
      </div>
      <div className="latlngWrapper" style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <small>Latitude</small>
          <input
            placeholder="Lat"
            value={formData?.lat?.toFixed(4) || 0}
            readOnly
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <small>Longitude</small>
          <input
            placeholder="Lng"
            value={formData?.lng?.toFixed(4) || 0}
            readOnly
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
