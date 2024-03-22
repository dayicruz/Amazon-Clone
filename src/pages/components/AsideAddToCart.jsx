import React from "react";
import { Link } from "react-router-dom";

export const AsideAddToCart = () => {
  return (
    <div className="bg-amazonclone-background   border-t border-[#ffd814] sm:border-none ">
      <div className="sm:w-[17vw] md:w-[26.5vw] 2xl:w-[17.5vw] xl:w-[17.5vw] lg:w-[26vw] bg-white p-5">
        <h3 className="sm:text-md md:text-sm font-semibold">
          Subtotal (1 product):{" "}
          <span className="sm:text-md md:text-sm sm:font-semibold font-bold text-lg">
            €16.97
          </span>{" "}
        </h3>
        <label htmlFor="" className="flex items-center gap-2 text-sm">
          <input
            className="cursor-pointer h"
            type="checkbox"
            id="check-box-1"
          />
          This order contains a gift
        </label>
        <div className="sm:pb-3 ">
          <Link to={"/checkout/hui"}>
            <button
              className="sm:rounded-lg sm:border-2 border-[#ffd814] bg-[#ffd814] sm:text-xs text-sm p-1 mt-3 sm:w-[22vw] w-[82vw] 2xl:w-[15vw] xl:w-[14.5vw] hover:bg-[#ffd814df]"
              type="submit"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
