import React from "react";
import mac from "../images/mac.png";

const Organise = () => {
  return (
    <div className="max-w-[1243px] mx-auto flex mt-[200px] lg:max-w-[680px] lg:flex-col-reverse lg:items-center xl2:max-w-[1100px] ">
      <div className="w-[50%] lg:w-[80%] lg:text-center">
        <h2 className="max-w-[335px] mb-[27px] lg:mx-auto lg:mt-[70px] lg:mb-[10px]">
          Fastest way to organize
        </h2>
        <p className="tag-line max-w-[532px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <button className="btn w-[236px] h-[60px] rounded-[35px] mt-[70px] lg:mt-[40px]">
          <h3 className="text-[#ffffff]">Try For Free</h3>
        </button>
      </div>
      <div className="w-[50%] lg:w-[80%]">
        <img src={mac} alt="" />
      </div>
    </div>
  );
};

export default Organise;
