import { useBetStore } from "../../base/store/useBetStore";
import { deleteBetSlip } from "../../base/utility/betSlip/deleteBetSlip";
import { BallIcon } from "../Icons/BallIcon";
import { XIcon } from "../Icons/XIcon";

export const GamesSelected = () => {
  const { selectedBetsArray, removeSelectedBet } = useBetStore((state) => ({
    selectedBetsArray: state.selectedBetsArray,
    removeSelectedBet: state.removeSelectedBet,
  }));

  const { mutate: deleteSelectedBet } = deleteBetSlip();

  const handleRemoveBet = (
    index: number,
    homeClub: string,
    awayClub: string,
    odd: number | undefined,
    marketType: string | undefined,
    oddName: string | undefined,
    date: string,
    time: string
  ) => {
    removeSelectedBet(index);
    deleteSelectedBet({
      homeClub,
      awayClub,
      odd,
      marketType,
      oddName,
      date,
      time,
    });
  };

  return (
    <div>
      {selectedBetsArray.map((selectedBet, index) => (
        <div className="flex justify-between p-2  capitalize" key={index}>
          {/*  */}
          <div className="flex gap-2">
            <div className="self-center">
              <XIcon
                handleClick={() =>
                  handleRemoveBet(
                    index,
                    selectedBet.homeClub,
                    selectedBet.awayClub,
                    selectedBet.odd,
                    selectedBet.marketType,
                    selectedBet.oddName,
                    selectedBet.date,
                    selectedBet.time
                  )
                }
                extraStyle=" w-[20px] h-[20px] stroke-zinc-4 pc:hover:stroke-zinc-7 pc:cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex text-sm gap-1">
                <BallIcon extraStyle="text-zinc-8 w-[21px] h-[21px]" />
                <p>{selectedBet.oddName}</p>
              </div>
              <div className="text-xs">
                <p>{selectedBet.marketType}</p>
                <p className="flex gap-1 text-zinc-6">
                  <span className="truncate mobile:max-w-[80px] tablet:max-w-full pc:max-w-[60px]">
                    {selectedBet.homeClub}
                  </span>
                  <span className="text-zinc-4 lowercase">vs</span>
                  <span className="truncate mobile:max-w-[80px] tablet:max-w-full pc:max-w-[60px]">
                    {selectedBet.awayClub}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="text-sm mr-3">
            <p>{selectedBet.odd}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

