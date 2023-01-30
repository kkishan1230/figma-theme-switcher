import React from "react";
import Companies from "./Companies";
import google from "../images/google.png";
import amazon from "../images/amazon.png";
import ms from "../images/microsoft.png";
import uber from "../images/uber.png";
import dropbox from "../images/dropbox.png";

const Partners = () => {
  return (
    <div className="container-1440 text-center pt-[130px] pb-[80px] md:pt-[100px]">
      <h2 className="mb-[27px] md:text-[36px] md:leading-[36px] md:mb-[10px]">
        Partners
      </h2>
      <p className="tag-line w-[532px] mx-auto mb-[90px] lg:mb-[20px] sm:max-w-[300px] mt-[27px] sm:mb-[108px]">
        Most calendars are designed for teams.
        <span className="sm:hidden">Slate is designed for freelancers.</span>
      </p>
      <div className="flex items-center justify-center lg:flex-wrap lg:max-w-[680px] lg:mx-auto sm:gap-[30px]">
        <Companies img_src={google} padding_y="31px" />
        <Companies img_src={amazon} padding_y="32px" />
        <Companies img_src={ms} padding_y="25px" />
        <Companies img_src={uber} padding_y="25px" />
      </div>
      <div className="flex items-center justify-center lg:flex-wrap lg:max-w-[680px] lg:mx-auto sm:gap-[30px] sm:mt-[30px]">
        <Companies img_src={dropbox} padding_y="40px" />
        <Companies img_src={google} padding_y="31px" />
        <Companies img_src={uber} padding_y="25px" />
        <Companies img_src={amazon} padding_y="32px" />
      </div>
      <button className="btn  px-[60px]  h-[60px] rounded-[35px] mt-[80px] md:mt-[40px] md:h-[40px] md:px-[30px] sm:mt-[98px] sm:w-[236px] sm:h-[60px]">
        <h3 className="text-[#ffffff]  md:text-[16px] sm:text-[20px]">
          Try For Free
        </h3>
      </button>
    </div>
  );
};

export default Partners;
