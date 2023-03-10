import React from "react";
import Links from "./Links";

const FooterLinks = ({ links_head, link1, link2, link3, link4, link5 }) => {
  return (
    <div
      className={`flex justify-between md:w-[25%] sm:w-[100%] sm:text-center sm:mx-auto sm:justify-center`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-[#ffffff]">{links_head}</h3>
        <Links link_name={link1} />
        <Links link_name={link2} />
        <Links link_name={link3} />
        <Links link_name={link4} />
        <Links link_name={link5} />
      </div>
    </div>
  );
};

export default FooterLinks;
