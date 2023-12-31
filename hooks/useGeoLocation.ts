import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState<any | null>({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: any) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  // ask permission to use location
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation is not supported!",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;
