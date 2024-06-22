import { useSearchParams } from "react-router-dom";
import { Game } from "../../Global/Games/Game";
import { LoadingSkeleton } from "../../Global/LoadingSkeleton/LoadingSkeleton";
import { GamesLodingSkeletonTemplate } from "../../Global/Games/GamesLodingSkeletonTemplate";
import { getMatchesFromDatabase } from "../../base/utility/getMatchesFromDatabase";

export const Games = () => {
  const { data: matchesFromDataBase = [] } = getMatchesFromDatabase(); 

  const [query] = useSearchParams();
  const identifier = query.get("identifier");

  const matchesFound =
    identifier === "allLeagues"
      ? matchesFromDataBase
      : matchesFromDataBase.filter(
          (match) => match.country === identifier || match.date === identifier
        );

  return (
    <div className=" pc:min-h-[70dvh]">
      <div className="py-7 flex flex-col gap-5 bg-zinc-8 rounded-[20px]">
        <div className="font-black  text-[26px] pl-3 h-[24px] capitalize bg-gradient-to-r from-zinc-8 via-zinc-10 to-zinc-10">
          <p className="-translate-y-[7px]">soccer</p>
        </div>
        <div>
          <Game allLeague={matchesFound} />
        </div>
        <LoadingSkeleton LodingSkeletonTemplate={GamesLodingSkeletonTemplate} />
      </div>
    </div>
  );
};
