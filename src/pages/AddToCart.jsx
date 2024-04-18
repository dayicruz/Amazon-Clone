import { default as React, useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { ProductsContext } from "../contextProducts/ProductsContext";

import { CartContext } from "../contextCart/CartContext";
import useCartStore from "../store/zustand/useCartStore";

const AddToCart = () => {
  const { productData } = useContext(ProductsContext);
  const [updatedSelectedProductsData, setUpdatedSelectedProductsData] =
    useState([]);
  const selectedProducts = useCartStore((state) => state.selectedProducts);
  const { clearCart, removeProduct } = useCartStore();

  useEffect(() => {
    if (productData && productData.length > 0) {
      const updatedData = selectedProducts.map((productId) =>
        productData.find((product) => product.id === productId)
      );
      setUpdatedSelectedProductsData(updatedData);
    }
  }, [selectedProducts, productData]);

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const {
    selectedOption,
    quantityOptions,
    handleSelectChange,
    handleClickCheckbox,
    isChecked,
  } = useContext(CartContext);
  console.log(updatedSelectedProductsData);
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:bg-amazonclone-background sm:p-32 md:p-16 sm:gap-5 md:gap-2 2xl:gap-5  sm:m-auto">
        <div className=" sm:w-[60vw] p-5 sm:p-0">
          <div className="  bg-white ">
            <div className="sm:border-b sm:border-slate-300 mb-5  border-b border-[#ffd814] ">
              <div className="sm:pl-10 sm:pt-5 flex sm:block gap-4 sm:gap-0">
                <p className="sm:text-xl text-lg sm:font-semibold text-[#313030] font-semibold">
                  Basket
                </p>

                <p className="sm:text-xs sm:text-[#007185] sm:font-medium hidden sm:block">
                  <button onClick={handleClearCart}>Delete all items</button>
                </p>
              </div>
              <div className="sm:flex sm:justify-end sm:pr-3 mb-2">
                <p className="sm:text-xs sm:font-semibold sm:text-[#949494] hidden sm:block">
                  Price
                </p>
              </div>
            </div>
            {updatedSelectedProductsData.map((product) => (
              <div key={product.id}>
                <div className="sm:flex sm:justify-between border-b p-4 border-slate-300 ">
                  <div className="sm:flex gap-10 sm:gap-4 lg:gap-5 flex ">
                    <div className=" 2xl:w-[12vw] xl:w-[17vw] lg:w-[20vw] md:w-[20vw] sm:w-[30vw] w-[25vw]  sm:p-10 md:p-5  sm:pt-0 flex items-center sm:gap-5 md:gap-2 gap-2 ">
                      <p className=" ">
                        <input
                          /*   onChange={handleClickCheckbox} */
                          className="cursor-pointer "
                          type="checkbox"
                          id="check-box-1"
                          /*   checked={isChecked} */
                        />
                      </p>
                      <img
                        src={product.image}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                    <div className="">
                      <div className="sm:flex sm:flex-col gap-2 md:gap-0">
                        <div className="sm:flex sm:items-center sm:gap-2">
                          <h3 className="sm:text-md lg:text-lg md:text-md text-xs font-semibold">
                            {product.title}
                          </h3>
                        </div>
                        {product.author && (
                          <div className="sm:flex sm:gap-4">
                            <p className="sm:text-sm text-xs">
                              by{" "}
                              <span className="text-[#008296] sm:text-sm text-xs ">
                                {product.author}
                              </span>{" "}
                              <span className="sm:text-sm text-xs text-[#949494]">
                                (Autor)
                              </span>{" "}
                            </p>
                          </div>
                        )}

                        {product.attribute && (
                          <p className="text-xs font-semibold ">
                            {" "}
                            {product.attribute}
                          </p>
                        )}

                        <p className="font-bold text-lg md:text-md">
                          {parseFloat(product.price)
                            .toFixed(2)
                            .toLocaleString("es-ES", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          20 €
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
                              /*  onChange={handleSelectChange} */
                              className="rounded-md border  bg-[#f0f2f2] 2xl:w-[6vw] xl:w-[6vw] lg:w-[6vw] md:w-[8vw] sm:w-[8vw] w-[22vw] p-1 text-xs  hover:border-[#3db7cc] border-[#b4b6b6] hover:bg-[#e6e6e6]"
                            >
                              {quantityOptions}
                            </select>
                          </div>
                          <div className="sm:flex sm:gap-3 hidden lg:gap-2 md:gap-2 xl:gap-2">
                            <p className="border-r border-slate-300 pr-3 md:pr-2 border-l  pl-3 md:pl-1 text-xs text-[#008296]">
                              <button
                                onClick={() => handleRemoveProduct(product.id)}
                              >
                                {" "}
                                Eliminate
                              </button>
                            </p>
                            <p className="md:text-center  border-r border-slate-300 pr-3 md:pr-2 text-xs text-[#008296]">
                              Save for later
                            </p>
                            <p className="md:text-center  border-r border-slate-300 pr-3  md:pr-2 text-xs text-[#008296]">
                              See other products like this
                            </p>
                            <p className="text-xs text-[#008296]">Share</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sm:pr-2">
                    <p className="sm:text-lg font-semibold hidden sm:block">
                      {(parseFloat(product.price) * selectedOption)
                        .toFixed(2)
                        .toLocaleString("es-ES", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      20€
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="sm:flex justify-end border-t border-slate-300 p-4 2xl:p-4 md:p-4 xl:p-4 lg:p-4 hidden">
              <p className="sm:text-lg md:text-sm 2xl:text-lg font-semibold">
                Subtotal ({selectedOption} product ):{" "}
                <span className="sm:font-semibold 2xl:text-lg font-bold text-lg md:text-sm">
                  {/* {(parseFloat(product.price) * selectedOption)
                    .toFixed(2)
                    .toLocaleString("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  20€ */}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/*  <AsideAddToCart /> */}
      </div>
    </div>
  );
};

export default AddToCart;
