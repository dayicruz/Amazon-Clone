import { FaCheck } from "react-icons/fa6";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const MiniCaroselProduct = ({ product }) => {
  const { productItem } = useParams();

  return (
    <div>
      <div>
        <div className=" ml-2 flex flex-col justify-between sm:rounded sm:border sm:border-slate-300  items-start w-[40vw] sm:w-[40vw]  md:w-[28vw]  lg:w-[15vw]  xl:w-[15vw]  2xl:w-[12vw] min-h-[35vh]">
          <div className="sm:mt-5 sm:self-center ">
            <Link
              to={
                product.category === productItem &&
                `/${productItem}/${productItem}/${product.id}`
              }
            >
              <img src={product.image} className="object-contain w-44 h-40" />
            </Link>
          </div>
          <div className="sm:ml-4">
            <div className="sm:text-xs text-sm sm:mt-2 ">
              <Link
                to={
                  product.category === productItem &&
                  `/${productItem}/${productItem}/${product.id}`
                }
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
                {" "}
                {product.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCaroselProduct;
