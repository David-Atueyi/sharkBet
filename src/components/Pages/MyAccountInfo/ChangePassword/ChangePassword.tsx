import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../Global/FormContent/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LockReset } from "../../../Global/Icons/LockReset";
import { ChevronRight } from "../../../Global/Icons/ChevronRight";
import { changePasswordValidator } from "./changePasswordValidator";
import { toast } from "sonner";
import supabase from "../../../../config/superBaseClient";
import { useMutation } from "@tanstack/react-query";
import { usetoggleResetPassword } from "../../../base/store/useToggleResetPassword";

interface FormData {
  new_password: string;
  confirm_new_password: string;
}

export const ChangePassword = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(changePasswordValidator),
  });

  const { toggleResetPassword, setToggleResetPassword } =
    usetoggleResetPassword((state) => ({
      toggleResetPassword: state.toggleResetPassword,
      setToggleResetPassword: state.setToggleResetPassword,
    }));

  const { mutate } = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await supabase.auth.updateUser({
        password: data.confirm_new_password,
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
      toast.success("password changed successfully");
      methods.reset();
    },
  });

  const handleSubmit = async (data: FormData) => {
    mutate(data);
  };

  const toggleForm = () => {
    !toggleResetPassword
      ? setToggleResetPassword(true)
      : setToggleResetPassword(false);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center border-b-zinc-6 pb-3 border-b-2`}
      >
        <div className="flex items-center gap-1 capitalize">
          <LockReset extraStyle="fill-blue-6" />
          <p className="text-[15px]">Password</p>
        </div>
        <button
          onClick={toggleForm}
          className="text-zinc-4 text-[14px] flex items-baseline gap-1"
        >
          <p>Edit</p>{" "}
          <ChevronRight
            extraStyle={`text-[12px] ${
              toggleResetPassword
                ? "rotate-90 transition-all duration-200 ease-linear delay-50"
                : "rotate-0 transition-all duration-200 ease-linear delay-50"
            }`}
          />
        </button>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className={`flex flex-col gap-2 rounded-b-lg border-zinc-6 ${
            toggleResetPassword
              ? " max-h-screen transition-all duration-700 ease-linear delay-150 border-b-2 border-x-2"
              : " max-h-0 transition-all duration-500 ease-linear delay-50  overflow-hidden"
          }`}
        >
          <div
            className={`px-3 ${
              toggleResetPassword
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-200 ease delay-300"
            }`}
          >
            <label className="capitalize text-zinc-0" htmlFor="new_password">
              new password
            </label>
            <Input
              name="new_password"
              type="text"
              placeholder="new password"
              id="new_password"
              extraStyle="w-[100%]"
            />
            {methods.formState.errors.new_password && (
              <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
                {methods.formState.errors?.new_password.message}
              </p>
            )}
          </div>
          <div
            className={`px-3 ${
              toggleResetPassword
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-200 ease delay-300"
            }`}
          >
            <label
              className="capitalize text-zinc-0"
              htmlFor="confirm_new_password"
            >
              confirm new password
            </label>
            <Input
              name="confirm_new_password"
              type="text"
              placeholder="confirm new password"
              id="confirm_new_password"
              extraStyle="w-[100%]"
            />
            {methods.formState.errors.confirm_new_password && (
              <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
                {methods.formState.errors?.confirm_new_password.message}
              </p>
            )}
          </div>
          <button
            className={`bg-blue-7 p-2 mx-3 mb-2 capitalize font-bold mobile:w-[40%] tablet:w-[19%] rounded place-self-end ${
              toggleResetPassword
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-300 ease delay-500"
            }`}
          >
            submit
          </button>
        </form>
      </FormProvider>
    </>
  );
};
