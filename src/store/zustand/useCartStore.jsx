import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      selectedProducts: [],

      addToCart: (product, qtt) => {
        let { selectedProducts } = get();
        console.log(qtt);
        let existedProduct = selectedProducts.find(
          (item) => item.id === product.id
        );
        if (existedProduct) {
          existedProduct.quantity++;
          return;
        }

        let newProduct = { ...product, quantity: qtt };
        console.log(selectedProducts);
        set((state) => ({
          selectedProducts: [...state.selectedProducts, newProduct],
        }));
      },

      removeItem: (productId) => {
        const { selectedProducts } = get();

        set({
          selectedProducts: selectedProducts.filter(
            (item) => item.product.id !== productId
          ),
        });
      },

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
