import React, { useContext } from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contextProducts/ProductsContext";

const Starts = () => {
  const { details } = useParams();

  const { productData } = useContext(ProductsContext);

  const product = productData.find((product) => product.id === details);

  return (
    <div className="flex items-center gap-1 ">
      <div className="flex text-sm sm:text-lg text-xl">
        <IoMdStar className="text-[#ff9a01]" />
        <IoMdStar className="text-[#ff9a01]" />
        <IoMdStar className="text-[#ff9a01]" />
        <IoMdStarOutline className="text-[#ff9a01]" />
        <IoMdStarHalf className="text-[#ff9a01]" />
      </div>
      <div className="text-sm">
        <p className="sm:text-[#078396]"> {product.reviews} </p>
      </div>
    </div>
  );
};

export default Starts;
