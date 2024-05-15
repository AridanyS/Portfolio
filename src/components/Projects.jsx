// eslint-disable-next-line no-unused-vars
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

//import { EffectCreative } from "swiper/modules";

export default function ProjectsGrid() {
  return (
    <>
      <article
        className="container w-[55%] mx-auto absolute top-[20%]  
      left-[22%]"
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={false}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <img
              src="../images/Drag-Drop.png"
              alt="web_drag-drop"
              className="h-[350px]"
            ></img>
            <div className="absolute bottom-[1%] left-[3%] flex w-[95%] bg-background-Modal justify-evenly">
              <span>Drag & drop</span>{" "}
              <a
                className="cursor-pointer"
                href="https://drag-drop-khaki.vercel.app"
              >
                Deploy
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-text-modal">
            <img
              src="../images/chiwawa.png"
              alt="restaurante_chiwawa"
              className="h-[350px]"
            ></img>
            <div className="absolute bottom-[1%] left-[3%] flex w-[95%] bg-background-Modal justify-evenly">
              <span>Chiwawa</span>{" "}
              <a
                className="cursor-pointer"
                href="https://aridanys.github.io/Proyecto-Sass/"
              >
                Deploy
              </a>
            </div>
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
