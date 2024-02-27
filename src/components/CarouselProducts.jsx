import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselProducts = () => {
  return (
    <div className="bg-white m-3">
      <div className="font-bold text-xl p-3 ">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={"../../public/images/product_0_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_1_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_2_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_3_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_4_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_5_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_6_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_7_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../../public/images/product_8_small.jpg"} />
        </SwiperSlide>
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
