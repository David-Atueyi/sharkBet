import { createContext } from "react";
import { GamesHeader } from "./GamesHeader";
import { Game } from "./Game";
import { useHandleActiveLeague } from "../../base/hooks/useHandleActiveLeague";


export const leagueMatchesContext = createContext<any>({});

export const Games = () => {
  const {
    allLeague,
    setAllLeague,
    activeLeagueIndex,
    handleButtonClick,
    leagueMatches,
    leagues,
    leagueTitle,
    setLeagueTitle,
  } = useHandleActiveLeague();

  return (
    <leagueMatchesContext.Provider
      value={{
        handleButtonClick,
        activeLeagueIndex,
        allLeague,
        leagueMatches,
        setAllLeague,
        leagues,
        leagueTitle,
        setLeagueTitle,
      }}
    >
      <div className="bg-zinc-9 rounded-[20px] min-h-[200px] py-[20px]">
        <GamesHeader />
        <Game />
      </div>
    </leagueMatchesContext.Provider>
  );
};
