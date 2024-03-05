import React from "react";

const Languages = () => {
  return (
    <div className="bg-amazonclone-light_blu sm:flex sm:items-center sm:justify-center sm:flex-col sm:gap-3 sm:p-4 hidden">
      <img
        className="sm:w-[70px] sm:h-[30px] object-contain w-[75px] h-[30px]"
        src={"../../../public/images/amazon.png"}
        alt=""
      />
      <div className="flex gap-3 sm:max-w-[1000px] sm:m-auto sm:p-4 flex-wrap justify-center">
        <p className="text-[10px]">Australia</p>
        <p className="text-[10px]">Germany</p>
        <p className="text-[10px]">Brazil</p>
        <p className="text-[10px]">Canada</p>
        <p className="text-[10px]">China</p>
        <p className="text-[10px]">USA</p>
        <p className="text-[10px]">France</p>
        <p className="text-[10px]">India</p>
        <p className="text-[10px]">Italy</p>
        <p className="text-[10px]">Japan</p>
        <p className="text-[10px]">Mexico</p>
        <p className="text-[10px]">Netherlands</p>
        <p className="text-[10px]">Poland</p>
        <p className="text-[10px]">United Arab Emirates</p>
        <p className="text-[10px]">United Kingdom</p>
        <p className="text-[10px]">Singapore</p>
        <p className="text-[10px]">Türkiye</p>
      </div>
    </div>
  );
};

export default Languages;
