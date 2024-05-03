import "animate.css";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
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
          <div className=" bg-amazonclone-light_blu text-white sm:w-[100%] sm:h-[70px] h-[100px] flex flex-col sm:flex-row  sm:bg-amazonclone sm:items-center ">
            <div className="flex  justify-between mt-[3px] p-3 ">
              <Link to={"/products"}>
                <img
                  className="sm:w-[100px] sm:h-[30px] object-contain w-[75px] h-[30px]"
                  src={"../../../public/images/amazon.png"}
                  alt=""
                />
              </Link>

              <div className="flex sm:hidden">
                <div className="sm:text-xs xl:text-sm text-sm ">
                  Hello {displayName}
                </div>
                <div className="pr-3 pl-3">
                  <MdOutlineShoppingCart className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]" />
                </div>
              </div>
            </div>
            <div className="pr-4 pl-4 hidden sm:block">
              <div className="sm:text-xs xl:text-sm">
                Deliver to {displayName}
              </div>
            </div>
            <div className="flex grow relative items-center ml-2 mr-2">
              <Search />
            </div>
            <div className="flex items-center">
              <div className="pr-4 pl-4 mt-2 ">
                <div className="sm:text-xs xl:text-sm text-sm hidden sm:block">
                  {status === "authenticated" ? `Hello ${displayName}` : ""}
                </div>
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
              <div className="pr-4 pl-4 hidden sm:block">
                <div className="text-xs xl:text-sm">Returns</div>
                <div className="text-sm xl:text-base font-bold">& Orders</div>
              </div>
              <div className=" sm:flex flex-col  items-center pr-3 pl-3 hidden ">
                <p className="text-sm text-[#ff8732]">{totalItems}</p>

                <Link to={"/cart"}>
                  <GiShoppingCart className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]" />
                </Link>
              </div>
            </div>
          </div>

          <NavBar />
        </div>
      );
};

export default Header;
