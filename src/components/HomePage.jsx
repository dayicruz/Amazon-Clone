import "animate.css";
import React from "react";
import Carousel from "./Carousel";
import CarouselCategories from "./CarouselCategories";
import CarouselProducts from "./CarouselProducts";
import HomePageCards from "./HomePageCards";
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background animate__animated animate__fadeIn animate__faster">
      <div className="bg-amazonclone-background 2xl:min-w-[1000px] 2xl:max-w-[1500px] 2xl:m-auto  ">
        <Carousel />
        <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 -mt-[12vw] lg:-mt-[140px]">
          <HomePageCards
            title={"We Have a Surprise for you"}
            img={"../../public/images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCards
            title={"Watch The Rings of Power"}
            img={"../../public/images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCards
            title={"Unlimited Streaming"}
            img={"../../public/images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCards
            title={"More Titles to Explore"}
            img={"../../public/images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCards
            title={"Shop Pet Supplies"}
            img={"../../public/images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCards
            title={"Spring Sale"}
            img={"../../public/images/home_grid_6.jpg"}
            link={"See the deals "}
          />
          <HomePageCards
            title={"Echo Buds"}
            img={"../../public/images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCards
            title={"family Plan: 3 months free"}
            img={"../../public/images/home_grid_8.jpg"}
            link={"Learn more"}
          />
        </div>
        <CarouselProducts />
        <CarouselCategories />
        <div className=" pb-6">
          <img
            className="w-[80vw] h-[30vw] m-auto object-fill 2xl:w-[]"
            src={"../../public/images/banner_image.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
