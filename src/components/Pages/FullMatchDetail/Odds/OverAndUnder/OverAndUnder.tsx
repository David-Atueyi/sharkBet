import { useState } from "react";
import { CaretDown } from "../../../../Global/Icons/CaretDown";
import {  OverUnderButtons } from "./OverUnderButtons";
import { useFullMatchDetailsStore } from "../../../../base/store/useFullMatchDetailsStore";

export const OverAndUnder = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { fullMatchDetailsFound } = useFullMatchDetailsStore((state) => ({
    fullMatchDetailsFound: state.fullMatchDetailsFound,
  }));

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
          <OverUnderButtons marketType="Over/Under" oddName="0.5" underOddName={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underZeroPointFiveOddName} overOddName={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overZeroPointFiveOddName} overOdd={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overZeroPointFiveOdd} underOdd={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underZeroPointFiveOdd} />
          <OverUnderButtons marketType="Over/Under" oddName="1.5" underOddName={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underOnePointFiveOddName} overOddName={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overOnePointFiveOddName} overOdd={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overOnePointFiveOdd} underOdd={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underOnePointFiveOdd} />
          <OverUnderButtons marketType="Over/Under" oddName="2.5" underOddName={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underTwoPointFiveOddName} overOddName={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overTwoPointFiveOddName} overOdd={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overTwoPointFiveOdd} underOdd={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underTwoPointFiveOdd} />
          <OverUnderButtons marketType="Over/Under" oddName="3.5" underOddName={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underThreePointFiveOddName} overOddName={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overThreePointFiveOddName} overOdd={fullMatchDetailsFound.market[0].generalMarkets[0].overs[0].overThreePointFiveOdd} underOdd={fullMatchDetailsFound.market[0].generalMarkets[0].unders[0].underThreePointFiveOdd} />
        </div>
      </div>
    </div>
  );
};
