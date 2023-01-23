import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="pt-[110px]  bg-[#252B42] text-center">
      <h2 className="text-[#ffffff]">Pricing</h2>
      <p className="tag-line max-w-[532px] mx-auto mt-[27px] mb-[47px] text-[#ffffff]">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="flex items-center justify-center gap-[50px] h-[817px]">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Pricing;
