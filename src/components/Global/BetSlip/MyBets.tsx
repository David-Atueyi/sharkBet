import { Link } from "react-router-dom";
import { MyBet } from "../MyBet/MyBet";
import { ChevronRight } from "../Icons/ChevronRight";

export const MyBets = () => {
  return (
    <div>
      <div className="border-t-2 border-zinc-5 text-right flex justify-between items-center capitalize bg-zinc-9 px-3">
        <p className="p-2 text-sm cursor-pointer">all unsettled</p>
        <Link
          to={""}
          className="flex items-center text-[10px] text-blue-7 outline-none border-2 border-blue-7 pt-[2px] px-2 rounded-full"
        >
          settled
          <ChevronRight extraStyle="text-[10px] text-blue-7" />
        </Link>
      </div>
      <div className="capitalize h-[355px] bg-zinc-9 rounded-b-[20px] flex flex-col overflow-y-auto no-scrollbar">
        {/* <p>you have no unsettled bet</p> */}
        <MyBet />
        <MyBet />
        <MyBet />
        <MyBet />
        <MyBet />
        <MyBet />
        <MyBet />
        <MyBet />
        <MyBet />
      </div>
    </div>
  );
};
