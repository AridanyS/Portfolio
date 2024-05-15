// eslint-disable-next-line no-unused-vars
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
//import { EffectCube, Pagination } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";

//import { EffectCreative } from "swiper/modules";

export default function ProjectsGrid() {
  return (
    <>
      <article
        className="container w-[55%] mx-auto absolute top-[20%]  
      left-[22%]"
      >
        <Swiper
          style={{
            "--swiper-pagination-bullet-size": "9px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
           // dont work "--swiper-pagination-bullet-vertical-gap": "40px",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-color": "#989783",
            "--swiper-pagination-bullet-inactive-color": "#0d0d0d",
            
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 250,
            stretch: 20,
            depth: 9000,
            modifier: 1,
            slideShadows: true,
            //scale: 5,
          }}

          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
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
