import { useBetStore } from "../../base/store/useBetStore";
import { BallIcon } from "../Icons/BallIcon";
import { XIcon } from "../Icons/XIcon";

export const GamesSelected = () => {
  const { selectedBetsArray, removeSelectedBet } =
    useBetStore((state) => ({
      selectedBetsArray: state.selectedBetsArray,
      clearSelectedBets: state.clearSelectedBets,
      removeSelectedBet: state.removeSelectedBet,
    }));
  
   const handleRemoveBet = (index: number) => {
     removeSelectedBet(index);
   };
  
  return (
    <div>
      {selectedBetsArray.map((selectedBet, index) => (
        <div className="flex justify-between p-2  capitalize" key={index}>
          {/*  */}
          <div className="flex gap-2">
            <div className="self-center">
              <XIcon
                textStyle="text-zinc-4 text-sm hover:text-zinc-7 p-1 cursor-pointer"
                handleClick={() => handleRemoveBet(index)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex text-sm gap-1">
                <BallIcon extraStyle="text-zinc-8" />
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
