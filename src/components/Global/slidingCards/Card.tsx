import { FireIcon } from "../Icons/FireIcon";
import { Link } from "react-router-dom";
import { ChevronRight } from "../Icons/ChevronRight";
import { useMoveBetCards } from "../../base/hooks/useMoveBetCards";
import { PrevAndNextButton } from "./PrevAndNextButton";
import { OddsButtons } from "./OddsButtons";

export const Card = ({ datas }: { datas: any }) => {
  const { cardContainerRef, slideLeft, slideRight } = useMoveBetCards();

  return (
    <div
      className="flex gap-3 overflow-x-auto no-scrollbar snap-x-mandatory "
      ref={cardContainerRef}
      style={{ scrollSnapType: "x mandatory" }}
    >
      <PrevAndNextButton slideLeft={slideLeft} slideRight={slideRight} />
      {datas.map((data: any, index: number) => (
        <div
          key={index}
          className="bg-zinc-8 px-[15px] pt-[2px] pb-[8px] gap-2 text-ellipsis pc:h-[168px] rounded-[8px] flex flex-col justify-evenly"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="mobile:text-[10px] pc:text-xs flex gap-1 pt-1 mobile:mt-2 pc:mt-0">
            <p>best odds </p>
            <FireIcon extraStyle="text-rose-6 text-xs" />
          </div>
          <Link to={""} className="text-zinc-0">
            <div className="flex items-center justify-between pc:hidden">
              <div className="text-[12px]">
                <div className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px]">
                    <img
                      src={`${data.teams?.home.logo}`}
                      alt=""
                      className="w-full h-full object-contain bg-zinc-0 p-0.5"
                    />
                  </div>
                  <p className="w-[100px] font-bold truncate text-left">
                    {data.teams?.home.name}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[16px] h-[16px]">
                    <img
                      src={`${data.teams?.away.logo}`}
                      alt=""
                      className="w-full h-full object-contain bg-zinc-0 p-0.5"
                    />
                  </div>
                  <p className="w-[100px] font-bold truncate text-left">
                    {data.teams?.away.name}
                  </p>
                </div>
              </div>
              <div className="text-[8px] text-right">
                <p className="text-[20px] font-bold">{data.matchDate?.time}</p>
                <p>{data.matchDate?.date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-[247px] text-center text-[12px] mobile:hidden pc:flex">
              <div className="w-[80px] h-[60] flex flex-col items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    src={`${data.teams?.home.logo}`}
                    alt=""
                    className="w-full h-full object-contain bg-zinc-0 p-0.5"
                  />
                </div>
                <p className="w-[80px] font-bold truncate">
                  {data.teams?.home.name}
                </p>
              </div>
              <div>
                <p className="text-[24px] font-bold">{data.matchDate?.time}</p>
                <p>{data.matchDate?.date}</p>
              </div>
              <div className="w-[80px] h-[60] flex flex-col items-center">
                <div className="w-[40px] h-[40px]">
                  <img
                    src={`${data.teams?.away.logo}`}
                    alt=""
                    className="w-full h-full object-contain bg-zinc-0 p-0.5"
                  />
                </div>
                <p className="w-[80px] font-bold truncate">
                  {data.teams?.away.name}
                </p>
              </div>
            </div>
          </Link>

          <div>
            <OddsButtons gameOdds={data} />
          </div>

          <div className="text-[10px] flex mobile:justify-center pc:justify-between">
            <p className="mobile:hidden pc:block">{data.league}</p>
            <Link to={""} className="capitalize flex items-center gap-1">
              more event <ChevronRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
