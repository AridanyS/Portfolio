// eslint-disable-next-line no-unused-vars
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

//import { EffectCreative } from "swiper/modules";

export default function ProjectsGrid() {
  return (
    <>
      <article
        className="container w-[50%] mx-auto absolute top-[20%] 
      left-[25%]"
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={false}
          modules={[EffectCube, Pagination]}
          className="justify-center mySwiper"
        >
          <SwiperSlide className="">
            <img
              src="../images/Drag-Drop.png"
              alt="web_drag-drop"
              className="h-[350px]"
            ></img>
            <div className="bg-gray-500">
              <span>Drag drop</span>{" "}
              <a
                className="cursor-pointer"
                href="https://drag-drop-khaki.vercel.app"
              >
                Deploy
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/chiwawa.png"
              alt="restaurante_chiwawa"
              className="h-[350px]"
            ></img>
            chiwawa
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/rocket.png"
              alt="rocket"
              className="h-[350px]"
            ></img>
            Rocket
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/airbnb.png"
              alt="airbnb"
              className="h-[350px]"
            ></img>
            <div>Airbnb</div>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}
