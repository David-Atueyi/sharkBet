import { Link } from "react-router-dom";
import { useTransactionHistoryStore } from "../../base/store/useTransactionHistoryStore";

export const TransactionHistory = () => {

const {  transactionHistory } =
  useTransactionHistoryStore((state) => ({
    transactionHistory: state.transactionHistory,
  }));

  return (
    <div className="text-zinc-3 bg-zinc-9 mobile:min-h-[50dvh] mobile:pb-3 tablet:min-h-[57.6dvh] rounded-[20px]">
      <p className="text-center pt-3 font-bold border-b-4 border-zinc-6 text-blue-7">
        My Transactions
      </p>
      <div
        className={`px-[13px] capitalize ${
          transactionHistory.length <= 0
            ? "h-[50vh] flex justify-center items-center"
            : "block"
        } `}
      >
        {transactionHistory.length > 0 ? (
          transactionHistory.map((transaction, index) => (
            <div
              className="flex justify-between border-b-2 border-b-zinc-5 px-4 py-2"
              key={index}
            >
              <div className="">
                <div className="flex gap-1 font-semibold text-[18px]">
                  <p>{transaction.transactionType}</p>
                </div>
                <div className="flex gap-2 text-[12px]">
                  <p>{transaction.transactionDate}</p>
                  <p>{transaction.transactionTime}</p>
                </div>
              </div>
              <div className="text-[12px] flex flex-col items-end">
                <p className="font-bold text-[20px]">
                  {transaction.transactionAmount}
                </p>
                <p>{transaction.transactionStatus}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[14px] p-2 text-center ">
            You have not made any deposit
            <Link to={"/me/deposit"} className="text-blue-7 ml-1">
              Top up now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
