import { useState } from "react";
import { ILeagueMatch } from "../interface/ILeagueMatch";
import { leagues } from "../../Global/Games/leagues";
import { useGamesUtilities } from "../store/useGamesUtilities";
import All from "../../base/dummyDatas/allMatches.json";

export const useHandleActiveLeague = () => {
  const [allLeague, setAllLeague] = useState<ILeagueMatch[]>(All);
  const [leagueTitle, setLeagueTitle] = useState<{
    country: string;
    leagueName: string;
  }>({
    country: leagues[0].country,
    leagueName: leagues[0].leagueName,
  });
  const { setActiveLeagueIndex } = useGamesUtilities((state) => ({
    setActiveLeagueIndex: state.setActiveLeagueIndex,
  }));

  const handleButtonClick = (
    index: number,
    title: { country: string; leagueName: string }
  ) => {
    //
    setActiveLeagueIndex(index);
    //
    setLeagueTitle({
      country: title.country,
      leagueName: title.leagueName,
    });
    //
    const filteredMatches = All.filter(
      (match) => match.country === leagues[index].country
    );
    leagues[index].country === "All"
      ? setAllLeague(All)
      : setAllLeague(filteredMatches);
  };

  return { allLeague, leagueTitle, handleButtonClick };
};
