import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import React from "react";

function NavbarTwo() {
  return (
    <div
      style={{
        borderTopLeftRadius: "35px",
        marginTop: "0px",
        borderBottomRightRadius: "35px",
        borderBottomLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
      className="lg:grid grid-cols-2 w-[97.5%] h-[53.13px] bg-[#81c408] md:hidden hidden items-center absolute top-0 text-white"
    >
      <div
        style={{ borderTopLeftRadius: "15px" }}
        className="flex justify-center "
      >
        <div className="flex justify-between w-full">
          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <ImLocation color="#ffb524" /> 123 Street, New York
            </div>
            <div className="flex items-center gap-2">
              <GrMail color="#ffb524" /> Eamil@Example.com
            </div>
          </div>
          <div className="flex gap-2">
            <p>Privacy Policy</p>
            <p>/</p>
            <p>Terms of Use</p>
            <p>/</p>
            <p>Sales and Refunds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarTwo;
