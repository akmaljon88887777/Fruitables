import React, { useState } from "react";
import img1 from "../../Assets/fruite-item-5.jpg";
// import img2 from "../../Assets/fruite-item-4.jpg";
// import img3 from "../../Assets/fruite-item-3.jpg";
// import img4 from "../../Assets/fruite-item-2.jpg";
// import img5 from "../../Assets/fruite-item-1.jpg";
// import img6 from "../../Assets/fruite-item-6.jpg";

const Filter = () => {
  const filterdata = [
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
    {
      img: img1,
      fruits: "Fruits",
      title: "Grapes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      kilo: "$4.99 / kg",
      btn: "Add to cart",
    },
  ];

  const [data, setData] = useState(filterdata);

  const [filterBy, setFilterBy] = useState("show");
  const [active, setActive] = useState("show");

  const handleFilter = (filter) => {
    setFilterBy(filter);
    setActive(filter);
  };

  const resetFilter = () => {
    setFilterBy("show");
    setActive("show");
  };

  const filteredData = data.filter(
    (item) => item.fruits.toLowerCase() === filterBy.toLowerCase()
  );

  return (
    <div className="px-[0%] max-lg:ml-[4%] md:ml-0 max-md:ml-0">
      <div className="flex items-center max-lg:grid max-lg:gap-[2em] max-md:px-[15%] justify-between max-xl:gap-0 max-xl:px-0 lg:px-[6%] mt-[180px]">
        <p className="text-[2.5rem] text-start font-semibold leading-[1.2] text-[#45595b]">Our Organic Products</p>
        <div className="flex flex-wrap items-center lg:justify-start xl:justify-center gap-[1em]">
          <button className="w-[130px] rounded-3xl flex items-center justify-center py-[8px] border border-green-600" onClick={() => handleFilter("All Products")}>All Products</button>
          <button className="w-[130px] rounded-3xl flex items-center justify-center py-[8px] border border-green-600" onClick={() => handleFilter("Vegetables")}>Vegetables</button>
          <button className="w-[130px] rounded-3xl flex items-center justify-center py-[8px] border border-green-600" onClick={() => handleFilter("Fruits")}>Fruits</button>
          <button className="w-[130px] rounded-3xl flex items-center justify-center py-[8px] border border-green-600" onClick={() => handleFilter("Bread")}>Bread</button>
          <button className="w-[130px] rounded-3xl flex items-center justify-center py-[8px] border border-green-600" onClick={() => handleFilter("Meat")}>Meat</button>
        </div>
      </div>
      <div className="xl:flex flex-wrap max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col lg:grid lg:grid-cols-3 justify-center max-lg:gap-x-0 max-lg:mx-[7%] max-md:mx-auto lg:gap-x-0 lg:mx-[5%] xl:gap-x-[2em] mt-[50px] gap-y-[2em]  items-center">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex border border-red-800 rounded-lg pb-[1.45em] max-sm:w-[80%] xl:w-[22.4%] lg:w-[95%] max-lg:w-[90%] max-md:w-[69%]  flex-col items-center justify-center">
              <div>
                <div className="flex  items-center justify-center">
                  <img className="rounded-t-lg" src={item.img} alt={item.title} />
                </div>
                <p className="mb-[200px] mt-[-200px] ml-[10px] z-[9999999] rounded-[10px] absolute px-[20px] w-[75px] py-[4px] bg-[#f277]">Fruits</p>
              </div>
              <div>
                <p className="raleway leading-[1.2] mt-[25px] text-[1.5rem] text-[#45595b] font-semibold ">{item.title}</p>
                <p className="text-[1.1rem] text-[#747d88] mt-[5px] leading-[1.5] font-normal">{item.text}</p>
                <div className="flex items-center gap-[1em] justify-center mt-[16px]">
                  <p className="text-[#45595] font-semibold text-[1.25rem]">{item.kilo}</p>
                  <p className="px-[20px] h-[36px] border  border-red-800 w-[130px] flex items-center justify-center rounded-3xl">{item.btn}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
