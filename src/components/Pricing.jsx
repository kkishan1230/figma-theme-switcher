import React from "react";
import { TextH2 } from "./globalComponents/globalComponents";

const Pricing = () => {
  return (
    <div className="py-[110px]  bg-[#252B42] text-center pricing lg:pb-16 sm:pt-[121px] xl:pt-[50px] sm:pb-[118px]">
      <TextH2 className="text-[#ffffff]">Pricing</TextH2>
      <p className="tag-line max-w-[532px] mx-auto mt-[27px] text-[#ffffff] price-tag-line sm:max-w-[265px]">
        Most calendars are designed for teams.
        <span className="sm:hidden">Slate is designed for freelancers</span>
      </p>
    </div>
  );
};

export default Pricing;
