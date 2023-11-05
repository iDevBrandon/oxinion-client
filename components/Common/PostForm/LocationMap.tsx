import { useState, useEffect } from "react";
import { MapOutter } from "../styles";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

const LocationMap = () => {
  const [geoData, setGeoData] = useState({ lat: 51.509865, lng: -0.118092 });

  const center: any = [geoData.lat, geoData.lng];
  return (
    <MapOutter>
      <MapContainer center={center} zoom={8} style={{ height: "inherit" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </MapOutter>
  );
};

export default LocationMap;
