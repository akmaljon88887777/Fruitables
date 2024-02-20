import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import React from "react";

const FeauturedCarts = ({ img, title }) => {
  return (
    <div className="flex gap-10">
      <img className="w-[100px]" src={img} alt="" />
      <div>
        <p className="font-semibold"> {title}</p>
        <p className="flex gap-0">
          <AiFillStar color="#ffb524" size={22} />
          <AiFillStar color="#ffb524" size={22} />
          <AiFillStar color="#ffb524" size={22} />
          <AiFillStar color="#ffb524" size={22} />
          <AiFillStar color="#747d88" size={22} />
        </p>
        <p className="text-[20px] font-extrabold">
          2.99 $<del className="font-medium pl-2 text-[#dc3545]">4.11 $</del>
        </p>
      </div>
    </div>
  );
};

export default FeauturedCarts;
