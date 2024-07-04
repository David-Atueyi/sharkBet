import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";
import { SelectedBet } from "../../interface/IBetStore";
import { toast } from "sonner";

interface IDatas {
  time: string;
  date: string;
  totalStake: string;
  toReturn: string;
  created_at: Date;
  myBetsGames: SelectedBet[];
}

export const getMyBets = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedMyBets = async (): Promise<IDatas[]> => {
    if (!userInfo.userId) {
      toast.error("An error occured reload the page ");
      return [];
    }
    const { data: myBets, error } = await supabase
      .from("myBets")
      .select(`* , myBetsGames (*)`)
      .eq("userId", userInfo.userId);

    if (error) {
      toast.error("An error occured while geting my bets data, check your internet connection and reload");
    }

    return myBets as IDatas[];
  };
  return useQuery({
    queryKey: ["myBets"],
    queryFn: fetchedMyBets,
    enabled: !!userInfo.userId,
  });
};
