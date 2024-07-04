import { Link } from "react-router-dom";
import { getTransactionData } from "../../base/utility/transactionUtilities/getTransactionData";
import { TransactionHistoryLoadingSkeletonTemplate } from "./TransactionHistoryLoadingSkeletonTemplate";


export const TransactionHistory = () => {
  const roundToTwoDecimalPlaces = (num:number) => {
    return Math.round(num * 100) / 100;
  };
  
  const { data: transactionHistory = [], isLoading } = getTransactionData();

  return (
    <div className="text-zinc-3 bg-zinc-9 mobile:min-h-[50dvh] mobile:pb-3 tablet:min-h-[57.6dvh] rounded-[20px]">
      <p className="text-center pt-3 font-bold border-b-4 border-zinc-6 text-blue-7">
        My Transactions
      </p>
      <div className={`px-[13px] capitalize`}>
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <TransactionHistoryLoadingSkeletonTemplate key={index} />
            ))
          : transactionHistory.map((transaction, index) => {
              const createdAt = new Date(transaction.created_at);
              const transactionAmount = roundToTwoDecimalPlaces(Number(transaction.amount));
              return (
                <div
                  className="flex justify-between border-b-2 border-b-zinc-5 px-4 py-2"
                  key={index}
                >
                  <div>
                    <div className="flex gap-1 font-semibold text-[18px]">
                      <p>{transaction.transactionType}</p>
                    </div>
                    <div className="flex gap-2 text-[12px]">
                      <p>{createdAt.toLocaleDateString()}</p>
                      <p>{createdAt.toLocaleTimeString()}</p>
                    </div>
                  </div>
                  <div className="text-[12px] flex flex-col items-end">
                    <p className="font-bold text-[20px]">
                      {transactionAmount}
                    </p>
                    <p>{transaction.status}</p>
                  </div>
                </div>
              );
            })}
        {transactionHistory.length === 0 && !isLoading && (
          <p className="text-[14px] p-2 text-center mobile:translate-y-[18.5dvh] tablet:translate-y-[19.5dvh]">
            You have not made any deposits.
            <Link to="/me/deposit" className="text-blue-7 ml-1">
              Top up now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
