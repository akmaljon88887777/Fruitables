import { FaAppleAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import BannerStyle from "../../Components/Peach/BannerStyle";
import Image from ".././../Assets/featur-1.jpg";
import Image2 from ".././../Assets/featur-2.jpg";
import Image3 from ".././../Assets/featur-3.jpg";
import Imageflex from ".././../Assets/banner-fruits.jpg";
import FeauturedCarts from "./FeauturedCarts";
import Cartsshop from "./cartsshop";

function Shop() {
  return (
    <div className="pb-44">
      <BannerStyle title="Shop" />
      <div className="grid px-16 xl:px-44 xl:mt-32 text-[#45595b]">
        <div className="w-full">
          <p className="xl:text-[40px] font-semibold">Fresh fruits shop</p>
          <div className="w-full grid gap-y-20 xl:flex lg:flex justify-between">
            <div className="flex items-center w-full xl:w-[50%]">
              <input
                type="text"
                className="relative py-6 w-full xl:w-[48%] rounded-xl px-8 border"
                placeholder="keywords"
              />
              <p className="absolute w-20 text-[#747d88] flex justify-center items-center xl:ml-[260px] bg-[#f4f6f8]">
                <AiOutlineSearch size={24} />
              </p>
            </div>
            <div className="flex justify-end w-full xl:w-[50%]">
              <button className="bg-[#f4f6f8] text-start px-10 full w-full xl:w-[50%] rounded-xl">
                Default Sorting:
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-10 lg:flex xl:flex w-full mt-10">
          <div className="lg:w-[24%] xl:w-[24%]">
            <p className="text-[24px] font-semibold text"> Categories</p>
            <div className="flex justify-between items-center mt-6">
              <span className="flex items-center gap-4 text-[#81c408] hover:text-[#FFB524] duration-300">
                <FaAppleAlt /> Apples
              </span>
              <span className="flex items-center"> 3</span>
            </div>
            <div className="flex justify-between items-center mt-7">
              <span className="flex items-center gap-4 text-[#81c408] hover:text-[#FFB524] duration-300">
                <FaAppleAlt /> Oranges
              </span>
              <span className="flex items-center"> 5</span>
            </div>
            <div className="flex justify-between items-center mt-7">
              <span className="flex items-center gap-4 text-[#81c408] hover:text-[#FFB524] duration-300">
                <FaAppleAlt /> Strawbery
              </span>
              <span className="flex items-center"> 2</span>
            </div>
            <div className="flex justify-between items-center mt-7">
              <span className="flex items-center gap-4 text-[#81c408] hover:text-[#FFB524] duration-300">
                <FaAppleAlt /> Banana
              </span>
              <span className="flex items-center"> 8</span>
            </div>
            <div className="flex justify-between items-center mt-7">
              <span className="flex items-center gap-4 text-[#81c408] hover:text-[#FFB524] duration-300">
                <FaAppleAlt /> Pumpkin
              </span>
              <span className="flex items-center"> 5</span>
            </div>
            <div className="py-10">
              <label htmlFor="" className="text-[24px] font-semibold">
                Price
              </label>
              <input type="range" className="text-white" />
              <option value="0"> 0</option>
            </div>
            <div>
              <p className="text-[24px] font-semibold"> Additional</p>
              <form action="" className="grid gap-5">
                <div className="fledx items-center">
                  <input type="radio" />
                  <label htmlFor=""> Organic</label>
                </div>
                <div className="fledx items-center">
                  <input type="radio" />
                  <label htmlFor=""> Fresh</label>
                </div>
                <div className="fledx items-center">
                  <input type="radio" />
                  <label htmlFor=""> Sales</label>
                </div>
                <div className="fledx items-center">
                  <input type="radio" />
                  <label htmlFor=""> Discount</label>
                </div>
                <div className="fledx items-center">
                  <input type="radio" />
                  <label htmlFor=""> Expired</label>
                </div>
              </form>
            </div>
            <div className="grid gap-4 mt-16">
              <p className="text-[24px] font-semibold"> Featured products</p>
              <FeauturedCarts img={Image} title="Big Banana" />
              <FeauturedCarts img={Image2} title="Big Banana" />
              <FeauturedCarts img={Image3} title="Big Banana" />
              <button className="w-full text-center text-[#81c408] hover:text-[white] h-24 border-[1px] border-[#ffb524] rounded-full font-semibold mt-10 hover:bg-[#ffb524] duration-500 font-sans">
                View More
              </button>
            </div>
            <div className="w-full mt-20">
              <img src={Imageflex} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-full lg:w-[70%] xl:w-[78%]">
            <div className="w-full">
              <Cartsshop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
