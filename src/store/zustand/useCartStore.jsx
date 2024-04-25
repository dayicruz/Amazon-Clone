import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      basketProduct: [],

      enqueueProduct: (product) =>
        set((state) => ({
          basketProduct: [product],

          /* basketProduct: [...state.basketProduct, product], */
          /* selectedProducts: {
            ...state.selectedProducts,
            [productId]: (state.selectedProducts[productId] || 0) + 1,
          },
          selectedProductIDs: [...state.selectedProductIDs, productId],*/
        })),

      removeProduct: (productId) =>
        set((state) => {
          const updatedProducts = { ...state.selectedProducts };
          delete updatedProducts[productId];
          const updatedSelectedProductIDs = state.selectedProductIDs.filter(
            (id) => id !== productId
          );
          return {
            selectedProducts: updatedProducts,
            selectedProductIDs: updatedSelectedProductIDs,
          };
        }),

      /*   clearCart: () =>
        set(() => {
          return { basketProduct: [] };
        }), */
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
