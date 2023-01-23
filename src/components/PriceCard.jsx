import React from "react";

const PriceCard = () => {
  return (
    <div className="w-[335px] bg-[#ffffff] flex flex-col items-center pt-[43px] pb-[40px] rounded-[10px] shadow-[0_13px_19px_rgba(0,0,0,0.7)] price_card">
      <h3 className="">FREE</h3>
      <p className="common-text w-[158px] mt-[3px]">
        Organize across all apps by hand
      </p>
      <div className="flex items-center mt-[19px] mb-[28px] gap-[10px]">
        <h1 className="text-[#252B42]">0</h1>
        <div className="text-left">
          <h3>$</h3>
          <p className="common-text">Per Month</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mb-[40px]">
        <p className="common-text text-[15px]">Pricing Feature</p>
        <p className="common-text text-[15px]">Pricing Feature</p>
        <p className="common-text text-[15px]">Pricing Feature</p>
        <p className="common-text text-[15px]">Pricing Feature</p>
        <p className="common-text text-[15px]">Pricing Feature</p>
      </div>
      <button className="btn w-[255px] h-[56px] rounded-[35px]">
        Order Now
      </button>
    </div>
  );
};

export default PriceCard;
