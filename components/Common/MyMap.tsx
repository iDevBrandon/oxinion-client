import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { icon } from "leaflet";
import oxinionLogo from "../../public/images/oxinion_logo.png";

const Icon = icon({
  iconUrl: oxinionLogo.src,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

export function ChangeView({ coords }: any) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 51.509865, lng: -0.118092 });

  const center: any = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={8} style={{ height: "25vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} icon={Icon} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
