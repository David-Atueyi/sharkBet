import { useSearchParams } from "react-router-dom";
import All from "../../base/dummyDatas/allMatches.json";
import { Game } from "../../Global/Games/Game";

export const Games = () => {
  const [query] = useSearchParams();
  const identifier = query.get("identifier");

  const matchesFound =
    identifier === "allLeagues"
      ? All
      : All.filter(
          (match) =>
            match.country === identifier || match.matchDate.date === identifier
        );

  console.log(matchesFound);

    return <Game allLeague={matchesFound} />;
};
