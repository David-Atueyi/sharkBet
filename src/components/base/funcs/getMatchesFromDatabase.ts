import supabase from "../../../config/superBaseClient";
import { useMatchesFromDataBase } from "../store/useMatchesFromDataBase";

export const getMatchesFromDatabase = async () => {
  const setMatchesFromDataBase =
    useMatchesFromDataBase.getState().setMatchesFromDataBase;

  const { data: matches, error } = await supabase.from("match").select(`
      *,
      market:market!matchId(
        teamsOdds:teamsOdds!marketId(*),
        generalMarkets:generalMarkets!marketId(
          fullTimeResult:fullTimeResult!generalMarketsId(*),
          overs:overs!generalMarketsId(*),
          unders:unders!generalMarketsId(*),
          bothTeamsToScore:bothTeamsToScore!generalMarketsId(*)
        )
      )
    `);

  if (error) {
    console.error("Error fetching match:", error.message, error.details);
    return [];
  } else if (matches) {
    setMatchesFromDataBase(matches);
  }
};
