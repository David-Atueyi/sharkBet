import { Link } from "react-router-dom";
import { PrevAndNextButton } from "./PrevAndNextButton";
import { OddsButtons } from "./OddsButtons";
import { useMoveBetCards } from "../../../base/hooks/useMoveBetCards";
import { useCardUtilities } from "../../../base/store/useCardUtilities";
import { FireIcon } from "../../../Global/Icons/FireIcon";
import { ChevronRight } from "../../../Global/Icons/ChevronRight";
import { Match } from "../../../base/store/useMatchesFromDataBase";

export const Card = ({ datas }: { datas: Match[] }) => {
  const { cardContainerRef, slideLeft, slideRight } = useMoveBetCards();
  const { hover } = useCardUtilities((state) => ({
    hover: state.hover,
  }));

  return (
    <div
      className="flex gap-3 overflow-x-auto no-scrollbar snap-x-mandatory "
      ref={cardContainerRef}
      style={{ scrollSnapType: "x mandatory" }}
    >
      <PrevAndNextButton
        slideLeft={slideLeft}
        slideRight={slideRight}
        hover={hover}
      />

      {datas.map((data: Match, index: number) => (
        <div
          key={index}
          className="bg-zinc-8 px-[15px] pt-[2px] pb-[8px] gap-2 text-ellipsis pc:h-[168px] rounded-[8px] flex flex-col justify-evenly"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="mobile:text-[10px] pc:text-xs flex gap-1 pt-1 mobile:mt-2 pc:mt-0">
            <p>best odds </p>
            <FireIcon extraStyle="text-rose-6 text-xs" />
          </div>
          <Link
            to={`/FullMatch/homeTeam=${data.homeTeamName}&awayTeam=${data.awayTeamName}&?gameId=${data.id}`}
            className="text-zinc-0"
          >
            <div className="flex items-center justify-between pc:hidden">
              <div className="text-[12px]">
                <div className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px]">
                    <img
                      src={`${data.homeTeamLogo}`}
                      alt=""
                      className="w-full h-full object-contain bg-zinc-0 p-0.5"
                    />
                  </div>
                  <p className="w-[100px] font-bold truncate text-left">
                    {data.homeTeamName}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px]">
                    <img
                      src={`${data.awayTeamLogo}`}
                      alt=""
                      className="w-full h-full object-contain bg-zinc-0 p-0.5"
                    />
                  </div>
                  <p className="w-[100px] font-bold truncate text-left">
                    {data.awayTeamName}
                  </p>
                </div>
              </div>
              <div className="text-[8px] text-right">
                <p className="text-[20px] font-bold">{data.matchTime}</p>
                <p>{data.matchDate}</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-[247px] text-center text-[12px] mobile:hidden pc:flex">
              <div className="w-[80px] h-[60] flex flex-col items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    src={`${data.homeTeamLogo}`}
                    alt=""
                    className="w-full h-full object-contain bg-zinc-0 p-0.5"
                  />
                </div>
                <p className="w-[80px] font-bold truncate">
                  {data.homeTeamName}
                </p>
              </div>
              <div>
                <p className="text-[24px] font-bold">{data.matchTime}</p>
                <p>{data.matchDate}</p>
              </div>
              <div className="w-[80px] h-[60] flex flex-col items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    src={`${data.awayTeamLogo}`}
                    alt=""
                    className="w-full h-full object-contain bg-zinc-0 p-0.5"
                  />
                </div>
                <p className="w-[80px] font-bold truncate">
                  {data.awayTeamName}
                </p>
              </div>
            </div>
          </Link>

          <div>
            <OddsButtons gameOdds={data} />
          </div>

          <div className="text-[10px] flex mobile:justify-center pc:justify-between">
            <p className="mobile:hidden pc:block">{data.league}</p>
            <Link
              to={`/FullMatch/homeTeam=${data.homeTeamName}&awayTeam=${data.awayTeamName}&?gameId=${data.id}`}
              className="capitalize flex items-center gap-1"
            >
              more event <ChevronRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
