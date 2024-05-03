import React from "react";
import useCartStore from "../../store/zustand/useCartStore";

const AsideCheckoutPage = () => {
  const selectedProducts = useCartStore((state) => state.selectedProducts);

  const productsInTheBasket = selectedProducts.filter((product) => {
    if (product.isChecked === true) {
      return product;
    }
  });

  const totalPrice = productsInTheBasket.reduce((acc, item) => {
    return acc + item.price * item.quantity + 4.5;
  }, 0);

  const totalItems = productsInTheBasket.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);

  return (
    <div className="border rounded-lg border-slate-400 mb-5 p-5">
      <div className="flex flex-col items-center border-b border-slate-400">
        <div>
          <button
            type="submit"
            className="bg-[#ffd814] text-black py-2 px-4 rounded hover:bg-[#ffd501d4] transition-colors text-xs"
          >
            Send to this address
          </button>
        </div>
        <div className="2xl:w-[10vw] xl:w-[13vw] lg:w-[15vw] md:w-[18vw] sm:w-[20vw] w-[60vw] mt-2 mb-2">
          <p className="text-xs text-center">
            Choose an address to process the order. You can modify or cancel the
            order before finalizing it.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="2xl:text-lg font-bold">Order summary</h3>
        <div className="flex justify-between">
          <p className="text-xs font-semibold">Products:</p>
          <p className="text-xs font-semibold">{totalItems}</p>
        </div>

        <div className="flex justify-between">
          <p className="text-xs font-semibold">Shipment:</p>
          <p className="text-xs font-semibold"> 4.50€</p>
        </div>
      </div>

      <div className="flex justify-between border-t border-b border-slate-400 p-1 mt-3">
        <p className="2xl:text-lg text-[#b12704] font-bold">Total:</p>
        <p className="2xl:text-lg text-[#b12704] font-bold">
          {totalPrice.toFixed(2)}€
        </p>
      </div>
      <div className="2xl:w-[12vw] xl:w-[15vw] lg:w-[19vw] md:w-[20vw] sm:w-[25vw] w-[80vw]">
        <p className="text-[10px]  mt-3">
          Shipments to the Canary Islands, Ceuta and Melilla: may be subject to
          customs and/or import management fees additional to the order amount.
          To facilitate the delivery of your order, visit "Addresses" in "My
          account", click on "Edit" the address of said shipment and enter your
          NIF/CIF number in the "NIF" field.
        </p>
      </div>
    </div>
  );
};

export default AsideCheckoutPage;
