import React, { useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const [viewport, setViewport] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 8,
  });
  return (
    <Map
      initialViewState={{ ...viewport }}
      style={{ width: "inherit", height: "inherit" }}
      mapStyle="mapbox://styles/idevbrandon/clbkh37l7000r15kjj1gxnyfa"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    />
  );
};

export default MapBox;
