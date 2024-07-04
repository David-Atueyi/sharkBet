import { useQuery } from "@tanstack/react-query";
import supabase from "../../../config/superBaseClient";
import { Match } from "../interface/IMatch";
import { toast } from "sonner";

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
      toast.error("An error occured while loading your data, check your internet connection and reload");
      return [];
    }
    return matches as Match[];
  };

  return useQuery({
    queryKey: ["matches"],
    queryFn: fetchedData,
  });
};
