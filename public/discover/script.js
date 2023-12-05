// How to use async await with HTML GeoLocation API
// https://stackoverflow.com/questions/51843227/how-to-use-async-wait-with-html5-geolocation-api
function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

// getting places from APIs
async function loadPlaces(position) {
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;

  //     console.log(latitude, longitude);
  //   });
  // }

  const coords = await getCurrentPosition();
  console.log(coords.coords.latitude, coords.coords.longitude);
  // CORS Proxy to avoid CORS problems
  const corsProxy = "https://cors-anywhere.herokuapp.com/";

  // Foursquare API (limit param: number of maximum places to fetch)
  const endpoint = `${corsProxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&location=${coords.coords.latitude},${coords.coords.longitude}&radius=500000`;

  return fetch(endpoint)
    .then((data) => {
      return data.json();
    })
    .catch((err) => console.error(err));
}

window.onload = () => {
  const scene = document.querySelector("a-scene");

  // first get current user location
  return navigator.geolocation.getCurrentPosition(
    function (position) {
      // than use it to load from remote APIs some places nearby
      loadPlaces(position.coords).then((places) => {
        console.log(places);
        places.results.forEach((place) => {
          const latitude = place.geometry.location.lat;
          const longitude = place.geometry.location.lng;

          // add place name
          const placeText = document.createElement("a-link");
          placeText.setAttribute(
            "gps-entity-place",
            `latitude: ${latitude}; longitude: ${longitude};`
          );
          placeText.setAttribute("title", place.name);
          placeText.setAttribute("scale", "15 15 15");

          placeText.addEventListener("loaded", () => {
            window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
          });

          scene.appendChild(placeText);
        });
      });
    },
    (err) => console.error("Error in retrieving position", err),
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 27000,
    }
  );
};
