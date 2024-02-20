import React from "react";
import "./style.css";
import HeaderCarousel from "./HeaderCarousel";
function Header() {
  return (
    <>
      <div className="home__header_img mt-[6.5%] pt-[100px]">
        <div className="flex max-lg:flex-col items-center gap-[2em] justify-center">
          <div className=" flex xl:w-[49%] lg:w-[55%] max-lg:px-[15%] pl-[7.3%]  max-lg:w-full flex-col text-start items-start lg:justify-start justify-center">
            <p className="raleway  text-[24px]  font-semibold text-[#FFB524]">
              100% Organic Foods
            </p>
            <p className="raleway leading-[1.2] text-[#81C408] max-lg:text-[54px] text-[64px] mt-[15px] font-extrabold">
              Organic Veggies & Fruits Foods
            </p>
            <div className="xl:w-[76%] max-[1300px]:w-[80%] max-lg:w-[70%] max-xl:w-[60%] mt-[50px] items-center justify-between flex pl-[26px] bg-white rounded-[30px] h-[57px] border-[2px] border-[#FFB524]">
              <input
                className="outline-none"
                type="text"
                placeholder="Search"
                name=""
                id=""
              />
              <button className="bg-[#75B207] text-white font-semibold absolute xl:ml-[310px] md:ml-80 ml-12 h-[56px] px-[29px] rounded-[32px]">
                Submit Now
              </button>
            </div>
          </div>
          <HeaderCarousel />
        </div>
      </div>
    </>
  );
}

export default Header;
