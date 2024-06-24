import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { ITransactionHistory } from "../../interface/ITransactionHistory";
import { useGetUserInfo } from "../../store/useGetUserInfo";

export const getTransactionData = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedTransactions = async (): Promise<ITransactionHistory[]> => {
    if (!userInfo.userId) {
      console.warn("An error occured refresh the page ");
      return [];
    }

    const { data: transactions, error } = await supabase
      .from("transactions")
      .select("created_at,transactionType,amount,status")
      .eq("userId", userInfo.userId);

    if (error) {
      console.error(error);
      return [];
    }
    return transactions as ITransactionHistory[];
  };

  return useQuery({
    queryKey: ["transactionsData"],
    queryFn: fetchedTransactions,
    enabled: !!userInfo.userId,
  });
};
