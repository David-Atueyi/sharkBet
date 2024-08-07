import { useEffect, useState } from "react";
import { leagues } from "../../Global/Games/leagues";
import { useGamesUtilities } from "../store/useGamesUtilities";
import { Match } from "../interface/IMatch";
import { getMatchesFromDatabase } from "../utility/getMatchesFromDatabase";

export const useHandleActiveLeague = () => {
  const { data: matchesFromDataBase = [] } = getMatchesFromDatabase();

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
    if (matchesFromDataBase.length > 0) {
      setAllLeague(matchesFromDataBase);
    }
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
