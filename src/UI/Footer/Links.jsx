import React from "react";

const Links = () => {
  return (
    <div className="bg-amazonclone  ">
      <div className="sm:grid sm:grid-cols-4 sm:max-w-[1000px] sm:m-auto sm:gap-3 sm:p-10 hidden">
        <div>
          <h3 className="text-[13px] font-bold">Amazon Music</h3>
          <p className="text-[10px] font-light">Stream millions of songs</p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold">IberLibro</h3>
          <p className="text-[10px] font-light">Books, art & collectibles</p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold"> Amazon Web Services</h3>
          <p className="text-[10px] font-light">
            Amazon Cloud Computing Services
          </p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold">Kindle Direct Publishing</h3>
          <p className="text-[10px] font-light">
            Publish your book on paper and digitally independently
          </p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold">Amazon Second hand</h3>
          <p className="text-[10px] font-light">
            Products returned and like new
          </p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold">Shopbop</h3>
          <p className="text-[10px] font-light">Designer fashion brands</p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold"> Amazon Business</h3>
          <p className="text-[10px] font-light">Service for business clients</p>
        </div>
        <div>
          <h3 className="text-[13px] font-bold"> Audible</h3>
          <p className="text-[10px] font-light">
            Enjoy thousands of original audiobooks and podcasts
          </p>
        </div>
      </div>
      <div className="text-white flex text-[10px] w-full p-5 justify-center flex-wrap sm:p-0 ">
        <div className="pl-3">Conditions of Use and Salea</div>
        <div className="pl-3">Notice of Privacy</div>
        <div className="pl-3">Legal area</div>
        <div className="pl-3">Cookies</div>
        <div className="pl-3">Interest-based advertising</div>
      </div>
    </div>
  );
};

export default Links;
