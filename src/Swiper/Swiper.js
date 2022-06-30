import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import images
import breathe from '../img/projects/breathe.jpg';
import energy from '../img/projects/energy.jpg';
import huxley from '../img/projects/huxley.jpg';
import lastofus from '../img/projects/lastofus.jpg';
import memocho from '../img/projects/memocho.jpg';
import spacex from '../img/projects/spacex.jpg';
import stx from '../img/projects/stx.jpg';
import travel from '../img/projects/travel.jpg';

// import required modules
import { Pagination, Navigation, EffectCoverflow } from "swiper";

export default function App() {
  return (
    <div className="swiperSection">

      <div class="custom-shape-divider-top-1656520821">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>

      <Swiper
        effect={"coverflow"}
        initialSlide={3}
        slidesPerView={1}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide><img src={memocho} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={stx} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={energy} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={spacex} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={huxley} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={travel} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={breathe} alt="img"/></SwiperSlide>
        <SwiperSlide><img src={lastofus} alt="img"/></SwiperSlide>
      </Swiper>
    </div>
  );
}
