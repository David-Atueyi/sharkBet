import { Link, useLocation } from "react-router-dom";
import { useActiveBetsStore } from "../../base/store/useActiveBetsStore";
import { insertTransactionsDatas } from "../../base/utility/transactionUtilities/insertTransactionsDatas";
import { useGetUserInfo } from "../../base/store/useGetUserInfo";
import { updateUserAccountBalance } from "../../base/utility/accountBalance/updateUserAccountBalance";
import { useHandleAccountBalance } from "../../base/store/useHandleAccountBalance";
import { deleteMyBets } from "../../base/utility/myBets/deleteMyBets";

export const MyBet = () => {
  const { pathname } = useLocation();

  const { activeBets, removeActiveBet } = useActiveBetsStore((state) => ({
    activeBets: state.activeBets,
    removeActiveBet: state.removeActiveBet,
  }));

  const { mutate: updateAccountBalance } = updateUserAccountBalance();

  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { balance, setBalance } = useHandleAccountBalance((state) => ({
    balance: state.balance,
    setBalance: state.setBalance,
  }));

  const { mutate: deleteMyBet } = deleteMyBets();

  const handleCashOut = (amount: number, date: string, time: string) => {
    const totalStake = amount.toString();
    const reducedAmount = amount * 0.7;

    const currentBalance = balance ? parseFloat(balance) : Number("0.00");

    if (isNaN(currentBalance) || isNaN(reducedAmount)) {
      console.error("Invalid account balance or top-up amount");
      return;
    }

    const newBalance = (currentBalance + reducedAmount).toFixed(2);

    updateAccountBalance(newBalance);
    setBalance(newBalance);
    removeActiveBet(date, time, amount.toString());
    deleteMyBet({ date, time, totalStake });
    insertTransactionsDatas({
      transactionType: "Cash Out",
      amount: `+${reducedAmount}`,
      transactionStatus: "successful",
      userId: userInfo.userId,
    });
    setBalance(newBalance);
  };

  return (
    <div>
      <div className={`${activeBets.length > 0 ? "block" : "hidden"}`}>
        {activeBets.map((activeBet, index) => (
          <div key={index} className="border-b-2 border-zinc-7 py-[10px]">
            <div className="flex gap-2 text-zinc-3 text-[12px] px-[17px]">
              <p>{activeBet.date}</p>
              <p>{activeBet.time}</p>
            </div>
            {activeBet.selectedMatches?.map((selectedMatch, matchIndex) => (
              <Link
                to={`/FullMatch/homeTeam=${selectedMatch.homeClub}&awayTeam=${selectedMatch.awayClub}&?gameId=${selectedMatch.matchId}`}
                className="flex justify-between bg-zinc-8 p-3 rounded-[13px] mx-2 my-[5px] items-center"
                key={matchIndex}
              >
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-2 items-baseline capitalize">
                    <p
                      className={`font-bold text-[14px] mobile:max-w-[50px] tablet:max-w-[70px] truncate ${
                        pathname === "/me/my-bets"
                          ? "pc:max-w-[100%]"
                          : "pc:w-[55px]"
                      }`}
                    >
                      {selectedMatch.homeClub}
                    </p>
                    <p className="text-[12px] text-zinc-5 uppercase">vs</p>
                    <p
                      className={`font-bold text-[14px] mobile:max-w-[50px] tablet:max-w-[70px] pc:max-w-[100%] truncate ${
                        pathname === "/me/my-bets"
                          ? "pc:max-w-[100%]"
                          : "pc:w-[55px]"
                      }`}
                    >
                      {selectedMatch.awayClub}
                    </p>
                    <div
                      className={`gap-1 text-[10px] text-zinc-3 ${
                        pathname === "/me/my-bets" ? "flex" : "hidden"
                      }`}
                    >
                      (<p>{selectedMatch.time}</p>
                      <p>{selectedMatch.date}</p>)
                    </div>
                  </div>
                  <div
                    className={`gap-1 text-[10px] text-zinc-3 ${
                      pathname !== "/me/my-bets" ? "flex" : "hidden"
                    }`}
                  >
                    (<p>{selectedMatch.time}</p>
                    <p>{selectedMatch.date}</p>)
                  </div>
                  <p className="font-bold capitalize">
                    {selectedMatch.oddName}
                  </p>
                  <p className="text-[12px] text-zinc-5">
                    {selectedMatch.marketType}
                  </p>
                </div>
                <p className="font-semibold">{selectedMatch.odd}</p>
              </Link>
            ))}
            <div className="px-[17px] border-t-2 border-zinc-7 py-2 mt-2">
              <div className="flex justify-between items-center">
                <p className="text-zinc-3 text-[14px]">Total Stake</p>
                <p className="font-bold">&#8358;{activeBet.amount}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-zinc-3 text-[14px]">To Return</p>
                <p className="font-bold">&#8358;{activeBet.toReturn}</p>
              </div>
              <button
                onClick={() =>
                  handleCashOut(
                    Number(activeBet.amount),
                    activeBet.date,
                    activeBet.time
                  )
                }
                className="bg-blue-7 capitalize text-center font-bold p-2 rounded-full w-full mt-1 text-zinc-3"
              >
                Cash Out
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`text-center text-[14px] px-2 ${
          activeBets.length <= 0 ? "block" : "hidden"
        }`}
      >
        <p className="capitalize">
          You do not have any active bets{" "}
          <Link to={"/"} className="text-blue-6">
            Place Bet Now
          </Link>
        </p>
      </div>
    </div>
  );
};
