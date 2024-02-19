import { AiOutlineWarning } from "react-icons/ai";

import React from "react";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate2 = useNavigate(false);

  const handleNext2 = () => {
    navigate2("/");
  };
  return (
    <div>
      <div>
        <div className="flex justify-center mt-[100px]">
          <AiOutlineWarning size={"90px"} color="#FFB524" />
        </div>
        <div>
          <p className="text-[75px] font-extrabold text-[#45595B]">404</p>
        </div>
        <div>
          <p className="text-[39px] font-semibold text-[#45595B]">
            Page Not Found
          </p>
        </div>
        <div className="text-[16px] mt-7 text-[#45595B]">
          <p>
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to <br /> our home page or try to use a search?
          </p>
        </div>
        <div>
          <button
            onClick={() => handleNext2()}
            style={{ transition: "all .3s" }}
            className="font-semibold border text-[#747d88] p-6 px-[50px] border-[#FFB524] hover:bg-[#FFB524] hover:text-white mt-12 rounded-[50rem]"
          >
            Go Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
