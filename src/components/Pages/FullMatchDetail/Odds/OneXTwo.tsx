import { useState } from "react";
import { useBetStore } from "../../../base/store/useBetStore";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";
import { CaretDown } from "../../../Global/Icons/CaretDown";

export const OneXTwo = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { fullMatchDetailsFound } = useFullMatchDetailsStore((state) => ({
    fullMatchDetailsFound: state.fullMatchDetailsFound,
  }));

  const { setSelectedBet, selectedBetsArray } = useBetStore((state) => ({
    setSelectedBet: state.setSelectedBet,
    selectedBetsArray: state.selectedBetsArray,
  }));

  const isButtonClicked = (
    homeClub: string,
    awayClub: string,
    oddName: string,
    marketType: string
  ) => {
    return selectedBetsArray.some(
      (bet) =>
        bet.homeClub === homeClub &&
        bet.awayClub === awayClub &&
        bet.oddName === oddName &&
        bet.marketType === marketType
    );
  };

  const handleClick = (
    id:string,
    homeClub: string,
    awayClub: string,
    odd: number,
    marketType: string,
    oddName: string,
    date: string,
    time: string
  ) => {
    setSelectedBet(id,homeClub, awayClub, odd, marketType, oddName, date, time);
  };

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
