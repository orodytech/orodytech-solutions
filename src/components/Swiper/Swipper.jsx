import React from "react";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/services/service1.jpg";
import slide_image_2 from "../../assets/services/service2.jpg";
import slide_image_3 from "../../assets/services/service3.jpg";
import slide_image_4 from "../../assets/services/service4.jpg";

function Swipper() {
  return (
    <div className="container">
      <h1 className="heading">Swipper</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img className="img__slider" src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img__slider" src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img__slider" src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="img__slider" src={slide_image_4} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <AiOutlineArrowLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <AiOutlineArrowRight />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Swipper;
