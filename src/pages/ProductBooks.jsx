import { BiWorld } from "react-icons/bi";
import { GiModernCity } from "react-icons/gi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import AsideDetailPage from "./components/AsideDetailPage";
import BadgeAmazon from "./components/BadgeAmazon";
import CarouselProducts from "./components/CarouselProducts";
import Starts from "./components/Starts";

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contextProducts/ProductsContext";

const ProductBooks = () => {
  const { details } = useParams();

  const { productData } = useContext(ProductsContext);
  //const product = productData.find((product) => product.id === details);

  return (
    <div className="max-w-screen-xl m-auto p-3">
      {productData.map(
        (data) =>
          data.id === details && (
            <div key={data.id}>
              <div className=" sm:mt-20 mb-10 flex flex-col sm:flex-row">
                <div className="sm:w-[20vw] sm:mr-6 sm:self-start w-[50vw] self-center ">
                  <img src={data.image} alt="" className="object-contain" />
                </div>
                <div className="sm:w-[50vw] flex flex-col mr-6 w-[90vw] mt-5 sm:mt-0">
                  <div className="flex flex-col sm:gap-1  gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="sm:text-2xl text-xl font-semibold ">
                        {data.title}
                        <span className="text-xl font-semibold text-[#949494]">
                          {data.attribute}
                        </span>
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      <p className="text-sm">
                        de{" "}
                        <span className="text-[#008296] text-sm">
                          {data.author}
                        </span>{" "}
                        <span className="text-sm text-[#949494]">(Autor)</span>{" "}
                      </p>
                      <p className="text-sm ">
                        <span className="text-sm text-[#949494]">Formato:</span>{" "}
                        Versión Kindle
                      </p>
                    </div>
                    <Starts />
                    <BadgeAmazon />
                  </div>
                  <div className=" border-t border-b border-slate-400 mt-10 mb-3 pt-3 pb-3">
                    {data.description}
                  </div>
                  <div className="flex justify-around ">
                    <div className="flex flex-col items-center sm:gap-1 gap-3">
                      <p className="sm:text-sm text-xs text-[#949494]">
                        {" "}
                        Print length
                      </p>
                      <div>
                        <SlNotebook />
                      </div>
                      <p className="sm:text-sm text-xs">{data.length}</p>
                    </div>
                    <div className="flex flex-col items-center sm:gap-1 gap-3">
                      <p className="sm:text-sm text-xs text-[#949494]">
                        Language
                      </p>
                      <div>
                        <BiWorld />
                      </div>
                      <p className="sm:text-sm text-xs">{data.Language}</p>
                    </div>
                    <div className="flex flex-col items-center sm:gap-1 gap-3">
                      <p className="sm:text-sm text-xs text-[#949494]">
                        {" "}
                        Editorial
                      </p>
                      <div>
                        <GiModernCity />
                      </div>
                      <p className="sm:text-sm text-xs">{data.editorial}</p>
                    </div>
                    <div className="flex flex-col items-center sm:gap-1 gap-3">
                      <p className="sm:text-sm text-xs text-[#949494]">
                        {" "}
                        Publication date
                      </p>
                      <div>
                        <IoCalendarNumberOutline />
                      </div>
                      <p className="sm:text-sm text-xs">{data.date}</p>
                    </div>
                  </div>
                </div>

                <AsideDetailPage />
              </div>
              <CarouselProducts />
            </div>
          )
      )}
    </div>
  );
};

export default ProductBooks;
