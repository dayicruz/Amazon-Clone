import React from "react";
import CopyRight from "./CopyRight";
import Languages from "./Languages";
import Links from "./Links";
import Navegation from "./Navegation";

const Footer = () => {
  return (
    <div className="bg-amazonclone text-white ">
      <Navegation />
      <Languages />
      <Links />
      <CopyRight />
    </div>
  );
};

export default Footer;
