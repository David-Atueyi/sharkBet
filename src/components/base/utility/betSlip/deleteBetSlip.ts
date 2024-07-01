import { useMutation } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { useGetUserInfo } from "../../store/useGetUserInfo";

interface IDeleteSelectedMatchConditions {
  homeClub: string;
  awayClub: string;
  odd?: number;
  marketType?: string;
  oddName?: string;
  date: string;
  time: string;
}

export const deleteBetSlip = () => {
  const { userInfo } = useGetUserInfo((state) => ({
    userInfo: state.userInfo,
  }));

  const { mutate, error, data } = useMutation({
    mutationFn: async (conditions: IDeleteSelectedMatchConditions | null) => {
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
        throw new Error("An error occurred while deleting: " + error.message);
      } else {
        console.log("successfully deleted", data);
      }
    },
  });

  return { mutate, error, data };
};
