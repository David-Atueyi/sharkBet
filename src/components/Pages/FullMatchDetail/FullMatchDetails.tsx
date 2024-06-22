import { useSearchParams } from "react-router-dom";
import { FullMatchHeaderPc } from "./FullMatchHeaderPc";
import { FullMatchHeaderMobile } from "./FullMatchHeaderMobile";
import { Odds } from "./Odds";
import { useFullMatchDetailsStore } from "../../base/store/useFullMatchDetailsStore";
import { useEffect } from "react";
import { useMatchesFromDataBase } from "../../base/store/useMatchesFromDataBase";

export const FullMatchDetails = () => {
  const [query] = useSearchParams();
  const gameId = query.get("gameId");

  const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
    matchesFromDataBase: state.matchesFromDataBase,
  }));

  const selectedMatch = matchesFromDataBase.find((game) => game.id === gameId);

  const { setFullMatchDetailsFound } = useFullMatchDetailsStore((state) => ({
    setFullMatchDetailsFound: state.setFullMatchDetailsFound,
  }));

  useEffect(() => {
    if (selectedMatch) {
      setFullMatchDetailsFound(selectedMatch);
    }
    return;
  }, [selectedMatch, setFullMatchDetailsFound]);

  return (
    <div className="flex flex-col gap-[18px] pc:bg-zinc-8 pt-[15px] pb-[20px] rounded-[20px]">
      <FullMatchHeaderMobile />
      <FullMatchHeaderPc />
      <Odds />
    </div>
  );
};
