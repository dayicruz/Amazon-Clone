import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const CheckoutModal = ({ onClose, onCloseModal }) => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);

  const sendOnClick = () => {
    setSending(true);
    setShowCloseButton(false);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-12 rounded-lg shadow-lg relative">
        {showCloseButton && (
          <button
            onClick={onCloseModal}
            className="absolute top-0 right-0 m-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <FaTimes />
          </button>
        )}
        {sending && (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ffd814] mr-3"></div>
            <p className="text-lg">Sending...</p>
          </div>
        )}
        {success && (
          <div className="flex items-center flex-col">
            <div className="flex text-center text-2xl">
              <FaCheck className="text-blue-500" />
            </div>
            <div>
              <p className="text-blue-500 text-2xl">Successful payment</p>
            </div>
          </div>
        )}
        {!sending && !success && (
          <button
            onClick={sendOnClick}
            className="bg-[#ffd814] text-black py-2 px-4 rounded hover:bg-[#ffd501d4] transition-colors text-xs"
          >
            Confirm payment
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
