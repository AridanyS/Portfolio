// eslint-disable-next-line no-unused-vars
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';

//import { EffectCreative } from "swiper/modules";

export default function ProjectsGrid() {
  return (
    <>

      <article className="container w-[70%] mx-auto ">
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <img
              src="../images/Drag-Drop.png"
              alt="web_drag-drop"
              className=""
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/chiwawa.png"
              alt="restaurante_chiwawa"
              className=""
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/rocket.png"
              alt="rocket"
              className=""
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img src="../images/airbnb.png" alt="airbnb" className=""></img>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}
