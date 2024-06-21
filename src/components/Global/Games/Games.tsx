
import { GamesHeader } from "./GamesHeader";
import { leagues } from "./leagues";
import { Game } from "./Game";
import { useHandleActiveLeague } from "../../base/hooks/useHandleActiveLeague";
import { GameLoadingSkeleton } from "./GameLoadingSkeleton";

export const Games = () => {
 const {allLeague,leagueTitle,handleButtonClick}=useHandleActiveLeague()

  return (
    <div className="bg-zinc-9 rounded-[20px] min-h-[200px] py-[20px]">
      {/*  */}
      <GamesHeader handleButtonClick={handleButtonClick} leagues={leagues} />
      {/*  */}
      <Game allLeague={allLeague} leagueTitle={leagueTitle} />
      {/*  */}
      <GameLoadingSkeleton/>
    </div>
  );
};
