import React from "react";
import ReactDom from "react-dom";

const Modal = ({ children, openModal, close }) => {
  if (!openModal) return null;

  const onClose = () => {
    close();

    document.body.style.overflow = "auto";
  };

  if (openModal) {
    document.body.style.overflow = "hidden";
  }

  const handleLayoutClick = (event) => {
    if (event.target.classList.contains("layout")) {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50 layout"
        onClick={handleLayoutClick}
      ></div>
      <div className="absolute bg-[#fafafa] rounded-md p-5 z-50">
        <div className="text-right">
          <button
            onClick={onClose}
            className="text-[#8a8a8a] font-bold text-2xl hover:text-gray-400"
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

export default Modal;
