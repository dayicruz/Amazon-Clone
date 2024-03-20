import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const Starts = () => {
  return (
    <div className="flex items-center gap-1 ">
      <div className="flex text-sm sm:text-lg text-xl">
        <IoMdStar className="text-[#ff9a01]" />
        <IoMdStar className="text-[#ff9a01]" />
        <IoMdStar className="text-[#ff9a01]" />
        <IoMdStarOutline className="text-[#ff9a01]" />
        <IoMdStarHalf className="text-[#ff9a01]" />
      </div>
      <div className="text-sm">
        <p className="sm:text-[#078396]">9.101</p>
      </div>
    </div>
  );
};

export default Starts;
