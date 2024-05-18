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
    id:number,
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
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.teams.home.market.homeWin.odd,
              fullMatchDetailsFound.teams.home.market.homeWin.marketType,
              fullMatchDetailsFound.teams.home.market.homeWin.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={fullMatchDetailsFound.teams.home.market.homeWin.oddName}
          contentTwo={fullMatchDetailsFound.teams.home.market.homeWin.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.teams.home.market.homeWin.oddName,
            fullMatchDetailsFound.teams.home.market.homeWin.marketType
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.generalMarkets.fullTimeDraw.odd,
              fullMatchDetailsFound.generalMarkets.fullTimeDraw.marketType,
              fullMatchDetailsFound.generalMarkets.fullTimeDraw.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound?.generalMarkets.fullTimeDraw.oddName
          }
          contentTwo={fullMatchDetailsFound.generalMarkets.fullTimeDraw.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.generalMarkets.fullTimeDraw.oddName,
            fullMatchDetailsFound.generalMarkets.fullTimeDraw.marketType
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.teams.away.market.awayWin.odd,
              fullMatchDetailsFound.teams.away.market.awayWin.marketType,
              fullMatchDetailsFound.teams.away.market.awayWin.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={fullMatchDetailsFound.teams.away.market.awayWin.oddName}
          contentTwo={fullMatchDetailsFound.teams.away.market.awayWin.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.teams.away.market.awayWin.oddName,
            fullMatchDetailsFound.teams.away.market.awayWin.marketType
          )}
          extraStyle="w-[200px]"
        />
      </div>
    </div>
  );
};
