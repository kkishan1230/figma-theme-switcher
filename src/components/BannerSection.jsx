import React from "react";

const Banner_section = () => {
  return (
    <div className="text-center">
      <h1 className=" mt-[159px] mb-[27px] lg:text-[48px] lg:leading-[64px] lg:max-w-[500px] lg:mt-[70px] xl:mt-[130px] ">
        The best products start with Figma
      </h1>
      <div className="tag-line  mx-auto max-w-[751px] text-[#ffffff] lg:max-w-[600px]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </div>
      <button
        size="large"
        className="btn w-[236px] h-[52px] rounded-[35px] mt-[90px]"
      >
        Try For Free
      </button>
    </div>
  );
};

export default Banner_section;
