import { useContext } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductsContext } from "../contextProducts/ProductsContext";

const CarouselProducts = () => {
  const { productData } = useContext(ProductsContext);

  function randomSort() {
    return Math.random() - 0.5;
  }

  const product = productData
    .filter((product) => product.category === "books")
    .sort(randomSort);

  return (
    <div className="bg-white m-3 2xl:m-6 2xl:p-6 p-3 ">
      <div className="font-bold  text-lg  ">Best Sellers</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {product.map(
          (product, index) =>
            index < 6 && (
              <SwiperSlide
                key={product.id}
                className=" h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]"
              >
                <Link to={`/books/books/${product.id}`}>
                  <img src={product.image} />
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default CarouselProducts;
/*     {
      Array.from({ length: 9 }, (_, i) => (
        <SwiperSlide key={i}>
          <img src={`../../public/images/product_${i}_small.jpg`} />
        </SwiperSlide>
      ));
    } */
