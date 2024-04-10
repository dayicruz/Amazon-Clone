import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="bg-amazonclone-light_blu p-3  gap-[10px] overflow-x-auto no-scrollbar max-w-full whitespace-nowrap text-white 2xl:gap-6 flex  text-sm  ">
        <Link to={"products/all"}>
          <h1>All Products</h1>
        </Link>
        <Link to={`/category/books`}>
          <h1>Books</h1>
        </Link>
        <Link to={`/category/shoes`}>
          <h1>Shoes</h1>
        </Link>
        <Link to={"/category/fitness"}>
          <h1>Fitness</h1>
        </Link>
        <Link to={"/category/mobile"}>
          <h1>Mobile</h1>
        </Link>

        {/*   <Link to={"/category/themostsold"}>
          <h1>The most sold</h1>
        </Link>
        <Link to={"/category/giftcards"}>
          <h1>Gift Cards</h1>
        </Link>*/}
        <Link to={"/category/customerservice"}>
          <h1>Customer Service</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
