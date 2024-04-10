import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const PaginationButtons = () => {
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center rounded-md bg-amazonclone-background">
            <BsChevronRight />
          </span>
        }
        //onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={5}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center rounded-md bg-amazonclone-background  mr-4">
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border-solid border-[#EAEDED] hover:bg-[#EAEDED] w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-amazonclone-yellow text-white"
      />
    </motion.div>
  );
};

export default PaginationButtons;
