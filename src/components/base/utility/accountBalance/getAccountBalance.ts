import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";

interface IAccountBalance {
  balance: string;
}

export const getAccountBalance = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedData = async (): Promise<IAccountBalance[]> => {
    if (!userInfo || !userInfo.userId) {
      console.log("User info is not available");
      return [];
    }

    const { data: accountBalance, error } = await supabase
      .from("accountBalance")
      .select("balance")
      .eq("userId", userInfo.userId);

    if (error) {
      console.log(
        "An error occurred while fetching the account balance data",
        error
      );
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
