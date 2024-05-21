import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../Global/FormContent/Input";
import { Button } from "../../../Global/FormContent/Button";
import { Link, useNavigate } from "react-router-dom";
import { IAuthInputs } from "../../../base/interface/IAuthInputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidator } from "./signUpFormValidator";
import supabase from "../../../../config/superBaseClient";
import { toast } from "sonner";

export const SignUpForm = () => {
  const redirect = useNavigate();

  const methods = useForm<IAuthInputs>({
    resolver: yupResolver(signUpFormValidator),
  });

  const handleSignUp = async (data: any) => {
    const response = await supabase.auth.signUp({
      options: { data: { "User Name": data.user_name } },
      email: data.email,
      password: data.password,
    });
    if (response.error) {
      toast.error(response.error.message);
      return;
    }
    methods.reset();
    redirect("/");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="p-5 rounded shadow-md border-gray-300 bg-zinc-9 flex gap-2 flex-col"
        onSubmit={methods.handleSubmit(handleSignUp)}
      >
        <p className="text-center uppercase text-xl">create account</p>
        {/*  */}
        <div>
          <label className="capitalize text-zinc-0" htmlFor="email">
            email
          </label>
          <Input
            name="email"
            type="text"
            placeholder="email"
            id="email"
            extraStyle="mobile:w-[36vh] tablet:w-[300px]"
          />
          {methods.formState.errors.email && (
            <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
              {methods.formState.errors?.email.message}
            </p>
          )}
        </div>
        {/*  */}
        <div>
          <label className=" capitalize text-zinc-0" htmlFor="user_name">
            user name
          </label>
          <Input
            name="user_name"
            type="text"
            placeholder="user name"
            id="user_name"
            extraStyle="mobile:w-[36vh] tablet:w-[300px]"
          />
          {methods.formState.errors.user_name && (
            <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
              {methods.formState.errors?.user_name.message}
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
            extraStyle="mobile:w-[36vh] tablet:w-[300px]"
          />
          {methods.formState.errors.password && (
            <p className="text-right mt-1 mobile:text-[12px] tablet:mobile:text-[12px] tablet:text-smtext-sm text-rose-5">
              {methods.formState.errors?.password.message}
            </p>
          )}
        </div>
        {/*  */}
        <div>
          <label className=" capitalize text-zinc-0" htmlFor="date of birth">
            date of birth
          </label>
          <Input
            name="date_of_birth"
            type="date"
            id="date_of_birth"
            extraStyle="mobile:w-[36vh] tablet:w-[300px]"
          />
          {methods.formState.errors.date_of_birth && (
            <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
              {methods.formState.errors?.date_of_birth.message}
            </p>
          )}
        </div>
        {/*  */}

        <Button
          className=" px-5 py-3 mt-[3px] w-full text-center bg-blue-6 text-zinc-0 rounded-xl capitalize font-bold"
          nameOfButton="Sign Up"
        />
        {/*  */}
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/auth/log-in"} className="uppercase text-blue-6">
            log in
          </Link>
        </p>
        {/*  */}
      </form>
    </FormProvider>
  );
};
