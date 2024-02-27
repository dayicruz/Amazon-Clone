import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white ">
      <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[50%]"
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 6000,
        }}
      >
        <SwiperSlide>
          <img src={"../../public/images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/carousel_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src="../../public/images/carousel_vid.mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/carousel_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/carousel_5.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900 " />
    </div>
  );
};

export default Carousel;
