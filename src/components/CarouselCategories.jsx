import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselCategories = () => {
  return (
    <div className="bg-white m-3">
      <div className="font-bold text-xl p-3 ">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
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
