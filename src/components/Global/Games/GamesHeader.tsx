import { GamesTabs } from "./GameButton/GamesTabs";
import { ILeagues } from "../../base/interface/ILeagues";
import { useGamesUtilities } from "../../base/store/useGamesUtilities";
import { ILeague } from "./leagues";

export const GamesHeader = ({
  handleButtonClick,
  leagues,
}: {
  handleButtonClick: (index: number, button: ILeagues) => any;
  leagues: ILeague[];
}) => {
  const { activeLeagueIndex } = useGamesUtilities((state) => ({
    activeLeagueIndex: state.activeLeagueIndex,
  }));

  return (
    <div className="mobile:flex pc:block items-center mobile:px-[20px] pc:px-0 mb-3">
      <div className="pc:pl-[15px] h-[25px] text-3xl font-bold flex items-center pc:bg-gradient-to-r from-zinc-9/20 to-zinc-10">
        <p className="capitalize">sport</p>
        <p className="text-[23px] bg-blue-9 rounded-full w-[19px] h-[19px] text-center -translate-x-[4px] translate-y-[1px]">
          <span className="-translate-y-[10px] block rotate-12 text-zinc-8">
            s
          </span>
        </p>
      </div>

      <div className="h-[36px] pl-[15px] flex items-center mobile:border-l-2 mobile:border-b-0 pc:border-b-2 pc:border-l-0 border-zinc-7 gap-5 text-[14px] font-extrabold overflow-x-auto overflow-y-hidden no-scrollbar relative">
        {leagues.map((button: ILeagues, index: number) => (
          <GamesTabs
            key={index}
            nameOfTab={button.country}
            conditionalStyle={
              activeLeagueIndex === index ? "text-blue-7" : "text-zinc-4"
            }
            onClickFunction={() => {
              handleButtonClick(index, button);
            }}
          />
        ))}

        <div className="absolute bottom-0 w-full">
          <div
            className={`bg-gradient-to-r from-blue-7 via-current to-zinc-6 w-[20px] h-[4px] transition-all duration-300 rounded text-blue-7`}
            style={{
              transform: `translateX(calc(${activeLeagueIndex * 58}px))`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
