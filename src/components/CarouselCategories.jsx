import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselCategories = () => {
  return (
    <div className=" bg-white m-3 ">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={{ Navigation }}
      />

      <SwiperSlide>
        <img src={"../../public/images/category_0.jpg"} />
      </SwiperSlide>
    </div>
  );
};

export default CarouselCategories;
