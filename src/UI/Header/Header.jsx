import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Search from "./Search";
const Header = () => {
  return (
    <div className=" bg-amazonclone-light_blu text-white sm:w-[100%] sm:h-[70px] h-[100px] flex flex-col sm:flex-row  sm:bg-amazonclone sm:items-center ">
      <div className="flex  justify-between mt-[3px] p-3 ">
        <img
          className="sm:w-[100px] sm:h-[30px] object-contain w-[75px] h-[30px]"
          src={"../../../public/images/amazon.png"}
          alt=""
        />
        <div className="flex sm:hidden">
          <div className="sm:text-xs xl:text-sm text-sm ">Hello Dayana</div>
          <div className="pr-3 pl-3">
            <MdOutlineShoppingCart className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
      <div className="pr-4 pl-4 hidden sm:block">
        <div className="sm:text-xs xl:text-sm">Deliver to Dayana</div>
      </div>
      <div className="flex grow relative items-center ml-2 mr-2">
        <Search />
      </div>
      <div className="flex items-center">
        <div className="pr-4 pl-4 mt-2 ">
          <div className="sm:text-xs xl:text-sm text-sm hidden sm:block">
            Hello Dayana
          </div>
          <div className="text-sm xl:text-base font-bold hidden sm:block">
            Account & Lists
          </div>
        </div>
        <div className="pr-4 pl-4 hidden sm:block">
          <div className="text-xs xl:text-sm">Returns</div>
          <div className="text-sm xl:text-base font-bold">& Orders</div>
        </div>
        <div className="pr-3 pl-3 hidden sm:block">
          <MdOutlineShoppingCart className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
