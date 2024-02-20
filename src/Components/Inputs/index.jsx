import React from "react";
import Imgs from "../../Assets/vegetable-item-2.jpg";
import Imgs2 from "../../Assets/vegetable-item-5.jpg";
import Imgs3 from "../../Assets/vegetable-item-3.png";

function Inputs() {
  return (
    <div className="py-[100px]">
      <div className="lg:flex block w-[89%] gap-[40px]  m-auto">
        <div className=" lg:w-[60%] w-[100%]">
          <div className="lg:flex block gap-[30px]">
            <div className="w-full">
              <p className="text-[#747d88] font-medium">First Name*</p>
              <input
                className="border mt-6 inp rounded-xl w-full p-2"
                type="text"
              />
            </div>
            <div className="w-full mt-6 lg:mt-0 ">
              <p className="text-[#747d88] font-medium">Last Name*</p>
              <input
                className="border w-full mt-6 inp rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Company Name*</p>
              <input
                className="border w-full inp mt-6 rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Address *</p>
              <input
                placeholder="House Number Street Name "
                className="border w-full inp mt-6 rounded-xl px-5 font-medium p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Town/City*</p>
              <input
                className="border w-full inp  mt-6 rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Country*</p>
              <input
                className="border w-full inp mt-6 rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Postcode/Zip*</p>
              <input
                className="border w-full inp mt-6 rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Mobile*</p>
              <input
                className="border w-full inp outline-0 mt-6 rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full mt-6 lg:mt-6 ">
              <p className="text-[#747d88]  font-medium">Email Address*</p>
              <input
                className="border w-full mt-6 inp rounded-xl p-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center mt-6">
            <input
              className="w-[18px] h-[18px]"
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-[#747d88] font-medium">Create an account?</p>
          </div>
          <hr className="mt-6" />
          <div className="flex gap-5 items-center mt-6">
            <input
              className="w-[18px] h-[18px]"
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-[#747d88] font-medium">
              Ship to a different address?
            </p>
          </div>
          <div>
            <textarea
              className=" mt-6 border inp w-full rounded-xl px-4 py-3"
              placeholder="Oreder Notes (Optional)"
              name="postContent"
              rows={12}
              cols={80}
            />
          </div>
        </div>
        <div className="lg:w-[40%] m-auto w-full mt-16 lg:mt-0 ">
          <div className="flex justify-between mx-4">
            <div className="flex text-[16px] md:gap-[30px] gap-2 text-[#747d88] font-medium">
              <p>Products</p>
              <p>Name</p>
            </div>
            <div className="flex md:gap-[30px] gap-2 text-[16px] text-[#747d88] font-medium">
              <p>Price</p>
              <p>Quantity</p>
              <p>Total </p>
            </div>
          </div>
          <hr
            style={{
              color: "black",
              backgroundColor: "black",
              borderColor: "black",
            }}
            className="mt-3"
          />
          <div className="grid items-center mt-6 grid-cols-4 w-full ">
            <div className="w-[80%]">
              <img className="rounded-[360px]" src={Imgs} alt="" />
            </div>
            <div className="w-full md:text-right text-left flex items-center text-[#747d88] font-medium">
              <p>Awesome Brocoli </p>
            </div>
            <div className="w-full  text-center items-center text-[#747d88] font-medium">
              <p> $69.00 2</p>
            </div>
            <div className="w-full  text-right  text-[#747d88] font-medium">
              <p> $138.00</p>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="grid items-center mt-6 grid-cols-4 w-full ">
            <div className="w-[80%]">
              <img className="rounded-[360px]" src={Imgs2} alt="" />
            </div>
            <div className="w-full md:text-right text-left flex items-center text-[#747d88] font-medium">
              <p>Potatoes</p>
            </div>
            <div className="w-full  text-center items-center text-[#747d88] font-medium">
              <p> $69.00 2</p>
            </div>
            <div className="w-full  text-right  text-[#747d88] font-medium">
              <p> $138.00</p>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="grid items-center mt-6 grid-cols-4 w-full ">
            <div className="w-[80%]">
              <img className="rounded-[360px]" src={Imgs3} alt="" />
            </div>
            <div className="w-full  md:text-right text-left flex items-center text-[#747d88] font-medium">
              <p> Big Banana </p>
            </div>
            <div className="w-full  text-center items-center text-[#747d88] font-medium">
              <p> $69.00 2</p>
            </div>
            <div className="w-full  text-right  text-[#747d88] font-medium">
              <p> $138.00</p>
            </div>
          </div>
          <hr className="mt-6" />
          <div className="flex justify-end mt-[50px]">
            <div className="flex gap-10 items-center">
              <div>
                <p className="text-[#747d88]"> Subtotal</p>
              </div>
              <div className="border text-[#747d88] py-4 border-l-0 border-r-0">
                <p>$414.00</p>
              </div>
            </div>
          </div>
          <hr className="mt-[50px]" />
          <div className="flex justify-end mt-[50px]">
            <div className="flex md:gap-[200px] lg:gap-[100px] xl:gap-[200px] gap-10 items-center">
              <div>
                <p className="text-[#747d88]">Shipping </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <input
                    className="w-[18px]  h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />

                  <p className="text-[#747d88] font-medium">Free Shipping</p>
                </div>{" "}
                <div className="flex items-center mt-3 gap-3">
                  <input
                    className="w-[18px]  h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />

                  <p className="text-[#747d88] font-medium">
                    Flat rate: $15.00
                  </p>
                </div>{" "}
                <div className="flex items-center mt-3 gap-3">
                  <input
                    className="w-[18px]  h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />

                  <p className="text-[#747d88] font-medium">
                    Local Pickup: $8.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-[50px]" />
          <div className="flex justify-end mt-[50px]">
            <div className="flex md:gap-[300px] lg:gap-[200px] xl:gap-[300px] gap-[100px] items-center">
              <div>
                <p className="text-[#747d88]"> TOTAL</p>
              </div>
              <div className="border text-[#747d88] py-4 border-l-0 border-r-0">
                <p>$135.00</p>
              </div>
            </div>
          </div>
          <hr className="mt-[50px]" />
          <div className="mt-[50px]">
            <div className="flex items-center gap-3">
              <input
                className="w-[18px]  h-[18px]"
                type="checkbox"
                name=""
                id=""
              />

              <p className="text-[#747d88] font-medium">Direct Bank Transfer</p>
            </div>
            <p className="mt-5">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <hr className="mt-[30px]" />
          <div className="mt-[30px]">
            <div className="flex items-center gap-3">
              <input
                className="w-[18px]  h-[18px]"
                type="checkbox"
                name=""
                id=""
              />

              <p className="text-[#747d88] font-medium">Check Payments</p>
            </div>
          </div>
          <hr className="mt-[30px]" />
          <div className="mt-[30px]">
            <div className="flex items-center gap-3">
              <input
                className="w-[18px]  h-[18px]"
                type="checkbox"
                name=""
                id=""
              />

              <p className="text-[#747d88] font-medium">Cash On Delivery</p>
            </div>
          </div>
          <hr className="mt-[30px]" />
          <div className="mt-[30px]">
            <div className="flex items-center gap-3">
              <input
                className="w-[18px]  h-[18px]"
                type="checkbox"
                name=""
                id=""
              />

              <p className="text-[#747d88] font-medium">Paypal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
