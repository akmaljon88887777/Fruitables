import React from "react";
import img1 from "../../Assets/baner-1.png";

const Store = () => {
  return (
    <div className="flex justify-evenly max-lg:flex-col max-lg:gap-[3em]  pt-[50px] mt-[180px] pl-[4%]  items-center pb-[3em] bg-[#FAB123]">
      <div className="w-[43%] max-lg:w-[77%]">
        <p className="raleway xl:text-[64px] max-md:text-[3.3em] max-sm:text-[252%]  md:text-[3.8em] text-start leading-[1.2] text-white font-extrabold">
          Fresh Exotic Fruits
        </p>
        <p className="text-[4.3rem] leading-[1.2] max-sm:text-[250%]  text-start text-[#45595b]">
          in Our Store
        </p>
        <p className="text-start text-[1.1rem] mt-[20px] text-[#45595b]">
          The generated Lorem Ipsum is therefore always free from repetition
          injected humour, or non-characteristic words etc.
        </p>
        <p className="text-start py-[15px] mt-[20px] font-semibold text-[#45595b] flex items-center justify-center rounded-full w-[130px] border-[2px] border-white ">
          BUY
        </p>
      </div>
      <div className="flex items-start justify-start">
        <div className="absolute bg-white px-[1.7em]  max-sm:py-[0.3em]  max-sm:px-[1.1em]  py-[0.8em] rounded-full flex items-center justify-center">
          <p className="raleway font-bold text-[5em] text-[#45595b]">1</p>
          <div>
            <p className="raleway font-semibold text-[1.7em] text-[#45595b]">50 $</p>
            <p className="raleway font-semibold text-[1.3em] text-[#45595b] text-start">kg</p>
          </div>
        </div>
        <img className="xl:h-[590px] lg:h-[400px] max-lg:h-[650px] max-md:h-[460px] max-sm:h-[300px]" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Store;
