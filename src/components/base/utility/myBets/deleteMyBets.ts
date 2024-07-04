import supabase from "../../../../config/superBaseClient";
import { useMutation } from "@tanstack/react-query";
import { useGetUserInfo } from "../../store/useGetUserInfo";
import { RemoveActiveBetsParams } from "../../interface/IActiveBets";
import { toast } from "sonner";


export const deleteMyBets = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { mutate, error, data } = useMutation({
    mutationFn: async (conditions: RemoveActiveBetsParams) => {
      let query = supabase
        .from("myBets")
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
        toast.error("An error occurred while cashing out, check your internet connection and reload");
      } else {
        toast.success("cash out successfull");
      }
    },
  });

  return { mutate, error, data };
};
