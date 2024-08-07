import { useMutation } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";
import { SelectedBet } from "../../interface/IBetStore";
import { toast } from "sonner";

export const deleteBetSlip = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { mutate, error, data } = useMutation({
    mutationFn: async (conditions: SelectedBet | null) => {
      let query = supabase
        .from("betSlip")
        .delete()
        .eq("userId", userInfo.userId);

      if (conditions) {
        for (const [key, value] of Object.entries(conditions)) {
          if (value !== undefined) {
            query = query.eq(key, value);
          }
        }
      }

      const { error } = await query;

      if (error) {
        toast.error("An error occurred while deleting bet, check your internet connection and reload");
      } 
    },
  });

  return { mutate, error, data };
};
