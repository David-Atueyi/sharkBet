import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";
import { toast } from "sonner";

interface IAccountBalance {
  balance: string;
}

export const getAccountBalance = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedData = async (): Promise<IAccountBalance[]> => {
    if (!userInfo || !userInfo.userId) {
      toast.error("An error occured while loading your data, check your internet connection and reload");
      return [];
    }

    const { data: accountBalance, error } = await supabase
      .from("accountBalance")
      .select("balance")
      .eq("userId", userInfo.userId);

    if (error) {
      toast.error("An error occurred while loading your account balance, check your internet connection and reload");
      return [];
    }

    return accountBalance as IAccountBalance[];
  };

  return useQuery({
    queryKey: ["accountBalance", userInfo?.userId],
    queryFn: fetchedData,
    enabled: !!userInfo && !!userInfo.userId, 
  });
};
