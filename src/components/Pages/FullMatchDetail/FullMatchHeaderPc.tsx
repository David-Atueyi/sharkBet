import { Link } from "react-router-dom";
import { ChevronLeft } from "../../Global/Icons/ChevronLeft";
import { useFullMatchDetailsStore } from "../../base/store/useFullMatchDetailsStore";

export const FullMatchHeaderPc = () => {
   const { fullMatchDetailsFound } = useFullMatchDetailsStore((state) => ({
     fullMatchDetailsFound: state.fullMatchDetailsFound,
   }));
  
  return (
    <div className="mobile:hidden pc:flex flex-col gap-[18px]">
      <div className="flex gap-2 capitalize items-center text-[14px] px-[15px]">
        <Link to={"/"}>
          <ChevronLeft extraStyle="text-[14px]" />
        </Link>
        <Link
          to={"/Games/&?identifier=allLeagues"}
          className="hover:text-blue-6"
        >
          soccer
        </Link>
        <span className="text-zinc-4">{">"}</span>
        <Link
          to={`/Games/&?identifier=${fullMatchDetailsFound.country}`}
          className="flex gap-1 hover:text-blue-6 "
        >
          <span>{fullMatchDetailsFound.country}</span>
          <span>-</span>
          <span>{fullMatchDetailsFound.league}</span>
        </Link>
        <span className="text-zinc-4">{">"}</span>
        <div className="text-zinc-4 flex gap-1">
          <span className="truncate max-w-[100px]">
            {fullMatchDetailsFound.teams.home.name}
          </span>
          <span className="lowercase">vs</span>
          <span className="truncate max-w-[100px]">
            {fullMatchDetailsFound.teams.away.name}
          </span>
        </div>
      </div>
      <div className="flex gap-2 text-[14px] text-zinc-4 px-[15px]">
        <span>{fullMatchDetailsFound.matchDate.date}</span>
        <span>{fullMatchDetailsFound.matchDate.time}</span>
      </div>
      <div className="flex text-[24px] gap-2 items-center bg-gradient-to-r from-blue-800 to-zinc-900/20 px-[15px] h-[44px] capitalize">
        <span className="max-w-[250px] truncate">
          {fullMatchDetailsFound.teams.home.name}
        </span>
        <span className="text-[12px] text-zinc-4 uppercase font-bold">vs</span>
        <span className="max-w-[250px] truncate">
          {fullMatchDetailsFound.teams.away.name}
        </span>
      </div>
    </div>
  );
};
