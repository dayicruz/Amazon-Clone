import { FaMagnifyingGlass } from "react-icons/fa6";
const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm ">
          <option>All</option>
          <option>Books</option>
          <option>Clothes</option>
          <option>Fitnes</option>
          <option>Technology</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black focus:outline-none  focus:border-[#FEBD69] "
          type="text"
        />
        <button className="w-[45px]">
          <FaMagnifyingGlass className="text-black h-[27px] m-auto " />
        </button>
      </div>
    </div>
  );
};

export default Search;
