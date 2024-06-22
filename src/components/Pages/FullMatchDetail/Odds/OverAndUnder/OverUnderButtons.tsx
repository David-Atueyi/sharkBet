import { useFullMatchDetailsStore } from "../../../../base/store/useFullMatchDetailsStore";
import { useBetStore } from "../../../../base/store/useBetStore";
import { OverUnderButton } from "./OverUnderButton";

export const OverUnderButtons = ({
  oddName,
  overOddName,
  underOddName,
  marketType,
  overOdd,
  underOdd,
}: {
  oddName: string;
  overOddName: string | undefined;
  underOddName: string | undefined;
  marketType: string;
  overOdd: number | undefined;
  underOdd: number | undefined;
}) => {
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
    oddName: string | undefined,
    marketType: string | undefined
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
    odd: number | undefined,
    marketType: string | undefined,
    oddName: string | undefined,
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
    <div className="flex justify-between gap-2">
      <button className="capitalize w-[200px] px-[10px] mobile:min-h-[35px] pc:min-h-[40px] rounded-[8px] bg-zinc-3 text-zinc-9">
        {oddName}
      </button>
      <OverUnderButton
        onClick={() =>
          handleClick(
            fullMatchDetailsFound.id,
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            overOdd,
            marketType,
            overOddName,
            fullMatchDetailsFound.date,
            fullMatchDetailsFound.time
          )
        }
        content={overOdd}
        isClicked={isButtonClicked(
          fullMatchDetailsFound.homeTeamName,
          fullMatchDetailsFound.awayTeamName,
          overOddName,
          marketType
        )}
      />
      <OverUnderButton
        onClick={() =>
          handleClick(
            fullMatchDetailsFound.id,
            fullMatchDetailsFound.homeTeamName,
            fullMatchDetailsFound.awayTeamName,
            underOdd,
            marketType,
            underOddName,
            fullMatchDetailsFound.date,
            fullMatchDetailsFound.time
          )
        }
        content={underOdd}
        isClicked={isButtonClicked(
          fullMatchDetailsFound.homeTeamName,
          fullMatchDetailsFound.awayTeamName,
          underOddName,
          marketType
        )}
      />
    </div>
  );
};
