import { FaPhoneAlt } from "react-icons/fa"; 
import { BsFillTelephoneFill } from "react-icons/bs"; 
import { GrMail } from "react-icons/gr"; 
import { ImLocation } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import React from "react";
import BannerStyle from "../../Components/Peach/BannerStyle";

function Contact() {
  return (
    <div>
      <BannerStyle title="Contact" />
      <div className="w-[90%] mt-28 pt-20 xl:w-[86%] m-auto font-sans bg-[#f4f6f8] pb-20 text-[#45595b]">
        <div className="text-center grid justify-center m-auto w-full md:w-[90%] lg:w-[70%] xl:w-[54%]">
          <h1 className="text-[40px] font-semibold text-[#81c408]">
            Get in touch
          </h1>
          <p className="text-[16px] text-[#747d88]">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
          </p>
          <a
            className="font-medium mb-10 text-[#81c408]"
            href="https://htmlcodex.com/contact-form"
          >
            Download Now
          </a>
          .
        </div>
        <div className="w-[92%] m-auto">
          <div className="rounded">
            <iframe
              className="w-full md:w-[92%] m-auto rounded-2xl lg:w-full xl:w-full"
              style={{ height: "400px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="w-[90%] xl:w-[92%] mt-12 m-auto grid md:grid lg:flex xl:flex gap-10">
          <div className="w-full grid h-[400px] lg:w-[60%] xl:w-[59%] ">
            <input
              type="text"
              className="outline-[#81c408] text-[#747d88] outline-4 w-full h-[60px] px-6 rounded-[10px]"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="outline-[#81c408] text-[#747d88]  outline-4 w-full h-[60px] px-6 rounded-[10px]"
              placeholder="Enter Your Email"
            />
            <textarea
              type="text"
              className="outline-[#81c408] text-[#747d88] outline-4 w-full h-[120px] p-2 px-6 rounded-[10px]"
              placeholder="Your Message"
            />
            <a href="#" className="border hover:bg-[#ffb524] flex items-center justify-center hover:text-white h-[60px] bg-white font-semibold border-[#FFB524] text-[#81C408] w-full rounded-[10px] mt-[10px]">
              Submit
            </a>
          </div>
          <div className="w-full font-[Raleway] grid gap-10 lg:w-[50%] xl:w-[41%]">
            <div className="flex w-full h-[120px] gap-8 px-6 p-10 bg-white">
              <p>
                <ImLocation size={37} color="#81C408" />
              </p>
              <div className="grid">
                <p className="text-[24px] font-medium"> Address</p>
                <p className="text-[16.6px] font-sans text-[#747d88]">123 Street New York.USA</p>
              </div>
            </div>
            <div className="flex w-full h-[120px] gap-8 px-8 p-10 bg-white">
              <p>
                <GrMail size={37} color="#81C408" />
              </p>
              <div className="grid">
                <p className="text-[24px] font-medium"> Mail Us</p>
                <p className="text-[16.6px] font-sans text-[#747d88]"> info@example.com</p>
              </div>
            </div>
            <div className="flex w-full items-start h-[120px] gap-8 px-10 p-10 bg-white">
              <p>
                <FaPhoneAlt size={30} color="#81C408" />
              </p>
              <div className="grid">
                <p className="text-[24px] font-medium pb-2"> Telephone</p>
                <p className="text-[16.6px] font-sans text-[#747d88]"> (+012) 3456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
