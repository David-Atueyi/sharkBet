import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";

interface IDatas {
    homeClub: string;
    awayClub: string;
    odd: number | undefined;
    marketType: string | undefined;
    oddName: string | undefined;
    date: string;
    time: string;
    userId: string;
  }

export const getBetSlip = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedBetSlip = async ():Promise<IDatas[]> => {
    if (!userInfo.userId) {
      console.warn("An error occured refresh the page ");
      return [];
    }

    const { data: betSlip, error } = await supabase
      .from("betSlip")
      .select("*")
      .eq("userId", userInfo.userId);

    if (error) {
      console.error(error);
      return [];
    }
    return betSlip as IDatas[];
  };

  return useQuery({
    queryKey: ["betSlipData"],
    queryFn: fetchedBetSlip,
    enabled: !!userInfo.userId,
  });
};
