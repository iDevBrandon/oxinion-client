"use client";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { LatLngLiteral, icon } from "leaflet";
import oxinionLogo from "../../public/images/oxinion_logo.png";
import { MapOutter } from "./styles";

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

function LocationMarker({ mapMarker }: any) {
  const [position, setPosition] = useState<LatLngLiteral | null>(null);
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      setPosition(e.latlng);

      // map.locate();
    },
    // locationfound(e) {
    //   setPosition(e.latlng);
    //   map.flyTo(e.latlng, map.getZoom());
    // },
  });

  console.log(position);

  return (
    <p>
      latitude : {position?.lat.toFixed(4)}
      longitude : {position?.lng.toFixed(4)}
    </p>
  );
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 51.509865, lng: -0.118092 });
  const [map, setMap] = useState<any>(null);

  const center: any = [geoData.lat, geoData.lng];

  return (
    <MapOutter>
      <MapContainer
        center={center}
        zoom={8}
        ref={setMap}
        style={{ height: "inherit" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoData.lat && geoData.lng && (
          <Marker position={[geoData.lat, geoData.lng]} icon={Icon}></Marker>
        )}
        <ChangeView coords={center} />
        <LocationMarker mapMarker={map} />
      </MapContainer>
    </MapOutter>
  );
}
