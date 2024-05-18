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
    id: number,
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
        <p className="">GG/NG</p>
      </button>
      <div className={`justify-between gap-2 ${isClicked ? "hidden" : "flex"}`}>
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.generalMarkets.bothTeamsToScore.Yes.odd,
              fullMatchDetailsFound.generalMarkets.bothTeamsToScore.Yes
                .marketType,
              fullMatchDetailsFound.generalMarkets.bothTeamsToScore.Yes.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound?.generalMarkets.bothTeamsToScore.Yes.oddName
          }
          contentTwo={
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.Yes.odd
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.Yes.oddName,
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.Yes.marketType
          )}
          extraStyle="w-[318px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No.odd,
              fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No
                .marketType,
              fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No.oddName
          }
          contentTwo={
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No.odd
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No.oddName,
            fullMatchDetailsFound.generalMarkets.bothTeamsToScore.No.marketType
          )}
          extraStyle="w-[318px]"
        />
      </div>
    </div>
  );
};
