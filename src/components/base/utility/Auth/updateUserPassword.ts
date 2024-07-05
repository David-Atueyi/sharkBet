import { useMutation } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { toast } from "sonner";

interface IUpdatePassword {
    confirm_new_password: string;
  }

export const updateUserPassword = () => {
    const { mutate } = useMutation({
        mutationFn: async (data: IUpdatePassword) => {
          const response = await supabase.auth.updateUser({
            password: data.confirm_new_password,
          });
    
          if (response.error) {
            throw("an error occured while trying to reset password");
          }
          return response;
        },
    
        onError: () => {
          toast.error("an error occured while trying to reset password");
        },
    
        onSuccess: () => {
          toast.success("password changed successfully");
        },
      });
      return { mutate};
}
