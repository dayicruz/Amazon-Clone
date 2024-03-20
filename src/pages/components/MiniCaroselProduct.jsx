import { FaCheck } from "react-icons/fa6";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const MiniCaroselProduct = () => {
  const { productItem } = useParams();
  return (
    <div>
      <div>
        <div className=" ml-2 flex flex-col justify-center sm:rounded sm:border sm:border-slate-300  items-start w-[40vw] sm:w-[40vw]  md:w-[28vw]  lg:w-[15vw]  xl:w-[15vw]  2xl:w-[12vw]">
          <div className="sm:mt-5 sm:self-center ">
            <img
              src={"../../public/images/product_1_small.jpg"}
              className="object-cover w-22 sm:w-28"
            />
          </div>

          <div className="sm:ml-4">
            <div className="sm:text-xs text-sm sm:mt-2 ">
              <Link to={`/product/${productItem}/guiness`}>
                <p className="sm:text-[#007185] sm:font-medium text-wrap">
                  Guinness World Records 2023
                </p>
              </Link>
            </div>

            <div className="sm:block hidden">
              <p className="text-xs">Dayana Cruz Gonzalez</p>
            </div>
            <div className="flex mt-2 sm:hidden">
              <p className="font-semibold">37,</p>
              <p className="text-xs items-start ">90</p>
              <p className="text-xs ml-[2px]">$</p>
            </div>

            <div className="flex items-center mb-1 sm:hidden">
              <p>
                <FaCheck className="text-[#FF7510]" />
              </p>
              <p className="text-[#1BA1FF] font-bold text-sm"> prime</p>
            </div>

            <div className="hidden">
              <p>
                aspernatur aliquid ea necessitatibus. Ad alias deleniti quidem
                consectetur illo?
              </p>
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
                <p className="sm:text-[#078396]">9.101</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-800 sm:block hidden ">
                Tapa Blanca
              </p>
            </div>

            <div>
              <p className="text-[#b12704] text-sm sm:block hidden">18,90 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCaroselProduct;
