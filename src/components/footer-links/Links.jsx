import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ link_name }) => {
  return (
    <NavLink to="/" className="footer_links">
      {link_name}
    </NavLink>
  );
};

export default Links;
