import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="bg-amazonclone-light_blu p-3  gap-[10px] overflow-x-auto no-scrollbar max-w-full whitespace-nowrap text-white 2xl:gap-6 flex  text-sm  ">
        <Link to={"/products"}>
          <h1>Prime</h1>
        </Link>
        <Link to={`/products/books`}>
          <h1>Books</h1>
        </Link>
        <Link to={`/products/shoes`}>
          <h1>Shoes</h1>
        </Link>
        <Link to={"/products/fitness"}>
          <h1>Fitness</h1>
        </Link>
        <Link to={"/products/technology"}>
          <h1>Technology</h1>
        </Link>
        <Link to={"/products/offers"}>
          <h1>Offers</h1>
        </Link>
        <Link to={"/products/themostsold"}>
          <h1>The most sold</h1>
        </Link>
        <Link to={"/products/giftcards"}>
          <h1>Gift Cards</h1>
        </Link>
        <Link to={"/products/customerservice"}>
          <h1>Customer Service</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
