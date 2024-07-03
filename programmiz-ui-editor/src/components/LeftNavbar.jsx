import React from "react";
import mode from "../assets/mode.svg";
import image from "../assets/image.svg";
const LeftNavbar = () => {
  return (
    <div className="flex items-center w-[50vw] justify-evenly border-r-2 border-black ">
      <div>
        <button className="p-3 mt-1">main.js</button>
      </div>

      <div className="flex items-center gap-x-10">
        <button className="p-2">
          <img src={image} alt="image1" />
        </button>
        <button className="p-2">
          <img src={mode} alt="mode-image" />
        </button>
        <button className="px-3 py-2 bg-blue-500 text-white">Run</button>
      </div>
    </div>
  );
};

export default LeftNavbar;
