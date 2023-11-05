"use client";
import { useState, useEffect, useMemo } from "react";
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

function DisplayPosition({ map }: any) {
  const [position, setPosition] = useState<any>(null);

  useEffect(() => {
    map?.on("click", (e: any) => {
      setPosition(e.latlng);
    });
  }, []);

  console.log(position);

  return (
    <div style={{ display: "flex" }}>
      <p style={{ margin: 0 }}>latitude: </p>{" "}
      <small>{position?.lat.toFixed(4)}</small>
      <p style={{ margin: 0 }}>longitude: </p>{" "}
      <small>{position?.lng.toFixed(4)}</small>
    </div>
  );
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 51.509865, lng: -0.118092 });
  const [map, setMap] = useState<any>(null);

  const center: any = [geoData.lat, geoData.lng];

  const displayMap = useMemo(
    () => (
      <>
        <MapContainer
          center={center}
          zoom={8}
          ref={setMap}
          style={{ height: "80%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geoData.lat && geoData.lng && (
            <Marker position={[geoData.lat, geoData.lng]} icon={Icon}></Marker>
          )}
          <ChangeView coords={center} />
          <DisplayPosition map={map} />
        </MapContainer>
      </>
    ),
    []
  );

  return (
    <MapOutter>
      <div> {map ? <DisplayPosition map={map} /> : null}</div>
      {displayMap}
    </MapOutter>
  );
}
