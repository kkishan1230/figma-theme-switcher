import React from "react";

const Companies = ({ img_src, padding_y }) => {
  return (
    <div
      className={`px-[40px] flex flex-col justify-center border-[1px] border-solid border-[#D8D8D8] sm:w-[253px] sm:h-[151px]`}
      style={{
        paddingTop: padding_y,
        paddingBottom: padding_y,
      }}
    >
      <div className="client-name">Client Name</div>
      <div className="mt-[15px]">
        <img src={img_src} alt="" />
      </div>
    </div>
  );
};

export default Companies;
