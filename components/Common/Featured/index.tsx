import React from "react";
import { FeaturedList, FeaturedItem } from "./styles";
import Image from "next/image";

const Featured = () => {
  return (
    <FeaturedList>
      <FeaturedItem>
        <Image
          src="https://picsum.photos/129"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto",   }}
        />
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src="https://picsum.photos/202"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto",  }}
        />
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src="https://picsum.photos/201"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src="https://picsum.photos/130"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src="https://picsum.photos/203"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
      </FeaturedItem>

      <FeaturedItem>
        <Image
          src="https://picsum.photos/204"
          alt="content"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
         />
      </FeaturedItem>
    </FeaturedList>
  );
};

export default Featured;
