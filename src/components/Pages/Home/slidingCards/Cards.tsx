import { useEffect, useState } from "react";
import { HeadingForPc } from "./HeadingForPc";
import leagues from "../../../base/dummyDatas/leagueLogo.json";
import { Card } from "./Card";
import { useCardUtilities } from "../../../base/store/useCardUtilities";
import { LeagueTabs } from "./LeagueTabs";
import {
  Match,
  useMatchesFromDataBase,
} from "../../../base/store/useMatchesFromDataBase";
import { LoadingSkeleton } from "../../../Global/LoadingSkeleton/LoadingSkeleton";
import { SlideCardLoadingSkeletonTemplate } from "./SlideCardLoadingSkeletonTemplate";

export const Cards = () => {
  const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
    matchesFromDataBase: state.matchesFromDataBase,
  }));

  const [allLeague, setAllLeague] = useState<Match[]>([]);
  const { updateHover, resetHover, setActiveIndex } = useCardUtilities(
    (state) => ({
      updateHover: state.updateHover,
      resetHover: state.resetHover,
      setActiveIndex: state.setActiveIndex,
    })
  );

  useEffect(() => {
    setAllLeague(matchesFromDataBase);
  }, [matchesFromDataBase]);

  const handleLeagueClicked = (index: number) => {
    setActiveIndex(index);
    const filteredMatches = matchesFromDataBase.filter(
      (match) => match.country === leagues[index].country
    );
    leagues[index].country === "All"
      ? setAllLeague(matchesFromDataBase)
      : setAllLeague(filteredMatches);
  };

  return (
    <div
      className="text-zinc-4 rounded-[20px] my-[20px] mobile:h-[224px] pc:h-[252px] pb-[24px] pl-[15px] pt-[16px] pr-[5px] mobile:bg-gradient-to-b from-zinc-8 via-zinc-8/15 to-zinc-8/15 pc:bg-zinc-9 relative"
      onMouseEnter={updateHover}
      onMouseLeave={resetHover}
    >
      <LeagueTabs handleLeagueClicked={handleLeagueClicked} />
      <HeadingForPc />
      <Card datas={allLeague} />
      <LoadingSkeleton
        LodingSkeletonTemplate={SlideCardLoadingSkeletonTemplate}
        extraStyleOne="overflow-hidden"
        extraStyleTwo="grid grid-cols-4 w-[1150px]"
      />
    </div>
  );
};
