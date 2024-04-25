import All from "../../base/dummyDatas/allMatches.json";
import England from "../../base/dummyDatas/england.json";
import Spain from "../../base/dummyDatas/spain.json";
import Italy from "../../base/dummyDatas/italy.json";
import France from "../../base/dummyDatas/france.json";
import Germany from "../../base/dummyDatas/germany.json";
import { createContext, useState } from "react";
import { HeadingForPc } from "./HeadingForPc";
import { Card } from "./Card";
import { ILeagueMatch } from "../../base/interface/ILeagueMatch";
import { LeagueTabs } from "./LeagueTabs";

export const cardContext = createContext<any>({});
const leagueMatches = [All, England, Spain, Italy, France, Germany];

export const Cards = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [allLeague, setAllLeague] = useState<ILeagueMatch[]>(All);

  return (
    <cardContext.Provider
      value={{ hover, setHover, leagueMatches, setAllLeague }}
    >
      <div
        className="text-zinc-4 rounded-[20px] my-[20px] pb-[24px] pl-[15px] pt-[16px] pr-[5px] mobile:bg-gradient-to-b from-zinc-8 via-zinc-9/10 to-zinc-9/10 pc:bg-zinc-9 relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/*  */}
        <LeagueTabs />
        {/*  */}
        <HeadingForPc />
        {/*  */}
        <Card datas={allLeague} />
      </div>
    </cardContext.Provider>
  );
};
