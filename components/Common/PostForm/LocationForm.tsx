import React, { useEffect, useState } from "react";
import ShowMap from "../ShowMap";

const LocationForm = ({ formData, setFormData }: any) => {
  // console.log(formData);
  console.log("abclat: " + formData.lat);
  console.log("xyzlat: " + formData.lng);
  const [isLocationGranted, setIsLocationGranted] = useState(false);

  // Check geolocation permission on component mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      // Geolocation is available in the browser
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Geolocation permission is granted
          setIsLocationGranted(true);
        },
        (error) => {
          // Geolocation permission is not granted
          setIsLocationGranted(false);
        }
      );
    } else {
      // Geolocation is not available in the browser
      setIsLocationGranted(false);
    }
  }, []);

  return (
    <div>
      {isLocationGranted ? (
        <p></p>
      ) : (
        <p>
          Your location permission is not granted. Please enable it in your
          browser settings.
        </p>
      )}
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
