import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// images
import img1 from "../../Assets/hero-img-1.png";
import img2 from "../../Assets/hero-img-2.jpg";

export default function HeaderCarousel() {
  return (
    <>
      <Swiper
        loop
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="HeaderCarousel"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="max-lg:w-[400px]" src={img1} alt="" />
            <div>
              <p className="raleway absolute flex rounded-xl w-[140px] font-semibold px-[30px] h-[53px] pt-[8.8px] bg-opacity-[0.6] bg-[#FFB524] top-[41%] left-[36%] text-white text-[25px] ">
                Fruites
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="max-lg:w-[400px" src={img2} alt="" />
            <div>
              <p className="raleway absolute flex w-[160px] text-[25px] font-semibold text-center h-[53px] rounded-lg px-[22px] pt-[8.8px] bg-opacity-[0.6] bg-[#FFB524] top-[42%] left-[34%] text-white ">
                Vesitables
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
