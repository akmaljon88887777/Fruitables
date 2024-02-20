import { FaAppleAlt } from "react-icons/fa";
import { AiFillAmazonCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from "react";
import React from "react";
import Rasm from "../../Assets/single-item.jpg";
import Description from "./Tabs/description";
import Reviews from "./Tabs/reviewn";
import { NavLink } from "react-router-dom";
function ShopDetail() {
  const [counter, setCounter] = useState(2);
  const [demo, setDemo] = useState(false);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecerement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="mt-[15%]">
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
        <div className="grid grid-cols-2">
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
        <div>
          <p>{demo ? <Description /> : <Reviews />}</p>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
