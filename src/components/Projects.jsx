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
      <article id="Projects"
        className="container w-[80%] h-[100%] mx-auto absolute top-[31%] rounded-lg border-8 
        border-background-page left-[10%]"
      >
        <section className="flex items-center content-center justify-between pb-2 font-bold bg-background-page text-text-modal-light">
          Projects
          <section className="flex gap-2 justify-evenly">
            <section className="flex w-2 h-2 bg-red-600 rounded-full"></section>
            <section className="flex w-2 h-2 bg-yellow-300 rounded-full"></section>
            <section className="flex w-2 h-2 bg-green-500 rounded-full"></section>
          </section>
        </section>

        <Swiper
          style={{
            "--swiper-pagination-bullet-size": "9px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "30px",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-color": "#b3b2a3",
            "--swiper-pagination-bullet-inactive-color": "#1d1d18",
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 250,
            stretch: 20,
            depth: 1000,
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
            <video
              src="../images/drag_drop.mp4"
              autoPlay
              loop
              muted
              alt="web_drag-drop"
              className="h-[210px] w-[300px] object-cover"
            ></video>

            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page pt-1 text-text-modal-light ">
              Drag & Drop
              <a
                href="https://drag-drop-khaki.vercel.app"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded bg-text-modal-light"
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Drag-Drop"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className=" border-text-modal">
            <video
              src="../images/chiwawa_video.mp4"
              autoPlay
              loop
              muted
              alt="restaurante_chiwawa"
              className="h-[210px] w-[300px] object-cover"
            ></video>
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page pt-1 text-text-modal-light ">
              Taquería Chiwawa
              <a
                href="https://aridanys.github.io/Proyecto-Sass/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded bg-text-modal-light "
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Proyecto-Sass"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
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
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page pt-1 text-text-modal-light ">
              Acme Rockets
              <a
                href="https://sprightly-kataifi-24204e.netlify.app/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded bg-text-modal-light"
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Tailwind-Rocket"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
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
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page pt-1 text-text-modal-light ">
              Airbnb
              <a
                href="https://radiant-kataifi-bb334f.netlify.app/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded bg-text-modal-light"
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Airbnb-Page"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="../images/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
                ></img>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}
