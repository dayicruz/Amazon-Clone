import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contextProducts/ProductsContext";
const NavBar = () => {
  const { productData } = useContext(ProductsContext);

  const uniqueCategories = new Set();

  productData.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  return (
    <div>
      <div className="bg-amazonclone-light_blu pt-3 pb-3 pl-3 pr-3  gap-[6px]  overflow-x-auto no-scrollbar max-w-full whitespace-nowrap text-white 2xl:gap-6 flex  text-sm  ">
        <Link to={"products/all"}>
          <h1>All Products</h1>
        </Link>

        {[...uniqueCategories].map((category) => (
          <Link key={category} to={`/category/${category}`}>
            <h1>{category[0].toUpperCase() + category.slice(1)}</h1>
          </Link>
        ))}
        <Link to={"/customerservice"}>
          <h1>Customer Service</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
