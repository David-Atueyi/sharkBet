import { useSearchParams } from "react-router-dom";
import All from "../../base/dummyDatas/allMatches.json";
import { Game } from "../../Global/Games/Game";

export const Games = () => {
  const [query] = useSearchParams();
  const identifier = query.get("identifier");

  const matchesFound =
    identifier === "allLeagues"
      ? All
      : All.filter(
          (match) =>
            match.country === identifier || match.matchDate.date === identifier
        );


  return (
    <div className="py-7 flex flex-col gap-5 bg-zinc-8 rounded-[20px]">
      <div className="font-black  text-[26px] pl-3 h-[24px] capitalize bg-gradient-to-r from-zinc-8 via-zinc-10 to-zinc-10">
        <p className="-translate-y-[7px]">soccer</p>
      </div>
      <div>
        <Game allLeague={matchesFound} />
      </div>
    </div>
  );


};
