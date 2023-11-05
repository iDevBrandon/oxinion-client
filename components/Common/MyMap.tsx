"use client";

import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
  Popup,
} from "react-leaflet";
import { icon } from "leaflet";
import { MapOutter } from "./styles";

const Icon = icon({
  iconUrl: "/images/oxinion_logo.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

export function MapViewInitializer({ coords, formData }: any) {
  const map = useMap();

  console.log(formData);
  console.log(coords);

  console.log([formData?.lat, formData?.lng]);

  useEffect(() => {
    if (formData?.lat !== undefined && formData?.lng !== undefined) {
      map.setView([formData.lat, formData.lng], 11);
    }
  }, [formData, map]);

  return null;
}

function LocationSelector(props: any) {
  console.log(props.formData);

  const map = useMapEvents({
    click: (e) => {
      // setFormData(e.latlng)
      props.setFormData(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
      // map.locate();
    },

    locationfound: (location) => {
      console.log("location found:", location);
      map.flyTo(location.latlng, map.getZoom());
    },
  });

  return <p></p>;
}

export default function Map({ formData, setFormData }: any) {
  const [geoData, setGeoData] = useState({ lat: 51.509865, lng: -0.118092 });
  const [map, setMap] = useState<any>(null);

  console.log(geoData);

  const center: any = [geoData.lat, geoData.lng];
  const handleClick = (e: any) => {
    // Update formData with the clicked location
    setFormData(e.latlng);

    // Center the map on the clicked location
    map?.setView(e.latlng, map.getZoom(), {
      animate: true,
    });

    // Update geoData after the map view is updated
    setGeoData(e.latlng);
  };

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
        {/* {geoData.lat && geoData.lng && (
          <Marker
            position={[geoData.lat, geoData.lng]}
            icon={Icon}
            eventHandlers={{
              click: (e) => {},
            }}
          ></Marker>
        )} */}
        {formData &&
          formData.lat !== undefined &&
          formData.lng !== undefined && (
            <Marker
              position={[formData.lat, formData.lng]}
              icon={Icon}
              eventHandlers={{
                click: (e) => {},
              }}
            ></Marker>
          )}
        {/* <ChangeView coords={center} /> */}
        {map && (
          <MapViewInitializer
            map={map}
            coords={center}
            formData={formData}
            onClick={handleClick}
          />
        )}

        <LocationSelector
          map={map}
          formData={formData}
          setFormData={setFormData}
        />
      </MapContainer>
    </MapOutter>
  );
}
