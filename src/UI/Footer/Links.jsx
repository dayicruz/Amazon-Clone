import React from "react";

const Links = () => {
  return (
    <section className="bg-amazonclone  ">
      <div className="sm:grid sm:grid-cols-4 sm:max-w-[1000px] sm:m-auto sm:gap-3 sm:p-10 hidden">
        <ul>
          <li
            title="Amazon Music"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            Amazon Music
          </li>
          <li
            title="Stream millions of songs"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Stream millions of songs
          </li>
        </ul>
        <ul>
          <li
            title="berLibro"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            IberLibro
          </li>
          <li
            title="Books, art & collectibles"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Books, art & collectibles
          </li>
        </ul>
        <ul>
          <li
            title=" Amazon Web Services"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            {" "}
            Amazon Web Services
          </li>
          <li
            title=" Amazon Cloud Computing Services"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Amazon Cloud Computing Services
          </li>
        </ul>
        <ul>
          <li
            title=" Kindle Direct Publishing"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            Kindle Direct Publishing
          </li>
          <li
            title="Publish your book on paper and digitally independently"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Publish your book on paper and digitally independently
          </li>
        </ul>
        <ul>
          <li
            title="Amazon Second hand"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            Amazon Second hand
          </li>
          <li
            title="roducts returned and like new"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Products returned and like new
          </li>
        </ul>
        <ul>
          <li
            title="Shopbop"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            Shopbop
          </li>
          <li
            title="Designer fashion brands"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Designer fashion brands
          </li>
        </ul>
        <ul>
          <li
            title="Amazon Business"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            {" "}
            Amazon Business
          </li>
          <li
            title="Service for business clients"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Service for business clients
          </li>
        </ul>
        <ul>
          <li
            title="Audible"
            className="text-[13px] font-bold hover:underline cursor-pointer"
          >
            {" "}
            Audible
          </li>
          <li
            title="Enjoy thousands of original audiobooks and podcasts"
            className="text-[10px] font-light hover:underline cursor-pointer"
          >
            Enjoy thousands of original audiobooks and podcasts
          </li>
        </ul>
      </div>
      <ul className="text-white flex text-[10px] w-full p-5 justify-center flex-wrap sm:p-0 ">
        <li
          title="Conditions of Use and Salea"
          className="pl-3 hover:underline cursor-pointer"
        >
          Conditions of Use and Salea
        </li>
        <li
          title="Notice of Privacy"
          className="pl-3 hover:underline cursor-pointer"
        >
          Notice of Privacy
        </li>
        <li title=" Legal area" className="pl-3 hover:underline cursor-pointer">
          Legal area
        </li>
        <li title=" Cookies" className="pl-3 hover:underline cursor-pointer">
          Cookies
        </li>
        <li
          title="Interest-based advertising"
          className="pl-3 hover:underline cursor-pointer"
        >
          Interest-based advertising
        </li>
      </ul>
    </section>
  );
};

export default Links;
