import React, { useState } from "react";
import Modal from "../components/Modal";
import useCartStore from "../store/zustand/useCartStore";
import AsideCheckoutPage from "./components/AsideCheckoutPage";
const CheckoutPage = () => {
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDueDate, setCardDueDate] = useState("");
  const [cardSecurityCode, setCardSecurityCode] = useState("");

  const [active, setActive] = useState(null);
  const [isTrue, setIsTrue] = useState(false);
  const [isTrueCreditCart, setIsTrueCreditCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [getIndex, setGetIndex] = useState(null);
  const [getIndexCart, setGetIndexCart] = useState(null);

  const addToAddress = useCartStore((state) => state.addToAddress);
  const removeAddress = useCartStore((state) => state.removeAddress);
  const addToCreditCard = useCartStore((state) => state.addToCreditCard);
  const removeCreditCard = useCartStore((state) => state.removeCreditCard);

  const selectedAddressesHistory = useCartStore(
    (state) => state.selectedAddressesHistory
  );

  const selectedCreditCartHistory = useCartStore(
    (state) => state.selectedCreditCartHistory
  );

  const selectedProducts = useCartStore((state) => state.selectedProducts);

  const productsInTheBasket = selectedProducts.filter((product) => {
    if (product.isChecked === true) {
      return product;
    }
  });

  const totalItems = productsInTheBasket.reduce((accumulator, item) => {
    return (accumulator += item.quantity);
  }, 0);

  const countries = [
    "Afganistán",
    "Albania",
    "Alemania",
    "Andorra",
    "Angola",
    "Antigua y Barbuda",
    "Arabia Saudita",
    "Argelia",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaiyán",
    "Bahamas",
    "Bangladés",
    "Barbados",
    "Baréin",
    "Bélgica",
    "Belice",
    "Benín",
    "Bielorrusia",
    "Birmania",
    "Bolivia",
    "Bosnia y Herzegovina",
    "Botsuana",
    "Brasil",
    "Brunéi",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Bután",
    "Cabo Verde",
    "Camboya",
    "Camerún",
    "Canadá",
    "Catar",
    "Chad",
    "Chile",
    "China",
    "Chipre",
    "Ciudad del Vaticano",
    "Colombia",
    "Comoras",
    "Corea del Norte",
    "Corea del Sur",
    "Costa de Marfil",
    "Costa Rica",
    "Croacia",
    "Cuba",
    "Dinamarca",
    "Dominica",
    "Ecuador",
    "Egipto",
    "El Salvador",
    "Emiratos Árabes Unidos",
    "Eritrea",
    "Eslovaquia",
    "Eslovenia",
    "España",
    "Estados Unidos",
    "Estonia",
    "Etiopía",
    "Filipinas",
    "Finlandia",
    "Fiyi",
    "Francia",
    "Gabón",
    "Gambia",
    "Georgia",
    "Ghana",
    "Granada",
    "Grecia",
    "Guatemala",
    "Guyana",
    "Guinea",
    "Guinea-Bisáu",
    "Guinea Ecuatorial",
    "Haití",
    "Honduras",
    "Hungría",
    "India",
    "Indonesia",
    "Irak",
    "Irán",
    "Irlanda",
    "Islandia",
    "Islas Marshall",
    "Islas Salomón",
    "Israel",
    "Italia",
    "Jamaica",
    "Japón",
    "Jordania",
    "Kazajistán",
    "Kenia",
    "Kirguistán",
    "Kiribati",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Letonia",
    "Líbano",
    "Liberia",
    "Libia",
    "Liechtenstein",
    "Lituania",
    "Luxemburgo",
    "Madagascar",
    "Malasia",
    "Malaui",
    "Maldivas",
    "Malí",
    "Malta",
    "Marruecos",
    "Mauricio",
    "Mauritania",
    "México",
    "Micronesia",
    "Moldavia",
    "Mónaco",
    "Mongolia",
    "Montenegro",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Nicaragua",
    "Níger",
    "Nigeria",
    "Noruega",
    "Nueva Zelanda",
    "Omán",
    "Países Bajos",
    "Pakistán",
    "Palaos",
    "Panamá",
    "Papúa Nueva Guinea",
    "Paraguay",
    "Perú",
    "Polonia",
    "Portugal",
    "Reino Unido",
    "República Centroafricana",
    "República Checa",
    "República de Macedonia",
    "República del Congo",
    "República Democrática del Congo",
    "República Dominicana",
    "República Sudafricana",
    "Ruanda",
    "Rumania",
    "Rusia",
    "Samoa",
    "San Cristóbal y Nieves",
    "San Marino",
    "San Vicente y las Granadinas",
    "Santa Lucía",
    "Santo Tomé y Príncipe",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leona",
    "Singapur",
    "Siria",
    "Somalia",
    "Sri Lanka",
    "Suazilandia",
    "Sudán",
    "Sudán del Sur",
    "Suecia",
    "Suiza",
    "Surinam",
    "Tailandia",
    "Tanzania",
    "Tayikistán",
    "Timor Oriental",
    "Togo",
    "Tonga",
    "Trinidad y Tobago",
    "Túnez",
    "Turkmenistán",
    "Turquía",
    "Tuvalu",
    "Ucrania",
    "Uganda",
    "Uruguay",
    "Uzbekistán",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia",
    "Zimbabue",
  ];

  const activeClass = (index) => {
    setActive(index);
  };

  const handleremoveAddress = (getIndex) => {
    removeAddress(getIndex);
    setOpen(false);
  };

  const handleremoveCreditCard = (getIndexCart) => {
    removeCreditCard(getIndexCart);
    setOpen(false);
  };

  const addNewAddress = () => {
    setIsTrue(true);
  };

  const addNewCreditCart = () => {
    setIsTrueCreditCart(true);
  };

  return (
    <div>
      <div className="bg-[#f0f2f2] p-5 text-center border-b border-slate-400">
        <p className="text-2xl font-semibold">
          Checkout ({" "}
          <span className="text-[#008296] text-xl">{totalItems} item</span> )
        </p>
      </div>
      <div className="sm:max-w-[900px] sm:m-auto mt-3 mb-10 pl-4 pr-4 ">
        <div
          className={` ${
            selectedAddressesHistory.length > 0 ? "hidden" : "pt-5 pb-5"
          } `}
        >
          <h3 className="text-[#c45500] text-lg font-semibold">
            1 Enter a new shipping address
          </h3>
        </div>
        <div className="sm:flex gap-5 sm:flex-row flex-col">
          <div className="border rounded-lg border-slate-400 mb-5 p-5 w-[100%]">
            <p
              className={`${
                selectedAddressesHistory.length > 0
                  ? "text-2xl font-semibold border-b border-slate-400"
                  : " hidden"
              } `}
            >
              Shipping Address
            </p>
            <p
              className={`${
                selectedAddressesHistory.length > 0
                  ? " hidden"
                  : "text-2xl font-semibold border-b border-slate-400 "
              } `}
            >
              Add a new address
            </p>

            {(selectedAddressesHistory.length > 0) & (isTrue === false) ? (
              <div>
                <ul className="flex flex-wrap">
                  {selectedAddressesHistory.map((address, index) => {
                    return (
                      <>
                        <li key={index}>
                          <div className="flex text-center gap-1  ">
                            <div
                              onClick={() => activeClass(index)}
                              className={`border rounded-lg border-[#c45500] m-3 p-3 ${
                                active === index ? "bg-[rgb(252,245,238)]" : ""
                              }`}
                            >
                              <div className="flex justify-end">
                                <button
                                  onClick={() => {
                                    setOpen(true), setGetIndex(index, address);
                                  }}
                                  className=" text-xs text-red-500"
                                >
                                  X
                                </button>
                              </div>

                              <p className="text-md font-semibold capitalize">
                                {address.fullName}
                              </p>
                              <p className="text-xs">
                                {" "}
                                {address.addressLine1},
                              </p>
                              <p className="text-xs capitalize">
                                {" "}
                                {address.city},
                              </p>
                              <p className="text-xs"> {address.postalCode},</p>
                              <p className="text-xs capitalize">
                                {" "}
                                {address.country},
                              </p>
                              <p className="text-xs font-semibold">
                                Tel:{address.phoneNumber}.
                              </p>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <Modal
                  getIndex={getIndex}
                  getIndexCart={getIndexCart}
                  open={open}
                  close={() => setOpen(false)}
                >
                  <p className="text-[#8a8a8a] text-lg font-semibold">
                    Are you sure to delete this address?
                  </p>
                  <div className="flex gap-3  justify-center mt-5">
                    <button
                      onClick={() => {
                        handleremoveAddress(getIndex);

                        handleremoveCreditCard(getIndexCart);
                      }}
                      className="bg-transparent text-[#8a8a8a] py-2 px-4 rounded border-2  border-[ #8a8a8a]  hover:bg-[#a0a0a0] hover:text-[#fafafa] transition-colors font-medium text-sm"
                    >
                      Yes
                    </button>

                    <button
                      onClick={() => {
                        setOpen(false);
                      }}
                      className=" bg-transparent text-[#8a8a8a] py-2 px-4 rounded border-2 border-[ #8a8a8a] hover:bg-[#a0a0a0] hover:text-[#fafafa] transition-colors font-medium text-sm"
                    >
                      No
                    </button>
                  </div>
                </Modal>

                <button
                  onClick={() => addNewAddress()}
                  type="submit"
                  className="bg-[#ffd814] text-black py-2 px-4 rounded hover:bg-[#ffd501d4] transition-colors text-xs"
                >
                  Add a new address
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  addToAddress(
                    event,
                    country,
                    fullName,
                    addressLine1,
                    city,
                    postalCode,
                    phoneNumber
                  );
                  if (isTrue) {
                    setIsTrue(false);
                  }
                  setCountry("");
                  setFullName("");
                  setAddressLine1("");
                  setCity("");
                  setPostalCode("");
                  setPhoneNumber("");
                }}
              >
                <div className="mb-2 mt-4 ">
                  <label
                    htmlFor="country"
                    className="block font-medium text-sm"
                  >
                    Country or region
                  </label>
                  <select
                    required
                    id="country"
                    className="form-select mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw]"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="fullName"
                    className="block font-medium text-sm"
                  >
                    Full name (first and last name)
                  </label>
                  <input
                    required
                    type="text"
                    id="fullName"
                    className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw]"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block font-medium text-sm"
                  >
                    Phone number
                  </label>
                  <input
                    required
                    type="text"
                    id="phoneNumber"
                    className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw]"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="addressLine1"
                    className="block font-medium text-sm"
                  >
                    Address
                  </label>
                  <input
                    required
                    type="text"
                    id="addressLine1"
                    className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw]"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <div className="mb-2">
                    <label htmlFor="city" className="block font-medium text-sm">
                      City
                    </label>
                    <input
                      required
                      type="text"
                      id="city"
                      className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[9vw] w-[25vw]"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="postalCode"
                      className="block font-medium text-sm"
                    >
                      Postal Code
                    </label>
                    <input
                      required
                      type="text"
                      id="postalCode"
                      className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[6vw] w-[20vw]"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#ffd814] text-black py-2 px-4 rounded hover:bg-[#ffd501d4] transition-colors text-xs"
                >
                  Use this address
                </button>
              </form>
            )}

            {(selectedCreditCartHistory.length > 0) &
            (isTrueCreditCart === false) ? (
              <div>
                <p className="text-2xl font-semibold border-b border-slate-400 mt-6">
                  My credit and debit cards
                </p>
                <ul>
                  {selectedCreditCartHistory.map((card, index) => {
                    const n = 4;
                    return (
                      <>
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
                                  setOpen(true), setGetIndexCart(index);
                                }}
                                className=" text-xs text-red-500"
                              >
                                X
                              </button>
                            </div>
                            <div className="flex items-center text-center gap-2">
                              <img
                                src={"../../public/images/Vector.png"}
                                alt="logo diners Club"
                                className="sm:w-7  w-[15vw] object-contain"
                              />
                              <p className="text-xs font-semibold capitalize">
                                {" "}
                                {card.cardName}{" "}
                              </p>
                              <p className="text-xs ">which ends in</p>
                              <p className="text-xs font-semibold  ">
                                {card.cardNumber /* .slice(-n) */}
                              </p>
                              <p className="text-xs ">Expires on</p>
                              <p className="text-xs font-semibold ">
                                {card.cardDueDate}
                              </p>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>

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
                onSubmit={(event) => {
                  addToCreditCard(
                    event,
                    cardNumber,
                    cardName,
                    cardDueDate,
                    cardSecurityCode
                  );
                  if (isTrueCreditCart) {
                    setIsTrueCreditCart(false);
                  }
                  setCardNumber("");
                  setCardName("");
                  setCardDueDate("");
                  setCardSecurityCode("");
                }}
              >
                <div className="">
                  {selectedCreditCartHistory.length === 0 ? (
                    <>
                      <div className="border-b border-t border-slate-400 pb-2 pt-2 mt-5">
                        <p className="text-xl font-semibold ">
                          2 Payment method
                        </p>
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

                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="phoneNumber"
                      className="block font-medium sm:text-sm text-xs"
                    >
                      Card Number
                    </label>
                    <input
                      required
                      autoComplete="off"
                      type="text"
                      id="cardNumber"
                      className="form-input border border-gray-300 text-sm text-center"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="phoneNumber"
                      className="block font-medium sm:text-sm text-xs"
                    >
                      Name on the card
                    </label>
                    <input
                      required
                      type="text"
                      id="cardName"
                      className="form-input border border-gray-300 text-sm text-center"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                    />
                  </div>
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="phoneNumber"
                      className="block font-medium sm:text-sm text-xs "
                    >
                      Due date
                    </label>
                    <input
                      required
                      type="date"
                      id="cardDate"
                      value="2024-05-01"
                      min="2024-05-01"
                      max="2024-12-31"
                      className="form-input border border-gray-300 text-sm text-center"
                      onChange={(e) => setCardDueDate(e.target.value)}
                    />
                  </div>
                  <div className="flex text-center gap-3 mt-5">
                    <label
                      htmlFor="phoneNumber"
                      className="block font-medium sm:text-sm text-xs "
                    >
                      Security code (CVV)
                    </label>
                    <input
                      required
                      type="text"
                      id="cardName"
                      className="form-input border border-gray-300 text-sm text-center sm:w-[3vw] w-[15vw]"
                      value={cardSecurityCode}
                      onChange={(e) => setCardSecurityCode(e.target.value)}
                    />
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
          <div>
            <AsideCheckoutPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
