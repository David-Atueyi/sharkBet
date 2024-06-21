import { useEffect, useState } from "react";
import { leagues } from "../../Global/Games/leagues";
import { useGamesUtilities } from "../store/useGamesUtilities";
import { Match, useMatchesFromDataBase } from "../store/useMatchesFromDataBase";

export const useHandleActiveLeague = () => {
  const { matchesFromDataBase } = useMatchesFromDataBase((state) => ({
    matchesFromDataBase: state.matchesFromDataBase,
  }));

  const [allLeague, setAllLeague] = useState<Match[]>(matchesFromDataBase);
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

  useEffect(() => {
    setAllLeague(matchesFromDataBase);
  }, [matchesFromDataBase]);

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
    const filteredMatches = matchesFromDataBase.filter(
      (match) => match.country === leagues[index].country
    );
    leagues[index].country === "All"
      ? setAllLeague(matchesFromDataBase)
      : setAllLeague(filteredMatches);
  };

  return { allLeague, leagueTitle, handleButtonClick };
};
