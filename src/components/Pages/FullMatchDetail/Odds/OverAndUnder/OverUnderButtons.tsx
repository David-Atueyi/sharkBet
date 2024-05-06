import { useFullMatchDetailsStore } from "../../../../base/store/useFullMatchDetailsStore";
import { useBetStore } from "../../../../base/store/useBetStore";
import { OverUnderButton } from "./OverUnderButton";

export const OverUnderButtons = ({ oddType }: { oddType:string }) => {
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
    <div className="flex justify-between gap-2">
      <button className="capitalize w-[200px] px-[10px] mobile:min-h-[35px] pc:min-h-[40px] rounded-[8px] bg-zinc-3 text-zinc-9">
        {oddType}
      </button>
      <OverUnderButton
        onClick={() =>
          handleClick(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound?.generalMarkets.overAndUnder.overGoals[
              oddType
            ].odd,
            fullMatchDetailsFound?.generalMarkets.overAndUnder.overGoals[
              oddType
            ].marketType,
            fullMatchDetailsFound?.generalMarkets.overAndUnder.overGoals[
              oddType
            ].oddName,
            fullMatchDetailsFound.matchDate.date,
            fullMatchDetailsFound.matchDate.time
          )
        }
        content={
          fullMatchDetailsFound?.generalMarkets.overAndUnder.overGoals[oddType]
            .odd
        }
        isClicked={isButtonClicked(
          fullMatchDetailsFound.teams.home.name,
          fullMatchDetailsFound.teams.away.name,
          fullMatchDetailsFound?.generalMarkets.overAndUnder.overGoals[oddType]
            .oddName,
          fullMatchDetailsFound?.generalMarkets.overAndUnder.overGoals[oddType]
            .marketType
        )}
      />
      <OverUnderButton
        onClick={() =>
          handleClick(
            fullMatchDetailsFound.teams.home.name,
            fullMatchDetailsFound.teams.away.name,
            fullMatchDetailsFound?.generalMarkets.overAndUnder.underGoals[
              oddType
            ].odd,
            fullMatchDetailsFound?.generalMarkets.overAndUnder.underGoals[
              oddType
            ].marketType,
            fullMatchDetailsFound?.generalMarkets.overAndUnder.underGoals[
              oddType
            ].oddName,
            fullMatchDetailsFound.matchDate.date,
            fullMatchDetailsFound.matchDate.time
          )
        }
        content={
          fullMatchDetailsFound?.generalMarkets.overAndUnder.underGoals[oddType]
            .odd
        }
        isClicked={isButtonClicked(
          fullMatchDetailsFound.teams.home.name,
          fullMatchDetailsFound.teams.away.name,
          fullMatchDetailsFound?.generalMarkets.overAndUnder.underGoals[oddType]
            .oddName,
          fullMatchDetailsFound?.generalMarkets.overAndUnder.underGoals[oddType]
            .marketType
        )}
      />
    </div>
  );
};
