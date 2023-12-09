import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { PostImageItem } from "./styles";

const PostImages = ({ images }: any) => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {images?.map((img: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <div style={{ height: "470px" }}>
                <Image
                  src={img}
                  alt="content"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                 />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PostImages;
