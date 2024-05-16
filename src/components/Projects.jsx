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
        className="container w-[80%] h-[35%] mx-auto absolute top-[20%] border-4 border-grey-semidarker
      left-[10%]"
      >
        <Swiper
          style={{
            "--swiper-pagination-bullet-size": "9px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "20px",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-color": "#b3b2a3",
            "--swiper-pagination-bullet-inactive-color": "#373730",
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
              src="../images/drag-drop.png"
              alt="web_drag-drop"
              className="h-[210px] w-[300px] object-cover"
            ></img>

            <div className="w-[100%] font-bold flex text-sm justify-evenly items-center h-[100%] text-pink-Plusdark bg-pink-light ">
              Drag & Drop
              <a
                href="https://drag-drop-khaki.vercel.app"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/deploy.svg"
                  alt="deploy"
                  className="h-5 "
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-text-modal">
            <img
              src="../images/chiwawa.png"
              alt="restaurante_chiwawa"
              className="h-[210px] w-[300px] object-cover"
            ></img>
            <div className="w-[100%] font-bold flex text-sm justify-evenly items-center h-[100%] text-pink-Plusdark bg-pink-light ">
              Chiwawa
              <a
                href="https://drag-drop-khaki.vercel.app"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/deploy.svg"
                  alt="deploy"
                  className="h-5 "
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <img
              src="../images/rocket.png"
              alt="rocket"
              className="h-[210px] w-[300px] object-cover"
            ></img>
            <div className="w-[100%] font-bold flex text-sm justify-evenly items-center h-[100%] text-pink-Plusdark bg-pink-light ">
              Acme Rockets
              <a
                href="https://sprightly-kataifi-24204e.netlify.app/"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/deploy.svg"
                  alt="deploy"
                  className="h-5 "
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <img
              src="../images/airbnb.png"
              alt="airbnb"
              className="h-[210px] w-[300px]"
            ></img>
            <div className="w-[100%] font-bold flex text-sm justify-evenly items-center h-[100%] text-pink-Plusdark bg-pink-light ">
              Airbnb
              <a
                href="https://radiant-kataifi-bb334f.netlify.app/"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/deploy.svg"
                  alt="deploy"
                  className="h-5 "
                ></img>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}
