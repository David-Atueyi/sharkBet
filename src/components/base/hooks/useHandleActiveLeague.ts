import { useState } from "react";
import All from "../../base/dummyDatas/allMatches.json";
import England from "../../base/dummyDatas/england.json";
import Spain from "../../base/dummyDatas/spain.json";
import Italy from "../../base/dummyDatas/italy.json";
import France from "../../base/dummyDatas/france.json";
import Germany from "../../base/dummyDatas/germany.json";
import { ILeagueMatch } from "../interface/ILeagueMatch";


const leagues = [
  { country: "all", leagueName: "top leagues" },
  { country: "england", leagueName: "EPL" },
  { country: "spain", leagueName: "laliga" },
  { country: "italy", leagueName: "serie a" },
  { country: "france", leagueName: "league 1" },
  { country: "germany", leagueName: "bundesliga" },
];

const leagueMatches = [All, England, Spain, Italy, France, Germany]; 

export const useHandleActiveLeague = () => {
  const [activeLeagueIndex, setActiveLeagueIndex] = useState<number>(0);
  const [allLeague, setAllLeague] = useState<ILeagueMatch[]>(All);
  const [leagueTitle, setLeagueTitle] = useState<{
    country: string;
    leagueName: string;
  }>({
    country: leagues[0].country,
    leagueName: leagues[0].leagueName,
  });

  const handleButtonClick = (index: number) => {
    setActiveLeagueIndex(index);
  };

  return {
    allLeague,
    setAllLeague,
    activeLeagueIndex,
    handleButtonClick,
    leagueMatches,
    leagues,
    leagueTitle,
    setLeagueTitle,
  };
};
