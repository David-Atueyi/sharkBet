import { useRef } from "react";

export const useMoveBetCards = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    cardContainerRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    cardContainerRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return { cardContainerRef, slideLeft, slideRight };
};





