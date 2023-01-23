import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="py-[150px] bg-[#252B42]">
      <div className="max-w-[991px] flex justify-between mx-auto">
        <div className="flex">
          <FooterLinks
            links_head="Pages"
            link1="Home"
            link2="Product"
            link3="Pricing"
            link4="About"
            link5="Contact"
            w={170}
          />
          <FooterLinks
            className="tomothy"
            links_head="Tomothy"
            link1="Eleanor Edwards"
            link2="Ted Robertson"
            link3="Annette Russell"
            link4="Jennie Mckinney"
            link5="Gloria Richards"
            w={186}
          />
          <FooterLinks
            className="jane"
            links_head="Jane Black"
            link1="Philip Jones"
            link2="Product"
            link3="Colleen Russell"
            link4="Marvin Hawkins"
            link5="Bruce Simmmons"
            w={187}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
