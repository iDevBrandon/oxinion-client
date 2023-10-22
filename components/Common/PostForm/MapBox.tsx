import React, { useState, useEffect } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapOutter } from "../styles";

const MapBox = ({ userlocation }: any) => {
  const [loaded, setLoaded] = useState(false);

  const [viewState, setViewState] = useState({
    longitude: userlocation?.coordinates?.lng || -0.1278 ,
    latitude: userlocation?.coordinates?.lat || 51.5074,
    zoom: 12,
  });

  useEffect(() => {
    if (userlocation && userlocation.loaded) {
      setLoaded(true);
    }
  }, [userlocation]);

  if (!loaded) {
    return <p>Loading map...</p>;
  }

  return (
    <MapOutter>
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 600, height: "100%" }}
        mapStyle="mapbox://styles/idevbrandon/clbkh37l7000r15kjj1gxnyfa"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      />
    </MapOutter>
  );
};

export default MapBox;
