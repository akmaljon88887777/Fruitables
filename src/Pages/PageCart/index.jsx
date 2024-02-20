import React, { useState } from "react";
import Img from "../../Assets/vegetable-item-3.png";

function PageCart() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>
        <div class="container-fluid py-5 mt-[100px] w-full m-auto">
          <div class="container py-5 w-full m-auto">
            <div className="table-responsive overflow-x-auto w-full m-auto">
              <table className="table md:w-[100%] xl:w-[76%] w-[210%] m-auto mt-12">
                <thead className="m-auto border border-black border-l-0  border-r-0  border-t-0  ">
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody className=" mt-11 overflow-x-auto w-full m-auto">
                  <tr className="border border-l-0  border-r-0  border-t-0 ">
                    <th scope="row ">
                      <div class="d-flex align-items-center">
                        <img
                          src={Img}
                          class="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p class="mb-0 mt-4">Big Banana</p>
                    </td>
                    <td>
                      <p class="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div
                        class="input-group quantity mt-4 flex gap-9"
                        style={{ width: "100px" }}
                      >
                        <div class="input-group-btn">
                          <button
                            onClick={decrease}
                            class="btn btn-sm text-[30px] btn-plus  flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border"
                          >
                            -
                          </button>
                        </div>
                        {counter}
                        <div class="input-group-btn">
                          <button
                            onClick={increase}
                            class="btn btn-sm btn-plus text-[30px] flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-plus text-[20px] flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border">
                        X
                      </button>
                    </td>
                  </tr>
                  <tr className="border border-l-0  border-r-0  border-t-0 ">
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <img
                          src={Img}
                          class="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p class="mb-0 mt-4">Potatoes</p>
                    </td>
                    <td>
                      <p class="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div
                        class="input-group quantity mt-4 flex gap-9"
                        style={{ width: "100px" }}
                      >
                        <div class="input-group-btn">
                          <button
                            onClick={decrease}
                            class="btn btn-sm text-[30px] btn-plus  flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border"
                          >
                            -
                          </button>
                        </div>
                        {counter}
                        <div class="input-group-btn">
                          <button
                            onClick={increase}
                            class="btn btn-sm btn-plus text-[30px] flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-plus text-[20px] flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border">
                        X
                      </button>
                    </td>
                  </tr>
                  <tr className="border border-l-0  border-r-0  border-t-0 ">
                    <th scope="row">
                      <div class="d-flex align-items-center">
                        <img
                          src={Img}
                          class="img-fluid me-5 rounded-circle"
                          style={{ width: "80px", height: "80px" }}
                          alt=""
                        />
                      </div>
                    </th>
                    <td>
                      <p class="mb-0 mt-4">Awesome Brocoli</p>
                    </td>
                    <td>
                      <p class="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <div
                        class="input-group quantity mt-4 flex gap-9"
                        style={{ width: "100px" }}
                      >
                        <div class="input-group-btn">
                          <button
                            onClick={decrease}
                            class="btn btn-sm text-[30px] btn-plus  flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border"
                          >
                            -
                          </button>
                        </div>
                        {counter}
                        <div class="input-group-btn">
                          <button
                            onClick={increase}
                            class="btn btn-sm btn-plus text-[30px] flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="mb-0 mt-4">2.99 $</p>
                    </td>
                    <td>
                      <button class="btn btn-sm btn-plus text-[20px] flex items-center justify-center rounded-circle w-[40px] h-[40px] rounded-[360px] bg-light border">
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-20 md:flex block gap-11 items-center md:w-[76%] w-[90% ] m-auto">
              <input
                type="text"
                class=" border rounded-xl border-t-0 border-l-0 border-r-0 px-3  py-6  mb-4"
                placeholder="Coupon Code"
              />
              <button
                style={{ transition: "all .3s" }}
                class=" rounded-full border  px-11 hover:bg-[#FFB524] hover:text-white border-[#FFB524] text-[#81C408] font-medium py-6 text-primary"
                type="button"
              >
                Apply Coupon
              </button>
            </div>
            <div className="xl:w-[76%] lg:w-[85%] md:w-[90%] w-[100%]  m-auto md:justify-end justify-center flex">
              <div className="bg-[#F4F6F8] p-10  w-[90%] md:w-[50%] lg:w-[40%] rounded-xl">
                <div className="">
                  <p className="text-[40px] text-[#45595B] ">
                    <span className="font-bold">Cart</span>{" "}
                    <span className="font-medium">Total</span>
                  </p>
                </div>
                <div className="flex justify-between mt-8">
                  <div>
                    <p className="text-[#45595B] text-[20px] font-medium">
                      Subtotal:
                    </p>
                  </div>
                  <div>
                    <p className="text-[#45595B]">$96.00</p>
                  </div>
                </div>
                <div className="flex justify-between mt-7 ">
                  <div>
                    <p className="text-[#45595B] text-[20px] font-medium">
                      Shipping
                    </p>
                  </div>
                  <div>
                    <p className="text-[#45595B] text-right">
                      Flat rate: $3.00 <br /> Shipping to Ukraine.
                    </p>
                  </div>
                </div>
                <hr className="mt-8" />
                <div className="flex justify-between mt-8">
                  <div>
                    <p className="text-[#45595B] text-[20px] font-medium">
                      Total:
                    </p>
                  </div>
                  <div>
                    <p className="text-[#45595B]">$96.00</p>
                  </div>
                </div>
                <hr className="mt-8" />
                <button
                  style={{ transition: "all .3s" }}
                  class=" rounded-full border mt-8 px-11 hover:bg-[#FFB524] hover:text-white border-[#FFB524] text-[#81C408] font-medium py-6 text-primary"
                  type="button"
                >
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageCart;
