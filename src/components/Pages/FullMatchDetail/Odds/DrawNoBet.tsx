import { useState } from "react";
import { CaretDown } from "../../../Global/Icons/CaretDown";
import { useBetStore } from "../../../base/store/useBetStore";
import { useFullMatchDetailsStore } from "../../../base/store/useFullMatchDetailsStore";
import { OddButton } from "./OddButton";

export const DrawNoBet = () => {
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
        <p className="">DNB</p>
      </button>
      <div className={`justify-between gap-2 ${isClicked ? "hidden" : "flex"}`}>
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.teams.home.market.homeDrawNoBet.odd,
              fullMatchDetailsFound.teams.home.market.homeDrawNoBet.marketType,
              fullMatchDetailsFound.teams.home.market.homeDrawNoBet.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound?.teams.home.market.homeDrawNoBet.oddName
          }
          contentTwo={fullMatchDetailsFound.teams.home.market.homeDrawNoBet.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.teams.home.market.homeDrawNoBet.oddName,
            fullMatchDetailsFound.teams.home.market.homeDrawNoBet.marketType
          )}
          extraStyle="w-[318px]"
        />
        <OddButton
          onClick={() =>
            handleClick(
              fullMatchDetailsFound.id,
              fullMatchDetailsFound.teams.home.name,
              fullMatchDetailsFound.teams.away.name,
              fullMatchDetailsFound.teams.away.market.awayDrawNoBet.odd,
              fullMatchDetailsFound.teams.away.market.awayDrawNoBet.marketType,
              fullMatchDetailsFound.teams.away.market.awayDrawNoBet.oddName,
              fullMatchDetailsFound.matchDate.date,
              fullMatchDetailsFound.matchDate.time
            )
          }
          contentOne={
            fullMatchDetailsFound.teams.away.market.awayDrawNoBet.oddName
          }
          contentTwo={fullMatchDetailsFound.teams.away.market.awayDrawNoBet.odd}
          isClicked={isButtonClicked(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound.teams.away.market.awayDrawNoBet.oddName,
            fullMatchDetailsFound.teams.away.market.awayDrawNoBet.marketType
          )}
          extraStyle="w-[318px]"
        />
      </div>
    </div>
  );
}
