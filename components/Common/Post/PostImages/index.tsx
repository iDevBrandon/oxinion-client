import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { PostImageItem } from "./styles";

const PostImages = ({ images }: any) => {
  console.log(images);
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {images.map((img: any) => {
          return (
            <SwiperSlide key={img}>
              <PostImageItem>
                <Image src={img} alt={"by user"} fill />
              </PostImageItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PostImages;
