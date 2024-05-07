import ReactDom from "react-dom";

const Modal = ({ children, open, close }) => {
  if (!open) return null;

  const onClose = () => {
    close();

    document.body.style.overflow = "auto";
  };

  if (open) {
    document.body.style.overflow = "hidden";
  }

  const handleLayoutClick = (event) => {
    if (event.target.classList.contains("layout")) {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <div onClick={handleLayoutClick}>
      <Layout />
      <div className="absolute top-1/4 left-72 z-50 pl-5 pr-5 pb-5 translate-x-1/2 translate-y-1/2 bg-[#fafafa] rounded-md">
        <div className="text-right">
          <button
            onClick={onClose}
            className=" text-[#8a8a8a] font-bold text-2xl hover:text-gray-400"
          >
            x
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

const Layout = () => {
  return (
    <div className="absolute inset-0 bg-black opacity-50 z-50 layout"></div>
  );
};

export default Modal;
