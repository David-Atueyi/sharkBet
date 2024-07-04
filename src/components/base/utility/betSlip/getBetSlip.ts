import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";
import { SelectedBet } from "../../interface/IBetStore";
import { toast } from "sonner";

export const getBetSlip = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedBetSlip = async (): Promise<SelectedBet[]> => {
    if (!userInfo.userId) {
      toast.error("An error has occured occured reload the page ");
      return [];
    }

    const { data: betSlip, error } = await supabase
      .from("betSlip")
      .select("*")
      .eq("userId", userInfo.userId);

    if (error) {
      toast.error("An error occurred while getting your bet slip data, check your internet connection and reload");
      return [];
    }
    return betSlip as SelectedBet[];
  };

  return useQuery({
    queryKey: ["betSlipData"],
    queryFn: fetchedBetSlip,
    enabled: !!userInfo.userId,
  });
};
