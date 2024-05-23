import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import useCartStore from "../store/zustand/useCartStore";

const CreditCartCheckoutPage = () => {
  const [active, setActive] = useState(null);
  const [isTrueCreditCart, setIsTrueCreditCart] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [getIndexCart, setGetIndexCart] = useState(null);

  const addToCreditCard = useCartStore((state) => state.addToCreditCard);
  const removeCreditCard = useCartStore((state) => state.removeCreditCard);

  const selectedCreditCartHistory = useCartStore(
    (state) => state.selectedCreditCartHistory
  );

  const [data, setData] = useState("");

  const activeClass = (index) => {
    setActive(index);
  };

  const onClose = () => {
    setOpenModal(false);

    document.body.style.overflow = "auto";
  };

  const handleRemoveCreditCard = (getIndexCart) => {
    removeCreditCard(getIndexCart);
    setOpenModal(false);
  };

  const addNewCreditCart = () => {
    setIsTrueCreditCart(true);
  };

  const handleAddToCreditCard = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setData(data);

    addToCreditCard(event, data);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="sm:flex gap-5 sm:flex-row flex-col">
        <div className="border rounded-lg border-slate-400 mb-5 p-5 w-[100%]">
          {(selectedCreditCartHistory.length > 0) &
          (isTrueCreditCart === false) ? (
            <div>
              <p className="text-xl sm:text-2xl  font-semibold border-b border-slate-400 mt-6">
                My credit and debit cards
              </p>

              {selectedCreditCartHistory.map((card, index) => {
                const n = 4;
                return (
                  <ul>
                    <li key={index}>
                      <div
                        onClick={() => activeClass(index)}
                        className={`mt-6 border rounded-lg border-[FBD8B4] m-3 p-3 ${
                          active === index ? "bg-[rgb(252,245,238)]" : ""
                        }`}
                      >
                        <div className="flex justify-end">
                          <button
                            onClick={() => {
                              setOpenModal(true), setGetIndexCart(index);
                            }}
                            className=" text-xs text-red-500"
                          >
                            X
                          </button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center text-center gap-2">
                          <img
                            src={"../../public/images/Vector.png"}
                            alt="logo diners Club"
                            className="sm:w-7  w-[15vw] object-contain"
                          />
                          <p className="text-xs font-semibold capitalize">
                            {" "}
                            {card.cardName}{" "}
                          </p>
                          <div className="flex gap-1 sm:flex-row">
                            <p className="text-xs ">which ends in</p>
                            <p className="text-xs font-bold  ">
                              {card.cardNumber.slice(-n)}
                            </p>
                          </div>
                          <div className="flex gap-1 sm:flex-row">
                            <p className="text-xs ">Expires on</p>
                            <p className="text-xs font-bold ">
                              {card.cardDueDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                );
              })}

              <Modal
                setGetIndexCart={setGetIndexCart}
                openModal={openModal}
                close={onClose}
              >
                <p className="text-[#8a8a8a] text-lg font-semibold">
                  Are you sure to delete this address?
                </p>
                <div className="flex gap-3  justify-center mt-5">
                  <button
                    onClick={() => {
                      handleRemoveCreditCard(getIndexCart), onClose();
                    }}
                    className="bg-transparent text-[#8a8a8a] py-2 px-4 rounded border-2  border-[ #8a8a8a]  hover:bg-[#a0a0a0] hover:text-[#fafafa] transition-colors font-medium text-sm"
                  >
                    Yes
                  </button>

                  <button
                    onClick={() => onClose()}
                    className=" bg-transparent text-[#8a8a8a] py-2 px-4 rounded border-2 border-[ #8a8a8a] hover:bg-[#a0a0a0] hover:text-[#fafafa] transition-colors font-medium text-sm"
                  >
                    No
                  </button>
                </div>
              </Modal>

              <button
                onClick={() => addNewCreditCart()}
                type="submit"
                className="bg-[#ffd814] text-black py-2 px-4 rounded hover:bg-[#ffd501d4] transition-colors text-xs"
              >
                {" "}
                Add a new Card
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit((data) => {
                addToCreditCard(data);
                if (isTrueCreditCart) {
                  setIsTrueCreditCart(false);
                }
                reset();
              })}
            >
              <div className="">
                {selectedCreditCartHistory.length === 0 ? (
                  <>
                    <div className="border-b border-t border-slate-400 pb-2 pt-2 mt-5">
                      <p className="text-xl font-semibold ">2 Payment method</p>
                    </div>

                    <div className=" bg-amazonclone-background pt-3 pb-3">
                      <p className="text-sm font-semibold ">
                        Add a credit or debit card
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-2xl font-semibold border-b border-slate-400 mt-6">
                    Your Card
                  </p>
                )}

                <div className="flex flex-col  gap-1">
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="cardNumber"
                      className="block font-medium sm:text-sm text-xs"
                    >
                      Card Number
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="cardNumber"
                      {...register("cardNumber", {
                        required: "This is required",
                        minLength: { value: 16, message: "Min Length is 16" },
                        maxLength: { value: 18, message: "Max Length is 18" },
                        pattern: {
                          value:
                            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                          message:
                            "The phone number must only contain only numbers",
                        },
                      })}
                      className="form-input border border-gray-300 text-sm pl-1"
                      value={data.cardNumber}
                    />
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-[11px] ">
                      {errors.cardNumber?.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  gap-1">
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="cardName"
                      className="block font-medium sm:text-sm text-xs"
                    >
                      Name on the card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      {...register("cardName", {
                        required: "This is required",
                        minLength: { value: 3, message: "Min Length is 3" },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "The name must only contain only letters",
                        },
                      })}
                      className="form-input border border-gray-300 text-sm pl-1  w-36"
                      value={data.cardName}
                    />
                  </div>

                  <div>
                    <p className="text-red-600 font-semibold text-[11px] ">
                      {errors.cardName?.message}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  gap-1">
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="cardDate"
                      className="block font-medium sm:text-sm text-xs "
                    >
                      Due date
                    </label>
                    <input
                      type="date"
                      id="cardDueDate"
                      {...register("cardDueDate", {
                        required: "This is required",
                      })}
                      min="2024-05-01"
                      max="2030-12-31"
                      className="form-input border border-gray-300 text-sm pl-1"
                      value={data.cardDueDate}
                    />
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-[11px]">
                      {errors.cardDueDate?.message}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col  gap-1">
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="cardName"
                      className="block font-medium sm:text-sm text-xs "
                    >
                      Security code (CVV)
                    </label>
                    <input
                      type="text"
                      id="cardSecurityCode"
                      {...register("cardSecurityCode", {
                        required: "This is required",
                        minLength: {
                          value: 3,
                          message: "Min Length is 3",
                        },
                        maxLength: { value: 3, message: "Max Length is 3" },
                        pattern: {
                          value:
                            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                          message:
                            "The phone number must only contain only numbers",
                        },
                      })}
                      className="form-input border border-gray-300 text-sm pl-1 sm:w-[3vw] w-[15vw]"
                      value={data.cardSecurityCode}
                    />
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-[11px]">
                      {errors.cardSecurityCode?.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex sm:justify-end sm:mt-0 mt-5 ">
                <p className="text-xs">
                  Amazon accepts most credit and debit cards:
                </p>
              </div>
              <div className="flex sm:justify-end gap-3 items-center mt-2">
                <img
                  src={"../../public/images/logos_dinersclub.png"}
                  alt="logo diners Club"
                  className="sm:w-16  w-[18vw] object-contain"
                />
                <img
                  src={"../../public/images/logos_mastercard.png"}
                  alt="logo diners Club"
                  className="sm:w-10 w-[8vw] object-contain"
                />

                <img
                  src={"../../public/images/Vector.png"}
                  alt="logo diners Club"
                  className="sm:w-10 w-[8vw] object-contain"
                />
              </div>

              <div className="flex gap-1 mt-4">
                <button
                  type="submit"
                  className="bg-[#ffd814] text-black py-1 px-3 rounded-md hover:bg-[#ffd501d4] transition-colors text-xs font-semibold"
                >
                  Add your card
                </button>
              </div>
            </form>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreditCartCheckoutPage;
