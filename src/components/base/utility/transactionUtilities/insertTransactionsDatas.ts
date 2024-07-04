import supabase from "../../../../config/superBaseClient";

export const insertTransactionsDatas = async ({
  transactionType,
  amount,
  transactionStatus,
  userId,
}: {
  transactionType: string;
  amount: string;
  transactionStatus: string;
  userId: string;
}) => {
  const datas = {
    transactionType: transactionType,
    amount: amount,
    status: transactionStatus,
    userId: userId,
  };
  const { error: insertError } = await supabase
    .from("transactions")
    .insert([datas])
    .select();

  if (insertError) {
    return []
  }
};
