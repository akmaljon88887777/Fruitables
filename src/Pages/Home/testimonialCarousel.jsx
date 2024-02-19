import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuMoveRight } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import img1 from "../../Assets/testimonial-1.jpg";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { LuMoveLeft } from "react-icons/lu";
// import required modules
import { Navigation } from "swiper/modules";

export default function TestimonialCarousel() {
  return (
    <div className="px-[8%] z-[-1]">
      <div className="mb-[5em]">
        <p className="raleway text-[#81c408] mt-[130px] font-semibold text-[1.5em]">
          Our Testimonial
        </p>
        <p className="raleway text-[3rem] leading-[1.4] font-extrabold text-[#45595b]">
          Our Client Saying!
        </p>
      </div>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: ".custom-button-nexttt",
          prevEl: ".custom-button-prevvv",
        }}
        spaceBetween={30}
        loop
        modules={[Navigation]}
        className="testimonialCarousel h-[400px]"
      >
        <SwiperSlide>
          <div className="pl-[1em] py-[1.5em] pb-[1em] mt-[0px]  rounded-lg bg-[#F4F6F8]">
            <div className="flex flex-col  items-start justify-start">
              <p className="pr-[5%] text-[1.05rem] text-start text-[#747D88]">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry's standard dummy text ever since the 1500s,
              </p>
              <p className="mt-[23px] h-[1px] w-[98%] max-sm:w-[92%] bg-[#F6AF23]"></p>
            </div>
            <div className="flex items-center  mt-[19px] pr-[5%] justify-between">
              <div className="flex gap-[1.4em] items-center justify-start">
                <img className="rounded-lg" src={img1} alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="raleway text-[1.4rem] text-[#45595b] max-sm:text-[1em] font-semibold leading-[1.2]">
                    Client Name
                  </p>
                  <p className="mt-[10px] max-sm:text-[0.9em] text-[#8E969F]">
                    Profession
                  </p>
                  <div className="flex mt-[15px] items-center justify-center">
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#677676]"><FaStar/></p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[2em] text-[#FFB524]  max-sm:text-[1.5em]">
                  <FaQuoteRight />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-[1em] py-[1.5em] pb-[1em] mt-[0px]  rounded-lg bg-[#F4F6F8]">
            <div className="flex flex-col  items-start justify-start">
              <p className="pr-[5%] text-[1.05rem] text-start text-[#747D88]">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry's standard dummy text ever since the 1500s,
              </p>
              <p className="mt-[23px] h-[1px] w-[98%] max-sm:w-[92%] bg-[#F6AF23]"></p>
            </div>
            <div className="flex items-center  mt-[19px] pr-[5%] justify-between">
              <div className="flex gap-[1.4em] items-center justify-start">
                <img className="rounded-lg" src={img1} alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="raleway text-[1.4rem] text-[#45595b] max-sm:text-[1em] font-semibold leading-[1.2]">
                    Client Name
                  </p>
                  <p className="mt-[10px] max-sm:text-[0.9em] text-[#8E969F]">
                    Profession
                  </p>
                  <div className="flex mt-[15px] items-center justify-center">
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#677676]"><FaStar/></p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[2em] text-[#FFB524]  max-sm:text-[1.5em]">
                  <FaQuoteRight />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pl-[1em] py-[1.5em] pb-[1em] mt-[0px]  rounded-lg bg-[#F4F6F8]">
            <div className="flex flex-col  items-start justify-start">
              <p className="pr-[5%] text-[1.05rem] text-start text-[#747D88]">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry's standard dummy text ever since the 1500s,
              </p>
              <p className="mt-[23px] h-[1px] w-[98%] max-sm:w-[92%] bg-[#F6AF23]"></p>
            </div>
            <div className="flex items-center  mt-[19px] pr-[5%] justify-between">
              <div className="flex gap-[1.4em] items-center justify-start">
                <img className="rounded-lg" src={img1} alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="raleway text-[1.4rem] text-[#45595b] max-sm:text-[1em] font-semibold leading-[1.2]">
                    Client Name
                  </p>
                  <p className="mt-[10px] max-sm:text-[0.9em] text-[#8E969F]">
                    Profession
                  </p>
                  <div className="flex mt-[15px] items-center justify-center">
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#81C408]"><FaStar/></p>
                    <p className="text-[1.18rem] text-[#677676]"><FaStar/></p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[2em] text-[#FFB524]  max-sm:text-[1.5em]">
                  <FaQuoteRight />
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
      <div className="relative left-0-[10px]">
        <div className="custom-button-prevvv">
          <LuMoveLeft />
        </div>
        <div className="custom-button-nexttt">
          <LuMoveRight />
        </div>
      </div>
    </div>
  );
}
