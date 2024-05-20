import { Link } from "react-router-dom";
import { MyBet } from "../MyBet/MyBet";
import { ChevronRight } from "../Icons/ChevronRight";
import { useActiveBetsStore } from "../../base/store/useActiveBetsStore";

export const MyBets = () => {
const { activeBets } = useActiveBetsStore((state) => ({
  activeBets: state.activeBets,
}));

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
      <div
        className={`capitalize h-[350px] bg-zinc-9 rounded-b-[20px] overflow-y-auto no-scrollbar ${
          activeBets.length <= 0
            ? "flex items-center justify-center "
            : ""
        }`}
      >
        <MyBet />
      </div>
    </div>
  );
};
