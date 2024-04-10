import "swiper/css";

import { useContext } from "react";
import { useParams } from "react-router-dom";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ProductsContext } from "../../contextProducts/ProductsContext";
import MiniCaroselProduct from "./MiniCaroselProduct";

const CarouselProducts = () => {
  const { productItem, details } = useParams();

  const { productData } = useContext(ProductsContext);

  return (
    <div className=" border-t border-b border-slate-400 sm:p-6 p-2 sm:mb-20 mb-5">
      <h3 className="text-lg  mb-3 font-semibold">
        Customers who bought this product also bought
      </h3>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {productData.map(
            (product) =>
              product.category === productItem &&
              details !== product.id && (
                <SwiperSlide key={product.id}>
                  <div>
                    <MiniCaroselProduct product={product} />
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselProducts;
