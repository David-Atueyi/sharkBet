import { useState } from "react";
import { CaretDown } from "../../../Global/Icons/CaretDown";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";
import { useHandleGamesButtonsUtilities } from "../../../base/hooks/useHandleGamesButtonsUtilities";

export const GoalGoalAndNoGoal = () => {
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
