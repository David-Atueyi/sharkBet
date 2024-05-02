import All from "../../base/dummyDatas/allMatches.json";
import { createContext, useState } from "react";
import { HeadingForPc } from "./HeadingForPc";
import leagues from "../../base/dummyDatas/leagueLogo.json";
import { ILeagueMatch } from "../../base/interface/ILeagueMatch";
import { Card } from "./Card";
import { useCardUtilities } from "../../base/store/useCardUtilities";
import { LeagueTabs } from "./LeagueTabs";

export const cardContext = createContext<any>({});

export const Cards = () => {
  const [allLeague, setAllLeague] = useState<ILeagueMatch[]>(All);
  const { updateHover, resetHover, setActiveIndex } = useCardUtilities(
    (state) => ({
      updateHover: state.updateHover,
      resetHover: state.resetHover,
      setActiveIndex: state.setActiveIndex,
    })
  );

  const handleLeagueClicked = (index: number) => {
    setActiveIndex(index);
    //
    const filteredMatches = All.filter(
      (match) => match.country === leagues[index].country
    );
    leagues[index].country === "All"
      ? setAllLeague(All)
      : setAllLeague(filteredMatches);
  };

  return (
    <div
      className="text-zinc-4 rounded-[20px] my-[20px] pb-[24px] pl-[15px] pt-[16px] pr-[5px] mobile:bg-gradient-to-b from-zinc-8 via-zinc-8/15 to-zinc-8/15 pc:bg-zinc-9 relative"
      onMouseEnter={updateHover}
      onMouseLeave={resetHover}
    >
      {/*  */}
      <LeagueTabs handleLeagueClicked={handleLeagueClicked} />
      {/*  */}
      <HeadingForPc />
      {/*  */}

      <Card datas={allLeague} />
    </div>
  );
};
