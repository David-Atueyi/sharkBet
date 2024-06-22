import { useQuery } from "@tanstack/react-query";
import supabase from "../../../config/superBaseClient";
import { Match } from "../interface/IMatch";

export const getMatchesFromDatabase = () => {
  const fetchedData = async (): Promise<Match[]> => {
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
    }
    return matches as Match[];
  };

  return useQuery({
    queryKey: ["matches"],
    queryFn: fetchedData,
  });
};
