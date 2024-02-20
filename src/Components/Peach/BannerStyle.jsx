import React from "react";
import Image from "../../Assets/cart-page-header-img.jpg";

const BannerStyle = ({ title }) => {
  return (
    <div className="grid items-center"
      style={{
        width: "100%",
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "24vh",
        backgroundSize: "cover",
      }}
    >
      <div className="grid justify-center text-center text-white">
        <p className="text-white text-[40px] font-extrabold">{title}</p>
        <div className="flex text-[#81c408] gap-4">
          <p> Home</p>
          <p> / Pages /</p>
          <p className="text-white"> {title}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerStyle;
