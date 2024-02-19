import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuMoveRight } from "react-icons/lu";
import img1 from "../Assets//vegetable-item-1.jpg";
import img2 from "../Assets/vegetable-item-2.jpg";
import img3 from "../Assets/vegetable-item-3.png";
import img4 from "../Assets/vegetable-item-4.jpg";
import img5 from "../Assets/vegetable-item-5.jpg";
import img6 from "../Assets/vegetable-item-6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { LuMoveLeft } from "react-icons/lu";
// import required modules
import { Navigation } from "swiper/modules";

export default function TestimonialCarousel() {
  return (
    <div className="px-[0%] z-[-1] mt-[200px]">
      <div className="mb-[2em] max-md:mb-[5em]">
        <p className="text-[2.5rem] max-xl:ml-[10%] max-lg:ml-[7%] xl:ml-[9%] text-start  font-semibold leading-[1.2] text-[#45595b]">
          Our Organic Products
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        breakpoints={{
          300:{
            slidesPerView: 1,
            spaceBetween:20
          },
          640:{
            slidesPerView: 1.8,
            spaceBetween:90
          },
          700:{
            slidesPerView: 2,
            spaceBetween:90
          },
          768:{
            slidesPerView: 2,
            spaceBetween:20
          },
          800:{
            slidesPerView: 2.1,
            spaceBetween:90
          },
          850:{
            slidesPerView: 2.1,
            spaceBetween:30
          },
          910:{
            slidesPerView: 2.3,
            spaceBetween:20
          },
          990:{
            slidesPerView: 2.5,
            spaceBetween:20
          },
          1100: {
            slidesPerView: 3.2,
            spaceBetween:20
          },
          1160: {
            slidesPerView: 3.4,
            spaceBetween:60
          },
          1200: {
            slidesPerView: 3,
            spaceBetween:10
          },    
          1240: {
            slidesPerView: 3.2,
            spaceBetween:20
          },   
          1300: {
            slidesPerView: 4,
            spaceBetween:20
          },
         
        }}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        spaceBetween={30}
        loop
        modules={[Navigation]}
        className="testimonialCarousel h-[400px] max-xl:w-[1000px] xl:w-[1250px] max-lg:w-[90%]"
      >
        <SwiperSlide>
          <div>
            <div className="flex border flex-col pb-[1.4em] rounded-lg items-start justify-start w-[300px] max-lg:w-[350px] max-sm:w-[100%]">
              <img className="rounded-lg " src={img1} alt="Banana Img" />
              <p className="mb-[200px] mt-[10px] ml-[180px]  z-[9999999] rounded-[10px] absolute px-[20px] w-[105px] py-[4px] bg-[#f277]">
                Vegitable
              </p>
              <div className="pl-[1em]">
                <p className="raleway text-start leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold">
                  Banana
                </p>
                <p className="raleway text-start mt-[10px] text-[#333] font-medium leading-[1.6] text-[1.02em]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
                  do eiusmod te incididunt
                </p>
                <p></p>
                <div className="flex items-center justify-start mt-[20px] gap-[1em]">
                  <p className="font-normal leading-[1.6] text-[1.3em] text-[#396064]">
                    $7.99 / kg
                  </p>
                  <p className="px-[20px] h-[33px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="flex border flex-col pb-[1.4em] rounded-lg items-start justify-start w-[300px] max-lg:w-[350px] max-sm:w-[100%]">
              <img className="rounded-lg " src={img2} alt="Banana Img" />
              <p className="mb-[200px] mt-[10px] ml-[180px]  z-[9999999] rounded-[10px] absolute px-[20px] w-[105px] py-[4px] bg-[#f277]">
                Vegitable
              </p>
              <div className="pl-[1em]">
                <p className="raleway text-start leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold">
                  Banana
                </p>
                <p className="raleway text-start mt-[10px] text-[#333] font-medium leading-[1.6] text-[1.02em]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
                  do eiusmod te incididunt
                </p>
                <p></p>
                <div className="flex items-center justify-start mt-[20px] gap-[1em]">
                  <p className="font-normal leading-[1.6] text-[1.3em] text-[#396064]">
                    $7.99 / kg
                  </p>
                  <p className="px-[20px] h-[33px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="flex border flex-col pb-[1.4em] rounded-lg items-start justify-start w-[300px] max-lg:w-[350px] max-sm:w-[100%]">
              <img className="rounded-lg " src={img3} alt="Banana Img" />
              <p className="mb-[200px] mt-[10px] ml-[180px]  z-[9999999] rounded-[10px] absolute px-[20px] w-[105px] py-[4px] bg-[#f277]">
                Vegitable
              </p>
              <div className="pl-[1em]">
                <p className="raleway text-start leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold">
                  Banana
                </p>
                <p className="raleway text-start mt-[10px] text-[#333] font-medium leading-[1.6] text-[1.02em]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
                  do eiusmod te incididunt
                </p>
                <p></p>
                <div className="flex items-center justify-start mt-[20px] gap-[1em]">
                  <p className="font-normal leading-[1.6] text-[1.3em] text-[#396064]">
                    $7.99 / kg
                  </p>
                  <p className="px-[20px] h-[33px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="flex border flex-col pb-[1.4em] rounded-lg items-start justify-start w-[300px] max-lg:w-[350px] max-sm:w-[100%]">
              <img className="rounded-lg " src={img4} alt="Banana Img" />
              <p className="mb-[200px] mt-[10px] ml-[180px]  z-[9999999] rounded-[10px] absolute px-[20px] w-[105px] py-[4px] bg-[#f277]">
                Vegitable
              </p>
              <div className="pl-[1em]">
                <p className="raleway text-start leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold">
                  Banana
                </p>
                <p className="raleway text-start mt-[10px] text-[#333] font-medium leading-[1.6] text-[1.02em]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
                  do eiusmod te incididunt
                </p>
                <p></p>
                <div className="flex items-center justify-start mt-[20px] gap-[1em]">
                  <p className="font-normal leading-[1.6] text-[1.3em] text-[#396064]">
                    $7.99 / kg
                  </p>
                  <p className="px-[20px] h-[33px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="flex border flex-col pb-[1.4em] rounded-lg items-start justify-start w-[300px] max-lg:w-[350px] max-sm:w-[100%]">
              <img className="rounded-lg " src={img5} alt="Banana Img" />
              <p className="mb-[200px] mt-[10px] ml-[180px]  z-[9999999] rounded-[10px] absolute px-[20px] w-[105px] py-[4px] bg-[#f277]">
                Vegitable
              </p>
              <div className="pl-[1em]">
                <p className="raleway text-start leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold">
                  Banana
                </p>
                <p className="raleway text-start mt-[10px] text-[#333] font-medium leading-[1.6] text-[1.02em]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
                  do eiusmod te incididunt
                </p>
                <p></p>
                <div className="flex items-center justify-start mt-[20px] gap-[1em]">
                  <p className="font-normal leading-[1.6] text-[1.3em] text-[#396064]">
                    $7.99 / kg
                  </p>
                  <p className="px-[20px] h-[33px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="flex border flex-col pb-[1.4em] rounded-lg items-start justify-start w-[300px] max-lg:w-[350px] max-sm:w-[100%]">
              <img className="rounded-lg " src={img6} alt="Banana Img" />
              <p className="mb-[200px] mt-[10px] ml-[180px]  z-[9999999] rounded-[10px] absolute px-[20px] w-[105px] py-[4px] bg-[#f277]">
                Vegitable
              </p>
              <div className="pl-[1em]">
                <p className="raleway text-start leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold">
                  Banana
                </p>
                <p className="raleway text-start mt-[10px] text-[#333] font-medium leading-[1.6] text-[1.02em]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. sed
                  do eiusmod te incididunt
                </p>
                <p></p>
                <div className="flex items-center justify-start mt-[20px] gap-[1em]">
                  <p className="font-normal leading-[1.6] text-[1.3em] text-[#396064]">
                    $7.99 / kg
                  </p>
                  <p className="px-[20px] h-[33px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-button-prev">
        <LuMoveLeft />
      </div>
      <div className="custom-button-next">
        <LuMoveRight />
      </div>
    </div>
  );
}
