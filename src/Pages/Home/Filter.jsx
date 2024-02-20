import React, { useState } from "react";
import img1 from "../../Assets/fruite-item-5.jpg";
import img2 from "../../Assets/fruite-item-4.jpg";
import img3 from "../../Assets/fruite-item-3.jpg";
import img4 from "../../Assets/fruite-item-2.jpg";
import img5 from "../../Assets/fruite-item-1.jpg";
import img6 from "../../Assets/fruite-item-6.jpg";
import { FaShoppingBag } from "react-icons/fa";
import "./style.css";
const Filter = () => {
  const all = [
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
      title: "Raspberries",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img2,
      fruits: "Fruits",
      title: "Apricots",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img3,
      fruits: "Fruits",
      title: "Banana",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img5,
      fruits: "Fruits",
      title: "Oranges",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img4,
      fruits: "Fruits",
      title: "Raspberries",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Grapes",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
  ];
  const vegetables = [
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
  ];
  const fruits = [
    {
      img: img5,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img6,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
  ];
  const breads = [
    {
      img: img1,
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
  ];
  const meat = [
    {
      img: img3,
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
      img: img5,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
  ];

  const [data, setData] = useState(all);
  const [active, setActive] = useState("all");
  const handleAll = () => {
    setData(all);
    setActive("all");
  };
  const handleVegetables = () => {
    setData(vegetables);
    setActive("vegetables");
  };
  const handleFruits = () => {
    setData(fruits);
    setActive("fruits");
  };

  const handleBreads = () => {
    setData(breads);
    setActive("breads");
  };
  const handleMeat = () => {
    setData(meat);
    setActive("meat");
  };

  return (
    <div className="px-[0%] max-lg:ml-[4%] md:ml-0 max-md:ml-0 relative z-10 xl:mx-16">
      <div className="flex items-center max-lg:grid max-lg:gap-[2em] max-md:px-[15%] justify-between max-xl:gap-0 max-xl:px-0 lg:px-[6%] mt-[180px]">
        <p className="text-[40px] text-start md:ml-24 font-semibold leading-[1.2] text-[#45595b]">
          Our Organic Products
        </p>
        <div className="grid grid-cols-1 text-center md:ml-24 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 items-center  lg:justify-start xl:justify-center gap-[1em]">
          <button
            onClick={() => {
              handleAll();
            }}
            className={`w-[130px] rounded-full flex items-center text-[16px] justify-center py-[8px] ${
              active === "all"
                ? "bg-[#FFB524] text-white"
                : "bg-[#F4F6F8] text-[#45595b]"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => {
              handleVegetables();
            }}
            className={`w-[130px] rounded-full flex items-center text-[16px] justify-center py-[8px] ${
              active === "vegetables"
                ? "bg-[#FFB524] text-white"
                : "bg-[#F4F6F8] text-[#45595b]"
            }`}
          >
            Vegetables
          </button>
          <button
            onClick={() => {
              handleFruits();
            }}
            className={`w-[130px] rounded-full flex items-center text-[16px] justify-center py-[8px] ${
              active === "fruits"
                ? "bg-[#FFB524] text-white"
                : "bg-[#F4F6F8] text-[#45595b]"
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => {
              handleBreads();
            }}
            className={`w-[130px] rounded-full flex items-center text-[16px] justify-center py-[8px] ${
              active === "breads"
                ? "bg-[#FFB524] text-white"
                : "bg-[#F4F6F8] text-[#45595b]"
            }`}
          >
            Bread
          </button>
          <button
            onClick={() => {
              handleMeat();
            }}
            className={`w-[130px] rounded-full flex items-center text-[16px] justify-center py-[8px] ${
              active === "meat"
                ? "bg-[#FFB524] text-white"
                : "bg-[#F4F6F8] text-[#45595b]"
            }`}
          >
            Meat
          </button>
        </div>
      </div>
      <div className="xl:flex 2xl:justify-start flex-wrap max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col lg:grid lg:grid-cols-3 justify-center max-lg:gap-x-0 max-lg:mx-[7%] max-md:mx-auto lg:gap-x-0 lg:mx-[5%] xl:gap-x-[2em] mt-[50px] gap-y-[2em]  items-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex border shadoww border-[#FFB524] rounded-lg pb-[1.45em] max-sm:w-[80%] xl:w-[23%] lg:w-[95%] max-lg:w-[90%] max-md:w-[69%]  flex-col items-center justify-center"
            >
              <div>
                <div className="flex overflow-hidden items-center justify-center">
                  <img
                    className="rounded-t-lg duration-700 cardimg"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <p className="mb-[200px] fruit -mt-[52%] md:-mt-[85%] lg:-mt-[63%]  xl:mt-[-200px] ml-[10px] z-[9999999] rounded-[10px] absolute px-[20px] w-[75px] py-[4px] bg-[#FFB524] text-white">
                  Fruits
                </p>
              </div>
              <div>
                <p className="raleway leading-[1.2] mt-[25px] text-center text-[24px] text-[#45595b] font-semibold ">
                  {item.title}
                </p>
                <p className="text-[16px] m-auto w-[90%] text-[#747d88] text-center mt-[5px] leading-[1.5] font-normal">
                  {item.text}
                </p>
                <div className="flex items-center gap-[1em] justify-center mt-[16px]">
                  <p className="text-[#45595B] font-semibold text-[20px]">
                    {item.kilo}
                  </p>
                  <div className="flex h-[38px] border  hover:bg-[#ffb524] hover:text-white border-[#FFB524] text-[#81C408] w-[140px] rounded-3xl mt-[10px] items-center justify-center gap-[0.5em]">
                    <span className="text-[#81C408] ">
                      <FaShoppingBag />
                    </span>
                    <p className="font-medium">Add to cart</p>
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

export default Filter;
