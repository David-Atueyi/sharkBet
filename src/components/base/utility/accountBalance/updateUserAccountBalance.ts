import { useMutation } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";

export const updateUserAccountBalance = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { mutate, error, data } = useMutation({
    mutationFn: async (accountBalance:string) => {
      const { data: balance, error } = await supabase
        .from("accountBalance")
        .update({ balance: accountBalance })
        .eq("userId", userInfo.userId)
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return balance;
    },
  });

  return { mutate, error, data };
};
