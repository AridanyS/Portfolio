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
      <div id="Projects" className="relative top-[40px]"></div>

      <article
        id=""
        className="w-[80vw] xl:w-[40vw] h-[full] relative my-auto mx-auto rounded-lg
         bg-background-page border-8 xl:border-[16px]
          mt-[25vh]
        border-background-page "
      >
        <section className="flex items-center content-center justify-between pb-2 font-bold xl:p-3 xl:text-3xl bg-background-page text-text-modal-light">
          Projects
          <section className="flex gap-2 xl:gap-4 justify-evenly">
            <section className="w-2 h-2 bg-red-600 rounded-full xl:h-3 xl:w-3 "></section>
            <section className="w-2 h-2 bg-yellow-400 rounded-full xl:h-3 xl:w-3 "></section>
            <section className="w-2 h-2 bg-green-400 rounded-full xl:h-3 xl:w-3 "></section>
          </section>
        </section>

        <Swiper
          style={{
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
            "--swiper-pagination-bottom": "70px",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-color": "#b3b2a3",
            "--swiper-pagination-bullet-inactive-color": "#1d1d18",
          }}
          autoHeight="false"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 350,
            stretch: 4,
            depth: 500,
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
              src="/drag_drop.mp4"
              autoPlay
              loop
              muted
              alt="web_drag-drop"
              className="object-cover w-full h-[55vh]"
            ></video>
            <div className="flex items-center font-bold xl:pt-4 xl:text-2xl xl:p-2 justify-evenly justify-items-center bg-background-page text-text-modal-light ">
              Drag & Drop
              <a
                href="https://drag-drop-khaki.vercel.app"
                target="_blank"
                className="rounded "
              >
                <img
                  src="/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Drag-Drop"
                target="_blank"
                className="rounded "
              >
                <img
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <video
              src="/chiwawa_video.mp4"
              autoPlay
              loop
              muted
              alt="restaurante_chiwawa"
              className="object-cover w-full h-[55vh]"
            ></video>
            <div className="flex items-center font-bold xl:pt-4 xl:text-2xl xl:p-2 justify-evenly justify-items-center bg-background-page text-text-modal-light ">
              Taquería Chiwawa
              <a
                href="https://aridanys.github.io/Proyecto-Sass/"
                target="_blank"
                className="rounded "
              >
                <img
                  src="/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light "
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Proyecto-Sass"
                target="_blank"
                className="rounded "
              >
                <img
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <img
              src="/rocket.png"
              alt="rocket"
              className="object-cover w-full h-[55vh]"
            ></img>
            <div className="flex items-center font-bold xl:pt-4 xl:text-2xl xl:p-2 justify-evenly justify-items-center bg-background-page text-text-modal-light ">
              Acme Rockets
              <a
                href="https://sprightly-kataifi-24204e.netlify.app/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Tailwind-Rocket"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <img
              src="/airbnb.png"
              alt="airbnb"
              className="object-cover w-full h-[55vh]"
            ></img>
            <div className="flex items-center font-bold xl:pt-4 xl:text-2xl xl:p-2 justify-evenly justify-items-center bg-background-page text-text-modal-light ">
              Airbnb
              <a
                href="https://radiant-kataifi-bb334f.netlify.app/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/external-link.svg"
                  alt="deploy"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
              <a
                href="https://github.com/AridanyS/Airbnb-Page"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded xl:h-8 xl:w-8 bg-text-modal-light"
                ></img>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </article>
    </>
  );
}
