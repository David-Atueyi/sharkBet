import { useState } from "react";
import { ClearBetIcon } from "../Icons/ClearBetIcon";
import { GamesSelected } from "./GamesSelected";
import { MyBets } from "./MyBets";
import { Link } from "react-router-dom";
import { ChevronRight } from "../Icons/ChevronRight";

export const BetSlip = () => {
  const [betTabs, setBetTabs] = useState<{ tabOne: boolean; tabTwo: boolean }>({
    tabOne: true,
    tabTwo: false,
  });

  const clearBetSlip = () => {
    console.log("clear bet slip");
  };

  return (
    <div className="bg-slate-50 rounded-[23px]">
      <div className="relative">
        <div className="mobile:text-md bg-zinc-8 pc:rounded-t-[20px] pc:text-xl pc:flex justify-evenly">
          <button
            className={`p-3 cursor-pointer mobile:text-left capitalize ${
              betTabs.tabOne ? "text-blue-7" : "text-zinc-4"
            }`}
            onClick={() => setBetTabs({ tabOne: true, tabTwo: false })}
          >
            betslip
          </button>
          {/*  */}
          <button
            className={`p-3 cursor-pointer mobile:text-left hidden pc:block capitalize ${
              betTabs.tabTwo ? "text-blue-7" : "text-zinc-4"
            }`}
            onClick={() => setBetTabs({ tabOne: false, tabTwo: true })}
          >
            my bets
          </button>
        </div>
        <div className="absolute bottom-0 w-full mobile:hidden pc:block">
          <div
            className={`bg-gradient-to-r from-blue-7 via-current to-zinc-6 w-[33%] h-[4px] transition-all duration-300 rounded text-blue-7 ${
              betTabs.tabOne
                ? "translate-x-[30%] biggerPc:translate-x-[32%]"
                : "translate-x-[175%] biggerPc:translate-x-[170%]"
            }`}
          ></div>
        </div>
      </div>

      {betTabs.tabOne ? (
        <div>
          <div className="border-t-2 border-zinc-5 text-right flex justify-end cursor-pointer bg-zinc-8 ">
            <ClearBetIcon handleClearBet={clearBetSlip} />
          </div>
          <div className="min-h-32 text-zinc-8">
            {/*  */}
            <div>
              <div className="pc:h-[300px] mobile:max-h-[45vh] overflow-y-auto no-scrollbar">
                {/*  */}
                <div>
                  <GamesSelected />
                </div>
                {/*  */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between p-3 capitalize text-sm items-center border-t-8">
                    <p>singles</p>
                    <p className="text-xs text-zinc-5">1x</p>
                    <div>
                      <label htmlFor="amountPlaced">NGN</label>
                      <input
                        type="number"
                        name="amountPlaced"
                        id="amount_placed"
                        className="w-16 border-2 border-zinc-5 rounded ml-1 px-1"
                      />
                    </div>
                  </div>
                  <div className="capitalize text-xs flex flex-col gap-2">
                    <div className="flex justify-between px-3">
                      <p>odds</p>
                      <p className="text-xs font-medium">10.40</p>
                    </div>
                    <div className="flex justify-between px-3">
                      <p>to return</p>
                      <p className="text-base font-bold">1040.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-blue-7 w-full rounded-b-2xl text-sm p-2 capitalize text-slate-100 mobile:rounded-none pc:rounded-b-[20px]">
                  <p>place bet</p>
                  <p className="font-bold">100.00</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {betTabs.tabTwo ? (
        <div>
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
      ) : null}

      {/*  */}
    </div>
  );
};
