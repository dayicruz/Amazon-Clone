import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      selectedProducts: [],

      enqueueProduct: (productId) =>
        set((state) => ({
          selectedProducts: [...state.selectedProducts, productId],
        })),

      removeProduct: (productId) =>
        set((state) => {
          const updatedProducts = state.selectedProducts.filter(
            (id) => id !== productId
          );

          return { selectedProducts: updatedProducts };
        }),

      clearCart: () =>
        set(() => {
          return { selectedProducts: [] };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
