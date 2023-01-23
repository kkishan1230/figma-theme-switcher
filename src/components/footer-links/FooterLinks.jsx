import React from "react";
import Links from "./Links";

const FooterLinks = ({ links_head, link1, link2, link3, link4, link5, w }) => {
  return (
    <div className={`flex justify-between w-[${w}px]`}>
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
