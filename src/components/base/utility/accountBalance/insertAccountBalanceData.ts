import { toast } from "sonner";
import supabase from "../../../../config/superBaseClient";

export const insertAccountBalanceData = async (userId: string) => {
  const datas = { balance: "0.00", userId };

  const { error } = await supabase
    .from("accountBalance")
    .insert([datas])
    .select();
  if (error) {
    toast.error(
      "An error occurred while toping up account balance, check your internet connection and reload"
    );
  }
};
