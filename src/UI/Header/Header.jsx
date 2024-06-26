import "animate.css";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { startLogout } from "../../store/auth/thunks";
import useCartStore from "../../store/zustand/useCartStore";
import NavBar from "./NavBar";
import Search from "./Search";
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { status, displayName } = useSelector((state) => state.auth);
  const selectedProducts = useCartStore((state) => state.selectedProducts);

  const totalItems = selectedProducts.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);

  const onLogout = () => {
    dispatch(startLogout());
  };

  if (location.pathname != "/login")
    if (location.pathname != "/signup")
      return (
        <div className="animate__animated animate__fadeIn animate__faster">
          <header className=" bg-amazonclone-light_blu text-white sm:w-[100%] sm:h-[70px] h-[100px] flex flex-col sm:flex-row  sm:bg-amazonclone sm:items-center ">
            <div className="flex  items-center justify-between mt-[3px] pt-3 pl-3 pr-2 sm:p-3  ">
              <Link to={"/products"}>
                <img
                  className="sm:w-[100px] sm:h-[30px] object-contain w-[75px] h-[30px]"
                  src={"./images/amazon.jpg"}
                  alt="logo amazon"
                />
              </Link>

              <div className="flex justify-center items-center gap-3 sm:hidden">
                <p className="sm:text-xs xl:text-sm text-sm ">
                  Hello {displayName}
                </p>
                <div className=" flex flex-col  items-center  sm:hidden  relative bottom-3">
                  <p className="text-sm text-[#ff8732] font-bold relative top-3 z-50">
                    {totalItems}
                  </p>

                  <Link className="relative top-1" to={"/cart"}>
                    <GiShoppingCart className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]" />
                  </Link>
                </div>

                <div className="flex justify-end ] pr-3  text-sm xl:text-base font-bold sm:hidden  ">
                  {status === "authenticated" ? (
                    <Link onClick={onLogout} to={"/login"}>
                      Logout
                    </Link>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </div>
              </div>
            </div>

            <div className="pr-4 pl-4 hidden sm:block">
              <p className="sm:text-xs xl:text-sm">Deliver to {displayName}</p>
            </div>
            <div className="flex grow relative items-center ml-2 mr-2">
              <Search />
            </div>
            <div className="flex items-center">
              <div className="pr-4 pl-4 mt-2 ">
                <p className="sm:text-xs xl:text-sm text-sm hidden sm:block">
                  {status === "authenticated" ? `Hello ${displayName}` : ""}
                </p>
                <div className="text-sm xl:text-base font-bold hidden sm:block">
                  {status === "authenticated" ? (
                    <Link onClick={onLogout} to={"/login"}>
                      Logout
                    </Link>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </div>
              </div>

              <div className=" sm:flex flex-col  items-center pr-3 pl-3 hidden ">
                <p className="text-sm text-[#ff8732]">{totalItems}</p>

                <Link to={"/cart"}>
                  <GiShoppingCart className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]" />
                </Link>
              </div>
            </div>
          </header>

          <NavBar />
        </div>
      );
};

export default Header;
