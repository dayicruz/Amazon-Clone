import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      selectedProducts: [],

      enqueueProduct: (productId) =>
        set((state) => ({
          selectedProducts: [...state.selectedProducts, productId],
        })),

      removeProduct: (productId) =>
        set((state) => ({
          selectedProducts: state.selectedProducts.filter(
            (id) => id !== productId
          ),
        })),

      clearCart: () =>
        set({
          selectedProducts: [],
        }),
    }),
    {
      name: "cart-storage", // nombre para identificar el almacenamiento
      storage: createJSONStorage(() => sessionStorage), // puedes cambiar esto si quieres usar sessionStorage u otra cosa
    }
  )
);

export default useCartStore;
