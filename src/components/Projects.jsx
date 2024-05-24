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
        className="w-[80vw] xl:w-[40vw] h-[full] relative my-auto mx-auto rounded-lg
         bg-background-page border-8 
          mt-[35vh]
        border-background-page "
      >
        <section className="flex items-center content-center justify-between pb-2 font-bold xl:p-3 xl:text-2xl bg-background-page text-text-modal-light">
          Projects
          <section className="flex gap-2 justify-evenly">
            <section className="bg-red-600 rounded-full xl:h-3 xl:w-3 "></section>
            <section className="bg-yellow-400 rounded-full xl:h-3 xl:w-3 "></section>
            <section className="bg-green-400 rounded-full xl:h-3 xl:w-3 "></section>
          </section>
        </section>

        <Swiper
          style={{
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bottom": "30px",
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
            stretch: 0,
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
            <div className="flex items-center font-bold justify-evenly justify-items-center bg-background-page text-text-modal-light ">
              Drag & Drop
              <a
                href="https://drag-drop-khaki.vercel.app"
                target="_blank"
                className="rounded "
              >
                <img
                  src="/external-link.svg"
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
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
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
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
              Taquería Chiwawa
              <a
                href="https://aridanys.github.io/Proyecto-Sass/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/external-link.svg"
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
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
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
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
              Acme Rockets
              <a
                href="https://sprightly-kataifi-24204e.netlify.app/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/external-link.svg"
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
                  src="/github.svg"
                  alt="github"
                  className="h-5 rounded bg-text-modal-light"
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
            <div className="w-[100%] font-bold flex justify-evenly items-center h-[100%] bg-background-page text-text-modal-light ">
              Airbnb
              <a
                href="https://radiant-kataifi-bb334f.netlify.app/"
                target="_blank"
                className="rounded hover:bg-pink-dark "
              >
                <img
                  src="/external-link.svg"
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
                  src="/github.svg"
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
