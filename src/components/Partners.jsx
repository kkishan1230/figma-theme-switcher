import React from "react";
import Companies from "./Companies";
import google from "../images/google.png";
import amazon from "../images/amazon.png";
import ms from "../images/microsoft.png";
import uber from "../images/uber.png";
import dropbox from "../images/dropbox.png";

const Partners = () => {
  return (
    <div className="container-1440 text-center pt-[130px] pb-[80px] ">
      <h2 className="mb-[27px]">Partners</h2>
      <p className="tag-line w-[532px] mx-auto mb-[90px]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="flex items-center justify-center">
        <Companies img_src={google} padding_y="31px" />
        <Companies img_src={amazon} padding_y="32px" />
        <Companies img_src={ms} padding_y="25px" />
        <Companies img_src={uber} padding_y="25px" />
      </div>
      <div className="flex items-center justify-center">
        <Companies img_src={dropbox} padding_y="40px" />
        <Companies img_src={google} padding_y="31px" />
        <Companies img_src={uber} padding_y="25px" />
        <Companies img_src={amazon} padding_y="32px" />
      </div>
      <button className="btn rounded-[35px] mt-[80px]">
        <h3 className="text-[#ffffff] py-4 px-[60px] h-[60px]">Try For Free</h3>
      </button>
    </div>
  );
};

export default Partners;
