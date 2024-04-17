import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [isChecked, setIsChecked] = useState(true);
  const [initialSelectedOption, setInitialSelectedOption] = useState(1);
  const handleClickCheckbox = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };
  const quantityOptions = [];
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        Cant: {i}
      </option>
    );
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (!isChecked) {
      setInitialSelectedOption(selectedOption);
      setSelectedOption(0);
    } else {
      setSelectedOption(initialSelectedOption);
    }
  }, [isChecked]);

  return (
    <CartContext.Provider
      value={{
        setSelectedOption,
        selectedOption,
        quantityOptions,
        handleSelectChange,
        isChecked,
        setIsChecked,
        handleClickCheckbox,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
