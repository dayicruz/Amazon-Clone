import React, { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProductsContext } from "../../contextProducts/ProductsContext";
import { useForm } from "../../hooks/useForm";

const Search = () => {
  const { productData } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("all");
  const [params, setParams] = useSearchParams();
  const [placeholder, setPlaceholder] = useState("Search...");

  const { searchText, onInputChange } = useForm({
    searchText: "",
  });

  const uniqueCategories = new Set();

  productData.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();

    let filteredResults;

    if (selectedOption.toLowerCase() === "all") {
      filteredResults = productData.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase().trim())
      );
    } else {
      const filteredProducts = productData.filter(
        (product) =>
          product.category.toLowerCase() === selectedOption.toLowerCase()
      );
      filteredResults = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase().trim())
      );
    }

    if (filteredResults.length !== 0 && searchText.trim().length > 1) {
      setParams({
        category: selectedOption,
        product: searchText,
      });
    }

    if (filteredResults.length !== 0 && searchText.trim().length > 1) {
      if (selectedOption.toLowerCase() === "all") {
        navigate(
          `/products/${selectedOption.toLowerCase()}/?product=${searchText}`
        );
      } else {
        navigate(
          `/category/${selectedOption.toLowerCase()}/?product=${searchText}`
        );
      }
    }

    if (filteredResults.length === 0) {
      setPlaceholder("Sorry, no results found..");
    } else {
      setPlaceholder("Search...");
    }

    onInputChange({ target: { name: "searchText", value: "" } });

    if (searchText.trim().length <= 1) {
      setPlaceholder("Please enter more than two characters to search.");
      return;
    }
  };

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          className="p-[6px] bg-gray-300 text-black border text-xs xl:text-sm focus:outline-none focus:border-none"
          style={{ border: "none" }}
          onClick={handleSelectChange}
        >
          <option>All</option>
          {[...uniqueCategories].map((category) => (
            <option key={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <form
          className="flex grow items-center h-[100%] rounded-l text-black focus:outline-none  focus:border-[#FEBD69] pl-1 "
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex grow items-center h-[100%] rounded-l text-black focus:outline-none  focus:border-[#FEBD69] pl-1"
            type="text"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
            placeholder={placeholder}
          />

          <button className="w-[45px]">
            <FaMagnifyingGlass className="text-black h-[27px] m-auto " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
