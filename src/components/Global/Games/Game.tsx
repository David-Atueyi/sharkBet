import { ILeagueMatch } from "../../base/interface/ILeagueMatch";
import { Link } from "react-router-dom";
import { ILeague } from "./leagues";



export const Game = ({
  leagueTitle,
  allLeague,
}: {
  leagueTitle: ILeague;
  allLeague: ILeagueMatch[];
}) => {
  return (
    <div className=" capitalize">
      <p className="text-[12px] h-[20px] px-[15px]">
        {leagueTitle.country} - {leagueTitle.leagueName}
      </p>
      <div className=" flex justify-end pl-[15px] mobile:pr-[6px] pc:pr-[14px] bg-zinc-8 py-1 items-center border-b-2 border-zinc-10">
        <div className="flex justify-between text-center text-[10px] pc:gap-4 items-center">
          <div className="flex justify-between">
            <p className="w-[60px]">1</p>
            <p className="w-[60px]">x</p>
            <p className="w-[60px]">2</p>
          </div>
          <div className="flex justify-between pc:pr-1 mobile:hidden pc:flex">
            <p className="mobile:w-[55px] pc:w-[60px]">goals</p>
            <p className="mobile:w-[55px] pc:w-[60px]">over</p>
            <p className="mobile:w-[55px] pc:w-[60px]">under</p>
          </div>
        </div>
      </div>
      {allLeague.map((data: ILeagueMatch, index: number) => (
        <div
          className="px-[15px] bg-zinc-8 pt-[12px] pb-[6px] border-b-2 border-zinc-10"
          key={index}
        >
          <div className="flex gap-4 text-[10px] text-zinc-4 mb-1">
            <p>
              {data.matchDate?.time} / {data.matchDate?.date}
            </p>
            <p>{data.league}</p>
          </div>
          <div className="flex justify-between">
            <Link to={""} className="text-[14px] w-full">
              <p className="w-[100px] truncate tablet:w-[180px] pc:w-[100px]">
                {data.teams?.home.name}
              </p>
              <p className="w-[100px] truncate tablet:w-[180px] pc:w-[100px] ">
                {data.teams?.away.name}
              </p>
            </Link>
            <div className="flex justify-between text-center gap-3 items-center text-blue-6 text-[12px]">
              <div className="flex gap-[3px]">
                <button className="mobile:w-[52px] pc:w-[60px] h-[40px] rounded-[8px] bg-zinc-7 flex justify-center items-center hover:bg-zinc-10">
                  {data.teams.home.market.homeWin.odd}
                </button>
                <button className="mobile:w-[52px] pc:w-[60px] h-[40px] rounded-[8px]  bg-zinc-7 flex justify-center items-center hover:bg-zinc-10">
                  {data.generalMarkets.fullTimeDraw.odd}
                </button>
                <button className="mobile:w-[52px] pc:w-[60px] h-[40px] rounded-[8px]  bg-zinc-7 flex justify-center items-center hover:bg-zinc-10">
                  {data.teams.away.market.awayWin.odd}
                </button>
              </div>
              <div className="flex gap-[3px] mobile:hidden pc:flex">
                <button className="mobile:w-[52px] pc:w-[60px] flex justify-center items-center h-[40px] rounded-[8px] bg-zinc-7 hover:bg-zinc-10">
                  0.5
                </button>
                <button className="mobile:w-[52px] pc:w-[60px] h-[40px] rounded-[8px]  bg-zinc-7 flex justify-center items-center hover:bg-zinc-10">
                  {data.generalMarkets.overAndUnder.overGoals["0.5"].odd}
                </button>
                <button className="mobile:w-[52px] pc:w-[60px] h-[40px] rounded-[8px]  bg-zinc-7 flex justify-center items-center hover:bg-zinc-10">
                  {data.generalMarkets.overAndUnder.underGoals["0.5"].odd}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
