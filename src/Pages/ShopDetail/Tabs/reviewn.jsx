import React from "react";
import Rasm from "../../../Assets/avatar.jpg";
function Reviews() {
  return (
    <div className=" text-start ">
      <div className="flex items-center gap-7">
        <p>
          <img className="w-[90px] h-[60px]" src={Rasm} alt="" />
        </p>
        <div>
          <p className="text-[#747d88]">April 12, 2024</p>
          <p className="text-[20px] font-medium ">Jason Smith</p>
          <p className="mt-4 text-[14px] text-[#747d88] ">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc. Susp endisse
            ultricies nisi vel quam suscipit
          </p>
        </div>
      </div>
      <br />
      <div className="flex items-center gap-7">
        <p>
          <img className="w-[90px] h-[60px]" src={Rasm} alt="" />
        </p>
        <div>
          <p className="text-[#747d88]">April 12, 2024</p>
          <p className="text-[20px] font-medium ">Sam Peters</p>
          <p className="mt-4 text-[14px] text-[#747d88]">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc. Susp endisse
            ultricies nisi vel quam suscipit
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Reviews;
