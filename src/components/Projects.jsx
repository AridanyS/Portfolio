// eslint-disable-next-line no-unused-vars
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative } from "swiper/modules";

export default function ProjectsGrid() {
  return (
    <>
    
      projects
      <article className="relative mx-20">
      <Swiper 
      centeredSlides={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        
        
          <SwiperSlide className="">
            <img
              src="../images/Drag-Drop.png"
              alt="web_drag-drop"
              className="w-56 "
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/chiwawa.png"
              alt="restaurante_chiwawa"
              className="w-56"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/rocket.png"
              alt="rocket"
              className="w-56"
            ></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img
              src="../images/airbnb.png"
              alt="airbnb"
              className="w-56 h-96"
            ></img>
          </SwiperSlide>
          
      </Swiper>
      </article>
    </>

    
  );
}
