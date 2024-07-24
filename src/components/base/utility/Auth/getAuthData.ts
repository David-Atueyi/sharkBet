import { toast } from "sonner";
import supabase from "../../../../config/superBaseClient";

export const getAuthData = async () => {
  const response = await supabase.auth.getSession();

  if (response.error) {
    toast.error(
      "An error occured while loading your data, check your internet connection and reload"
    );
    return null;
  }

  return response.data.session;
};
