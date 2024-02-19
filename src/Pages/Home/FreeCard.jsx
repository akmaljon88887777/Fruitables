import React from "react";
import "./style.css";
// import FaX from "react-icons";
import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const FreeCard = () => {
  const data = [
    {
      icon: <FaCarSide />,
      title: "Free Shipping",
      text: "Free on order over $300",
    },
    {
      icon: <FaUserShield />,
      title: "Security Payment",
      text: "F100% security payment",
    },
    {
      icon: <FaExchangeAlt />,
      title: "30 Day Return",
      text: "30 day money guarantee ",
    },
    {
      icon: <FaPhoneAlt />,
      title: "24/7 Support",
      text: "Support every time fast",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-[2em] max-[990px]:grid max-[990px]:w-[710px] max-[600px]:w-[88%] max-[770px]:w-[530px]  max-[990px]:grid-cols-2  max-[770px]:grid-cols-1   mt-[130px] justify-center items-center text-center">
        {data.map((item, index) => {
          return (
            <div className="bg-[#F4F6F8] px-[3%] py-[35px] flex flex-col max-[990px]:w-[100%] max-[1210px]:w-[230px] max-[1700px]:w-[280px] max-[990px]:py-[20px] xl:w-[300px] items-center justify-center text-center rounded-lg ">
              <div className="bg-[#FFB524] xl:p-[16%]  max-[990px]:p-[11.7%] max-[330px]:p-[12.5%] max-[770px]:p-[9%] max-[460px]:p-[10%] max-[400px]:p-[11%] lg:p-[23%] flex items-center justify-center text-center rounded-[50%]">
                <p className="text-[2.8em] lg:text-[3.4em] text-white">{item.icon}</p>
              </div>
              <div className="free__icon_contaoner max-[1300px]:ml-[40.2%]  "></div>
              <div className="mt-[65px] max-[990px]:mt-[60px] max-[770px]:mt-[50px] xl:mt-[30px]">
                <p className="raleway leading-[1.2] text-[1.25rem] text-[#45595b] font-semibold">
                  {item.title}
                </p>
                <p className="text-[1rem] text-[#747d88] leading-[1.5] font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreeCard;
