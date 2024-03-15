import React from "react";

const HomePageCards = ({ title, img, link }) => {
  return (
    <div className=" bg-white z-10 m-2 2xl:m-6">
      <div className="text-[12px] font-bold ml-4 mt-3 ">{title}</div>
      <div className="m-2 2xl:m-6">
        {" "}
        <img className=" object-cover" src={img} alt="image card" />{" "}
      </div>
      <div className="text-xs ml-4 pb-2 text-blue-400">{link}</div>
    </div>
  );
};

export default HomePageCards;
