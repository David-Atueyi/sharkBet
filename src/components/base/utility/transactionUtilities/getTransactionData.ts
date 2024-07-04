import { useQuery } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { ITransactionHistory } from "../../interface/ITransactionHistory";
import { useGetUserInfo } from "../../store/useGetUserInfo";
import { toast } from "sonner";

export const getTransactionData = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const fetchedTransactions = async (): Promise<ITransactionHistory[]> => {
    if (!userInfo.userId) {
      toast.error("An error occured reload the page");
      return [];
    }

    const { data: transactions, error } = await supabase
      .from("transactions")
      .select("created_at,transactionType,amount,status")
      .eq("userId", userInfo.userId);

    if (error) {
      toast.error("An error occurred getting your transaction history data, check your internet connection and reload");
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
