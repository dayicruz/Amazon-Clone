import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CarouselCategories = () => {
  return (
    <div className="bg-white m-3 2xl:m-6 2xl:p-4 p-3">
      <div className="font-bold text-lg ">Shop by Category</div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={true}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 3,
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
        <SwiperSlide>
          <img src={"../../public/images/category_0.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/category_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/category_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/category_3.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/category_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/category_5.jpg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategories;
