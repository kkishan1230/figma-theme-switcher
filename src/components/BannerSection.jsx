import React from "react";
import { TagLine, TextH1 } from "./globalComponents/globalComponents";

const Banner_section = () => {
  return (
    <div className="text-center">
      <TextH1 className="text-[#ffffff] mx-auto banner-head mt-[159px] mb-[27px] lg:text-[48px] lg:leading-[64px] lg:max-w-[500px] lg:mt-[70px] xl:mt-[130px] sm:max-w-[333px] sm:mt-[117px]">
        The best products start with Figma
      </TextH1>
      <TagLine className="mx-auto text-[28px] max-w-[751px] text-[#ffffff] lg:max-w-[600px] md:max-w-[500px] sm:max-w-[265px]">
        Most calendars are designed for teams.
        <TagLine className="sm:hidden text-[28px] ">
          Slate is designed for freelancers
        </TagLine>
      </TagLine>
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
