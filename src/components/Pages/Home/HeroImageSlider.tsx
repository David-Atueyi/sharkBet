import { heroImages } from "../../base/dummyDatas/heroImages";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const HeroImageSlider = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        speed={1250}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className=" rounded-[20px] z-0"
      >
        <div
          className={`swiper-button-next mobile:opacity-0 pc:opacity-100 ${
            isHovered ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`swiper-button-prev mobile:opacity-0 pc:opacity-100 ${
            isHovered ? "block" : "hidden"
          }`}
        ></div>
        {heroImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex overflow-x-auto no-scrollbar"
          >
            <img src={image} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
