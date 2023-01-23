import React from "react";
import Companies from "./Companies";
import google from "../images/google.png";
import amazon from "../images/amazon.png";
import ms from "../images/microsoft.png";
import uber from "../images/uber.png";
import dropbox from "../images/dropbox.png";

const Partners = () => {
  return (
    <div className="container-1440 text-center mt-[200px]">
      <h2 className="mb-[27px]">Partners</h2>
      <p className="tag-line w-[532px] mx-auto">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="flex items-center justify-center">
        <Companies img_src={google} padding_y={"google"} />
        <Companies img_src={amazon} />
        <Companies img_src={ms} />
        <Companies img_src={uber} />
      </div>
      <div className="flex items-center justify-center">
        <Companies img_src={dropbox} />
        <Companies img_src={google} />
        <Companies img_src={uber} />
        <Companies img_src={amazon} />
      </div>
    </div>
  );
};

export default Partners;
