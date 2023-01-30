import React from "react";

const Banner_section = () => {
  return (
    <div className="text-center">
      <h1 className="banner-head mt-[159px] mb-[27px] lg:text-[48px] lg:leading-[64px] lg:max-w-[500px] lg:mt-[70px] xl:mt-[130px] sm:max-w-[333px] sm:mt-[117px]">
        The best products start with Figma
      </h1>
      <div className="tag-line  mx-auto max-w-[751px] text-[#ffffff] lg:max-w-[600px] md:max-w-[500px] sm:max-w-[265px]">
        Most calendars are designed for teams.
        <span className="sm:hidden"> Slate is designed for freelancers</span>
      </div>
      <button
        size="large"
        className="btn w-[236px] h-[52px] rounded-[35px] mt-[90px] md:mt-[50px] sm:mt-[69px]"
      >
        Try For Free
      </button>
    </div>
  );
};

export default Banner_section;
