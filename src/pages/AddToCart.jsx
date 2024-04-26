import { default as React } from "react";
import { FaCheck } from "react-icons/fa6";

import useCartStore from "../store/zustand/useCartStore";
import { AsideAddToCart } from "./components/AsideAddToCart";

const AddToCart = () => {
  const { quantity, totalPrice } = useCartStore();

  const selectedProducts = useCartStore((state) => state.selectedProducts);
  const removeItem = useCartStore((state) => state.removeItem);

  const clearCart = useCartStore((state) => state.clearCart);

  console.log(selectedProducts);

  const handleRemoveProduct = (productId) => {
    removeItem(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:bg-amazonclone-background sm:p-32 md:p-16 sm:gap-5 md:gap-2 2xl:gap-5  sm:m-auto">
        <div className=" sm:w-[60vw] p-5 sm:p-0">
          <div className="  bg-white ">
            <div
              className="sm:border-b sm:border-slate-300 mb-5  border-b border-[#ffd814]" /*`${
                Object.keys(selectedProducts).length > 0
                  ? "sm:border-b sm:border-slate-300 mb-5  border-b border-[#ffd814]"
                  : " border-none"
              } `*/
            >
              <div className="sm:pl-10 sm:pt-5 flex sm:block gap-4 sm:gap-0">
                {/*{Object.keys(selectedProducts).length === 0 ? (
                  <div className="p-6 flex flex-col gap-3">
                    <p className="sm:text-2xl text-lg sm:font-semibold text-[#313030] font-semibold">
                      Your Amazon basket is empty.
                    </p>

                    <p className="sm:text-xs text-lg sm:font-semibold text-[#313030] font-semibold">
                      The shopping basket is very useful. Make sense of it: fill
                      it with food, clothing, household supplies, electronics
                      and more. Continue shopping on{" "}
                      <Link to={"/products"}>
                        {" "}
                        <span className="text-[#007185]">Amazon.es</span>
                      </Link>{" "}
                    </p>
                  </div>
                ) : (
                  <>*/}
                <p className="sm:text-xl text-lg sm:font-semibold text-[#313030] font-semibold">
                  Basket
                </p>
                <p className="sm:text-xs sm:text-[#007185] sm:font-medium hidden sm:block">
                  <button onClick={handleClearCart}>Delete all items</button>
                </p>

                <div className="sm:flex sm:justify-end sm:pr-3 mb-2">
                  <p className="sm:text-xs sm:font-semibold sm:text-[#949494] hidden sm:block">
                    Price
                  </p>
                </div>
                {/* </>
                )}*/}
              </div>
            </div>
            {selectedProducts.map((product) => (
              <div key={product.id}>
                <div
                  className="sm:flex sm:justify-between border-b p-4 border-slate-300" /*` ${
                    Object.keys(selectedProducts).length > 0
                      ? "sm:flex sm:justify-between border-b p-4 border-slate-300"
                      : "sm:flex sm:justify-between border-none"
                  }  `*/
                >
                  <div className="sm:flex gap-10 sm:gap-4 lg:gap-5 flex ">
                    <div className=" 2xl:w-[12vw] xl:w-[17vw] lg:w-[20vw] md:w-[20vw] sm:w-[30vw] w-[25vw]  sm:p-10 md:p-5  sm:pt-0 flex items-center sm:gap-5 md:gap-2 gap-2 ">
                      <input
                        className="cursor-pointer "
                        type="checkbox"
                        id={`check-box-${product.id}`}
                        /*  checked={selectedProductIDs.includes(product.id)}
                        onChange={() => handleCheckboxToggle(product.id)} */
                      />

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
                          {/* {parseFloat(product.price)
                            .toFixed(2)
                            .toLocaleString("es-ES", {
                              style: "currency",
                              currency: "EUR",
                            })} */}
                          €
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
                              value={quantity}
                              onChange={(event) =>
                                handleSelectChange(item.product.id, event)
                              }
                              className="rounded-md border  bg-[#f0f2f2] 2xl:w-[6vw] xl:w-[6vw] lg:w-[6vw] md:w-[8vw] sm:w-[8vw] w-[22vw] p-1 text-xs  hover:border-[#3db7cc] border-[#b4b6b6] hover:bg-[#e6e6e6]"
                            >
                              {/* quantityOptions */}
                            </select>
                          </div>
                          <div className="sm:flex sm:gap-3 hidden lg:gap-2 md:gap-2 xl:gap-2">
                            <p className="border-r border-slate-300 pr-3 md:pr-2 border-l  pl-3 md:pl-1 text-xs text-[#008296]">
                              <button
                                onClick={() =>
                                  handleRemoveProduct(item.product.id)
                                }
                              >
                                {" "}
                                Eliminate
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between sm:pr-2">
                    <p className="text-end sm:text-lg font-semibold hidden sm:block">
                      {/*  {selectedOptions[product.id]
                        ? (
                            parseFloat(product.price) *
                            selectedOptions[product.id]
                          )
                            .toFixed(2)
                            .toLocaleString("es-ES", {
                              style: "currency",
                              currency: "EUR",
                            })
                        : parseFloat(product.price)
                            .toFixed(2)
                            .toLocaleString("es-ES", {
                              style: "currency",
                              currency: "EUR",
                            })} */}
                      €
                    </p>

                    {/*   <div className="text-end">
                      <p className="sm:text-lg md:text-sm 2xl:text-lg font-semibold">
                        Subtotal ({selectedProductsData.length} product ):{" "}
                        <span className="sm:font-semibold 2xl:text-lg font-bold text-lg md:text-sm">
                          {totalPrice}€
                        </span>
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}

            <div
              className="sm:flex justify-end border-t border-slate-300 p-4 2xl:p-4 md:p-4 xl:p-4 lg:p-4 hidden" /*`${
                (selectedProducts).length > 0
                  ? "sm:flex justify-end border-t border-slate-300 p-4 2xl:p-4 md:p-4 xl:p-4 lg:p-4 hidden"
                  : "border-none sm:flex justify-end p-4 2xl:p-4 md:p-4 xl:p-4 lg:p-4 hidden "
              } `*/
            >
              <p className="sm:text-lg md:text-lg 2xl:text-lg ">
                Total ({/* {totalSelectedProducts}  */}product ):{" "}
                <span className="sm:font-semibold 2xl:text-lg font-bold text-lg md:text-lg">
                  {/*  {totalPrice.toFixed(2)} */} 20 €
                </span>
              </p>
            </div>
          </div>
        </div>

        <AsideAddToCart
        /* totalPrice={totalPrice} */
        />
      </div>
    </div>
  );
};

export default AddToCart;
