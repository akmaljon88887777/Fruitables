import React from "react";
import Inputs from "../../Components/Inputs";
import BannerStyle from "../../Components/Peach/BannerStyle";

function Checkout() {
  return (
    <div>
      <BannerStyle title="Chechout" />
      <div className="mt-28">
        <Inputs />
      </div>
    </div>
  );
}

export default Checkout;
