import React, { useState } from "react";
import img1 from "../../Assets/fruite-item-5.jpg";
import img2 from "../../Assets/fruite-item-4.jpg";
import img3 from "../../Assets/fruite-item-3.jpg";
import img4 from "../../Assets/fruite-item-2.jpg";
import img5 from "../../Assets/fruite-item-1.jpg";
import img6 from "../../Assets/fruite-item-6.jpg";
import { FaShoppingBag } from "react-icons/fa";

const Cartsshop = () => {
  const data = [
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img4,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img2,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img3,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img5,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img4,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img5,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 gap-10 w-full">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-full shadoww">
              <div className="">
                <div style={{transition: "all .3s"}} className="items-center justify-center overflow-hidden">
                  <img
                    className="rounded-t-lg cardimg duration-300"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <p className="mb-[200px] mt-[-200px] ml-[10px] rounded-[10px] absolute px-[20px] w-[75px] py-[4px] bg-[#FFB524] text-white">
                  Fruits
                </p>
              </div>
              <div className="border-[1px] border-[#ffb524] px-10 pb-10 rounded-b-2xl">
                <p className="leading-[1.2] mt-[25px] text-[24px] text-[#45595b] font-semibold">
                  {item.title}
                </p>
                <p className="text-[20px]] text-[#747d88] mt-[5px] leading-[1.5] font-normal">
                  {item.text}
                </p>
                <div className="flex items-center gap-[1em] justify-center mt-[16px]">
                  <p className="text-[#45595B] font-semibold text-[20px] font-sans">
                    {item.kilo}
                  </p>
                  <div className="flex h-[38px] border  hover:bg-[#ffb524] hover:text-white border-[#FFB524] text-[#81C408] w-[140px] rounded-full mt-[10px] items-center justify-center gap-[0.5em]">
                    <span className="text-[#81C408]">
                      <FaShoppingBag />
                    </span>
                    <p className="font-semibold">Add to cart</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cartsshop;
