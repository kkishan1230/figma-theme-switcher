import React from "react";

const Companies = ({ img_src, padding_y }) => {
  return (
    <div
      className={`padding_y px-[40px] flex flex-col justify-center border-[1px] border-solid border-[#D8D8D8] ]`}
    >
      <div className="client-name">Client Name</div>
      <div className="mt-[15px]">
        <img src={img_src} alt="" />
      </div>
    </div>
  );
};

export default Companies;
