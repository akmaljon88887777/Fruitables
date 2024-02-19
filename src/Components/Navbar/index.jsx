import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import React from "react";
// import JQuery from "jquery";

import { Link, NavLink } from "react-router-dom";
import "../../App.css";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  // JQuery(function ($) {
  //   var $navbar = $(".navbar");
  //   $(window).scroll(function (event) {
  //     var $current = $(this).scrollTop();
  //     if ($current > 0) {
  //       $navbar.addClass("navbar-color");
  //     } else {
  //       $navbar.removeClass("navbar-color");
  //     }
  //   });
  // });
  return (
    <div className="w-full py-[28px] bg-white shadow-xl sticky">
      <div className="flex justify-around xl:justify-around md:justify-between md:mx-6">
        <div>
          <h4 className="font-bold xl:font-extrabold text-[#81c408] text-4xl">
            Fruitables
          </h4>
        </div>
        <button
          className="h-[37px]  w-[51px] lg:hidden flex items-center px-4 rounded-lg text-[#7C7C7D] border "
          onClick={() => {
            setOpen(!open);
            setMenu(!menu);
          }}
        >
          {menu ? (
            <AiOutlineMenu color="#81c408" fontSize={"30px"} />
          ) : (
            <AiOutlineMenu color="#81c408" fontSize={"30px"} />
          )}
        </button>
        <div className="lg:flex gap-10 hidden text-[16px] font-normal text-[#747d88] items-center md:hidden">
          <Link
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
          >
            Home
          </Link>

          <Link to={"/shop"}>Shop</Link>

          <Link to={"/shopdetail"}>Shop Detail</Link>

          <select
            className="active:border-none border-none focus:border-none w-[15%]"
            name=""
            id=""
          >
            <option value="">Pages</option>
            <option value="">Cart</option>
            <option value="">Checkout</option>
            <option value="">Testimnional</option>
            <option value="">404 Page</option>
          </select>

          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="lg:flex gap-2 md:hidden hidden">
          <div className="w-[44px] h-[44px] border rounded-full flex items-center justify-center border-[#ffb524]">
            <BiSearch size={19} color="#81c408" />
          </div>
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center">
            <FaShoppingBag color="#81c408" size={30} />
          </div>
          <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center">
            <BsFillPersonFill color="#81c408" size={35} />
          </div>
        </div>
        <div
          className={`w-full ${
            open ? "h-[390px]" : "h-0"
          }  overflow-hidden mt-[50px] justify-start text-start bg-[#fff] absolute px-6 duration-300 transition-all flex flex-col  gap-6 `}
        >
          <p
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/"}
          >
            Home
          </p>
          <p
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/about"}
          >
            Shop{" "}
          </p>
          <p
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/clasess"}
          >
            Shop Detail
          </p>
          <p
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/teachers"}
          >
            <select
              className="active:border-none  border-none focus:border-none w-[15%]"
              name=""
              id=""
            >
              <option value="">Pages</option>
              <option value="">Cart</option>
              <option value="">Checkout</option>
              <option value="">Testimnional</option>
              <option value="">404 Page</option>
            </select>
          </p>
          <p
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/gallery"}
          >
            contact
          </p>

          <p
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#17a2b8] font-bold Active"
                : "NoActive"
            }
            to={"/contact"}
          >
            Contact
          </p>
          <div className="hello world">
            <button className="but px-7 p-2">Join Class</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
