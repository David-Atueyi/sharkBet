import { FormProvider, useForm } from "react-hook-form";
import { IAuthInputs } from "../../../base/interface/IAuthInputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../Global/FormContent/Input";
import { Button } from "../../../Global/FormContent/Button";
import { Link } from "react-router-dom";
import { logInFormValidator } from "./logInFormValidator";

export const LogInForm = () => {
  const methods = useForm<Omit<IAuthInputs, "email" | "date_of_birth">>({
    resolver: yupResolver(logInFormValidator),
  });

  const handleLogIn = (data: any) => {
    console.log(data);
    methods.reset();
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
          <label className=" capitalize text-zinc-0" htmlFor="user_name">
            user name
          </label>
          <Input
            name="user_name"
            type="text"
            placeholder="user name"
            id="user_name"
            extraStyle="sm:w-[300px]"
          />
          {methods.formState.errors.user_name && (
            <p className="text-right mt-1 text-sm text-rose-5">
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
            extraStyle="sm:w-[300px]"
          />
          {methods.formState.errors.password && (
            <p className="text-right mt-1 text-sm text-rose-5">
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
          <Link to={"/auth/sign-up"} className="uppercase text-blue-7">
            sign up
          </Link>
        </p>
        {/*  */}
      </form>
    </FormProvider>
  );
};
