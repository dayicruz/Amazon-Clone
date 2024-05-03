import { FaCheck } from "react-icons/fa6";
import { LuFileAudio } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contextProducts/ProductsContext";
import useCartStore from "../../store/zustand/useCartStore";

const AsideDetailPage = () => {
  const navigate = useNavigate();
  const { productItem } = useParams();
  const { details } = useParams();
  const { productData } = useContext(ProductsContext);
  const addToCart = useCartStore((state) => state.addToCart);
  const [qtt, setQtt] = useState(1);
  const product = productData.find((product) => product.id === details);
  const isChecked = true;

  const onSubmitBasket = (product) => {
    addToCart(product, qtt, isChecked);
    navigate("/cart");
  };

  return (
    <div className="rounded border-4 border-slate-200  sm:w-[25vw] 2xl:w-[20vw] xl:w-[20vw] mt-10 sm:mt-0">
      <div className="flex sm:gap-2 p-3 ">
        {productItem === "books" && (
          <>
            <div className="rounded border border-slate-400 p-1 sm:w-28 w-[45vw]">
              <div className="flex items-center justify-center">
                <LuFileAudio className="text-[#ff9a01]" />

                <p className="sm:text-xs text-sm">Audiobook</p>
              </div>

              <p className="sm:text-xs text-sm font-bold flex justify-center">
                0.00 €
              </p>
              <p className="sm:text-xs text-sm flex justify-center">
                with subscription
              </p>
            </div>
            <div className="rounded border border-slate-400 p-1 sm:w-28 w-[45vw] ">
              <p className="sm:text-xs text-sm flex justify-center">
                Hard cover
              </p>
              <p className="flex justify-center">__</p>
            </div>
          </>
        )}
      </div>

      <div className="pl-3 pr-3 ">
        {productItem === "books" && (
          <div className="rounded border-4 sm:border-[#006e8a] border-[#f08804] p-1 mt-2 mb-5 bg-[#e7f4f5] hover:bg-white flex flex-col justify-center items-center">
            <p className="sm:text-xs text-sm font-semibold ">Soft cover</p>
            <p className="sm:text-xs text-ml font-bold text-[#b12704] sm:text-black">
              {parseFloat(product.price).toFixed(2).toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
              })}
              €
            </p>
            <div className="flex items-center">
              <p>
                <FaCheck className="text-[#FF7510] text-xs" />
              </p>
              <p className="text-[#1BA1FF] font-bold sm:text-xs text-sm">
                {" "}
                prime
              </p>
            </div>
          </div>
        )}

        {productItem !== "books" && (
          <div className="rounded border-4 sm:border-[#007600] border-[#f08804] p-5  mb-5 bg-[#e7f4f5] hover:bg-white flex flex-col justify-center items-center">
            <p className="sm:text-lg text-ml font-bold text-[#b12704] sm:text-black">
              {parseFloat(product.price).toFixed(2).toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
              })}
              €
            </p>
            <div className="flex items-center">
              <p>
                <FaCheck className="text-[#FF7510] text-lg" />
              </p>
              <p className="text-[#1BA1FF] font-bold sm:text-lg text-sm">
                {" "}
                prime
              </p>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-around border-y border-slate-300 sm:p-2 p-5 ">
          <p className="sm:text-sm text-lg">Delivery</p>
          <p className="sm:text-sm text-lg">Pickup</p>
        </div>

        <div className="flex justify-between sm:p-3 pl-5 pt-5 ">
          <p className="sm:text-xs sm:font-bold hidden">New:</p>
          <p className="sm:text-xs text-lg text-[#b12704] font-semibold ">
            {parseFloat(product.price).toFixed(2).toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
            })}
            €
          </p>
        </div>
        <div className="flex flex-col sm:items-end pl-5 ">
          <p className="sm:text-xs text-sm text-[#949494] ">
            Recommended price:
            {parseFloat(product.price).toFixed(2).toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
            })}
            €
          </p>
          <p className="sm:text-xs text-sm text-[#949494]">Save: €1.00 (5%)</p>
          <p className="sm:text-xs text-sm sm:w-48 ">
            The prices of products sold on Amazon include VAT. Depending on your
            delivery address, VAT may vary at checkout.
          </p>
        </div>
        <div className="flex items-center sm:p-3 pl-5 pt-3">
          <p>
            <FaCheck className="text-[#FF7510] sm:text-xs text-sm" />
          </p>
          <p className="text-[#1BA1FF] font-bold  sm:text-xs text-sm"> prime</p>
          <p className="sm:text-xs text-sm text-[#949494] ml-1">Two days</p>
        </div>
        <div className="sm:pl-3 sm:pr-3 pl-5 pt-1">
          <p className="text-lg font-semibold text-[#007600]">En stock</p>
        </div>
        <div className="sm:pl-3 sm:pr-3 pl-5 pt-1">
          <input
            type="number"
            value={qtt}
            min="1"
            onChange={(event) => setQtt(+event.target.value)}
            className="rounded-md border  bg-[#f0f2f2] 2xl:w-[15vw] sm:w-[22vw] w-[80vw] xl:w-[18vw] p-1 sm:text-xs text-sm hover:border-[#3db7cc] border-[#b4b6b6] hover:bg-[#e6e6e6]"
          ></input>
        </div>
        <div className="p-3 pt-0">
          <button
            onClick={() => onSubmitBasket(product)}
            className="rounded-xl border-2 border-[#ffd814] bg-[#ffd814] sm:text-xs text-sm p-1 mt-3 sm:w-[22vw] w-[82vw] 2xl:w-[15vw] xl:w-[18vw] hover:bg-[#ffd814df]"
            type="submit"
          >
            Add to Card
          </button>
        </div>

        <div className="grid grid-cols-2 pl-3 mb-3">
          <div>
            <p className="sm:text-xs text-sm text-[#949494] ">Shipping from</p>
          </div>
          <div>
            <p className="sm:text-xs text-sm">amazon</p>
          </div>
        </div>

        <div className="grid grid-cols-2 pl-3 mb-3">
          <div>
            <p className="sm:text-xs text-sm text-[#949494] ">Sold by</p>
          </div>
          <div>
            <p className="sm:text-xs text-sm ">amazon</p>
          </div>
        </div>

        <div className="grid grid-cols-2 pl-3 mb-3">
          <div>
            <p className="sm:text-xs text-sm text-[#949494] ">Returns</p>
          </div>
          <div>
            <p className="text-[#008296] sm:text-xs text-sm pr-3">
              Can be returned within 30 days from the date of receipt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 pl-3 mb-3">
          <div>
            <p className="sm:text-xs text-sm text-[#949494] ">Pay</p>
          </div>
          <div>
            <p className="text-[#008296] sm:text-xs text-sm">
              Secure transaction
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 pl-3 mb-3">
          <div>
            <p className="sm:text-xs text-sm text-[#949494] ">
              Customer Support
            </p>
          </div>
          <div>
            <p className="sm:text-xs text-sm  ">amazon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideDetailPage;
