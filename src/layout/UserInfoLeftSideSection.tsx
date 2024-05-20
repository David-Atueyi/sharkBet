import { Link } from "react-router-dom";
import { ChevronRight } from "../components/Global/Icons/ChevronRight";
import { useAccountBalance } from "../components/base/store/useAccountBalance";

export const UserInfoLeftSideSection = () => {
 const { accountBalance } = useAccountBalance((state) => ({
   accountBalance: state.accountBalance,
 }));

  return (
    <div className="w-[20%] hidden pc:block rounded-[20px] bg-zinc-1 text-zinc-9 capitalize pb-2 h-fit">
      <div className="bg-blue-6 h-[50px] rounded-t-[20px] flex items-center px-6 gap-1">
        <p className="uppercase font-black text-[23px]">hi,</p>
        <p className="font-bold">david</p>
      </div>
      <div className="px-4">
        <p>my balance</p>
        <p className="font-extrabold text-[18px] flex gap-2">
          <span>NGN</span>
          <span className="w-[100%] truncate">
            {accountBalance.toLocaleString()}
          </span>
        </p>
      </div>
      <Link
        to={"/me/deposit"}
        className="flex justify-between px-4 py-2 border-y-8 border-zinc-3 focus:bg-blue-7/45 focus:font-bold focus:border-l-4 focus:border-l-blue-7"
      >
        <p>deposit</p>
        <ChevronRight />
      </Link>
      <div className="bg-zinc-3 flex flex-col gap-1">
        <Link
          to={"/me/my-bets"}
          className="flex justify-between px-4 py-2 bg-zinc-1 focus:bg-blue-7/45 focus:font-bold focus:border-l-4 focus:border-l-blue-7"
        >
          <p>my bets</p>
          <ChevronRight />
        </Link>
        <Link
          to={"/me/transaction-history"}
          className="flex justify-between px-4 py-2 bg-zinc-1 focus:bg-blue-7/45 focus:font-bold focus:border-l-4 focus:border-l-blue-7"
        >
          <p>my transaction</p>
          <ChevronRight />
        </Link>
      </div>
      <Link
        to={"/me/account-info"}
        className="flex justify-between px-4 py-2 border-t-8 border-zinc-3 focus:bg-blue-7/45 focus:font-bold focus:border-l-4 focus:border-l-blue-7 rounded-b-[8px]"
      >
        <p>my account info</p>
        <ChevronRight />
      </Link>
    </div>
  );
};
