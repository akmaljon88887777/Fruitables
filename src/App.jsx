import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";
import "./App.css";
import Root from "./Root";

function App() {
  return (
    <div className="App">
      <div>
        <Root />
      </div>
      <div className=" right-11 z-[999]  bottom-11 fixed">
        <a className=" " href="#">
          <button className="w-[45px] outline-[green] outline-4  h-[45px] rounded-full flex justify-center items-center bg-[#81C408]">
            <AiOutlineArrowUp size={"20px"} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
