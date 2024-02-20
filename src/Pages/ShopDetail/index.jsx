import { BsFillStarFill } from "react-icons/bs";
import { FaAppleAlt } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from "react";
import React from "react";
import Rasm from "../../Assets/single-item.jpg";
import BannerStyle from "../../Components/Peach/BannerStyle";
import Description from "./Tabs/description";
import Reviews from "./Tabs/reviewn";
import FeauturedCarts from "../Shop/FeauturedCarts";
import Image from ".././../Assets/featur-1.jpg";
import Image2 from ".././../Assets/featur-2.jpg";
import Image3 from ".././../Assets/featur-3.jpg";
import Image4 from ".././../Assets/vegetable-item-4.jpg";
import Image5 from ".././../Assets/vegetable-item-5.jpg";
import Image6 from ".././../Assets/vegetable-item-6.jpg";
import TestimonialCarousel2 from "../../Components/FreshCarousel";
function ShopDetail() {
  const [counter, setCounter] = useState(1);
  const [demo, setDemo] = useState(false);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecerement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="overflow-hidden">
      <BannerStyle title="Shop Detail" />
      <div
        style={{ justifyItems: "center" }}
        className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 object-cover my-24 justify-items-center mx-36"
      >
        <div className="border ">
          <img className="w-[401px] h-[401px]" src={Rasm} alt="" />
        </div>
        <div className="text-start">
          <p className="text-[24px] font-bold text-[#45595B]">Brocoli</p>
          <p className="text-[#747d88] text-[16px]">Category: Vegetables</p>
          <p className="text-[20px] text-[#45595b] font-bold mt-5">3,35 $</p>
          <br />
          <div class="flex mb-4">
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#747d88" size={20} />
          </div>
          <p className="text-[16px]">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <br />
          <p>
            Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock
            flounder; chain pickerel hatchetfish, pencilfish snailfish
          </p>
          <br />
          <div className="flex">
            <button
              onClick={() => handleDecerement()}
              className="w-[30px] h-[30px] rounded-full text-5xl bg-[#f4f6f8]"
            >
              -
            </button>
            <p className="w-[30px] h-[30px] text-center">{counter}</p>
            <button
              onClick={() => handleIncrement()}
              className="w-[30px] h-[30px] rounded-full text-5xl bg-[#f4f6f8]"
            >
              +
            </button>
          </div>
          <br />
          <div>
            <button className="w-[161px] h-[41px] border flex justify-center items-center gap-4 border-[#ffb524] rounded-full font-semibold text-[#81c408]">
              <RiShoppingBagFill color="#81c408" size={20} /> Add to cart
            </button>
            <br />
          </div>
        </div>
        <div className="text-start">
          <div>
            <input
              type="text"
              placeholder="keywords"
              className="w-[261px] h-[57px] border rounded-xl p-7"
              name=""
              id=""
            />
            <span className="w-[49px] h-[57px] bg-[#E9ECEF] cursor-pointer border border-[#ced4da] absolute z-50 rounded-r-xl -ml-[48px] py-8">
              <p className="flex items-center justify-center">
                <FaSearch color="#747D88" />
              </p>
            </span>
          </div>
          <br />
          <div>
            <h4 className="text-[#45595B] text-[24px] font-medium">
              Categories
            </h4>
            <br />
            <div className="grid grid-cols-2 gap-x-56 gap-y-5">
              <div className="flex items-center gap-2.5 text-[#81c408]">
                <FaAppleAlt />
                Apples
              </div>
              <span className="flex items-center ">(3)</span>
              <div className="flex items-center gap-2.5 text-[#81c408]">
                <FaAppleAlt />
                Oranges
              </div>
              <span className="flex items-center ">(5)</span>
              <div className="flex items-center gap-2.5 text-[#81c408]">
                <FaAppleAlt />
                Strawberry
              </div>
              <span className="flex items-center ">(2)</span>
              <div className="flex items-center gap-2.5 text-[#81c408]">
                <FaAppleAlt />
                Banana
              </div>
              <span className="flex items-center ">(8)</span>
              <div className="flex items-center gap-2.5 text-[#81c408]">
                <FaAppleAlt />
                Pumpkin
              </div>
              <span className="flex items-center ">(5)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  justify-items-start ml-40">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <button
            onClick={() => setDemo(true)}
            className={`justify-center  text-black flex items-center w-[118px] h-[48px]  ${
              demo ? "border-[#ffb524] border-b-2" : "text-[red]"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setDemo(false)}
            className={`justify-center  text-black flex items-center w-[118px] h-[48px]  ${
              demo ? "text-[red]" : "border-[#ffb524] border-b-2"
            }`}
          >
            Reviews
          </button>
        </div>
        <br />
        <div className="grid lg:grid-cols-2 gap-36 lg:ml-0 -ml-16 grid-cols-1 w-[100%] justify-items-center">
          <div className="w-[100%]">{demo ? <Description /> : <Reviews />}</div>
          <div className="grid gap-4 md:ml-0 lg:ml-0 -ml-20 xl:-mt-72">
            <p className="text-[24px] font-semibold"> Featured products</p>
            <FeauturedCarts img={Image} title="Big Banana" />
            <FeauturedCarts img={Image2} title="Big Banana" />
            <FeauturedCarts img={Image3} title="Big Banana" />
            <FeauturedCarts img={Image4} title="Big Banana" />
            <FeauturedCarts img={Image5} title="Big Banana" />
            <FeauturedCarts img={Image6} title="Big Banana" />
            <button className="w-[100%] text-center text-[#81c408] hover:text-[white] h-24 border-[1px] border-[#ffb524] rounded-full font-semibold mt-10 hover:bg-[#ffb524] duration-500 font-sans">
              View More
            </button>
          </div>
          <br />
        </div>
        <div>
          {/* <div>salom</div> */}
          <div className="lg:grid grid-cols-2 gap-4 lg:flex-row flex-col md:ml-0 lg:ml-0 -ml-32 -mt-[15%]">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name=""
                className="xl:w-[62%] lg:w-[50%] h-[36px] border"
                id=""
              />
            </div>
            <div className="xl:-ml-[36%]">
              <input
                type="text"
                placeholder="Your Email"
                name=""
                className="xl:w-[46%] lg:w-[35%] h-[36px] border"
                id=""
              />
            </div>
            <div>
              <textarea
                name=""
                placeholder="salom"
                className="xl:w-[900px] lg:w-[520px] h-[204px] border p-3"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-around -ml-[39%]">
            <div className="flex items-center gap-2">
              Please rate:
              <div className="flex">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </div>
            </div>
            <div className="-ml-[29%] ">
              <button className="w-full p-12 pt-0 pb-0 h-[57px] border border-[#ffb524] rounded-full text-[#81c408]">
                Post Comment
              </button>
            </div>
          </div>

          <br />
        </div>
      </div>
      <div className="">
        <TestimonialCarousel2 />
      </div>
    </div>
  );
}

export default ShopDetail;
