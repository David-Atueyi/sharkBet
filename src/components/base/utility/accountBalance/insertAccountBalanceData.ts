import supabase from "../../../../config/superBaseClient";

export const insertAccountBalanceData = async (userId: string) => {
  const datas = { balance: "0.00", userId };

  const { data: accountBalance, error } = await supabase
    .from("accountBalance")
    .insert([datas])
    .select();
  if (error) {
    console.log("An error occurred while pushing", error);
  } else {
    console.log("Successfully inserted", accountBalance);
  }
};
