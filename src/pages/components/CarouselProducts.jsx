import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MiniCaroselProduct from "./MiniCaroselProduct";

const CarouselProducts = () => {
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
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <MiniCaroselProduct />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselProducts;
