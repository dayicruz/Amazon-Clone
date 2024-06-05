import React from "react";

const Languages = () => {
  return (
    <section className="bg-amazonclone-light_blu sm:flex sm:items-center sm:justify-center sm:flex-col sm:gap-3 sm:p-4 hidden">
      <img
        className="sm:w-[70px] sm:h-[30px] object-contain w-[75px] h-[30px]"
        src={"./images/amazon.jpg"}
        alt="logo amazon"
      />
      <ul className="flex gap-3 sm:max-w-[1000px] sm:m-auto sm:p-4 flex-wrap justify-center">
        <li
          title="Australia"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Australia
        </li>
        <li
          title="Germany"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Germany
        </li>
        <li
          title="Brazil"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Brazil
        </li>
        <li
          title="Canada"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Canada
        </li>
        <li
          title="China"
          className="text-[10px] hover:underline cursor-pointer"
        >
          China
        </li>
        <li title="USA" className="text-[10px] hover:underline cursor-pointer">
          USA
        </li>
        <li
          title="France"
          className="text-[10px] hover:underline cursor-pointer"
        >
          France
        </li>
        <li
          title="India"
          className="text-[10px] hover:underline cursor-pointer"
        >
          India
        </li>
        <li
          title="Italy"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Italy
        </li>
        <li
          title="Japan"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Japan
        </li>
        <li
          title="Mexico"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Mexico
        </li>
        <li
          title="Netherlands"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Netherlands
        </li>
        <li
          title="Poland"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Poland
        </li>
        <li
          title="United Arab Emirates"
          className="text-[10px] hover:underline cursor-pointer"
        >
          United Arab Emirates
        </li>
        <li
          title="United Kingdom"
          className="text-[10px] hover:underline cursor-pointer"
        >
          United Kingdom
        </li>
        <li
          title="Singapore"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Singapore
        </li>
        <li
          title="Türkiye"
          className="text-[10px] hover:underline cursor-pointer"
        >
          Türkiye
        </li>
      </ul>
    </section>
  );
};

export default Languages;
