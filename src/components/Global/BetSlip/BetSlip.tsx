import { ClearBetIcon } from "../Icons/ClearBetIcon";
import { GamesSelected } from "./GamesSelected";
import { MyBets } from "./MyBets";
import { useBetStore } from "../../base/store/useBetStore";
import { BetTabs } from "./BetTabs";
import { ConfirmClearBetSlip } from "./ConfirmClearBetSlip";
import { useHandleBetslip } from "../../base/hooks/useHandleBetslip";

export const BetSlip = () => {
  const {
    betTabs,
    setBetTabs,
    error,
    confirmClearBet,
    setConfirmClearBet,
    handleInputChange,
    potentialReturn,
    placeBet,
    betAmount,
    totalOdds,
    isLoading,
  } = useHandleBetslip();

  const { selectedBetsArray } = useBetStore((state) => ({
    selectedBetsArray: state.selectedBetsArray,
  }));

  return (
    <div className="bg-slate-50 rounded-[23px]">
      <BetTabs betTabs={betTabs} setBetTabs={setBetTabs} />
      <div>
        <div
          className={`${
            betTabs.tabOne && selectedBetsArray.length > 0 ? "block" : "hidden"
          }`}
        >
          <ClearBetIcon onClick={() => setConfirmClearBet(true)} />
          <div className="min-h-32 text-zinc-9 relative">
            <div className="pc:min-h-[200px] pc:max-h-[300px] mobile:max-h-[57vh] overflow-y-auto no-scrollbar">
              {/*  */}
              <div>
                <GamesSelected />
                <ConfirmClearBetSlip
                  confirmClearBet={confirmClearBet}
                  setConfirmClearBet={setConfirmClearBet}
                />
              </div>
              {/*  */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between p-3 capitalize text-sm items-center border-t-8">
                  <p>singles</p>
                  <p className="text-xs text-zinc-5">1x</p>
                  <div className="relative">
                    <label htmlFor="amountPlaced">NGN</label>
                    <input
                      type="number"
                      name="amountPlaced"
                      id="amount_placed"
                      className="w-16 border-2 border-zinc-5 rounded ml-1 px-1 hide-number-input-buttons"
                      onChange={handleInputChange}
                      value={betAmount}
                    />
                    {error && (
                      <p className="text-rose-5 text-[10px] absolute w-48 right-0 text-right">
                        {error}
                      </p>
                    )}
                  </div>
                </div>
                <div className="capitalize text-xs flex flex-col gap-2">
                  <div className="flex justify-between px-3">
                    <p>odds</p>
                    <p className="text-xs font-medium">{totalOdds}</p>
                  </div>
                  <div className="flex justify-between px-3">
                    <p>to return</p>
                    <p className="text-base font-bold">
                      {!betAmount
                        ? "0.00"
                        : Number(potentialReturn).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                onClick={placeBet}
                className="bg-blue-7 w-full rounded-b-2xl text-sm p-2 capitalize text-slate-100 mobile:rounded-none pc:rounded-b-[20px]"
              >
                <span
                  className={`loader ${!isLoading ? "hidden" : "inline-block"}`}
                ></span>
                <div className={`${isLoading ? "hidden" : "block"}`}>
                  <p>place bet</p>
                  <p className="font-bold">
                    {!betAmount ? "0.00" : `${betAmount}`}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`text-zinc-9 flex justify-center items-center capitalize pc:min-h-[200px] mobile:min-h-[100px] ${
            betTabs.tabOne && selectedBetsArray.length === 0
              ? "block"
              : "hidden"
          }`}
        >
          <p>select a match to bet on</p>
        </div>
      </div>
      {/*  */}
      <div className={`${betTabs.tabTwo ? "block" : "hidden"}`}>
        <MyBets />
      </div>
      {/*  */}
    </div>
  );
};
