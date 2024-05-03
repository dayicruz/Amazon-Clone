import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contextProducts/ProductsContext";
import useCartStore from "../../store/zustand/useCartStore";

export const AsideAddToCart = ({ totalItems, totalPrice }) => {
  const navigate = useNavigate();
  const { item } = useParams();
  const { productData } = useContext(ProductsContext);
  const selectedProducts = useCartStore((state) => state.selectedProducts);
  const [error, setError] = useState("");

  const onSubmitAddToCart = () => {
    selectedProducts.map((item) => {
      if (item.isChecked === true) {
        navigate("/checkout/hjk");
        setError("");
      } else {
        setError("Select at least one item to proceed to payment");
      }
    });
  };

  const product = productData.find((product) => product.id === item);

  return (
    <>
      <div className="bg-amazonclone-background   border-t border-[#ffd814] sm:border-none ">
        <div className="sm:w-[17vw] md:w-[26.5vw] 2xl:w-[17.5vw] xl:w-[17.5vw] lg:w-[26vw] bg-white p-5">
          <h3 className="sm:text-md md:text-sm font-semibold">
            Subtotal ({totalItems} product):{" "}
            <span className="sm:text-md md:text-sm sm:font-semibold font-bold text-lg">
              {totalPrice.toFixed(2)}€
            </span>{" "}
          </h3>
          <div className="sm:pb-3 ">
            <button
              onClick={onSubmitAddToCart}
              className="sm:rounded-lg sm:border-2 border-[#ffd814] bg-[#ffd814] sm:text-xs text-sm p-1 mt-3 sm:w-[22vw] w-[82vw] 2xl:w-[15vw] xl:w-[14.5vw] hover:bg-[#ffd814df]"
              type="submit"
            >
              Checkout
            </button>
          </div>
          <div className="text-red-600 font-semibold text-xs block">
            {error}
          </div>
        </div>
      </div>
    </>
  );
};
