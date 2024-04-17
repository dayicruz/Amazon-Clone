import { useNavigate } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contextCart/CartContext";
import { ProductsContext } from "../../contextProducts/ProductsContext";

export const AsideAddToCart = () => {
  const navigate = useNavigate();
  const { selectedOption, isChecked } = useContext(CartContext);

  const [error, setError] = useState("");
  const { item } = useParams();

  const { productData } = useContext(ProductsContext);

    useEffect(() => {
      if (isChecked === true) {
        setError(""); 
      }
    }, [isChecked]);

  const onSubmitAddToCart = () => {
    if (isChecked === false) {
      setError("Select at least one item to proceed to payment");
    } else {
      navigate("/checkout/hjk");
    }
  };

  const product = productData.find((product) => product.id === item);

  return (
    <div className="bg-amazonclone-background   border-t border-[#ffd814] sm:border-none ">
      <div className="sm:w-[17vw] md:w-[26.5vw] 2xl:w-[17.5vw] xl:w-[17.5vw] lg:w-[26vw] bg-white p-5">
        <h3 className="sm:text-md md:text-sm font-semibold">
          Subtotal ({selectedOption} product):{" "}
          <span className="sm:text-md md:text-sm sm:font-semibold font-bold text-lg">
            {(parseFloat(product.price) * selectedOption)
              .toFixed(2)
              .toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
              })}
            €
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
          <button
            onClick={onSubmitAddToCart}
            className="sm:rounded-lg sm:border-2 border-[#ffd814] bg-[#ffd814] sm:text-xs text-sm p-1 mt-3 sm:w-[22vw] w-[82vw] 2xl:w-[15vw] xl:w-[14.5vw] hover:bg-[#ffd814df]"
            type="submit"
          >
            Checkout
          </button>
        </div>
        <div className="text-red-600 font-semibold text-xs block">{error}</div>
      </div>
    </div>
  );
};
