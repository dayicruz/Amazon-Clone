import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const PaginationButtons = ({
  setCurrentPage,
  currentPage,
  totalPages,
  dataSearch,
}) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
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

  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  if (dataSearch.length < 12) return;
  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton ? (
            <span className="w-10 h-10 flex items-center justify-center rounded-md bg-amazonclone-background">
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className="w-10 h-10 flex items-center justify-center rounded-md bg-amazonclone-background  mr-4">
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border-solid border-[#EAEDED] hover:bg-[#EAEDED] w-10 h-10 flex items-center justify-center rounded-md mr-4"
        activeClassName="bg-amazonclone-yellow text-white"
      />
    </motion.div>
  );
};

export default PaginationButtons;
