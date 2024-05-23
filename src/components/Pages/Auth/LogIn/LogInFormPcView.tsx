import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../Global/FormContent/Input";
import { NavLink } from "react-router-dom";
import { Button } from "../../../Global/FormContent/Button";
import { logInFormValidator } from "./logInFormValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuthInputs } from "../../../base/interface/IAuthInputs";
import { useMutation } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { toast } from "sonner";
import { useUserIsActive } from "../../../base/store/useUserIsActive";

type ILogIn = Omit<IAuthInputs, "user_name" | "date_of_birth">;

export const LogInFormPcView = () => {
  const methods = useForm<ILogIn>({
    resolver: yupResolver(logInFormValidator),
  });

  const { setUserIsActive } = useUserIsActive((state) => ({
    setUserIsActive: state.setUserIsActive,
  }));

  const { mutate } = useMutation({
    mutationFn: async (data: ILogIn) => {
      const response = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (response.error) {
        throw new Error(response.error.message);
      }
      return response;
    },

    onError: (error: any) => {
      toast.error(error.message);
    },

    onSuccess: async () => {
      methods.reset();
      setUserIsActive(true);
    },
  });

  const handleLogIn = (data: any) => {
    mutate(data);
  };

  return (
    <>
      <div className="hidden pc:block">
        <FormProvider {...methods}>
          <form
            className="flex gap-2"
            onSubmit={methods.handleSubmit(handleLogIn)}
          >
            <div className="relative">
              <Input
                name="email"
                type="text"
                placeholder="email"
                id="email"
                extraStyle="w-[162px] h-[30px] text-xs"
              />
              {methods.formState.errors.email && (
                <div>
                  <p className="text-right mt-2 ml-3 z-30 text-xs text-rose-5 absolute bg-zinc-1 px-2 py-1 rounded">
                    {methods.formState.errors?.email.message}
                  </p>
                  <p className="h-[10px] w-[10px] bg-zinc-1 absolute left-[80px] rotate-45 mt-1"></p>
                </div>
              )}
            </div>
            <div className="relative">
              <Input
                name="password"
                type="password"
                placeholder="password"
                id="password"
                extraStyle="w-[162px] h-[30px] text-xs"
                togglePasswordExtraStyle="top-[4px]"
              />
              {methods.formState.errors.password && (
                <div>
                  <p className="text-right mt-2 ml-4 z-30 text-xs text-rose-5 absolute bg-zinc-1 px-2 py-1 rounded">
                    {methods.formState.errors?.password.message}
                  </p>
                  <p className="h-[10px] w-[10px] bg-zinc-1 absolute left-[80px] rotate-45 mt-1"></p>
                </div>
              )}
            </div>
            <Button
              className="h-[30px] text-xs border-solid border-2 border-blue-5 rounded-md font-bold px-[15px]"
              nameOfButton="Log In"
            />
          </form>
        </FormProvider>
      </div>
      <NavLink
        to={"/auth/log-in"}
        className="text-xs border-solid border-2 border-blue-5 rounded-md font-bold py-[5px] px-[10px] pc:hidden"
      >
        log in
      </NavLink>
    </>
  );
};
