import { useState } from "react";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";
import { CaretDown } from "../../../Global/Icons/CaretDown";
import { useHandleGamesButtonsUtilities } from "../../../base/hooks/useHandleGamesButtonsUtilities";

export const DoubleChance = () => {
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
        <p className="">Double Chance</p>
      </button>
      <div className={`justify-between gap-2 ${isClicked ? "hidden" : "flex"}`}>
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].teamsOdds[0].homeOddDoubleChance,
              fullMatchDetailsFound.market[0].teamsOdds[0]
                .homeMarketTypeDoubleChance,
              fullMatchDetailsFound.market[0].teamsOdds[0]
                .homeOddNameDoubleChance,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={
            fullMatchDetailsFound.market[0].teamsOdds[0].homeOddNameDoubleChance
          }
          contentTwo={
            fullMatchDetailsFound.market[0].teamsOdds[0].homeOddDoubleChance
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].teamsOdds[0]
              .homeOddNameDoubleChance,
            fullMatchDetailsFound.market[0].teamsOdds[0]
              .homeMarketTypeDoubleChance
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .fullTimeResult[0].anyTeamToWinOdd,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .fullTimeResult[0].anyTeamToWinMarketType,
              fullMatchDetailsFound.market[0].generalMarkets[0]
                .fullTimeResult[0].anyTeamToWinOddName,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={
            fullMatchDetailsFound?.market[0].generalMarkets[0].fullTimeResult[0]
              .anyTeamToWinOddName
          }
          contentTwo={
            fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0]
              .anyTeamToWinOdd
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0]
              .anyTeamToWinOddName,
            fullMatchDetailsFound.market[0].generalMarkets[0].fullTimeResult[0]
              .anyTeamToWinMarketType
          )}
          extraStyle="w-[200px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.homeTeamName,
              fullMatchDetailsFound.awayTeamName,
              fullMatchDetailsFound.market[0].teamsOdds[0].awayOddDoubleChance,
              fullMatchDetailsFound.market[0].teamsOdds[0]
                .awayMarketTypeDoubleChance,
              fullMatchDetailsFound.market[0].teamsOdds[0]
                .awayOddNameDoubleChance,
              fullMatchDetailsFound.date,
              fullMatchDetailsFound.time
            )
          }
          contentOne={
            fullMatchDetailsFound.market[0].teamsOdds[0].awayOddNameDoubleChance
          }
          contentTwo={
            fullMatchDetailsFound.market[0].teamsOdds[0].awayOddDoubleChance
          }
          isClicked={isButtonClicked(
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            fullMatchDetailsFound.market[0].teamsOdds[0]
              .awayOddNameDoubleChance,
            fullMatchDetailsFound.market[0].teamsOdds[0]
              .awayMarketTypeDoubleChance
          )}
          extraStyle="w-[200px]"
        />
      </div>
    </div>
  );
};
