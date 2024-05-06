import { useState } from "react";
import { CaretDown } from "../../../../Global/Icons/CaretDown";
import {  OverUnderButtons } from "./OverUnderButtons";

export const OverAndUnder = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className={`flex gap-2 flex-col border-b-2 border-zinc-5 pb-4`}>
      <button
        className="text-[14px] max-w-[130px] flex gap-2 pl-2"
        onClick={() => {
          !isClicked ? setIsClicked(true) : setIsClicked(false);
        }}
      >
        <CaretDown
          extraStyle={`${
            isClicked
              ? "transition ease-in delay-120 -rotate-90"
              : "transition-none rotate-0"
          }`}
        />
        <p className="">Over/Under</p>
      </button>
      <div className={`flex flex-col ${isClicked ? "hidden" : "flex"}`}>
        <div className="flex justify-between gap-2 text-center mb-3 text-[10px]">
          <p className="w-[200px] "></p>
          <p className="w-[200px] ">Over</p>
          <p className="w-[200px] ">Under</p>
        </div>
        <div className="flex gap-2 flex-col">
          <OverUnderButtons oddType="0.5" />
          <OverUnderButtons oddType="1.5" />
          <OverUnderButtons oddType="2.5" />
          <OverUnderButtons oddType="3.5" />
        </div>
      </div>
    </div>
  );
};
