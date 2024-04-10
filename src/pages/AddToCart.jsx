import React from "react";
import { FaCheck } from "react-icons/fa6";
import { AsideAddToCart } from "./components/AsideAddToCart";
import BadgeAmazon from "./components/BadgeAmazon";

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contextProducts/ProductsContext";

const AddToCart = () => {
  const { item } = useParams();

  const { productData } = useContext(ProductsContext);

  const product = productData.find((product) => product.id === item);

  return (
    <div>
      {productData.map(
        (data) =>
          data.id === item && (
            <div key={data.id}>
              <div className="flex flex-col sm:flex-row sm:bg-amazonclone-background sm:p-32 md:p-16 sm:gap-5 md:gap-2 2xl:gap-5  sm:m-auto">
                <div className=" sm:w-[60vw] p-5 sm:p-0">
                  <div className="  bg-white ">
                    <div className="sm:border-b sm:border-slate-300 mb-5  border-b border-[#ffd814] ">
                      <div className="sm:pl-10 sm:pt-5 flex sm:block gap-4 sm:gap-0">
                        <p className="sm:text-xl text-lg sm:font-semibold text-[#313030] font-semibold">
                          Basket
                        </p>

                        <p className="sm:text-xs sm:text-[#007185] sm:font-medium hidden sm:block">
                          Deselect all items
                        </p>
                      </div>
                      <div className="sm:flex sm:justify-end sm:pr-3 mb-2">
                        <p className="sm:text-xs sm:font-semibold sm:text-[#949494] hidden sm:block">
                          Price
                        </p>
                      </div>
                    </div>

                    <div className="sm:flex sm:justify-between ">
                      <div className="sm:flex gap-10 sm:gap-4 lg:gap-5 flex ">
                        <div className=" 2xl:w-[12vw] xl:w-[17vw] lg:w-[20vw] md:w-[20vw] sm:w-[30vw] w-[25vw]  sm:p-10 md:p-5  sm:pt-0 flex items-center sm:gap-5 md:gap-2 gap-2 ">
                          <p className=" ">
                            <input
                              className="cursor-pointer "
                              type="checkbox"
                              id="check-box-1"
                            />
                          </p>
                          <img
                            src={data.image}
                            alt=""
                            className="object-contain"
                          />
                        </div>
                        <div className="">
                          <div className="sm:flex sm:flex-col gap-2 md:gap-0">
                            <div className="sm:flex sm:items-center sm:gap-2">
                              <h3 className="sm:text-md lg:text-lg md:text-md text-xs font-semibold">
                                {data.title}
                              </h3>
                            </div>
                            <div className="sm:flex sm:gap-4">
                              <p className="sm:text-sm text-xs">
                                by{" "}
                                <span className="text-[#008296] sm:text-sm text-xs ">
                                  {data.author}
                                </span>{" "}
                                <span className="sm:text-sm text-xs text-[#949494]">
                                  (Autor)
                                </span>{" "}
                              </p>
                            </div>
                            <div className="hidden">
                              <BadgeAmazon />
                            </div>

                            <p className="text-xs font-semibold ">
                              {" "}
                              {data.attribute}
                            </p>
                            <p className="font-bold text-lg md:text-md">
                              {" "}
                              {data.price}
                            </p>
                            <div className="">
                              <p className="text-xs font-semibold text-[#007600]">
                                In stock
                              </p>
                            </div>
                            <div className="flex items-center ">
                              <p>
                                <FaCheck className="text-[#FF7510] text-xs " />
                              </p>
                              <p className="text-[#1BA1FF] font-bold  text-xs ">
                                {" "}
                                prime
                              </p>
                            </div>
                            <div className="sm:flex sm:items-center sm:gap-5 md:gap-2 sm:mb-5 md:flex-col md:items-start md:justify-start">
                              <div className=" pt-1 mb-5 sm:mb-0">
                                <select
                                  name=""
                                  id=""
                                  className="rounded-md border  bg-[#f0f2f2] 2xl:w-[5vw] xl:w-[5vw] lg:w-[5vw] md:w-[8vw] sm:w-[8vw] w-[22vw] p-1 text-xs  hover:border-[#3db7cc] border-[#b4b6b6] hover:bg-[#e6e6e6]"
                                >
                                  <option value="">Cant: 1</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                  <option value="">3</option>
                                  <option value="">4</option>
                                  <option value="">5</option>
                                  <option value="">6</option>
                                  <option value="">7</option>
                                  <option value="">8</option>
                                  <option value="">9</option>
                                  <option value="">10</option>
                                </select>
                              </div>
                              <div className="sm:flex sm:gap-3 hidden lg:gap-2 md:gap-2 xl:gap-2">
                                <p className="border-r border-slate-300 pr-3 md:pr-2 border-l  pl-3 md:pl-1 text-xs text-[#008296]">
                                  Eliminate
                                </p>
                                <p className="md:text-center  border-r border-slate-300 pr-3 md:pr-2 text-xs text-[#008296]">
                                  Save for later
                                </p>
                                <p className="md:text-center  border-r border-slate-300 pr-3  md:pr-2 text-xs text-[#008296]">
                                  See other datas like this
                                </p>
                                <p className="text-xs text-[#008296]">Share</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sm:pr-2">
                        <p className="sm:text-lg font-semibold hidden sm:block">
                          {" "}
                          {data.price}
                        </p>
                      </div>
                    </div>
                    <div className="sm:flex justify-end border-t border-slate-300 p-4 2xl:p-4 md:p-4 xl:p-4 lg:p-4 hidden">
                      <p className="sm:text-lg md:text-sm 2xl:text-lg font-semibold">
                        Subtotal (1 product ):{" "}
                        <span className="sm:font-semibold 2xl:text-lg font-bold text-lg md:text-sm">
                          {data.price}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <AsideAddToCart />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default AddToCart;
