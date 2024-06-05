import React, { useContext } from "react";
import { ProductsContext } from "../contextProducts/ProductsContext";

const HomePageCards = ({ title, img }) => {
  const { productData } = useContext(ProductsContext);

  return (
    <section className=" bg-white shadow-sm hover:shadow-md transition ease-in-out delay-150">
      <h3 className="text-sm font-bold p-3 pb-0 ">{title}</h3>
      <div className="mt-2 2xl:m-6 flex justify-center pb-3 ">
        <img
          className="object-contain  sm:h-64 h-40 cursor-pointer"
          src={img}
          alt="image card"
        />
      </div>
    </section>
  );
};

export default HomePageCards;
