import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        selectedProducts: [],
        selectedAddressesHistory: [],
        selectedCreditCartHistory: [],
        selectedCreditCart: {
          cardNumber: "",
          cardName: "",
          cardDueDate: "",
          cardSecurityCode: "",
        },
        selectedAddress: {
          country: "",
          fullName: "",
          addressLine1: "",
          city: "",
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

        addToAddress: (data) => {
          if (
            data.country.trim() === "" ||
            data.fullName.trim() === "" ||
            data.addressLine1.trim() === "" ||
            data.city.trim() === "" ||
            data.postalCode.trim() === "" ||
            data.phoneNumber.trim() === ""
          ) {
            return;
          }

          set((state) => {
            const newSelectedAddress = {
              ...state.selectedAddress,
              country: data.country || state.selectedAddress.country,
              fullName: data.fullName || state.selectedAddress.fullName,
              addressLine1:
                data.addressLine1 || state.selectedAddress.addressLine1,
              city: data.city || state.selectedAddress.city,
              postalCode: data.postalCode || state.selectedAddress.postalCode,
              phoneNumber:
                data.phoneNumber || state.selectedAddress.phoneNumber,
            };

            const newAddressesHistory = [
              ...state.selectedAddressesHistory,
              newSelectedAddress,
            ];

            return {
              selectedAddress: newSelectedAddress,
              selectedAddressesHistory: newAddressesHistory,
            };
          });
        },

        addToCreditCard: (data) => {
          if (
            data.cardNumber.trim() === "" ||
            data.cardName.trim() === "" ||
            data.cardDueDate.trim() === "" ||
            data.cardSecurityCode.trim() === ""
          ) {
            return;
          }

          set((state) => {
            const newSelectedCreditCard = {
              ...state.selectedCreditCart,
              cardNumber:
                data.cardNumber || state.selectedCreditCart.cardNumber,
              cardName: data.cardName || state.selectedCreditCart.cardName,
              cardDueDate:
                data.cardDueDate || state.selectedCreditCart.cardDueDate,
              cardSecurityCode:
                data.cardSecurityCode ||
                state.selectedCreditCart.cardSecurityCode,
            };

            const newCreditCardHistory = [
              ...state.selectedCreditCartHistory,
              newSelectedCreditCard,
            ];

            return {
              selectedCreditCart: newSelectedCreditCard,
              selectedCreditCartHistory: newCreditCardHistory,
            };
          });
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
          /*  useCartStore.getState().clearCartAndSessionStorage(); */
        },

        removeAddress: (index) => {
          const { selectedAddressesHistory } = get();

          set(
            {
              selectedAddressesHistory: selectedAddressesHistory.filter(
                (_, i) => i !== index
              ),
            },
            false,
            "removeAddress"
          );
        },

        removeCreditCard: (index) => {
          const { selectedCreditCartHistory } = get();

          set(
            {
              selectedCreditCartHistory: selectedCreditCartHistory.filter(
                (_, i) => i !== index
              ),
            },
            false,
            "removeCreditCard"
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

        /*  clearCartAndSessionStorage: () => {
          set({ selectedProducts: [] });

          sessionStorage.removeItem("cart-storage");
        }, */
      }),

      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useCartStore;
