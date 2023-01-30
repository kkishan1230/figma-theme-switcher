import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="pt-[110px]  bg-[#252B42] text-center pricing lg:pb-16 sm:pt-[121px] xl:pt-[50px] sm:pb-[118px]">
      <h2 className="text-[#ffffff]">Pricing</h2>
      <p className="tag-line max-w-[532px] mx-auto mt-[27px] mb-[47px] text-[#ffffff] price-tag-line sm:max-w-[265px]">
        Most calendars are designed for teams.
        <span className="sm:hidden">Slate is designed for freelancers</span>
      </p>
      <div className="flex items-center justify-center gap-[50px] h-[817px]  lg:flex-col lg:h-auto lg:mt-10 sm:mt-[108px]">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Pricing;
