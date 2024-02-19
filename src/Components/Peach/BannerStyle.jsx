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
      <div className="grid justify-center text-center">
        <p>{title}</p>
        <div className="flex" style={{display:""}}>
          <p> Home</p>
          <p> / Pages</p>
          <p> {title}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerStyle;
