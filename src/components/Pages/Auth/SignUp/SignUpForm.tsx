import { useNavigate } from "react-router-dom";
import { IAuthInputs } from "../../../base/interface/IAuthInputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidator } from "./signUpFormValidator";
import supabase from "../../../../config/superBaseClient";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { SignUpFormContent } from "./SignUpFormContent";
import { useForm } from "react-hook-form";
import { insertAccountBalanceData } from "../../../base/utility/accountBalance/insertAccountBalanceData";

export const SignUpForm = () => {
  const redirect = useNavigate();

  const methods = useForm<IAuthInputs>({
    resolver: yupResolver(signUpFormValidator),
  });

  const { mutate } = useMutation({
    mutationFn: async (data: IAuthInputs) => {
      const response = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: { username: data.user_name, dob: data.date_of_birth },
        },
      });
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response;
    },

    onError: (error: any) => {
      toast.error(error.message);
    },

    onSuccess: async (response) => {
      methods.reset();
      redirect("/");

      const userId = response.data.user?.id;
      if (userId) {
        await insertAccountBalanceData(userId);
      }
    },
  });

  const handleSignUp = async (data: IAuthInputs) => {
    mutate(data);
  };

  

  return <SignUpFormContent methods={methods} handleSignUp={handleSignUp} />;
};
