import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      basketProduct: [],
      selectQuantity: 1,
      productQuantities: {},
      selectedProducts: {},
      selectedProductIDs: [],
      newSelectedProductIDs: [],
      selectedOption: 1,
      isChecked: true,
      initialSelectedOption: 1,

      handleSelectChange: (productId, event) => {
        const productValue = Number(event.target.value);

        set((state) => ({
          selectQuantity: productValue,
          productQuantities: {
            ...state.productQuantities,
            [productId]: productValue,
          },
          selectedOptions: {
            ...state.selectedOptions,
            [productId]: productValue,
          },
        }));
      },

      enqueueProduct: (product) =>
        set((state) => ({
        
          basketProduct: [...state.basketProduct, product],
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

      clearCart: () =>
        set(() => {
          return { selectedProducts: {}, selectedProductIDs: [] };
        }),

      handleCheckboxChange: (productId) => {
        set((state) => {
          const count = state.selectedProductIDs.filter(
            (id) => id === productId
          ).length;
          const selectedProductIDs = [...state.selectedProductIDs];
          for (let i = 0; i < count + 1; i++) {
            selectedProductIDs.push(productId);
          }
          return { selectedProductIDs };
        });
      },

      handleClickCheckbox: (productId) => {
        set((state) => ({
          selectedProductID: productId,
        }));
      },

      setInitialSelectedOption: (value) =>
        set(() => ({
          initialSelectedOption: value,
        })),
      setIsCheckedTrue: () => set({ isChecked: true }),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
