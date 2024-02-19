import React from "react";
import img1 from '../../Assets/featur-1.jpg'
import img2 from '../../Assets/featur-2.jpg'
import img3 from '../../Assets/featur-3.jpg'

const FreshCard = () => {
  const freshData = [
    {
      img:img1,
      title:'Fresh Apples',
      text:'20% OFF'
    },
    {
        img:img2,
        title:'Tasty Fruits',
        text:'Free delivery'
      },
      {
        img:img3,
        title:'Exotic Vegitable',
        text:'Discount 30$'
      },
  ];
  return <div className="flex gap-[1.6em] mt-[180px] items-center max-lg:gap-y-[2em] max-lg:flex-wrap max-md:grid md:flex-wrap max-lg:px-[8%] justify-center">
    {freshData.map((item,index)=>{
        return(
            <div key={index} className="flex border rounded-xl border-green-700 xl:w-[400px] lg:w-[287px] max-sm:w-[97%] max-lg:w-[350px] max-md:w-[490px] sm:w-[0%] md:w-[390px] 2xl:w-[420px] max-xl:w-[380px] flex-col items-center justify-center">
                <img className="w-[100%] rounded-t-xl" src={item.img} alt="" />
                <div className="absolute flex flex-col items-center justify-center bg-green-950 rounded-xl w-[17%]  h-[18%] mt-[200px]">
                    <p className="raleway font-medium leading-[1.6] text-[1.25em]">{item.title}</p>
                    <p className="raleway font-medium leading-[1.6] text-[1.6em]">{item.text}</p>
                </div>
                <div className="grid w-full rounded-b-xl justify-center h-[120px] bg-red-700 items-center ">
                </div>
            </div>
        )
    })}
  </div>;
};

export default FreshCard;
