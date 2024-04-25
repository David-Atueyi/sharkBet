import { ChevronRight } from "../Icons/ChevronRight";
import { ChevronLeft } from "../Icons/ChevronLeft";
import { useContext } from "react";
import { cardContext } from "./Cards";

interface IPrevAndNextButton {
  slideLeft: () => void;
  slideRight: () => void;
}

export const PrevAndNextButton = ({
  slideLeft,
  slideRight,
}: IPrevAndNextButton) => {
  const { hover } = useContext(cardContext);
  return (
    <>
      <button
        onClick={slideLeft}
        className={`absolute top-32 text-zinc-0 mobile:hidden pc:block ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronLeft extraStyle="bg-zinc-6/50 rounded-full w-[30px] h-[30px] pt-[5px]" />
      </button>
      <button
        onClick={slideRight}
        className={`absolute right-[9px] top-32 text-zinc-0 mobile:hidden pc:block ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <ChevronRight extraStyle="bg-zinc-6/50 rounded-full w-[30px] h-[30px] pt-[5px]" />
      </button>
    </>
  );
};
