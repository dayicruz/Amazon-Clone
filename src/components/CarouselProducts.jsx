import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselProducts = () => {
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
        <SwiperSlide className=" h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_0_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_1_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_2_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_3_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_4_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_5_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_6_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
          <img src={"../../public/images/product_7_small.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="h-[40vw] sm:h-[15vw] md:h-[25vw] lg:h-[20vw] xl:h-[20vw] 2xl:h-[15vw]">
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
