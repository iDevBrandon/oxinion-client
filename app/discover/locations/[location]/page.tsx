import React from "react";
import { RiMapPin2Line } from 'react-icons/ri';

const Location = ({ params }: any) => {
  console.log(params);
  const location = params.location;
  return (
    <div>
      City : {location}
      <div>
        <div>Map</div>
        <div>
          <RiMapPin2Line />
          <h4>Browsing in</h4>
          <h3>London, United Kingdom</h3>
        </div>
        <div>
          <div>Top posts</div>
          <div>Most Recent</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
