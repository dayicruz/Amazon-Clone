import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        selectedProducts: [],
        selectedAddress: {
          country: "",
          fullName: "",
          addressLine1: "",
          city: "",
          state: "",
          postalCode: "",
          phoneNumber: "",
        },

        addToCart: (product, qtt, isChecked) => {
          set(
            (state) => {
              const existingProductIndex = state.selectedProducts.findIndex(
                (p) => p.id === product.id
              );
              if (existingProductIndex !== -1) {
                const updatedProducts = [...state.selectedProducts];
                updatedProducts[existingProductIndex].quantity += qtt;
                return { selectedProducts: updatedProducts };
              } else {
                let newProduct = {
                  ...product,
                  quantity: qtt,
                  isChecked: isChecked,
                };

                return {
                  selectedProducts: [...state.selectedProducts, newProduct],
                };
              }
            },
            false,
            "addToCart"
          );
        },

        addToAddress: (
          event,
          country,
          fullName,
          addressLine1,
          city,
          state,
          postalCode,
          phoneNumber
        ) => {
          event.preventDefault();

          set((state) => {
            return {
              selectedAddress: [...state.selectedAddress],
            };
          });

          console.log(country);
        },

        handleCheckboxToggle: (productId) => {
          set((state) => {
            const updatedProducts = state.selectedProducts.map((product) => {
              if (product.id === productId) {
                return { ...product, isChecked: !product.isChecked };
              }
              return product;
            });
            return { selectedProducts: updatedProducts };
          });
        },

        updateProduct: (quantity, id) => {
          set(
            (state) => {
              const existingProductIndex = state.selectedProducts.findIndex(
                (p) => p.id === id
              );

              const updatedProducts = [...state.selectedProducts];
              updatedProducts[existingProductIndex].quantity = quantity;
              return { selectedProducts: updatedProducts };
            },
            false,
            "updateProduct"
          );
        },

        removeItem: (productId) => {
          const { selectedProducts } = get();

          set(
            {
              selectedProducts: selectedProducts.filter(
                (item) => item.id !== productId
              ),
            },
            false,
            "removeItem"
          );
        },

        clearCart: () =>
          set(
            () => {
              return { selectedProducts: [] };
            },
            false,
            "clearCart"
          ),
      }),

      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useCartStore;
