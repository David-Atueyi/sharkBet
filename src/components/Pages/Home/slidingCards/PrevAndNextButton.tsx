import { ChevronRight } from "../../../Global/Icons/ChevronRight";
import { ChevronLeft } from "../../../Global/Icons/ChevronLeft";

interface IPrevAndNextButton {
  slideLeft: () => void;
  slideRight: () => void;
  hover: boolean;
}

export const PrevAndNextButton = ({
  slideLeft,
  slideRight,
  hover,
}: IPrevAndNextButton) => {
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
