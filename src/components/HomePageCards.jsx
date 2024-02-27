import React from "react";

const HomePageCards = ({ title, img, link }) => {
  return (
    <div className="h-[420px] bg-white z-30 m-3">
      <div className="text-base font-bold ml-4 mt-3 ">{title}</div>
      <div className="h-[300px] m-4">
        {" "}
        <img
          className="h-[100%] w-[100%] object-cover"
          src={img}
          alt="image card"
        />{" "}
      </div>
      <div className="text-xs ml-4 text-blue-400">{link}</div>
    </div>
  );
};

export default HomePageCards;
