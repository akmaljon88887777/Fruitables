import React from "react";
import { FaUsers } from "react-icons/fa";

const GroupCard = () => {
  const groupData = [
    {
      icon: <FaUsers />,
      title: "SATISFIED CUSTOMERS",
      num: "1963",
    },
    {
      icon: <FaUsers />,
      title: "QUALITY OF SERVICE",
      num: "99%",
    },
    {
      icon: <FaUsers />,
      title: "QUALITY CERTIFICATES",
      num: "33",
    },
    {
      icon: <FaUsers />,
      title: "AVAILABLE PRODUCTS",
      num: "789",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#F3F5F8] mx-[8%] xl:w-[1390px]  max-lg:mx-0 flex justify-center rounded-xl max-lg:py-[3em] mt-[150px] py-[4em]  max-lg:pr-[5%] max-md:mx-0 max-md:w-[500px] lg:w-[1000px] max-sm:w-[90%] ">
        <div className="flex xl:gap-[1.6em] max-md:grid-cols-1 max-xl:grid max-xl:grid-cols-2 lg:gap-[2em] lg:gap-x-[1em] max-lg:gap-[3em] max-lg:mx-[6%] lg:mx-0 mx-[8%] max-sm:mx-0 rounded-lg justify-center items-center">
          {groupData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-[1em]  pt-[2.5em] pb-[3em] rounded-xl xl:px-[2.2em] max-md:w-[420px] max-xl:w-[390px] lg:w-[380px] max-sm:w-[290px] max-lg:w-[276px]  xl:w-[22%] bg-white flex-col items-center justify-center"
              >
                <p className="text-[4.5em] text-[#FFB524] leading-[1.2] mt-[9px]">
                  {item.icon}
                </p>
                <p className="raleway font-semibold text-[#81C408] text-[1.5em] max-lg:mx-[6%] leading-[1.2]">
                  {item.title}
                </p>
                <p className="raleway text-[2.5em] leading-[1] text-[#39494B] mt-[-3px] font-semibold">
                  {item.num}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
