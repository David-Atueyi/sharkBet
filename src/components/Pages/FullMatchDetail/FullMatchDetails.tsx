import { useSearchParams } from "react-router-dom";
import All from "../../base/dummyDatas/allMatches.json";
import { FullMatchHeaderPc } from "./FullMatchHeaderPc";
import { FullMatchHeaderMobile } from "./FullMatchHeaderMobile";
import { Odds } from "./Odds";
import { useFullMatchDetailsStore } from "../../base/store/useFullMatchDetailsStore";
import { ILeagueMatch } from "../../base/interface/ILeagueMatch";
import { useEffect } from "react";

export const FullMatchDetails = () => {
  const [query] = useSearchParams();
  const gameId = query.get("gameId");

  const selectedMatch = All.find(
    (game) => game.id === Number(gameId)
  ) as ILeagueMatch;

  const { setFullMatchDetailsFound } = useFullMatchDetailsStore((state) => ({
    setFullMatchDetailsFound: state.setFullMatchDetailsFound,
  }));

  useEffect(() => {
    selectedMatch ? setFullMatchDetailsFound(selectedMatch) : null;
  }, [selectedMatch]);
  
  

  return (
        <div className="flex flex-col gap-[18px] pc:bg-zinc-8 pt-[15px] pb-[20px] rounded-[20px]">
          <FullMatchHeaderMobile />
          <FullMatchHeaderPc />
          <Odds />
        </div>
  );
};
