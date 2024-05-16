import React from "react";
import { useLocation } from "react-router-dom";
import CopyRight from "./CopyRight";
import Languages from "./Languages";
import Links from "./Links";
import Navegation from "./Navegation";
const Footer = () => {
  const location = useLocation();
  if (location.pathname != "/login")
    if (location.pathname != "/signup")
      return (
        <div>
          <div className="bg-amazonclone text-white ">
            <Navegation />
            <Languages />
            <Links />
            <CopyRight />
          </div>
        </div>
      );
};

export default Footer;
