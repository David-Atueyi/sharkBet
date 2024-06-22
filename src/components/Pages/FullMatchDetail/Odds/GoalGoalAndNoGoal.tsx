import { useState } from "react";
import { CaretDown } from "../../../Global/Icons/CaretDown";
import { useBetStore } from "../../../base/store/useBetStore";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";

export const GoalGoalAndNoGoal = () => {
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
    id: string,
    homeClub: string,
    awayClub: string,
    odd: number,
    marketType: string,
    oddName: string,
    date: string,
    time: string
  ) => {
    setSelectedBet(
      id,
      homeClub,
      awayClub,
      odd,
      marketType,
      oddName,
      date,
      time
    );
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
        <p className="">GG/NG</p>
      </button>
      <div className={`justify-between gap-2 ${isClicked ? "hidden" : "flex"}`}>
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .bothTeamsToScore[0].yesOdd,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .bothTeamsToScore[0].yesMarketType,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .bothTeamsToScore[0].yesOddName,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={
            fullMatchDetailsFound?.market[0].generalMarkets[0]
              .bothTeamsToScore[0].yesOddName
          }
          contentTwo={
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].yesOdd
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].yesOddName,
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].yesMarketType
          )}
          extraStyle="w-[318px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .bothTeamsToScore[0].noOdd,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .bothTeamsToScore[0].noMarketType,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .bothTeamsToScore[0].noOddName,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].noOddName
          }
          contentTwo={
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].noOdd
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].noOddName,
            fullMatchDetailsFound.market[0].generalMarkets[0]
              .bothTeamsToScore[0].noMarketType
          )}
          extraStyle="w-[318px]"
        />
      </div>
    </div>
  );
};
