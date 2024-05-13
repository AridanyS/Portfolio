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
   
      <Swiper 
      centeredSlides={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        
        <div className="w-1/2">
          <SwiperSlide className="w-1/2 left-1/4">
            <img
              src="../images/Drag-Drop.png"
              alt="web_drag-drop"
              className="w-52 "
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/chiwawa.png"
              alt="restaurante_chiwawa"
              className="w-52"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/rocket.png"
              alt="rocket"
              className="w-52 h-1/2"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/airbnb.png"
              alt="airbnb"
              className="w-52 h-96"
            ></img>
          </SwiperSlide>
          </div>
      </Swiper>
      
    </>

    
  );
}
