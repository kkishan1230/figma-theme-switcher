import React from "react";
import open_feature from "../images/openfeature.svg";
import design from "../images/doodle.svg";
import brush from "../images/paint_brush.svg";
import YoutubePlayer from "./YoutubePlayer";

const Feature_section = () => {
  return (
    <div className="text-center mt-[126px]">
      <h2 className="text-[#252B42] mb-[27px]">Features</h2>
      <div className="tag-line text-[#374754] mx-auto max-w-[532px]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </div>
      <div className="flex text-center gap-[76px] justify-center mt-[97px]">
        <div className="max-w-[231px] ">
          <img
            alt=""
            src={open_feature}
            className="w-[46px] mx-auto mb-[27px]"
          />
          <h3 className="mb-[20px]">OpenType features Variable fonts</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="max-w-[231px] ">
          <img alt="" src={design} className="w-[50px] mx-auto mb-[27px]" />
          <h3 className="mb-[20px]">Design with real data</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="max-w-[231px] ">
          <img alt="" src={brush} className="w-[48px] mx-auto mb-[27px]" />
          <h3 className="mb-[20px]">Fastest way to take action</h3>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
      </div>
      {/* <YoutubePlayer /> */}
    </div>
  );
};

export default Feature_section;
