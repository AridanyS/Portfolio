// eslint-disable-next-line no-unused-vars
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
//import { EffectCube, Pagination } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";

//import { EffectCreative } from "swiper/modules";
//absolute top-[100%] left-[10%] Dentro de article id="Projects" y
export default function ProjectsGrid() {
  return (
    <>
      <div id="Projects" className="relative top-24"></div>

      <article
        id=""
        className="w-[80%] relative my-auto mx-auto rounded-lg border-8 
        top-[160px]
        border-background-page "
      >
        <section className="flex items-center content-center justify-between pb-2 font-bold bg-background-page text-text-modal-light">
          Projects
          <section className="flex gap-2 justify-evenly">
            <section className="w-2 h-2 bg-red-600 rounded-full "></section>
            <section className="w-2 h-2 bg-yellow-400 rounded-full "></section>
            <section className="w-2 h-2 bg-green-400 rounded-full "></section>
          </section>
        </section>

        <Swiper
        
        autoHeight="false"
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
            rotate: 350,
            stretch: 1,
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
              //loop
              //muted
              alt="web_drag-drop"
              className="object-cover w-full h-full"
            ></video>

            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
              Drag & Drop
              <a
                href="https://drag-drop-khaki.vercel.app"
                target="_blank"
                className="rounded "
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
                className="rounded "
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
            <video
              src="../images/chiwawa_video.mp4"
              autoPlay
              //loop
              //muted
              alt="restaurante_chiwawa"
              className="object-cover w-full h-full"
            ></video>
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
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
              className="object-cover w-full h-full"
            ></img>
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
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
              className="object-cover w-full h-full"
            ></img>
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
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
