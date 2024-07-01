import { useFullMatchDetailsStore } from "../../../../base/store/useFullMatchDetailsStore";
import { OverUnderButton } from "./OverUnderButton";
import { useHandleGamesButtonsUtilities } from "../../../../base/hooks/useHandleGamesButtonsUtilities";

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

  const { isButtonClicked, handleClick } = useHandleGamesButtonsUtilities();

  return (
    <div className="flex justify-between gap-2">
      <button className="capitalize w-[200px] px-[10px] mobile:min-h-[35px] pc:min-h-[40px] rounded-[8px] bg-zinc-3 text-zinc-9">
        {oddName}
      </button>
      <OverUnderButton
        onClick={() =>
          handleClick(
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
