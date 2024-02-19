import { TiStarFullOutline } from "react-icons/ti";
import { useState } from "react";
import React from "react";
import Rasm from "../../Assets/single-item.jpg";
function ShopDetail() {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div className="">
      <div
        style={{ justifyItems: "center" }}
        className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 object-cover my-24 justify-items-center mx-36"
      >
        <div className="border ">
          <img className="w-full" src={Rasm} alt="" />
        </div>
        <div className="text-start">
          <p className="text-[24px] font-bold text-[#45595B]">Brocoli</p>
          <p className="text-[#747d88] text-[16px]">Category: Vegetables</p>
          <p className="text-[20px] text-[#45595b] font-bold">3,35 $</p>
          <div class="flex mb-4">
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#ffb524" size={20} />
            <TiStarFullOutline color="#747d88" size={20} />
          </div>
          <p className="text-[16px]">
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <br />
          <p>
            Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock
            flounder; chain pickerel hatchetfish, pencilfish snailfish
          </p>
          <div className="flex">
            <button onClick={() => handleClick1}>-</button>
            <p>{counter}</p>
            <button onClick={() => handleClick2}>+</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ShopDetail;
