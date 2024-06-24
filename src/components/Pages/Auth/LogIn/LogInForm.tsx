import { FormProvider, useForm } from "react-hook-form";
import { IAuthInputs } from "../../../base/interface/IAuthInputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../Global/FormContent/Input";
import { Button } from "../../../Global/FormContent/Button";
import { Link, useNavigate } from "react-router-dom";
import { logInFormValidator } from "./logInFormValidator";
import { useMutation } from "@tanstack/react-query";
import supabase from "../../../../config/superBaseClient";
import { toast } from "sonner";

type ILogIn = Omit<IAuthInputs, "user_name" | "date_of_birth">;

export const LogInForm = () => {
  const redirect = useNavigate();

  const methods = useForm<ILogIn>({
    resolver: yupResolver(logInFormValidator),
  });

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

    onSuccess: () => {
      methods.reset();
      redirect("/");
    },
  });

  const handleLogIn = (data: any) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="p-5 rounded shadow-md border-gray-300 bg-zinc-9 flex gap-2 flex-col"
        onSubmit={methods.handleSubmit(handleLogIn)}
      >
        <p className="text-center uppercase text-xl">log in</p>
        {/*  */}
        <div>
          <label className=" capitalize text-zinc-0" htmlFor="email">
            email
          </label>
          <Input
            name="email"
            type="text"
            placeholder="email"
            id="email"
            extraStyle="mobile:w-[30vh] tablet:w-[300px]"
          />
          {methods.formState.errors.email && (
            <p className="text-right mt-1 mobile:text-[11px] tablet:text-sm text-rose-5">
              {methods.formState.errors?.email.message}
            </p>
          )}
        </div>
        {/*  */}
        <div>
          <label className="capitalize text-zinc-0" htmlFor="password">
            password
          </label>
          <Input
            name="password"
            type="password"
            placeholder="password"
            id="password"
            extraStyle="mobile:w-[30vh] tablet:w-[300px]"
          />
          {methods.formState.errors.password && (
            <p className="text-right mt-1 mobile:text-[11px] tablet:text-sm text-rose-5">
              {methods.formState.errors?.password.message}
            </p>
          )}
        </div>
        {/*  */}
        <Button
          className=" px-5 py-3 mt-[3px] w-full text-center bg-blue-6 text-zinc-0 rounded-xl capitalize font-bold"
          nameOfButton="Log In"
        />
        {/*  */}
        <p className="text-center">
          Don't have an account?{" "}
          <Link to={"/auth/sign-up"} className="uppercase text-blue-6">
            sign up
          </Link>
        </p>
        {/*  */}
      </form>
    </FormProvider>
  );
};
