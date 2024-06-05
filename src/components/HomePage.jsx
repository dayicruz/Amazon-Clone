import "animate.css";
import React, { useContext, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../contextProducts/ProductsContext";
import BackToTop from "./BackToTop";
import Carousel from "./Carousel";
import CarouselCategories from "./CarouselCategories";
import CarouselProducts from "./CarouselProducts";
import HomePageCards from "./HomePageCards";
const HomePage = () => {
  const backToTop = useRef();
  const { productData } = useContext(ProductsContext);
  const navigate = useNavigate();
  function randomSort() {
    return Math.random() - 0.5;
  }

  const product = productData
    .filter(
      (product) =>
        product.category === "books" ||
        product.category === "fitness" ||
        product.category === "mobile"
    )
    .sort(randomSort);

  const click = (productId, product) => {
    navigate(`/${product.category}/${product.category}/${productId}`);
  };
  return (
    <main
      id="top"
      ref={backToTop}
      className="bg-amazonclone-background animate__animated animate__fadeIn animate__faster"
    >
      <div className="bg-amazonclone-background 2xl:min-w-[1000px] 2xl:max-w-[1500px] 2xl:m-auto  ">
        <Carousel />

        <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 -mt-[12vw] lg:-mt-[140px] ">
          {product.map(
            (product, index) =>
              index < 8 && (
                <div
                  className="z-10 m-2 2xl:m-6"
                  onClick={() => click(product.id, product)}
                  key={product.id}
                >
                  <HomePageCards
                    title={"We Have a Surprise for you"}
                    img={product.image}
                  />
                </div>
              )
          )}
        </div>
        <CarouselProducts />
        <CarouselCategories />
        <section className=" pb-6">
          <img
            alt="imagen banner"
            className="w-[80vw] h-[30vw] m-auto object-fill 2xl:w-[]"
            src={"../../public/images/banner_image.jpg"}
          />
        </section>
      </div>
      <BackToTop />
    </main>
  );
};

export default HomePage;
