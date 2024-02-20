import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import img1 from "../../Assets/best-product-1.jpg";
import img2 from "../../Assets/best-product-2.jpg";
import img3 from "../../Assets/best-product-3.jpg";
import img4 from "../../Assets/best-product-4.jpg";
import img5 from "../../Assets/best-product-5.jpg";
import img6 from "../../Assets/best-product-6.jpg";
import secondimg1 from "../../Assets/fruite-item-1.jpg";
import secondimg2 from "../../Assets/fruite-item-2.jpg";
import secondimg3 from "../../Assets/fruite-item-3.jpg";
import secondimg4 from "../../Assets/fruite-item-4.jpg";

const Product = () => {
  const ProductData = [
    {
      img: img1,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: img2,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: img3,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: img4,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: img5,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: img6,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
  ];
  const ProductData2 = [
    {
      img: secondimg1,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: secondimg2,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: secondimg3,
      title: "Organic Tomato",
      star: <FaStar size={19} />,
      sum: "3.12 $",
    },
    {
      img: secondimg4,
      title: "Organic Tomato",
      star: <FaStar />,
      sum: "3.12 $",
    },
  ];
  return (
    <div className="mt-[130px]">
      <div className="text-center">
        <p className="raleway text-[56px] max-sm:text-[2.2em] max-sm:leading-[1.3] font-extrabold text-[#45595b]">
          Bestseller Products
        </p>
        <div className="flex items-center text-[1.07em] leading-[1.5] text-[#45595b] max-sm:px-[10%] px-[27%]">
          <p>
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-[60px] items-center max-sm:px-[8%] flex-wrap gap-[1.7em]">
        {ProductData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-[1em] rounded-lg bg-[#F4F6F8] w-[415px] py-[1.5em] items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <img className="w-[171px] rounded-full" src={item.img} alt="" />
              </div>
              <div className="flex flex-col text-[]">
                <p className="raleway font-semibold leading-[1.2] text-center text-[#45595b] text-[20px]">
                  {item.title}
                </p>
                <div className="flex mt-[15px] items-center justify-start">
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#677676]">{item.star}</p>
                </div>
                <p className="raleway mt-[10px] text-start font-semibold leading-[1.2] text-[#45595b] text-[24px]">
                  {item.sum}
                </p>
                <div className="flex h-[38px] border  hover:bg-[#ffb524] hover:text-white border-[#FFB524] text-[#81C408] w-[140px] rounded-3xl mt-[10px] items-center justify-center gap-[0.5em]">
                  <span className="text-[#81C408] ">
                    <FaShoppingBag />
                  </span>
                  <p className="font-medium">Add to cart</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center  items-center max-sm:gap-y-[0.3em] flex-wrap  gap-[1.7em]">
        {ProductData2.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-[1em] rounded-lg  py-[1.5em] items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <img
                  className="xl:w-[305px] lg:w-[415px] max-sm:w-[280px] rounded-lg"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <p className="raleway font-semibold leading-[1.2] text-[#45595b] text-[20px]">
                  {item.title}
                </p>
                <div className="flex mt-[15px] items-center justify-center">
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#81C408]">{item.star}</p>
                  <p className="text-[1.18rem] text-[#677676]">{item.star}</p>
                </div>
                <p className="raleway mt-[15px] text-center font-semibold leading-[1.2] text-[#45595b] text-[24px]">
                  {item.sum}
                </p>
                <div className="flex h-[38px] border  hover:bg-[#ffb524] hover:text-white border-[#FFB524] text-[#81C408] w-[140px] rounded-3xl mt-[10px] items-center justify-center gap-[0.5em]">
                  <span className="text-[#81C408] ">
                    <FaShoppingBag />
                  </span>
                  <p className="font-medium">Add to cart</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
