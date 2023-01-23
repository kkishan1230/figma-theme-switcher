import React from "react";
import mac from "../images/mac.png";

const Organise = () => {
  return (
    <div className="container-1243 flex mt-[200px]">
      <div className="w-[50%]">
        <h2 className="max-w-[335px] mb-[27px]">Fastest way to organize</h2>
        <p className="tag-line max-w-[532px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
        <button className="btn w-[236px] h-[60px] rounded-[35px] mt-[70px]">
          <h3 className="text-[#ffffff]">Try For Free</h3>
        </button>
      </div>
      <div className="w-[50%]">
        <img src={mac} alt="" />
      </div>
    </div>
  );
};

export default Organise;
