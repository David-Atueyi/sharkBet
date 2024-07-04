import { useState } from "react";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";
import { CaretDown } from "../../../Global/Icons/CaretDown";
import { useHandleGamesButtonsUtilities } from "../../../base/hooks/useHandleGamesButtonsUtilities";

export const OneXTwo = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { fullMatchDetailsFound } = useFullMatchDetailsStore((state) => ({
    fullMatchDetailsFound: state.fullMatchDetailsFound,
  }));

  const { isButtonClicked, handleClick } = useHandleGamesButtonsUtilities();
  
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
        <p className="">1X2</p>
      </button>
      <div className={`justify-between gap-2 ${isClicked ? "hidden" : "flex"}`}>
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].teamsOdds[0].homeOdd1x2,
              fullMatchDetailsFound.market[0].teamsOdds[0].homeMarketType1x2,
              fullMatchDetailsFound.market[0].teamsOdds[0].homeOddName1x2,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={fullMatchDetailsFound.market[0].teamsOdds[0].homeOddName1x2}
          contentTwo={fullMatchDetailsFound.market[0].teamsOdds[0].homeOdd1x2}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].teamsOdds[0].homeOddName1x2,
            fullMatchDetailsFound.market[0].teamsOdds[0].homeMarketType1x2
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawOdd,
              fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawMarketType,
              fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawOddName,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={
            fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawOddName
          }
          contentTwo={fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawOdd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawOddName,
            fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0].fullTimeDrawMarketType
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].teamsOdds[0].awayOdd1x2,
              fullMatchDetailsFound.market[0].teamsOdds[0].awayMarketType1x2,
              fullMatchDetailsFound.market[0].teamsOdds[0].awayOddName1x2,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={fullMatchDetailsFound.market[0].teamsOdds[0].awayOddName1x2}
          contentTwo={fullMatchDetailsFound.market[0].teamsOdds[0].awayOdd1x2}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].teamsOdds[0].awayOddName1x2,
            fullMatchDetailsFound.market[0].teamsOdds[0].awayMarketType1x2
          )}
          extraStyle="w-[200px]"
        />
      </div>
    </div>
  );
};
