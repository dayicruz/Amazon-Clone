import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import useCartStore from "../store/zustand/useCartStore";

const AddressCheckoutPage = () => {
  const [isActiveClass, setIsActiveClass] = useState(null);
  const [isTrue, setIsTrue] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [getIndex, setGetIndex] = useState(null);

  const addToAddress = useCartStore((state) => state.addToAddress);
  const removeAddress = useCartStore((state) => state.removeAddress);

  const selectedAddressesHistory = useCartStore(
    (state) => state.selectedAddressesHistory
  );

  const [data, setData] = useState("");

  const handleAddToCreditCard = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setData(data);

    addToAddress(event, data);
  };

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
    setIsActiveClass(index);
  };
  const onClose = () => {
    setOpenModal(false);

    document.body.style.overflow = "auto";
  };
  const handleremoveAddress = (getIndex) => {
    removeAddress(getIndex);
    setOpenModal((prev) => !prev);
  };

  const addNewAddress = () => {
    setIsTrue((prev) => !prev);
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
              <div className="flex flex-wrap">
                {selectedAddressesHistory.map((address, index) => {
                  return (
                    <div>
                      <ul>
                        <li key={index}>
                          <div className="flex text-center gap-1  ">
                            <div
                              onClick={() => activeClass(index)}
                              className={`border rounded-lg border-[#c45500] m-3 p-3 ${
                                isActiveClass === index
                                  ? "bg-[rgb(252,245,238)]"
                                  : ""
                              }`}
                            >
                              <div className="flex justify-end">
                                <button
                                  onClick={() => {
                                    setOpenModal((prev) => !prev),
                                      setGetIndex(index, address);
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
                      </ul>
                    </div>
                  );
                })}
              </div>

              <Modal getIndex={getIndex} openModal={openModal} close={onClose}>
                <p className="text-[#8a8a8a] text-lg font-semibold">
                  Are you sure to delete this address?
                </p>
                <div className="flex gap-3  justify-center mt-5">
                  <button
                    onClick={() => {
                      handleremoveAddress(getIndex), onClose();
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
                onClick={() => addNewAddress()}
                type="submit"
                className="bg-[#ffd814] text-black py-2 px-4 rounded hover:bg-[#ffd501d4] transition-colors text-xs"
              >
                Add a new address
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit((data) => {
                addToAddress(data);
                if (isTrue) {
                  setIsTrue(false);
                }
                reset();
              })}
            >
              <div className="mb-2 mt-4 ">
                <label htmlFor="country" className="block font-medium text-sm">
                  Country or region
                </label>
                <select
                  id="country"
                  {...register("country", {
                    required: "This is required",
                  })}
                  className="form-select mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw]"
                  value={data.country}
                >
                  <option value="">Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <p className="text-red-600 font-semibold text-[11px]">
                  {errors.country?.message}
                </p>
              </div>

              <div className="mb-2">
                <label htmlFor="fullName" className="block font-medium text-sm">
                  Full name (first and last name)
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", {
                    required: "This is required",
                    minLength: { value: 3, message: "Min Length is 3" },
                    pattern: {
                      value: /^([a-z']+(-| )?)+$/i,
                      message: "The name must only contain only letters",
                    },
                  })}
                  className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw] pl-1"
                  value={data.fullName}
                />
                <p className="text-red-600 font-semibold text-[11px]">
                  {errors.fullName?.message}
                </p>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="phoneNumber"
                  className="block font-medium text-sm"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: "This is required",
                    minLength: {
                      value: 8,
                      message: "Min Length is 8",
                    },
                    maxLength: { value: 15, message: "Max Length is 15" },
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                      message:
                        "The phone number must only contain only numbers",
                    },
                  })}
                  className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw] pl-1"
                  value={data.phoneNumber}
                />
                <p className="text-red-600 font-semibold text-[11px]">
                  {errors.phoneNumber?.message}
                </p>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="addressLine1"
                  className="block font-medium text-sm"
                >
                  Address
                </label>
                <input
                  {...register("addressLine1", {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "Min Length is 3",
                    },
                  })}
                  type="text"
                  id="addressLine1"
                  className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[25vw] pl-1"
                  value={data.addressLine1}
                />
                <p className="text-red-600 font-semibold text-[11px]">
                  {errors.addressLine1?.message}
                </p>
              </div>

              <div className="flex gap-2">
                <div className="mb-2">
                  <label htmlFor="city" className="block font-medium text-sm">
                    City
                  </label>
                  <input
                    {...register("city", {
                      required: "This is required",
                      minLength: {
                        value: 3,
                        message: "Min Length is 3",
                      },
                    })}
                    type="text"
                    id="city"
                    className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[9vw] w-[25vw] pl-1"
                    value={data.city}
                  />
                  <p className="text-red-600 font-semibold text-[11px]">
                    {errors.city?.message}
                  </p>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="postalCode"
                    className="block font-medium text-sm"
                  >
                    Postal Code
                  </label>
                  <input
                    {...register("postalCode", {
                      required: "This is required",
                      minLength: {
                        value: 3,
                        message: "Min Length is 3",
                      },
                    })}
                    type="text"
                    id="postalCode"
                    className="form-input mt-1 border border-gray-300 rounded-md text-sm sm:w-[6vw] w-[20vw] pl-1"
                    value={data.postalCode}
                  />
                  <p className="text-red-600 font-semibold text-[11px]">
                    {errors.postalCode?.message}
                  </p>
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AddressCheckoutPage;
