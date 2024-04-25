import { useState, useEffect } from "react";
import { RightHeroImageArrow } from "../../Global/Icons/RightHeroImageArrow";
import { LeftHeroImageArrow } from "../../Global/Icons/LeftHeroImageArrow";
import { heroImages } from "../../base/dummyDatas/heroImages";
import { usePrevAndNextHeroImage } from "../../base/hooks/usePrevAndNextHeroImage";

export const HeroImageSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { currentIndex, nextSlide, prevSlide } = usePrevAndNextHeroImage();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  return (
    <div
      className="overflow-hidden relative rounded-2xl w-full"
      onMouseEnter={() => isDesktop && setIsHovered(true)}
      onMouseLeave={() => isDesktop && setIsHovered(false)}
    >
      <div
        className="flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>
      {(isHovered || !isDesktop) && (
        <>
          <button
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-zinc-7 opacity-70 p-2 rounded-full"
            onClick={prevSlide}
          >
            <LeftHeroImageArrow />
          </button>
          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-zinc-7 opacity-70 p-2 rounded-full"
            onClick={nextSlide}
          >
            <RightHeroImageArrow />
          </button>
        </>
      )}
    </div>
  );
};
