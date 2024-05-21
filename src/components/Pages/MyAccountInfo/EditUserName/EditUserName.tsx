import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../Global/FormContent/Input";
import { ChevronRight } from "../../../Global/Icons/ChevronRight";
import { UserIcon } from "../../../Global/Icons/UserIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserNameValidator } from "./editUserNameValidator";
import { useToggleUserInfoForms } from "../../../base/store/useToggleUserInfoForms";

interface FormData {
  old_user_name: string;
  new_user_name: string;
}

export const EditUserName = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(editUserNameValidator),
  });

  const { toggleUserInfoForms, setToggleUserInfoForms } =
    useToggleUserInfoForms((state) => ({
      toggleUserInfoForms: state.toggleUserInfoForms,
      setToggleUserInfoForms: state.setToggleUserInfoForms,
    }));

  const isFormOpen = toggleUserInfoForms.user_name;

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    methods.reset();
  };

     const toggleForm = () => {
       setToggleUserInfoForms({
         user_name: !isFormOpen,
         password: false,
         date_of_birth: false,
       });
     };

  return (
    <>
      <div
        className={`flex justify-between items-center border-b-zinc-6 pb-3 border-b-2`}
      >
        <div className="flex items-center gap-1 capitalize">
          <UserIcon />
          <p className="text-[15px]">User Name</p>
        </div>
        <button
          onClick={toggleForm}
          className="text-zinc-4 text-[14px] flex items-baseline gap-1 "
        >
          <p>Edit</p>{" "}
          <ChevronRight
            extraStyle={`text-[12px] ${
              isFormOpen
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
            isFormOpen
              ? " max-h-screen transition-all duration-700 ease-linear delay-150 border-b-2 border-x-2"
              : " max-h-0 transition-all duration-500 ease-linear delay-50  overflow-hidden"
          }`}
        >
          <div
            className={`px-3 pt-2 ${
              isFormOpen
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-200 ease delay-300"
            }`}
          >
            <label className="capitalize text-zinc-0" htmlFor="old_user_name">
              old user name
            </label>
            <Input
              name="old_user_name"
              type="text"
              placeholder="old user name"
              id="old_user_name"
              extraStyle="w-[100%]"
            />
            {methods.formState.errors.old_user_name && (
              <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
                {methods.formState.errors?.old_user_name.message}
              </p>
            )}
          </div>
          <div
            className={`px-3 ${
              isFormOpen
                ? "visible transition-all duration-300 ease delay-500"
                : "invisible transition-all duration-200 ease delay-300"
            }`}
          >
            <label className="capitalize text-zinc-0" htmlFor="new_user_name">
              new user name
            </label>
            <Input
              name="new_user_name"
              type="text"
              placeholder="new user name"
              id="new_user_name"
              extraStyle="w-[100%]"
            />
            {methods.formState.errors.new_user_name && (
              <p className="text-right mt-1 mobile:text-[12px] tablet:text-sm text-rose-5">
                {methods.formState.errors?.new_user_name.message}
              </p>
            )}
          </div>
          <button
            className={`bg-blue-7 p-2 mx-3 mb-2 capitalize font-bold mobile:w-[40%] tablet:w-[19%] rounded place-self-end ${
              isFormOpen
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
