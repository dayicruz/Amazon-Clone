import React from "react";
import StickyBox from "react-sticky-box";
import useCartStore from "../store/zustand/useCartStore";
import AddressCheckoutPage from "./AddressCheckoutPage";
import CreditCartCheckoutPage from "./CreditCartCheckoutPage";
import AsideCheckoutPage from "./components/AsideCheckoutPage";

const CheckoutPage = () => {
  const selectedProducts = useCartStore((state) => state.selectedProducts);

  const productsInTheBasket = selectedProducts.filter((product) => {
    if (product.isChecked === true) {
      return product;
    }
  });

  const totalItems = productsInTheBasket.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);

  return (
    <div>
      <div className="bg-[#f0f2f2] p-5 text-center border-b border-slate-400 mb-10">
        <p className="text-2xl font-semibold">
          Checkout ({" "}
          <span className="text-[#008296] text-xl">{totalItems} item</span> )
        </p>
      </div>
      <div className="sm:max-w-[900px] sm:m-auto mt-3 mb-10 pl-4 pr-4 ">
        <div className="sm:flex gap-5 sm:flex-row flex-col">
          <div className="border rounded-lg border-slate-400 mb-5 p-5 w-[100%]">
            <AddressCheckoutPage />
            <CreditCartCheckoutPage />
          </div>
          <div className="mb-6">
            <StickyBox>
              <AsideCheckoutPage />
            </StickyBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
