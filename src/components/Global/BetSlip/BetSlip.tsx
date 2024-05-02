import { useState } from "react";
import { ClearBetIcon } from "../Icons/ClearBetIcon";
import { GamesSelected } from "./GamesSelected";
import { MyBets } from "./MyBets";
import { Link } from "react-router-dom";
import { ChevronRight } from "../Icons/ChevronRight";
import { useBetStore } from "../../base/store/useBetStore";
import { BetTabs } from "./BetTabs";

export const BetSlip = () => {
  const [betTabs, setBetTabs] = useState<{ tabOne: boolean; tabTwo: boolean }>({
    tabOne: true,
    tabTwo: false,
  });
  const [betAmount, setBetAmount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { selectedBetsArray, clearSelectedBets } = useBetStore((state) => ({
    selectedBetsArray: state.selectedBetsArray,
    clearSelectedBets: state.clearSelectedBets,
  }));

  const totalOdds = selectedBetsArray
    .reduce((sum, bet) => sum + bet.odd, 0)
    .toFixed(2);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBetAmount(value);
    setError(
      value === ""
        ? "input an amount to be staked"
        : parseInt(value) < 10 || parseInt(value) > 3000000
        ? "Amount must be between 10 to 3000000"
        : ""
    );
  };

  const potentialReturn = (
    parseFloat(betAmount) * parseFloat(totalOdds)
  ).toFixed(2);

  return (
    <div className="bg-slate-50 rounded-[23px]">
      <BetTabs betTabs={betTabs} setBetTabs={setBetTabs} />

      <div>
        <div
          className={`${
            betTabs.tabOne && selectedBetsArray.length > 0 ? "block" : "hidden"
          }`}
        >
          <div className="border-t-2 border-zinc-5 text-right flex justify-end cursor-pointer bg-zinc-8 ">
            <ClearBetIcon handleClearBet={clearSelectedBets} />
          </div>
          <div className="min-h-32 text-zinc-8">
            <div className="pc:min-h-[200px] pc:max-h-[300px] mobile:max-h-[45vh] overflow-y-auto no-scrollbar">
              {/*  */}
              <div>
                <GamesSelected />
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
                      className="w-16 border-2 border-zinc-5 rounded ml-1 px-1"
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
                      {!betAmount ? "0.00" : potentialReturn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-blue-7 w-full rounded-b-2xl text-sm p-2 capitalize text-slate-100 mobile:rounded-none pc:rounded-b-[20px]">
                <p>place bet</p>
                <p className="font-bold">
                  {!betAmount ? "0.00" : `${betAmount}.00`}
                </p>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` text-zinc-9 flex justify-center items-center capitalize pc:min-h-[200px] mobile:min-h-[100px] ${
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
        <div className="border-t-2 border-zinc-5 text-right flex justify-between items-center capitalize bg-zinc-8 px-3">
          <p className="p-2 text-sm cursor-pointer">all unsettled</p>
          <Link
            to={""}
            className="flex items-center text-[10px] text-blue-7 outline-none border-2 border-blue-7 pt-[2px] px-2 rounded-full"
          >
            settled
            <ChevronRight extraStyle="text-[10px] text-blue-7" />
          </Link>
        </div>
        <MyBets />
      </div>
      {/*  */}
    </div>
  );
};
