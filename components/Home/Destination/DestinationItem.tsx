import React from "react";
import Link from "next/link";
import { SDestination } from "./styles";
import Image from "next/image";

const DestinationItem = ({ city }: any) => {
  return (
    <SDestination>
      <Link href={`/discover/locations/${city.name.toLowerCase()}`}>
        <div className="image">
          <Image src={city.poster} alt="Landmark" width={300} height={300} />
        </div>
      </Link>
    </SDestination>
  );
};

export default DestinationItem;
