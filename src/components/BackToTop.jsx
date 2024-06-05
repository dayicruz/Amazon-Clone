import React from "react";
import { FaArrowUp } from "react-icons/fa";
const BackToTop = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-5">
      <div>
        <FaArrowUp />
      </div>
      <div>
        <button
          onClick={() => {
            window.scroll({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="bg-[#ff8614] text-white py-1 px-3 rounded-md hover:bg-[#ff9e01d4] transition-colors text-xs font-semibold"
          href="#"
        >
          Back to top
        </button>
      </div>
    </section>
  );
};

export default BackToTop;
