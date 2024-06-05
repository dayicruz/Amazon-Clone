import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const CarouselCategories = () => {
  return (
    <section className="bg-white m-3 2xl:m-6 2xl:p-4 p-3">
      <h3 className="font-bold text-lg ">Shop by Category</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Link to={`/category/books`}>
            <img className=" w-40" src={"./images/book (1).png"} />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={`/category/shoes`}>
            <img className="w-40" src={"./images/shoes2.png"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/category/fitness"}>
            <img className=" w-40" src={"./images/pesas.png"} />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/category/mobile"}>
            <img className="w-40" src={"./images/mobile.png"} />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CarouselCategories;
