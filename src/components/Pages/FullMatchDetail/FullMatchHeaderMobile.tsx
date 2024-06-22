import { Link } from "react-router-dom";
import { ChevronLeft } from "../../Global/Icons/ChevronLeft";
import { useFullMatchDetailsStore } from "../../base/store/useFullMatchDetailsStore";

export const FullMatchHeaderMobile = () => {
  
   const { fullMatchDetailsFound } =
     useFullMatchDetailsStore((state) => ({
       fullMatchDetailsFound: state.fullMatchDetailsFound,
     }));

  return (
    <div className="pc:hidden capitalize ">
      <div className="text-[18px] bg-gradient-to-r from-blue-9 from-2% via-zinc-10 via-50% to-blue-9 to-100% h-[44px] flex items-center">
        <Link to={"/"} className="px-[20px] h-full flex items-center gap-3 ">
          <ChevronLeft extraStyle="" />
          <span>details</span>
        </Link>
      </div>
      <div className="flex flex-col items-center px-[15px] py-[15px] gap-[18px]">
        <div className="text-[11px] flex gap-2">
          <span>{fullMatchDetailsFound.country}</span>
          <span>-</span>
          <Link
            to={`/Games/&?identifier=${fullMatchDetailsFound.country}`}
            className="underline"
          >
            {fullMatchDetailsFound.league}
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <span className="max-w-[120px] truncate">
            {fullMatchDetailsFound.homeTeamName}
          </span>
          <span className="text-[10px] text-zinc-4 lowercase">vs</span>
          <span className="max-w-[120px] truncate">
            {fullMatchDetailsFound.awayTeamName}
          </span>
        </div>
        <div className="flex gap-2 text-[12px] text-zinc-4">
          <span>{fullMatchDetailsFound.time}</span>
          <span>{fullMatchDetailsFound.date}</span>
        </div>
      </div>
    </div>
  );
};
