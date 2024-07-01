import { useBetStore } from "../../base/store/useBetStore";
import { deleteBetSlip } from "../../base/utility/betSlip/deleteBetSlip";

interface IConfirmClearBetSlip {
  confirmClearBet: boolean;
  setConfirmClearBet: (state: boolean) => void;
}

export const ConfirmClearBetSlip = ({
  confirmClearBet,
  setConfirmClearBet,
}: IConfirmClearBetSlip) => {
  const { clearSelectedBets } = useBetStore((state) => ({
    clearSelectedBets: state.clearSelectedBets,
  }));

  const { mutate: deleteSelectedBet } = deleteBetSlip();
 

  return (
    <div className={`${!confirmClearBet ? "hidden" : "block"}`}>
      <div className="bg-zinc-10/25 absolute w-full h-full z-[8] top-0"></div>
      <div className="text-center capitalize bg-zinc-1 py-3 rounded mx-1 absolute left-1 top-[30%] z-10 w-[95%]">
        <p className="pb-1">are you sure you want to clear</p>
        <div className="flex gap-1 px-1">
          <button
            onClick={() => (
              clearSelectedBets(),
              deleteSelectedBet(null),
              setConfirmClearBet(false)
            )}
            className="w-full text-zinc-2 capitalize font-bold py-1 rounded-md bg-rose-6"
          >
            yes
          </button>
          <button
            onClick={() => setConfirmClearBet(false)}
            className="w-full text-zinc-2 capitalize font-bold py-1 rounded-md bg-blue-6"
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
};
