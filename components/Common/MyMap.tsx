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
import useGeoLocation from "@/hooks/useGeoLocation";

const Icon = icon({
  iconUrl: "/images/oxinion_logo.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

export function MapViewInitializer({ coords, formData }: any) {
  const map = useMap();

  // console.log(formData);
  // console.log(coords);
  // console.log([formData?.lat, formData?.lng]);

  useEffect(() => {
    if (formData?.lat !== undefined && formData?.lng !== undefined) {
      map.setView([formData.lat, formData.lng], 11);
    }
  }, [formData, map]);

  return null;
}

function LocationSelector(props: any) {
  // console.log(props.formData);

  const map = useMapEvents({
    click: (e) => {
      // setFormData(e.latlng)
      props.setFormData(e.latlng);
      // map.flyTo(e.latlng, map.getZoom());
      map.locate();
    },

    // locationfound: (location) => {
    //   console.log("location found:", location);
    //   map.flyTo(location.latlng, map.getZoom());
    // },
  });

  return <p></p>;
}

export default function Map({ formData, setFormData }: any) {
  const [geoData, setGeoData] = useState({ lat: 51.509865, lng: -0.118092 });
  const [map, setMap] = useState<any>(null);
  const userlocation = useGeoLocation();

  let center: [number, number] = [geoData.lat, geoData.lng];
  let markerPosition: [number, number] | undefined = undefined;

  if (formData.lat !== undefined && formData.lng !== undefined) {
    // If formData has coordinates, use them
    center = [formData.lat, formData.lng];
    markerPosition = [formData.lat, formData.lng];
  } else if (userlocation.loaded) {
    // If userlocation is loaded, use its coordinates
    center = [
      userlocation.coordinates?.lat || geoData.lat,
      userlocation.coordinates?.lng || geoData.lng,
    ];
    markerPosition = [
      userlocation.coordinates?.lat || geoData.lat,
      userlocation.coordinates?.lng || geoData.lng,
    ];
  }

  useEffect(() => {
    if (userlocation.loaded) {
      // Set the center to the user's location coordinates
      const userLocation = userlocation.coordinates;
      if (
        map &&
        userLocation?.lat !== undefined &&
        userLocation?.lng !== undefined
      ) {
        setGeoData(userLocation);
        setFormData(userLocation);

        // Set the map's center to the user's location
        map.setView([userLocation.lat, userLocation.lng], map.getZoom(), {
          animate: true,
        });
      }
    }
  }, [userlocation.loaded, userlocation.coordinates, map, setFormData]);

  const handleClick = (e: any) => {
    // Update formData with the clicked location
    setFormData(e.latlng);

    // Update geoData to re-render the Marker component
    setGeoData(e.latlng);

    // Center the map on the clicked location
    map?.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
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
        {markerPosition && (
          <Marker
            position={markerPosition}
            icon={Icon}
            eventHandlers={{
              click: (e) => {},
            }}
          ></Marker>
        )}
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
