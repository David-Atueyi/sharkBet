import { useState } from "react";
import { useBetStore } from "../../../base/store/useBetStore";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";
import { CaretDown } from "../../../Global/Icons/CaretDown";

export const DoubleChance = () => {
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
    homeClub: string,
    awayClub: string,
    odd: number,
    marketType: string,
    oddName: string,
    date: string,
    time: string
  ) => {
    setSelectedBet(homeClub, awayClub, odd, marketType, oddName, date, time);
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
        <p className="">Double Chance</p>
      </button>
      <div className={`justify-between gap-2 ${isClicked ? "hidden" : "flex"}`}>
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.teams.home.market.homeOrDraw.odd,
              fullMatchDetailsFound.teams.home.market.homeOrDraw.marketType,
              fullMatchDetailsFound.teams.home.market.homeOrDraw.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound.teams.home.market.homeOrDraw.oddName
          }
          contentTwo={fullMatchDetailsFound.teams.home.market.homeOrDraw.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.teams.home.market.homeOrDraw.oddName,
            fullMatchDetailsFound.teams.home.market.homeOrDraw.marketType
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.generalMarkets.anyTeamToWin.odd,
              fullMatchDetailsFound.generalMarkets.anyTeamToWin.marketType,
              fullMatchDetailsFound.generalMarkets.anyTeamToWin.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound?.generalMarkets.anyTeamToWin.oddName
          }
          contentTwo={fullMatchDetailsFound.generalMarkets.anyTeamToWin.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.generalMarkets.anyTeamToWin.oddName,
            fullMatchDetailsFound.generalMarkets.anyTeamToWin.marketType
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.teams.away.market.drawOrWin.odd,
              fullMatchDetailsFound.teams.away.market.drawOrWin.marketType,
              fullMatchDetailsFound.teams.away.market.drawOrWin.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={fullMatchDetailsFound.teams.away.market.drawOrWin.oddName}
          contentTwo={fullMatchDetailsFound.teams.away.market.drawOrWin.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.teams.away.market.drawOrWin.oddName,
            fullMatchDetailsFound.teams.away.market.drawOrWin.marketType
          )}
          extraStyle="w-[200px]"
        />
      </div>
    </div>
  );
};
