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
    <nav className="bg-amazonclone-light_blu pt-3 pb-3 pl-3 pr-3 gap-1.5 overflow-x-auto no-scrollbar max-w-full whitespace-nowrap text-white 2xl:gap-6 flex text-sm">
      <Link to="products/all">
        <p className=" hover:underline">All Products</p>
      </Link>

      {[...uniqueCategories].map((category) => (
        <Link key={category} to={`/category/${category}`}>
          <p className=" hover:underline">
            {category[0].toUpperCase() + category.slice(1)}
          </p>
        </Link>
      ))}

      <Link to="/customerservice">
        <p className=" hover:underline">Customer Service</p>
      </Link>
    </nav>
  );
};

export default NavBar;
