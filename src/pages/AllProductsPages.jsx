import { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";
import { ProductsContext } from "../contextProducts/ProductsContext";
import PaginationButtons from "./components/PaginationButtons";

const AllProductsPages = () => {
  const { productData } = useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState(0);

  const [params] = useSearchParams();
  const name = params.get("product") ?? "";

  const dataSearch = productData.filter((product) =>
    product.title.toLowerCase().includes(name.toLowerCase().trim())
  );

  const productsPerPage = 12;

  const startIndex = currentPage * productsPerPage;

  const displayedProducts = productData.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(productData.length / productsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-10 sm:mt-3 justify-items-center sm:justify-items-center">
        {(name ? dataSearch : displayedProducts).map((product, index) => {
          const actualIndex = startIndex + index + 1;
          return (
            <div key={product.id}>
              <div className="flex flex-col justify-between items-center mb-7 sm:rounded sm:border sm:border-slate-300 sm:m-5 sm:items-start sm:w-[50vw]  md:w-[40vw]  lg:w-[30vw]  xl:w-[30vw]  2xl:w-[22vw] min-h-[35vh]">
                <p className="bg-[#c45500] h-6 w-8 text-white text-center text-sm font-semibold sm:block hidden">
                  #{actualIndex}
                </p>
                <div className="sm:mt-10 sm:self-center ">
                  <Link
                    to={`/${product.category}/${product.category}/${product.id}`}
                  >
                    <img
                      src={product.image}
                      className="object-contain w-40 h-36"
                    />
                  </Link>
                </div>
                <div className="sm:ml-4">
                  <div className="sm:text-xs sm:mt-2 sm:block hidden">
                    <Link
                      to={`/${product.category}/${product.category}/${product.id}`}
                    >
                      <p className="sm:text-[#007185] sm:font-medium text-wrap">
                        {product.title}
                      </p>
                    </Link>
                  </div>

                  <div className="sm:block hidden">
                    <p className="text-xs">{product.name}</p>
                  </div>
                  <div className="flex mt-2 sm:hidden">
                    <p className="font-semibold">{product.price}</p>
                  </div>

                  <div className="flex items-center mb-1 sm:hidden">
                    <p>
                      <FaCheck className="text-[#FF7510]" />
                    </p>
                    <p className="text-[#1BA1FF] font-bold text-sm"> prime</p>
                  </div>

                  <div className="flex items-center gap-1 ">
                    <div className="flex text-sm sm:text-lg">
                      <IoMdStar className="text-[#ff9a01]" />
                      <IoMdStar className="text-[#ff9a01]" />
                      <IoMdStar className="text-[#ff9a01]" />
                      <IoMdStarOutline className="text-[#ff9a01]" />
                      <IoMdStarHalf className="text-[#ff9a01]" />
                    </div>
                    <div className="text-xs">
                      <p className="sm:text-[#078396]">{product.reviews}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-800 sm:block hidden ">
                      {product.attribute}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#b12704] text-sm sm:block hidden">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {}
      <PaginationButtons
        dataSearch={dataSearch}
        displayedProducts={displayedProducts}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AllProductsPages;
