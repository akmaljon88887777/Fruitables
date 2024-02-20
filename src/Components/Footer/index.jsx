import React from "react";
import imges from "../../Assets/payment.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiCopyrightFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#45595B] flex flex-col h-[100%] xl:h-[81vh] pb-[2em] overflow-hidden">
      <div className="grid items-center lg:flex xl:gap-[2em]  gap-[1.5em] mt-[6em] justify-center lg:px-0 px-[4.1%]">
        <div>
          <p className="raleway text-[#81C408] leading-[1.2] xl:text-[2.3em] font-semibold  text-[1.7em]">
            Fruitables
          </p>
          <p className="text-[#FFB524] tracking-wide text-[1.05em] xl:text-[1.1em] leading-[1.5]">
            Fresh products
          </p>
        </div>
        <div className="bg-[#FFFFFF] w-[280px] pl-[25px] lg:mx-[5%] rounded-[30px] md:w-[700px] md:justify-between h-[56px] flex items-center justify-center">
          <input
            className="outline-none w-[90px] placeholder:text-[#6C757D]"
            placeholder="Your Email"
            type="text"
            name=""
            id=""
          />
          <button className="bg-[#81C408] text-white hover:bg-[#FFB524] texct-[1.2em]  font-semibold rounded-[25px] px-[28px] flex items-center justify-center h-[56px] border-none">
            Subscribe Now
          </button>
        </div>
        <div className="flex items-center mt-[10px] justify-end gap-[0.5em]">
          <p className="text-[1.01em] w-[45px] h-[45px] flex items-center hover:text-[black] hover:bg-[#ffb524] justify-center text-[#ffb524] rounded-full border border-[#FFB524]">
            <FaTwitter />
          </p>
          <p className="text-[1.01em] w-[45px] h-[45px] flex items-center hover:text-[black] hover:bg-[#ffb524] justify-center text-[#ffb524] rounded-full border border-[#FFB524]">
            <FaFacebookF />
          </p>
          <p className="text-[1.03em] w-[45px] h-[45px] flex items-center hover:text-[black] hover:bg-[#ffb524] justify-center text-[#ffb524] rounded-full border border-[#FFB524]">
            <FaYoutube />
          </p>
          <p className="text-[1.03em] w-[45px] h-[45px] flex items-center hover:text-[black] hover:bg-[#ffb524] justify-center text-[#ffb524] rounded-full border border-[#FFB524]">
            <FaLinkedinIn />
          </p>
        </div>
      </div>
      {/*hrr */}
      <div className="flex items-center justify-center">
        <p className="h-[0.1px] mt-[29px] w-[88%] 2xl:w-[84.8%] md:w-[93%] bg-[#ffb524] ">
          <span className="opacity-0">p</span>
        </p>
      </div>
      {/* 2bolim */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:px-[4%] 2xl:px-[8%] items-start pl-[1.2em] md:pl-[1.9em] justify-center mt-[24px]">
        {/* 1card */}
        <div className="text-[white]">
          <p className="raleway text-[white] font-semibold lg:pr-[12%] text-[1.5em]">
            Why People Like us!
          </p>
          <p className="text-[#A2ACAD] mt-[10px] text-[1.03em] tracking-wide w-[100%] pl-[1%] lg:pr-[12%] leading-[2.2] pr-[9%]">
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
          </p>
          <p className="flex mt-[20px] justify-center text-[1.1em] items-center h-[42px] hover:bg-[#ffb524] hover:text-[white] rounded-3xl border text-[#81C408] border-[#ffb524] w-[135px]">
            Read More
          </p>
        </div>
        {/* 2card */}
        <div className="md:ml-[5%]">
          <p className="raleway text-[white] mt-[40px] md:mt-[7px] lg:mt-0  font-semibold text-[1.4em]">
            Shop Info
          </p>

          <p className="text-[#A2ACAD]  leading-[2] text-[1.03em] mt-[15px]">
            About Us
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">Contact Us</p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            Privacy Policy
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            Terms & Condition
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            Return Policy
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            FAQs & Help
          </p>
        </div>
        {/* 3card */}
        <div>
          <p className="raleway text-[white] mt-[40px] lg:mt-0 font-semibold text-[1.4em]">
            Account
          </p>

          <p className="text-[#A2ACAD] leading-[2] mt-[15px] text-[1.03em]">
            My Account
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            Shop details
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            Shopping Cart
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">Wishlist</p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            Order History
          </p>
          <p className="text-[#A2ACAD] leading-[2] text-[1.03em]">
            International Orders
          </p>
        </div>
        {/* 4card */}
        <div>
          <p className="raleway text-[white] mt-[40px] lg:mt-0 font-semibold text-[1.4em]">
            Contact
          </p>
          <p className="text-[#A2ACAD] leading-[2.3] mt-[10px] text-[1.03em]">
            Address: 1429 Netus Rd, NY 48247
          </p>
          <p className="text-[#A2ACAD] leading-[2.3] text-[1.03em]">
            Email: Example@gmail.com
          </p>
          <p className="text-[#A2ACAD] leading-[2.3] text-[1.03em]">
            Phone: +0123 4567 8910
          </p>
          <p className="text-[#A2ACAD] leading-[2.3] text-[1.03em]"></p>
          <p className="text-[#A2ACAD] leading-[2.3] text-[1.03em]">
            Payment Accepted
          </p>
          <img
            className="mt-[10px] lg:w-[200px] xl:w-[250px]"
            src={imges}
            alt=""
          />
        </div>
      </div>
      {/* 3bolim */}
      <div className="grid md:grid-cols-2 lg:flex md:justify-between 2xl:px-[8%]  lg:pr-[5%] lg:pl-[3%] items-center text-center mt-[78px] justify-center">
        <div className="flex items-start mx-[14%] md:ml-[-5%] lg:ml-0 justify-center">
          <span
            className=" font-semibold 
           text-[1.1em] mt-[6px] ml-[6px] text-center text-[#fff] rounded-full"
          >
            <RiCopyrightFill />
          </span>
          <span className="text-[white]  text-[1.05em] ">
            <span className="text-[#81C408] ">Your Site Name</span>, All right
            reserved.
          </span>
        </div>
        <p className="text-white md:text-end text-[1.03em] mt-[15px] lg:mx-0 mx-[10%] ">
          Designed By{" "}
          <span className="text-white  underline underline-offset-8">
            <span className="text-[#81C408] ">HTML Codex</span>
          </span>{" "}
          Distributed By{" "}
          <span className="text-white underline underline-offset-8">
            <span className="text-[#81C408]">ThemeWagon</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
