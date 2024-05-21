import { toast } from "sonner";
import supabase from "../../../config/superBaseClient";

export const getAuthData = async () => {
  const response = await supabase.auth.getSession();

  if (response.error) {
    toast.error(response.error.message);
  }

  return response.data.session;
};
